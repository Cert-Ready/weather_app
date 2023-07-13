const ParseData = (data) => {
  return {
    ...data,
    forecast: data.forecast.forecastday.map((day) => {
      delete day.astro;
      delete day.hour;
      return day;
    }),
  };
};

export default ParseData;
