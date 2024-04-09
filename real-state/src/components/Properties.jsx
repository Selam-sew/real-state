import { NavLink } from "react-router-dom";
import verified from '../assets/verified.png'
const Properties = ({
  property: {
    coverPhoto,
    price,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalId,
  },
}) => {
  return (
    <NavLink to={`/property/${externalId}`}>
      <div className="">
        <img
          width={400}
          height={400}
          src={coverPhoto.url}
          className="rounded-sm"
          alt="real-estate-photo"
        />
        <div>
          <p className=""> {title}</p>
          <p className="text-red-400">price {price}</p>
          <p className="text-yellow-500">rooms {rooms}</p>
          <p className="text-green-500">baths {baths}</p>
          {isVerified ? <img width={23} src={verified} alt="verified-icon" />  : <p>Not Verified</p>}
          <p className="text-blue-500">area {area}</p>
        
     
        </div>
      </div>
    </NavLink>
  );
};

export default Properties;
