# -*- coding: utf-8 -*-
out = open('/Users/wenmac/Downloads/PPT_Sam/index.html', 'a', encoding='utf-8')
def w(s): out.write(s)

# SLIDE 20: THREE CAPITAL STRUCTURE CARDS
w("""
    <!-- SLIDE 20: THREE CAPITAL STRUCTURE CARDS -->
    <div class="slide" id="slide-20" style="background:#F5F2EE;">
      <div style="display:flex;width:100%;height:100%;">
        <div style="flex:1;background:#FFFFFF;display:flex;flex-direction:column;justify-content:center;padding:5% 4% 5% 6%;border-right:1px solid rgba(0,0,0,0.06);">
          <div style="font-family:'Inter',sans-serif;font-weight:900;font-size:11px;color:var(--muted);letter-spacing:0.18em;text-transform:uppercase;margin-bottom:2vh;">01 背景</div>
          <h3 style="font-family:'Playfair Display',serif;font-weight:700;font-size:1.9vw;color:var(--accent1);margin-bottom:2vh;line-height:1.3;">为什么最开始是非营利</h3>
          <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.75;">创始人们认为AGI风险极高，不应该由商业利益主导研究方向。非营利结构在理论上能保证研究目标是造福人类，不服务于任何股东利益。理想主义的选择，但很快遇到了现实的墙。</p>
        </div>
        <div style="flex:1;background:#F0EDE8;display:flex;flex-direction:column;justify-content:center;padding:5% 4%;border-right:1px solid rgba(0,0,0,0.06);">
          <div style="font-family:'Inter',sans-serif;font-weight:900;font-size:11px;color:var(--gold);letter-spacing:0.18em;text-transform:uppercase;margin-bottom:2vh;">02 困局</div>
          <h3 style="font-family:'Playfair Display',serif;font-weight:700;font-size:1.9vw;color:var(--accent1);margin-bottom:2vh;line-height:1.3;">早期融资的死局</h3>
          <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.75;">主流VC几乎不投非营利机构——看不到退出路径，也拿不到回报。传统融资逻辑在这里完全失效。</p>
        </div>
        <div style="flex:1;background:#FFFFFF;display:flex;flex-direction:column;justify-content:center;padding:5% 4%;">
          <div style="overflow:hidden;border-radius:4px;width:60px;height:60px;margin-bottom:2vh;">
            <img src="images/elon_musk.jpg" alt="Elon Musk" style="width:100%;height:100%;object-fit:cover;object-position:top;">
          </div>
          <div style="font-family:'Inter',sans-serif;font-weight:900;font-size:11px;color:var(--muted);letter-spacing:0.18em;text-transform:uppercase;margin-bottom:2vh;">03 转折</div>
          <h3 style="font-family:'Playfair Display',serif;font-weight:700;font-size:1.9vw;color:var(--accent1);margin-bottom:2vh;line-height:1.3;">Musk的介入与决裂</h3>
          <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.75;">Musk是OpenAI联合创始人，早期承诺捐款超过10亿美元。2018年以「与Tesla AI业务存在利益冲突」为由离开董事会。此后创立xAI直接竞争，多次公开指控OpenAI背离使命并提起诉讼。一起创业的人，最终变成了最强的对手。</p>
        </div>
      </div>
    </div>
""")

# SLIDE 21: BREAKTHROUGH STRUCTURE
w("""
    <!-- SLIDE 21: THE BREAKTHROUGH STRUCTURE -->
    <div class="slide" id="slide-21" style="background:#FFFFFF;">
      <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:6% 10%;">
        <div style="position:absolute;font-family:'Playfair Display',serif;font-weight:900;font-size:20vw;color:rgba(26,26,26,0.04);line-height:1;user-select:none;pointer-events:none;">破局</div>
        <div style="position:relative;z-index:2;text-align:center;width:100%;">
          <p style="font-family:'Inter',sans-serif;font-weight:900;font-size:11px;color:var(--gold);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:1.5vh;">破局：2019年，Sam的解法</p>
          <h2 style="font-family:'Playfair Display',serif;font-weight:700;font-size:3.8vw;color:var(--accent1);margin-bottom:1.5vh;">「利润上限」（Capped Profit）模式</h2>
          <div style="width:60px;height:2px;background:var(--gold);margin:0 auto 2vh;"></div>
          <p style="font-family:'Inter',sans-serif;font-weight:300;font-size:18px;color:var(--muted);max-width:650px;margin:0 auto 2.5vh;line-height:1.75;">非营利母公司下设营利子公司接受投资，但投资人回报上限是本金的100倍，超出部分归非营利母公司。</p>
          <div style="display:flex;gap:2%;justify-content:center;margin-bottom:3vh;">
            <div style="background:#F0EDE8;color:var(--accent1);font-family:'Inter',sans-serif;font-size:18px;font-weight:500;padding:1.2vh 2vw;border-radius:3px;border:1px solid rgba(0,0,0,0.08);">这个结构让资本觉得这件事可以投</div>
            <div style="background:var(--gold);color:var(--accent1);font-family:'Inter',sans-serif;font-size:18px;font-weight:500;padding:1.2vh 2vw;border-radius:3px;">同时让研究员觉得没有出卖使命</div>
          </div>
          <div style="font-family:'Inter',sans-serif;font-weight:900;font-size:3.2vw;color:var(--accent1);margin-bottom:0.8vh;">2019年，微软首投10亿美元，累计约130亿美元</div>
          <p style="font-family:'Inter',sans-serif;font-weight:300;font-size:18px;color:var(--muted);">附带条件：Azure成为OpenAI独家云服务商，微软产品优先整合GPT能力。微软用130亿换到了AI时代的核心卡位。</p>
        </div>
      </div>
    </div>
""")

# SLIDE 22: CHAPTER CLOSE PART 04
w("""
    <!-- SLIDE 22: CHAPTER CLOSE PART 04 -->
    <div class="slide" id="slide-22" style="background:#F5F2EE;">
      <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8%;">
        <div style="max-width:720px;text-align:center;">
          <p style="font-family:'Playfair Display',serif;font-style:italic;font-weight:400;font-size:1.6vw;color:var(--accent1);line-height:1.65;margin-bottom:2.5vh;">新的问题：2023年宫斗后，OpenAI启动向常规营利公司的结构转型，非营利母公司的控制权持续削减。转型完成后，非营利使命的约束机制是什么，目前没有公开可验证的答案。</p>
          <div style="width:50px;height:1px;background:var(--gold);margin:0 auto 2.5vh;"></div>
          <p style="font-family:'Inter',sans-serif;font-weight:300;font-size:18px;color:var(--muted);line-height:1.7;">这一章的逻辑：死局→破局→新问题。Sam Altman在这个过程里展现的，是在规则不存在的地方设计新规则的能力——但新规则能否经得住时间检验，答案还没出来。</p>
        </div>
        <div style="position:absolute;bottom:5%;left:50%;transform:translateX(-50%);font-family:'Inter',sans-serif;font-size:0.7vw;color:var(--muted);opacity:0.5;letter-spacing:0.12em;text-transform:uppercase;">PART 04 / 贡献三</div>
      </div>
    </div>
""")

print("Slides 20-22 done")
out.close()
