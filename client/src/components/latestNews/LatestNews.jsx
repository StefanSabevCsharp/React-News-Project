import { Link } from "react-router-dom";
import SingleLatestNews from "./singleLatestNews/SingleLatestNews";
import { useContext } from "react";
import NewsContext from "../../context/NewsContext";

export default function LatestNews() {

  const {news} = useContext(NewsContext);
  const latestNews = news.slice(10, 14);

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8">
      {/* Heading and View All button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Our Latest News</h1>
        <Link
          to="/world"
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
        >
          View All
        </Link>
      </div>

      {/* News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {latestNews.map((latestNew) => (
          <SingleLatestNews latestNew={latestNew} />
        ))}
      </div>
    </div>
  );
}
