// src/app/page.js
import HeroSlider from '../components/HeroSlider';
import GlassVideoHero from '../components/VideoHero';
import TestimonialSection from '../components/Testimonials';
import ServicesSection from '../components/Services';
import ChooseSection from '../components/ChooseUs';
import CTASection from '../components/CallToAction';

export default function HomePage() {
  return (
    <div>
      <HeroSlider />
      <GlassVideoHero />
      <ServicesSection />
      <ChooseSection/>
      <TestimonialSection />
      <CTASection />
    </div>
  );
}