import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  mongoose.connection.on(`connected`, () =>
    console.log("database connected successfully ")
  );
};

export default connectDB;
