import React from 'react';

export default function WeatherDisplay({ weather }) {
  if (!weather) return null; // If no weather data is available, don't display anything

  return (
    <div className="mt-4 text-center">
      <h1 className="text-2xl text-white">{weather.name}</h1>
      <h2 className="text-xl text-white">{weather.main.temp} °C</h2>
      <p className='text-white'>{weather.weather[0].description}</p>
    </div>
  );
}
