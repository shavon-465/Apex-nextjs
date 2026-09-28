import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section
      className="box-border w-full h-fit shrink-0 flex flex-col
                 gap-[20px] p-[120px_20px_0px_20px]
                 md:gap-[32px] md:p-[64px_32px]
                 lg:gap-[20px] lg:p-[40px_40px_100px_40px]
                 justify-start items-center md:items-start bg-[#f4f4f5] overflow-hidden relative lg:static"
    >
      <Navbar />

      <div
        className="box-border w-full h-fit shrink-0 flex flex-col lg:flex-row
                   gap-[24px] md:gap-[32px] lg:gap-0
                   justify-start lg:justify-between items-end relative z-[1] lg:static"
      >
        {/* Copy + CTA */}
        <div className="box-border w-full lg:w-[550px] h-fit lg:h-[301px] shrink-0 flex flex-col gap-[24px] justify-center lg:justify-end items-start">
          <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[16px] justify-start items-start">
            <h1
              className="rot1 text-[24px] leading-[26px] md:text-[30px] md:leading-[33px] lg:text-[36px] lg:leading-[40px]
                         box-border w-full m-0 text-[#000000] font-semibold
                         tracking-[-0.5px] md:tracking-[-1.5px] text-left"
            >
              Parts that fit.
              <br />
              Upgrades that lasts.
            </h1>
            <p className="rot1 text-[14px] leading-[15px] box-border w-full m-0 text-[#000000b3] font-normal tracking-[-0.5px] text-left">
              Car parts and accessories for the way you drive.
            </p>
          </div>
          <a
            href="#"
            className="box-border w-fit h-fit shrink-0 flex flex-col gap-[10px] p-[8px_16px] justify-center items-center bg-[#212121ff] rounded-[6px] no-underline transition-opacity hover:opacity-90"
          >
            <span className="text-[11px] text-[#ffffffff] font-medium whitespace-nowrap">
              Shop now
            </span>
          </a>
        </div>

        {/* Visual */}
        <div
          className="box-border w-full h-[400px] md:h-[380px] lg:w-[620px] lg:h-[521px] shrink-0
                     [background-image:linear-gradient(#00000033,_#00000033),_url('/Apex-lp-assets/image.jpg')]
                     [background-repeat:no-repeat,_no-repeat] [background-size:100%_100%,_cover]
                     [background-position:0%_0%,_center] rounded-[6px] overflow-hidden"
        />
      </div>
    </section>
  );
}
