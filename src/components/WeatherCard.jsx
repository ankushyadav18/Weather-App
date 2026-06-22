function WeatherCard({ weather }) {
  return (
    <div className="mt-6 text-center">
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather"
        className="mx-auto"
      />

      <h2 className="text-3xl font-bold">{weather.name}</h2>

      <p className="text-5xl font-bold my-3">
        {Math.round(weather.main.temp)}°C
      </p>

      <p className="capitalize">{weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
