import mongoose from "mongoose";

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  level:{
    type: String,
    // required: true,
  },
  time:{
    type: Number,
    // required: true,
  },
  price:{
    type: Number,
    // required: true,
  },
  video:{
    type: String,
    // required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Course", courseSchema);
