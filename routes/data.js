const express = require("express");
const router = express.Router();
const {
  getAllMentor,
  getAllMentee,
  matchMyersBriggs,
  insertIntoMentor,
  insertIntoMentee,
} = require(`../db/models/data.js`);

router.get("/", function (req, res) {
  res.json({ message: "the server is working..." });
});

router.get("/mentor", async function (req, res) {
  const items = await getAllMentor();
  res.json({ success: true, payload: items });
});
router.get("/mentee", async function (req, res) {
  const items = await getAllMentee();
  res.json({ success: true, payload: items });
});

router.get("/myersBriggs", async function (req, res) {
  const items = await matchMyersBriggs();
  res.json({ success: true, payload: items });
});

router.post("/mentor", async function (req, res) {
  let body = req.body;
  if (!body.mentor) {
    //When fetching, make sure we add mentor
    return res.send("404 Error");
  }
  const items = await insertIntoMentor(body);
  req.json(items);
});

router.post("/mentee", async function (req, res) {
  const body = req.body;
  if (!body.mentee) {
    return res.send("404 Error");
  }
  const items = await insertIntoMentee;
  req.json(items);
});

module.exports = { router };
