function SearchBar({ city, setCity, getWeather, loading }) {
  return (
    <div className="flex gap-2">
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
        className="border border-gray-300 rounded-lg p-3 w-full"
      />

      <button
        onClick={getWeather}
        disabled={loading}
        className="bg-blue-500 text-white px-5 rounded-lg disabled:bg-gray-400"
      >
        {loading ? "Loading..." : "Search"}
      </button>
    </div>
  );
}

export default SearchBar;
