import Header from '@/components/Header';
import { AuroraBackgroundDemo } from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialSection from '@/components/TestimonialSection';
import ServicesCardsSection from '@/components/ServicesCardsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import WhyMeSection from '@/components/WhyMeSection';
import CollaborationSection from '@/components/CollaborationSection';
import PartnerMatrixSection from '@/components/PartnerMatrixSection';
import ContactFormSection from '@/components/ContactFormSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <AuroraBackgroundDemo />
      <TestimonialSection />
            <FeaturesSection />
      <ServicesCardsSection />
      <WhyChooseSection />
      <WhyMeSection />
      <CollaborationSection />
      <PartnerMatrixSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
}
