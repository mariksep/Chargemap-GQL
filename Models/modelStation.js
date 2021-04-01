import mongoose from "mongoose";

const Schema = mongoose.Schema;

const stationsSchema = new Schema({
  id: String,
  Title: String,
  Town: String,
  AddressLine1: String,
  StateOrProvince: String,
  Postcode: Number,
  Location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
    },
  },
  Connections: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Connections",
    },
  ],
});

export default mongoose.model("station", stationsSchema);
