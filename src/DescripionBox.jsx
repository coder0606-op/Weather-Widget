import * as React from "react";
import Card from "@mui/material/Card";
import "./DescriptionBox.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
export default function DescriptionBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1513002066671-74ea5914a6a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1676212747574-c401d596e853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UkFJTll8ZW58MHx8MHx8fDA%3D";
  return (
    <div className="infobox">
      <h1>Weather Info </h1>
      <div className="card">
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            sx={{ height: 100 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>Temprature:{info.temp}&deg;C</div>
              <div>Humidity:{info.humidity}</div>
              <div>Temprature Max:{info.tempMax}&deg;C</div>
              <div>Temprature Min:{info.tempMin}&deg;C</div>
              <div>Weather Feels Like:{info.feelsLike}&deg;C</div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
