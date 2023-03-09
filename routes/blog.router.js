import express from "express";
import blogController from "../controllers/blog.controller.js";

const router = express.Router();

router.post("/", blogController.createPost);
router.post("/comentario", blogController.createComment);
router.get("/", blogController.getPosts);

export default router;