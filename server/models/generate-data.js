// const Item = require("./itemsModel");

// function generateData() {
//   // make an item
//   const cat = new Item({
//     name: "Cat",
//     description: "Cute and fluffy",
//     price: 2000,
//     image:
//       "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
//     size: "small",
//   });
//   const phone = new Item({
//     name: "My phone",
//     description: "Iphone 13",
//     price: 1000,
//     image:
//       "https://www.techniknews.net/wp-content/uploads/2021/10/iphone-13-pro-testbericht-header-scaled.jpg",
//     size: "small",
//   });
//   const dog = new Item({
//     name: "Dog",
//     description: "Very active and friendly",
//     price: 3000,
//     image:
//       "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg",
//     size: "medium",
//   });

//   // Save an item to db
//   cat.save();
//   phone.save();
//   dog.save();
// }

// module.exports = generateData;


const Item = require("./itemsModel");

async function generateData() {
  // Check if the items already exist in the database
  const existingItems = await Item.find({
    name: { $in: ["Cat", "My phone", "Dog"] },
  });

  if (existingItems.length === 3) {
    console.log("Items already exist in the database.");
    return;
  }

  // Save the items that do not exist
  const itemsToSave = [];

  if (!existingItems.some((item) => item.name === "Cat")) {
    const cat = new Item({
      name: "Cat",
      description: "Cute and fluffy",
      price: 2000,
      image:
        "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
      size: "small",
    });
    itemsToSave.push(cat);
  }

  if (!existingItems.some((item) => item.name === "My phone")) {
    const phone = new Item({
      name: "My phone",
      description: "Iphone 13",
      price: 1000,
      image:
        "https://www.techniknews.net/wp-content/uploads/2021/10/iphone-13-pro-testbericht-header-scaled.jpg",
      size: "small",
    });
    itemsToSave.push(phone);
  }

  if (!existingItems.some((item) => item.name === "Dog")) {
    const dog = new Item({
      name: "Dog",
      description: "Very active and friendly",
      price: 3000,
      image:
        "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg",
      size: "medium",
    });
    itemsToSave.push(dog);
  }

  if (itemsToSave.length > 0) {
    await Item.insertMany(itemsToSave);
    console.log("Items saved to the database.");
  } else {
    console.log("Items already exist in the database.");
  }
}

module.exports = generateData;
