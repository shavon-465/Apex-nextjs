import { GearSixIcon, SealCheckIcon, HandshakeIcon } from "./Icons";

const FEATURES = [
  { title: "Trusted parts", Icon: GearSixIcon },
  { title: "Reliable quality", Icon: SealCheckIcon },
  { title: "Support", Icon: HandshakeIcon },
] as const;

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="box-border w-full h-fit shrink-0 flex flex-col
                 gap-[7.1px] p-[40px_20px] md:gap-[10px] md:p-[64px_32px] lg:p-[90px_40px_80px_40px]
                 justify-start items-start bg-[#1a1a1a] overflow-hidden"
    >
      <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[32px] md:gap-[60px] justify-start items-start">
        <h2
          className="rot1 text-[20px] leading-[26px] md:text-[26px] md:leading-[34px] lg:text-[32px] lg:leading-[42px]
                     box-border w-full m-0 max-w-[292px] md:max-w-[600px] lg:max-w-[625px]
                     text-[#ffffffff] font-semibold tracking-[-0.7px] lg:tracking-[-1px] text-left"
        >
          The right parts, trusted quality, and upgrades that keep your ride at
          its best.
        </h2>

        <div className="box-border w-full h-fit shrink-0 flex flex-col md:flex-row gap-[34.5px] md:gap-[20px] lg:gap-[34.5px] justify-start items-start">
          {FEATURES.map(({ title, Icon }) => (
            /*
              NOTE: gap-0 is intentional. The raw canvas export emitted
              `gap-[242px]` alongside `justify-between`, which in real CSS
              flexbox forced the card title outside the fixed-height card and
              clipped it. `justify-between` alone produces the intended spacing.
            */
            <div
              key={title}
              className="box-border w-full md:flex-1 h-[280px] lg:h-[330px] shrink-0
                         flex flex-col gap-0 p-[20px] justify-between items-start
                         bg-[#f4f4f5] rounded-[6px] overflow-hidden"
            >
              <div className="box-border w-fit h-fit shrink-0 flex flex-col gap-[10px] justify-center items-center">
                <Icon />
              </div>
              <span className="text-[20px] md:text-[24px] text-[#000000] font-semibold tracking-[-0.5px] whitespace-nowrap">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
