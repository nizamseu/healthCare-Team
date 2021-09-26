import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import DoctorList from "../DoctorList/DoctorList";
import "./Doctors.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("../doctors.json")
      .then((res) => res.json())
      .then((data) => doctors(data));
  }, []);
  console.log(doctors);
  return (
    <div>
      <div className=" d-flex justify-content-center">
        <div className="col-md-9">
          {doctors.map((doctor) => (
            <DoctorList doctor={doctor}></DoctorList>
          ))}
        </div>
        <div className="col-md-3">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
