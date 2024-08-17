export default function FeaturedArticles({ mainArticle, smallArticles }) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Article */}
        <a
          href={mainArticle.link}
          className="relative block w-full h-96 mb-8 group rounded-lg overflow-hidden cursor-pointer"
        >
          {/* Background Image */}
          <img
            src={mainArticle.image}
            alt={mainArticle.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
  
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
  
          {/* Content */}
          <div className="relative z-10 flex flex-col justify-end items-center h-full px-4 pb-4 text-center text-white">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 group-hover:underline">
              {mainArticle.title}
            </h1>
          </div>
        </a>
  
        {/* Small Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {smallArticles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              className="relative flex flex-col bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-sm text-gray-500 border-b border-gray-300 pb-2 mb-2">
                  {article.date}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }
  