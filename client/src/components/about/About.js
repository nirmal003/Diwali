import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="w-100">
        <img
          className="img-fluid"
          src="https://www.malathicrackers.com/images/upload/home_banner_08_07_2022_05_34_01.jpg?t=290723113433"
          alt="Diwali Crackers"
        />
      </div>

      <div className="container ">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 text-center align-self-center pt-4">
            <img
              src="https://www.malathicrackers.com/images/sivakasicrackers.jpg"
              className="img-fluid abtlogo"
              alt="Sivakasi Crackers"
              title="Wholesale Crackers Shop in Sivakasi"
            />
          </div>

          <div className="col-lg-6 col-md-6 col-12 pt-4 align-self-center">
            <h1 className="acme clr-red text-center fw-bold">
              " Awesome Crackers Sivakasi Online Crackers Shop "
            </h1>
            <p className="roboto para-lh">
              Awesome Crackers is the leading supplier of crackers &amp; fancy
              crackers items. Firecrackers have always been an integral part of
              indian culture and tradition. Be it a festival, a wedding, reunion
              or any other special occasion, it is in our hearts to celebrate it
              in the glory of lights. Our aim is to provide the excellent
              services and true value for money.
            </p>
          </div>

          <div className="parall bgoverlay">
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="box-bg box-left">
                    <h1 className="acme heading3 text-black pb-lg-4">
                      <i>
                        Fireworks Direct Outlet Available With Discount.
                        Celebrate Diwali with Awesome Crackers!....
                      </i>
                    </h1>
                    <p className="roboto para-lh pb-3 text-balck">
                      Our service is to fulfill your needs and requirements to
                      the maximum extent possible. We are the best place to
                      fullfill your cracker shopping. We have cracker gift
                      boxes, rockets, ground chakkars, flowerpots, sparklers,
                      skyshots and various other type of crackers. After
                      understanding the hardship of buying quality crackers
                      during diwali season we came up with the solution to buy
                      crackers online. We sell products only which is of good
                      quality and received acceptance by the customers.
                    </p>
                    <div className="toll-free-cta">
                      <a
                        href="tel:+919894740650"
                        className="clr-red heading5 acme"
                      >
                        <FaPhoneAlt className="clr pb-1" />
                        +91 98947 40650
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
