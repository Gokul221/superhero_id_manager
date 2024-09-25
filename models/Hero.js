/* Used to store and organize data models or schemas that define 
the structure and behavior of the data used in your application. 
The data models defined here are used in API routes to interact
with the MongoDB.*/

import mongoose from "mongoose";

const HeroSchema = new mongoose.Schema({
  identifier: {
    type: Number,
    unique: true,
  },
  superHero: {
    type: String,
    required: [true, "Please name the hero"],
    unique: true,
    trim: true,
  },
  realName: {
    type: String,
    required: true,
    maxlength: [200, "Keep real name short"],
  },
});

export default mongoose.models.Hero || mongoose.model("Hero", HeroSchema);
