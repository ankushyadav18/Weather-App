function ForecastCard({ item }) {
  return (
    <div className="bg-gray-100 rounded-lg p-3 text-center min-w-30">
      <p className="font-semibold">{item.dt_txt.split(" ")[0]}</p>

      <img
        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
        alt=""
        className="mx-auto"
      />

      <p>{Math.round(item.main.temp)}°C</p>

      <p className="text-sm capitalize">{item.weather[0].description}</p>
    </div>
  );
}

export default ForecastCard;
