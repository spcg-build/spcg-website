import Hero from '@/components/home/Hero';
import ForYouPanel from '@/components/home/ForYouPanel';
import Services from '@/components/home/Services';
import FeaturedWork from '@/components/home/FeaturedWork';
import OwnerReporting from '@/components/home/OwnerReporting';
import Process from '@/components/home/Process';
import AboutUs from '@/components/home/AboutUs';
import WhereWeBuild from '@/components/home/WhereWeBuild';
import Team from '@/components/home/Team';
import Insights from '@/components/home/Insights';
import ClosingCta from '@/components/home/ClosingCta';

export default function HomePage() {
  return (
    <div className="r-root" style={{ background: "#ffffff", fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif", color: "#111111", fontVariantNumeric: "tabular-nums", overflowX: "clip" }}>
      <Hero />
      <ForYouPanel />
      <FeaturedWork />
      <Services />
      <OwnerReporting />
      <Process />
      <WhereWeBuild />
      <Team />
      <AboutUs />
      <Insights />
      <ClosingCta />
    </div>
  );
}
