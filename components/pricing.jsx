/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/solid'

const tiers = [
  {
    name: 'Basic',
    href: '#',
    priceMonthly: ' 500',
    description: 'All the basics for starting a new business',
    includedFeatures: ['Unlimited BDIX Bandwidth', '4K Youtube and Facebook Stream.', '24/7 Phone and Online Support.'],
  },
  {
    name: 'Balanced',
    href: '#',
    priceMonthly: 800,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Unlimited BDIX Bandwidth.',
      '4K Youtube and Facebook Stream.',
      'IPv6 Public IP Only',
      '24 / 7 Phone and Online Support',
    ],
  },
  {
    name: 'Gamer',
    href: '#',
    priceMonthly: 1000,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
      'Faucibus volutpat magna.',
    ],
  },
  {
    name: 'Heavy User',
    href: '#',
    priceMonthly: 1500,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
      'Faucibus volutpat magna.',
      'Id sed tellus in varius quisque.',
      'Risus egestas faucibus.',
      'Risus cursus ullamcorper.',
    ],
  },
]

export default function Pricing() {
  return (
    <div className="bg-white" id="pricing">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Pricing Plans</h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Start building for free, then add a site plan to go live. Account plans unlock additional features.
          </p>
          <div className="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-">
          </div>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {tiers.map((tier) => (
            <div key={tier.name} className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6" >
                <p className='mt-8'>
                  40 Mbps </p>
                <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">TK{tier.priceMonthly}</span>{' '}
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <a
                  href={tier.href}
                  className="mt-8 block w-full bg-blue-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >
                  Buy {tier.name}
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">Whats included</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
