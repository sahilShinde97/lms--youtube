import TryCatch from "../middlewares/TryCatch.js";
import { Courses } from "../models/Courses.js";

export const createCourse = TryCatch(async (req, res) => {
    const { title, description, category, createdBy, duration, price } = req.body;
  
    const image = req.file; // <-- multer stores it here
  
    if (!image) {
      return res.status(400).json({ message: "Image file is missing." });
    }
  
    await Courses.create({
      title,
      description,
      category,
      createdBy,
      image: image.path, // <-- use image.path, not req.image
      duration,
      price,
    });
  
    res.status(201).json({
      message: "Course Created Successfully",
    });
  });
  
