
import React from 'react';

const StorySection: React.FC = () => {
  const whatsappLink = "https://wa.me/60137499586";

  return (
    <section id="story" className="py-12 sm:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-sm border border-slate-100 relative">
          <div className="absolute -top-6 left-8 sm:left-12 text-5xl sm:text-6xl text-slate-200">“</div>
          <h2 className="text-lg sm:text-3xl font-bold text-slate-900 mb-6 italic leading-snug">
            陈先生的“小生意”教训：一纸诉状带走了他的半生积蓄
          </h2>
          
          <div className="space-y-4 sm:space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg mb-10">
            <p>
              陈先生经营着一家小型的家庭用品配送生意。作为 Sole Proprietor，生意一直稳步增长。他原本打算等明年赚够了钱再注册 Sdn Bhd，觉得现在每月给秘书费“划不来”。
            </p>
            <p>
              直到有一天，他的配送员在工作时不慎导致了一场意外的财产损失，对方提出了高达 50 万令吉的赔偿要求。
            </p>
            <p className="font-bold text-slate-900">
              陈先生从未想过，因为他是独资经营，法律上他就是生意，生意就是他。
            </p>
            <p>
              最终，对方通过法院查封了他的个人银行账户，并强制拍卖了他那套正在供款的排屋来抵债。这不是因为陈先生欺诈，这只是普通的商业风险——但因为他没有通过 Sdn Bhd 建立起那层关键的“法律防火墙”。
            </p>
          </div>
          
          <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-slate-100 text-center">
            <p className="text-red-600 font-bold text-lg sm:text-xl mb-6">这种意外，你承受得起吗？</p>
            <a 
              href={whatsappLink}
              className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-lg"
            >
              我的生意有风险吗？免费评估
            </a>
            <p className="text-slate-500 text-xs mt-4">不要用家人的未来，去赌一个“不确定”的风险。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
