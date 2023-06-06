import NewItem from "./NewItem";
import Items from "./Items";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
import "./Management.css";

const Management = ({ items, addItem }) => {
  const addItemHandler = (item) => {
    addItem(item);
  };

  return (
    <div className="Management">
      <header className="Management-header">
        <NewItem addItem={addItemHandler} />
      </header>
      <h2 className="title">Below is Your Current Inventory!</h2>
      <Items items={items} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items.items,
});

export default connect(mapStateToProps, { addItem })(Management);