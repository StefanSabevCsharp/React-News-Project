import { Link } from "react-router-dom";
import LatestBlogComponent from "./latestBlogElement/LatestBlogElement";

export default function LatestBlogs() {
    return (
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8">
        {/* Heading and View All button */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Latest Blogs
          </h1>
          <Link
            to="/blog"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
          >
            View All
          </Link>
        </div>
  
        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Blog Card */}
          
        <LatestBlogComponent />
        <LatestBlogComponent />
          {/* Second Blog Card */}
          
        </div>
      </div>
    );
  }
  