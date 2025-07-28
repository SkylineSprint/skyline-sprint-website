// src/app/page.js
import HeroSlider from '../components/HeroSlider';
import GlassVideoHero from '../components/VideoHero';
import TestimonialSection from '../components/Testimonials';
import ServicesSection from '../components/Services';
import ChooseSection from '../components/ChooseUs';

export default function HomePage() {
  return (
    <div>
      <HeroSlider />
      <GlassVideoHero />
      <ServicesSection />
      <TestimonialSection />

    </div>
  );
}