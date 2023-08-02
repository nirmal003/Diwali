import React, { useEffect, useState } from "react";
import TotalPrice from "./TotalPrice";
import "./product.css";

function Product() {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
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
            <div key={u.Product_id} className="pro_con w-100 col-md-4 col-4">
              <div className="img_con">
                <img
                  className="img-fluid "
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
                      ₹ {Math.floor(`${u.Poduct_Price - u.Poduct_Price * 0.3}`)}
                      .00 / Box
                    </span>
                  </span>
                  <TotalPrice u={u} />
                </div>
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
