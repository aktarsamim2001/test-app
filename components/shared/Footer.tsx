import footerData from '@/data/footer.json'
import arrowIcon from '@/public/images/icons/arrow-Icon.svg'
import logo from '@/public/images/logo-black.png'
import Image from 'next/image'
import Link from 'next/link'
import FooterProvider from './FooterProvider'

// ✅ Strong type for each section
type FooterSection = {
  title: string
  links: { href: string; label: string }[]
  socials?: { href: string; icon: string; label: string }[]
  logo?: { src: string; alt: string }
}

const Footer = () => {
  return (
    <FooterProvider>
      <div className="container">
        <div className="relative z-10 flex flex-col flex-wrap justify-center gap-y-10 sm:flex-row sm:justify-between sm:gap-y-16">
          <div className="pr-8 max-lg:basis-full">
            <h5 className="mb-4 font-satoshi text-sm font-bold uppercase tracking-[3px] text-white sm:mb-8">
              Reach Us
            </h5>
            <p className="mb-5 text-sm text-white">Any project or idea. will be happy to discuss and quote.</p>
            <div className="group flex max-w-[360px] items-center justify-between gap-4 bg-primary bg-opacity-30 p-4 backdrop-blur-2xl">
              <Image className="h-[70px] w-auto" src={logo} alt="logo" height={70} width={120} />
              <div>
                <h6 className="font-satoshi text-sm font-bold text-white">Get a free quote within 24 hours</h6>
              </div>
              <Link href="/get-a-quote" className="group relative">
                <figure className="relative h-[55px] w-[55px] cursor-pointer overflow-hidden bg-primary">
                  <Image
                    src={arrowIcon}
                    alt="Arrow Icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0"
                  />
                  <Image
                    src={arrowIcon}
                    alt="Arrow Icon"
                    className="absolute -translate-x-4 translate-y-12 opacity-0 transition-all duration-500 group-hover:translate-x-[19px] group-hover:translate-y-5 group-hover:opacity-100"
                  />
                </figure>
              </Link>
            </div>
          </div>

          {footerData.map((section: FooterSection, index) => (
            <div key={`Id_${index}`}>
              <h5 className="mb-4 font-satoshi text-sm font-bold uppercase tracking-[3px] text-white sm:mb-8">
                {section.title}
              </h5>

              {/* ✅ Optional logo */}
              {section.logo && (
                <div className="mb-4">
                  <Image src={section.logo.src} alt={section.logo.alt} width={120} height={40} />
                </div>
              )}

              <ul>
                {section.links.map(({ href, label }) => (
                  <li className="mb-4" key={href}>
                    <Link
                      href={href}
                      className="block text-white transition-colors duration-300 hover:font-medium hover:text-primary">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* ✅ Optional socials */}
              {section.socials && (
                <div className="mt-6 flex items-center gap-4">
                  {section.socials.map((social) => (
                    <Link
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block">
                      <Image
                        src={social.icon}
                        alt={social.label}
                        width={18}
                        height={18}
                        className="brightness-100 invert hover:opacity-80"
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <h5 className="footer-text xs:text-5xl absolute bottom-0 left-1/2 w-full -translate-x-1/2 translate-y-[30%] text-nowrap text-center font-satoshi text-4xl font-medium tracking-widest sm:text-6xl md:text-[110px]">
          SMARTTASK STUDIOS
        </h5>
      </div>
    </FooterProvider>
  )
}

export default Footer
