import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true, lowercase: true },
    password: { type: String, required: true },
    id: { type: String },
});

export const UserModel = mongoose.model("User", userSchema);
