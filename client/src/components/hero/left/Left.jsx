import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import NewsContext from "../../../context/NewsContext";

export default function LeftColumn() {
  const [loading, setLoading] = useState(true);

  const ctx = useContext(NewsContext);
  const { news, businessNews } = ctx;

  useEffect(() => {

    if (news.length > 0 && businessNews.length > 0) {
      setLoading(false);
    }

  }, [news, businessNews])

  return (
    <>
      {!loading &&
        <div className="lg:col-span-2 flex flex-col space-y-6">
          {/* First Large News Article */}
          <div className="relative rounded-lg border border-gray-300 overflow-hidden bg-white shadow-md flex flex-col h-full">
            <img
              src={news[0].urlToImage}
              alt="Featured News 1"
              className="w-full h-96 object-cover object-center rounded-t-lg" 
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-3xl font-bold mb-2">{news[0].title}</h2>

            </div>
            <hr className="border-gray-300" />
            <div className="bg-gray-900 p-4 flex justify-start rounded-b-lg">
              <a
                href={news[0].url}
                className="inline-block px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Second Large News Article */}
          <div className="relative rounded-lg border border-gray-300 overflow-hidden bg-white shadow-md flex flex-col h-full">
            <img
              src={businessNews[0].urlToImage}
              alt="Featured News 2"
              className="w-full h-96 object-cover object-center rounded-t-lg" 
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-3xl font-bold mb-2">{businessNews[0].title}</h2>

            </div>
            <hr className="border-gray-300" />
            <div className="bg-gray-900 p-4 flex justify-start rounded-b-lg">
              <a
                href={businessNews[0].url}
                className="inline-block px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      }

    </>

  );
}
