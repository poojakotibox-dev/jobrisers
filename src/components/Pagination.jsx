import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [1, 2, 3, 4, 5]

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => onPageChange && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 disabled:opacity-40"
      >
        <FiChevronLeft size={14} />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange && onPageChange(p)}
          className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-medium ${
            p === currentPage
              ? 'bg-indigo-600 text-white'
              : 'border border-gray-200 text-gray-600 hover:border-indigo-300'
          }`}
        >
          {p}
        </button>
      ))}

      <span className="text-gray-400 text-xs">...</span>

      <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 text-xs">
        {totalPages}
      </button>

      <button
        onClick={() => onPageChange && onPageChange(currentPage + 1)}
        className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500"
      >
        <FiChevronRight size={14} />
      </button>
    </div>
  )
}

export default Pagination