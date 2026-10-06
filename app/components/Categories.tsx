import CategoryCard from "./CategoryCard";
import CardsReveal from "./CardsReveal";

const CATEGORIES = [
  {
    number: "01",
    label: "Audio",
    image: "/Apex-lp-assets/card-audio.jpg",
    details: {
      left: ["Android/Apple CarPlay systems", "Head units / infotainment", "Speakers", "Subwoofers"],
      right: ["Amplifiers", "DSP / sound processors", "Reverse cameras", "Audio tuning"],
    },
  },
  {
    number: "02",
    label: "Interior",
    image: "/Apex-lp-assets/card-interior.jpg",
    tracking: "-1px",
    details: {
      left: ["Seat covers", "Floor mats", "Roof lining", "Interior lighting"],
      right: ["Steering covers", "Dashboard accessories", "Interior detailing", "Ambient lighting"],
    },
  },
  {
    number: "03",
    label: "Exterior",
    image: "/Apex-lp-assets/card-exterior.jpg",
    details: {
      left: ["Body kits", "Spoilers", "Grilles", "LED lights"],
      right: ["DRLs", "Window tint", "Chrome/black-out accessories", "Exterior detailing"],
    },
  },
  {
    number: "04",
    label: "Lighting",
    image: "/Apex-lp-assets/card-lighting.jpg",
    details: {
      left: ["LED headlights", "Fog lights", "Projector upgrades"],
      right: ["Interior/ambient lights", "Strobe/emergency lights", "Underbody lighting"],
    },
  },
  {
    number: "05",
    label: "Protection",
    image: "/Apex-lp-assets/card-protection.jpg",
    details: {
      left: ["Dash cameras", "Parking/reverse cameras", "Car alarms", "GPS trackers"],
      right: ["Central locking", "PPF", "Ceramic coating", "Window/security film"],
    },
  },
  {
    number: "06",
    label: "Customisation",
    image: "/Apex-lp-assets/card-customisation.jpg",
    details: {
      left: ["Power windows", "Sensors", "Horns", "Phone chargers"],
      right: ["Wireless chargers", "USB accessories", "Door visors", "Custom installations"],
    },
  },
] as const;

export default function Categories() {
  return (
    <section
      id="categories"
      className="box-border w-full h-fit shrink-0 flex flex-col
                 gap-[7.1px] p-[40px_20px] md:gap-[10px] md:p-[64px_32px] lg:p-[80px_40px]
                 justify-start items-start bg-[#f0f0f0] overflow-hidden"
    >
      <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[24px] md:gap-[60px] justify-start items-start">
        <h2
          className="rot1 text-[20px] leading-[22px] md:text-[26px] md:leading-[29px] lg:text-[32px] lg:leading-[35px]
                     box-border w-full m-0 max-w-[283px] md:max-w-[350px] lg:max-w-[398px]
                     text-[#000000] font-semibold tracking-[-0.7px] lg:tracking-[-1px] text-left"
        >
          Find what your car need
        </h2>

        {/*
          Responsive grid replaces the static build's duplicated row markup:
          1 column (mobile) → 2 columns (tablet) → 3 columns (desktop).
          Row gap 39px / column gap 20px matches the canvas spacing.
        */}
        <CardsReveal className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[20px] md:gap-y-[39px]">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.number} {...c} />
          ))}
        </CardsReveal>
      </div>
    </section>
  );
}
