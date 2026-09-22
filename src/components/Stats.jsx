import { FiBriefcase, FiHome, FiUsers, FiStar } from 'react-icons/fi'
import { statsData } from '../data/homeData'

const iconMap = {
  briefcase: FiBriefcase,
  building: FiHome,
  users: FiUsers,
  star: FiStar,
}

function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statsData.map((stat) => {
          const Icon = iconMap[stat.icon]
          return (
            <div
              key={stat.label}
              className="flex items-center gap-3 bg-white rounded-xl shadow-sm border border-gray-100 px-5 py-4"
            >
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Stats