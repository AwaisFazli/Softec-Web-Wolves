const {Router} = require("express");
const router = Router();
const imageSaver = require("../middlewares/imageSaver")

const authController= require("../controllers/authController");

router.post("/signup", imageSaver, authController.SignUp);
router.post("/signin", authController.SignIn);
router.post("/adminSignup", authController.addAdmin)
router.post("/adminSignin", authController.adminSignin)

module.exports = router;