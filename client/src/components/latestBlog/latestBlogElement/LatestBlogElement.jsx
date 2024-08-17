export default function LatestBlogComponent() {
    return (
        <div className="relative rounded-lg border border-gray-300 bg-white shadow-md flex flex-col">
            <img
                src="test.webp"
                alt="Blog 1"
                className="w-full h-64 object-cover object-center rounded-t-lg"
            />
            <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold mb-2">Blog Title 1</h2>
                <p className="text-gray-700 mb-4">
                    A brief description of the first blog post goes here. It gives an overview of the content and encourages readers to explore more.
                </p>
                <div className="mt-auto flex justify-start">
                    <a
                        href="/blog-1"
                        className="inline-block px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
}