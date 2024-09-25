/* eslint-disable import/no-anonymous-default-export */
import dbconnect from "@/db/dbconnect";
import Hero from "@/models/Hero";
import index from "@/pages";

dbconnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const heroes = await Hero.find({}); // fetch all records from DB
        res.status(200).json({ success: true, hero: heroes});
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const hero = await Hero.create(req.body);
        res.status(200).json({ success: true, hero: hero });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
