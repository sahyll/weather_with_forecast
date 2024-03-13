const API_KEY = "31a56ee5a8065e9408f001ba4962357e";


const makeIconURL = (iconID) => `https://openweathermap.org/img/wn/${iconID}@2x.png`



const getFromattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;

  const { description, icon } = weather[0];

  return {
    description,
    iconURL: makeIconURL(icon),
    name,
    country,
    speed,
    temp,
    feels_like,
    temp_max,
    temp_min,
    weather,
    humidity,
  };
};

export { getFromattedWeatherData };
