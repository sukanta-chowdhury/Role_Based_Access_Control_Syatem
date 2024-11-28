const express = require("express");
const {register, login}=require("../controller/authController");
// Create a new Express router instance.
const router =express.Router();
// When a POST request is made to `/register`, the `register` function from the authController is executed.
router.post("/register", register);
router.post("/login", login);

module.exports=router;