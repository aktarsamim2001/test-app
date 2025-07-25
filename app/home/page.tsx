import HeroV7 from '@/components/homepage-07/HeroV7'
import OurWork from '@/components/homepage-07/OurWork'
import PricingCard from '@/components/homepage-07/PricingCard'
import ProcessV4 from '@/components/homepage-07/ProcessV4'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import ServicesV6 from '@/components/shared/ServicesV6'
import TestimonialV2 from '@/components/shared/TestimonialV2'

export const metadata = {
  title: 'Design Studio - SmartTask Studios',
}

const page = () => {
  return (
    <LayoutOne>
      <HeroV7 />
      <OurWork />
      <ServicesV6 />
      <TestimonialV2 />
      <ProcessV4 />
      {/* <PricingCard showHeader={true} /> */}
      <CTA showContactForm>
        Let’s
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/home 7/01.webp' },
            { id: '2', img: '/images/home 7/02.webp' },
            { id: '3', img: '/images/home 7/03.webp' },
          ]}
        />
        Create
        <span className="block font-instrument italic text-[#F54BB4] max-md:inline-block sm:mt-10">
          Something Iconic
        </span>
      </CTA>
    </LayoutOne>
  )
}

export default page
