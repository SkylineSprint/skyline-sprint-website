// src/app/contact/page.js
import ContactFormHero from '../../components/Global/CenteredHero';
import LearningFormats from '../../components/Portfolio/StackCards';
// import ScrollZoomGallery from '../../components/ZoomParallex';
import ScrollFeature from '../../components/PortfolioDisplay'

export default function AboutPage() {
  return (
    <div className="min-h-screen">

<ContactFormHero 
  topButtonText="Our Portfolio"
  subtitle="Explore Our Most Remarkable Projects."
  description="We craft customized solutions that empower both startups and established brands, driving success and delivering real impact."
  ctaButtonText="Get Started Today"
/>

    <LearningFormats/>
{/* 
   <ScrollZoomGallery/> */}

   {/* <ScrollFeature/> */}

    
    </div>
  );
}