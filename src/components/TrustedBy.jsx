import amazonLogo from '../assets/amazon1.png'
import adobeLogo from '../assets/adobe.png'
import microsoftLogo from '../assets/microsoft.png'
import infosysLogo from '../assets/infosys.png'
import tataLogo from '../assets/tata1.png'

const companies = [
  { name: 'Amazon', logo: amazonLogo },
  { name: 'Adobe', logo: adobeLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Infosys', logo: infosysLogo },
  { name: 'Tata', logo: tataLogo },
]

function TrustedBy() {
  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-gray-500 text-sm font-medium mb-4">Trusted by leading companies</p>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {companies.map((company) => (
          <div key={company.name} className="h-9 md:h-10 flex items-center">
            <img
              src={company.logo}
              alt={company.name}
              className="h-4 md:h-8 object-contain opacity-70 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustedBy