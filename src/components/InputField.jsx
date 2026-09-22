function InputField({ label, type = 'text', placeholder, icon: Icon }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5">
        {Icon && <Icon className="text-gray-400 shrink-0" size={16} />}
        <input
          type={type}
          placeholder={placeholder}
          className="w-full outline-none text-sm text-gray-700 bg-transparent"
        />
      </div>
    </div>
  )
}

export default InputField