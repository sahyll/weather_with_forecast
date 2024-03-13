import './App.css';

import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import { useEffect, useState } from 'react';
import { getFromattedWeatherData } from './services/weatherService';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [weather, setWeather] = useState(null);
  const[units, setUnits] =useState("metric");

  const handleUnits = async (newUnits) => {
    
    setUnits(newUnits);
    // console.log("First click!");
    // if (searchTerm) { // Refetch only if searchTerm exists
    //   fetchWeatherData(searchTerm, units);
    //    // Use searchTerm for weather data
    // } else {
    //   fetchWeatherData('paris'); // Fallback to default location if no search
    // }
  };

  const handleSearchFromApp = (searchInput) => {
    setSearchTerm(searchInput);
    fetchWeatherData(searchInput); // Fetch weather data based on search term
  };

  const fetchWeatherData = async (location, unit) => {
    unit = units;
    const data = await getFromattedWeatherData(location, unit);
    setWeather(data);
  };

  useEffect(() => {
    if (searchTerm) {
      fetchWeatherData(searchTerm, units);
    } else {
      fetchWeatherData('paris');
    }
  }, [units, searchTerm]);
  
  

  



  return( 
    <div>
    {weather && (
      <div className='container'>
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl
      shadow-gray-400">
        <TopButtons />
        <Inputs 
          onSearch={handleSearchFromApp}
          onUnitChange={handleUnits}
        />
        
        <TimeAndLocation name={weather.name} country={weather.country}/>
        <TemperatureAndDetails 
          image={weather.iconURL}
          description={weather.description}
          temperature={weather.temp}
          units={units === 'metric' ? 'C' : 'F'}
          real={weather.feels_like}
          humidity={weather.humidity}
          wind={weather.speed}
          high={weather.temp_max}
          low={weather.temp_min}
        />
        <Forecast title="hourly forecast"/>
        <Forecast title="Daily forecast"/>
      </div>
    </div>
    )}
    </div>
  );
  
}

export default App;
