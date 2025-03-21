import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      default: "not selected",
    },
    dob: {
      type: String,
      default: "000000000",
    },
    phone: {
      type: String,
      default: "00000000000",
    },
    fees: {
      type: Number,
      required: true,
    },
  },
  {
    minimize: false,
  }
);

const userModel =
  mongoose.models.doctor || mongoose.model("doctor", doctorSchema);

export default userModel;
