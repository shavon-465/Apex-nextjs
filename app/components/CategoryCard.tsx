type CardDetails = { left: readonly string[]; right: readonly string[] };

type CategoryCardProps = {
  number: string;
  label: string;
  image: string;
  /** Tracking differs per card in the design — Interior uses -1px */
  tracking?: string;
  /** Subcategory lists revealed on hover (two columns). */
  details?: CardDetails;
};

/** Placeholder hover content — per-card copy to be filled in later. */
const DEFAULT_DETAILS: CardDetails = {
  left: [
    "Android/Apple CarPlay systems",
    "Head units / infotainment",
    "Speakers",
    "Subwoofers",
  ],
  right: ["Amplifiers", "DSP / sound processors", "Reverse cameras", "Audio tuning"],
};

// Asymmetric motion per the design:
//   default → hovered/active : cubic-bezier(0.36, 0, 0.18, 1)   (applied when expanding)
//   hovered/active → default : cubic-bezier(0.36, 0, 0.6, 0.99) (base, applied when collapsing)
// Desktop (lg+) expands on pointer hover; mobile/tablet expand via the
// `.is-active` class toggled on scroll (see CardsReveal).
const EASE =
  "ease-[cubic-bezier(0.36,0,0.6,0.99)] lg:group-hover:ease-[cubic-bezier(0.36,0,0.18,1)] group-[.is-active]:ease-[cubic-bezier(0.36,0,0.18,1)]";
const DUR = "duration-[450ms]";

/**
 * One category card. Default: image fills, number + label below.
 * On hover the image shrinks and a two-column subcategory panel is revealed.
 * Responsive sizing mirrors the three canvas frames exactly.
 */
export default function CategoryCard({
  number,
  label,
  image,
  tracking = "-0.5px",
  details = DEFAULT_DETAILS,
}: CategoryCardProps) {
  return (
    <div className="group box-border w-full md:flex-1 h-fit lg:h-[361px] shrink-0 flex flex-col gap-[8px] justify-center items-center bg-[#ffffff] rounded-[6px] overflow-hidden">
      {/* Image slot — fixed heights below lg (shrinks when expanded), flex-1 on desktop */}
      <div
        className={`box-border w-full shrink-0 h-[234px] md:h-[224px] lg:h-auto lg:flex-1 lg:min-h-0
                   max-md:group-[.is-active]:h-[194px] md:max-lg:group-[.is-active]:h-[50px]
                   bg-[#FFFFFF] bg-no-repeat bg-cover bg-center rounded-[0px_0px_8px_8px] overflow-hidden
                   transition-[height] ${DUR} ${EASE}`}
        style={{ backgroundImage: `url('${image}')` }}
      />

      {/* Bottom = number/label row + revealable detail panel */}
      <div className="box-border w-full shrink-0 flex flex-col">
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

        {/* Hover-revealed detail panel (animated via grid-rows 0fr → 1fr) */}
        <div
          className={`grid grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] group-[.is-active]:grid-rows-[1fr]
                      opacity-0 lg:group-hover:opacity-100 group-[.is-active]:opacity-100
                      transition-[grid-template-rows,opacity] ${DUR} ${EASE}`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="box-border w-full flex flex-row gap-[10px] p-[20px_16px_16px_16px] justify-between items-start">
              <div className="flex flex-col text-[14px] leading-[1.4] text-[#00000099] font-medium text-left">
                {details.left.map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </div>
              <div className="flex flex-col text-[14px] leading-[1.4] text-[#00000099] font-medium text-right">
                {details.right.map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
