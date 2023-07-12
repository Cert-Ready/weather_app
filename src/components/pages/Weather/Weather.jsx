import LocationDetails from "./LocationDetails";
import Forecast from "./Forecast";

function Weather(props) {
  const { data } = props;

  return (
    <>
      <LocationDetails
        location={data.location}
        current={data.current}
      />

      <Forecast forecast={data.forecast.forecastday} />
    </>
  );
}

export default Weather;
