import React from "react";
import { footer } from "../constant/BuyFeature";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" mt-24 relative bottom-0 flex flex-col w-full bg-red-600 pt-4">
      <ul className="flex gap-8 justify-center items-center">
        {footer.map((a) => (
          <img width={35} key={a.id} src={a.image} alt="social-media icons"  className="cursor-pointer"/>
        ))}
      </ul>

      <ul className="flex gap-8 text-white pb-4  justify-center items-center mt-4">
        <NavLink to='/buy' className="cursor-pointer">Buy</NavLink >
        <NavLink to='/rent' className="cursor-pointer">Rent</NavLink >
        <NavLink to='/search' className="cursor-pointer">Search</NavLink >
      </ul>
    </div>
  );
};

export default Footer;
