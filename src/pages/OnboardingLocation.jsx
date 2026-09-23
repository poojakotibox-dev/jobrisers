import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiHome, FiGrid } from 'react-icons/fi'
import { HiOutlineSwitchHorizontal } from 'react-icons/hi'
import Navbar from '../components/Navbar'
import OnboardingSidebar from '../components/OnboardingSidebar'
import OnboardingSearchBar from '../components/OnboardingSearchBar'
import OnboardingNavButtons from '../components/OnboardingNavButtons'
import { onboardingData } from '../data/onboardingData'

import bengaluruImg from '../assets/bangluru.webp'
import mumbaiImg from '../assets/Mumbai1.jpg'
import delhiImg from '../assets/delhi2.jpg'
import puneImg from '../assets/pune.jpg'
import chennaiImg from '../assets/chennaai.jpg'
import hydrabadImg from '../assets/hydrabad.webp'

const cityImages = {
  bengaluru: bengaluruImg,
  mumbai: mumbaiImg,
  delhi: delhiImg,
  pune: puneImg,
  chennai: chennaiImg,
  hyderabad: hydrabadImg,
}


const workPrefIconMap = {
  building: FiGrid,
  shuffle: HiOutlineSwitchHorizontal,
  home: FiHome,
}

function OnboardingLocation() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('bengaluru')
  const [workPrefs, setWorkPrefs] = useState(['onsite'])
  const { locationStep } = onboardingData

  const toggleWorkPref = (id) => {
    setWorkPrefs((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="app" />

      <div className="flex flex-col lg:flex-row">
      <OnboardingSidebar
  currentStep={3}
  showBottomText={true}
/>

        <div className="flex-1 px-6 sm:px-10 lg:px-12 py-8 lg:py-10">
          <p className="text-indigo-600 text-xs font-semibold tracking-wide uppercase mb-2">
            {locationStep.label}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
            {locationStep.heading}
          </h2>
          <p className="text-gray-500 text-sm mb-6">{locationStep.subtext}</p>

          <OnboardingSearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={locationStep.searchPlaceholder}
          />

          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            {locationStep.popularLocationsHeading}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {locationStep.popularLocations.map((loc) => {
              const isSelected = selectedLocation === loc.id
              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc.id)}
                  className={`flex items-center gap-3 text-left rounded-xl border-2 p-3 transition ${
                    isSelected ? 'border-indigo-600 bg-indigo-50/50' : 'border-gray-200 bg-white'
                  }`}
                >
                 {loc.type === 'city' ? (
  cityImages[loc.id] ? (
    <img
      src={cityImages[loc.id]}
      alt={loc.city}
      className="w-11 h-11 rounded-lg object-cover shrink-0"
    />
  ) : (
    <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-indigo-200 to-purple-300 shrink-0" />
  )
) : (
  <div className="w-11 h-11 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
    <FiHome size={18} />
  </div>
)}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{loc.city}</p>
                    <p className="text-xs text-gray-500 truncate">{loc.country}</p>
                  </div>
                </button>
              )
            })}
          </div>

          <h3 className="text-sm font-semibold text-gray-900 mb-1">
            {locationStep.workPreferenceHeading}
          </h3>
          <p className="text-gray-500 text-xs mb-4">{locationStep.workPreferenceSubtext}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {locationStep.workPreferences.map((pref) => {
              const Icon = workPrefIconMap[pref.icon]
              const isSelected = workPrefs.includes(pref.id)
              return (
                <button
                  key={pref.id}
                  onClick={() => toggleWorkPref(pref.id)}
                  className={`flex items-start gap-3 text-left rounded-xl border-2 p-4 transition ${
                    isSelected ? 'border-indigo-600 bg-indigo-50/50' : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="w-9 h-9 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
                    <Icon size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-gray-900">{pref.title}</p>
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-indigo-600' : 'border-gray-300'
                        }`}
                      >
                        {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">{pref.desc}</p>
                  </div>
                </button>
              )
            })}
          </div>

          <OnboardingNavButtons
            onBack={() => navigate('/onboarding/role')}
            onContinue={() => navigate('/onboarding/complete')}
          />
        </div>
      </div>
    </div>
  )
}

export default OnboardingLocation