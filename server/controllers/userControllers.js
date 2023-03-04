import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";
import nodemailer from "nodemailer";
import Mailgun from "mailgun-js";
import { UserModel } from "../models/userModel.js";

const createToken = (_id, email) => {
    return jwt.sign({ _id, email }, process.env.SECRET_STRING, { expiresIn: "3d" });
};

const mailgun = () =>
    Mailgun({
        apiKey: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN,
    });

// =====================

export const signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ message: "all fields must be filled" });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "valid email nahi hai" });
        }

        const emailExists = await UserModel.findOne({ email });
        if (emailExists) {
            return res.status(400).json({ message: "email already in use" });
        }

        // validate password
        if (!validator.isStrongPassword(password)) {
            return res.status(400).json({ message: "password is not strong" });
        }

        // encrypt password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const user = await UserModel.create({
            email,
            password: hash,
            name: `${firstName} ${lastName}`,
        });

        const token = createToken(user._id, user.email);

        res.status(200).json({ user, token });
    } catch (err) {
        res.status(400).json({ message: err.message });
        console.log(err);
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "user ka astitva nahi" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Incorrect Password" });
        }

        const token = createToken(user._id, user.email);

        res.status(200).json({ user, token });
    } catch (err) {
        res.status(400).json({ message: err.message });
        console.log(err);
    }
};

export const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "user ka astitva nahi" });
        }

        const resetToken = jwt.sign({ _id: user._id }, process.env.SECRET_STRING, {
            expiresIn: "30m",
        });
        console.log(
            "🚀 ⚡ file: userControllers.js:95 ⚡ forgotPassword ⚡ resetToken:",
            resetToken
        );

        const encodedResetToken = encodeURIComponent(resetToken.replace(/\./g, "%2E"));
        console.log(
            "🚀 ⚡ file: userControllers.js:98 ⚡ forgotPassword ⚡ encodedResetToken:",
            encodedResetToken
        );

        user.resetPasswordToken = resetToken;
        user.resetPasswordTokenExpiresIn = Date.now() + 3600000;

        await user.save();

        const emailInfo = {
            from: process.env.SMTP_USERNAME,
            to: email,
            subject: "Password Reset Link",
            html: `
                <h2>Please click on the following link to reset your password:</h2>
                <p>${process.env.CLIENT_URL}/auth/reset-password/${encodedResetToken}</p>
            `,
        };

        mailgun()
            .messages()
            .send(emailInfo, (err, body) => {
                if (err) {
                    console.log(err);
                    return res
                        .status(500)
                        .send({ message: "Something went wrong while sending email" });
                } else {
                    console.log("message sent!");
                    return res.status(200).send({ message: "Email sent successfully" });
                }
            });
    } catch (err) {
        res.status(400).json({ message: err.message });
        console.log(err);
    }
};

export const resetPassword = async (req, res) => {
    const { newPassword, encodedResetToken } = req.body;
    console.log(
        "🚀 ⚡ file: userControllers.js:138 ⚡ resetPassword ⚡ encodedResetToken:",
        encodedResetToken
    );

    if (encodedResetToken) {
        try {
            const decodedToken = decodeURIComponent(encodedResetToken.replace(/%2E/g, "."));
            console.log(
                "🚀 ⚡ file: userControllers.js:144 ⚡ resetPassword ⚡ decodedToken:",
                decodedToken
            );

            const decodedData = jwt.verify(decodedToken, process.env.SECRET_STRING);
            console.log(
                "🚀 ⚡ file: userControllers.js:148 ⚡ resetPassword ⚡ decodedData:",
                decodedData
            );

            const user = await UserModel.findOne({
                _id: decodedData._id,
                resetPasswordToken: decodedToken,
            });
            if (!user) {
                return res.status(400).json({ message: "Invalid Token or Token Expired" });
            }

            if (user.expiresIn && user.expiresIn < Date.now()) {
                const newToken = jwt.sign({ _id: user._id }, process.env.SECRET_STRING, {
                    expiresIn: "30m",
                });
                user.resetPasswordToken = newToken;
                user.expiresIn = new Date(Date.now() + 3600000);
                await user.save();
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newPassword, salt);

            user.password = hashedPassword;
            user.resetPasswordToken = "";

            await user.save();

            return res.status(200).json({ message: "Password Reset Successful" });
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    } else {
        return res.status(400).json({ message: "Something went wrong" });
    }
};
