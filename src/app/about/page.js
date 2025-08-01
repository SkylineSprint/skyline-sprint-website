// src/app/about/page.js
import PioneeringExcellenceSection from '../../components/Inception';
import OurValues from '../../components/Values';
import OurCoreTeam from '../../components/OurCoreTeam';
import OurMission from '../../components/OurMission';

export default function AboutPage() {
  return (
    <div className="min-h-screen">

    <PioneeringExcellenceSection 
      heading={`Pioneering Digital Excellence Since Our Inception`}
      paragraph="At Skyline Sprint, we believe in the transformative power of technology and education. Founded with a vision to bridge the gap between innovative digital solutions and practical business applications, we've grown into a comprehensive technology partner serving businesses of all sizes. Our journey began with a simple mission: to deliver exceptional software development services that truly understand and solve real business challenges. Today, we've expanded our expertise to encompass digital marketing mastery and professional education, creating a unique ecosystem where technology, marketing, and knowledge transfer converge."
      buttonText="Get Started Today"
      ratingText="200+ Clients Worldwide"
    />
      <OurMission />
      <OurValues />
      <OurCoreTeam />

    </div>
  );
}