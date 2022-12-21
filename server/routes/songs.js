import express from "express";
import {getSongs} from "../controllers/songs.js";

const router = express.Router();

router.get("/", getSongs);

export default router;