import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./product.css";

function Product() {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();

    // Aos.init();
    // new WOW.WOW({
    //   live: false,
    // }).init();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(process.env.REACT_APP_KEY);
      setUserData(await data.json());
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  console.log(userData);
  console.log(error);

  return (
    <>
      <div className="crat_sticky">Cart Items</div>
      <div className="div_con row">
        {!loading && !error ? (
          userData?.user?.map((u) => (
            <div key={u.Product_id} className="pro_con">
              <div className="img_con ">
                <img
                  style={{ width: "280px", height: "380px" }}
                  className="img-fluid "
                  src={u.Image}
                  // src="https://www.malathicrackers.com/images/upload/home_banner_08_07_2022_05_34_01.jpg?t=290723113433"
                  alt={u.Product_id}
                />
              </div>
              <div className="justify-content-center row">
                <h4>{u.Product_Name}</h4>
                <span>
                  <strike>₹{u.Poduct_Price}</strike>
                  <b>
                    {" "}
                    ₹{Math.floor(`${u.Poduct_Price - u.Poduct_Price * 0.3}`)}
                  </b>
                </span>
                <span>Available Qty : {u.Product_Qty}</span>
                <Button className="cart_btn fw-bold">Add to Cart</Button>
              </div>
            </div>
          ))
        ) : (
          <h2 className="fw-bold">Loading...</h2>
        )}
      </div>
    </>
  );
}

export default Product;
