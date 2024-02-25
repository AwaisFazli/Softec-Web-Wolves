const sponsorController = {};
const Sponsor = require("../modals/SponsorSchema");

sponsorController.addSponsor = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(req.imageUrl);

    const newSpot = new Sponsor({
      name: name,
      imageUrl: req.imageUrl,
    });

    const savedSpot = await newSpot.save();

    res.status(201).json(savedSpot);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

sponsorController.getSponsors = async (req, res) => {
  try {
    const savedSpot = await Sponsor.find();

    res.status(201).json(savedSpot);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = sponsorController;
