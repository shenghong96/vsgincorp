import React from 'react';

const Navbar: React.FC<{ logoUrl: string | null }> = ({ logoUrl }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            {logoUrl ? (
              <img src={logoUrl} alt="VSG Secretary Logo" className="h-9 w-auto" />
            ) : (
              <>
                <div className="bg-slate-900 text-white p-1.5 rounded-lg">
                  <span className="font-bold text-lg tracking-wider">VSG</span>
                </div>
                <span className="text-slate-900 font-bold text-xl hidden sm:inline">Secretary</span>
              </>
            )}
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#problem" className="text-slate-600 hover:text-primary transition-colors font-medium">潜在风险</a>
            <a href="#why-sdnbhd" className="text-slate-600 hover:text-primary transition-colors font-medium">Sdn Bhd 优势</a>
            <a href="#faq" className="text-slate-600 hover:text-primary transition-colors font-medium">常见问题</a>
            <a
              href="https://wa.me/60137499586"
              className="min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-wide shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:bg-primary-hover hover:shadow-primary/40 flex"
            >
              立刻咨询
            </a>
          </div>
          <div className="md:hidden">
            <a
              href="https://wa.me/60137499586"
              className="bg-primary hover:bg-primary-hover text-white px-4 py-1.5 rounded-full text-sm font-medium transition-all"
            >
              立刻咨询
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;