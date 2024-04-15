import { NavLink } from "react-router-dom";
import verified from "../assets/verified.png";


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
    location,
  },
}) => {
  return (
    <NavLink to={`/property/${externalId}`}>
      <div className="border-2 rounded-sm pb-2">
        <img
          src={coverPhoto.url}
          className=" h-[40vh]  object-cover w-full  "
          alt="real-estate-photo"
        />

        <div className="pt-2 rounded-md ">
          <div className="flex gap-2 items-center">
            {isVerified ? (
              <img width={23} src={verified} alt="verified-icon" />
            ) : (
              <p>Not Verified</p>
            )}
            <p className="font-semibold"> {title.slice(0,38) +" ..."}</p>
          </div>

            <p className="flex mt-2 text-[1.2rem] font-semibold">
              <span className="ml-2">{price}$</span>
            </p>

            <div className="flex ml-2 font-semibold gap-4">
              <p className="flex gap-1">
                {rooms} {rooms > 1 ? <span className="font-normal">rooms</span> : <span className="font-normal">room</span>}{" "}
              </p>
              <p className="flex gap-1 ">
                {baths} {baths > 1 ? <span className="font-normal">baths</span> : <span className="font-normal">bath</span>}
              </p>
              <p className="">{Math.round(area)} <span className="font-normal">sqmt</span> </p>
            </div>
          <p className="ml-2">{location[2].name}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Properties;
