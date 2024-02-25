const mongoose = require("mongoose");

const sponsorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

const Sponsor = mongoose.model("Sponsor", sponsorSchema);

module.exports = Sponsor;
