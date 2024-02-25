const {Router} = require("express");
const router = Router();
const imageSaver = require("../middlewares/imageSaver")

const cultureControler = require("../controllers/cultureController")

router.post("/addspots", cultureControler.addMainSpots);
router.post("/addCulture", imageSaver, cultureControler.createCulture)
router.get("/getCultures", cultureControler.getCultures)
router.get("/getSpots", cultureControler.getSpots)
router.post("/getUserCultures", cultureControler.getUserCultures)
router.post("/getCultureDetails", cultureControler.getCultureDetails)

module.exports = router;