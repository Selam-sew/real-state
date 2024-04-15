import React, { Suspense, useContext } from "react";
import { PropertyContext } from "../context/property";
import { NavLink } from "react-router-dom";
import Loading from "../components/Loading";
const Properties = React.lazy(() => import("../components/Properties.jsx"));

const Rent = () => {
  const { PropertyForRent } = useContext(PropertyContext);
  return (
      <div className="ml-8 md:mr-8 mt-16">
          <div className="flex items-center mr-8 md:mr-4 justify-between">
               <h1 className="font-semibold text-[1.3rem]">Homes For Rent</h1>
          <NavLink to="/rent">
             View All 
          </NavLink> 
          </div>
        
      <Suspense fallback={<Loading />}>
        <div className="flex md:grid sm:grid-cols-2 lg:grid-cols-3  overflow-x-scroll md:gap-10 mt-4  gap-4  ">
          {PropertyForRent.slice(0,6).map((property) => (
            <NavLink key={property.id}>
              <div className="w-[17em] mb-3 md:w-full">
                <Properties property={property} />
              </div>
            </NavLink>
          ))}
        </div>{" "}
      </Suspense>
    </div>
  );
};

export default Rent;
