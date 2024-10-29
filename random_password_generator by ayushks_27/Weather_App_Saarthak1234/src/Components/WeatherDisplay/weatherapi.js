const API_KEY = 'a113f655a0efb7c66aa4b84f19688a8d';
const fetchWeatherData = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?&appid=${API_KEY}&units=metric`);
  console.log(response);
  const data = await response.json();
  return data;
};