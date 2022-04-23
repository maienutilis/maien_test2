import express from "express";
const router = express.Router();

import { getTerms } from '../controllers'

// middleware
//import { requireSignin } from "../middlewares";
// controllers

/*import {
  register,
  login,
  currentUser,
  forgotPassword,
} from "../controllers/auth";
*/
/*
router.post("/register", register);
router.post("/login", login);
router.get("/current-user", requireSignin, currentUser);
router.post("/forgot-password", forgotPassword);
*/

router.get("/terms", getTerms);

module.exports = router;