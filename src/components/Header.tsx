import React, { useState } from 'react';
import { Container } from './Container';
import { MenuIcon, XIcon } from 'lucide-react';
export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="py-5 sticky top-0 bg-slate-950 backdrop-blur-md z-50 border-b border-slate-800/80">
      <Container>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <img src="/bricky_transparent_2.png" alt="Bricky Logo" className="h-[50px] w-auto mr-3" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#ce5732] to-[#ff8a3b] text-transparent bg-clip-text" style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 700
          }}>
              bricky.dev
            </span>
          </div>
        </div>
      </Container>
    </header>;
};