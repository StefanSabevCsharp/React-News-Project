import SingleLatestNews from "./singleLatestNews/SingleLatestNews";

export default function LatestNews() {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8">
      {/* Heading and View All button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Our Latest News</h1>
        <a
          href="/news"
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
        >
          View All
        </a>
      </div>

      {/* News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First News Card */}
        <SingleLatestNews />
        <SingleLatestNews />
        <SingleLatestNews />
        <SingleLatestNews />
        
      </div>
    </div>
  );
}
