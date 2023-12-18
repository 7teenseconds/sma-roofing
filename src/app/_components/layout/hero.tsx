
import Image from 'next/image'
import Link from 'next/link'
import Header from './header/header'

export default function Hero() {
  return (

    <div className="h-[100vh] w-full relative text-center">
      <Image
        fill
        sizes=""
        src="/images/Frame 68.webp"
        alt=""
        className="object-cover object-center absolute top-0 hidden md:block"
      />
      {/* mobile  */}
      <Image
        fill
        src="/images/Frame 68.webp"
        alt=""
        className="object-cover object-center absolute top-0 block md:hidden"
      />

      <Header />

      <div className="absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-1/3 text-white top-1/2 left-1/2">
        <Image
          width={300}
          height={120}
          alt="SMA Roofing"
          src="/images/SMA-Roofing-Logo-White.png"
        />
        <p className="mt-6 text-md leading-8 primary font-normal">
          Family-run company offering a wide range of affordable solutions for all <br className="hidden xl:block" />your roofing and building needs, based in Cullompton, Devon.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="#contact-us"
            className=" bg-[#154992] px-3.5 py-2.5 text-sm font-semibold primary uppercase text-white shadow-sm hover:bg-[#283ceb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Request your free quotation
          </Link>
        </div>
      </div>
    </div >



  )
}