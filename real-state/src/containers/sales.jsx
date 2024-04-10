import React, { Suspense, useContext } from "react";
import { PropertyContext } from "../context/property";
import { NavLink } from "react-router-dom";
import Loading from "../components/Loading";

const Properties = React.lazy(() => import("../components/Properties"));

const Sales = () => {
  const { PropertyForSale2 } = useContext(PropertyContext);
  return (
    <div className="ml-8 md:mr-8 mt-12">
      <div className="flex items-center mr-8 justify-between">
           <h1 className="font-semibold text-[1.3rem]">Homes For Sale</h1>
      <NavLink to="/buy">View All</NavLink>
      </div>
   
      <Suspense fallback={<Loading />}>
        <div className="flex md:grid sm:grid-cols-2 lg:grid-cols-3  overflow-x-scroll md:gap-10 mt-4  gap-4  ">
          {PropertyForSale2.map((property) => (
            <NavLink key={property.id}>
              <div className="w-[17em] mb-3  md:w-full">
                <Properties property={property} />
              </div>
            </NavLink>
          ))}
        </div>{" "}
      </Suspense>
    </div>
  );
};

export default Sales;
