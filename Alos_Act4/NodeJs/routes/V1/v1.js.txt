const express = require("express");
const joi = require("joi");
const route = express.Router();
const Hopitals = require("../../Hopitals.json");
const validatee = require("../routes/middlewares/validate");

route.get("/", (req, res) => {
  res.json(Hopitals);
});
route.get("/:id", (req, res) => {
  const index = Hopitals.find((e) => e.id === req.params.id);
  index ? res.status(200).json(index) : res.status(404).send("NOT FOUND");
});
route.post("/", validatee, (req, res) => {
  const id = Hopitals[Hopitals.length - 1].id + 1;
 Hopitals.push({ id, ...req.body });
  //throw error to test error handling
  res.status(200).send("added succefuly");
});
route.put("/:id", validatee, (req, res) => {
  const index = Hopitals.find((e) => e.id === req.params.id);
  Restaurants[index] = req.body;
  res.status(200).send("Updated  succefuly");
});
route.delete("/:id", (req, res) => {
  const newhopital = Hopitals.filter((e) => e.id != req.params.id);
  Hopitals = newrestaurant;
  res.status(200).send("deleted   succefuly");
});

module.exports = route;