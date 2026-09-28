import Image from "next/image";
import { FacebookIcon, WhatsAppIcon, InstagramIcon } from "./Icons";

const SOCIAL_CLASS =
  "box-border w-[20px] md:w-[24px] shrink-0 h-[20px] md:h-[24px] overflow-hidden relative";

export default function CtaFooter() {
  return (
    <footer
      className="box-border w-full h-fit shrink-0 flex flex-col lg:flex-row
                 gap-[8.5px] p-[40px_20px] md:gap-[20px] md:p-[64px_32px] lg:gap-[12px] lg:p-[80px_40px]
                 justify-start items-start bg-[#f4f4f5] overflow-hidden"
    >
      {/* CTA card */}
      <div className="box-border w-full lg:w-[414px] lg:shrink-0 h-fit shrink-0 flex flex-col gap-[7.1px] p-[14px] md:p-[20px] justify-start items-start bg-[#1a1a1a] rounded-[4px] lg:rounded-[6px] overflow-hidden">
        <div className="box-border w-full h-[158px] md:h-[348px] shrink-0 flex flex-col gap-[17.1px] md:gap-[24px] justify-between items-start">
          <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[8.5px] md:gap-[12px] justify-start items-start">
            <p className="text-[20px] md:text-[32px] lg:w-[273px] m-0 text-[#ffffff] font-semibold tracking-[-0.5px] lg:tracking-[-1px] whitespace-nowrap lg:whitespace-normal">
              Upgrade your drive
            </p>
            <p className="text-[12px] md:text-[16px] lg:w-[262px] m-0 text-[#ffffffb3] font-normal whitespace-nowrap lg:whitespace-normal">
              Find the parts that make the difference.
            </p>
          </div>
          <a
            href="#"
            className="box-border w-full h-fit shrink-0 flex flex-col gap-[7.1px] md:gap-[10px] p-[6px_11px] md:p-[8px_16px] justify-center items-center bg-[#ffffffff] rounded-[3px] lg:rounded-[4px] no-underline transition-opacity hover:opacity-90"
          >
            <span className="text-[10px] md:text-[12px] text-[#141414ff] font-medium whitespace-nowrap">
              Shop now
            </span>
          </a>
        </div>
      </div>

      {/* Footer panel */}
      <div
        className="box-border w-full lg:flex-1 h-[326px] md:h-[400px] lg:h-full shrink-0
                   flex flex-col gap-[133.7px] md:gap-[188px] p-[14px] md:p-[20px]
                   justify-between items-start bg-[#1a1a1aff]
                   rounded-[9px_4px_4px_4px] lg:rounded-[12px_6px_6px_6px] overflow-hidden"
      >
        <div className="relative w-[58px] md:w-[82px] h-[23px] md:h-[32px] shrink-0">
          <Image
            src="/Apex-lp-assets/Apex_Logo_Dark.png"
            alt="Apex"
            fill
            sizes="82px"
            className="object-cover object-center"
          />
        </div>

        <div className="box-border w-full h-fit md:h-[114.287px] shrink-0 flex flex-col lg:flex-row gap-[20px] md:gap-[40px] lg:gap-[40px] justify-start lg:justify-between items-start">
          {/* Left: headline + nav */}
          <div className="box-border w-fit h-fit lg:h-full shrink-0 lg:flex-1 flex flex-col gap-[17.1px] md:gap-[24px] justify-start items-start">
            <p className="rot1 text-[16px] leading-[19px] md:text-[20px] md:leading-[24px] box-border w-full m-0 max-w-[302px] md:max-w-[278px] text-[#ffffffff] font-semibold tracking-[-0.5px] text-left">
              Premium car audio, accessories &amp; upgrades for your rides.
            </p>
            <nav className="box-border w-fit h-fit lg:h-[18.052px] shrink-0 flex flex-row gap-[14.2px] md:gap-[20px] justify-start items-center">
              <a
                href="#categories"
                className="rot2 text-[11px] leading-[12px] md:text-[14px] md:leading-[15px] text-[#ffffffb3] font-medium whitespace-nowrap no-underline hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#why-us"
                className="rot2 text-[11px] leading-[12px] md:text-[14px] md:leading-[15px] text-[#ffffffb3] font-medium whitespace-nowrap no-underline hover:text-white transition-colors"
              >
                Why us
              </a>
            </nav>
          </div>

          {/* Right: socials + legal */}
          <div className="box-border w-fit h-fit lg:h-full shrink-0 lg:flex-1 flex flex-col gap-[20px] md:gap-[80px] justify-start lg:justify-between items-start lg:items-end">
            <div className="box-border w-fit h-[20px] md:h-[24px] shrink-0 flex flex-row gap-[12px] md:gap-[8px] justify-start items-start order-2 lg:order-1">
              <FacebookIcon className={SOCIAL_CLASS} />
              <WhatsAppIcon className={SOCIAL_CLASS} />
              <InstagramIcon className={SOCIAL_CLASS} />
            </div>
            <div className="box-border w-fit h-fit lg:h-[18.108px] shrink-0 flex flex-row gap-[14.2px] md:gap-[20px] justify-start items-start order-1 lg:order-2">
              <a
                href="#"
                className="rot1 text-[11px] leading-[12px] md:text-[14px] md:leading-[15px] text-[#ffffffb3] font-medium tracking-[-0.4px] lg:tracking-[-0.5px] whitespace-nowrap no-underline hover:text-white transition-colors"
              >
                Privacy policy
              </a>
              <a
                href="#"
                className="rot1 text-[11px] leading-[12px] md:text-[14px] md:leading-[15px] text-[#ffffffb3] font-medium tracking-[-0.4px] lg:tracking-[-0.5px] whitespace-nowrap no-underline hover:text-white transition-colors"
              >
                Terms &amp; condition
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
