import React, { Suspense, useContext } from "react";
import { PropertyContext } from "../context/property";
import Filter from "../components/filter";
import Loading from "../components/Loading";
const Properties = React.lazy(() => import("../components/Properties"));

const Rent = () => {
  const { PropertyForRent } = useContext(PropertyContext);

  return (
    <div className="mx-6 mt-12">
      <Filter />
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {PropertyForRent.map((property) => (
            <Properties property={property} key={property.id} />
          ))}{" "}
        </div>
      </Suspense>
    </div>
  );
};

export default Rent;
