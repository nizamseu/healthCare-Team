import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Image } from "react-bootstrap";
import "./DoctorList.css";
const DoctorList = (props) => {
  const { companyName, l_number, email, gender, name, age, fee, url } = props.doctor;
  const handleAdded = props.handleAdded;
  return (
    <div className="cart  col-md-5 col-lg-3 col-sm-5 col-12">
      <div className=" text-center my-4">
        <Image width="120px" height="120px" src={url} roundedCircle />
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
          <strong>Fee:</strong> <i class="fa fa-solid fa-sack-dollar"></i>
          {fee} TK
        </h3>

        <button className="btn btn-primary" onClick={() => handleAdded(props.doctor)} type="button">
          <i className="fa fa-solid fa-user mx-2"></i>
          Add Me
        </button>
      </div>
    </div>
  );
};

export default DoctorList;
