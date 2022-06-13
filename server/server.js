import express from "express";
import mongoose from "mongoose";
import courseRouter from "./routes/course-routes.js";
import router from "./routes/user-routes.js";
// const cors = require("cors");


const app = express();

const db =
  "mongodb+srv://dilkhushraj:dilkhush2004@cluster0.hup8qb2.mongodb.net/?retryWrites=true&w=majority";

// app.use(cors());
app.use(express.json());

app.use("/api/user", router);
app.use("/api/course", courseRouter)
mongoose
  .connect(db)
  .then(() => app.listen(5000))
  .then(() =>
    console.log("connected to database and listening to localhost:5000")
  )
  .catch((err) => console.log(err));

