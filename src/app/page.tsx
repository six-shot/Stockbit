import Features from "@/components/feautures-1";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import HowToSave from "@/components/how-to-save";
import StartInvesting from "@/components/start-investing";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Features />
      <HowToSave/>
      <StartInvesting/>
      <div className="h-[184px]"/>
      <Footer/>
    </div>
  );
}
