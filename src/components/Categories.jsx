import { FiCode, FiTrendingUp, FiBriefcase, FiHeart, FiUsers } from 'react-icons/fi'
import { PiPaletteBold } from 'react-icons/pi'
import { categoriesData } from '../data/homeData'

const iconMap = {
  code: FiCode,
  trending: FiTrendingUp,
  briefcase: FiBriefcase,
  heart: FiHeart,
  palette: PiPaletteBold,
  users: FiUsers,
}

const colorMap = {
  indigo: { bg: 'bg-indigo-100', icon: 'text-indigo-600' },
  green: { bg: 'bg-green-100', icon: 'text-green-600' },
  yellow: { bg: 'bg-yellow-100', icon: 'text-yellow-600' },
  red: { bg: 'bg-red-100', icon: 'text-red-600' },
  blue: { bg: 'bg-blue-100', icon: 'text-blue-600' },
  purple: { bg: 'bg-purple-100', icon: 'text-purple-600' },
}

function Categories() {
  return (
    <section className="py-8 max-w-7xl mx-auto px-6">
      <div className="flex items-end justify-between mb-6 flex-wrap gap-2">
        <div>
          <p className="text-indigo-600 text-xs font-semibold tracking-wide uppercase mb-1">
            {categoriesData.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            {categoriesData.heading}
          </h2>
          <p className="text-gray-500 text-sm">{categoriesData.subtext}</p>
        </div>
        <a href="#" className="text-indigo-600 text-sm font-semibold hover:underline shrink-0">
          View all categories
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categoriesData.categories.map((cat) => {
          const Icon = iconMap[cat.icon]
          const colors = colorMap[cat.color]
          return (
            <div
              key={cat.name}
              className={`${colors.bg} rounded-xl p-4 flex flex-col items-center text-center cursor-pointer hover:shadow-md transition`}
            >
              <Icon className={`${colors.icon} mb-2`} size={22} />
              <p className="font-semibold text-gray-900 text-sm">{cat.name}</p>
              <p className="text-xs text-gray-500 mt-0.5">{cat.jobs}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Categories