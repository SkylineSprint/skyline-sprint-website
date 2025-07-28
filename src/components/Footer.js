// components/Footer.js
import React from 'react';
import Image from 'next/image';
const Footer = () => {
  return (
              <footer
        className="border-t border-gray-800 text-white"
        style={{
          background: 'linear-gradient(90deg, #0F0C0E 0%, #150713 42%, #1D0019 100%)',
        }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-2">
              {/* Logo */}
              <div className="w-48 h-18 mr-3">
                 <img src="/images/skyline_logo.png" alt="Skyline Logo" className="w-full h-full object-contain" />
              </div>
           
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A Comprehensive Technology Solutions Company
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                >
                  CRM & ERP
                </a>
              </li>
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Info</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                >
                  Service
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                >
                  Team
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>



          {/* {Contact Detials} */}

           <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                >
                  UK: +44-7917-606729
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                >
                  US: +1-707-348-2504
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                >
                 UAE: +971-58-670-7557
                </a>
              </li>
              
            </ul>
          </div>



             {/* {Email Address} */}

           <div>
            <h3 className="text-white text-lg font-semibold mb-4">Email Info</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:info@skylinesprint.com"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                >
                 info@skylinesprint.com
                </a>
              </li>
              <li>
                <a 
                 href="mailto:support@skylinesprint.com"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                >
                 support@skylinesprint.com
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hr@skylinesprint.com" 
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                >
                 hr@skylinesprint.com
                </a>
              </li>
              
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-3">
              <li>
                {/* <a 
                  href="#" 
                  className="flex items-center text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200 group"
                >
                  <div className="w-5 h-5 mr-3 flex items-center justify-center">
                     <Image src="/images/twitter.png" alt="twiter Logo" height={100} width={100}/>
                  </div>
                  <span>Twitter (X)</span>
                </a> */}
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/skylinesprintofficial/" 
                  className="flex items-center text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200 group"
                >
                  <div className="w-5 h-5 mr-3 flex items-center justify-center">
                    <Image src="/images/instagram.png" alt="twiter Logo" height={100} width={100}/>
                  </div>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/skylinesprintuk/" 
                  className="flex items-center text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200 group"
                >
                  <div className="w-5 h-5 mr-3 flex items-center justify-center">
                       <Image src="/images/facebook.png" alt="twiter Logo" height={100} width={100} />
                  </div>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://uk.linkedin.com/company/skyline-sprint" 
                  className="flex items-center text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200 group"
                >
                  <div className="w-5 h-5 mr-3 flex items-center justify-center">
                      <Image src="/images/linkedin.png" alt="twiter Logo" height={100} width={100}/>
                  </div>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © 2025 All rights reserved by Skyline Sprint
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;