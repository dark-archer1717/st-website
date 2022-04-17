import {
  HomeIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Home Broadband Internet'
    ,
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: HomeIcon,
  },
  {
    name: 'Accessible Technical Support',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: LockClosedIcon,
  },
  {
    name: 'Dedicated Server Hosting',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: RefreshIcon,
  },
  {
    name: 'Advanced Security',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Dedicated Internet',
    description: 'Dedicated high-speed internet connectivity with multiple upstream support and multiple backup links to ensure 99.9% uptime.',
    icon: CogIcon,
  },
  {
    name: 'Fast FTP Server Support',
    description: '120 Mbps download speed for FTP servers to ensure user satisfaction.',
    icon: ServerIcon,
  },
]

export default function Feature() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32" id="feature">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600"></h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need for your daily need
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Providing one of the best internet service in Dhaka City.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
