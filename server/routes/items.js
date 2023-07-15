var express = require("express");
var router = express.Router();
var Item = require("../models/itemsModel");
var generateData = require("../models/generate-data");

generateData();

router.get("/", function (req, res, next) {

  const { size } = req.query;

  if (size) {
    Item.find({ size: size.toLowerCase() })
      .then((items) => {
        if (items.length > 0) {
          res.status(200).send(items);
        } else {
          res.status(404).send("No items found with the specified size.");
        }
      })
      .catch((error) => {
        res
          .status(500)
          .send("An error occurred while fetching items from the database.");
      });
  } else {
    Item.find()
      .then((items) => {
        res.status(200).send(items);
      })
      .catch((error) => {
        res
          .status(500)
          .send("An error occurred while fetching items from the database.");
      });
  }
});

router.post("/", function (req, res, next) {
  // items.push(req.body);
  // res.status(201);
  // res.send(req.body);

  const newItem = new Item(req.body);
  newItem
    .save()
    .then((item) => {
      res.status(201).send(item);
    })
    .catch((error) => {
      res
        .status(500)
        .send("An error occurred while saving the item to the database.");
    });
});

router.delete("/:id", function (req, res, next) {
  const itemId = req.params.id;

  console.log("itemId:", itemId); // Add this line for debugging
  console.log("req.params: ", req.params);

  if (!itemId) {
    return res.status(400).send("Invalid item ID.");
  }

  Item.findOneAndDelete({ _id: itemId })
  .then((removedItem) => {
    if (removedItem) {
      res.sendStatus(204);
    } else {
      res.status(404).send("Item not found.");
    }
  })
  .catch((error) => {
    console.error("Error deleting item:", error);
    res.status(500).send("An error occurred while deleting the item.");
  });
});

module.exports = router;
