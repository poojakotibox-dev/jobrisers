import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiArrowLeft, FiCheckCircle } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import InputField from '../components/InputField'
import { forgotPasswordData } from '../data/authData'
import forgotPasswordBg from '../assets/Group15.png'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { successState } = forgotPasswordData

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email.trim()) {
      setSubmitted(true)
    }
  }

  const handleResend = () => {
    console.log('Resending to', email)
  }

  return (
    <div className="min-h-screen flex flex-col bg-indigo-50/50">

      <Navbar variant="auth" authMode="signin" />

      {/* Main Section */}
      <div className="relative flex-1 flex items-center justify-center px-4 py-10 overflow-hidden">

        {/* Background Image - Desktop/Tablet only */}
        <div
          className="hidden sm:block absolute inset-0 bg-no-repeat bg-right bg-[length:75%_100%]"
          style={{
            backgroundImage: `url(${forgotPasswordBg})`,
          }}
        />

        {/* Forgot Password Card */}
        <div className="relative z-10 bg-white rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-xl">

          {!submitted ? (
            <>
              {/* Heading */}
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-1">
                {forgotPasswordData.heading}
              </h2>

              {/* Subtext */}
              <p className="text-gray-500 text-xs text-center mb-6">
                {forgotPasswordData.subtext}
              </p>

              <form onSubmit={handleSubmit}>

                {/* Email */}
                <InputField
                  label={forgotPasswordData.emailLabel}
                  type="email"
                  placeholder={forgotPasswordData.emailPlaceholder}
                  icon={FiMail}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {/* Helper Text */}
                <p className="text-gray-500 mt-[-6px] text-xs mb-4">
                  Use the email address associated with your JobRisers account
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-indigo-600 text-white font-semibold text-sm py-3 rounded-lg hover:bg-indigo-700 transition mt-2 mb-6"
                >
                  {forgotPasswordData.buttonLabel}
                </button>

              </form>

              {/* Back to Login */}
              <Link
                to="/login"
                className="flex items-center justify-center gap-2 text-indigo-600 text-sm font-medium hover:underline"
              >
                <FiArrowLeft size={16} />
                {forgotPasswordData.backToLogin}
              </Link>
            </>
          ) : (
            <>
              {/* Success Icon */}
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-5">
                <FiCheckCircle size={22} />
              </div>

              {/* Success Heading */}
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                {successState.heading}
              </h2>

              {/* Success Description */}
              <p className="text-gray-500 text-sm mb-1">
                {successState.subtext}
              </p>

              {/* Email */}
              <p className="text-gray-900 text-sm font-semibold mb-6">
                {email}
              </p>

              {/* Back to Login */}
              <Link
                to="/login"
                className="w-full flex items-center justify-center bg-indigo-600 text-white font-semibold text-sm py-3 rounded-lg hover:bg-indigo-700 transition mb-4"
              >
                {forgotPasswordData.backToLogin}
              </Link>

              {/* Resend */}
              <p className="text-center text-xs text-gray-500">
                {successState.resendText}{' '}
                <button
                  onClick={handleResend}
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  {successState.resendButtonLabel}
                </button>
              </p>
            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default ForgotPassword