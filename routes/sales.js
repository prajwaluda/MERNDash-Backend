import express from "express";
import { getOverallStat } from "../controllers/sales.js";

const router =express.Router();
router.get("/overview",getOverallStat);

export default router;