import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./estimate.css";

function Estimate() {
  const [user, setUser] = useState({});

  const getData = (e) => {
    const { name, value } = e.target;

    const inputData = { [name]: value };

    setUser({ ...user, ...inputData });

    console.log(user);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // user.address = { ...address };
    console.log(user);
  };

  return (
    <div className="estimate_page">
      <div className="estimate_con">
        <div className="w-100 estimate_head_con">
          <h1 className="fw-bold acme m-2 ">Awesome Crackers </h1>
          <span className="fs-6 mx-5">
            4/480, Veerachelliya Puram, Sivakasi, Virudhunagar - 626 005
          </span>
          <span className="fs-6 ">Mobile No : 98947 40650</span>
        </div>

        <div className="form_con">
          <form className="" onSubmit={handleOnSubmit}>
            <div className="form-group col-12 p-1">
              <input
                type="text"
                name="name"
                className="form-control shadow-none"
                placeholder="Customer Name"
                required
                onChange={getData}
              />
            </div>

            <div className="form-group col-12 p-1">
              <input
                className="form-control shadow-none"
                type="number"
                name="mobileName"
                placeholder="Mobile Number"
                required
                onChange={getData}
              />
            </div>

            <div className="form-group col-12 p-1">
              <input
                className="form-control shadow-none"
                type="email"
                name="email"
                placeholder="Email"
                onChange={getData}
              />
            </div>

            <div className="form-group col-12 p-1">
              <textarea
                className="form-control shadow-none"
                type="text"
                name="address"
                placeholder="Address"
                rows="4"
                required
                onChange={getData}
              />
            </div>

            <div className="form-group col-12 p-1">
              <select
                name="state"
                onChange={getData}
                className="w-100 py-2 px-1 form-control shadow-none"
              >
                <option value="student">Student</option>
                <option value="employee">Employee</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group col-12 p-1">
              <select
                name="state"
                onChange={getData}
                className="w-100 py-2 px-1 form-control shadow-none"
              >
                <option value="student">Student</option>
                <option value="employee">Employee</option>
                <option value="other">Other</option>
              </select>
            </div>

            <Button variant="primary" type="submit" className="m-2 submit_btn">
              Submit
            </Button>
          </form>
        </div>

        <div className="estimate_amnt text-end px-4">
          <div className="d-flex justify-content-center flex-direction-row algin-items-center pt-2">
            <span className="col-8">Sub Totla :</span>
            <span className="col-4">₹ 456789</span>
          </div>
          <div className="fw-bold d-flex justify-content-center flex-direction-row algin-items-center pt-2">
            <span className="col-8">Min.Order Amount :</span>
            <span className="col-4">₹ 456789</span>
          </div>
          <div className="d-flex justify-content-center flex-direction-row algin-items-center pt-2">
            <span className="col-8">Packing Charges (3%) :</span>
            <span className="col-4">₹ 456789</span>
          </div>
          <div className="d-flex justify-content-center flex-direction-row algin-items-center pt-2">
            <span className="col-8">Round OFF :</span>
            <span className="col-4">₹ 456789</span>
          </div>
          <div className="d-flex justify-content-center flex-direction-row algin-items-center pt-2">
            <span className="col-8">Overall Total :</span>
            <span className="col-4">₹ 456789</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Estimate;
