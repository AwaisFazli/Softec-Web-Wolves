const cultureController = {};
const Spots = require("../modals/Spots/MainSpots");
const Culture = require("../modals/Spots/Cultures");
const mongoose = require("mongoose")

cultureController.addMainSpots = async (req, res) => {
  try {
    const { name, imgUrl } = req.body;

    const newSpot = new Spots({
      name,
      imgUrl,
    });

    const savedSpot = await newSpot.save();

    res.status(201).json(savedSpot);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

cultureController.createCulture = async (req, res) => {
  try {
    const { name, description, history, spotsName, thingsToDo } = req.body;
    const spots = await Spots.findOne({ name: spotsName });
    console.log(req.body)
    if (!spots) {
      return res.status(404).json({ error: "Spots not found" });
    }
    const newCulture = new Culture({
      name,
      imgUrl: req.imageUrl,
      description,
      history,
      spots: spots._id,
      thingsToDo: thingsToDo.split(",").map((item) => item.trim()),
    });

    const savedCulture = await newCulture.save();

    res.status(201).json(savedCulture);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

cultureController.getCultures = async (req, res) => {
  try {
    const cultures = await Culture.find();
    res.status(200).json(cultures);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

cultureController.getSpots = async (req, res) => {
  try {
    const cultures = await Spots.find();
    res.status(200).json(cultures);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

cultureController.getUserCultures = async (req, res) => {
  try {
    const spotId = new mongoose.Types.ObjectId(req.body.id) 
    const cultures = await Culture.find({ spots: spotId});
    res.status(200).json(cultures);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

cultureController.getCultureDetails = async (req, res) => {
  try {
    const spotId = new mongoose.Types.ObjectId(req.body.id) 
    const cultures = await Culture.findById(req.body.id)
    res.status(200).json(cultures);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = cultureController;
