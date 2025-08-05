'use client';
import React from 'react';
import Navigation from './Global/Navigation';
import HeroSection from './HeroSection';
import VideoSection from './VideoSection';
import ServicesOverview from './Home/Services';
export default function PageWrapper() {
  return (
    <div className="relative overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <HeroSection />

      {/* Parallax VideoSection over Hero */}
      <VideoSection />

      <ServicesOverview />
    </div>
  );
}
