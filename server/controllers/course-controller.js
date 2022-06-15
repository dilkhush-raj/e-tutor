import mongoose from "mongoose";
import Course from "../models/course.js";
import User from "../models/user.js";

export const getAllCourse = async (req, res, next) => {
  let courses;
  try {
    courses = await Course.find();
  } catch (err) {
    return console.log(err);
  }
  if (!courses) {
    return res.status(404).json({ message: "No course found" });
  }
  return res.status(200).json({ courses });
};

export const addCourse = async (req, res, next) => {
  const { title, description, image, level, time, price, video, user } =
    req.body;

  let exitingUser;
  try {
    exitingUser = await User.findById(user);
  } catch (err) {
    return console.log(err);
  }
  if (!exitingUser) {
    return res.status(400).json({ message: "Unable to find user by this id" });
  }
  const course = new Course({
    title,
    description,
    image,
    level,
    time,
    price,
    video,
    user,
  });
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await course.save({ session });
    exitingUser.courses.push(course);
    await exitingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  return res.status(200).json({ course });
};

export const updateCourse = async (req, res, next) => {
  const { title, description, image, level, time, price, video } = req.body;
  const courseId = req.params.id;
  let course;
  try {
    course = await Course.findByIdAndUpdate(courseId, {
      title,
      description,
      image,
      level,
      time,
      price,
      video,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!course) {
    return res.status(500).json({ message: "Unable to update the course" });
  }
  return res.status(200).json({ course });
};

export const getById = async (req, res, next) => {
  const id = req.params.id;
  let course;
  try {
    course = await Course.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!course) {
    return res.status(404).json({ message: "No Course Found" });
  }
  return res.status(200).json({ course });
};

export const deleteCourse = async (req, res, next) => {
  const id = req.params.id;

  let course;
  try {
    course = await Course.findByIdAndRemove(id).populate("user");
    await course.user.courses.pull(course);
    await course.user.save();
  } catch (err) {
    console.log(err);
  }
  if (!course) {
    return res.status(500).json({ message: "Unable to delete" });
  }
  return res.status(200).json({ message: "Successfully Deleted" });
};

export const getByUserId = async (req, res, next) => {
  const userId = req.params.id;
  let userCourses;
  try {
    userCourses = await User.findById(userId).populate("courses");
  } catch (err) {
    return console.log(err);
  }
  if (!userCourses) {
    return res.status(404).json({ message: "No course found" });
  }
  return res.status(200).json({ courses: userCourses });
};
