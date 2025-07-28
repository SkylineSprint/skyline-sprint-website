import React from "react";
import { ArrowUpRight, Monitor, Megaphone, Code } from "lucide-react";
import Image from "next/image";
const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description:
        "Build powerful, scalable applications tailored to your business needs",
      highlights:
        "Key highlights: AI automation, web & mobile apps, CRM/ERP systems",
      featured: false,
      image: "/images/laptop.png",
    },
    {
      id: 2,
      icon: <Megaphone className="w-8 h-8" />,
      title: "Digital Marketing Excellence",
      description:
        "Boost your online presence with data-driven marketing strategies",
      highlights:
        "Key highlights: Meta ads, SEO, content creation, e-commerce solutions",
      featured: true,
      image: "/images/voice.png",
    },
    {
      id: 3,
      icon: <Monitor className="w-8 h-8" />,
      title: "Professional Training Institute",
      description:
        "Master the latest technologies with industry-expert instruction",
      highlights:
        "Key highlights: Hands-on learning, career advancement, certification programs",
      featured: false,
      image: "/images/layers.png",
    },
  ];

  return (
    <div
      className="min-h-screen p-8 relative"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Services Overview
          </h1>
          <div className="text-gray-400 text-lg">
            <div>Comprehensive Digital Solutions</div>
            <div>Under One Roof</div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 cursor-pointer group ${
                service.featured ? "border-2" : "border"
              }`}
              style={{
                borderColor: "#B11E9B",
                backgroundColor: "#0a0a0a",
                boxShadow: "0 10px 5px -1px rgba(177, 30, 155, 0.15)",
              }}
            >
              {/* Arrow Icon */}
              <div className="absolute top-6 right-6 opacity-60 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-6 h-6 text-gray-400" />
              </div>

              {/* Service Icon */}
              <div
                className="inline-flex p-4 rounded-xl mb-6"
                style={{ backgroundColor: "#B11E9B", color: "#fff" }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {service.title}
                </h3>

                <p className="text-gray-300 text-base leading-relaxed">
                  {service.description}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.highlights}
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="mt-8">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={100}
                  className="w-full h-48 object-cover rounded-xl border border-[#1a1a1a]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Simple mouse icon */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20">
          <svg
            width="20"
            height="28"
            viewBox="0 0 33 47"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-[33px] md:h-[47px] w-5 h-7"
          >
            <path d="M19.8125 0.726562H13.1875C9.78438 0.730398 6.52173 2.08398 4.11536 4.49036C1.70898 6.89673 0.355398 10.1594 0.351562 13.5625V33.4375C0.355398 36.8406 1.70898 40.1033 4.11536 42.5096C6.52173 44.916 9.78438 46.2696 13.1875 46.2734H19.8125C23.2156 46.2696 26.4783 44.916 28.8846 42.5096C31.291 40.1033 32.6446 36.8406 32.6484 33.4375V13.5625C32.6446 10.1594 31.291 6.89673 28.8846 4.49036C26.4783 2.08398 23.2156 0.730398 19.8125 0.726562ZM30.1641 33.4375C30.1608 36.1819 29.0691 38.8129 27.1285 40.7535C25.1879 42.6941 22.5569 43.7858 19.8125 43.7891H13.1875C10.4431 43.7858 7.81205 42.6941 5.87147 40.7535C3.93089 38.8129 2.83922 36.1819 2.83594 33.4375V13.5625C2.83922 10.8181 3.93089 8.18705 5.87147 6.24647C7.81205 4.30589 10.4431 3.21422 13.1875 3.21094H19.8125C22.5569 3.21422 25.1879 4.30589 27.1285 6.24647C29.0691 8.18705 30.1608 10.8181 30.1641 13.5625V33.4375ZM17.7422 10.25V20.1875C17.7422 20.5169 17.6113 20.8329 17.3784 21.0659C17.1454 21.2988 16.8294 21.4297 16.5 21.4297C16.1706 21.4297 15.8546 21.2988 15.6216 21.0659C15.3887 20.8329 15.2578 20.5169 15.2578 20.1875V10.25C15.2578 9.92055 15.3887 9.6046 15.6216 9.37164C15.8546 9.13869 16.1706 9.00781 16.5 9.00781C16.8294 9.00781 17.1454 9.13869 17.3784 9.37164C17.6113 9.6046 17.7422 9.92055 17.7422 10.25Z" />
          </svg>
        </div>

        {/* Glossy bottom curved stroke with shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg
            className="absolute bottom-0 w-full h-16"
            viewBox="0 0 1200 64"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="bottomBorderGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#B11E9B", stopOpacity: 0.05 }}
                />
                <stop
                  offset="50%"
                  style={{ stopColor: "#B11E9B", stopOpacity: 0.15 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#B11E9B", stopOpacity: 0.05 }}
                />
              </linearGradient>

              <linearGradient
                id="shadowGradient"
                x1="0%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#B11E9B", stopOpacity: 0.15 }}
                />
                <stop
                  offset="30%"
                  style={{ stopColor: "#B11E9B", stopOpacity: 0.08 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#B11E9B", stopOpacity: 0 }}
                />
              </linearGradient>

              <filter id="bottomGlow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Dispersed shadow extending upwards with curved ends */}
            <path
              d="M0,64 Q0,20 100,20 L1100,20 Q1200,20 1200,64 L1200,64 L0,64 Z"
              fill="url(#shadowGradient)"
              filter="url(#bottomGlow)"
              transform="translate(0, 10)"
            />

            {/* Main bright line at bottom with curved ends */}
            <path
              d="M0,64 Q0,60 100,60 L1100,60 Q1200,60 1200,64"
              fill="none"
              stroke="url(#bottomBorderGradient)"
              strokeWidth="2"
              transform="translate(0, 10)"
              style={{
                filter: "drop-shadow(0 10px 5px rgba(177, 30, 155, 0.15))",
                strokeDasharray: "none",
              }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
