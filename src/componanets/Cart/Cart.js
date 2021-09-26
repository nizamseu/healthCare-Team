import React from "react";
import { Card } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "./Cart.css";
const Cart = (props) => {
  const fee = props.cart;
  const total = fee.reduce((init, sum) => init + sum.fee, 0);
  console.log(fee);
  return (
    <div>
      <div className="d-flex">
        <Card
          style={{
            width: "21.5rem",
            background: "#3DA5F4",
            color: "white",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="d-flex align-items-center m-2 p-3"
        >
          <h3 className="pl-4 my-2">Item Count: {props.cart.length}</h3>

          <h3 className="pl-4 my-2">Total Amount: {total}</h3>
        </Card>

        <Card
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "45rem",
            height: "200px",
            background: "#3DA5F4",
            color: "white",
          }}
          className=" text-center mx-auto m-2 p-1 showName"
        >
          {/* <h2 className="pl-4">Added List</h2> */}

          <div className="row mx-1">
            <h4 className="my-1">Added Doctors List</h4>
            {fee.length > 0 && fee.map((item) => <Name singleItem={item}></Name>)}
          </div>
        </Card>

        {/* <Card
          style={{ width: "20rem", background: "#FDA006", color: "white" }}
          className="d-flex align-items-center m-2 p-3"
        >
          <h2 className="pl-4">Total</h2>
          <h2>{total} TK</h2>
        </Card> */}
      </div>
    </div>
  );
};
const Name = (props) => {
  const { name, url } = props.singleItem;
  return (
    <div className="m-1 mx-auto col-md-6 col-lg-6 col-sm-12 col-12 justify-content-center single-cart">
      <img className="mx-2" width="50px" height="50px" src={url} alt="" />
      <p className="mx-1">{name}</p>
    </div>
  );
};
export default Cart;
