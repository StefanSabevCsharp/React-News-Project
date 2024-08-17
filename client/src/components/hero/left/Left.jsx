export default function LeftColumn() {
  return (
    <div className="lg:col-span-2 flex flex-col space-y-6">
      {/* First Large News Article */}
      <div className="relative rounded-lg border border-gray-300 overflow-hidden bg-white shadow-md flex flex-col h-full">
        <img
          src="/test.webp"
          alt="Featured News 1"
          className="w-full h-96 object-cover object-center rounded-t-lg" // Increased height for image
        />
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-3xl font-bold mb-2">Big News Headline 1</h2>
          <p className="text-lg mb-4 truncate">
            A brief description of the big news story goes here, providing an overview of the main points.
          </p>
        </div>
        <hr className="border-gray-300" />
        <div className="bg-gray-900 p-4 flex justify-start rounded-b-lg">
          <a
            href="/featured-article-1"
            className="inline-block px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
          >
            Read More
          </a>
        </div>
      </div>

      {/* Second Large News Article */}
      <div className="relative rounded-lg border border-gray-300 overflow-hidden bg-white shadow-md flex flex-col h-full">
        <img
          src="/test.webp"
          alt="Featured News 2"
          className="w-full h-96 object-cover object-center rounded-t-lg" // Increased height for image
        />
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-3xl font-bold mb-2">Big News Headline 2</h2>
          <p className="text-lg mb-4 truncate">
            A brief description of the second big news story goes here, providing key details.
          </p>
        </div>
        <hr className="border-gray-300" />
        <div className="bg-gray-900 p-4 flex justify-start rounded-b-lg">
          <a
            href="/featured-article-2"
            className="inline-block px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
