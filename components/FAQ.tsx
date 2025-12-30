
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "如果不转 Sdn Bhd，我真的会失去房子吗？",
      a: "是的，在法律上 Sole Proprietorship 并没有独立的法人地位。这意味着如果你生意上欠债或被起诉，债权人有权通过法院执行令去没收你的个人资产，包括你的储蓄、房子和车子。"
    },
    {
      q: "Sdn Bhd 真的很贵吗？",
      a: "维持 Sdn Bhd 确实需要固定的年度开销（如审计和秘书费），但如果你已经有一定的营业额，Sdn Bhd 带来的节税效果（Tax Planning）往往就能抵消这些开销。相比之下，失去整份家产的风险代价远高于这些行政费。"
    },
    {
      q: "我的生意规模很小，也需要转吗？",
      a: "这取决于你的风险程度，而不是生意额。如果你从事的是高风险行业（如涉及重型机械、配送、合同外包等），哪怕生意额不大，潜在的法律诉讼风险也可能很高。"
    },
    {
      q: "转了 Sdn Bhd 后，我可以继续保持现在的管理方式吗？",
      a: "基本可以，但你需要建立更清晰的账目区分。VSG 会指导你如何进行简单的合规化转型，让你的生意看起来更专业，更具公信力。"
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">常见问题解答</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <button 
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-bold text-slate-800">{f.q}</span>
                {openIndex === i ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
