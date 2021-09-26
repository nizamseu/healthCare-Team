import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import DoctorList from "../DoctorList/DoctorList";
import "./Doctors.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/nizamseu/rowJsonData/main/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  const handleAdded = (doctor) => {
    setCart([...cart, doctor]);
  };
  console.log(doctors);
  return (
    <div className="w-100 mx-auto">
      <div className="container">
        <div>
          <Cart cart={cart}></Cart>
        </div>
      </div>
      <div style={{ backgroundColor: "#161623" }} className="container">
        <div className="row">
          {doctors.map((doctor) => (
            <DoctorList key={doctor.id} handleAdded={handleAdded} doctor={doctor}></DoctorList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
