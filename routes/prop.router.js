import express from "express";
import propController from "../controllers/prop.controller.js";

const router = express.Router();

router.post("/", propController.createProp);
router.put("/", propController.updateProp);
router.delete("/:id", propController.deleteProp);
router.get("/", propController.getProps);
router.get("/:id", propController.getPropById);

export default router;
