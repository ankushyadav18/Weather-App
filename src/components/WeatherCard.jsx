function WeatherCard({ weather }) {
  return (
    <div className="mt-6 text-center">
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather"
        className="mx-auto w-24 h-24 sm:w-28 sm:h-28"
      />

      <h2 className="text-2xl sm:text-3xl font-bold">
        {weather.name}
      </h2>

      <p className="text-4xl sm:text-5xl font-bold my-3">
        {Math.round(weather.main.temp)}°C
      </p>

      <p className="capitalize text-gray-600 text-base sm:text-lg">
        {weather.weather[0].description}
      </p>

      <div className="grid grid-cols-2 gap-3 mt-6 text-sm sm:text-base">
        <div className="bg-blue-100 rounded-lg p-3">
          <p className="font-semibold">Humidity</p>
          <p>{weather.main.humidity}%</p>
        </div>

        <div className="bg-blue-100 rounded-lg p-3">
          <p className="font-semibold">Wind</p>
          <p>{weather.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;