import Image from "next/image";
import { MenuIcon } from "./Icons";

export default function Navbar() {
  return (
    <div
      className="box-border w-[calc(100%-40px)] max-w-[350px] md:w-[310px] md:max-w-none h-fit
                 absolute left-[20px] top-[12px] md:static
                 flex flex-row gap-[119px] p-[12px_24px] justify-between items-center
                 bg-[#1a1a1a] rounded-[6px] z-10"
    >
      <div className="relative w-[61px] h-[24px] shrink-0">
        <Image
          src="/Apex-lp-assets/Apex_Logo_Dark.png"
          alt="Apex"
          fill
          priority
          sizes="61px"
          className="object-cover object-center"
        />
      </div>
      <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] justify-start items-center">
        <span className="rot1 text-[11px] leading-[12px] text-[#fafafaff] font-medium whitespace-nowrap">
          MENU
        </span>
        <MenuIcon />
      </div>
    </div>
  );
}
