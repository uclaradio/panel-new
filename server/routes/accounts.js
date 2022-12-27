import express from "express";
import { createAccount, getAccounts } from "../controllers/accounts.js";

const router = express.Router();

router.get("/", getAccounts);
router.post("/", createAccount);

export default router;