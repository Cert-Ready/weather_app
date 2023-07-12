import { nanoid } from "nanoid";
import format from "date-fns/format";

function Forecast(props) {
  const { forecast } = props;

  return (
    <>
      <h2 className="forecast-header text-center">Forecast</h2>
      <div className="forecast grid">
        <div className="days grid justify-center">
          {forecast.map((el) => {
            return (
              <div
                className="day"
                key={nanoid()}
              >
                <div className="day">{format(new Date(el.date_epoch * 1000), " EEEE")}</div>
                <div className="day-max text-medium">
                  <span className="temp-value">{el.day.maxtemp_c}</span>
                  <span className="day-max-symbol">&#176;</span>
                  <span className="temp-symbol-letter">C</span>
                </div>
                <div className="day-min text-small">
                  <span className="temp-value">{el.day.mintemp_c}</span>
                  <span className="day-min-symbol">&#176;</span>
                  <span className="temp-symbol-letter">C</span>
                </div>
                <div className="day-icon">
                  <img
                    src={el.day.condition.icon}
                    alt="weather icon"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Forecast;
