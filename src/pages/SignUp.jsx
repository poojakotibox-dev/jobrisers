import { useState } from 'react'
import { FiBriefcase, FiPieChart, FiUser } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi2'
import { FcGoogle } from 'react-icons/fc'
import { FaLinkedin, FaApple } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import InputField from '../components/InputField'
import SocialButton from '../components/SocialButton'
import signupImg from '../assets/boydummy.png'
import { signUpData } from '../data/authData'
import ellipseImg from '../assets/Ellipse.png'
import arrowImg from '../assets/Arrow.png'
import { useNavigate } from 'react-router-dom'

const iconMap = {
  briefcase: FiBriefcase,
  sparkle: HiOutlineSparkles,
  chart: FiPieChart,
}

function SignUp() {
  const [accountType, setAccountType] = useState('jobseeker')
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-indigo-50/50">
    <Navbar variant="auth" />

      <div className="max-w-7xl mx-auto px-4 pt-4 pb-8 md:pt-6 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-6 items-center">
          {/* Left side - text content */}
          <div className="order-2 md:order-1">
            <p className="text-indigo-600 text-xs font-semibold tracking-wide uppercase mb-2">
              {signUpData.tagline}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {signUpData.heading}
            </h1>
            <p className="text-gray-500 mb-6 md:mb-8">{signUpData.subtext}</p>

            <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
              {signUpData.features.map((f) => {
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
              <p className="text-gray-600 text-sm italic mb-2">"{signUpData.testimonial.text}"</p>
              <p className="text-gray-400 text-xs">— {signUpData.testimonial.author}</p>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {signUpData.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-base sm:text-lg font-bold text-gray-900">{s.value}</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>


        {/* Center - image with decorative elements */}
{/* Center - image with decorative elements */}
<div className="order-1 md:order-2 relative flex justify-center items-center md:-mt-12">
  {/* Background ellipse shape */}
{/* <img
  src={ellipseImg}
  alt=""
  className="absolute w-85 sm:w-120 z-0 top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2"
/> */}
<img
  src={ellipseImg}
  alt=""
  className="absolute w-[280px] sm:w-[380px] z-0 top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2"
/>
  <img
    src={signupImg}
    alt="Job seeker"
    className="relative z-10 max-w-[200px] sm:max-w-xs w-full"
  />

  {/* "Your Future Starts Here" text with arrow */}
  <div className="hidden lg:block absolute top-8 right-2 text-right z-20">
    <p className="text-gray-800 font-bold text-sm leading-tight rotate-[-3deg]">
      Your<br />Future<br />Starts<br />Here
    </p>
    <img src={arrowImg} alt="" className="w-8 ml-auto mt-1" />
  </div>

{/* Bottom badge with avatars */}
<div className="absolute bottom-4 left-[-10px] sm:left-[-20px] bg-white rounded-full shadow-lg pl-1 pr-3 py-1.5 flex items-center gap-2 z-20 whitespace-nowrap">
  <div className="flex -space-x-2 shrink-0">
    <div className="w-6 h-6 rounded-full bg-indigo-300 border-2 border-white"></div>
    <div className="w-6 h-6 rounded-full bg-pink-300 border-2 border-white"></div>
    <div className="w-6 h-6 rounded-full bg-yellow-300 border-2 border-white"></div>
  </div>
  <p className="text-[10px] text-gray-600 font-medium">
    Join thousands growing with JobRisers
  </p>
</div>
</div>

          {/* Right side - form card */}
          <div className="order-3 bg-white rounded-2xl z-2 shadow-lg p-5 sm:p-6 w-full md:w-[500px]">
            <h2 className="text-lg font-bold text-gray-900 mb-1">Create an Account</h2>
            <p className="text-gray-500 text-xs mb-4">Choose your account type to get started</p>

            <div className="grid grid-cols-2 gap-2 mb-4">
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
                <div className="text-left">
                  <p
                    className={`text-xs font-semibold ${
                      accountType === 'jobseeker' ? 'text-indigo-600' : 'text-gray-700'
                    }`}
                  >
                    Job Seeker
                  </p>
                  <p className="text-[10px] text-gray-500">Find and apply for jobs</p>
                </div>
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
                <div className="text-left">
                  <p
                    className={`text-xs font-semibold ${
                      accountType === 'employer' ? 'text-indigo-600' : 'text-gray-700'
                    }`}
                  >
                    Employer
                  </p>
                  <p className="text-[10px] text-gray-500">Hire top talent</p>
                </div>
              </button>
            </div>

            <div className="space-y-3">
              <InputField
                label={accountType === 'employer' ? 'Company Name' : 'Full Name'}
                placeholder={accountType === 'employer' ? 'Acme Inc.' : 'John Doe'}
                icon={FiUser}
              />
              <InputField label="Email Address" type="email" placeholder="you@example.com" />
              <InputField label="Password" type="password" placeholder="Create a password" />
            </div>

            <div className="text-[11px] text-gray-400 space-y-0.5 my-4">
              <p>○ At least 8 characters</p>
              <p>○ Include a number</p>
              <p>○ Include a special character</p>
            </div>

           <button 
  onClick={() => navigate('/onboarding')}
  className="w-full bg-indigo-600 cursor-pointer text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition mb-6"
>
  Create Account →
</button>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 whitespace-nowrap">or sign up with</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <SocialButton icon={<FcGoogle size={16} />} label="Google" />
              <SocialButton icon={<FaLinkedin size={16} className="text-blue-600" />} label="LinkedIn" />
              <SocialButton icon={<FaApple size={16} />} label="Apple" />
            </div>

            <p className="text-center text-[11px] text-gray-400">
              By creating an account, you agree to our{' '}
              <a href="#" className="text-indigo-600">Terms of Service</a> and{' '}
              <a href="#" className="text-indigo-600">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp