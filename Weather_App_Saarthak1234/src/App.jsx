import React, { useState } from 'react';
import WeatherDisplay from './Components/WeatherDisplay/Display';
import SearchBar from './Components/Search Bar/Search';

export default function App() {
  const [weather, setWeather] = useState(null);

  // Function to fetch weather data from API
  const fetchWeatherData = async (city) => {
    const API_KEY = 'a113f655a0efb7c66aa4b84f19688a8d'; // Replace with your OpenWeather API key
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    return data;
  };

  // Handles search from the search bar component
  const handleSearch = async (city) => {
    const data = await fetchWeatherData(city);
    setWeather(data);
  };

  return (
    <div className="bg-[url('https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover justify-items-center content-center bg-no-repeat bg-center h-screen">
      <div className="backdrop-blur-xl p-8 rounded-lg shadow-lg max-w-md w-full">
        
        <div className='items-start'>
        <h1 className="text-3xl font-bold text-center text-white py-6">WEATHER APP</h1>
        <SearchBar onSearch={handleSearch} />
        </div>
        <div>
        <WeatherDisplay weather={weather} />
        </div>
      </div>
    </div>
  );
}
