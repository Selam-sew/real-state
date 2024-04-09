import {PropTypes} from "prop-types";
import Properties from "../components/Properties";
import Filter from "../components/filter";
const Buy = ({propertyForSale}) => {

  
  return (
    <div className="mx-5 mt-12 ">
      <Filter/>
      <h1 className="font-semibold buy mb-4 ">Homes For Rent</h1> 
      <div className="grid grid-cols-2  gap-5">
        {propertyForSale.map((property) => (
        // console.log(property)
          <Properties property={property} key={property.id} />    

        ))}
      </div>
    </div>
  );
};

Buy.propTypes = {
  PropertyForsale: PropTypes.array,
};


export default Buy;
