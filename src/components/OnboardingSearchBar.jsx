import { FiSearch } from 'react-icons/fi'

function OnboardingSearchBar({ value, onChange, placeholder }) {
  return (
    <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3 mb-8">
      <FiSearch className="text-gray-400 shrink-0" size={16} />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full outline-none text-sm text-gray-700"
      />
    </div>
  )
}

export default OnboardingSearchBar