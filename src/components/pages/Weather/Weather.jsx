import Location from "./Location";
import LocationDetails from "./LocationDetails";
import Forecast from "./Forecast";
import { useState, useEffect } from "react";

function Weather(props) {
  const { data } = props;
  const [weather, SetWeather] = useState({});

  useEffect(() => {
    let isMounted = false;

    SetWeather({
      location: data.location,
      current: data.current,
      forecast: data.forecast.forecastday.map((x) => {
        delete x.hour;
        delete x.astro;
        return x;
      }),
    });

    return () => {
      isMounted = true;
    };
  }, [data]);

  return (
    <>
      <div className="current-location grid">
        <Location />
        <LocationDetails />
      </div>
      <Forecast />
    </>
  );
}

export default Weather;
