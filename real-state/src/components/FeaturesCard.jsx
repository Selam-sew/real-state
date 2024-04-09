
const FeaturesCard = ({image, title, description}) => {
  return (
    <div className="mb-5  py-5 flex border-2">
      <img src={image} width={50} height={50} alt="" />
      <div>
        <h2 className="font-bold features text-[1rem] mb-3">{title}</h2>
          <p className="leading-6 description">{description}</p>
      </div>
      

    </div>
  )
}

export default FeaturesCard
