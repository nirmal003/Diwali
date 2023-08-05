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
        <div className="scoop scoop1">
          <div className="cart_img_con scoop1_child col-6">
            <img
              className=""
              src="https://www.malathicrackers.com/images/upload/home_banner_08_07_2022_05_34_01.jpg?t=290723113433"
              alt=""
            />
            <span className="text-start">qwerttrfeh hagcew qwertre</span>
          </div>

          <div className="cart_input_con scoop1_child py-1 col-3">
            <input type="text" className="input " />
            <span>₹ 235.00</span>
          </div>

          <div className="cart_cancel_con scoop1_child col-3">
            <span>₹ 123004</span>
            <span className="cart_cancel_icon ">
              <IoMdCloseCircle className="text-white" />
            </span>
          </div>
        </div>

        <div className="scoop scoop2">
          <span>Net Total</span>
          <span>₹ 23432123</span>
        </div>

        <div className="scoop scoop2">
          <span>Discount Total</span>
          <span>₹ 23423</span>
        </div>
        <div className="scoop scoop2">
          <span>Sub Total</span>
          <span>₹ 2123</span>
        </div>
      </div>
      <div className=" fs-3 estimate_con">Confirm Estimate</div>
    </div>
  );
}

export default Cart;
