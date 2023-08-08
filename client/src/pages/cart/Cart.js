import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as helpers from "../../Helper/helper";
import { deleteCart, updateCart } from "../../components/product/cartSlice";
import "./cart.css";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart.cart);
  console.log(cartProduct);

  const netTotal = cartProduct.length && helpers.netTotal(cartProduct);

  const totalDiscount =
    cartProduct.length && helpers.overallDiscount(cartProduct);

  const totalPrice = cartProduct.length && helpers.overallPrice(cartProduct);

  const deleteProduct = (id) => {
    dispatch(deleteCart(id));
  };

  const handleCartInput = (qty, c) => {
    const discountPrice =
      (c.product.u.Discount_Percentage / 100) * c.product.u.Product_Price;

    const data = {
      id: c.id,
      qty: qty.length ? qty : 0,
      product: c.product,
      offerPrice: c.offerPrice,
      totalPrice: qty * c.offerPrice,
      discountPrice: qty * discountPrice,
    };

    if (Number(qty) === 0) {
      if (window.confirm("do you want to cancel this item?....")) {
        dispatch(deleteCart(c.id));
        return;
      } else {
        dispatch(updateCart(data));
      }
    } else {
      dispatch(updateCart(data));
    }
  };

  return (
    <div className="cart_list_con">
      <div className="cart_goback_btn" onClick={() => navigate(-1)}>
        <IoMdCloseCircle />
      </div>
      <div className="cart">
        <div className="w-100 cart_head_con ">
          <h3 className="fw-bold acme m-2 ">Awesome Crackers </h3>
          <span className="fs-6  mx-5 text-center">
            4/480, Veerachelliya Puram, Sivakasi, Virudhunagar - 626 005
          </span>
          <span className="fs-6 ">Mobile No : 98947 40650</span>
        </div>

        <div className="scoop_parent">
          {cartProduct.length &&
            cartProduct.map((c) => (
              <div className="scoop scoop1" key={c.id}>
                <div className="cart_img_con scoop1_child col-6">
                  <img
                    className="col-5"
                    loading="lazy"
                    src={c.product.u.Image}
                    // src="https://www.malathicrackers.com/images/upload/home_banner_08_07_2022_05_34_01.jpg?t=290723113433"
                    alt={c.id}
                  />
                  <span className="text-start col-7">
                    {c.product.u.Product_Name}
                  </span>
                </div>

                <div className="cart_input_con scoop1_child py-1 col-3">
                  <input
                    type="number"
                    defaultValue={c.qty}
                    placeholder="Qty"
                    min="0"
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
            <span className="scoop2_amnt">₹ {Math.floor(netTotal)}.00</span>
          </div>

          <div className="scoop scoop2">
            <span>Discount Total</span>
            <span className="scoop2_amnt">
              ₹ {Math.floor(totalDiscount)}.00
            </span>
          </div>

          <div className="scoop scoop2">
            <span>Sub Total</span>
            <span className="scoop2_amnt">₹ {Math.floor(totalPrice)}.00</span>
          </div>
        </div>

        <div className=" fs-5 estimate_btn_con disabled">
          <Link to="/estimate" className="text-decoration-none text-black">
            Confirm Estimate
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
