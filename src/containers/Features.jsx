import FeaturesCard from "../components/FeaturesCard"
import { buyFeatures } from "../constant/BuyFeature"



const features = () => {
    return (
      
        <div className="mx-8 mt-16">
            <h2 className="font-semibold mb-4 text-[1.4rem]">Discover how we can help</h2>
            <div className="flex gap-5 mb-4">
                <button className="border-2 py-2 px-5 rounded-[2rem]">Buying</button>
                <button  className="border-2 p-2 rounded-[2.3rem]">Renting</button>
            </div>
            <div className="grid md:grid-cols-3 gap-4  md:gap-8">
                {
              buyFeatures.map((feature) => (
                  <FeaturesCard key={feature.id} image={feature.image} title={feature.title} description={feature.description} />
              ))
          }   
            </div>
       
    </div>
  )
}

export default features
