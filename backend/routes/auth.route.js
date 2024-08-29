const express = require("express");
const authController = require("../controllers/auth.controller");
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.get("/users", authController.get_all_users);
router.delete("/users/:id", authController.delete_user);
module.exports = router;
