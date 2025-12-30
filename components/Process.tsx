
import React from 'react';
import { MessageSquare, FileText, CheckCircle, UserCheck } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "1. 免费风险评估",
      desc: "专业顾问在线咨询，分析你的生意现状是否真的需要转 Sdn Bhd。"
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "2. 极简资料准备",
      desc: "只需通过 WhatsApp 提供简单的身份证明和公司名称，其余我们搞定。"
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "3. SSM 极速注册",
      desc: "最快 2-3 个工作日内完成注册，合法合规地拿到你的正式公司执照。"
    },
    {
      icon: <UserCheck className="w-10 h-10" />,
      title: "4. 全程秘书服务",
      desc: "委任专业公司秘书，确保你未来的合规、开会记录、资料更新无后顾之忧。"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">把复杂留给我们，把安全留给你</h2>
          <p className="text-slate-600">简单 4 步，告别无限责任风险</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
          
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl transform transition-transform group-hover:scale-110">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
