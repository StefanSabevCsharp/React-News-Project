import { useContext, useEffect, useState } from "react";
import NewsContext from "../../../context/NewsContext";
import { Link } from "react-router-dom";


export default function RightColumn() {

  const [loading, setLoading] = useState(true);

  const ctx = useContext(NewsContext);
  const sportNews = ctx.sportNews?.slice(15, 18);
  console.log(sportNews);

  useEffect(() => {
    if (sportNews.length > 0) {
      setLoading(false);
    }
  }, [sportNews])

  return (
    <>
      {!loading &&
        <div className="lg:col-span-1 flex flex-col space-y-6">
          {sportNews.map((sportnew) => (
            <div key={sportnew.publishedAt} className="relative rounded-lg border border-gray-300 overflow-hidden bg-white shadow-md flex flex-col h-full">
              <img
                src={sportnew.urlToImage}
                alt="Recent News"
                className="w-full h-48 object-cover object-center rounded-lg"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mt-2 mb-2">{sportnew.title}</h3>
                <p className="text-sm flex-grow mb-2">{sportnew.description}</p>
              </div>
              <hr className="border-gray-300" />
              <div className="bg-gray-900 p-4 flex justify-start rounded-b-lg">
                <a
                  href={sportnew.url}
                  className="inline-block px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      }
    </>
  );
}
