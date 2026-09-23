import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiSend, FiPieChart, FiUser, FiBriefcase } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import { FaLinkedin, FaApple } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import InputField from '../components/InputField'
import SocialButton from '../components/SocialButton'
import signinImg from '../assets/hero-img1.png'
import ellipseImg from '../assets/Ellipse.png'
import { signInData } from '../data/authData'

const iconMap = {
  search: FiSearch,
  send: FiSend,
  chart: FiPieChart,
}

function SignIn() {
  const [accountType, setAccountType] = useState('jobseeker')
  const [keepSignedIn, setKeepSignedIn] = useState(true)

  return (
    <div className="min-h-screen bg-indigo-50/50">
      <Navbar variant="auth" authMode="signin"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-4 pb-8 md:pt-6 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-6 items-center">
          {/* Left side - text content */}
          <div className="order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {signInData.heading}
            </h1>
            <p className="text-gray-500 mb-6 md:mb-8">{signInData.subtext}</p>

            <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
              {signInData.features.map((f) => {
                const Icon = iconMap[f.icon]
                return (
                  <div key={f.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{f.title}</p>
                      <p className="text-gray-500 text-sm">{f.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="bg-white rounded-xl p-4 mb-6 md:mb-8 shadow-sm max-w-xs">
              <p className="text-gray-600 text-sm italic mb-2">"{signInData.testimonial.text}"</p>
              <p className="text-gray-400 text-xs">— {signInData.testimonial.author}</p>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {signInData.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-base sm:text-lg font-bold text-gray-900">{s.value}</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

       
{/* Center - image with decorative elements */}
<div className="order-1 md:order-2 relative flex justify-center items-center md:-mt-12">
<img
  src={ellipseImg}
  alt=""
  className="absolute w-[290px] sm:w-[440px] z-0 top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 opacity-90"
/>

  <img
    src={signinImg}
    alt="Job seeker"
    className="relative z-10 max-w-[200px] sm:max-w-xs w-full -translate-x-4 sm:-translate-x-8"
  />

  {/* Top-right "Good Jobs Brighter Tomorrows" badge */}
  <div className="hidden lg:block absolute top-28 right-[-18px] bg-white rounded-xl shadow-lg px-3 py-2 z-20">
    <p className="text-gray-800 font-bold text-[10px] leading-snug text-center">
      Good Jobs<br />Brighter<br />Tomorrows
    </p>
  </div>

  {/* Bottom badge with avatars */}
  <div className="absolute bottom-4 left-0 sm:left-[-10px] bg-white rounded-full shadow-lg pl-1 pr-3 py-1 flex items-center gap-2 z-20 max-w-[260px]">
    <div className="flex -space-x-2 shrink-0">
      <div className="w-6 h-6 rounded-full bg-indigo-300 border-2 border-white"></div>
      <div className="w-6 h-6 rounded-full bg-pink-300 border-2 border-white"></div>
      <div className="w-6 h-6 rounded-full bg-yellow-300 border-2 border-white"></div>
    </div>
    <p className="text-[10px] text-gray-600 font-medium leading-tight">
      Join thousands of professionals growing with JobRisers
    </p>
  </div>
</div>

          {/* Right side - form card */}
          <div className="order-3 bg-white rounded-2xl shadow-lg p-5 sm:p-8 z-10 w-full md:w-[450px]">
            <h2 className="text-xl font-bold text-gray-900 mb-1 text-center">Welcome Back</h2>
            <p className="text-gray-500 text-sm mb-6 text-center">Sign in to continue to JobRisers</p>

            <div className="grid grid-cols-2 gap-2 mb-5">
              <button
                onClick={() => setAccountType('jobseeker')}
                className={`flex items-center gap-2 rounded-lg px-2.5 py-2.5 border-2 transition ${
                  accountType === 'jobseeker'
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <FiUser
                  className={accountType === 'jobseeker' ? 'text-indigo-600' : 'text-gray-500'}
                  size={16}
                />
                <p
                  className={`text-xs font-semibold ${
                    accountType === 'jobseeker' ? 'text-indigo-600' : 'text-gray-700'
                  }`}
                >
                  Job Seeker
                </p>
              </button>

              <button
                onClick={() => setAccountType('employer')}
                className={`flex items-center gap-2 rounded-lg px-2.5 py-2.5 border-2 transition ${
                  accountType === 'employer'
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <FiBriefcase
                  className={accountType === 'employer' ? 'text-indigo-600' : 'text-gray-500'}
                  size={16}
                />
                <p
                  className={`text-xs font-semibold ${
                    accountType === 'employer' ? 'text-indigo-600' : 'text-gray-700'
                  }`}
                >
                  Employer
                </p>
              </button>
            </div>

            <div className="space-y-3">
              <InputField label="Email Address" type="email" placeholder="you@example.com" />
              <InputField label="Password" type="password" placeholder="Enter your password" />
            </div>

            <div className="flex items-center justify-between my-4">
              <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={keepSignedIn}
                  onChange={() => setKeepSignedIn(!keepSignedIn)}
                  className="accent-indigo-600 w-3.5 h-3.5"
                />
                Keep me signed in
              </label>
              <a href="#" className="text-xs text-indigo-600 font-medium hover:underline">
                Forgot password?
              </a>
            </div>

            <button className="w-full bg-indigo-600  cursor-pointer text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-indigo-700 transition mb-4">
              Sign In
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 whitespace-nowrap">or continue with</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mb-5">
              <SocialButton icon={<FcGoogle size={16} />} label="Google" />
              <SocialButton icon={<FaLinkedin size={16} className="text-blue-600" />} label="LinkedIn" />
              <SocialButton icon={<FaApple size={16} />} label="Apple" />
            </div>

            <p className="text-center text-xs text-gray-500">
              Don't have an account?{' '}
              <Link to="/signup" className="text-indigo-600 font-semibold hover:underline">
                Create one now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn