import HeroSection from "./components/HeroSection";
import WhyChooseSection from "./components/WhyChooseUs";
import HowItWorksSection from "./components/HowItWorks";
import CoreProductsSection from "./components/ProjectsSection";
import RecentInstallations from "./components/RecentlyInstallation";
import WhoWeAreSectionModern from "./components/WhoWeAre";
import TestimonialSection from "./components/TestimonialSection";
import RequestQuoteSection from "./components/RequestQuoteSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <CoreProductsSection />
      <HowItWorksSection />
      <RecentInstallations />
      <WhoWeAreSectionModern />
      <TestimonialSection />
      <RequestQuoteSection />
    </>
  );
}
