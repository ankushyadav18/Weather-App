import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDefaultWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${API_KEY}&units=metric`,
      );

      setWeather(response.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=Delhi&appid=${API_KEY}&units=metric`,
      );

      setForecast(forecastResponse.data.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDefaultWeather();
  }, []);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeather = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );

      setWeather(response.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`,
      );

      setForecast(forecastResponse.data.list);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-500 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-4">Weather App</h1>

        <SearchBar
          city={city}
          setCity={setCity}
          getWeather={getWeather}
          loading={loading}
        />
        {loading && (
          <p className="text-center mt-4 font-semibold">Loading...</p>
        )}

        {weather && <WeatherCard weather={weather} />}
        {forecast.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-3">Forecast</h2>

            <div className="flex gap-3 overflow-x-auto">
              {forecast.slice(0, 5).map((item) => (
                <ForecastCard key={item.dt} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
