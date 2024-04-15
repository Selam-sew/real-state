import React, { Suspense, useContext } from "react";
import Loading from "../components/Loading";
import { PropertyContext } from "../context/property";
import Pagination from "../components/Pagination";
const Properties = React.lazy(() => import("../components/Properties"));

const Buy = () => {
  const { PropertyForSale } = useContext(PropertyContext);

  return (
    <div className="mx-5 mt-8 ">
      <h1 className="font-semibold buy mb-4 ">Homes For Sell</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {PropertyForSale.map((property) => (
          <Suspense fallback={<Loading/>} key={property.id}>
            <Properties property={property} key={property.id} />
          </Suspense>
        ))}
      </div>{" "}
      <Pagination/>
    </div>
  );
};

export default Buy;
