# -*- coding: utf-8 -*-
out = open('/Users/wenmac/Downloads/PPT_Sam/index.html', 'a', encoding='utf-8')
def w(s): out.write(s)

# SLIDE 23: PART 05 CHAPTER COVER
w("""
    <!-- SLIDE 23: PART 05 CHAPTER COVER -->
    <div class="slide" id="slide-23" style="background:#F5F2EE;">
      <div style="display:flex;width:100%;height:100%;">
        <div style="width:50%;height:100%;display:flex;flex-direction:column;justify-content:center;padding:5% 4% 5% 7%;position:relative;">
          <div style="position:absolute;font-family:'Inter',sans-serif;font-weight:900;font-size:14vw;color:rgba(26,26,26,0.04);line-height:1;user-select:none;pointer-events:none;white-space:nowrap;top:50%;transform:translateY(-50%);left:5%;">PART 05</div>
          <div style="position:relative;z-index:2;">
            <div style="font-family:'Inter',sans-serif;font-size:0.9vw;font-weight:600;color:var(--gold);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:2vh;">PART 05</div>
            <h2 style="font-family:'Playfair Display',serif;font-weight:700;font-size:3.8vw;color:var(--accent1);margin-bottom:2vh;line-height:1.2;">贡献四：顶级产品化能力</h2>
            <div style="width:60px;height:2px;background:var(--gold);margin-bottom:2vh;"></div>
            <p style="font-family:'Inter',sans-serif;font-weight:300;font-size:1.3vw;color:var(--muted);">科技走入普通人世界</p>
          </div>
        </div>
        <div style="width:50%;height:100%;position:relative;overflow:hidden;">
          <img src="images/chatgpt_launch.jpg" alt="ChatGPT Launch" style="width:100%;height:100%;object-fit:cover;">
          <div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(245,242,238,0.5) 0%,transparent 30%);"></div>
        </div>
      </div>
    </div>
""")

# SLIDE 24: GPT-3 PROBLEM (text only — Fix G: remove image)
w("""
    <!-- SLIDE 24: GPT-3 PROBLEM (text only) -->
    <div class="slide" id="slide-24" style="background:#F5F2EE;">
      <div style="width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;padding:6% 10%;">
        <div style="font-family:'Inter',sans-serif;font-weight:900;font-size:8vw;color:rgba(26,26,26,0.05);line-height:1;margin-bottom:-2vh;">2020</div>
        <h2 style="font-family:'Playfair Display',serif;font-weight:700;font-size:3vw;color:var(--accent1);margin-bottom:2.5vh;line-height:1.2;">GPT-3发布。</h2>
        <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.78;margin-bottom:2.5vh;max-width:700px;">它能写文章、写代码、回答问题，技术能力已经相当强。但几乎没有普通人知道它的存在——因为它只以API形式开放，你必须会写代码才能调用它。</p>
        <div style="border-left:3px solid var(--muted);padding-left:1.5vw;max-width:600px;">
          <p style="font-family:'Playfair Display',serif;font-style:italic;font-size:1.8vw;color:var(--accent1);line-height:1.5;">一项改变世界的技术，被锁在开发者的工具箱里。</p>
        </div>
      </div>
    </div>
""")

# SLIDE 25: CHATGPT LAUNCH
w("""
    <!-- SLIDE 25: CHATGPT LAUNCH -->
    <div class="slide" id="slide-25" style="background:#F5F2EE;overflow:hidden;">
      <div style="display:flex;width:100%;height:100%;">
        <div style="width:45%;height:100%;position:relative;overflow:hidden;">
          <img src="images/chatgpt_users.jpg" alt="ChatGPT Users" style="width:100%;height:100%;object-fit:cover;object-position:center top;">
          <div style="position:absolute;top:0;right:0;bottom:0;width:50%;background:linear-gradient(to right,transparent,#F5F2EE);"></div>
        </div>
        <div style="width:55%;height:100%;display:flex;flex-direction:column;justify-content:center;padding:5% 7% 5% 3%;">
          <div style="font-family:'Inter',sans-serif;font-weight:300;font-size:18px;color:var(--gold);letter-spacing:0.15em;text-transform:uppercase;margin-bottom:2vh;">2022年11月30日</div>
          <h2 style="font-family:'Playfair Display',serif;font-weight:900;font-size:5.5vw;color:var(--accent1);margin-bottom:2.5vh;line-height:1.05;">ChatGPT上线</h2>
          <div style="width:50px;height:2px;background:var(--gold);margin-bottom:2.5vh;"></div>
          <p style="font-family:'Inter',sans-serif;font-weight:300;font-size:18px;color:var(--muted);line-height:1.75;margin-bottom:2vh;">任何人打开网页就能直接对话。不需要任何技术背景，不需要注册API，不需要写一行代码。</p>
          <p style="font-family:'Playfair Display',serif;font-style:italic;font-size:2vw;color:var(--gold);">它把AI的使用门槛降到了零。</p>
        </div>
      </div>
    </div>
""")

