import { useState } from 'react'
import {
  FiBriefcase,
  FiTrendingUp,
  FiCompass,
  FiSearch,
  FiMapPin,
  FiCheck,
} from 'react-icons/fi'

import Navbar from '../components/Navbar'
import StepIndicator from '../components/StepIndicator'
import { onboardingData } from '../data/onboardingData'
import { useNavigate } from 'react-router-dom'

//  Image import
import brighter from "../assets/Brighter-future.jpeg";

const iconMap = {
  briefcase: FiBriefcase,
  trending: FiTrendingUp,
  compass: FiCompass,
}

function OnboardingGoals() {
  const [selectedGoal, setSelectedGoal] = useState('new-job')
  const [role, setRole] = useState('')
  const [location, setLocation] = useState('')
  const [isRemote, setIsRemote] = useState(true)

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">

      <Navbar variant="app" />

      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr]">

        {/* =========================
            LEFT SIDEBAR
        ========================== */}
        <div className="bg-indigo-50/50 px-6 sm:px-10 py-8 lg:py-10 lg:min-h-[calc(100vh-73px)] flex flex-col">

          {/* Tagline */}
          <p className="text-indigo-600 text-xs font-semibold tracking-wide uppercase mb-3">
            {onboardingData.tagline}
          </p>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-3">
            {onboardingData.heading}{' '}
            <span className="text-indigo-600">
              {onboardingData.headingHighlight}
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-500 text-sm mb-6">
            {onboardingData.subtext}
          </p>

          {/* Checklist */}
          <div className="space-y-2 mb-8">
            {onboardingData.checklist.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2"
              >
                <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center shrink-0">
                  <FiCheck
                    className="text-white"
                    size={12}
                  />
                </div>

                <p className="text-sm text-gray-700">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Banner Text */}
          {/* <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            {onboardingData.bannerText}
          </p> */}

          {/* =========================
              BOTTOM SIDEBAR IMAGE
          ========================== */}
          <div className="mt-auto -mx-6 sm:-mx-10">
            <img
              src={brighter}
              alt="Build your future"
              className="w-full h-auto block object-cover"
            />
          </div>

        </div>

        {/* =========================
            RIGHT CONTENT
        ========================== */}
        <div className="px-6 sm:px-10 lg:px-12 py-8 lg:py-10">

          {/* Step Indicator */}
          <StepIndicator
            steps={onboardingData.steps}
            currentStep={1}
          />

          {/* Heading */}
          <h2 className="text-lg font-bold text-gray-900 mb-1">
            What are your career goals?
          </h2>

          <p className="text-gray-500 text-sm mb-5">
            This helps us understand what you're looking for.
          </p>

          {/* =========================
              GOAL OPTIONS
          ========================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">

            {onboardingData.goalOptions.map((goal) => {
              const Icon = iconMap[goal.icon]
              const isSelected = selectedGoal === goal.id

              return (
                <button
                  key={goal.id}
                  onClick={() => setSelectedGoal(goal.id)}
                  className={`text-left rounded-xl border-2 p-4 transition ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/50'
                      : 'border-gray-200 bg-white'
                  }`}
                >

                  <div className="flex items-start justify-between mb-3">

                    {/* Icon */}
                    <div className="w-9 h-9 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                      <Icon size={16} />
                    </div>

                    {/* Radio */}
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'border-indigo-600'
                          : 'border-gray-300'
                      }`}
                    >
                      {isSelected && (
                        <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                      )}
                    </div>

                  </div>

                  <p className="font-semibold text-gray-900 text-sm mb-1">
                    {goal.title}
                  </p>

                  <p className="text-gray-500 text-xs">
                    {goal.desc}
                  </p>

                </button>
              )
            })}

          </div>

          {/* =========================
              JOB ROLE
          ========================== */}
          <div className="mb-8">

            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              {onboardingData.roleQuestion.label}
            </h3>

            <p className="text-gray-500 text-xs mb-3">
              {onboardingData.roleQuestion.subtext}
            </p>

            {/* Search */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3 mb-3">

              <FiSearch
                className="text-gray-400 shrink-0"
                size={16}
              />

              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder={
                  onboardingData.roleQuestion.searchPlaceholder
                }
                className="w-full outline-none text-sm text-gray-700"
              />

            </div>

            {/* Popular Roles */}
            <div className="flex flex-wrap gap-2">

              {onboardingData.roleQuestion.popularRoles.map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                    role === r
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  {r}
                </button>
              ))}

              <button
                className="px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 text-gray-600 flex items-center gap-1"
              >
                More ⌄
              </button>

            </div>
          </div>

          {/* =========================
              LOCATION
          ========================== */}
          <div className="mb-8">

            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              {onboardingData.locationQuestion.label}
            </h3>

            <p className="text-gray-500 text-xs mb-3">
              {onboardingData.locationQuestion.subtext}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">

              {/* Location */}
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3 flex-1">

                <FiMapPin
                  className="text-gray-400 shrink-0"
                  size={16}
                />

                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder={
                    onboardingData.locationQuestion.searchPlaceholder
                  }
                  className="w-full outline-none text-sm text-gray-700"
                />

              </div>

              {/* Remote */}
              <label className="flex items-center justify-between sm:justify-start gap-2 border border-gray-200 rounded-lg px-4 py-3 cursor-pointer shrink-0">

                <span className="text-sm text-gray-700">
                  Remote
                </span>

                <input
                  type="checkbox"
                  checked={isRemote}
                  onChange={() => setIsRemote(!isRemote)}
                  className="accent-indigo-600 w-4 h-4"
                />

              </label>

            </div>
          </div>

          {/* Continue */}
          <div className="flex justify-end">

            <button
              onClick={() => navigate('/onboarding/role')}
              className="w-full cursor-pointer sm:w-auto bg-indigo-600 text-white font-semibold text-sm px-8 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Continue
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default OnboardingGoals