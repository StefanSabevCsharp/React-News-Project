export default function RightColumn() {
  return (
    <div className="lg:col-span-1 flex flex-col space-y-6">
      {[1, 2, 3].map((index) => (
        <div key={index} className="relative rounded-lg border border-gray-300 overflow-hidden bg-white shadow-md flex flex-col h-full">
          <img
            src="/mini.jpg"
            alt={`Recent News ${index}`}
            className="w-full h-48 object-cover object-center rounded-lg" // Increased image height
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mt-2 mb-2">Recent News Title {index}</h3>
            <p className="text-sm flex-grow mb-2">A brief summary of the recent news item goes here.</p>
          </div>
          <hr className="border-gray-300" />
          <div className="bg-gray-900 p-4 flex justify-start rounded-b-lg">
            <a
              href={`/recent-article-${index}`}
              className="inline-block px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
