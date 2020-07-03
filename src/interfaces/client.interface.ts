import { Document } from "mongoose";

export interface IClient extends Document {
  email: string;
  name: string;
  phone: string;
  category:string;
}

export const enumsCategory = {
  values: ["CONSULT","BUILD"],
  message: "{VALUE} no es valido"
}