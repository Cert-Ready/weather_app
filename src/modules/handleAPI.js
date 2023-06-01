import { mainContentEl } from '..';
import { createError } from './handleDOM';

export async function getData(query) {
  const API_KEY = '';
  const API_URL_START = 'https://api.weatherapi.com/v1/forecast.json?key=';
  const API_URL_END = '&days=6&aqi=no&alerts=no';
  const URL = `${API_URL_START}${API_KEY}&q=${query}${API_URL_END}`;

  try {
    const response = await fetch(URL, { mode: 'cors' });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error(error);
    mainContentEl.innerHTML = await createError(error);
  }
}
