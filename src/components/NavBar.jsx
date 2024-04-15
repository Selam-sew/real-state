import { NavLink } from "react-router-dom";
import icon from "../assets/icons8-hamburger-menu-50.png";
import icon2 from "../assets/touch-icon.png";
import { useEffect, useState, useRef } from "react";
import {linkInfo} from '../constant/BuyFeature'
import Button from "./Button";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  
  const toggleButtonRef = useRef(null);
  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setClicked(false);
      }
    };
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);
  return (
    <div className="flex  justify-between items-center mt-2 mx-5">
      <NavLink to="/" className="flex items-center">
        <img src={icon2} alt="icon" className="w-[1.5rem] h-[1.3rem] mr-1" />
        <p className="logo text-[1.5rem] font-bold">
          <span className="text-red-500">real</span>tor.com
        </p>
      </NavLink>

      <div className="">
        <img
          onClick={handleClick}
          ref={toggleButtonRef}
          src={icon}
          alt="icon"
          className=" cursor-pointer lg:hidden w-8 h-7"
        />
        <div
          className={`${
            clicked ? "" : "hidden"
          }  absolute right-0 flex mr-2   flex-col lg:hidden lg:border-none  bg-white mt-3`}
        >
          {linkInfo.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className="text-[1rem]  border md:border-none px-6 py-1 transition-all duration-300 p-2 ease-in"
            >
              {link.title}
            </NavLink>
          ))}

       
        </div>

        <div className="hidden nav-links lg:flex gap-4 items-center">
        {linkInfo.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className="    py-1 transition-all duration-300 p-2 ease-in"
            >
            {link.title}
            
            </NavLink>
        ))}
          <Button/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
