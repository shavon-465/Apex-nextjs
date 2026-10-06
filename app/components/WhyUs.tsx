import Image from "next/image";

const FEATURES = [
  { title: "Trusted parts", icon: "/Apex-lp-assets/why-trusted.png" },
  { title: "Reliable Quality", icon: "/Apex-lp-assets/why-quality.png" },
  { title: "Support", icon: "/Apex-lp-assets/why-support.png" },
] as const;

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="box-border w-full h-fit shrink-0 flex flex-col
                 gap-[7.1px] p-[40px_20px] md:gap-[10px] md:p-[64px_32px] lg:p-[90px_40px_80px_40px]
                 justify-start items-start bg-[#f0f0f0] overflow-hidden"
    >
      <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[32px] md:gap-[60px] justify-start items-start">
        <h2
          className="rot1 text-[20px] leading-[26px] md:text-[26px] md:leading-[34px] lg:text-[32px] lg:leading-[42px]
                     box-border w-full m-0 max-w-[340px] md:max-w-[600px] lg:max-w-[625px]
                     text-[#1e1e1e] font-semibold tracking-[-0.7px] lg:tracking-[-1px] text-left"
        >
          The right parts, trusted quality, and upgrades that keep your ride at
          its best.
        </h2>

        <div className="box-border w-full h-fit shrink-0 flex flex-col md:flex-row gap-[20px] lg:gap-[34.5px] justify-start items-stretch">
          {FEATURES.map(({ title, icon }) => (
            <div
              key={title}
              className="box-border w-full md:flex-1 h-[360px] md:h-[440px] lg:h-[478px] shrink-0
                         flex flex-col gap-[40px] p-[40px_20px] justify-between items-center
                         bg-[#1e1e1e] rounded-[6px] overflow-hidden"
            >
              <div className="relative shrink-0 mt-auto w-[150px] h-[150px] md:w-[190px] md:h-[190px] lg:w-[230px] lg:h-[230px]">
                <Image src={icon} alt="" fill sizes="230px" className="object-contain object-center" />
              </div>
              <span className="mt-auto text-[20px] md:text-[24px] text-[#ffffff] font-semibold tracking-[-0.5px] whitespace-nowrap">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
