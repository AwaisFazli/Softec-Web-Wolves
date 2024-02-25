const {Router} = require("express")
const router = Router()

const checkoutController = require("../controllers/checkoutController")

router.post("/create-checkout-session", checkoutController.Checkout)

module.exports = router