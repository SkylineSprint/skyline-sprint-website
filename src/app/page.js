// src/app/page.js
import HeroSlider from '../components/Home/HeroSlider';
import GlassVideoHero from '../components/Home/VideoHero';
import TestimonialSection from '../components/Global/Testimonials';
import ServicesSection from '../components/Home/Services';
import ChooseSection from '../components/Home/ChooseUs';
import CTASection from '../components/Home/CallToAction';
// import Cube from '../components/Cube';
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