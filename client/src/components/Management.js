import NewItem from "./NewItem";
import Items from "./Items";
import FilteredItems from "./FilteredItems";
import { connect } from "react-redux";
import { addItem, removeItem } from "../actions/itemActions";
import "./Management.css";

const Management = ({ items, addItem, removeItem }) => {
  const addItemHandler = (item) => {
    addItem(item);
  };

  // const handleDeleteItem = (itemId) => {
  //   removeItem(itemId);
  // }

  const handleDeleteItem = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:3001/items/${itemId}`, {
        method: "DELETE",
      });
      if (response.ok) {
       removeItem(itemId);
      } else {
        console.error("Error deleting item:", response.status);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };


  return (
    <div className="Management">
      <header className="Management-header">
        <NewItem addItem={addItemHandler} />
      </header>
      <h2 className="title">Below is Your Current Inventory!</h2>
      <Items items={items} removeItem={handleDeleteItem} />
      <FilteredItems></FilteredItems>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items.items,
});

export default connect(mapStateToProps, { addItem, removeItem })(Management);