import express from "express";
import { createShow, getShows } from "../controllers/shows.js";

const router = express.Router();

router.get("/", getShows);
router.post("/", createShow);

export default router;