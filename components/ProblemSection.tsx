
import React from 'react';
import { AlertCircle, ShieldOff, Home, Banknote } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <ShieldOff className="w-8 h-8 text-red-600" />,
      title: "个人资产零保护",
      desc: "Sole Proprietor 模式下，法律不区分你的个人财产和生意债务。一旦欠债或被告，你的车子、屋子、储蓄全是筹码。"
    },
    {
      icon: <Home className="w-8 h-8 text-red-600" />,
      title: "连累家人与未来",
      desc: "万一发生意外，法律查封的是“陈先生”而不是“XX公司”，这意味着你的家庭生活费、孩子的教育金都可能被瞬间冻结。"
    },
    {
      icon: <Banknote className="w-8 h-8 text-red-600" />,
      title: "融资与信誉困境",
      desc: "当你只有 Enterprise 时，银行很难批大额贷款，大型供应商更愿意信赖有完善合规体系的 Sdn Bhd 机构。"
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-red-600" />,
      title: "无限税务风险",
      desc: "随着收入增加，个人所得税率最高可达 30%，而 Sdn Bhd 拥有更多的节税空间和更专业的税务架构。"
    }
  ];

  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4 leading-snug tracking-tight">
            深陷危机的边缘，你感觉到了吗？
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            法律面前没有小生意，只有“责任归属”。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-0">
          {problems.map((p, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
              <div className="mb-4">{p.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
