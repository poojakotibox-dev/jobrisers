function ReviewItem({ icon: Icon, label, value, onEdit }) {
  return (
    <div className="flex items-center justify-between border border-gray-200 rounded-xl p-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
          <Icon size={16} />
        </div>
        <div>
          <p className="text-xs text-gray-400">{label}</p>
          <p className="text-sm font-semibold text-gray-900">{value}</p>
        </div>
      </div>
      <button
        onClick={onEdit}
        className="flex items-center gap-1 text-indigo-600 text-sm font-medium hover:underline shrink-0"
      >
        ✎ Edit
      </button>
    </div>
  )
}

export default ReviewItem