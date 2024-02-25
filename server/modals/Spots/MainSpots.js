const mongoose = require("mongoose");

const spotsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

const Spots = mongoose.model("Spots", spotsSchema);

module.exports = Spots;
