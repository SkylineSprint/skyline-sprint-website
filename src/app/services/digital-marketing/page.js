import ServicesHero from '../../../components/Global/ServicesHero'
import DigitalMarketingServices from '../../../components/Services/DigitalMarketingServices'
import TestimonialSection from '../../../components/Global/Testimonials'
import BrandPhilosophyCard from '../../../components/Services/BrandPhilosophyCard'
export default function OurServices() {
  return (
    <div>
<ServicesHero
  heading={
    <>
     Digital Marketing That <br />
     Drives Measurable Results 
    </>
  }
  paragraph={`Elevate your brand's online presence with comprehensive digital marketing strategies that connect with your target audience and drive meaningful engagement. Our data-driven approach ensures every campaign delivers maximum ROI and sustainable growth.`}
  buttonText="Get Started Today"
  ratingText="200+ Agencies Rated"
/>

<BrandPhilosophyCard
  title="Our Digital Marketing Philosophy"
    paragraph={
    <>
      We believe in the power of authentic connections and data-driven decisions.
      <br />
      <br />
      Our marketing strategies are built on deep audience insights, creative excellence,
      and continuous optimization to ensure your brand not only reaches but resonates with your ideal customers.
    </>
  }
/>
<DigitalMarketingServices/>
<TestimonialSection />  
</div>
  )}