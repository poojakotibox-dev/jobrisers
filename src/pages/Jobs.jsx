import { useState } from 'react'
import { FiSearch, FiMapPin, FiBell, FiClock, FiUpload } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import FilterSidebar from '../components/FilterSidebar'
import JobCard from '../components/JobCard'
import Pagination from '../components/Pagination'
import SidebarCard from '../components/SidebarCard'
import { jobsPageData } from '../data/jobsData'

function Jobs() {
  const [currentPage, setCurrentPage] = useState(jobsPageData.pagination.currentPage)
  const [filters, setFilters] = useState(jobsPageData.filters)
  const { hero, totalJobs, jobs, sidebarWidgets, pagination } = jobsPageData

  const handleFilterChange = (group, label, isRadio = false) => {
    setFilters((prev) => ({
      ...prev,
      [group]: prev[group].map((opt) => {
        if (isRadio) {
          // radio: only one selected at a time
          return { ...opt, checked: opt.label === label }
        }
        // checkbox: toggle the clicked one
        return opt.label === label ? { ...opt, checked: !opt.checked } : opt
      }),
    }))
  }

  const handleClearAll = () => {
    setFilters((prev) => {
      const cleared = {}
      for (const group in prev) {
        cleared[group] = prev[group].map((opt) => ({ ...opt, checked: false }))
      }
      return cleared
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="app" />

      <div className="bg-indigo-50/40 px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{hero.heading}</h1>
          <p className="text-gray-500 text-sm mb-5">{hero.subtext}</p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-xl sm:rounded-full shadow-md p-2 gap-2">
            <div className="flex items-center gap-2 flex-1 px-4 min-w-0">
              <FiSearch className="text-gray-400 shrink-0" size={16} />
              <input
                type="text"
                placeholder={hero.searchPlaceholder}
                className="w-full py-2 outline-none text-sm text-gray-700 min-w-0"
              />
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-200 shrink-0" />
            <div className="flex items-center gap-2 flex-1 px-4 min-w-0">
              <FiMapPin className="text-gray-400 shrink-0" size={16} />
              <input
                type="text"
                placeholder={hero.locationPlaceholder}
                className="w-full py-2 outline-none text-sm text-gray-700 min-w-0"
              />
            </div>
            <button className="w-full sm:w-auto bg-indigo-600 text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-indigo-700 transition shrink-0">
              Search Jobs
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearAll={handleClearAll}
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-500">{totalJobs}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>Sort by:</span>
                <select className="border border-gray-200 rounded-lg px-2 py-1.5 text-gray-700 outline-none">
                  {jobsPageData.sortOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={pagination.totalPages}
              onPageChange={setCurrentPage}
            />
          </div>

          <div className="w-full lg:w-[280px] shrink-0 space-y-4">
            <SidebarCard className="bg-indigo-50/60 border-indigo-100">
              <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-3">
                <FiBell size={16} />
              </div>
              <p className="text-sm font-semibold text-gray-900 mb-1">
                {sidebarWidgets.jobAlert.title}
              </p>
              <p className="text-xs text-gray-500 mb-3">{sidebarWidgets.jobAlert.subtext}</p>
              <button className="w-full bg-white border border-indigo-200 text-indigo-600 text-xs font-semibold py-2 rounded-lg hover:bg-indigo-50 transition">
                {sidebarWidgets.jobAlert.buttonLabel}
              </button>
            </SidebarCard>

            <SidebarCard>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-gray-900">
                  {sidebarWidgets.recentSearches.title}
                </p>
                <button className="text-indigo-600 text-[11px] font-semibold hover:underline">
                  Clear all
                </button>
              </div>
              <div className="space-y-2.5">
                {sidebarWidgets.recentSearches.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                    <FiClock size={12} className="text-gray-400 shrink-0" />
                    <span className="font-medium text-gray-700">{item.label}</span>
                    {item.meta && <span className="text-gray-400">{item.meta}</span>}
                  </div>
                ))}
              </div>
            </SidebarCard>

            <SidebarCard className="bg-yellow-50/60 border-yellow-100">
              <p className="text-sm font-semibold text-gray-900 mb-1">
                {sidebarWidgets.resumeUpload.title}
              </p>
              <p className="text-xs text-gray-500 mb-3">{sidebarWidgets.resumeUpload.subtext}</p>
              <button className="w-full bg-white border border-gray-200 text-gray-700 text-xs font-semibold py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                <FiUpload size={14} /> {sidebarWidgets.resumeUpload.buttonLabel}
              </button>
            </SidebarCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs