import { useState } from 'react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
import FilterGroup from './FilterGroup'

function CollapsibleSection({ title, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full flex items-center justify-between py-4 border-b border-gray-100 text-sm font-semibold text-gray-900"
    >
      {title}
      {open ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
    </button>
  )
}

function FilterSidebar({ filters, onFilterChange, onClearAll }) {
  return (
    <aside className="w-full lg:w-[260px] shrink-0">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-bold text-gray-900">Filters</h3>
        <button
          onClick={onClearAll}
          className="text-indigo-600 text-xs font-semibold hover:underline"
        >
          Clear all
        </button>
      </div>

      <FilterGroup
        title="Experience Level"
        options={filters.experienceLevel}
        onChange={(label) => onFilterChange('experienceLevel', label)}
      />
      <FilterGroup
        title="Salary Range"
        options={filters.salaryRange}
        type="radio"
        onChange={(label) => onFilterChange('salaryRange', label, true)}
      />
      <FilterGroup
        title="Job Type"
        options={filters.jobType}
        onChange={(label) => onFilterChange('jobType', label)}
      />
      <FilterGroup
        title="Work Mode"
        options={filters.workMode}
        onChange={(label) => onFilterChange('workMode', label)}
      />

      <CollapsibleSection title="Industry" />
      <CollapsibleSection title="Date Posted" />
    </aside>
  )
}

export default FilterSidebar