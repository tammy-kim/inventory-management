import NewItem from "./NewItem";
import Items from "./Items";
import { useState } from "react";
import "./Management.css";

const currentItems = [
  {
    name: "Cat",
    description: "Cute and fluffy",
    price: "2000",
    image: "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg"
  },
  {
    name: "My phone",
    description: "Iphone 13",
    price: "1000",
    image: "https://www.techniknews.net/wp-content/uploads/2021/10/iphone-13-pro-testbericht-header-scaled.jpg"
  },
  {
    name: "Dog",
    description: "Very active and friendly",
    price: "3000",
    image: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg"
  }
];

const Management = () => {
  const [items, setItems] = useState(currentItems);

  const addItemHandler = (item) => {
    setItems(prevItems => {
      return [item, ...prevItems];
    });
  }

  return (
    <div className="Management">
      <header className="Management-header">
       <NewItem addItem={addItemHandler} />
      </header>
      <h2 className="title">Below is Your Current Inventory!</h2>
      <Items items={items} />
      
    </div>
  );
}

export default Management;