import express from "express";
import {
  addCourse,
  deleteCourse,
  getAllCourse,
  getById,
  getByUserId,
  updateCourse,
} from "../controllers/course-controller.js";
const courseRouter = express.Router();

courseRouter.get("/", getAllCourse);
courseRouter.post("/add", addCourse);
courseRouter.put("/update/:id", updateCourse);
courseRouter.get("/:id", getById);
courseRouter.delete("/:id", deleteCourse);
courseRouter.get("/user/:id", getByUserId)

export default courseRouter;
