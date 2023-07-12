import format from "date-fns/format";
import feelsLikeSVG from "../../../assets/icon/feels-like.svg";
import humiditySVG from "../../../assets/icon/humidity.svg";
import uvSVG from "../../../assets/icon/uv.svg";
import windSpeedSVG from "../../../assets/icon/wind-speed.svg";

function Location(props) {
  const { location, current } = props;

  return (
    <div className="current-location grid pri-padding">
      <div className="grid">
        <div className="location">
          <div className="location-name text-large">
            {location.name}, {location.country}
          </div>
          <div className="location-date text-small">
            {format(new Date(location.localtime_epoch * 1000), "EEEE MMMM d yyyy")}
          </div>
          <div className="location-hour">
            {format(new Date(location.localtime_epoch * 1000), "HH:mm")}
          </div>
        </div>

        <div className="current">
          <div className="condition">{current.condition.text}</div>
          <div className="place-items-c w-fit-content grid grid-2x2">
            <img
              src={current.condition.icon}
              alt="weather condition icon"
              className="condition-icon grid-2x2-icon"
            />
            <div className="temp-c grid-2x2-header">
              <span className="temp-value">{current.temp_c}</span>
              <span className="temp-symbol">&#176;</span>
              <span className="temp-symbol-letter">C</span>
            </div>
            <div className="temp-toggle grid">
              <span className="temp-toggle-c">C</span>
              <label className="switch">
                <input
                  type="checkbox"
                  id="temp-toggle"
                />
                <span className="slider"></span>
              </label>
              <span className="temp-toggle-f">F</span>
            </div>
          </div>
        </div>
      </div>

      <div className="current-location-details grid justify-end justify-center">
        <div className="w-fit-content grid-2x2 grid">
          <img
            src={feelsLikeSVG}
            alt="feels like icon"
            className="iconV01 grid-2x2-icon"
          />
          <div className="feels-like-header grid-2x2-header">Feels like</div>
          <div className="feels-like-value grid-2x2-value">
            <span className="temp-value">{current.feelslike_c}</span>
            <span className="temp-symbol">&#176;</span>
            <span className="temp-symbol-letter">C</span>
          </div>
        </div>
        <div className="w-fit-content grid-2x2 grid">
          <img
            src={humiditySVG}
            alt="humidity icon"
            className="iconV01 grid-2x2-icon"
          />
          <div className="humidity-header grid-2x2-header">Humidity</div>
          <div className="humidity-value grid-2x2-value">{current.humidity}</div>
        </div>
        <div className="w-fit-content grid-2x2 grid">
          <img
            src={uvSVG}
            alt="uv icon"
            className="iconV01 grid-2x2-icon"
          />
          <div className="uv-header grid-2x2-header">UV Index</div>
          <div className="uv-value grid-2x2-value">{current.uv}</div>
        </div>
        <div className="w-fit-content grid-2x2 grid">
          <img
            src={windSpeedSVG}
            alt="wind speed icon"
            className="iconV01 grid-2x2-icon"
          />
          <div className="wind-header grid-2x2-header">Wind</div>
          <div className="wind-value grid-2x2-value">
            <span className="wind-value">{current.wind_kph}</span>
            <span className="wind-symbol">km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
