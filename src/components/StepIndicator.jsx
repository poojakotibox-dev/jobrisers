function StepIndicator({ steps, currentStep }) {
  return (
    <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-4 mb-8 overflow-x-auto pb-2 px-1">
      {steps.map((step, idx) => (
        <div key={step.id} className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="flex flex-col items-center gap-1">
            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold shrink-0 ${
                step.id === currentStep
                  ? 'bg-indigo-600 text-white'
                  : step.id < currentStep
                  ? 'bg-indigo-100 text-indigo-600'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              {step.id}
            </div>
            <span
              className={`text-[10px] sm:text-xs font-medium whitespace-nowrap ${
                step.id === currentStep ? 'text-indigo-600' : 'text-gray-400'
              }`}
            >
              {step.label}
            </span>
          </div>
          {idx < steps.length - 1 && (
            <div className="w-6 sm:w-16 h-px bg-gray-200 mb-5 shrink-0" />
          )}
        </div>
      ))}
    </div>
  )
}

export default StepIndicator