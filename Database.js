import mongoose from "mongoose"
const DatabaseConnection = () => {
    mongoose.connect("mongodb://localhost:27017/sessions")
        .then(() => {
            console.log("Database connected successfully");
        })
        .catch((error) => {
            console.error("Database connection error:", error);
        });
}

export default DatabaseConnection