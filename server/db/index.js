require("dotenv").config();
import mongoose from "mongoose";

const dbConnect = mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR => ", err));


const db = dbConnect.connection;

export default db;