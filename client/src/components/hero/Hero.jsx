import LeftColumn from "./left/Left"
import RightColumn from "./right/Right"

export default function Hero() {
    return (
      <div className="bg-white text-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Two Large News Articles */}
            <LeftColumn />
            {/* Right Column - Three Smaller News Articles */}
            <RightColumn />
          </div>
        </div>
      </div>
    )
  }