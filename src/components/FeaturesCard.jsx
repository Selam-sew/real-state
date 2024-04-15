
const FeaturesCard = ({image, title, description}) => {
  return (
    <div className="mb-5  py-5 grid grid-cols-[1fr,2fr] px-2  border-2">
      <img src={image} width={60} height={30} alt="icons" className="object-cover" />
      <div>
        <h2 className="font-bold features text-[1rem]  mb-3">{title}</h2>
          <p className="leading-6 description">{description}</p>
      </div>
      

    </div>
  )
}

export default FeaturesCard
