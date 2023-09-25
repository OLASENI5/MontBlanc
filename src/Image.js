// Image.js
import React from "react";
import { product } from "./Product";

function Image() {
  return <img src={product.image} alt={product.name} />; // Display the product image
}

export default Image;
