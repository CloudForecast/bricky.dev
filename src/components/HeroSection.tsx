import React from 'react';
import { Container } from './Container';
import { Button } from './Button';
import { ArrowRightIcon } from 'lucide-react';
export const HeroSection: React.FC = () => {
  return <section className="py-24 md:py-32 relative overflow-hidden bg-slate-900">
      <Container>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Take Control of Your{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#ce5732] to-[#ff8a3b] text-transparent bg-clip-text">
                Databricks Costs
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9C118.957 4.47226 236.066 3.86837 355 9" stroke="url(#paint0_linear)" strokeWidth="5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="paint0_linear" x1="3" y1="9" x2="355" y2="9" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ce5732" />
                    <stop offset="1" stopColor="#ff8a3b" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-gray-200">
            Every Query. Every User. Every Dollar.
          </h2>
          <div className="flex flex-col items-center justify-center">
            <Button primary href="https://savvycal.com/bricky/chat-with-founders?d=30" target="_blank" rel="noopener noreferrer">
              <span className="flex items-center">
                Schedule a Chat!
                <ArrowRightIcon size={16} className="ml-2" />
              </span>
            </Button>
          </div>
        </div>
      </Container>
      {/* Modern background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#ce5732]/20 to-[#ff8a3b]/20 rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] bg-[#ce5732]/10 rounded-full blur-[80px]"></div>
      <div className="absolute -top-10 -left-10 w-[300px] h-[300px] bg-[#ff8a3b]/10 rounded-full blur-[80px]"></div>
      {/* Modern geometric shapes */}
      <div className="absolute top-20 right-[10%] w-12 h-12 border border-[#ce5732]/30 rounded-lg rotate-12"></div>
      <div className="absolute bottom-20 left-[10%] w-16 h-16 border border-[#ff8a3b]/30 rounded-full"></div>
      <div className="absolute top-[30%] left-[5%] w-8 h-8 bg-gradient-to-r from-[#ce5732]/10 to-[#ff8a3b]/10 rounded-md rotate-45"></div>
      <div className="absolute bottom-[20%] right-[5%] w-10 h-10 bg-gradient-to-r from-[#ce5732]/10 to-[#ff8a3b]/10 rounded-full"></div>
    </section>;
};