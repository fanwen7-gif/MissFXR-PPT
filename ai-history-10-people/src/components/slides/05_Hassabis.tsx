import { SlideContainer } from '../SlideContainer';
import React from 'react';

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <div className="text-[10px] font-black tracking-[0.4em] uppercase text-swiss-red mb-4">
        Strategic Intelligence
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

export const HassabisSlides = [
  function HassabisCover() {
    return (
      <SlideContainer className="bg-macaron-mint">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-10">
          <div className="md:col-span-7 flex flex-col justify-end pb-20">
            <div className="text-[10px] font-black tracking-[0.5em] uppercase opacity-30 mb-12">
              Profile 05 / Strategist
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
              Demis<br/>
              <span className="text-swiss-red">Hassabis</span><br/>
              <span className="text-3xl md:text-4xl opacity-50 tracking-normal font-bold block mt-3">德米斯·哈萨比斯</span>
            </h1>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-3xl font-bold tracking-tight">
                DeepMind创始人 / 诺贝尔化学奖得主
              </h2>
              <p className="text-xl md:text-2xl font-medium opacity-60 max-w-xl leading-tight">
                他做了两件载入AI史的事：让AI第一次击败人类围棋世界冠军，以及用AI解决了困扰生物学界五十年的难题。
              </p>
            </div>
          </div>
          <div className="md:col-span-5 relative h-full w-full overflow-hidden">
            <img 
              src="/images/05_hassabis_portrait.jpg"
              alt="Hassabis"
              className="w-full h-full object-cover [object-position:center_15%]"  
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-swiss-red/10 mix-blend-multiply" />
          </div>
        </div>
      </SlideContainer>
    );
  },
  function HassabisSlide1() {
    return (
      <SlideContainer className="bg-macaron-mint">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-5 h-full relative overflow-hidden">
            <img 
              src="/images/05_hassabis_new.jpg"
              className="w-full h-full object-cover [object-position:center_15%]"
              alt="Hassabis Nobel Prize"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&q=80' }}  
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-macaron-mint/40 mix-blend-overlay" />
          </div>
          <div className="md:col-span-7 flex flex-col justify-center py-20 pr-10">
            <Section title="他不是从计算机科学进入AI，他是从游戏进入AI的">
              <p>他13岁就是国际象棋大师，后来设计了一款叫《主题医院》的游戏，卖出了数百万份。本科在剑桥读计算机科学，以最高荣誉毕业，博士在伦敦大学学院读认知神经科学——他读神经科学是为了理解人类大脑如何学习，然后把这个理解用到AI上。</p>
              <p>这条路径非常不寻常——他不是典型的AI科学家，他是一个对人类智能着迷的游戏设计师，顺着这个好奇心走进了AI。DeepMind后来用游戏测试AI——从Atari游戏到围棋——都是他思维方式的延伸。</p>
            </Section>
          </div>
        </div>
      </SlideContainer>
    );
  },
  function HassabisSlide2() {
    return (
      <SlideContainer className="bg-macaron-mint">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-6 flex flex-col justify-center py-20 pl-10">
            <Section title="围棋：人类智能最后的堡垒，失守了">
              <p>围棋长期被认为是人类智能的最后堡垒——不像国际象棋可以靠暴力穷举，围棋的可能走法比宇宙中的原子数量还多，必须靠直觉和大局观。所有人都说AI至少还需要十年。2016年，AlphaGo击败李世石。这件事的冲击不只是"AI又赢了一个游戏"，而是人类第一次直观感受到：我们引以为傲的直觉和创造力，可能也只是一种可以被学习的模式。</p>
            </Section>
          </div>
          <div className="md:col-span-6 flex flex-col justify-center py-20 pr-10">
            <Section title="Move 78，The Divine Move">
              <p>但李世石赢了第四局。他走了第78手——落在一个没有人会落子的位置，既不攻也不守，像是走错了。AlphaGo的胜率从70%直线崩溃，开始走出明显的败招。哈萨比斯当时悄悄溜出比赛室，冲进控制室，看到程序员们盯着屏幕——他问："在它开始这样走之前，发生了什么异常吗？"复盘之后所有人才意识到：那一手精准打在了AlphaGo算法的盲区里。AlphaGo的强大来自它见过的模式，但正因如此，它无法处理从未见过的走法。李世石用直觉找到了一个AI永远不会自己发现的漏洞。</p>
            </Section>
          </div>
        </div>
      </SlideContainer>
    );
  },
  function HassabisSlide3() {
    return (
      <SlideContainer className="bg-macaron-mint">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-7 flex flex-col justify-center py-20 pl-10">
            <Section title="五十年的难题，AI用几天解决了">
              <p>2020年，AlphaFold解决了蛋白质折叠问题。科学家知道蛋白质的氨基酸序列，但不知道它会折叠成什么形状——而形状决定了它的功能。这个问题困扰生物学界五十年。</p>
              <p>AlphaFold公开了超过2亿种蛋白质的结构预测，原来需要十年的结构研究，现在可能几天就能完成。2024年他因此获得诺贝尔化学奖——继辛顿之后，同一年，AI再次改写了诺贝尔奖的边界。</p>
            </Section>
          </div>
          <div className="md:col-span-5 h-full relative overflow-hidden">
            <img
              src="/images/nobel_prize.jpg"
              className="w-full h-full object-contain p-8"
              alt="Nobel Prize"
              referrerPolicy="no-referrer"
              onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80' }}
            />
            <div className="absolute inset-0 bg-swiss-red/10 mix-blend-multiply" />
          </div>
        </div>
      </SlideContainer>
    );
  }
];
