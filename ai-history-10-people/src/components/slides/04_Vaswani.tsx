import { SlideContainer } from '../SlideContainer';
import React from 'react';

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <div className="text-[10px] font-black tracking-[0.4em] uppercase text-swiss-red mb-4">
        Architecture
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

export const VaswaniSlides = [
  function VaswaniCover() {
    return (
      <SlideContainer className="bg-macaron-lavender">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-10">
          <div className="md:col-span-5 relative h-full w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80" 
              alt="AI Tech" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-macaron-lavender/20 mix-blend-multiply" />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <img 
                src="/images/04_transformer.png" 
                alt="Transformer Architecture" 
                className="w-full object-contain filter invert brightness-0 opacity-20" 
              />
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col justify-end pb-20 pl-10">
            <div className="text-[10px] font-black tracking-[0.5em] uppercase opacity-30 mb-12">
              Profile 04 / Architect
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
              Ashish<br/>
              <span className="text-swiss-red">Vaswani</span><br/>
              <span className="text-3xl md:text-4xl opacity-50 tracking-normal font-bold block mt-3">瓦斯瓦尼</span>
            </h1>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-3xl font-bold tracking-tight">
                Transformer架构发明者 / "Attention is All You Need"第一作者
              </h2>
              <p className="text-xl md:text-2xl font-medium opacity-60 max-w-xl leading-tight">
                他写了一篇论文，奠定了今天所有大模型的基础架构——GPT、Claude、Gemini全部建立在这之上。
              </p>
            </div>
          </div>
        </div>
      </SlideContainer>
    );
  },
  function VaswaniSlide1() {
    return (
      <SlideContainer className="bg-macaron-lavender">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-7 flex flex-col justify-center py-20 pl-10">
            <Section title="Transformer之前，AI读语言像一个失忆的人">
              <p>在Transformer出现之前，AI处理语言用的是RNN——它必须一个字一个字按顺序读，读到后面就忘了前面。就像一个人读书只能死记硬背，读完第十页就忘了第一页说了什么。</p>
              <p>但问题不只是记忆力差，RNN还没办法并行计算，意味着模型永远做不大，做不大就不会有涌现智能，没有涌现智能就不会有ChatGPT这样能真正对话的产品。这是C端AI大爆发真正的卡点。</p>
            </Section>
            <Section title="Attention机制：让AI第一次能&quot;一眼扫过去抓住重点&quot;">
              <p>2017年，瓦斯瓦尼和团队提出了Transformer架构，核心是Attention机制——它能同时看一整段话，理解每个词和其他所有词之间的关系。就像你读一句话，不是一个字一个字读，而是一眼扫过去就抓住了重点。</p>
            </Section>
          </div>
          <div className="md:col-span-5 h-full relative overflow-hidden flex items-center justify-center p-10">
            <img 
              src="/images/04_transformer.png" 
              className="w-full h-auto object-contain" 
              alt="Transformer Architecture" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-swiss-red/5 mix-blend-multiply" />
          </div>
        </div>
      </SlideContainer>
    );
  },
  function VaswaniSlide2() {
    return (
      <SlideContainer className="bg-macaron-lavender">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-5 h-full relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" 
              className="w-full h-full object-cover" 
              alt="Silicon Valley Concept"  
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-macaron-lavender/40 mix-blend-overlay" />
          </div>
          <div className="md:col-span-7 flex flex-col justify-center py-20 pr-10">
            <Section title="八个人，集体出走——AI界的仙童八子">
              <p>这篇论文有八个作者，全部来自Google。1957年，仙童半导体有八个工程师集体出走，创立了硅谷半导体产业的基础，英特尔就是其中两人创立的——他们被称为"仙童八子"。六十年后，写出Transformer的这八个Google工程师，几乎全部陆续离开了Google去创业。同样是在大机构里做出了改变世界的东西，然后集体离开去开创新的时代。</p>
            </Section>
            <Section title="改变了世界，然后你不知道他叫什么名字">
              <p>瓦斯瓦尼是第一作者，论文发表后不久就离开Google，几乎从公众视野里消失。有时候改变世界的人，你根本不知道他叫什么名字。</p>
            </Section>
          </div>
        </div>
      </SlideContainer>
    );
  }
];
