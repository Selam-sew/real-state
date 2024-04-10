import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Buy from "./pages/Buy";
import Home from "./pages/Home";
import Rent from "./pages/Rent";
import Layout from "./components/layout";
import PageNotFound from "./pages/PageNotFound";
import { PropertyContext } from "./context/property";
import AboutUs from './pages/About'
const App = () => {
  const [PropertyForSale, setPropertyForSale] = useState([]);
  const [PropertyForRent, setPropertyForRent] = useState([]);
  const [PropertyForSale2, setPropertyForSale2] = useState([]);
  const [PropertyForRent2, setPropertyForRent2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const propertyForSale = await fetchApi(
          `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=12`
        );

        const propertyForSale2 = await fetchApi(
          `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
        );
        setPropertyForSale(propertyForSale?.hits || []);
        setPropertyForSale2(propertyForSale2?.hits || []);

        const propertyForRent = await fetchApi(
          `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=12`
        );
        const propertyForRent2 = await fetchApi(
          `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
        );
        setPropertyForRent(propertyForRent?.hits || []);
        setPropertyForRent2(propertyForRent2?.hits || []);
      } catch (error) {
        console.error("error fetching properties", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <BrowserRouter>
        {" "}
        <PropertyContext.Provider
          value={{
            PropertyForSale,
            PropertyForRent,
            PropertyForSale2,
            PropertyForRent2,
          }}
        >
          <Routes>
            <Route element={<Layout />}>
              <Route path="*" element={<PageNotFound />} />
              <Route index element={<Home />} />
              <Route path="buy" element={<Buy />} />
              <Route path="rent" element={<Rent />} />
              <Route path="aboutus" element={<AboutUs/>}/>
            </Route>
          </Routes>{" "}
        </PropertyContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
