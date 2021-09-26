import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Image } from "react-bootstrap";
import "./DoctorList.css";
const DoctorList = (props) => {
  const { companyName, l_number, email, gender, name, age, fee, url } = props.doctor;
  const handleAdded = props.handleAdded;
  return (
    <div className="cart  col-md-5 col-lg-3 col-sm-5 col-12">
      <div className=" text-center my-4">
        <Image width="80px" height="80px" src={url} roundedCircle />
      </div>
      <div>
        <h3>{name}</h3>
        <p>
          {" "}
          <strong>Company:</strong> {companyName}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Lincence No: </strong>
          {l_number}
        </p>
        <h3>
          <strong>Fees:</strong> {fee} TK
        </h3>
        <FontAwesomeIcon icon="fa-solid fa-square-plus" />
        <i className="fa-solid fa-square-plus"></i>
        <button onClick={() => handleAdded(props.doctor)} type="button" className="btn btn-success">
          <i className="fa-solid fa-square-plus"></i>
          <FontAwesomeIcon icon="fa-solid fa-square-plus" /> Add Me
        </button>
      </div>
    </div>
  );
};

export default DoctorList;
