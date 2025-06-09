import React from "react";
import { NavLink } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="h-13 w-full  flex items-center justify-between px-22 py-10">
      <img width={200} src="./logo.png" alt="error in image" />
      <div className="flex gap-15">
        <NavLink
          to="/"
          className={(e) => (e.isActive ? "text-red-800" : "")}
        >
          HOME
        </NavLink>
        <NavLink
          to="/man"
          className={(e) => (e.isActive ? "text-red-800  hover:underline" : " hover:underline")}
        >
          MAN
        </NavLink>
        <NavLink
          to="/woman"
          className={(e) => (e.isActive ? "text-red-800" : "")}
        >
          WOMAN
        </NavLink>
        
        <NavLink
          to="/collection"
          className={(e) => (e.isActive ? "text-red-800" : "")}
        >
          COLLECTION
        </NavLink>
        <NavLink
          to="/sell"
          className={(e) => (e.isActive ? "text-red-800" : "")}
        >
          SELL
        </NavLink>
      </div>

      <div className="flex items-center gap-10">
        <NavLink
          to="/signin"
          className={(e) => (e.isActive ? "text-red-800 flex items-center justify-center gap-1.5" : "flex items-center justify-center gap-1.5")}
        >
          <MdLogin /> SIGNIN{" "}
        </NavLink>
        <NavLink
          to="/signup"
          className={(e) => (e.isActive ? "text-red-800 flex items-center justify-center gap-1.5" : "flex items-center justify-center gap-1.5")}
        >
          <RiLogoutBoxLine /> SIGNUP
        </NavLink>

        <NavLink to="/cart"
          className={(e) => (e.isActive ? "text-red-800 flex items-center justify-center gap-1.5" : "flex items-center justify-center gap-1.5")}><FaShoppingCart /> CART</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
