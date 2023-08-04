import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, deleteCart, updateCart } from "./cartSlice";

function TotalPrice(u) {
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart.cart);
  console.log(cartProduct);

  const handleInput = (qty, product) => {
    const id = product.u.Product_id;
    const discountPrice = product.u.Poduct_Price * 0.3;
    const offerPrice = product.u.Poduct_Price - discountPrice;
    setTotalPrice(qty * offerPrice);
    const data = {
      id,
      qty,
      product,
      offerPrice,
      discountPrice: qty * discountPrice,
      totalPrice: qty * offerPrice,
    };

    if (Number(qty) === 0) {
      dispatch(deleteCart(id));
      return;
    }

    if (cartProduct.length === 0) {
      // console.log("empty call");
      dispatch(addCart(data));
    } else {
      const duplicate = cartProduct.filter((p) => p.id === id);
      // console.log(duplicate.length);
      if (duplicate.length && qty) {
        // console.log("update call");
        dispatch(updateCart(data));
      } else {
        if (qty.length === 0) {
          // console.log("delete call");
          dispatch(deleteCart(id));
        } else if (duplicate.length) {
          // console.log("2update call");
          dispatch(updateCart(data));
        } else {
          // console.log("add call");
          dispatch(addCart(data));
        }
      }
    }
  };

  return (
    <>
      <input
        type="number"
        className="input text-center mx-4"
        placeholder="Qty"
        onChange={(e) => handleInput(e.target.value, u)}
      />
      <span className="tot_price text-center">₹ {Math.floor(totalPrice)}</span>
    </>
  );
}

export default TotalPrice;
