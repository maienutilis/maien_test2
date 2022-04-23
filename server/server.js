import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
require("dotenv").config();

// connect to DB
import db from "./db"

const app = express();

// middlewares
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
  })
);

// autoload routes
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));