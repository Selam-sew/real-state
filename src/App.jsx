import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Buy from "./pages/Buy";
import Home from "./pages/Home";
import Rent from "./pages/Rent";
import Layout from "./components/layout";
import PageNotFound from "./pages/PageNotFound";
import { PropertyContext } from "./context/property";
import AboutUs from "./pages/About";
import Search from "./pages/Search";
const App = () => {
  const [PropertyForSale, setPropertyForSale] = useState([]);
  const [PropertyForRent, setPropertyForRent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = [
          `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=21`,
          `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=21`,
        ];

        const promises = urls.map((url) => fetchApi(url));
        const [propertyForSale, propertyForRent, Agents] = await Promise.all(
          promises
        );

        setPropertyForSale(propertyForSale?.hits || []);
        setPropertyForRent(propertyForRent?.hits || []);
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
          }}
        >
          <Routes>
            <Route element={<Layout />}>
              <Route path="*" element={<PageNotFound />} />
              <Route index element={<Home />} />
              <Route path="buy" element={<Buy />} />
              <Route path="rent" element={<Rent />} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="search" element={<Search />} />
            </Route>
          </Routes>{" "}
        </PropertyContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
