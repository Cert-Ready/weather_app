import Weather from "./Weather/Weather";

function Home(props) {
  const { locationQuery, ClearInput } = props;

  return (
    <>
      {!data && <div className=" jello loading"></div>}
      {data && (
        <Weather
          data={data}
          ClearInput={ClearInput}
        />
      )}
    </>
  );
}

export default Home;

const data = {
  location: {
    name: "London",
    region: "City of London, Greater London",
    country: "United Kingdom",
    lat: 51.52,
    lon: -0.11,
    tz_id: "Europe/London",
    localtime_epoch: 1689190264,
    localtime: "2023-07-12 20:31",
  },
  current: {
    temp_c: 20.0,
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
      code: 1003,
    },
    wind_kph: 20.2,
    humidity: 49,
    feelslike_c: 20.0,
    uv: 5.0,
  },
  forecast: {
    forecastday: [
      {
        date_epoch: 1689120000,
        day: {
          maxtemp_c: 22.0,
          mintemp_c: 13.9,
          totalsnow_cm: 0.0,
          condition: {
            text: "Patchy rain possible",
            icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
            code: 1063,
          },
        },
        astro: {},
        hour: [
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
        ],
      },
      {
        date_epoch: 1689206400,
        day: {
          maxtemp_c: 22.7,
          mintemp_c: 13.5,
          totalsnow_cm: 0.0,
          condition: {
            text: "Patchy rain possible",
            icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
            code: 1063,
          },
        },
        astro: {},
        hour: [
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
        ],
      },
      {
        date_epoch: 1689292800,
        day: {
          maxtemp_c: 17.6,
          mintemp_c: 15.0,
          totalsnow_cm: 0.0,
          condition: {
            text: "Patchy rain possible",
            icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
            code: 1063,
          },
        },
        astro: {},
        hour: [
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
          { condition: {} },
        ],
      },
    ],
  },
};
