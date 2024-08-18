import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
export default function SearchBox({ updateInfo }) {
  let [city, setcity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "a640dbdb947a5879942c32b5e0b61f1a";

  let getweather = async () => {
    let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonres = await res.json();
    console.log(jsonres);
    let result = {
      city: city,
      temp: jsonres.main.temp,
      tempMin: jsonres.main.temp_min,
      tempMax: jsonres.main.temp_max,
      humidity: jsonres.main.humidity,
      feelsLike: jsonres.main.feels_like,
      des: jsonres.weather[0].description,
    };
    console.log(result);
    return result;
  };

  let handleinput = (event) => {
    setcity(event.target.value);
  };

  let handlesubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    let newInfo = await getweather();
    setcity("");
    updateInfo(newInfo);
  };
  return (
    <div className="searchbox">
      <h3>Search For Weather</h3>
      <form>
        <TextField
          id="City"
          label="City Name"
          variant="outlined"
          required
          size="small"
          value={city}
          onChange={handleinput}
        />
        <br />
        <br />
        <Button
          variant="contained"
          type="submit"
          size="small"
          onClick={handlesubmit}
        >
          Search
        </Button>
      </form>
    </div>
  );
}
