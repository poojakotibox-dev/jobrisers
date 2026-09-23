function SidebarCard({ children, className = '' }) {
  return (
    <div className={`bg-white border border-gray-100 rounded-xl p-4 ${className}`}>
      {children}
    </div>
  )
}

export default SidebarCard