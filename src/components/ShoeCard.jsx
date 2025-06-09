import React, { useContext } from "react";


import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/Context";

const ShoeCard = () => {
  const navigate = useNavigate();

  const {user, setUser} = useContext(UserContext);
  let arr = [
    {id:1, price: 20, para: "GLUXUR|", image: "./shoe1.png" },
    {id:2, price: 30, para: " RUNNER SHOE", image: "./shoe2.png" },
    {id:3, price: 50, para: "GLUXURY|", image: "./shoe3.png" },
    {id:4, price: 70, para: "AIR-ROLL-STROLL", image: "./shoe4.png" },
    {id:5, price: 80, para: "BASIC RUN-WAVE", image: "./shoe5.png" },
    {id:6, price: 100, para: "Gluxury|", image: "./shoe6.png" },
    {id:7, price: 80, para: "POWERLIF-M",image: "./shoe7.png" },
    {id:8, price: 100, para: "BASIC RUN-WAVE", image: "./shoe8.png" },
  ];

   const handleAddToCart = (item) => {
    // console.log("in maion",item)

    setUser([...user, {...item}])
    navigate('/cart')
  
  };


  return (
    <>
      <div className="h-fit w-screen  mt-10 flex flex-wrap gap-10 items-center py-8 px-30  ">
        {arr.map((val) => (
          <div key={val.id}  className=" bg-[rgb(226,226,231)] h-80 w-70 b-blue-200" onClick={()=> handleAddToCart(val)}>
            <div className='h-65 w-69'>
              <img src={val.image} alt="" />
            </div>
            <h3 className="text-xl mt-[-6%]">${val.price}</h3>
            <p>{val.para}</p>
            <small>Performance</small>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShoeCard;
