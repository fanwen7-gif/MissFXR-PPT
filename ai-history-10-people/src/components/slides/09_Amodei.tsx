import { SlideContainer } from '../SlideContainer';
import React from 'react';

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <div className="text-[10px] font-black tracking-[0.4em] uppercase text-swiss-red mb-4">
        The Constitutionalist
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

export const AmodeiSlides = [
  function AmodeiCover() {
    return (
      <SlideContainer className="bg-macaron-mint">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-10">
          <div className="md:col-span-7 flex flex-col justify-end pb-20">
            <div className="text-[10px] font-black tracking-[0.5em] uppercase opacity-30 mb-12">
              Profile 09 / Visionary
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
              Dario<br/>
              <span className="text-swiss-red">Amodei</span><br/>
              <span className="text-3xl md:text-4xl opacity-50 tracking-normal font-bold block mt-3">达里奥·阿莫迪</span>
            </h1>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-3xl font-bold tracking-tight">
                Anthropic创始人 / Claude缔造者
              </h2>
              <p className="text-xl md:text-2xl font-medium opacity-60 max-w-xl leading-tight">
                他从最强的AI公司出走，就是为了证明AI可以用另一种方式被开发。
              </p>
            </div>
          </div>
          <div className="md:col-span-5 relative h-full w-full overflow-hidden">
            <img 
              src="/images/09_amodei_portrait.jpg"
              alt="Dario Amodei"
              className="w-full h-full object-cover [object-position:center_15%]"  
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-swiss-red/10 mix-blend-multiply" />
          </div>
        </div>
      </SlideContainer>
    );
  },
  function AmodeiSlide1() {
    return (
      <SlideContainer className="bg-macaron-mint">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-5 h-full relative overflow-hidden">
            <img 
              src="/images/09_claude_ai.jpg" 
              className="w-full h-full object-cover" 
              alt="Claude AI Concept"  
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-macaron-mint/40 mix-blend-overlay" />
          </div>
          <div className="md:col-span-7 flex flex-col justify-center py-20 pr-10">
            <Section title="AI也可以有宪法">
              <p>达里奥和团队从OpenAI出走，创立Anthropic，放弃的不只是薪水和期权，还有一种关于AI应该怎么被开发的判断分歧。</p>
              <p>Anthropic的核心理念是：AI不应该由商业目标定义边界，而应该有一套它必须遵守的价值原则——就像一部宪法。这不是谨慎，是一种根本不同的世界观：他们相信，一个没有原则约束的强大AI，是人类无法承受的风险。</p>
            </Section>
          </div>
        </div>
      </SlideContainer>
    );
  },
  function AmodeiSlide2() {
    return (
      <SlideContainer className="bg-macaron-mint">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-7 flex flex-col justify-center py-20 pl-10">
            <Section title="Claude：独具魅力的编程之王">
              <p>Claude在编程上是专业开发者的首选，在写作上有一种难以复制的自然和人味——不套话，不陈词滥调，句子有呼吸感。</p>
              <p>但更根本的是它的思维方式：它不只是给答案，它讲清楚思路，它有自己的判断，它在某些时候会说"我不确定"而不是假装知道。如果说有些AI像一个随时待命的执行者，Claude更像一个有立场的思考者。</p>
            </Section>
          </div>
          <div className="md:col-span-5 h-full relative overflow-hidden flex items-center justify-center p-10">
            <img 
              src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80" 
              className="w-full h-auto object-contain" 
              alt="Code/Thinking Concept"  
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-swiss-red/5 mix-blend-multiply" />
          </div>
        </div>
      </SlideContainer>
    );
  }
];
