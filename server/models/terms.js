import mongoose from "mongoose";
const { Schema } = mongoose;

const termsSchema = new Schema(
  {
    type: Number,
    terms: [String]
}
);

export default mongoose.model("Terms", termsSchema,'TERMS');