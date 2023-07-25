import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../components/store";
import Management from "../components/Management";

test("renders 'Below is Your Current Inventory!' text", () => {
  render(
    <Provider store={store}>
      <Management />
    </Provider>
  );
  const inventoryText = screen.getByText("Below is Your Current Inventory!");
  expect(inventoryText).toBeInTheDocument();
});
