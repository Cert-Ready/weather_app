import Location from "./Location";
import Forecast from "./Forecast";

function Weather(props) {
  const { data } = props;

  return (
    <>
      <Location
        location={data.location}
        current={data.current}
      />

      <Forecast forecast={data.forecast.forecastday} />
    </>
  );
}

export default Weather;
