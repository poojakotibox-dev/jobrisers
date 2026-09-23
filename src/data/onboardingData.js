export const onboardingData = {
  // Step 1 - Goals page
  tagline: "LET'S GET YOU STARTED",
  heading: 'Find a career that fits',
  headingHighlight: 'you',
  subtext:
    "Tell us a bit about your goals and preferences so we can show you the most relevant opportunities.",
  checklist: [
    'Personalized job recommendations',
    'Relevant company suggestions',
    'A better, faster job search experience',
  ],
  bannerText: 'Small Steps Brighter Future',

  steps: [
    { id: 1, label: 'Your Goals' },
    { id: 2, label: 'Job Role' },
    { id: 3, label: 'Location' },
    { id: 4, label: 'All Set' },
  ],

  goalOptions: [
    {
      id: 'new-job',
      icon: 'briefcase',
      title: 'Get a new job',
      desc: "I'm actively looking for new opportunities",
    },
    {
      id: 'grow',
      icon: 'trending',
      title: 'Grow in my current field',
      desc: 'I want to upskill and explore better roles',
    },
    {
      id: 'explore',
      icon: 'compass',
      title: 'Explore career options',
      desc: "I'm open to different opportunities",
    },
  ],

  roleQuestion: {
    label: 'What job role are you interested in?',
    subtext: 'You can search for a role or choose from popular options.',
    searchPlaceholder: 'Search job roles (e.g. Product Designer, Software Engineer)',
    popularRoles: [
      'Product Designer',
      'Software Engineer',
      'Data Analyst',
      'Product Manager',
      'UI/UX Designer',
    ],
  },

  locationQuestion: {
    label: 'Where are you looking for opportunities?',
    subtext: 'You can choose a city, country or select remote.',
    searchPlaceholder: 'Search location (e.g. Bengaluru, India)',
  },

  // Sidebar used on Step 2, 3, 4 pages (vertical stepper layout)
  sidebarSteps: [
    { id: 1, title: 'Career Goals', desc: 'Get a new job' },
    { id: 2, title: 'Job Role', desc: 'Choose your preferred role' },
    { id: 3, title: 'Location', desc: 'Set your preferred location' },
    { id: 4, title: 'Complete', desc: 'All set!' },
  ],

  // Step 2 - Job Role page
  roleStep: {
    label: 'YOUR PREFERENCES',
    heading: 'What job role are you looking for?',
    subtext: 'Choose a role that matches your skills and interests. You can change this later.',
    searchPlaceholder: 'Search job roles (e.g. Product Designer, Data Analyst)',
    popularRolesHeading: 'Popular Roles',
    popularRoles: [
      { id: 'product-designer', title: 'Product Designer', icon: 'design' },
      { id: 'software-engineer', title: 'Software Engineer', icon: 'code' },
      { id: 'data-analyst', title: 'Data Analyst', icon: 'chart' },
      { id: 'product-manager', title: 'Product Manager', icon: 'box' },
      { id: 'marketing-specialist', title: 'Marketing Specialist', icon: 'megaphone' },
      { id: 'ux-designer', title: 'UI/UX Designer', icon: 'cursor' },
      { id: 'sales-executive', title: 'Sales Executive', icon: 'users' },
      { id: 'hr-manager', title: 'HR Manager', icon: 'people' },
      { id: 'business-analyst', title: 'Business Analyst', icon: 'pie' },
      { id: 'customer-support', title: 'Customer Support', icon: 'headset' },
    ],
    categoryHeading: 'Or browse by category',
    categories: [
      'Design',
      'Engineering',
      'Product',
      'Data',
      'Marketing',
      'Sales',
      'Human Resources',
      'Finance',
    ],
  },

  // Step 3 - Location page
  locationStep: {
    label: 'YOUR PREFERENCES',
    heading: 'Where are you looking for opportunities?',
    subtext:
      "Choose a location where you'd like to work. You can select a city, region, or keep it open to remote work.",
    searchPlaceholder: 'Search city, state or country (e.g. Bengaluru, India)',
    popularLocationsHeading: 'Popular Locations',
    popularLocations: [
      { id: 'bengaluru', city: 'Bengaluru', country: 'India', type: 'city' },
      { id: 'mumbai', city: 'Mumbai', country: 'India', type: 'city' },
      { id: 'delhi', city: 'Delhi', country: 'India', type: 'city' },
      { id: 'hyderabad', city: 'Hyderabad', country: 'India', type: 'city' },
      { id: 'pune', city: 'Pune', country: 'India', type: 'city' },
      { id: 'chennai', city: 'Chennai', country: 'India', type: 'city' },
      { id: 'remote', city: 'Remote', country: 'Work from anywhere', type: 'remote' },
      { id: 'other', city: 'Other Location', country: 'Specify manually', type: 'other' },
    ],
    workPreferenceHeading: 'Work Preference',
    workPreferenceSubtext: 'You can choose more than one option.',
    workPreferences: [
      { id: 'onsite', title: 'On-site', desc: 'Work from company office', icon: 'building' },
      { id: 'hybrid', title: 'Hybrid', desc: 'Split between office and remote', icon: 'shuffle' },
      { id: 'remote', title: 'Remote', desc: 'Work from anywhere', icon: 'home' },
    ],
  },

  locationSidebarQuote: {
    text: 'New Opportunities Closer to You',
    subtext: "Great jobs can be anywhere. We'll help you find the right ones.",
  },

    // Step 4 - Complete/Review page
  reviewStep: {
    label: 'ALMOST DONE',
    heading: 'Review your preferences',
    subtext: "Here's what you've selected. You can edit anything before we finish.",
    successBox: {
      title: "You're all set!",
      desc: "We'll now personalize your job feed, company recommendations and career tips based on your preferences.",
    },
  },

}