const {Router} = require("express");
const router = Router();
const auth = require("../middlewares/auth")

const userController= require("../controllers/userController");

router.get("/getUser", auth, userController.getUser);

module.exports = router;