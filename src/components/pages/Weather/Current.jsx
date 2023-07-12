import feelsLikeSVG from "../../../assets/icon/feels-like.svg";
import humiditySVG from "../../../assets/icon/humidity.svg";
import uvSVG from "../../../assets/icon/uv.svg";
import windSpeedSVG from "../../../assets/icon/wind-speed.svg";

function Current(props) {
  const { current } = props;

  return (
    <div className="current-location-details grid justify-end justify-center">
      <div className="w-fit-content grid-2x2 grid">
        <img
          src={feelsLikeSVG}
          alt="feels like icon"
          className="iconV01 iconV02 grid-2x2-icon"
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
          className="iconV01 iconV02 grid-2x2-icon"
        />
        <div className="humidity-header grid-2x2-header">Humidity</div>
        <div className="humidity-value grid-2x2-value">{current.humidity}</div>
      </div>
      <div className="w-fit-content grid-2x2 grid">
        <img
          src={uvSVG}
          alt="uv icon"
          className="iconV01 iconV02 grid-2x2-icon"
        />
        <div className="uv-header grid-2x2-header">UV Index</div>
        <div className="uv-value grid-2x2-value">{current.uv}</div>
      </div>
      <div className="w-fit-content grid-2x2 grid">
        <img
          src={windSpeedSVG}
          alt="wind speed icon"
          className="iconV01 iconV02 grid-2x2-icon"
        />
        <div className="wind-header grid-2x2-header">Wind</div>
        <div className="wind-value grid-2x2-value">
          <span className="wind-value">{current.wind_kph}</span>
          <span className="wind-symbol">km/h</span>
        </div>
      </div>
    </div>
  );
}

export default Current;
