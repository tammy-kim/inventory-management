const initialState = {
  items: [
    {
      name: "Cat",
      description: "Cute and fluffy",
      price: "2000",
      image:
        "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
      size: "small"
    },
    {
      name: "My phone",
      description: "Iphone 13",
      price: "1000",
      image:
        "https://www.techniknews.net/wp-content/uploads/2021/10/iphone-13-pro-testbericht-header-scaled.jpg",
      size: "small"
    },
    {
      name: "Dog",
      description: "Very active and friendly",
      price: "3000",
      image:
        "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg",
      size: "medium"
    },
  ],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    default:
      return state;
  }
};

export default itemReducer;
