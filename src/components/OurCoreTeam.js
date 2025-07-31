'use client'
import React from 'react';

const OurCoreTeam = () => {
  const teamMembers = [
    {
      name: "Arlene McCoy",
      role: "Designer",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=661&q=80"
    },
    {
      name: "Lena Williams",
      role: "SQA",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
      name: "Maya Johnson",
      role: "Senior Developer",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=661&q=80"
    },
    {
      name: "Zara Patel",
      role: "Flutter Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Emma Davis",
      role: "HR Manager",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
    },
    {
      name: "Chloe Anderson",
      role: "Senior  Designer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#080808' }}>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Core Team</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl border border-white/10 transition-all duration-300 ease-in-out hover:border-white/30 hover:scale-105 hover:-translate-y-2 cursor-pointer group"
              style={{
                background: 'linear-gradient(180deg, #1E0D1C 0%, #0C0912 100%)',
                boxShadow: '0 10px 5px -1px rgba(177, 30, 155, 0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(177, 30, 155, 0.25), 0 10px 10px -5px rgba(177, 30, 155, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 5px -1px rgba(177, 30, 155, 0.15)';
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-12">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/20 transition-all duration-300 group-hover:border-white/40 group-hover:scale-110">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1 transition-colors duration-300 group-hover:text-purple-300">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                      {member.role}
                    </p>
                  </div>
                </div>
                
                {/* X Icon with gradient background */}
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-90"
                    style={{
                      background: 'linear-gradient(135deg, #B11E9B 0%, #7D146D 100%)'
                    }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Dotted line decoration (visible on some cards) */}
              {(index === 1 || index === 3) && (
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-full">
                  <div className="border-t border-dotted border-purple-500/30 w-3/4 mx-auto"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCoreTeam;