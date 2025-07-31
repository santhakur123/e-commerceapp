import express from "express"
import {getCommerce,getShow } from "../controller/e.js"

const router =express.Router();

router.get("/",getCommerce);
router.get("/:id",getShow);

export default router;