# SLIDE 26: GROWTH COMPARISON
w("""
    <!-- SLIDE 26: GROWTH COMPARISON -->
    <div class="slide" id="slide-26" style="background:#FFFFFF;">
      <div style="padding:5% 8%;height:100%;display:flex;flex-direction:column;justify-content:center;">
        <h2 style="font-family:'Playfair Display',serif;font-weight:700;font-size:3.4vw;color:var(--accent1);margin-bottom:3.5vh;">增长速度对比：有记录以来最快</h2>
        <div style="display:flex;flex-direction:column;gap:2.5vh;margin-bottom:3.5vh;">
          <div>
            <div style="display:flex;align-items:center;gap:2%;margin-bottom:0.8vh;">
              <div style="width:14%;font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);">Instagram</div>
              <div style="flex:1;height:32px;background:#F0EDE8;border-radius:2px;overflow:hidden;"><div style="width:100%;height:100%;background:var(--muted);opacity:0.25;"></div></div>
              <div style="width:22%;font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);text-align:right;">2年半达到1亿用户</div>
            </div>
          </div>
          <div>
            <div style="display:flex;align-items:center;gap:2%;margin-bottom:0.8vh;">
              <div style="width:14%;font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);">TikTok</div>
              <div style="flex:1;height:32px;background:#F0EDE8;border-radius:2px;overflow:hidden;"><div style="width:60%;height:100%;background:var(--muted);opacity:0.35;"></div></div>
              <div style="width:22%;font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);text-align:right;">9个月达到1亿用户</div>
            </div>
          </div>
          <div>
            <div style="display:flex;align-items:center;gap:2%;margin-bottom:0.8vh;">
              <div style="width:14%;font-family:'Inter',sans-serif;font-weight:700;font-size:18px;color:var(--accent1);">ChatGPT</div>
              <div style="flex:1;height:32px;background:#F0EDE8;border-radius:2px;overflow:hidden;"><div style="width:11%;height:100%;background:var(--gold);"></div></div>
              <div style="width:22%;text-align:right;">
                <span style="font-family:'Inter',sans-serif;font-weight:800;font-size:18px;color:var(--gold);">2个月</span>
                <span style="font-family:'Inter',sans-serif;font-size:18px;color:var(--accent1);"> 达到1亿用户——有记录以来最快</span>
              </div>
            </div>
          </div>
        </div>
        <div style="background:#F5F2EE;border-radius:4px;padding:2.5% 3%;margin-bottom:2vh;">
          <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.65;margin-bottom:1vh;">引爆的连锁反应：Google三个月内推出Bard（现Gemini），Meta开源LLaMA，百度推出文心一言，全球AI竞赛在2023年集中爆发。</p>
          <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.65;">截至2025年，OpenAI每周活跃用户约<strong style="color:var(--accent1);">7亿</strong>，估值约<strong style="color:var(--accent1);">3000–5000亿美元</strong>，2024年年化收入约<strong style="color:var(--accent1);">34亿美元</strong></p>
        </div>
      </div>
    </div>
""")

# SLIDE 27: PRODUCT CHAPTER CLOSE
w("""
    <!-- SLIDE 27: CHAPTER CLOSE PART 05 -->
    <div class="slide" id="slide-27" style="background:#FFFFFF;">
      <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8%;">
        <div style="max-width:720px;text-align:center;">
          <p style="font-family:'Playfair Display',serif;font-style:italic;font-weight:400;font-size:1.8vw;color:var(--accent1);line-height:1.65;margin-bottom:3vh;">技术的伟大不等于产品的伟大。GPT-3证明了AI能做什么，ChatGPT证明了AI能让谁用。把技术从「开发者工具」变成「普通人产品」，需要的不只是技术判断，还需要对人的理解，和在正确时机按下发布键的勇气。</p>
          <div style="width:50px;height:1px;background:var(--gold);margin:0 auto 2.5vh;"></div>
        </div>
        <div style="position:absolute;bottom:5%;left:50%;transform:translateX(-50%);font-family:'Inter',sans-serif;font-size:0.7vw;color:var(--muted);opacity:0.5;letter-spacing:0.12em;text-transform:uppercase;">PART 05 / 贡献四</div>
      </div>
    </div>
""")

# SLIDE 28: PART 06 CHAPTER COVER
w("""
    <!-- SLIDE 28: PART 06 CHAPTER COVER -->
    <div class="slide" id="slide-28" style="background:#F5F2EE;">
      <div style="position:absolute;bottom:6%;right:6%;z-index:2;">
        <img src="images/openai_boardroom.jpg" alt="OpenAI Boardroom" style="width:14vw;height:9vw;object-fit:cover;border-radius:4px;opacity:0.7;">
      </div>
      <div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;padding:0 8%;">
        <div style="position:absolute;font-family:'Inter',sans-serif;font-weight:900;font-size:18vw;color:rgba(26,26,26,0.04);line-height:1;user-select:none;pointer-events:none;white-space:nowrap;">PART 06</div>
        <div style="position:relative;z-index:2;">
          <div style="font-family:'Inter',sans-serif;font-size:0.9vw;font-weight:600;color:var(--gold);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:2vh;">PART 06</div>
          <h2 style="font-family:'Playfair Display',serif;font-weight:700;font-size:4.5vw;color:var(--accent1);margin-bottom:2vh;line-height:1.15;">贡献五：权力博弈</h2>
          <div style="width:60px;height:2px;background:var(--gold);margin-bottom:2vh;"></div>
          <p style="font-family:'Inter',sans-serif;font-weight:300;font-size:1.4vw;color:var(--gold);">五天，AI世界谁主沉浮</p>
        </div>
      </div>
    </div>
""")

print("Slides 23-28 done")
out.close()
