import "./Item.css";
import ItemImage from "./ItemImage";
import Modal from "./Modal";
import { useState } from "react";

const Item = (props) => {
  const [details, setDetails] = useState();

  const detailHandler = (e) => {
    setDetails({
      name: "name",
      description: "description",
      price: "price",
      size: "size"
    });
  };

  const popupHandler = () => {
    setDetails(null);
  }

  return (
    <div className="item">
      <div className="item-name">
        <h2>
          {props.name}
        </h2>
        <ItemImage image={props.image} />
        {/* <div className="item-price">${props.price}</div> */}
      </div>
      <button onClick={detailHandler}>Details</button>
      {details && (
        <Modal
          name={props.name}
          description={props.description}
          price={props.price}
          size={props.size}
          onConfirm={popupHandler}
        ></Modal>
      )}
    </div>
  );
};

export default Item;
