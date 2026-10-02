import Hero from "./components/Hero";
import Categories from "./components/Categories";
import WhyUs from "./components/WhyUs";
import CtaFooter from "./components/CtaFooter";

export default function Home() {
  return (
    <main className="box-border w-full max-w-[1440px] mx-auto flex flex-col gap-0 justify-start items-start bg-[#f0f0f0] overflow-hidden">
      <Hero />
      <Categories />
      <WhyUs />
      <CtaFooter />
    </main>
  );
}
