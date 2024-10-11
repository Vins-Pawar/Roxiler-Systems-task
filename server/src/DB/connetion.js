import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectToMongoDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URL}/${DB_NAME}`
        );
        console.log("mongoDB Connection sucessful");

        console.log(
            `mongoDb connected host : ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log("MongoDB connection error", error);
        process.exit(1);
    }
};

export default connectToMongoDB;
