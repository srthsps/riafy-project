import { data } from "./test";

function App() {
  return (
    <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-8">
      {/* Content goes here */}
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {data.map((file, idx) => (
          <li key={idx} className="relative">
            <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img
                src={file.imageUrl}
                alt=""
                className="pointer-events-none object-cover group-hover:opacity-75"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">
                  View details for {file.Ingredient}
                </span>
              </button>
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
              {file.Ingredient}
            </p>
            <p className="pointer-events-none block text-sm font-medium text-gray-500">
              {file.Introduction}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
