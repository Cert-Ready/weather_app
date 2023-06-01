import { format } from 'date-fns';
import feelsLikeSVG from '../assets/icon/feels-like.svg';
import humiditySVG from '../assets/icon/humidity.svg';
import uvSVG from '../assets/icon/uv.svg';
import windSpeedSVG from '../assets/icon/wind-speed.svg';

export async function createDOM(data) {
  let DOM = '';

  DOM += await createCurrentLocation(data);
  DOM += await createForecast(data);

  return DOM;
}

async function createCurrentLocation(data) {
  return `      
    <div class="current-location grid">
          <div class="grid">
            <div class="location">
            <div class="location-name text-large">${data.location.name}, ${data.location.country}</div>
            <div class="location-date text-small">${format(
              new Date(data.location.localtime_epoch * 1000),
              'EEEE MMMM d yyyy'
            )}</div>
            <div class="location-hour">${format(new Date(data.location.localtime_epoch * 1000), 'HH:mm')}</div>
            </div>

            <div class="current">
            <div class="condition">${data.current.condition.text}</div>
            <div class="place-items-c w-fit-content grid grid-2x2">
                <img src="${data.current.condition.icon}" 
                alt="weather condition icon" 
                class="condition-icon grid-2x2-icon" 
                />
                <div class="temp-c grid-2x2-header">
                <span class="temp-value">${data.current.temp_c}</span> <span class="temp-symbol">&#176;</span>
                <span class="temp-symbol-letter">C</span>
                </div>
                <div class="temp-toggle grid">
                <span class="temp-toggle-c">C</span>
                <label class="switch">
                    <input type="checkbox" id="temp-toggle" />
                    <span class="slider"></span>
                </label>
                <span class="temp-toggle-f">F</span>
                </div>
              </div>
            </div>
          </div>

        <div class="current-location-details grid justify-end justify-center">
            <div class="w-fit-content grid-2x2 grid">
              <img src="${feelsLikeSVG}" alt="feels like icon" class="iconV01 grid-2x2-icon" />
              <div class="feels-like-header grid-2x2-header">Feels like</div>
                <div class="feels-like-value grid-2x2-value">
                    <span class="temp-value">${data.current.feelslike_c}</span> <span class="temp-symbol">&#176;</span>
                    <span class="temp-symbol-letter">C</span>
                </div>
              </div>
              <div class="w-fit-content grid-2x2 grid">
                <img src="${humiditySVG}" alt="search-icon" class="iconV01 grid-2x2-icon" />
                <div class="humidity-header grid-2x2-header">Humidity</div>
                <div class="humidity-value grid-2x2-value">${data.current.humidity}</div>
              </div>
              <div class="w-fit-content grid-2x2 grid">
                <img src="${uvSVG}" alt="search-icon" class="iconV01 grid-2x2-icon" />
                <div class="uv-header grid-2x2-header">UV Index</div>
                <div class="uv-value grid-2x2-value">${data.current.uv}</div>
              </div>
              <div class="w-fit-content grid-2x2 grid">
                <img src="${windSpeedSVG}" alt="search-icon" class="iconV01 grid-2x2-icon" />
                <div class="wind-header grid-2x2-header">Wind</div>
                <div class="wind-value grid-2x2-value">
                    <span class="wind-value">${data.current.wind_kph}</span>
                    <span class="wind-symbol">km/h</span>
                </div>
              </div>
          </div>
        </div>`;
}

async function createForecast(data) {
  let forecast = `      
    <div class="forecast grid">
        <h2 class="forecast-header text-center">Forecast</h2>
         <div class="days grid justify-center">`;

  data.forecast.forecastday.forEach((el) => {
    forecast += `
        <div class="day">
            <div class="day">${format(new Date(el.date_epoch * 1000), '	EEEE')}</div>
            <div class="day-max text-medium">
              <span class="temp-value">${el.day.maxtemp_c}</span> <span class="day-max-symbol">&#176;</span>
              <span class="temp-symbol-letter">C</span>
            </div>
            <div class="day-min text-small">
              <span class="temp-value">${el.day.mintemp_c}</span> <span class="day-min-symbol">&#176;</span>
              <span class="temp-symbol-letter">C</span>
            </div>
            <div class="day-icon"><img src="${el.day.condition.icon}" alt="weather icon" /></div>
        </div>`;
  });

  forecast += `  
      </div>
    </div>`;

  return forecast;
}

export async function createError(error) {
  return `
    <div class="error">
      <h2>⛔ ${error}</h2>
    </div>`;
}
