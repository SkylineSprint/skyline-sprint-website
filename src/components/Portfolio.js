'use client'
import React, { useState } from 'react';
import { Check } from 'lucide-react';

const AIAutomationSection = ({ 
  layout = 'imageLeft', // 'imageLeft' or 'imageRight'
  title = 'AI Agents & Automation Tools',
  description = 'Harness the power of artificial intelligence to automate repetitive tasks, enhance decision-making, and improve operational efficiency. Our AI solutions include chatbots, process automation, predictive analytics, and intelligent workflow systems.',
  tabs = [
    { id: 'deliver', label: 'How We Deliver', active: true },
    { id: 'portfolio', label: 'Portfolio Examples', active: false }
  ],
  features = [
    'Custom AI model development and integration',
    'Workflow analysis and automation design',
    'Machine learning algorithm implementation',
    'Intelligent data processing and analysis systems'
  ],
  imageComponent = null, // Custom image component can be passed
  showDecorationDots = true
}) => {
  const [activeTab, setActiveTab] = useState(tabs.find(tab => tab.active)?.id || tabs[0]?.id);

  // Default placeholder image component
  const DefaultImagePlaceholder = () => (
    <div className="w-full h-80 bg-gray-800 rounded-2xl flex items-center justify-center">
      <div className="text-gray-500 text-center">
        <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-4"></div>
        <p>Image Placeholder</p>
        <p className="text-sm">Upload your image here</p>
      </div>
    </div>
  );

  const ImageSection = () => (
    <div className="lg:w-1/2">
      {imageComponent || <DefaultImagePlaceholder />}
    </div>
  );

  const ContentSection = () => (
    <div className="lg:w-1/2">
      <div className="max-w-xl">
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

        {/* Optional CTA Button */}
        <div className="mt-8">
          <button className="bg-[#B11E9B] hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#080808] text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col lg:flex-row items-center gap-16 ${
          layout === 'imageRight' ? 'lg:flex-row-reverse' : ''
        }`}>
          <ImageSection />
          <ContentSection />
        </div>
      </div>

      {/* Decoration Dots */}
      {showDecorationDots && (
        <div className={`absolute top-1/2 transform -translate-y-1/2 ${
          layout === 'imageLeft' ? 'right-8' : 'left-8'
        }`}>
          <div className="flex flex-col gap-3">
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-2 h-2 bg-[#B11E9B] rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      )}
    </section>
  );
};

// Example usage with different layouts
const App = () => {
  // Custom image component example
  const CustomImage = () => (
    <div className="w-full h-80 bg-gradient-to-br from-[#B11E9B] to-purple-600 rounded-2xl flex items-center justify-center">
      <div className="text-white text-center">
        <div className="w-20 h-20 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded"></div>
        </div>
        <p className="text-xl font-semibold">AI Automation</p>
      </div>
    </div>
  );

  return (
    <div>
      {/* Example 1: Image Left, Content Right */}
      <AIAutomationSection 
        layout="imageLeft"
        imageComponent={<CustomImage />}
      />

      {/* Example 2: Image Right, Content Left */}
      <AIAutomationSection 
        layout="imageRight"
        title="Machine Learning Solutions"
        description="Transform your business with cutting-edge machine learning algorithms and predictive analytics. Our solutions help you make data-driven decisions and automate complex processes."
        features={[
          'Predictive analytics and forecasting',
          'Natural language processing systems',
          'Computer vision and image recognition',
          'Recommendation engine development'
        ]}
        tabs={[
          { id: 'approach', label: 'Our Approach', active: true },
          { id: 'case-studies', label: 'Case Studies', active: false }
        ]}
      />

      {/* Example 3: With default placeholder */}
      <AIAutomationSection 
        layout="imageLeft"
        title="Data Analytics Platform"
        description="Unlock the power of your data with our comprehensive analytics platform. Get real-time insights, automated reporting, and predictive modeling capabilities."
        showDecorationDots={false}
      />
    </div>
  );
};

export default App;