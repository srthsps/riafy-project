import { useState, useEffect } from "react";
import { data } from "./test";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

function App() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (search.length > 0) {
      let arr = data.filter((item) =>
        item.Ingredient.toString()
          .toLowerCase()
          .includes(search.toString().trim().toLowerCase())
      );
      setFilteredData(arr);
    } else {
      setFilteredData(data);
    }
  }, [search]);

  return (
    <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-8 scroll-smooth">
      <label
        style={{
          fontSize: "1.2rem",
          fontWeight: "600",
          color: "#30384d",
        }}
        htmlFor="search"
        className="block mb-4"
      >
        Search
      </label>
      <hr style={{ borderTop: "1px solid #30384d" }} />
      <div className="relative mt-4 my-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-black">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-black"
            aria-hidden="true"
          />
        </div>
        <input
          type="text"
          name="serach"
          value={search}
          id="search"
          onChange={(e) => setSearch(e.target.value)}
          className="block w-full lg:w-96 sm:w-screen rounded-md pl-10 py-2 outline-none"
          style={{ fontSize: "0.8em", color: "#30384d" }}
          placeholder="Food Name"
        />
      </div>
      <h3
        style={{
          fontSize: "1.2rem",
          fontWeight: "600",
          color: "#30384d",
        }}
        className="mb-3 mt-10"
      >
        Foods
      </h3>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {filteredData.map((item, idx) => (
          <li key={idx} className="relative">
            <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img
                src={item.imageUrl}
                alt=""
                className="pointer-events-none object-cover"
              />
            </div>
            <p
              className="pointer-events-none mt-2 block truncate"
              style={{ fontSize: "0.8em", color: "#30384d", fontWeight: "700" }}
            >
              {item.Ingredient}
            </p>
            <p
              className="pointer-events-none block"
              style={{ fontSize: "0.7em", color: "#7e8a9a", fontWeight: "500" }}
            >
              {item.short_text}
            </p>
          </li>
        ))}
      </ul>
      {filteredData.length === 0 && (
        <div className="flex justify-center align-middle">
          <lottie-player
            src="https://assets4.lottiefiles.com/private_files/lf30_e3pteeho.json"
            background="transparent"
            speed="1"
            style={{ width: "300px", height: "300px" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      )}
    </div>
  );
}

export default App;
