function ForecastCard({ item }) {
  return (
    <div className="bg-gray-100 rounded-xl p-4 text-center min-w-[120px] flex-shrink-0 shadow-sm hover:shadow-md transition">
      <p className="font-semibold text-sm">
        {item.dt_txt.split(" ")[0]}
      </p>

      <img
        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt="weather"
        className="mx-auto w-14 h-14"
      />

      <p className="text-xl font-bold">
        {Math.round(item.main.temp)}°C
      </p>

      <p className="text-xs sm:text-sm capitalize text-gray-600">
        {item.weather[0].description}
      </p>
    </div>
  );
}

export default ForecastCard;