import axios from "axios";

const apiKey = "1261aae2b0f0498ca7594908241203";
const forecastEndPoint = params => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;
const locationsEndPoint = params => `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

const apiCall =async(endpoint) => {
    const options ={
        method:"get",
        url: endpoint,
    }
    try{
        const response = await axios.request(options);
        return response.data;
    } catch(err){
        console.log("error: ", err);
        return null;
    }
}

export const fetchWeatherForecast = params => {
    return apiCall(forecastEndPoint(params));
}
export const fetchLocations = params => {
    return apiCall(locationsEndPoint(params));
}