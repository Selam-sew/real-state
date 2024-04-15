import React, { Suspense, useContext } from "react";
import { PropertyContext } from "../context/property";
import Loading from "../components/Loading";
import { Pagination } from "@mui/material";
const Properties = React.lazy(() => import("../components/Properties"));

const Rent = () => {
  const { PropertyForRent } = useContext(PropertyContext);

  return (
    <div className="mx-6 mt-12">
      <h1 className="mb-4 nav-links">Homes For Rent</h1>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {PropertyForRent.map((property) => (
            <Properties property={property} key={property.id} />
          ))}{" "}
        </div>
      </Suspense>
      <Pagination/>
    </div>
  );
};

export default Rent;
