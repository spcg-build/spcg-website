import Hero from '@/components/home/Hero';
import StatsIntro from '@/components/home/StatsIntro';
import AudienceSelector from '@/components/home/AudienceSelector';
import ForYouPanel from '@/components/home/ForYouPanel';
import SectorMarquee from '@/components/home/SectorMarquee';
import Services from '@/components/home/Services';
import FeaturedWork from '@/components/home/FeaturedWork';
import OwnerReporting from '@/components/home/OwnerReporting';
import Process from '@/components/home/Process';
import Testimonials from '@/components/home/Testimonials';
import WhereWeBuild from '@/components/home/WhereWeBuild';
import Team from '@/components/home/Team';
import Insights from '@/components/home/Insights';
import ClosingCta from '@/components/home/ClosingCta';

export default function HomePage() {
  return (
    <div className="r-root" style={{ background: "#ffffff", fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif", color: "#0A0A0B", fontVariantNumeric: "tabular-nums", overflowX: "hidden" }}>
      <Hero />
      <StatsIntro />
      <AudienceSelector />
      <ForYouPanel />
      <SectorMarquee />
      <Services />
      <FeaturedWork />
      <OwnerReporting />
      <Process />
      <Testimonials />
      <WhereWeBuild />
      <Team />
      <Insights />
      <ClosingCta />
    </div>
  );
}
