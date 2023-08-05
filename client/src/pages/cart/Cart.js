import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./cart.css";

function Cart() {
  const navigate = useNavigate();
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
        <div className="scoop">data</div>
        <div className="scoop">
          <span>Net Total</span>
          <span>₹ 23432123</span>
        </div>
        <div className="scoop">
          <span>Discount Total</span>
          <span>₹ 23432123</span>
        </div>
        <div className="scoop">
          <span>Sub Total</span>
          <span>₹ 23432123</span>
        </div>
      </div>
      <div className=" fs-3 estimate_con">Confirm Estimate</div>
    </div>
  );
}

export default Cart;
