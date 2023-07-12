import format from "date-fns/format";

function Location(props) {
  const { location, current } = props;

  return (
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
  );
}

export default Location;
