import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const ShoeCard = () => {
  const navigate = useNavigate();
  let arr = [
    { price: 20, para: "GLUXUR|" },
    { price: 30, para: "RESPONSE RUNNER SHOE" },
    { price: 50, para: "GLUXURY|" },
    { price: 70, para: "AIR-ROLL-STROLL" },
    { price: 80, para: "BASIC RUN-WAVE" },
    { price: 100, para: "Gluxury|" },
    { price: 80, para: "POWERLIF-M" },
    { price: 100, para: "BASIC RUN-WAVE" },
  ];

  arr.map((val) => {
    console.log(val);
  });

  return (
    <>
      <div className="h-fit w-screen  mt-10 flex flex-wrap gap-10 items-center py-8 px-30 ">
        {arr.map((val) => (
          <NavLink to="/addcart" className="h-80 w-70 b-blue-200 border ">
            <div className='h-65 w-69  bg-[url("https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center'></div>
            <h3 className="text-3xl">{val.price}</h3>
            <p>{val.para}</p>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default ShoeCard;
