import express from "express";
import { getMenu } from "../../controllers/menu/menu.js";

const router = express.Router();

router.get("/api/menus", getMenu);

export default router;
