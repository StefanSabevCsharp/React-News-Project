export default function SingleCardSmallNews() {
    return (
        <a
            href="/world-news-1"
            className="relative rounded-lg border border-gray-300 bg-white shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:bg-gray-100"
        >
            <img
                src="https://source.unsplash.com/800x600/?world,news"
                alt="World News 1"
                className="w-full h-48 object-cover object-center"
            />
            <div className="p-4 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-1">World News Title 1</h3>
                <p className="text-gray-500 text-sm border-b border-gray-300 pb-2">
                    January 1, 2024
                </p>
            </div>
        </a>
    );
}