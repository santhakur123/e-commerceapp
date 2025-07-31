import express from "express"
import {getReview} from "../controller/review1.js";

const router=express.Router();
router.post("/",getReview);

export default router;