const AgentsCard = ({ image, name, address }) => {
  return (
    <div className="flex border-[0.1rem] flex-col justify-center items-center pt-4 ">
      <img src={image} width={200} alt="headshot" className="rounded-full" />

      <div className="bg-[#E6E5E5] flex flex-col pb-4 w-full mt-3 ">
        <h2 className="font-semibold mt-4 ">{name}</h2>
        <span className="flex justify-around mt-4 items-center">
          <p>{address}</p>
          <button className="bg-black text-white px-2 rounded-sm py-1">Call Now</button>
        </span>{" "}
      </div>
    </div>
  );
};

export default AgentsCard;
