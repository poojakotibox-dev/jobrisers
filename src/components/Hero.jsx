import { FiSearch, FiMapPin } from 'react-icons/fi'
import heroImg1 from '../assets/hero-img1.png'
import { heroData } from '../data/heroData'
import TrustedBy from './TrustedBy'

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-8 pb-2 md:px-12 md:pt-10 md:pb-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 items-center max-w-7xl mx-auto">
        {/* Left side content */}
        <div>
          <p className="text-indigo-600 text-sm font-semibold tracking-wide uppercase mb-3">
            {heroData.tagline}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {heroData.heading}{' '}
            <span className="text-indigo-600">{heroData.headingHighlight}</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8">{heroData.subtext}</p>

          {/* Search bar - stacks vertically on mobile */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-2xl sm:rounded-full shadow-md p-2 sm:p-1.5 gap-2 mb-6">
            <div className="flex items-center gap-2 flex-1 px-4 min-w-0">
              <FiSearch className="text-gray-400 shrink-0" size={16} />
              <input
                type="text"
                placeholder={heroData.searchPlaceholder.job}
                className="w-full py-2 outline-none text-sm text-gray-700 min-w-0"
              />
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-200 shrink-0" />
            <div className="flex items-center gap-2 flex-1 px-4 min-w-0 border-t sm:border-t-0 border-gray-100 pt-2 sm:pt-0">
              <FiMapPin className="text-gray-400 shrink-0" size={16} />
              <input
                type="text"
                placeholder={heroData.searchPlaceholder.location}
                className="w-full py-2 outline-none text-sm text-gray-700 min-w-0"
              />
            </div>
            <button className="w-full sm:w-auto bg-indigo-600 text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-indigo-700 transition whitespace-nowrap shrink-0">
              Search Jobs
            </button>
          </div>

          {/* Popular searches */}
          <div className="flex flex-wrap items-center gap-1 text-xs pb-1">
            <span className="text-gray-500 shrink-0">Popular searches:</span>
            {heroData.popularSearches.map((tag) => (
              <button
                key={tag}
                className="px-2 py-1 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-indigo-300 hover:text-indigo-600 transition shrink-0"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Trusted by companies */}
          <div className="mt-4">
            <TrustedBy />
          </div>
        </div>

        {/* Right side image with decorative elements */}
        <div className="relative flex justify-center items-center  md:mt-0">
          <div className="absolute w-56 h-56 md:w-72 md:h-72 bg-indigo-200/50 rounded-full blur-2xl"></div>

          <img src={heroImg1} alt="Job seeker" className="relative z-10 max-w-[220px] sm:max-w-xs md:max-w-sm w-full" />

          {/* Top-right badge */}
          <div className="absolute top-4 right-0 sm:top-10 bg-white rounded-xl shadow-lg px-3 py-2 sm:px-4 flex items-center gap-2 z-20">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-[10px] sm:text-xs">
              50K+
            </div>
            <div className="text-[10px] sm:text-xs">
              <p className="font-semibold text-gray-800">50K+</p>
              <p className="text-gray-400">Jobs Added</p>
            </div>
          </div>

          {/* Bottom badge */}
          <div className="absolute bottom-6 sm:bottom-16 left-0 bg-white rounded-full shadow-lg pl-1 pr-3 sm:pr-4 py-1 flex items-center gap-2 z-20 max-w-[180px] sm:max-w-none">
            <div className="flex -space-x-2 shrink-0">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-indigo-300 border-2 border-white"></div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-pink-300 border-2 border-white"></div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-yellow-300 border-2 border-white"></div>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-600 font-medium leading-tight">
              Join thousands growing with JobRisers
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero