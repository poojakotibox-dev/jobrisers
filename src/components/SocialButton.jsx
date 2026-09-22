function SocialButton({ icon, label }) {
  return (
    <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
      {icon}
      {label}
    </button>
  )
}

export default SocialButton