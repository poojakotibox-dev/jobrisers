import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

function OnboardingNavButtons({ onBack, onContinue, continueLabel = 'Continue' }) {
  return (
    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
      <button
        onClick={onBack}
        className="flex items-center gap-2 cursor-pointer  text-indigo-600 font-medium text-sm hover:underline"
      >
        <FiArrowLeft size={16} /> Back
      </button>
      <button
        onClick={onContinue}
        className="flex items-center cursor-pointer  gap-2 bg-indigo-600 text-white font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-indigo-700 transition"
      >
        {continueLabel} <FiArrowRight size={16} />
      </button>
    </div>
  )
}

export default OnboardingNavButtons