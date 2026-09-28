import CategoryCard from "./CategoryCard";

const CATEGORIES = [
  { number: "01", label: "Audio", image: "/Apex-lp-assets/image.jpg" },
  { number: "02", label: "Exterior", image: "/Apex-lp-assets/image.jpg" },
  { number: "03", label: "Performance", image: "/Apex-lp-assets/image.jpg" },
  {
    number: "04",
    label: "Interior",
    image: "/Apex-lp-assets/image-2.jpg",
    tracking: "-1px",
  },
  { number: "05", label: "Technology", image: "/Apex-lp-assets/image.jpg" },
  { number: "06", label: "Safety", image: "/Apex-lp-assets/image.jpg" },
] as const;

export default function Categories() {
  return (
    <section
      id="categories"
      className="box-border w-full h-fit shrink-0 flex flex-col
                 gap-[7.1px] p-[40px_20px] md:gap-[10px] md:p-[64px_32px] lg:p-[80px_40px]
                 justify-start items-start bg-[#f4f4f5] overflow-hidden"
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
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[20px] md:gap-y-[39px]">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.number} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
