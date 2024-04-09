import FeaturesCard from "../components/FeaturesCard"
import image1 from "../assets/dollar.png"
import image2 from "../assets/calculator.png"
import image3 from "../assets/money.png"
import image4 from "../assets/keys.png"
import image5 from "../assets/direction.png"
import image6 from "../assets/profile.png"

const buyFeatures = [
    {
        id: 1,
        image:image1,
        title: "Find out how much you can afford",
        description: "Use our affordability calculator to get a better sense of how much you can afford to spend on a home.",

    },
    {
        id: 2,
        image:image2,
        title: "Understand Your monthly costs",
        description: "Get an in depth look at your monlty and closing costs."

    },
    {
        id: 3,
        image:image3,
        title: "Find the right loan",
        description: "Our loan finder tool helps you understand your options and find the right loan for you."
    }
]

const rentingFeatures = [
    {
        id: 1,
        money:image4,
        title: "Rent with the option to buy",
        description: "Lease from Home Partners of America and get pre-approved to buy a home when the time is right."
    },
    {
        id: 2,
        image:image5,
        title: "fint out  if it's better to rent or buy",
        description:"Determine if buying or rntign makes more financial sense."
    },
    {
        id: 3,
        imae:image6,
        title: "save time with  a renter profile",
        description: "Create a profile to save time filling out applications and get alerts on new listings."
    }
]
const features = () => {
    return (
      
        <div className="mx-8">
            <h2 className="font-semibold mb-4 text-[1.4rem]">Discover how we can help</h2>
            <div className="flex gap-5 mb-4">
                <button className="border-2 py-2 px-5 rounded-[2rem]">Buying</button>
                <button  className="border-2 p-2 rounded-[2.3rem]">Renting</button>
            </div>
          {
              buyFeatures.map((feature) => (
                  <FeaturesCard key={feature.id} image={feature.image} title={feature.title} description={feature.description} />
              ))
          }
    </div>
  )
}

export default features
