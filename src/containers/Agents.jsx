import { agents } from "../constant/BuyFeature";
import AgentsCard from "../components/AgentsCard";
const Agents = () => {
  return (
      <div className="mt-16 mx-8 sm:mx-20 md:mx-8 text-center text">
          <h1 className="font-semibold nav-links text-[1.3rem] mb-4">Contact Our Agents</h1>
      <div className=" gap-10 grid grid-cols-1 ssm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {agents.map((a) => (
          <AgentsCard
            name={a.name}
            image={a.image}
            address={a.address}
            key={a.id}
          />
        ))}
      </div>{" "}
    </div>
  );
};

export default Agents;
