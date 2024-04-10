import mongoose, { Schema, Model, Document } from 'mongoose';

const mongodbUri = process.env.MONGODB_URI || '';
mongoose.connect(mongodbUri);
mongoose.Promise = global.Promise;

interface IComponent extends Document {
  code: string;
  title: string;
  description: string;
  link: string;
}

const schema = new Schema<IComponent>({
  code: String,
  title: String,
  description: String,
  link: String,
});

const Component: Model<IComponent> = mongoose.models.Component || mongoose.model<IComponent>('Component', schema);

export default Component;