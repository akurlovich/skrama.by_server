import { Schema, model } from "mongoose";
import { IProductColor } from "../types/IProductColor";

const ProductColorSchema: Schema = new Schema<IProductColor>({
  title: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
    default: '',
  },
  productID: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  typeID: {
    type: Schema.Types.ObjectId,
    ref: 'Type',
    required: true,
  },
},
{ timestamps: true },
);

export default model<IProductColor>('ProductColor', ProductColorSchema);