import mongoose from "mongoose";

const { Schema } = mongoose;

const componentsPropsSchema = new Schema({
  component: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Component",
    required: true
  },
  prop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Props",
    required: true
  },
  value: {
    type: String,
    required: true
  }
}, { timestamps: true });

const ComponentsProps = mongoose.models.ComponentsProps || mongoose.model("ComponentsProps", componentsPropsSchema, "ComponentsProps");

export default ComponentsProps;