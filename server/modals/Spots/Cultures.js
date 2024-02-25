const mongoose = require("mongoose");

const cultureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  history: {
    type: String,
    required: true,
  },
  thingsToDo: [
    {
      type: String,
    },
  ],
  spots: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Spots",
  },
});

const Cultures = mongoose.model("Cultures", cultureSchema);

module.exports = Cultures;
