import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PropertyContext } from "../context/property";
const Properties = React.lazy(() => import("../components/Properties"));
import Loading from "../components/Loading";

export default function Search() {
  const { PropertyForSale, PropertyForRent } =
    React.useContext(PropertyContext);

  const [age, setAge] = React.useState("");
  const [rooms, setRooms] = React.useState("");
  const [baths, setBaths] = React.useState("");
  const [purpose, setPurpose] = React.useState("");
  const [filtered, setFiltered] = React.useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChange2 = (event) => {
    setRooms(event.target.value);
  };
  const handleChange3 = (event) => {
    setPurpose(event.target.value);
  };
  const handleChange4 = (event) => {
    setBaths(event.target.value);
  };
  const handleSales = () => setFiltered(PropertyForSale);
  const handleRent = () => setFiltered(PropertyForRent);
  const handleBaths = (baths) =>
    setFiltered(() =>
      (purpose === "for rent" ? PropertyForRent : PropertyForSale).filter(
        (p) => p.baths === baths
      )
    );
  const handleRooms = (rooms) =>
    setFiltered(() =>
      (purpose === "for rent" ? PropertyForRent : PropertyForSale).filter(
        (r) => r.rooms === rooms
      )
    );
  const handlePrice = (price1, price2) =>
    setFiltered(() =>
      (purpose === "for rent" ? PropertyForRent : PropertyForSale).filter(
        (p) => p.price >= price1 && p.price <= price2
      )
    );
  return (
    <>
      <div className="flex mb-4 flex-col gap-4 md:gap-8 sm:flex-row justify-center items-center bg-[#E6E5E5] py-5 mt-2 mx-4">
        <div className="flex gap-4 md:gap-8 justify-around">
          {purpose === "for rent" && (
            <Box className="w-[7rem] ">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Price</InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="price"
                  onChange={handleChange}
                >
                 <MenuItem
                    value={5000}
                    onClick={() => handlePrice(5000, 9000)}
                  >
                    5,000 - 9,000
                  </MenuItem>
                  <MenuItem
                    value={10000}
                    onClick={() => handlePrice(10000, 15000)}
                  >
                    10,000 - 15,000
                  </MenuItem>
                  <MenuItem
                    value={20000}
                    onClick={() => handlePrice(20000, 25000)}
                  >
                    20,000 - 25,000
                  </MenuItem>
                  <MenuItem
                    value={30000}
                    onClick={() => handlePrice(30000, 35000)}
                  >
                    30,000 - 35,000
                  </MenuItem>
                  
                </Select>
              </FormControl>
            </Box>
          )}

          {purpose === "for sale" && (
            <Box className="w-[7rem] ">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Price</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="price"
                  onChange={handleChange}
                >
                  <MenuItem
                    value={1000000}
                    onClick={() => handlePrice(1000000, 2000000)}
                  >
                    1,000,000 - 2,000,000
                  </MenuItem>
                  <MenuItem
                    value={20000}
                    onClick={() => handlePrice(3000000, 4000000)}
                  >
                    3,000,000 - 4,000,000
                  </MenuItem>
                  <MenuItem
                    value={30000}
                    onClick={() => handlePrice(5000000, 6000000)}
                  >
                    5,000,000 - 6,000,000
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}

          <Box className="w-[7rem]">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Purpose</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={purpose}
                label="Purpose"
                onChange={handleChange3}
              >
                <MenuItem value="for rent" onClick={handleRent}>
                  For Rent
                </MenuItem>
                <MenuItem value="for sale" onClick={handleSales}>
                  For Sale
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        <div className="flex gap-4 md:gap-8">
          <Box className="w-[7rem]">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Baths</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={baths}
                label="Baths"
                onChange={handleChange4}
              >
                <MenuItem value={1} onClick={() => handleBaths(1)}>
                  1
                </MenuItem>
                <MenuItem value={2} onClick={() => handleBaths(2)}>
                  2
                </MenuItem>
                <MenuItem value={3} onClick={() => handleBaths(3)}>
                  3
                </MenuItem>
                <MenuItem value={4} onClick={() => handleBaths(4)}>
                  4
                </MenuItem>
                <MenuItem value={5} onClick={() => handleBaths(5)}>
                  5
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className="w-[7rem]">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Rooms</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={rooms}
                label="Rooms"
                onChange={handleChange2}
              >
                <MenuItem value={1} onClick={() => handleRooms(1)}>
                  1
                </MenuItem>
                <MenuItem value={2} onClick={() => handleRooms(2)}>
                  2
                </MenuItem>
                <MenuItem value={3} onClick={() => handleRooms(3)}>
                  3
                </MenuItem>
                <MenuItem value={4} onClick={() => handleRooms(4)}>
                  4
                </MenuItem>
                <MenuItem value={5} onClick={() => handleRooms(5)}>
                  5
                </MenuItem>
                <MenuItem value={6} onClick={() => handleRooms(6)}>
                  6
                </MenuItem>
              </Select>
            </FormControl>
          </Box>{" "}
        </div>
      </div>

      <div className="mx-4 mt-8">
        <h2 className="nav-links mb-4">Homes {purpose}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-5">
          {filtered.map((property) => (
            <React.Suspense key={property.id}>
              {property && <Properties property={property} />}
            </React.Suspense>
          ))}
        </div>{" "}
      </div>
    </>
  );
}
