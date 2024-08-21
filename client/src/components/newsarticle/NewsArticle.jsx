

export default function NewsArticle({ title, image, date, author, summary }) {
    return (
        <div className="max-w-full mx-auto my-8 p-4 flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-4 md:mb-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 md:h-full object-cover object-center rounded-lg"
                />
            </div>
            <div className="md:w-2/3 md:pl-6">
                <div className="flex justify-between items-center mb-2 text-gray-600 text-sm">
                    <span>{date}</span>
                    <span>By {author}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition duration-300">
                    {title}
                </h2>
                <p className="text-gray-700 leading-relaxed">{summary}</p>
            </div>
        </div>
    );
}
