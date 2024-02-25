const {Router} = require("express")
const router = Router();

const testRoutes = require("./testRoutes")
const authRoutes = require("./authRoutes")
const userRoutes = require("./userRoutes")
const cultureRoutes = require("./cultureRoutes")
const checkoutRoutes = require("./checkoutRoutes")
const sponsorRoutes = require("./sponsorRoutes")

router.use(testRoutes)
router.use(authRoutes)
router.use(userRoutes)
router.use(cultureRoutes)
router.use(checkoutRoutes)
router.use(sponsorRoutes)

module.exports = router;