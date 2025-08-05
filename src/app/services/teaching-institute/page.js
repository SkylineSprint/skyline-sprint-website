import ServicesHero from '../../../components/Global/ServicesHero'
import TestimonialSection from '../../../components/Global/Testimonials'
import SoftwareTrainingPage from '../../../components/Services/SoftwareDevTraining'
import BrandPhilosophyCard from '../../../components/Services/BrandPhilosophyCard'
import StackCards from '../../../components/Portfolio/StackCards'
import ScrollSyncLayout from '../../../components/ScrollSyncLayout'
export default function OurServices() {
  return (
    <div>
<ServicesHero
  heading={
    <>
    Master Tomorrow&apos;s<br />
    Technologies Today
    </>
  }
  paragraph={`Advance your career with industry-relevant training programs designed by working professionals. Our Teaching Institute combines theoretical knowledge with practical, hands-on experience to prepare you for success in today's competitive technology landscape.`}
  buttonText="Get Started Today"
  ratingText="200+ Agencies Rated"
/>
<BrandPhilosophyCard
  title="Our Teaching Approach"
    paragraph={
    <>
    We believe in learning by doing. Our curriculum is constantly updated to reflect current industry practices, and our instructors bring real-world experience to every lesson.
      <br /><br />    
    Whether you are starting your tech career or looking to expand your skillset, our programs provide the knowledge and confidence you need to succeed.
    </>
  }
/>
<SoftwareTrainingPage 
  courses={[
    {
      id: 1,
      title: "AI & Automation Fundamentals",
      items: [
        'Machine learning basics and implementation',
        'Chatbot development and deployment',
        'Process automation using Python and tools',
        'Hands-on projects with real business applications',
      ]
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      items: [
        "Frontend development (HTML, CSS, JavaScript, React",
        "Backend development (Node.js, databases)",
        "Full-stack project development",
        "Deployment and hosting strategies"
      ]
    },

        {
      id: 3,
      title: "Mobile App Development",
      items: [
       " iOS development with Swift",
         "Android development with Kotlin",
         "Cross-platform development with React Native",
         "App store submission and marketing"

      ]
    },

        {
      id: 4,
      title: "macOS Application Development",
      items: [
      "Swift programming for macOS",
      "Interface design with SwiftUI",
      "Mac-specific features and integrations",
        "Distribution through Mac App Store"
        ]
    }
  ]}

  image={{
    src: "/images/SLIDER-1.jpg",
    alt: "Custom Training Image",
    width: 800,
    height: 600
  }}
/>



<SoftwareTrainingPage 
  courses={[
    {
      id: 1,
      title: "Meta Advertising Mastery",
      items: [
        "Facebook and Instagram advertising strategies",
        "Ad creative design and optimization",  
        "Audience targeting and analytics",
        "ROI measurement and reporting"

      ]
    },
    {
      id: 2,
      title: "SEO & Content Marketing",
      items: [
       "Search engine optimization techniques",
        "Keyword research and content strategy",
        "Link building and technical SEO",
        "Analytics and performance tracking"
      ]
    },

        {
      id: 3,
      title: "WordPress & Shopify Mastery",
      items: [
       " Website development and customization",
        "Theme and plugin development",
        "E-commerce setup and optimization",
        "Performance and security best practices"

      ]
    },

        {
      id: 4,
      title: "UI/UX Design Principles",
      items: [
       "User research and experience design",
       "Wireframing and prototyping",
       "Visual design and prototyping",
       "Design tools mastery (Figma, Adobe Creative Suite)",
        ]
    }
  ]}

  image={{
    src: "/images/SLIDER-1.jpg",
    alt: "Custom Training Image",
    width: 800,
    height: 600
  }}
/>
<TestimonialSection />  
<StackCards/>
{/* <ScrollSyncLayout/> */}
</div>
  )}