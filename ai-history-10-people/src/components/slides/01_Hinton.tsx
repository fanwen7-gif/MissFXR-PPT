import { SlideContainer } from '../SlideContainer';
import React from 'react';

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <div className="text-[10px] font-black tracking-[0.4em] uppercase text-swiss-red mb-4">
        Key Insight
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

export const HintonSlides = [
  function HintonCover() {
    return (
      <SlideContainer className="bg-macaron-blue">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-10">
          <div className="md:col-span-7 flex flex-col justify-end pb-20">
            <div className="text-[10px] font-black tracking-[0.5em] uppercase opacity-30 mb-12">
              Profile 01 / Pioneer
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
              Geoffrey<br/>
              <span className="text-swiss-red">Hinton</span><br/>
              <span className="text-3xl md:text-4xl opacity-50 tracking-normal font-bold block mt-3">杰弗里·辛顿</span>
            </h1>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-3xl font-bold tracking-tight">
                深度学习教父 / 诺贝尔物理学奖得主
              </h2>
              <p className="text-xl md:text-2xl font-medium opacity-60 max-w-xl leading-tight">
                现代AI的源头，反向传播算法的奠基人，没有他就没有今天所有的神经网络。
              </p>
            </div>
          </div>
          <div className="md:col-span-5 relative h-full w-full overflow-hidden">
            <img 
              src="/images/01_hinton_portrait.jpg" 
              alt="Hinton" 
              className="w-full h-full object-cover [object-position:center_15%]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-swiss-red/10 mix-blend-multiply" />
          </div>
        </div>
      </SlideContainer>
    );
  },
  function HintonSlide1() {
    return (
      <SlideContainer className="bg-macaron-blue">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-5 h-full relative overflow-hidden">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Geoffrey_E._Hinton%2C_2024_Nobel_Prize_Laureate_in_Physics_%28cropped1%29.jpg/640px-Geoffrey_E._Hinton%2C_2024_Nobel_Prize_Laureate_in_Physics_%28cropped1%29.jpg"
              className="w-full h-full object-cover [object-position:center_15%]"
              alt="Hinton Nobel Prize 2024"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/images/01_hinton_portrait.jpg' }}  
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-macaron-blue/40 mix-blend-overlay" />
          </div>
          <div className="md:col-span-7 flex flex-col justify-center py-20 pr-10">
            <Section title="他选了一条没有人相信的路，20年冷板凳">
              <p>他在1980年代奠定了反向传播算法。但那个年代，坚持神经网络是有真实代价的——符号主义AI才是显学，有政府资金、有学术地位、有期刊话语权。坚持神经网络的人拿不到经费，发不了顶刊，学生也难找工作。他在质疑和排斥中撑了二十年。</p>
            </Section>
            <Section title="两块游戏显卡，打败了全球所有顶级实验室">
              <p>2012年，他和两个学生——Krizhevsky和一个叫Ilya Sutskever的年轻人——用两块消费级GPU，训练出了AlexNet。那年ImageNet竞赛，错误率从26%骤降到16%，碾压所有顶级研究机构。这一年被很多人视为现代AI的真正起点。值得记住的是：Sutskever后来联合创立了OpenAI，直接催生了ChatGPT。辛顿不只是奠基者，他是这一代AI领袖的老师。</p>
            </Section>
          </div>
        </div>
      </SlideContainer>
    );
  },
  function HintonSlide2() {
    return (
      <SlideContainer className="bg-macaron-blue">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start h-full">
          <div className="md:col-span-7 flex flex-col justify-center py-20 pl-10">
            <Section title="一个计算机科学家，拿了物理学奖">
              <p>2024年，他因此获得了诺贝尔物理学奖。诺贝尔委员会用这件事表态：这不只是技术发明，而是改变了人类理解世界的方式。</p>
            </Section>
            <Section title="他亲手造了这个东西，然后开始害怕它">
              <p>他后来离开Google，说是为了能自由谈论AI风险，不受公司立场约束。但他同时承认，他不确定自己的恐惧是否理性。这种"我不知道我对不对，但我必须说出来"的状态，比任何预言都更值得被记录。他说过一句话：「我没办法找到一个方法，让AI永远比人类弱。」他不是在预测风险，他是在承认自己不知道答案。</p>
            </Section>
          </div>
          <div className="md:col-span-5 h-full relative overflow-hidden">
            <img 
              src="/images/01_nobel_medal.jpg" 
              className="w-full h-full object-cover" 
              alt="Physics/Nobel Concept"  
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-swiss-red/10 mix-blend-multiply" />
          </div>
        </div>
      </SlideContainer>
    );
  }
];
