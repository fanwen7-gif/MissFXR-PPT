import { SlideContainer } from '../SlideContainer';
import React from 'react';

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <div className="text-[10px] font-black tracking-[0.4em] uppercase text-swiss-red mb-4">
        The Strategic Catalyst
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

export const AltmanSlides = [
  function AltmanCover() {
    return (
      <SlideContainer className="bg-macaron-peach">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-10">
          <div className="md:col-span-5 relative h-full w-full overflow-hidden">
            <img 
              src="/images/08_altman_portrait_new.jpg"
              alt="Sam Altman"
              className="w-full h-full object-cover [object-position:center_15%]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-swiss-red/10 mix-blend-multiply" />
          </div>
          <div className="md:col-span-7 flex flex-col justify-end pb-20 pl-10">
            <div className="text-[10px] font-black tracking-[0.5em] uppercase opacity-30 mb-12">
              Profile 08 / Strategist
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
              Sam<br/>
              <span className="text-swiss-red">Altman</span><br/>
              <span className="text-3xl md:text-4xl opacity-50 tracking-normal font-bold block mt-3">山姆·奥特曼</span>
            </h1>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-3xl font-bold tracking-tight">
                OpenAI CEO / ChatGPT缔造者
              </h2>
              <p className="text-xl md:text-2xl font-medium opacity-60 max-w-xl leading-tight">
                他不是最懂AI的人，但他是最具有深厚技术理解力的超级产品经理和战略资本家——让AI来到每个普通人面前。
              </p>
            </div>
          </div>
        </div>
      </SlideContainer>
    );
  },
  function AltmanSlide1() {
    return (
      <SlideContainer className="bg-macaron-peach">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-4 h-full relative overflow-hidden">
            <img
              src="/images/08_altman_new1.jpg"
              className="w-full h-full object-cover [object-position:center_15%]"
              alt="Sam Altman"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-4 flex flex-col justify-center py-20 pl-6">
            <Section title="战略眼光：在所有人觉得AGI是科幻小说的时候，他已经把它当成严肃的商业目标了">
              <p>他在斯坦福读了两年计算机科学就退学创业，后来当了YCombinator总裁——硅谷最重要的创业加速器。但他在那个位置上坐不住：2015年参与创办OpenAI，2019年辞去YC总裁职位全身心投入OpenAI。放弃的是硅谷最稳固的权力位置之一。</p>
              <p>他很早就意识到，AI的尽头是能源和算力——所以他不只做模型，还布局了核聚变公司Helion和芯片产业。他押注的不是一个产品，是一个时代。</p>
            </Section>
          </div>
          <div className="md:col-span-4 flex flex-col justify-center py-20 pr-6">
            <Section title="极具前瞻性的产品天才：把AI送到了每个普通人手里">
              <p>在产品还不完善的时候，他拍板决定发布ChatGPT。2022年11月上线，5天100万用户，2个月1亿，史上增长最快的消费产品。在这之前，AI是实验室里的东西，普通人感知不到它的存在。</p>
              <p>在这之后，AI和人类的关系发生了根本性的转变。这个发布还逼着谷歌、Meta、百度全部提前亮牌，整个行业的竞争时间表被压缩了至少两年。一个产品决定，改变了整个行业的节奏。</p>
            </Section>
          </div>
        </div>
      </SlideContainer>
    );
  },
  function AltmanSlide2() {
    return (
      <SlideContainer className="bg-macaron-peach">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-7 flex flex-col justify-center py-20 pl-10">
            <Section title="纵横捭阖、资本博弈：从马斯克到微软，从实验室到商业帝国，从被解雇到复职">
              <p>OpenAI由奥特曼和马斯克共同创立，是一个非营利机构，初心是让AI的发展对人类安全。但分歧很快出现——马斯克认为商业化偏离了安全初心，出走后还起诉了OpenAI。奥特曼的回答是：没有钱就没有资源，没有资源什么都做不了。他推动引入微软超过130亿美元的投资，把非营利机构改造成商业公司。</p>
              <p>2023年11月，董事会突然宣布解雇他。接下来五天，几乎所有员工联名要求他回来，微软施压，他复职，安全派出局。从马斯克出走到宫斗复职，每一次博弈他都活下来了——而且每次都走得更远。</p>
            </Section>
          </div>
          <div className="md:col-span-5 h-full relative overflow-hidden flex items-center justify-center p-10">
            <img 
              src="/images/08_altman_new2.jpg"
              className="w-full h-full object-cover [object-position:center_15%]"
              alt="Sam Altman"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-swiss-red/5 mix-blend-multiply" />
          </div>
        </div>
      </SlideContainer>
    );
  }
];
