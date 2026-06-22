function SearchBar({ city, setCity, getWeather, loading }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            getWeather();
          }
        }}
        className="border border-gray-300 rounded-lg p-3 w-full outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={getWeather}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-600 transition text-white px-5 py-3 rounded-lg disabled:bg-gray-400 w-full sm:w-auto"
      >
        {loading ? "Loading..." : "Search"}
      </button>
    </div>
  );
}

export default SearchBar;