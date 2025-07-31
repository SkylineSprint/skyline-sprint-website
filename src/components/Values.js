import React from 'react';

const OurValues = () => {
  const values = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "Embracing cutting-edge technologies and creative problem-solving",
      tags: ["AI Design", "Tech Innovation"]
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quality",
      description: "Delivering excellence in every project, no matter the size",
      tags: ["AI Design", "Tech Innovation"]
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Transparency",
      description: "Clear communication and honest partnerships",
      tags: ["AI Design", "Tech Innovation"]
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Growth",
      description: "Fostering continuous learning and improvement",
      tags: ["AI Design", "Tech Innovation"]
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#080808' }}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Values</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Values Cards */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl border border-white/10"
                style={{
                  background: 'linear-gradient(180deg, #1E0D1C 0%, #0C0912 100%)',
                  boxShadow: '0 10px 5px -1px rgba(177, 30, 155, 0.15)'
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      {value.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{value.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {value.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{ backgroundColor: 'rgba(177, 30, 155, 0.2)', color: '#B11E9B' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="lg:pl-8">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80"
                  alt="Team working in modern office"
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-white/20"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;