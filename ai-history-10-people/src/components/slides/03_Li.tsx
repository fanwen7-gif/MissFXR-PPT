import { SlideContainer } from '../SlideContainer';
import React from 'react';

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <div className="text-[10px] font-black tracking-[0.4em] uppercase text-swiss-red mb-4">
        Data Foundation
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

export const LiSlides = [
  function LiCover() {
    return (
      <SlideContainer className="bg-macaron-pink">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-10">
          <div className="md:col-span-7 flex flex-col justify-end pb-20">
            <div className="text-[10px] font-black tracking-[0.5em] uppercase opacity-30 mb-12">
              Profile 03 / Visionary
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
              Fei-Fei<br/>
              <span className="text-swiss-red">Li</span><br/>
              <span className="text-3xl md:text-4xl opacity-50 tracking-normal font-bold block mt-3">李飞飞</span>
            </h1>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-3xl font-bold tracking-tight">
                ImageNet之母 / 斯坦福AI实验室创始人
              </h2>
              <p className="text-xl md:text-2xl font-medium opacity-60 max-w-xl leading-tight">
                她建立了深度学习爆发所依赖的数据基础，没有ImageNet，2012年的AI革命根本不会发生。
              </p>
            </div>
          </div>
          <div className="md:col-span-5 relative h-full w-full overflow-hidden">
            <img 
              src="/images/03_li_portrait.jpg"
              alt="Fei-Fei Li"
              className="w-full h-full object-cover [object-position:center_15%]"  
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-swiss-red/10 mix-blend-multiply" />
          </div>
        </div>
      </SlideContainer>
    );
  },
  function LiSlide1() {
    return (
      <SlideContainer className="bg-macaron-pink">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-5 h-full relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&q=80" 
              className="w-full h-full object-cover" 
              alt="Library Concept"  
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-macaron-pink/40 mix-blend-overlay" />
          </div>
          <div className="md:col-span-7 flex flex-col justify-center py-20 pr-10">
            <Section title="移民女儿，闯进了顶级学术圈">
              <p>她的父母从中国移民美国，家境普通。她一边打工补贴家用，一边读完普林斯顿，后来拿到加州理工博士。她不是精英学术圈里理所当然的人，她是闯进去的。</p>
            </Section>
            <Section title="AI需要一个图书馆">
              <p>在ImageNet出现之前，AI没有足够的"教材"——它能看到的图片太少，学不会真正认识世界。ImageNet就是她建的那个图书馆：1400万张图片，每张都被人工标注了"这是一只猫""这是一把椅子"。AI拿着这个图书馆反复练习，才第一次学会了看懂图像。</p>
            </Section>
          </div>
        </div>
      </SlideContainer>
    );
  },
  function LiSlide2() {
    return (
      <SlideContainer className="bg-macaron-pink">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-7 flex flex-col justify-center py-20 pl-10">
            <Section title="没有人愿意做的事，她做了">
              <p>2006年她提出这个想法，所有人都觉得这是在浪费时间——收集1400万张图片、给每张打标签，太脏太累，不像"真正的研究"。她最后用了一个当时很新的方法：把标注任务众包给全球各地的普通人来完成。她用人类的劳动，喂养了未来的AI。</p>
            </Section>
            <Section title="数据不像算法那样性感，但没有它什么都不会发生">
              <p>2012年辛顿团队的突破之所以能发生，是因为有ImageNet这个靶子可以打。她的贡献常常被忽略——但在AI的世界里，数据就是燃料，她造了整个加油站。</p>
            </Section>
          </div>
          <div className="md:col-span-5 h-full relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80" 
              className="w-full h-full object-cover" 
              alt="Data Concept"  
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-swiss-red/10 mix-blend-multiply" />
          </div>
        </div>
      </SlideContainer>
    );
  }
];
