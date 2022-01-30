const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");
const isAuthenticated = require("../middlewares/authMiddleware").protect;

// all user related routes

router.route("/signUp").post(userController.signUp);
router.route("/login").post(userController.loginUser);

// booking appointment route
router
  .route("/book-an-appointment")
  .post(isAuthenticated, userController.bookAnAppointment);

module.exports = router;
