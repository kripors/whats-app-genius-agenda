
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import ImplementationSection from '@/components/ImplementationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <BenefitsSection />
      <ImplementationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
