import React from 'react';
import { Check } from 'lucide-react';

function Services() {
  return (
    <div className="min-h-[200vh] bg-gradient-to-b from-[#c4c4c4] to-[#ffffff] relative">
      <div className="text-center py-12 text-white">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-lg">Delivering excellence with every mile</p>
      </div>
      {/* Section 1 */}
      <section className="sticky top-0 flex items-center bg-white max-w-[1536px] mx-auto rounded-3xl mb-12 shadow-2xl">
        <div className="relative flex flex-col lg:flex-row px-6 py-12 gap-12">
          <div className="flex-1 pr-8 z-10">
            <div className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Eco-Friendly Delivery</div>
            <h2 className="text-5xl font-bold mb-6 text-black">The biggest zero emissions network</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Together with our large network of local partners we enable you to truly reduce
              emissions and make impact on last-mile delivery
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-1.5 rounded-full">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-lg text-gray-700">Large fleet of cargo bikes and EV's</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-1.5 rounded-full">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-lg text-gray-700">Ship from your store or warehouse</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4  rounded-xl opacity-30 blur-lg"></div>
              <img
                src="/public/images/1.jpg"
                alt="Delivery Bike"
                className="relative w-full h-[400px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="sticky top-[7vh] flex items-center bg-white max-w-[1536px] mx-auto rounded-3xl mb-12 shadow-2xl">
        <div className="relative flex flex-col lg:flex-row px-6 py-12 gap-12">
          <div className="flex-1 pr-8 z-10">
            <div className="inline-block mb-4 px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Cost Effective</div>
            <h2 className="text-5xl font-bold mb-6 text-black">Optimise your last mile delivery cost</h2>
            <p className="text-gray-600 mb-8 text-lg">
              When we talk about zero emission delivery, you expect an above average price. We
              offer competitive pricing for your business.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-1.5 rounded-full">
                  <Check className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-lg text-gray-700">Zero emission delivery without paying a premium</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-1.5 rounded-full">
                  <Check className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-lg text-gray-700">Competitive pricing from 1 parcel per day</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4  rounded-xl opacity-30 blur-lg"></div>
              <img
                src="/public/images/2.jpg"
                alt="Delivery Person"
                className="relative w-full h-[400px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="sticky top-[13vh] flex items-center bg-white max-w-[1536px] mx-auto rounded-3xl mb-12 shadow-2xl">
        <div className="relative flex flex-col lg:flex-row px-6 py-12 gap-12">
          <div className="flex-1 pr-8 z-10">
            <div className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Customer First</div>
            <h2 className="text-5xl font-bold mb-6 text-black">Boost your customer experience</h2>
            <p className="text-gray-600 mb-8 text-lg">
              We offer sustainable delivery options for your customers, creating a clear, flexible
              and unique journey from door to door.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-1.5 rounded-full">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-lg text-gray-700">Accurate delivery promise</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-1.5 rounded-full">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-lg text-gray-700">Customised track and trace page</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4  rounded-xl opacity-30 blur-lg"></div>
              <img
                src="/public/images/3.jpg"
                alt="Happy Customers"
                className="relative w-full h-[400px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="sticky top-[19vh] flex items-center bg-white max-w-[1536px] mx-auto rounded-3xl mb-12 shadow-2xl">
        <div className="relative flex flex-col lg:flex-row px-6 py-12 gap-12">
          <div className="flex-1 pr-8 z-10">
            <div className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Real-Time Updates</div>
            <h2 className="text-5xl font-bold mb-6 text-black">Real-time tracking and updates</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Keep your customers informed with our advanced tracking system that provides
              real-time updates and precise delivery windows.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-1.5 rounded-full">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-lg text-gray-700">Live GPS tracking for all deliveries</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-1.5 rounded-full">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-lg text-gray-700">Automated SMS and email notifications</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl opacity-30 blur-lg"></div>
              <img
                src="/public/images/4.jpg"
                alt="Tracking Dashboard"
                className="relative w-full h-[400px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Services;