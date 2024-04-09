import { NavLink } from "react-router-dom";
import search from '../assets/icons8-search.svg'

const HeroSection = () => {
  return (
      <div className="hero-section mt-2 text-center px-2 ">
          <div className="pt-12">
                <h1 className="font-bold leading-[2rem]  text-[2rem] text-white">
        The #1 site real estate professionals trust
      </h1>
      <p className="text-white text-2xl mt-5">Shop Your Dream Home With Us now!!!</p>
      
          
          </div>
    <div className="flex justify-center mt-8 ml-4">
              <input type="text" placeholder="Address, School, City " className="rounded-md  mt-8 h-10 p-2 w-[20rem]" />
              <img src={search} className="relative cursor-pointer top-4 right-8"  alt="" />
          </div>
      <div className="flex justify-center mt-8 mb-10 gap-8">
        <NavLink to="/buy">
          <button className="bg-black py-2 text-white px-4 rounded-md my-8">
            Buy Now
          </button>
        </NavLink>
        <NavLink to="/rent">
          <button className="bg-white py-2  text-black px-4 rounded-md my-8">
            Rent Now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default HeroSection;
