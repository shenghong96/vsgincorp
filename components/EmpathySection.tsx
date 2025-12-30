
import React from 'react';

const EmpathySection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">我们明白，不是你不想转，而是...</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center space-y-4">
            <div className="text-4xl">🤔</div>
            <h3 className="text-xl font-bold">“觉得很麻烦”</h3>
            <p className="text-slate-400 text-sm">要找秘书，要开银行户口，还要处理 SSM，听起来头都大。</p>
          </div>
          <div className="text-center space-y-4">
            <div className="text-4xl">💸</div>
            <h3 className="text-xl font-bold">“觉得很昂贵”</h3>
            <p className="text-slate-400 text-sm">每年的审计费、秘书费、报税费，是一笔不少的开销。</p>
          </div>
          <div className="text-center space-y-4">
            <div className="text-4xl">⏳</div>
            <h3 className="text-xl font-bold">“觉得还不需要”</h3>
            <p className="text-slate-400 text-sm">生意还算稳，等再大一点再说。反正现在还没出事。</p>
          </div>
        </div>

        <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
          <p className="text-center italic text-slate-200">
            “这些顾虑完全正常。我们也经历过创业初期，知道每一分钱都该花在刀刃上。但比起‘省下一点点开销’，‘守护好已经赚到的家产’其实更重要。”
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmpathySection;
