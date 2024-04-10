import React from "react";
import {buttons} from "../constant/BuyFeature";
import { NavLink } from "react-router-dom";
const Button = () => {
  return (
    <div className=" ml-12 ">
      {buttons.map((button) => (
        <NavLink key={button.id} to={button.link}>
          <button key={button.id} className={`px-2 py-1 rounded-sm ${button.id===1?"bg-black border-none text-white":"border-[0.1rem] ml-3"}`}>{button.title}</button>
        </NavLink>
      ))}
    </div>
  );
};

export default Button;
