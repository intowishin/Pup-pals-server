const router = require("express").Router();
const Dog = require("../models/Dog.model");

router.get("/:dogID", (req, res) => {
    Dog.findById(req.params.dogID)
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        console.log(err);
      });
  });

router.post("/:dogID", (req, res) => {
    const { name, age, size, gender, breed, about } = req.body;
    Dog.findByIdAndUpdate(
      req.params.dogID,
      { name, age, size, gender, breed, about },
      { new: true }
    )
      .then((updatedDog) => {
        res.status(201).json(updatedDog);
      })
      .catch((err) => {
        console.log(err);
      });
  });