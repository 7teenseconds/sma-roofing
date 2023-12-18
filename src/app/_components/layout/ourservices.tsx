import Image from 'next/image'
import Link from 'next/link'

export default function OurServices() {
  return (


    <div className="w-full mx-auto px-4 pt-6 pb-0 sm:px-6 lg:px-8" id="our-services">
      <div className="px-6 py-4 sm:p-4">
        <div className="mx-auto max-w-xl lg:max-w-none">
          <div className="text-center">
            <h1 className="text-4xl secondary primary-blue font-semibold tracking-tight text-gray-900">Our Services</h1>
          </div>
        </div>
      </div>

      <div className="bg-white py-4 mx-auto max-w-5xl flex object-center">

        <div className="mx-auto items-center object-center grid md:flex justify-center w-full text-center gap-8">

          <div className="w-full max-w-xs relative isolate flex flex-col overflow-hidden bg-gray-900 p-5 h-80">
            <img src="images/pitched-roofs-desktop.png" alt="Pitched Roofs" className="absolute inset-0 -z-10 h-full w-full object-cover" />
            <p className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold primary leading-6 text-white">Pitched Roofs<br /><span className="text-white primary text-lg">Get a quote today for a full roof replacement.</span></p>

          </div>

          <div className="w-full max-w-xs relative isolate flex flex-col overflow-hidden bg-gray-900 p-5 h-80">
            <img src="images/flat-roof-desktop.png" alt="Flat Roofs" className="absolute inset-0 -z-10 h-full w-full object-cover" />
            <p className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold primary leading-6 text-white">Flat Roofs<br /><span className="text-white primary text-lg">We specialise in flat roofing solutions.</span></p>
          </div>

          <div className="w-full max-w-xs relative isolate flex flex-col overflow-hidden bg-gray-900 p-5 h-80">
            <img src="images/roof-repairs-desktop.png" alt="Roof Repairs" className="absolute inset-0 -z-10 h-full w-full object-cover" />
            <p className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold primary leading-6 text-white">Roof Repairs<br /><span className="text-white primary text-lg">We can save you money by repairing your roof instead of a full replacement, if possible.</span></p>
          </div>

        </div>

      </div>

      <div className="bg-white py-4 mx-auto max-w-5xl flex object-center">

        <div className="mx-auto items-center object-center grid md:flex justify-center w-full text-center gap-4">

          <div className="w-screen lg:w-full max-w-xs md:max-w-5xl relative isolate overflow-hidden bg-gray-900 p-5 h-64 text-center">
            <img src="images/lead-work-desktop.png" alt="Lead Work" className="absolute inset-0 -z-10 h-full w-full object-cover" />
            <p className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold primary leading-6 text-white">Lead Work</p>
          </div>

        </div>

      </div>



      <div className="bg-white py-4 mx-auto max-w-5xl grid md:flex object-center">

        <div className="mx-auto flex md:mr-8 w-full md:w-2/3  text-center gap-8 align-top max-w-xs md:max-w-5xl">

          <div className="w-full relative isolate flex flex-col overflow-hidden bg-gray-900 p-5 h-200 align-top">
            <img src="images/guttering-desktop.png" alt="Guttering, Fascias & Soffits" className="absolute inset-0 -z-10 h-full w-full object-cover" />
            <p className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold primary leading-6 text-white">Guttering, Fascias & Soffits<br /><span className="text-white primary text-lg">These crucial components work together to protect your property from weather and pests. Soffits seal the underside of the roof overhang, while fascias provide the last line of defence against the elements. Our gutters are expertly fixed to the fascia to safeguard your property.</span></p>
          </div>
        </div>

        <div className="mx-auto flex w-screen md:w-1/3 text-center gap-8 align-top max-w-xs md:max-w-6xl my-6 md:my-0">
          <div className="mx-auto flex flex-col w-full text-center gap-8 align-top">

            <div className="w-full max-w-md relative isolate flex flex-col overflow-hidden bg-gray-900 p-5 h-80">
              <img src="images/cladding-desktop.png" alt="Cladding Bricklaying Rendering Fencing" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <p className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold primary leading-6 text-white">Cladding<br />Bricklaying<br />Rendering<br />Fencing</p>
            </div>

            <div className="w-full max-w-md relative isolate flex flex-col overflow-hidden bg-gray-900 p-5 h-80">
              <img src="images/chimney-desktop.png" alt="Chimney Restoration - Repointing" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <p className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold primary leading-6 text-white">Chimney Restoration<br />Re-Pointing</p>
            </div>
          </div>
        </div>
      </div>





      <div className="text-center">
        <h2 className="py-4 text-2xl primary tracking-tight">
          Additionally, our EPDM Rubber Roofs come with a 20-year manufacturer's <br className="hidden xl:block" />warranty, ensuring long-lasting quality and protection.
        </h2>
      </div>

      <div className="relative py-4 flex flex-col items-center transform -translate-x-1/2 text-white left-1/2">
        <Image
          width={200}
          height={80}
          alt="SMA Roofing"
          src="/images/icon-warranty.png"
        />
      </div>

    </div>



  )
}