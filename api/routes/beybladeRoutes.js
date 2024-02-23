import express from "express";

import {
  getAllBeybladesController,
  getBeybladeByIdController,
  createBeybladeController,
  updateBeybladeController,
  deleteBeybladeController,
} from "../controllers/beybladeController.js";

const router = express.Router();

router.get("/", getAllBeybladesController);
router.get("/:id", getBeybladeByIdController);
router.post("/", createBeybladeController);
router.put("/:id", updateBeybladeController);
router.delete("/:id", deleteBeybladeController);

export default router;
