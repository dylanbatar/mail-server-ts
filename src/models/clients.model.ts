import mongoose, { Schema } from "mongoose";
import { IClient, enumsCategory } from "../interfaces/client.interface";

const CLIENT_MODEL: Schema = new Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  category: { type: String, required: false, enum: enumsCategory },
});

export default mongoose.model<IClient>("clients", CLIENT_MODEL);
