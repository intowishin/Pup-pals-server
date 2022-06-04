const router = require("express").Router();
const User = require("../models/User.model");

router.get("/:userID", (req, res) => {
    User.findById(req.params.userID)
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        console.log(err);
      });
  });

router.post("/:userID", (req, res) => {
    const { name, age, gender, about } = req.body;
    User.findByIdAndUpdate(
      req.params.userID,
      { name, age, gender, about },
      { new: true }
    )
      .then((updatedUser) => {
        res.status(201).json(updatedUser);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  module.exports = router;
