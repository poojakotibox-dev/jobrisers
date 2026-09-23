import { useNavigate } from 'react-router-dom'
import { FiTarget, FiMail, FiMapPin, FiUser, FiThumbsUp } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import OnboardingSidebar from '../components/OnboardingSidebar'
import OnboardingNavButtons from '../components/OnboardingNavButtons'
import ReviewItem from '../components/ReviewItem'
import { onboardingData } from '../data/onboardingData'

function OnboardingComplete() {
  const navigate = useNavigate()
  const { reviewStep } = onboardingData

  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="app" />

      <div className="flex flex-col lg:flex-row">
        <OnboardingSidebar currentStep={4} />

        <div className="flex-1 px-6 sm:px-10 lg:px-12 py-8 lg:py-10">
          <p className="text-indigo-600 text-xs font-semibold tracking-wide uppercase mb-2">
            {reviewStep.label}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
            {reviewStep.heading}
          </h2>
          <p className="text-gray-500 text-sm mb-6">{reviewStep.subtext}</p>

          <div className="space-y-4 mb-6">
            <ReviewItem
              icon={FiTarget}
              label="Career Goal"
              value="Get a new job"
              onEdit={() => navigate('/onboarding')}
            />
            <ReviewItem
              icon={FiMail}
              label="Job Role"
              value="Product Designer"
              onEdit={() => navigate('/onboarding/role')}
            />
            <ReviewItem
              icon={FiMapPin}
              label="Location"
              value="Bengaluru, India"
              onEdit={() => navigate('/onboarding/location')}
            />
            <ReviewItem
              icon={FiUser}
              label="Work Mode"
              value="On-site"
              onEdit={() => navigate('/onboarding/location')}
            />
          </div>

          <div className="flex items-start gap-3 bg-indigo-50 rounded-xl p-4 mb-8">
            <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white shrink-0">
              <FiThumbsUp size={16} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{reviewStep.successBox.title}</p>
              <p className="text-xs text-gray-600">{reviewStep.successBox.desc}</p>
            </div>
          </div>

          <OnboardingNavButtons
            onBack={() => navigate('/onboarding/location')}
            onContinue={() => navigate('/')}
            continueLabel="Finish Setup"
          />
        </div>
      </div>
    </div>
  )
}

export default OnboardingComplete