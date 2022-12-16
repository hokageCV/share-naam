import jwt  from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import validator from 'validator';
import { UserModel } from '../models/userModel.js';

const createToken = (_id, email)=>{
    return jwt.sign({_id, email}, process.env.SECRET_STRING, {expiresIn: '3d'})
}

export const signup = async (req, res) => {
    const {firstName, lastName, email, password} = req.body;

    try{
        if(!email || !password){
            throw Error("all fields must be filled")
        }

        if(!validator.isEmail(email)){ 
            throw Error("valid email nahi hai ")
        }

        const emailExists = await UserModel.findOne({email});
        if(emailExists){
            return res.status(400).json({ message: "email already in use" });
        }

        // validate password
        if(!validator.isStrongPassword(password)){ 
            throw Error("password is not strong")
        }

        // encrypt password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const user = await UserModel.create({email, password: hash, name:`${firstName} ${lastName}`});

        const token = createToken(user._id, user.email);

        res.status(200).json({user, token})
    }
    catch(err){
        res.status(400).json({error: err.message})
        console.log( err );
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(400).json({ message: "user ka astitva nahi" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password )
        if(!isPasswordCorrect){
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = createToken(user._id, user.email)

        res.status(200).json({user, token})
    }
    catch(err){
        res.status(400).json({error: err.message})
        console.log( err );
    }
}