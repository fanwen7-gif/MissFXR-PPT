import { SlideContainer } from '../SlideContainer';
import React from 'react';

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <div className="text-[10px] font-black tracking-[0.4em] uppercase text-swiss-red mb-4">
        The Infrastructure Architect
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

export const HuangSlides = [
  function HuangCover() {
    return (
      <SlideContainer className="bg-macaron-green">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-10">
          <div className="md:col-span-7 flex flex-col justify-end pb-20">
            <div className="text-[10px] font-black tracking-[0.5em] uppercase opacity-30 mb-12">
              Profile 07 / Architect
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
              Jensen<br/>
              <span className="text-swiss-red">Huang</span><br/>
              <span className="text-3xl md:text-4xl opacity-50 tracking-normal font-bold block mt-3">黄仁勋</span>
            </h1>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-3xl font-bold tracking-tight">
                英伟达创始人 / AI时代基础设施的奠基者
              </h2>
              <p className="text-xl md:text-2xl font-medium opacity-60 max-w-xl leading-tight">
                他在没有人需要的时候造好了AI时代唯一不可或缺的基础设施，然后等了十六年。
              </p>
            </div>
          </div>
          <div className="md:col-span-5 relative h-full w-full overflow-hidden">
            <img 
              src="/images/07_huang_portrait.jpg"
              alt="Jensen Huang"
              className="w-full h-full object-cover [object-position:center_15%]"  
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-swiss-red/10 mix-blend-multiply" />
          </div>
        </div>
      </SlideContainer>
    );
  },
  function HuangSlide1() {
    return (
      <SlideContainer className="bg-macaron-green">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-6 flex flex-col justify-center py-20 pl-10">
            <Section title="GPU和CPU，有什么不同？">
              <p>CPU是一个极度聪明的人，一次只做一件事，但每件事都做得又快又好。GPU原本是为游戏设计的——游戏画面需要同时处理大量像素，所以GPU天生擅长同时做很多个简单计算。</p>
              <p>训练AI模型需要的也是这种能力：对海量数据反复做大量简单运算。CPU是一个天才，GPU是一万个普通工人同时开工。AI训练需要的是后者。</p>
            </Section>
          </div>
          <div className="md:col-span-6 flex flex-col justify-center py-20 pr-10">
            <Section title="CUDA：给那一万个工人发了一本操作手册">
              <p>2006年，英伟达推出CUDA——一个让开发者可以直接调用GPU计算能力的编程工具。在这之前，GPU只能渲染游戏画面，没有办法用来做科学计算或AI训练。</p><p>CUDA的出现，相当于给那一万个工人发了一本统一的操作手册：你现在不只是渲染像素，你可以做矩阵运算、做数据并行处理。研究者第一次可以用写普通代码的方式，调动GPU的全部算力。没有CUDA，即使GPU再强大，AI研究者也用不上它——这是英伟达真正的护城河，不只是硬件，而是整套软件生态。</p>
            </Section>
          </div>
        </div>
      </SlideContainer>
    );
  },
  function HuangSlide2() {
    return (
      <SlideContainer className="bg-macaron-green">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-5 h-full relative overflow-hidden">
            <img 
              src="/images/07_huang_new1.jpg"
              className="w-full h-full object-cover [object-position:center_15%]"
              alt="Jensen Huang"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-macaron-green/40 mix-blend-overlay" />
          </div>
          <div className="md:col-span-7 flex flex-col justify-center py-20 pr-10">
            <Section title="他送给辛顿的那批GPU，改变了历史">
              <p>他真的相信这个方向——他主动把GPU送给辛顿这样的研究者免费使用。那不是商业决策，是一个押注。2012年，辛顿的学生用两块消费级GPU跑出了AlexNet，打败了全球所有顶级实验室。没有英伟达的那个决定，那件事物理上无法发生。</p>
            </Section>
            <Section title="他等了十六年，因为他相信GPU是一台时光机">
              <p>黄仁勋说过，GPU是一台时光机——它能让你用今天的算力，跑出未来才应该出现的结果。从2006年到ChatGPT爆发，整整十六年。</p>
              <p>训练GPT-4用了约25,000块英伟达A100。英伟达占据着超过九成的大模型训练芯片市场份额，所有人发现训练大模型只能用英伟达的生态。那十六年不是被动等待，是主动布局。</p>
            </Section>
          </div>
        </div>
      </SlideContainer>
    );
  },
  function HuangSlide3() {
    return (
      <SlideContainer className="bg-macaron-green">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-7 flex flex-col justify-center py-20 pl-10">
            <Section title="今天的英伟达，是什么量级？">
              <p>2025年，英伟达市值突破5万亿美元，成为全球首家跨越这一里程碑的上市公司。5万亿美元是什么概念——按全球GDP排名，它仅次于美国和中国。</p>
              <p>仅用四年时间，市值增长近八倍。一家卖显卡起家的公司，成了AI时代最不可或缺的基础设施提供商。</p>
            </Section>
          </div>
          <div className="md:col-span-5 h-full relative overflow-hidden flex items-center justify-center p-10">
            <img 
              src="/images/07_huang_new2.jpg"
              className="w-full h-auto object-contain"
              alt="Jensen Huang"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-swiss-red/5 mix-blend-multiply" />
          </div>
        </div>
      </SlideContainer>
    );
  }
];
