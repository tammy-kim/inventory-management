import { useState, useEffect } from "react";
import "./InventoryForm.css";

const InventoryForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputImage, setInputImage] = useState("");
  const [inputSize, setInputSize] = useState("small");

  const generateUniqueId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const nameChangeHandler = (e) => {
    setInputName(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setInputDescription(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setInputPrice(e.target.value);
  };

  const imageChangeHandler = (e) => {
    setInputImage(e.target.value);
  };

  const sizeChangeHandler = (e) => {
    setInputSize(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const item = {
      id: generateUniqueId().toString(),
      name: inputName,
      description: inputDescription,
      price: inputPrice,
      image: inputImage,
      size: inputSize,
    };
    props.saveItem(item);

    fetch("https://tammy-inventory-management.onrender.com/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    setInputName("");
    setInputDescription("");
    setInputPrice("");
    setInputImage("");
    setInputSize("small");
  };

  const clearHandler = (e) => {
    setInputName("");
    setInputDescription("");
    setInputPrice("");
    setInputImage("");
    setInputSize("small");
  };

  useEffect(() => {
    fetch("https://tammy-inventory-management.onrender.com/items")
      .then((r) => r.json())
      .then((data) => {
        for (const item of data) {
          props.saveItem({
            id: item._id,
            name: item.name,
            description: item.description,
            price: item.price,
            image: item.image,
            size: item.size,
          });
        }
      });
  }, []);

  return (
    <div className="create">
      <h2>Add a new item</h2>
      <form onSubmit={submitHandler}>
        <label>Name: </label>
        <input
          type="text"
          required
          value={inputName}
          onChange={nameChangeHandler}
        />
        <br />
        <label>Description: </label>
        <input
          type="text"
          required
          value={inputDescription}
          onChange={descriptionChangeHandler}
        />
        <br />
        <label>Price: </label>
        <input
          type="text"
          required
          value={inputPrice}
          onChange={priceChangeHandler}
        />
        <br />
        <label>Image URL: </label>
        <input
          type="text"
          required
          value={inputImage}
          onChange={imageChangeHandler}
        />
        <br />
        <label>Size: </label>
        <select value={inputSize} onChange={sizeChangeHandler}>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>
        <br />
        <br />
        <button type="submit">Add Item</button>
        <button type="button" onClick={clearHandler}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default InventoryForm;
