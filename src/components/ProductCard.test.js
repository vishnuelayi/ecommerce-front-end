import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

test("renders product card with correct data", () => {
  const product = {
    id: 1,
    name: "Example Product",
    price: 10.99,
    rating: 4.5,
  };

  render(<ProductCard data={product} />);

  // Assert that the product name is rendered correctly
  expect(screen.getByText("Example Product")).toBeInTheDocument();

  // Assert that the product price is rendered correctly
  expect(screen.getByText("$10.99")).toBeInTheDocument();

  // Assert that the product rating is rendered correctly
  expect(screen.getByTestId("product-rating")).toHaveAttribute("value", "4.5");
});
