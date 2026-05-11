import { SlideContainer } from '../SlideContainer';

const names = [
  { en: "Geoffrey Hinton", zh: "杰弗里·辛顿", src: "/images/Gemini_Generated_Image_43krxv43krxv43kr.png" },
  { en: "Yann LeCun", zh: "扬·勒丘恩", src: "/images/Gemini_Generated_Image_6jt3rj6jt3rj6jt3.png" },
  { en: "Fei-Fei Li", zh: "李飞飞", src: "/images/Gemini_Generated_Image_7j03lf7j03lf7j03.png" },
  { en: "Ashish Vaswani", zh: "阿希什·瓦斯瓦尼", src: "/images/Gemini_Generated_Image_8fq7rh8fq7rh8fq7.png" },
  { en: "Demis Hassabis", zh: "德米斯·哈萨比斯", src: "/images/Gemini_Generated_Image_c34e10c34e10c34e.png" },
  { en: "Ilya Sutskever", zh: "伊利亚·苏茨克维", src: "/images/Gemini_Generated_Image_eiac7neiac7neiac.png" },
  { en: "Jensen Huang", zh: "黄仁勋", src: "/images/Gemini_Generated_Image_euiwx4euiwx4euiw.png" },
  { en: "Sam Altman", zh: "山姆·奥特曼", src: "/images/Gemini_Generated_Image_qhj0gpqhj0gpqhj0.png" },
  { en: "Dario Amodei", zh: "达里奥·阿莫迪", src: "/images/Gemini_Generated_Image_rb3gr3rb3gr3rb3g.png" },
  { en: "Andrej Karpathy", zh: "安德烈·卡帕西", src: "/images/Gemini_Generated_Image_so3ui6so3ui6so3u.png" },
];

export const CoverSlides = [
  function CoverSlide() {
    return (
      <SlideContainer className="bg-macaron-lavender">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-0">
          {/* 左侧：大标题 + ID */}
          <div className="md:col-span-5 flex flex-col justify-between py-16 pl-16 pr-8">
            <div>
              <div className="text-xs font-black tracking-[0.4em] uppercase text-swiss-red mb-6">
                特别呈现 · Special Presentation
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-[1.0] mb-6">
                改变AI历史的<br/>
                <span className="text-swiss-red">10个人</span>
              </h1>
              <p className="text-lg font-medium leading-relaxed opacity-60 max-w-xs">
                从神经网络到大语言模型，<br/>见证智能时代的诞生。
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img src="/images/logo_channel.png" alt="Channel Logo" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="text-sm font-black tracking-tight">大白话讲AI</div>
                <div className="text-xs opacity-50 tracking-widest">@Miss 发行人</div>
              </div>
            </div>
          </div>

          {/* 右侧：2×5 头像网格 */}
          <div className="md:col-span-7 grid grid-cols-5 grid-rows-2 h-full">
            {names.map((person, i) => (
              <div key={i} className="relative overflow-hidden group">
                <img
                  src={person.src}
                  alt={person.en}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: person.objectPosition ?? 'center 15%' }}
                  referrerPolicy="no-referrer"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80' }}
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2">
                  <div className="text-white text-[10px] font-bold leading-tight">{person.zh}</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-1 left-2 text-white text-[9px] font-bold opacity-70">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SlideContainer>
    );
  }
];
