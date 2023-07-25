import Item from "./Item";
import "./Items.css";
import { useState, useEffect } from "react";

const Items = (props) => {

  return (
    <div className="items">
      {props.items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
          size={item.size}
          // onDelete={() => props.removeItem(item.id)}
          onDelete={() => props.removeItem(item.id)}
        ></Item>
      ))}
    </div>
  );
};

export default Items;

