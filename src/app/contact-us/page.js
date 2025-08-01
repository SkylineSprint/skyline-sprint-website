// src/app/contact/page.js
import ContactFormHero from '../../components/ContactFormHero';
import TestimonialSection from '../../components/Testimonials';
import ContactForm from '../../components/ContactForm';
export default function AboutPage() {
  return (
    <div className="min-h-screen">
    <ContactFormHero/>
    <ContactForm/>
    <TestimonialSection />
    
    </div>
  );
}