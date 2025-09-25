import React from "react";
import Products from "./Products";

function ProductPages() {
  const data = [
    {
      title: "ABAYAS",
      products: [
        { name: "BLUE FANCY BUTTONS", price: "Rs.4,900", img: "abaya-1.jpg" },
        { name: "LOOP BUTTON BLUE ABAYA", price: "Rs.4,900", img: "abaya-2.jpg" },
        { name: "BLUE EMBROIDERY WITH INNER ABAYA", price: "Rs.7,500", img: "abaya-3.jpg" },
      ],
    },
    {
      title: "HIJABS",
      products: [
        { name: "SILK HIJAB", price: "Rs.1,200", img: "hijab-1.jpg" },
        { name: "COTTON HIJAB", price: "Rs.900", img: "hijab-2.jpg" },
        { name: "CHIFFON HIJAB", price: "Rs.1,500", img: "hijab-3.jpg" },
      ],
    },
    {
      title: "NIQABS",
      products: [
        { name: "BLACK NIQAB", price: "Rs.1,000", img: "niqab-1.jpg" },
        { name: "DOUBLE LAYER NIQAB", price: "Rs.1,300", img: "niqab-2.jpg" },
        { name: "EMBROIDERED NIQAB", price: "Rs.1,800", img: "niqab-3.jpg" },
      ],
    },
  ];

  return (
    <div>
      {data.map((category, index) => (
        <Products key={index} title={category.title} products={category.products} />
      ))}
    </div>
  );
}

export default ProductPages;
