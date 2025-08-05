'use client'
import React, { useState } from 'react';
import { Check } from 'lucide-react';

const ServiceSection = ({ 
  layout = 'imageLeft', 
  title,
  description,
  tabs = [
    { id: 'deliver', label: 'How We Deliver', active: true },
    { id: 'portfolio', label: 'Portfolio Examples', active: false }
  ],
  features = [],
  imageSrc = null,
  imageAlt = ""
}) => {
  const [activeTab, setActiveTab] = useState(tabs.find(tab => tab.active)?.id || tabs[0]?.id);

  const ImagePlaceholder = () => (
    <div className="w-full h-80 bg-gray-800 rounded-2xl flex items-center justify-center relative z-10">
      <div className="text-gray-500 text-center">
        <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-4"></div>
        <p>Upload Image</p>
        <p className="text-sm">Service image goes here</p>
      </div>
    </div>
  );

  const ImageSection = () => (
    <div className="lg:w-1/2">
      {imageSrc ? (
        <div className="w-full h-80 rounded-2xl overflow-hidden relative z-10">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <ImagePlaceholder />
      )}
    </div>
  );

  const ContentSection = () => (
    <div className="lg:w-1/2">
      <div className="max-w-xl relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          {title}
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          {description}
        </p>

        <div className="flex gap-8 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 font-semibold text-lg transition-colors relative ${
                activeTab === tab.id
                  ? 'text-[#B11E9B]'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B11E9B]"></div>
              )}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <div className="w-6 h-6 bg-[#B11E9B] rounded-full flex items-center justify-center">
                  <Check size={14} className="text-white" />
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#080808] text-white py-20 relative overflow-hidden">
      
  {/* Background image layer */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('/images/background.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity:0.3
    }}
  ></div>
      
      {/* Content container with higher z-index */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-16 ${
          layout === 'imageRight' ? 'lg:flex-row-reverse' : ''
        }`}>
          <ImageSection />
          <ContentSection />
        </div>
      </div>
    </section>
  );
};

// Digital Marketing Services Data
const digitalMarketingServices = [
  {
    id: 'digital-ads',
    title: 'Digital Ads & Meta Advertising',
    description: 'Maximize your advertising ROI with expertly crafted campaigns across Facebook, Instagram, and other Meta platforms. Our advertising specialists create compelling ad experiences that drive conversions and build brand awareness.',
    features: [
      'Audience research and targeting strategy',
      'Creative development and A/B testing',
      'Campaign setup and optimization',
      'Performance tracking and reporting'
    ],
    layout: 'imageLeft',
    imageSrc: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=400&fit=crop&crop=center',
    imageAlt: 'Digital advertising and social media marketing'
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'Engage your audience with high-quality content that tells your brand story and drives action. From blog posts to video content, we create compelling materials that resonate with your target market and support your business objectives.',
    features: [
      'Content strategy development and planning',
      'Blog writing and article creation',
      'Video production and editing',
      'Graphic design and visual content',
      'Social media content calendars'
    ],
    layout: 'imageRight',
    imageSrc: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&h=400&fit=crop&crop=center',
    imageAlt: 'Content creation and video production setup'
  },
  {
    id: 'seo-services',
    title: 'SEO Services',
    description: 'Improve your search engine visibility and drive organic traffic with comprehensive SEO strategies. Our approach combines technical optimization, content marketing, and link building to achieve sustainable search rankings.',
    features: [
      'Technical SEO audits and optimization',
      'Keyword research and content strategy',
      'On-page and off-page optimization',
      'Local SEO for geographic targeting',
      'Performance monitoring and reporting'
    ],
    layout: 'imageLeft',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop&crop=center',
    imageAlt: 'SEO analytics and search engine optimization'
  }
];

// Main App component
const App = () => {
  return (
    <div>
      {digitalMarketingServices.map((service, index) => (
        <ServiceSection
          key={service.id}
          layout={service.layout}
          title={service.title}
          description={service.description}
          features={service.features}
          imageSrc={service.imageSrc}
          imageAlt={service.imageAlt}
          tabs={[
            { id: 'approach', label: 'Our Approach', active: true },
            { id: 'results', label: 'Results & Case Studies', active: false }
          ]}
        />
      ))}
    </div>
  );
};

export default App;