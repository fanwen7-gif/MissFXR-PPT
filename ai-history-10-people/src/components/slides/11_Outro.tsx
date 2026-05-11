import { SlideContainer } from '../SlideContainer';

const names = [
  { en: "Geoffrey Hinton", zh: "杰弗里·辛顿", role: "深度学习教父" },
  { en: "Yann LeCun", zh: "扬·勒丘恩", role: "卷积神经网络之父" },
  { en: "Fei-Fei Li", zh: "李飞飞", role: "ImageNet之母" },
  { en: "Ashish Vaswani", zh: "阿希什·瓦斯瓦尼", role: "Transformer发明者" },
  { en: "Demis Hassabis", zh: "德米斯·哈萨比斯", role: "DeepMind创始人" },
  { en: "Ilya Sutskever", zh: "伊利亚·苏茨克维", role: "OpenAI联合创始人" },
  { en: "Jensen Huang", zh: "黄仁勋", role: "英伟达创始人" },
  { en: "Sam Altman", zh: "山姆·奥特曼", role: "OpenAI CEO" },
  { en: "Dario Amodei", zh: "达里奥·阿莫迪", role: "Anthropic创始人" },
  { en: "Andrej Karpathy", zh: "安德烈·卡帕西", role: "Vibe Coding发明者" },
];

export const OutroSlides = [
  function OutroSlide() {
    return (
      <SlideContainer className="bg-macaron-lavender">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full">
          {/* 左侧：10人名单 */}
          <div className="md:col-span-7 flex flex-col justify-center py-16 pl-16 pr-8 border-r border-swiss-ink/10">
            <div className="text-[10px] font-black tracking-[0.4em] uppercase opacity-30 mb-8">
              The 10 · 完整名单
            </div>
            <div className="flex flex-col gap-3">
              {names.map((p, i) => (
                <div key={i} className="flex items-baseline gap-4">
                  <span className="text-[11px] font-black opacity-30 tabular-nums w-5 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg font-bold tracking-tight">{p.en}</span>
                  <span className="text-base tracking-normal opacity-50">{p.zh}</span>
                  <span className="text-sm opacity-30 ml-auto shrink-0">{p.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：ID */}
          <div className="md:col-span-5 flex flex-col justify-center items-center py-16 px-10 gap-8">
            <img
              src="/images/logo_channel.png"
              alt="Channel Logo"
              className="w-28 h-28 rounded-full object-cover border-2 border-swiss-ink/20"
            />
            <div className="text-center">
              <div className="text-3xl font-black tracking-tight mb-1">@Miss 发行人</div>
              <div className="text-base opacity-50 tracking-widest">大白话讲AI</div>
            </div>
            <div className="w-8 h-px bg-swiss-ink/20" />
            <div className="text-center text-sm opacity-40 leading-relaxed">
              这10个人，<br/>串起了AI从无到有的完整历史。
            </div>
            <div className="text-[10px] opacity-20 tracking-widest uppercase text-center mt-4">
              Vibe Coding 制作 · 特别鸣谢：陈南
            </div>
          </div>
        </div>
      </SlideContainer>
    );
  }
];
