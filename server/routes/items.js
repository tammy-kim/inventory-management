var express = require('express');
var router = express.Router();

const items = [
    {
      id: "1",
      name: "Cat",
      description: "Cute and fluffy",
      price: "2000",
      image:
        "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
      size: "small"
    },
    {
      id: "2",
      name: "My phone",
      description: "Iphone 13",
      price: "1000",
      image:
        "https://www.techniknews.net/wp-content/uploads/2021/10/iphone-13-pro-testbericht-header-scaled.jpg",
      size: "small"
    },
    {
      id: "3",
      name: "Dog",
      description: "Very active and friendly",
      price: "3000",
      image:
        "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg",
      size: "medium"
    }
  ];

// GET on postman is localhost:3001/items
// router.get('/', function(req, res, next) {
//   res.send(items);
// });

router.get('/', function(req, res, next) {
  const { size } = req.query;

  if (size) {
    const filteredItems = items.filter(item => item.size.toLowerCase() === size.toLowerCase());
    if (filteredItems.length > 0) {
      res.status(200).send(filteredItems);
    } else {
      res.status(404).send('No items found with the specified size.');
    }
  } else {
    res.status(200).send(items);
  }
});

// POST on postman (body)
// {
//   "id": "4",
//   "name": "My computer",
//   "description": "Macbook Pro",
//   "price": "2400",
//   "image": "https://media.istockphoto.com/id/484965494/photo/macbook-pro-with-blank-screen-and-computer-clipping-path.jpg?s=612x612&w=0&k=20&c=v05F8Sz5eZA-Z601beB_LapmpCuX6l4bL3w7SFG6JOw=",
//   "size": "small"
// }
router.post('/', function(req, res, next) {
  items.push(req.body);
  res.status(201);
  res.send(req.body);
});

// DELETE on postman is localhost:3001/items/:id
router.delete('/:id', function(req, res, next) {
  const itemId = req.params.id;
  const index = items.findIndex(item => item.id === itemId);
  if (index !== -1) {
    items.splice(index, 1);
    res.sendStatus(204).end();
  } else {
    res.sendStatus(404).end();
  }
});

module.exports = router;
