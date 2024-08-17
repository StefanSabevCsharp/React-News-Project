export default function SingleLatestNews() {
  return (
    <div className="relative rounded-lg border border-gray-300 bg-white shadow-md p-4 flex">
          <img
            src="/mini.jpg"
            alt="News 1"
            className="w-40 h-auto object-cover object-center rounded-lg mr-4"
          />
          <div className="flex flex-col justify-between flex-grow">
            <h2 className="text-xl font-semibold">News Title 1</h2>
            <hr className="my-2" />
            <p className="text-gray-500 text-sm">By Author Name | Category</p>
            <p className="text-gray-700 mt-2 flex-grow">
              A brief summary of the news article goes here, providing key details.
            </p>
            <div className="bg-gray-900 p-2 mt-4 rounded-lg">
              <a
                href="/news-1"
                className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
  );
}