import Filter from "../components/filter";
import React, { Suspense, useContext } from "react";
import Loading from "../components/Loading";
import { PropertyContext } from "../context/property";
const Properties = React.lazy(() => import("../components/Properties"));

const Buy = () => {
  const { PropertyForSale } = useContext(PropertyContext);

  return (
    <div className="mx-5 mt-12 ">
      <Filter />
      <h1 className="font-semibold buy mb-4 ">Homes For Sell</h1>
      <Suspense fallback={<Loading />}>
        {" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {PropertyForSale.map((property) => (
           console.log(property)
            // <Properties property={property} key={property.id} />
          ))}
        </div>{" "}
      </Suspense>
    </div>
  );
};

export default Buy;
