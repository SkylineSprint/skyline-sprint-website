'use client'
import React, { useState } from 'react';
import { Check } from 'lucide-react';

const CsdServices = ({ 
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

  // Image placeholder component
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
        {/* Top universal Button */}
         <button 
            className="relative px-6 py-2 mb-8 text-white text-sm font-medium rounded-md transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: 'rgba(177, 30, 155, 0.2)',
              boxShadow: `
                inset 0px 10px 5px -1px rgba(255, 255, 255, 0.08),
                0px 6px 18px -1.5px rgba(177, 30, 155, 0.18),
                0px 1.37px 4.12px -1px rgba(177, 30, 155, 0.1),
                0px 0.36px 1.08px -0.5px rgba(177, 30, 155, 0.08)
              `,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(177, 30, 155, 0.3)'
            }}
          >
            Skyline Sprint 
          </button>
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          {description}
        </p>

        {/* Tabs */}
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

        {/* Features List */}
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
      {/* Background image with working URL and proper layering */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/images/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1
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

// Services data
const servicesData = [
  {
    id: 'ai-automation',
    title: 'AI Agents & Automation Tools',
    description: 'Harness the power of artificial intelligence to automate repetitive tasks, enhance decision-making, and improve operational efficiency. Our AI solutions include chatbots, process automation, predictive analytics, and intelligent workflow systems.',
    features: [
      'Custom AI model development and integration',
      'Workflow analysis and automation design',
      'Machine learning algorithm implementation',
      'Intelligent data processing and analysis systems'
    ],
    layout: 'imageLeft',
    imageSrc: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=400&fit=crop&crop=center',
    imageAlt: 'AI and automation technology illustration'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Create powerful, responsive web applications that engage users and drive business results. From corporate websites to complex web platforms, we build solutions that perform beautifully across all devices and browsers.',
    features: [
      'Modern frontend frameworks (React, Vue.js, Angular)',
      'Robust backend systems (Node.js, Python, PHP)',
      'Database design and optimization',
      'Cloud deployment and scalability planning'
    ],
    layout: 'imageRight',
    imageSrc: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=400&fit=crop&crop=center',
    imageAlt: 'Web development coding workspace'
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences. We develop apps for iOS and Android that seamlessly integrate with your existing systems and provide meaningful value to your users.',
    features: [
      'Native iOS and Android development',
      'Cross-platform solutions using React Native and Flutter',
      'API integration and backend connectivity',
      'App store optimization and deployment'
    ],
    layout: 'imageLeft',
    imageSrc: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=400&fit=crop&crop=center',
    imageAlt: 'Mobile app development on smartphones'
  },
  {
    id: 'macos-development',
    title: 'macOS Desktop Applications',
    description: 'Powerful desktop applications specifically designed for macOS environments. We create native Mac applications that leverage the full potential of Apple\'s ecosystem while maintaining seamless integration with your business workflows.',
    features: [
      'Native macOS development using Swift and Objective-C',
      'Integration with macOS-specific features and APIs',
      'Security and performance optimization',
      'Mac App Store deployment assistance'
    ],
    layout: 'imageRight',
    imageSrc: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=400&fit=crop&crop=center',
    imageAlt: 'MacBook Pro showing desktop application development'
  },
  {
    id: 'crm-erp',
    title: 'CRM & ERP Development',
    description: 'Streamline your business operations with custom CRM and ERP solutions that adapt to your unique processes. Our systems integrate seamlessly with your existing infrastructure while providing the flexibility to grow with your business.',
    features: [
      'Business process analysis and workflow mapping',
      'Custom module development and integration',
      'Data migration from existing systems',
      'User training and ongoing support'
    ],
    layout: 'imageLeft',
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop&crop=center',
    imageAlt: 'Business analytics and CRM dashboard'
  }
];

// Main App component
const  CsdService= () => {
  return (
    <div>
      {servicesData.map((service, index) => (
        <CsdServices
          key={service.id}
          layout={service.layout}
          title={service.title}
          description={service.description}
          features={service.features}
          imageSrc={service.imageSrc}
          imageAlt={service.imageAlt}
          tabs={[
            { id: 'approach', label: 'Our Approach', active: true },
            { id: 'case-studies', label: 'Case Studies', active: false }
          ]}
        />
      ))}
    </div>
  );
};

export default CsdService;