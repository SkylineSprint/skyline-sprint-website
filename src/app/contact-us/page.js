// src/app/contact/page.js
import ContactFormHero from '../../components/Global/CenteredHero';
import TestimonialSection from '../../components/Global/Testimonials';
import ContactForm from '../../components/Contact/ContactForm';
export default function AboutPage() {
  return (
    <div className="min-h-screen">
    <ContactFormHero/>
    <ContactForm/>
    <TestimonialSection />
    
    </div>
  );
}