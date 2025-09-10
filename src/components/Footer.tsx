import React from 'react';
import { Container } from './Container';
import { Button } from './Button';
import { LinkedinIcon, ArrowRightIcon } from 'lucide-react';
export const Footer: React.FC = () => {
  return <footer className="py-12 bg-slate-950 relative overflow-hidden">
      <Container>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <img src="/bricky_transparent_2.png" alt="Bricky Logo" className="h-10 w-auto mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#ce5732] to-[#ff8a3b] text-transparent bg-clip-text" style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 700
            }}>
                bricky.dev
              </span>
            </div>
            <p className="text-gray-400 text-sm order-3 md:order-none">
              © {new Date().getFullYear()} bricky.dev. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-slate-800/50 rounded-full hover:bg-slate-800 border border-slate-700/50">
                  <LinkedinIcon size={16} />
                </a>
              </div>
              <Button primary href="https://zoom.us">
                <span className="flex items-center">
                  Schedule a Chat!
                  <ArrowRightIcon size={16} className="ml-2" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
      {/* Modern background elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#ce5732]/5 to-[#ff8a3b]/5 rounded-full blur-[100px]"></div>
      {/* Geometric elements */}
      <div className="absolute bottom-20 left-[10%] w-16 h-16 border border-slate-700/20 rounded-full"></div>
      <div className="absolute top-20 right-[5%] w-12 h-12 border border-slate-700/20 rounded-lg rotate-12"></div>
    </footer>;
};