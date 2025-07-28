'use client'
import React, { useState } from 'react';
import { Star, MoreHorizontal, ChevronLeft, ChevronRight, Twitter, Linkedin, Facebook } from 'lucide-react';
import Image from 'next/image';

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      role: "CEO",
      company: "Innovate Solutions",
      rating: 5,
      text: "They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence.",
      avatar: "/images/User.png",
      social: "twitter"
    },
    {
      id: 10,
      name: "John Smith",
      role: "CEO", 
      company: "Innovate Solutions",
      rating: 5,
      text: "They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence.",
      avatar: "/images/User.png",
      social: "linkedin"
    },
    {
      id: 2,
      name: "Emily Davis",
      role: "Product Manager",
      company: "Nexus Digital",
      rating: 5,
      text: "The team understood our complex requirements and provided a user-friendly, high-performing website that stands out in the market.",
      avatar: "/images/user-2.png",
      social: "facebook"
    },
    {
      id: 3,
      name: "David Lee",
      role: "Founder",
      company: "GreenLeaf Enterprises",
      rating: 5,
      text: "Their innovative solutions helped streamline our operations, and the website design and development is both functional and visually stunning.",
      avatar: "/images/user-3.png",
      social: "twitter"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-white text-white' : 'text-gray-600'
        }`} 
      />
    ));
  };

  const getSocialIcon = (social) => {
    switch(social) {
      case 'twitter':
        return <Twitter className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'facebook':
        return <Facebook className="w-4 h-4" />;
      default:
        return <Twitter className="w-4 h-4" />;
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const getVisibleTestimonials = () => {
    const itemsPerSlide = 3;
    const start = currentSlide * itemsPerSlide;
    return testimonials.slice(start, start + itemsPerSlide);
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Client Testimonials</h2>
          <div className="flex items-center gap-4">
           
           
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {testimonials
                    .slice(slideIndex * 3, slideIndex * 3 + 3)
                    .map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`
                        relative p-6 rounded-xl transition-all duration-300 cursor-pointer
                        border-t-2 border-[#B11E9B]
                        hover:border-2 hover:border-[#B11E9B] hover:shadow-lg hover:shadow-[#B11E9B]/20
                        bg-gradient-to-br from-gray-900/50 to-gray-800/30
                        backdrop-blur-sm
                        ${slideIndex === 0 && index === 0 ? 'border-2 border-[#B11E9B]' : ''}
                      `}
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(177, 30, 155, 0.15) 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                      }}
                    >
                      {/* Social Icon */}
                      <button className="absolute top-4 right-4 text-gray-500 hover:text-[#B11E9B] transition-colors">
                        {getSocialIcon(testimonial.social)}
                      </button>

                      {/* Avatar */}
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden border-2 border-gray-600">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div className="w-full h-full bg-gradient-to-br from-[#B11E9B] to-purple-600 hidden items-center justify-center text-white font-semibold text-lg">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {testimonial.text}
                      </p>

                      {/* Author Info */}
                      <div className="border-t border-gray-700 pt-4">
                        <div className="flex items-center">
                          <div>
                            <h4 className="font-semibold text-white flex items-center">
                              {testimonial.name}
                              <span className="mx-2 text-gray-500">•</span>
                              <span className="text-gray-400 font-normal">{testimonial.role}</span>
                            </h4>
                            <p className="text-gray-500 text-sm">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-[#B11E9B]' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;