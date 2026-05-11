import { SlideContainer } from '../SlideContainer';
import React from 'react';

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <div className="text-[10px] font-black tracking-[0.4em] uppercase text-swiss-red mb-4">
        Core Concept
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

export const LeCunSlides = [
  function LeCunCover() {
    return (
      <SlideContainer className="bg-macaron-mint">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-10">
          <div className="md:col-span-5 relative h-full w-full overflow-hidden">
            <img 
              src="/images/02_lecun_portrait.jpg"
              alt="LeCun"
              className="w-full h-full object-cover [object-position:center_15%]"  
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-macaron-mint/20 mix-blend-multiply" />
          </div>
          <div className="md:col-span-7 flex flex-col justify-end pb-20 pl-10">
            <div className="text-[10px] font-black tracking-[0.5em] uppercase opacity-30 mb-12">
              Profile 02 / Architect
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
              Yann<br/>
              <span className="text-swiss-red">LeCun</span><br/>
              <span className="text-3xl md:text-4xl opacity-50 tracking-normal font-bold block mt-3">扬·勒丘恩</span>
            </h1>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-3xl font-bold tracking-tight">
                卷积神经网络之父 / 图灵奖得主
              </h2>
              <p className="text-xl md:text-2xl font-medium opacity-60 max-w-xl leading-tight">
                他发明了让AI第一次真正能"看懂"图像的算法，今天所有图像识别AI的底层都是他的思路。
              </p>
            </div>
          </div>
        </div>
      </SlideContainer>
    );
  },
  function LeCunSlide1() {
    return (
      <SlideContainer className="bg-macaron-mint">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-7 flex flex-col justify-center py-20 pl-10">
            <Section title="辛顿的学生，走出了自己的路">
              <p>他是辛顿的学生。但他的贡献走向了完全不同的方向——不是继续推演理论，而是让神经网络第一次真正落地。</p>
            </Section>
            <Section title="AI是怎么&quot;看懂&quot;一张图的？">
              <p>卷积神经网络的核心逻辑是：不是一眼扫整张图，而是先识别局部特征，再把特征拼起来理解整体。就像你认一张脸，不是一眼扫全脸，而是先认出眼睛、鼻子、嘴巴，再把这些拼在一起判断"这是谁"。卷积神经网络模仿的就是这个过程。</p>
            </Section>
          </div>
          <div className="md:col-span-5 h-full relative overflow-hidden">
            <img 
              src="/images/02_cnn_diagram.png" 
              className="w-full h-full object-cover" 
              alt="Computer Vision Concept"  
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-swiss-red/10 mix-blend-multiply" />
          </div>
        </div>
      </SlideContainer>
    );
  },
  function LeCunSlide2() {
    return (
      <SlideContainer className="bg-macaron-mint">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-5 h-full relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80" 
              className="w-full h-full object-cover" 
              alt="Data/Digits Concept"  
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-macaron-mint/40 mix-blend-overlay" />
          </div>
          <div className="md:col-span-7 flex flex-col justify-center py-20 pr-10">
            <Section title="他的代码，跑在美国每一张银行支票上">
              <p>1989年，他在贝尔实验室接到一个任务：帮银行识别支票上的手写数字。他用卷积神经网络解决了这个问题。后来，美国几乎所有银行的支票识别系统都跑着他的算法——在深度学习还没有名字的年代，他的代码已经在处理美国10%以上的银行支票。他是第一个把神经网络变成真实产品的人。</p>
            </Section>
            <Section title="从手写数字到人脸、CT片、自动驾驶">
              <p>这套架构后来成为图像识别的基础。今天所有能看懂人脸、扫描CT片、识别路况的AI，底层都是这个思路的延伸。他和辛顿、Bengio一起拿了2018年图灵奖。</p>
            </Section>
          </div>
        </div>
      </SlideContainer>
    );
  }
];
