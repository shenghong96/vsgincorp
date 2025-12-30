import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=2070&auto=format&fit=crop" 
          alt="Distressed Business Owner" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Dynamic Red Gradient Overlay representing "Fire/Danger" */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-slate-950/80 to-slate-950/95 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-8 text-xs sm:text-sm font-bold tracking-widest text-white uppercase bg-red-600 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] animate-pulse">
          商业风险预警：你必须知道的法律真相
        </div>
        
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight sm:leading-tight mb-8 drop-shadow-[0_5px_15px_rgba(0,0,0,1)] px-2">
          “反正只是小生意，<br />
          <span className="text-slate-400">过阵子再转 Sdn Bhd？”</span><br />
          <span className="text-red-500 block mt-2 sm:mt-4">结果那一次意外，他赔上了整间家。</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-base sm:text-2xl text-slate-300 mb-12 leading-relaxed drop-shadow-sm px-4">
          大马 80% 的 Sole Proprietor 都在裸奔：<br className="hidden sm:block" />
          一旦公司欠债或被告，<span className="text-white font-bold underline decoration-red-600 decoration-4 underline-offset-8">你的存款、车子、甚至正在供的家</span>，<br className="hidden sm:block" />
          都将成为法律查封的“牺牲品”。
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 px-6">
          <a 
            href="https://wa.me/60137499586" 
            className="w-full sm:w-auto px-12 py-5 bg-white text-slate-900 text-lg sm:text-xl font-extrabold rounded-2xl shadow-[0_10px_40px_rgba(255,255,255,0.2)] hover:bg-slate-100 transition-all transform hover:-translate-y-2 hover:scale-105"
          >
            免费咨询：我适合转 Sdn Bhd 吗？
          </a>
          
          <div className="text-center sm:text-left">
            <p className="text-xs sm:text-sm text-slate-400 font-medium italic mb-2">
              * 已协助 1,000+ 大马老板建立法律防火墙
            </p>
            <div className="flex justify-center sm:justify-start items-center space-x-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Burning Mist Effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;