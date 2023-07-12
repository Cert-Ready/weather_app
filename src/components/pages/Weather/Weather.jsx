import LocationDetails from "./LocationDetails";
import Forecast from "./Forecast";
import { SetTitle } from "../../modules/SetTitle";

function Weather(props) {
  const { data, ClearInput } = props;

  SetTitle(`Weather - ${data.location.name}`);

  return (
    <>
      <LocationDetails
        location={data.location}
        current={data.current}
      />

      <Forecast forecast={data.forecast.forecastday} />

      <button
        onClick={ClearInput}
        className="button-v01"
      >
        New Search
      </button>
    </>
  );
}

export default Weather;
