import express from "express";
const router = express.Router();

import { ValidateTokenExpiry } from "../controllers/AuthController.js";
import { protect } from "../middleware/AuthMiddleware.js";

router.route('/validate-token-expiry').get(protect, ValidateTokenExpiry);

export default router;