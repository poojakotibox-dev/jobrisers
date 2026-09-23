import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FiCode,
  FiBarChart2,
  FiBox,
  FiMic,
  FiMousePointer,
  FiUsers,
  FiPieChart,
  FiHeadphones,
  FiPenTool,
} from 'react-icons/fi'
import Navbar from '../components/Navbar'
import OnboardingSidebar from '../components/OnboardingSidebar'
import OnboardingSearchBar from '../components/OnboardingSearchBar'
import OnboardingNavButtons from '../components/OnboardingNavButtons'
import { onboardingData } from '../data/onboardingData'

const iconMap = {
  design: FiPenTool,
  code: FiCode,
  chart: FiBarChart2,
  box: FiBox,
  megaphone: FiMic,
  cursor: FiMousePointer,
  users: FiUsers,
  people: FiUsers,
  pie: FiPieChart,
  headset: FiHeadphones,
}

function OnboardingRole() {
  const navigate = useNavigate()
  const [selectedRole, setSelectedRole] = useState('product-designer')
  const [search, setSearch] = useState('')
  const { roleStep } = onboardingData

  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="app" />

      <div className="flex flex-col lg:flex-row">
        <OnboardingSidebar currentStep={2} />

        <div className="flex-1 px-6 sm:px-10 lg:px-12 py-8 lg:py-10">
          <p className="text-indigo-600 text-xs font-semibold tracking-wide uppercase mb-2">
            {roleStep.label}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{roleStep.heading}</h2>
          <p className="text-gray-500 text-sm mb-6">{roleStep.subtext}</p>

          <OnboardingSearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={roleStep.searchPlaceholder}
          />

          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            {roleStep.popularRolesHeading}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {roleStep.popularRoles.map((role) => {
              const Icon = iconMap[role.icon]
              const isSelected = selectedRole === role.id
              return (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`relative flex flex-col items-center text-center rounded-xl border-2 p-4 transition ${
                    isSelected ? 'border-indigo-600 bg-indigo-50/50' : 'border-gray-200 bg-white'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-indigo-600" />
                  )}
                  <div className="w-11 h-11 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-2">
                    <Icon size={18} />
                  </div>
                  <p className="text-xs font-semibold text-gray-900">{role.title}</p>
                </button>
              )
            })}
          </div>

          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            {roleStep.categoryHeading}
          </h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {roleStep.categories.map((cat) => (
              <button
                key={cat}
                className="px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 text-gray-600 hover:border-indigo-300 hover:text-indigo-600 transition"
              >
                {cat}
              </button>
            ))}
            <button className="px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 text-gray-600 flex items-center gap-1">
              More ⌄
            </button>
          </div>

          <OnboardingNavButtons
            onBack={() => navigate('/onboarding')}
            onContinue={() => navigate('/onboarding/location')}
          />
        </div>
      </div>
    </div>
  )
}

export default OnboardingRole