import PioneeringExcellenceSection from '../../components/Inception'
import DevelopmentSteps from '../../components/DevelopmentSteps'
import AIAutomationSection from '../../components/Portfolio'

export default function OurServices() {
  return (
    <div>
<PioneeringExcellenceSection
  heading={
    <>
      Custom Software Development <br />
      That Scales With Your Business
    </>
  }
  description={`Transform your business processes with tailor-made software solutions designed to meet your unique requirements. Our development team combines technical expertise with deep industry knowledge to create applications that drive efficiency, growth, and competitive advantage.`}
  buttonText="Get Started Today"
  ratingText="200+ Agencies Rated"
/>
<DevelopmentSteps/>
<AIAutomationSection/>
    
</div>
  )}