import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import WhyChooseSection from "./components/WhyChooseUs";
import HowItWorksSection from "./components/HowItWorks";
import CoreProductsSection from "./components/ProjectsSection";
import CabroGuideSection from "./components/CabroGuideSection";
import WhoWeAreSectionModern from "./components/WhoWeAre";
import RequestQuoteSection from "./components/RequestQuoteSection";
import { SITE } from "./lib/site";

export const metadata: Metadata = {
  title: { absolute: SITE.defaultTitle },
  description: SITE.defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    url: "/",
  },
};

export default function Page() {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <CoreProductsSection />
      <CabroGuideSection />
      <HowItWorksSection />
      <WhoWeAreSectionModern />
      <RequestQuoteSection />
    </>
  );
}
