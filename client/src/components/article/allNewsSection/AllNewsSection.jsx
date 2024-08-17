import SingleCardSmallNews from "../../singleCardSmallNews/SingleCardSmallNews";

export default function AllNewsSection({category}) {
  return (
    <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title Section */}
          <div className="bg-gray-900 text-white py-2 px-4 mb-6">
            <h2 className="text-3xl font-bold">{category}</h2>
          </div>
  
          {/* News Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* TO DO : Render all the news here. no hardcoding */}
         
            <SingleCardSmallNews />
            <SingleCardSmallNews />
            <SingleCardSmallNews />
            <SingleCardSmallNews />
            <SingleCardSmallNews />
            <SingleCardSmallNews />
            <SingleCardSmallNews />
            <SingleCardSmallNews />
            <SingleCardSmallNews />
            <SingleCardSmallNews />
            <SingleCardSmallNews />
            <SingleCardSmallNews />
          </div>
        </div>
      </div>
  );
}