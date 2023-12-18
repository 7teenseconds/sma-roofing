
import Image from 'next/image'
import Link from 'next/link'

export default function Cta() {
  return (

    <div className="w-full h-96 relative text-center my-4 py-6">
      <Image
        fill
        sizes=""
        src="/images/cta-desktop.webp"
        alt=""
        className="object-cover object-center hidden md:block"
      />
      {/* mobile  */}
      <Image
        fill
        src="/images/cta-desktop.webp"
        alt=""
        className="object-cover object-center block md:hidden"
      />

      <div className="absolute p-6 block items-center transform -translate-x-1/2 -translate-y-1/2 text-white max-w-sm top-1/2 left-1/2 bg-[#154992]/50 ">

        <p className="leading-tight primary text-xl md:text-4xl font-bold">
          Your Local<br />Roofing<br />Specialist
        </p>
        <div className="m-8 flex items-center justify-center gap-x-6">
          <Link
            href="#contact-us"
            className="bg-white px-3.5 py-2.5 text-sm font-semibold primary uppercase primary-blue shadow-sm hover:bg-[#283ceb] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </div >



  )
}