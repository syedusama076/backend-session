import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    profession: String,
    age: Number,
    isActive: Boolean
})

const User = mongoose.model("User", userSchema);
export default User;