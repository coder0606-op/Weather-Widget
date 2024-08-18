import { useState } from "react";
import DescriptionBox from "./DescripionBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weather, setweather] = useState({
    city: "....",
    temp: 0,
    tempMin: 0,
    tempMax: 0,
    humidity: 0,
    feelsLike: 0,
  });

  let updateInfo = (result) => {
    setweather(result);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App </h2>
      <SearchBox updateInfo={updateInfo} />
      <DescriptionBox info={weather} />
    </div>
  );
}
