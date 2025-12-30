
import React, { useState, useEffect } from 'react';
import fetchLogoFromContentful from './lib/contentfulClient';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import ProblemSection from './components/ProblemSection';
import EmpathySection from './components/EmpathySection';
import Process from './components/Process';
import FAQ from './components/FAQ';
import { ShieldCheck, UserPlus, FileSpreadsheet, Headset } from 'lucide-react';

const App: React.FC = () => {
  const whatsappLink = "https://wa.me/60137499586";
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadLogo = async () => {
      const url = await fetchLogoFromContentful();
      if (url) {
        setLogoUrl(url);
      }
    };
    loadLogo();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar logoUrl={logoUrl} />

      <main>
        <Hero />
        <StorySection />
        <div id="problem">
          <ProblemSection />
        </div>
        <EmpathySection />

        {/* Solution Section */}
        <section id="why-sdnbhd" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Sdn Bhd：为你和家人建立的“法律防火墙”</h2>
              <p className="text-slate-600">不只是一个名字，它是你多年打拼的护身符。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-light p-3 rounded-xl text-primary">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">有限债务责任 (Limited Liability)</h3>
                    <p className="text-slate-600">你的债务上限就是你的注资。公司出事，顶多公司倒闭，你的私人财产分毫不能动。</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-light p-3 rounded-xl text-primary">
                    <UserPlus className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">显著提升商业信誉</h3>
                    <p className="text-slate-600">面对大客户、投标或银行融资时，Sdn Bhd 是实力的证明。它是你告别“山寨公司”的第一步。</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-light p-3 rounded-xl text-primary">
                    <FileSpreadsheet className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">专业的税务优化空间</h3>
                    <p className="text-slate-600">Sdn Bhd 享有各种中小企业税务减免、津贴以及 Capital Allowance，帮你合理合法少交税。</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
                  alt="Professional Courtroom Judge"
                  className="rounded-3xl shadow-2xl border-4 border-slate-900/5 object-cover h-[450px] w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-2xl hidden lg:block max-w-xs shadow-xl">
                  <p className="text-sm italic font-medium">“因为有了 Sdn Bhd，当去年供应链断裂被告时，我还能安稳地在家里睡个好觉。” —— 王先生，电商创业者</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why VSG Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-16">为什么选择 VSG Secretary?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Headset className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">用你的语言交流</h3>
                <p className="text-slate-600 text-sm">拒绝法律术语，我们用最浅显的大马华语为你解释所有合规要求。</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="font-bold text-lg">$</span>
                </div>
                <h3 className="text-xl font-bold mb-4">绝对透明的价格</h3>
                <p className="text-slate-600 text-sm">没有隐藏收费 (Hidden Costs)。每一项费用都在报价单上一清二楚，绝不事后加价。</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">100% SSM 合规保证</h3>
                <p className="text-slate-600 text-sm">我们的秘书团队受大马法律注册认可，确保你的公司文件经得起任何审计和抽查。</p>
              </div>
            </div>

            <a
              href={whatsappLink}
              className="inline-block px-10 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg"
            >
              立刻与专业顾问对接
            </a>
          </div>
        </section>

        <Process />
        <FAQ />

        {/* Final CTA Section */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-8 leading-tight">
              你没有打算让事故发生 —— <br />
              但它总是在最意想不到的时候降临。
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              与其在收到律师信那天后悔莫及，不如今天花 5 分钟，<br className="hidden sm:block" />
              听听我们的专家为你分析风险。
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <a
                href={whatsappLink}
                className="w-full sm:w-auto px-10 py-5 bg-white text-primary text-xl font-bold rounded-2xl shadow-2xl hover:bg-slate-50 transition-all transform hover:scale-105"
              >
                先了解，不代表一定要开 — 免费咨询
              </a>
              <div className="flex items-center space-x-2 text-white/90 text-sm">
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/seed/u1/40/40" alt="user" />
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/seed/u2/40/40" alt="user" />
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/seed/u3/40/40" alt="user" />
                </div>
                <span>今天已有 12 位老板进行了咨询</span>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary-hover rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary rounded-full blur-3xl opacity-50"></div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            {logoUrl ? (
              <img src={logoUrl} alt="VSG Secretary Logo" className="h-16 w-auto" />
            ) : (
              <>
                <div className="bg-white/10 p-1.5 rounded-lg">
                  <span className="font-bold text-white text-lg tracking-wider">VSG</span>
                </div>
                <span className="text-white font-bold text-xl">Secretary</span>
              </>
            )}
          </div>
          <p className="text-sm text-slate-500 mb-4">© 2024 VSG Secretary (Malaysia). All rights reserved.</p>
          <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed">
            免责声明：本网站提供的信息仅供参考，不构成法律、财务或会计建议。具体的风险评估及公司设立应根据个人具体情况咨询专业顾问。
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <a
        href={whatsappLink}
        className="fixed bottom-8 right-8 z-50 bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-primary-hover transition-all transform hover:scale-110 flex items-center space-x-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-medium pl-2">
          立刻通过 WhatsApp 咨询
        </span>
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zM10.754 4.797c-.285-.638-.588-.65-.867-.661l-.741-.015c-.254 0-.669.095-1.019.477-.35.383-1.338 1.308-1.338 3.191s1.37 3.702 1.562 3.957c.191.255 2.695 4.116 6.528 5.769.912.395 1.623.631 2.177.807.914.29 1.746.249 2.405.15.733-.11 2.259-.925 2.578-1.819.319-.894.319-1.659.223-1.819-.095-.16-.35-.255-.732-.447s-2.259-1.117-2.609-1.244-.605-.191-.86.191c-.255.383-.987 1.244-1.21 1.5s-.446.287-.828.095c-.382-.191-1.614-.595-3.075-1.898-1.137-1.015-1.905-2.268-2.128-2.65-.223-.383-.024-.59.169-.781.173-.173.382-.447.573-.67s.255-.383.382-.638c.127-.255.064-.479-.032-.67-.095-.191-.86-2.069-1.178-2.833z" />
        </svg>
      </a>
    </div>
  );
};

export default App;
