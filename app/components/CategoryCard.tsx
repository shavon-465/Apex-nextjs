type CategoryCardProps = {
  number: string;
  label: string;
  image: string;
  /** Tracking differs per card in the design — Interior uses -1px */
  tracking?: string;
};

/**
 * One category card: image slot on top, number badge + label below.
 * Responsive sizing mirrors the three canvas frames exactly.
 */
export default function CategoryCard({
  number,
  label,
  image,
  tracking = "-0.5px",
}: CategoryCardProps) {
  return (
    <div className="box-border w-full md:flex-1 h-fit md:h-[300px] lg:h-[361px] shrink-0 flex flex-col gap-[8px] justify-center items-center bg-[#ffffff] rounded-[6px] overflow-hidden">
      <div
        className="box-border w-full h-[234px] md:h-auto md:flex-1 shrink-0 [box-shadow:1px_2px_8px_#00000014]
                   bg-[#FFFFFF] bg-no-repeat bg-cover bg-center rounded-[0px_0px_8px_8px] overflow-hidden"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[10px] p-[16px] justify-between items-center">
        <div className="box-border w-[28px] md:w-[36px] shrink-0 h-[28px] md:h-[36px] flex flex-col gap-[10px] p-[10px] justify-center items-center border-2 border-[#000000ff] rounded-[1000px]">
          <span className="text-[12px] md:text-[16px] text-[#000000] font-bold whitespace-nowrap">
            {number}
          </span>
        </div>
        <span
          className="text-[20px] md:text-[22px] lg:text-[24px] text-[#000000] font-semibold whitespace-nowrap"
          style={{ letterSpacing: tracking }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
