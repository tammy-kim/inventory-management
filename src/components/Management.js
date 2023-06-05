// import NewItem from "./NewItem";
// import Items from "./Items";
// import { useReducer } from "react";
// import "./Management.css";

// const initialState = {
//   items: [
//     {
//       name: "Cat",
//       description: "Cute and fluffy",
//       price: "2000",
//       image:
//         "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
//     },
//     {
//       name: "My phone",
//       description: "Iphone 13",
//       price: "1000",
//       image:
//         "https://www.techniknews.net/wp-content/uploads/2021/10/iphone-13-pro-testbericht-header-scaled.jpg",
//     },
//     {
//       name: "Dog",
//       description: "Very active and friendly",
//       price: "3000",
//       image:
//         "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg",
//     },
//   ],
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_ITEM":
//       return {
//         items: [action.payload, ...state.items],
//       };
//     default:
//       return state;
//   }
// };

// const Management = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const addItemHandler = (item) => {
//     dispatch({ type: "ADD_ITEM", payload: item });
//   };

//   return (
//     <div className="Management">
//       <header className="Management-header">
//         <NewItem addItem={addItemHandler} />
//       </header>
//       <h2 className="title">Below is Your Current Inventory!</h2>
//       <Items items={state.items} />
//     </div>
//   );
// };

// export default Management;

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