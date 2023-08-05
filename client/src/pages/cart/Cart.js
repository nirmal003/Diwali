import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as helpers from "../../Helper/helper";
import { deleteCart } from "../../components/product/cartSlice";
import "./cart.css";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart.cart);

  const netTotal = cartProduct.length && helpers.netTotal(cartProduct);

  const totalDiscount =
    cartProduct.length && helpers.overallDiscount(cartProduct);

  const totalPrice = cartProduct.length && helpers.overallPrice(cartProduct);

  const deleteProduct = (id) => {
    dispatch(deleteCart(id));
  };

  const handleCartInput = (qty, c) => {
    const discountPrice = c.product.u.Poduct_Price * 0.3;

    const data = {
      id: c.id,
      qty,
      product: c.product,
      offerPrice: c.offerPrice,
      totalPrice: qty * c.offerPrice,
      discountPrice: qty * discountPrice,
    };

    console.log(data);
  };

  return (
    <div className="cart_list_con">
      <div className="cart_goback_btn" onClick={() => navigate(-1)}>
        <IoMdCloseCircle />
      </div>
      <div className="w-100 ">
        <h1 className="fw-bolder acme m-2 mb-3">Awesome Crackers </h1>
        <span className="fs-5 fw-bold">
          4/480, Veerachelliya Puram, Sivakasi, Virudhunagar - 626 005
        </span>
        <br />
        <span className="fs-4 fw-bold">Mobile No : 98947 40650</span>
      </div>

      <div className="scoop_parent">
        {cartProduct.length &&
          cartProduct.map((c) => (
            <div className="scoop scoop1" key={c.id}>
              <div className="cart_img_con scoop1_child col-6">
                <img
                  className="col-5"
                  src="https://www.malathicrackers.com/images/upload/home_banner_08_07_2022_05_34_01.jpg?t=290723113433"
                  alt=""
                />
                <span className="text-start col-7">
                  {c.product.u.Product_Name}
                </span>
              </div>

              <div className="cart_input_con scoop1_child py-1 col-3">
                <input
                  type="text"
                  defaultValue={c.qty}
                  placeholder="Qty"
                  required
                  className="input text-center"
                  onChange={(e) => handleCartInput(e.target.value, c)}
                />
                <span>₹ {Math.floor(c.offerPrice)}.00</span>
              </div>

              <div className="cart_cancel_con scoop1_child col-3">
                <span>₹ {Math.floor(c.totalPrice)}</span>
                <span
                  className="cart_cancel_icon "
                  onClick={() => deleteProduct(c.id)}
                >
                  <IoMdCloseCircle />
                </span>
              </div>
            </div>
          ))}

        <div className="scoop scoop2">
          <span>Net Total</span>
          <span>₹ {Math.floor(netTotal)}.00</span>
        </div>

        <div className="scoop scoop2">
          <span>Discount Total</span>
          <span>₹ {Math.floor(totalDiscount)}.00</span>
        </div>
        <div className="scoop scoop2">
          <span>Sub Total</span>
          <span>₹ {Math.floor(totalPrice)}.00</span>
        </div>
      </div>
      <div className=" fs-3 estimate_con">Confirm Estimate</div>
    </div>
  );
}

export default Cart;
