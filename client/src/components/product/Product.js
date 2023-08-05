import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as helpers from "../../Helper/helper";
import { addData } from "../home/dataSlice";
import TotalPrice from "./TotalPrice";
import "./product.css";

function Product() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(process.env.REACT_APP_KEY);
      const jsonData = await data.json();
      dispatch(addData(jsonData));
    } catch (error) {
      console.log(error);
    }
  };

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const cartProduct = useSelector((state) => state.cart.cart);

  const totalDiscount =
    cartProduct.length && helpers.overallDiscount(cartProduct);

  const totalPrice = cartProduct.length && helpers.overallPrice(cartProduct);

  const groupByCategory = data && helpers.productCategory(data);

  console.log(groupByCategory);

  return (
    <>
      <div className="w-100">
        <img
          className="img-fluid"
          src="https://www.malathicrackers.com/images/upload/home_banner_08_07_2022_05_34_01.jpg?t=290723113433"
          alt="Diwali Crackers"
        />
      </div>

      <div className="crat_sticky bg-warning d-flex flex-row justify-content-between w-100 text-center">
        <div className="fw-bold text-wrap cart_price">
          Total Products : {cartProduct.length}
        </div>
        <div className="fw-bold text-wrap cart_price">
          Discount Total : ₹.{Math.floor(totalDiscount)}
        </div>
        <div className="fw-bold text-wrap cart_price">
          Overall Total : ₹.{Math.floor(totalPrice)}
        </div>
      </div>

      <>
        {Object.keys(groupByCategory).length ? (
          Object.entries(groupByCategory).map(([key, value]) => (
            <div key={key}>
              <h5 className="bg-info pro_title mb-0">{key}</h5>
              <div className="div_con row">
                {value.map((u) => (
                  <div
                    key={u.Product_id}
                    className="pro_con w-100 col-md-4 col-4"
                  >
                    <div className="img_con">
                      <img
                        className="img-fluid"
                        // src={u.Image}
                        src="https://www.malathicrackers.com/images/upload/home_banner_08_07_2022_05_34_01.jpg?t=290723113433"
                        alt={u.Product_id}
                      />
                      <span className="proId_con">{u.Product_id}</span>
                    </div>

                    <div className="details_con col-md-8 col-8 ">
                      <h4 className="pro_head w-100 text-start fw-bold">
                        {u.Product_Name}
                      </h4>

                      <div className="w-100 d-flex justify-content-center algin-items-center price_con pt-4">
                        <span className="d-flex flex-column text-center mx-3 ">
                          <strike className="strike">
                            ₹ {u.Poduct_Price}.00 / Box
                          </strike>
                          <span className="price">
                            ₹{" "}
                            {Math.floor(
                              `${u.Poduct_Price - u.Poduct_Price * 0.3}`
                            )}
                            .00 / Box
                          </span>
                        </span>
                        <TotalPrice u={u} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <h1 className="fw-bold text-center pt-3">Loading...</h1>
        )}
      </>
    </>
  );
}

export default Product;
