import { SlideContainer } from '../SlideContainer';
import React from 'react';

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <div className="text-[10px] font-black tracking-[0.4em] uppercase text-swiss-red mb-4">
        The Scaling Prophet
      </div>
      <h3 className="text-3xl md:text-4xl font-black tracking-tighter leading-none mb-6 uppercase">
        {title}
      </h3>
      <div className="text-lg md:text-xl leading-relaxed opacity-70 font-medium">
        {children}
      </div>
    </div>
  );
}

export const SutskeverSlides = [
  function SutskeverCover() {
    return (
      <SlideContainer className="bg-macaron-blue">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-10">
          <div className="md:col-span-5 relative h-full w-full overflow-hidden">
            <img 
              src="/images/06_sutskever_portrait.jpg"
              alt="Sutskever"
              className="w-full h-full object-cover"
              style={{ objectPosition: '80% 15%' }}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-swiss-red/10 mix-blend-multiply" />
          </div>
          <div className="md:col-span-7 flex flex-col justify-end pb-20 pl-10">
            <div className="text-[10px] font-black tracking-[0.5em] uppercase opacity-30 mb-12">
              Profile 06 / Visionary
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
              Ilya<br/>
              <span className="text-swiss-red">Sutskever</span><br/>
              <span className="text-3xl md:text-4xl opacity-50 tracking-normal font-bold block mt-3">伊利亚·苏茨克维</span>
            </h1>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-3xl font-bold tracking-tight">
                OpenAI联合创始人 / Scaling Law的奠基推动者
              </h2>
              <p className="text-xl md:text-2xl font-medium opacity-60 max-w-xl leading-tight">
                他是最早相信"模型做大就会涌现智能"的人之一，这个信念直接决定了GPT的诞生。
              </p>
            </div>
          </div>
        </div>
      </SlideContainer>
    );
  },
  function SutskeverSlide1() {
    return (
      <SlideContainer className="bg-macaron-blue">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-7 flex flex-col justify-center py-20 pl-10">
            <Section title="辛顿的学生，AlexNet的参与者">
              <p>他是辛顿的学生，参与了2012年AlexNet的训练——就是辛顿那页里提到的那个Ilya Sutskever。那次竞赛之后，他成为深度学习这一代最核心的研究者之一，后来联合创立了OpenAI。</p>
            </Section>
            <Section title="Scaling Law：一个改变了所有人押注方向的判断">
              <p>Scaling Law的核心判断是：模型越大、数据越多、算力越强，AI的能力会持续提升，而且这个提升是可以预测的，像一条规律一样。就像你发现"每多背100个单词，考试就能多得5分"——你不需要知道背单词的原理，只需要知道这个规律成立，然后拼命背。</p>
              <p>这个判断在2018年前后不是共识。他推动OpenAI把所有资源押在这个方向上，GPT-3、GPT-4相继验证了这个判断。如果他当时动摇了，今天的大模型很可能是另一个样子。</p>
            </Section>
          </div>
          <div className="md:col-span-5 h-full relative overflow-hidden flex items-center justify-center p-10">
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80q=80" 
              className="w-full h-auto object-contain" 
              alt="Servers/Scaling Concept"  
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-swiss-red/5 mix-blend-multiply" />
          </div>
        </div>
      </SlideContainer>
    );
  },
  function SutskeverSlide2() {
    return (
      <SlideContainer className="bg-macaron-blue">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-5 h-full relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80q=80" 
              className="w-full h-full object-cover" 
              alt="Future AI Concept"  
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-macaron-blue/40 mix-blend-overlay" />
          </div>
          <div className="md:col-span-7 flex flex-col justify-center py-20 pr-10">
            <Section title="他押对了这一段，但下一段还没人知道怎么走">
              <p>但到了2025年，Scaling Law的边界开始变得模糊。连他自己也在公开场合说："我们所知道的预训练方式将会终结。"</p>
              <p>这不是在否定自己当年的判断——那个判断改变了整个行业。而是在说：这段路他走对了，但路快走完了，下一段还没有人知道答案。</p>
            </Section>
          </div>
        </div>
      </SlideContainer>
    );
  }
];
