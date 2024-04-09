import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Buy from "./pages/Buy";
import Home from "./pages/Home";
import Rent from "./pages/Rent";
import Layout from "./components/layout";
import PageNotFound from './pages/PageNotFound'

const App = () => {
  const [PropertyForsale, setPropertyForSale] = useState([]);
  const [PropertyForrent, setPropertyForRent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const propertyForSale = await fetchApi(
          `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=10`
        );
        setPropertyForSale(propertyForSale?.hits || []);
        const propertyForRent = await fetchApi(
          `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=10`
        );
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
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<PageNotFound/>}/>
            <Route index element={<Home />} />
            <Route path="buy" element={<Buy propertyForSale={PropertyForsale} />} />
            <Route path="rent" element={<Rent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
