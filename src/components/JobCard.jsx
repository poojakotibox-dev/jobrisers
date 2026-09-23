function JobCard({ job }) {
  return (
    <div className="border border-gray-100 rounded-xl p-4 sm:p-5 hover:shadow-md transition bg-white">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 ${job.logoColor}`}
          >
            {job.logoLetter}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-gray-900 text-sm">{job.title}</p>
            <p className="text-gray-500 text-xs">{job.company}</p>
          </div>
        </div>
        <span className="text-[11px] text-gray-400 whitespace-nowrap shrink-0">{job.postedAgo}</span>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-3 text-xs text-gray-500">
        <span>{job.location}</span>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <span>{job.workMode}</span>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <span>{job.experience}</span>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-gray-50 text-gray-600 text-[11px] rounded-full border border-gray-100"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-end mt-4">
        <button className="bg-indigo-600 text-white text-xs font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
          Apply Now
        </button>
      </div>
    </div>
  )
}

export default JobCard