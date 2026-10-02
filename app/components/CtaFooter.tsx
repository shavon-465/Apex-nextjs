import Image from "next/image";
import { FacebookIcon, WhatsAppIcon, InstagramIcon } from "./Icons";

const SOCIAL_CLASS =
  "box-border w-[24px] shrink-0 h-[24px] overflow-hidden relative";

export default function CtaFooter() {
  return (
    <footer
      className="box-border w-full h-fit shrink-0 flex flex-col
                 gap-[40px] p-[40px_20px] md:p-[80px_40px_40px_40px]
                 justify-start items-start bg-[#f0f0f0] overflow-hidden"
    >
      {/* CTA panel — text + car image (stacked on mobile/tablet, side-by-side on desktop) */}
      <div
        className="box-border w-full h-fit shrink-0 flex flex-col lg:flex-row
                   gap-[10px] lg:gap-[40px] p-[8px]
                   justify-start items-stretch bg-[#1a1a1a] rounded-[6px] overflow-hidden"
      >
        {/* Text column */}
        <div
          className="box-border w-full lg:flex-[541_1_0%] shrink-0 flex flex-col
                     gap-[56px] lg:gap-[24px] p-[12px_8px] lg:p-[12px]
                     justify-start lg:justify-between items-start order-2 lg:order-1"
        >
          <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[12px] lg:gap-[16px] justify-start items-start">
            <p className="text-[16px] md:text-[32px] lg:max-w-[454px] m-0 text-[#ffffff] font-semibold tracking-[-1px]">
              Build Your Vehicle. Right.
            </p>
            <p className="text-[12px] md:text-[16px] m-0 text-[#ffffffb3] font-normal">
              Curated, compatible parts for your specific car. Premium quality
              meets guaranteed fitment—every upgrade, every fix.
            </p>
          </div>
          <a
            href="#"
            className="box-border w-full h-fit shrink-0 flex flex-col gap-[10px] p-[8px_16px] justify-center items-center bg-[#ffffff] rounded-[4px] no-underline transition-opacity hover:opacity-90"
          >
            <span className="text-[12px] text-[#141414] font-medium whitespace-nowrap">
              Shop now
            </span>
          </a>
        </div>

        {/* Car image */}
        <div className="relative box-border w-full h-[218px] md:h-[385px] shrink-0 lg:flex-[763_1_0%] lg:max-w-[763px] lg:h-[385px] rounded-[6px] overflow-hidden order-1 lg:order-2">
          <Image
            src="/Apex-lp-assets/cta-car.jpg"
            alt="Premium vehicle"
            fill
            sizes="(max-width: 1024px) 100vw, 763px"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Footer bar — logo / links / socials (stacked on mobile, row on tablet+desktop) */}
      <div
        className="box-border w-full h-fit shrink-0 flex flex-col md:flex-row
                   gap-[57px] md:gap-[20px] p-[20px]
                   justify-start md:justify-between items-center
                   rounded-[12px_6px_6px_6px] overflow-hidden"
      >
        {/* Logo */}
        <div className="relative w-[82px] h-[32px] shrink-0">
          <Image
            src="/Apex-lp-assets/Apex_Logo_Light.png"
            alt="Apex"
            fill
            sizes="82px"
            className="object-contain object-center"
          />
        </div>

        {/* Links group */}
        <div className="box-border w-fit h-fit shrink-0 flex flex-col md:flex-row gap-[40px] justify-start items-center">
          <nav className="box-border w-fit h-fit shrink-0 flex flex-col md:flex-row gap-[20px] justify-center items-center">
            <a
              href="#categories"
              className="text-[14px] leading-[1.1] text-[#1e1e1e] font-medium whitespace-nowrap no-underline hover:opacity-70 transition-opacity"
            >
              Services
            </a>
            <a
              href="#why-us"
              className="text-[14px] leading-[1.1] text-[#1e1e1e] font-medium whitespace-nowrap no-underline hover:opacity-70 transition-opacity"
            >
              Why us
            </a>
          </nav>
          <div className="box-border w-fit h-fit shrink-0 flex flex-col md:flex-row gap-[20px] justify-between items-center">
            <a
              href="#"
              className="text-[14px] leading-[1.1] tracking-[-0.5px] text-[#1e1e1e] font-medium whitespace-nowrap no-underline hover:opacity-70 transition-opacity"
            >
              Privacy policy
            </a>
            <a
              href="#"
              className="text-[14px] leading-[1.1] tracking-[-0.5px] text-[#1e1e1e] font-medium whitespace-nowrap no-underline hover:opacity-70 transition-opacity"
            >
              Terms &amp; condition
            </a>
          </div>
        </div>

        {/* Social icons */}
        <div className="box-border w-fit h-[24px] shrink-0 flex flex-row gap-[8px] justify-start items-center">
          <FacebookIcon className={SOCIAL_CLASS} />
          <WhatsAppIcon className={SOCIAL_CLASS} />
          <InstagramIcon className={SOCIAL_CLASS} />
        </div>
      </div>
    </footer>
  );
}
