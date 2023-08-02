import React, { useState } from "react";

function TotalPrice(u) {
  const [totalPrice, setTotalPrice] = useState(0);

  const pro = [];

  const handleInput = (qty, product) => {
    console.log(product.u);
    const offerPrice = product.u.Poduct_Price - product.u.Poduct_Price * 0.3;
    setTotalPrice(qty * offerPrice);
    console.log(totalPrice);
    pro.push({ product, qty });
    console.log(pro);
  };

  return (
    <>
      <input
        className="input text-center mx-4"
        placeholder="Qty"
        onChange={(e) => handleInput(e.target.value, u)}
      />
      <span className="tot_price text-center">₹ {Math.floor(totalPrice)}</span>
    </>
  );
}

export default TotalPrice;
