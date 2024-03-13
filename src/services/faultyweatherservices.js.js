import { DateTime } from "luxon";

const API_KEY = "1261aae2b0f0498ca7594908241203";
const BASE_URL = "https://api.weatherapi.com/v1";

const getWeatherData = (infoType, searchParams, hours = 24) => {
  const url = new URL(`${BASE_URL}/${infoType}.json`); //inbuilt constructor
  url.search = new URLSearchParams({ ...searchParams, key: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    location,
    current: {
      temp_c,
      feelslike_c,
      temp_f,
      feelslike_f,
      humidity,
      wind_kph,
      pressure_mb,
      cloud,
      condition: { text, icon },
    },
  } = data;

  const {
    name,
    country,
    localtime,
    tz_id,
    lat,
    lon,
  } = location;

  return {
    name,
    country,
    lat,
    lon,
    localtime,
    tz_id,
    temp_c,
    feelslike_c,
    temp_f,
    feelslike_f,
    humidity,
    wind_kph,
    pressure_mb,
    cloud,
    condition: { text, icon },
  };
};


const formatForecastWeather = (data) =>{
  const { location, forecast: { forecastday } } = data;
  const daily = forecastday.map((day) => {
    return {
      date: day.date,
      avgtemp_c: day.day.avgtemp_c,
      avgtemp_f: day.day.avgtemp_f,
      icon: day.day.condition.icon,
    };
  });


  const hourly = forecastday[0].hour.map((hour) => {
    return {
      time: hour.time,
      temp_c: hour.temp_c,
      temp_f: hour.temp_f,
      icon: hour.condition.icon,
    };
  });

  return { location, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "current",
    searchParams
  ).then(formatCurrentWeather);

  const now = DateTime.local(); // Get the current date and time
  const currentHour = now.hour;

  const formattedForecastWeather = await getWeatherData("forecast", {
    ...searchParams,
    days: 3,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};


export default getFormattedWeatherData;
