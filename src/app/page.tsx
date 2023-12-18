import Hero from './_components/layout/hero'
import AboutUs from './_components/layout/aboutus'
import Testimonials from './_components/layout/testimonials/testimonials'
import Footer from './_components/layout/footer/footer'
import Cta from './_components/layout/cta'
import OurServices from './_components/layout/ourservices'
import OurPreviousWork from './_components/layout/ourpreviouswork'
import ContactForm from './_components/layout/contactus'
import { ReCaptchaProvider } from "next-recaptcha-v3";

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-white relative">



      <Hero />

      <AboutUs />

      <Testimonials />

      <Cta />

      <OurServices />

      <OurPreviousWork />

      <ReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        useEnterprise
      >
        <ContactForm />
      </ReCaptchaProvider>

      <Footer />

    </main>
  )
}
