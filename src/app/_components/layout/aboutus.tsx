import Image from 'next/image'
import Link from 'next/link'

export default function AboutUs() {
  return (

    <div className="bg-white" id="about-us">
      <div className="mx-auto max-w-7xl px-4 pt-6 pb-0 sm:px-6 lg:px-8">
        <div className="rounded-2xl px-6 py-4 sm:p-4">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
              <h1 className="text-4xl secondary primary-blue font-semibold tracking-tight text-gray-900">About Us</h1>
            </div>
          </div>
        </div>
        <div className="rounded-2xl px-6 py-16 sm:p-16">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-2xl primary tracking-tight">
                We take pride in delivering a friendly and reliable service, <br className="hidden xl:block" />from small gutter repairs to complete roof installations.
              </h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 pb-16 sm:max-w-none lg:grid-cols-3">



              <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <img className="mx-auto h-180 w-180" src="images/icon - commitment.webp" alt="" />
                  </div>
                </div>
                <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <p className="mt-2 text-lg primary">Our commitment is built on a solid foundation of excellent customer service and the highest standards of workmanship.</p>
                </div>
              </div>



              <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <img className="mx-auto h-180 w-180" src="images/icon - personalised experience.webp" alt="" />
                  </div>
                </div>
                <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <p className="mt-2 text-lg primary">We offer a professional and personalised experience, always prioritising your requirements over our own.</p>
                </div>
              </div>




              <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <img className="mx-auto h-180 w-180" src="images/icon - customer service.webp" alt="" />
                  </div>
                </div>
                <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <p className="mt-2 text-lg primary">Many satisfied customers in the mid Devon area have recommended us for consistently delivering top-notch work.</p>
                </div>
              </div>



            </div>
            <div className="mx-auto max-w-xl lg:max-w-none">
              <div className="rounded-2xl px-6 py-4 sm:p-4">
                <div className="mx-auto max-w-xl lg:max-w-none">
                  <div className="text-center">
                    <h1 className="text-4xl secondary primary-blue font-semibold tracking-tight text-gray-900">Over 10 years experience in the industry</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}