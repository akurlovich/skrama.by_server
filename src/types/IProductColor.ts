import { Document, Schema } from "mongoose";

export interface IProductColor extends Document {
  title: string,
  coverImage: string,
  productID: Schema.Types.ObjectId,
  typeID: Schema.Types.ObjectId,
}