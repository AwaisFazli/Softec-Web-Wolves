const {Router} = require("express")
const router = Router()

const testControllers = require("../controllers/test")

router.post("/testString", testControllers.CheckConnection)

module.exports = router