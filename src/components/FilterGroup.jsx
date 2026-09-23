function FilterGroup({ title, options, type = 'checkbox', onChange }) {
  return (
    <div className="py-4 border-b border-gray-100 last:border-0">
      <h4 className="text-sm font-semibold text-gray-900 mb-3">{title}</h4>
      <div className="space-y-2.5">
        {options.map((opt) => (
          <label key={opt.label} className="flex items-center justify-between cursor-pointer group">
            <div className="flex items-center gap-2">
              <input
                type={type}
                checked={opt.checked}
                onChange={() => onChange && onChange(opt.label)}
                className="accent-indigo-600 w-3.5 h-3.5"
              />
              <span className="text-xs text-gray-700 group-hover:text-gray-900">{opt.label}</span>
            </div>
            {opt.count !== null && opt.count !== undefined && (
              <span className="text-[11px] text-gray-400">({opt.count.toLocaleString()})</span>
            )}
          </label>
        ))}
      </div>
    </div>
  )
}

export default FilterGroup