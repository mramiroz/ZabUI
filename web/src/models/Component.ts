import mongoose from "mongoose";

const { Schema } = mongoose;

const componentSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  props: { type: Object, required: true },
  import: { type: String, required: true },
  code: { type: String, required: true },
  component: { type: String, required: true },
  likes: { type: Number, default: 0 }
}, { timestamps: true });

const Component = mongoose.models.Component || mongoose.model("Component", componentSchema, "Components")

export default Component;