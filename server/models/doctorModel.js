import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema(
  {
    // no speciality, address,
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
    image: {
      type: String,
    },
    degree: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
    },
    about: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
    },
    fees: {
      type: Number,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
    slots_booked: {
      type: Object,
      default: {},
    },
  },
  {
    minimize: false,
  }
);

const doctorModel =
  mongoose.models.doctor || mongoose.model("doctor", doctorSchema);

export default doctorModel;
