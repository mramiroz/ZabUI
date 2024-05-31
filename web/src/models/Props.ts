import mongoose from "mongoose";

const { Schema } = mongoose;

const propsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  required: {
    type: Boolean,
    required: true
  }
}, { timestamps: true });

const Props = mongoose.models.Props || mongoose.model("Props", propsSchema, "Props");

export default Props;