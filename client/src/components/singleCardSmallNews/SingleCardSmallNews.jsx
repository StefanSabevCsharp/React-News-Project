import { dateParser } from "../../utils/dateParser";

export default function SingleCardSmallNews({ article }) {
    return (
        <a
            href={article?.url}
            className="relative rounded-lg border border-gray-300 bg-white shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:bg-gray-100"
        >
            <img
                src={article.urlToImage}
                alt="World News 1"
                className="w-full h-48 object-cover object-center"
            />
            <div className="p-4 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-1">{article.description}</h3>
                <p className="text-gray-500 text-sm border-b border-gray-300 pb-2">
                {article.publishedAt ? dateParser(article.publishedAt) : "Unknown Date"} 
                </p>
            </div>
        </a>
    );
}