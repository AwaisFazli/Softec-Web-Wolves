const {Router} = require("express")
const router = Router()
const imageSaver = require("../middlewares/imageSaver")

const sponsorController = require("../controllers/sponsorController")

router.post("/addSponsor",imageSaver, sponsorController.addSponsor)
router.get("/getSponsors", sponsorController.getSponsors)

module.exports = router