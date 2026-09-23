import { onboardingData } from '../data/onboardingData'
import buildFutureImg from '../assets/build-future.jpeg'
import exploreIndustriesImg from '../assets/explore-indurstries.jpeg'
import exploreIndustriesBoyImg from '../assets/exploreindusries-boy.jpeg'

const stepImages = {
  2: exploreIndustriesImg,
  3: exploreIndustriesBoyImg,
  4: buildFutureImg,
}

function OnboardingSidebar({
  currentStep,
  totalSteps = 4,
  showBottomText = false,
}) {
  const sidebarImg = stepImages[currentStep]

  return (
    <div className="bg-indigo-50/50 px-6 py-8 lg:min-h-[calc(100vh-73px)] w-full lg:w-[300px] shrink-0 flex flex-col">

      {/* Step count */}
      <p className="text-gray-400 text-xs font-medium mb-2">
        Step {currentStep} of {totalSteps}
      </p>

      {/* Progress bars */}
      <div className="flex gap-1 mb-8">
        {Array.from({ length: totalSteps }).map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 flex-1 rounded-full ${
              idx < currentStep
                ? 'bg-indigo-600'
                : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Steps */}
      <div className="space-y-5 mb-8">
        {onboardingData.sidebarSteps.map((step) => {
          const isActive = step.id === currentStep
          const isDone = step.id < currentStep

          return (
            <div
              key={step.id}
              className="flex items-start gap-3"
            >
              {/* Step number */}
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${
                  isActive
                    ? 'bg-indigo-600 text-white ring-2 ring-indigo-200'
                    : isDone
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-400'
                }`}
              >
                {step.id}
              </div>

              {/* Step title + description */}
              <div>
                <p
                  className={`text-sm font-semibold ${
                    isActive || isDone
                      ? 'text-indigo-600'
                      : 'text-gray-400'
                  }`}
                >
                  {step.title}
                </p>

                <p
                  className={`text-xs ${
                    isActive || isDone
                      ? 'text-gray-500'
                      : 'text-gray-400'
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Image at bottom */}
      <div className="mt-auto hidden lg:block -mx-6">

        {sidebarImg && (
          <img
            src={sidebarImg}
            alt=""
            className="w-full h-auto object-cover object-left block"
          />
        )}

        {/* Show this text only when showBottomText=true */}
        {showBottomText && (
          <div className="px-6 py-3 bg-indigo-50/50 text-center">
            <p className="text-[11px] leading-[14px] text-gray-700 font-medium">
              <span className="text-indigo-600 font-semibold">
                "New Opportunities Closer to You
              </span>
              <span>
                {" - Great jobs can be anywhere. We'll help you find the right ones."}
              </span>
            </p>
          </div>
        )}

      </div>

    </div>
  )
}

export default OnboardingSidebar