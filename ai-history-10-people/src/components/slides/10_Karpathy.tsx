import { SlideContainer } from '../SlideContainer';
import React from 'react';

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <div className="text-[10px] font-black tracking-[0.4em] uppercase text-swiss-red mb-4">
        The Visionary Practitioner
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

export const KarpathySlides = [
  function KarpathyCover() {
    return (
      <SlideContainer className="bg-macaron-blue">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-10">
          <div className="md:col-span-5 relative h-full w-full overflow-hidden">
            <img 
              src="/images/10_karpathy_portrait.jpg"
              alt="Karpathy"
              className="w-full h-full object-cover [object-position:center_15%]"  
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-swiss-red/10 mix-blend-multiply" />
          </div>
          <div className="md:col-span-7 flex flex-col justify-end pb-20 pl-10">
            <div className="text-[10px] font-black tracking-[0.5em] uppercase opacity-30 mb-12">
              Profile 10 / Practitioner
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
              Andrej<br/>
              <span className="text-swiss-red">Karpathy</span><br/>
              <span className="text-3xl md:text-4xl opacity-50 tracking-normal font-bold block mt-3">安德烈·卡帕西</span>
            </h1>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-3xl font-bold tracking-tight">
                前Tesla / OpenAI研究员 / Vibe Coding发明者
              </h2>
              <p className="text-xl md:text-2xl font-medium opacity-60 max-w-xl leading-tight">
                他是这个时代把AI落地得最深的实战派之一，也是第一个命名了"用自然语言写代码"这件事的人。
              </p>
            </div>
          </div>
        </div>
      </SlideContainer>
    );
  },
  function KarpathySlide1() {
    return (
      <SlideContainer className="bg-macaron-blue">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-6 flex flex-col justify-center py-20 pl-10">
            <Section title="Tesla：纯视觉方案，一个孤注一掷的逆势判断">
              <p>他在Tesla主导了Autopilot的神经网络视觉系统。当时自动驾驶行业的主流方案是激光雷达——用激光扫描周围环境，生成精确的3D地图，准确可靠，但贵，而且依赖外部地图数据。</p>
              <p>他做了一个逆势的判断：放弃激光雷达，只用摄像头，让AI像人类一样"看"路。争议的核心是：人类开车只用眼睛，为什么AI不行？他的答案是：行，但前提是AI要足够聪明。这个判断在当时被很多人认为太激进，今天Tesla的FSD基本验证了他是对的。</p>
            </Section>
          </div>
          <div className="md:col-span-6 flex flex-col justify-center py-20 pr-10">
            <Section title="自动驾驶本质上是一个AI问题">
              <p>传统自动驾驶是写规则：看到红灯停，看到行人让。但真实世界的路况是无限复杂的，规则永远写不完。卡帕西的方向是：让AI从海量真实驾驶数据里自己学会判断，就像人类学开车一样。</p>
              <p>这不只是技术路线的选择，是一种对AI能力边界的根本判断——他相信AI可以通过足够多的数据，学会理解真实世界。Tesla今天拥有全球最大规模的真实驾驶数据，是这个判断的直接结果。</p>
            </Section>
          </div>
        </div>
      </SlideContainer>
    );
  },
  function KarpathySlide2() {
    return (
      <SlideContainer className="bg-macaron-blue">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-7 flex flex-col justify-center py-20 pl-10">
            <Section title="Vibe Coding：重新定义&quot;编程&quot;">
              <p>2025年初他造了"Vibe Coding"这个词：用自然语言告诉AI你想要什么，让它写代码，你只需要感受对不对。这不只是效率提升，是重新定义了"谁能编程"这件事。</p>
              <p>在这之前，编程是一个需要多年训练的专业技能。Vibe Coding说的是：你只需要知道你想要什么，剩下的交给AI。命名一件事，有时候就是让它真正存在的方式——这个词让几百万人意识到，创造力不再是少数人的特权。</p>
            </Section>
          </div>
          <div className="md:col-span-5 h-full relative overflow-hidden flex items-center justify-center p-10">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" 
              className="w-full h-auto object-contain" 
              alt="Coding Concept"  
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-swiss-red/5 mix-blend-multiply" />
          </div>
        </div>
      </SlideContainer>
    );
  }
];
