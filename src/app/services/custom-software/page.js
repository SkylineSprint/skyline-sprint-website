import ServicesHero from '../../../components/Global/ServicesHero'
import DevelopmentSteps from '../../../components/Services/DevelopmentSteps'
import CsdService from '../../../components/Services/CsdServices'
import TestimonialSection from '../../../components/Global/Testimonials'

export default function OurServices() {
  return (
    <div>
<ServicesHero
  heading={
    <>
      Custom Software Development <br />
      That Scales With Your Business
    </>
  }
  paragraph={`Transform your business processes with tailor-made software solutions designed to meet your unique requirements. Our development team combines technical expertise with deep industry knowledge to create applications that drive efficiency, growth, and competitive advantage.`}
  buttonText="Get Started Today"
  ratingText="200+ Agencies Rated"
/>


<DevelopmentSteps/>
<CsdService/>
<TestimonialSection />  
</div>
  )}