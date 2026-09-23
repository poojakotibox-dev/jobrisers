import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '../assets/logo.jpeg'

function Navbar({ variant = 'default', authMode = 'signup' }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="relative bg-white border-b border-gray-100 z-50">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
          <img src={logo} alt="JobRisers" className="h-8 w-8" />
          <span>
            Job<span className="text-indigo-600">Risers</span>
          </span>
        </Link>

        {variant === 'auth' && (
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link to="#" className="hover:text-indigo-600">Jobs</Link>
            <Link to="#" className="hover:text-indigo-600">Companies</Link>
            <Link to="#" className="hover:text-indigo-600">Career Advice</Link>
            <Link to="#" className="hover:text-indigo-600">For Employers</Link>
          </div>
        )}

        {variant === 'app' && (
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link to="#" className="hover:text-indigo-600">Jobs</Link>
            <Link to="#" className="hover:text-indigo-600">Companies</Link>
            <Link to="#" className="hover:text-indigo-600">Career Advice</Link>
          </div>
        )}

        <div className="flex items-center gap-3">
          {variant === 'auth' ? (
            <>
              {authMode === 'signin' ? (
                <>
                  <span className="hidden sm:inline text-xs sm:text-sm text-gray-500">New to JobRisers?</span>
                  <Link
                    to="/signup"
                    className="bg-indigo-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full hover:bg-indigo-700 transition"
                  >
                    Create an account
                  </Link>
                </>
              ) : (
                <>
                  <span className="hidden sm:inline text-sm text-gray-500">Already have an account?</span>
                  <Link
                    to="/login"
                    className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-indigo-700 transition"
                  >
                    Sign in
                  </Link>
                </>
              )}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-gray-700 p-1"
              >
                {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </>
          ) : variant === 'app' ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                AJ
              </div>
              <span className="hidden sm:inline text-sm font-medium text-gray-700">Alex Johnson</span>
            </div>
          ) : (
            <div className="flex items-center gap-5">
              <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Log in
              </Link>
              <Link
                to="/signup"
                className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>

      {variant === 'auth' && (
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 px-6 py-3">
            <Link to="#" className="py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">Jobs</Link>
            <Link to="#" className="py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">Companies</Link>
            <Link to="#" className="py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">Career Advice</Link>
            <Link to="#" className="py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">For Employers</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar