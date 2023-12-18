import Image from 'next/image'
import { footerMenu } from "./footer-menu"
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="pt-4 left-1/2 -translate-x-1/2  w-full relative text-center">
            <div className="relative flex flex-col items-center transform -translate-x-1/2 text-white left-1/2">
                <Image
                    width={200}
                    height={80}
                    alt="SMA Roofing"
                    src="/images/sma logo_2.webp"
                />
            </div>
            <nav className="py-4 flex flex-col relative w-full items-center" aria-label="Global">
                <div className="flex lg:hidden">
                </div>
                <div className="relative grid md:flex gap-2 md:gap-10 items-center text-sm">
                    {footerMenu.map((item) => (
                        <a key={item.name} href={item.href} className="primary font-normal primary-blue leading-6">
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>
            <div className="relative py-4 items-center transform -translate-x-1/2 bg-[#154992] text-white left-1/2">
                <span className="mt-2 font-bold text-lg primary">SMA Building & Roofing. All rights reserved. </span><br className="block md:hidden" /><span className="mt-2 text-lg primary"><Link className="adopstarlink" href="https://www.adopstar.com" target="_blank">Developed by Adopstar</Link></span>
            </div>

        </footer>

    )
}