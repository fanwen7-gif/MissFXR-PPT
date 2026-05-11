# -*- coding: utf-8 -*-
out = open('/Users/wenmac/Downloads/PPT_Sam/index.html', 'a', encoding='utf-8')
def w(s): out.write(s)

# SLIDE 34: PART 07 CHAPTER COVER
w("""
    <!-- SLIDE 34: PART 07 CHAPTER COVER -->
    <div class="slide" id="slide-34" style="background:#F5F2EE;">
      <div style="position:absolute;bottom:6%;right:6%;z-index:2;">
        <img src="images/us_senate_hearing.jpg" alt="Senate Hearing" style="width:14vw;height:9vw;object-fit:cover;border-radius:4px;opacity:0.7;">
      </div>
      <div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;padding:0 8%;">
        <div style="position:absolute;font-family:'Inter',sans-serif;font-weight:900;font-size:18vw;color:rgba(26,26,26,0.04);line-height:1;user-select:none;pointer-events:none;white-space:nowrap;">PART 07</div>
        <div style="position:relative;z-index:2;">
          <div style="font-family:'Inter',sans-serif;font-size:0.9vw;font-weight:600;color:var(--gold);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:2vh;">PART 07</div>
          <h2 style="font-family:'Playfair Display',serif;font-weight:700;font-size:4.2vw;color:var(--accent1);margin-bottom:2vh;line-height:1.2;">贡献六：核心矛盾</h2>
          <div style="width:60px;height:2px;background:var(--gold);margin-bottom:2vh;"></div>
          <p style="font-family:'Inter',sans-serif;font-weight:300;font-size:18px;color:var(--muted);">加速与安全之间的张力，至今没有答案</p>
        </div>
      </div>
    </div>
""")

# SLIDE 35: CONTRADICTION LEFT/RIGHT
w("""
    <!-- SLIDE 35: THE CONTRADICTION LEFT/RIGHT -->
    <div class="slide" id="slide-35" style="background:#F5F2EE;">
      <div style="display:flex;width:100%;height:100%;">
        <div style="width:50%;height:100%;background:#FFFFFF;display:flex;flex-direction:column;justify-content:center;padding:5% 5%;border-right:1px solid rgba(0,0,0,0.08);">
          <div style="font-family:'Inter',sans-serif;font-weight:900;font-size:11px;color:var(--gold);letter-spacing:0.18em;text-transform:uppercase;margin-bottom:2vh;">他说的话</div>
          <p style="font-family:'Playfair Display',serif;font-style:italic;font-size:1.5vw;color:var(--accent1);line-height:1.65;margin-bottom:2.5vh;">2023年5月，Sam主动在美国参议院作证，呼吁各国政府对AI进行监管。「如果这项技术出了问题，后果可能是灾难性的。」</p>
          <div style="overflow:hidden;border-radius:4px;width:100%;max-width:220px;">
            <img src="images/sam_altman_senate.jpg" alt="Senate Hearing" style="width:100%;height:110px;object-fit:cover;display:block;">
          </div>
        </div>
        <div style="width:50%;height:100%;background:#F5F2EE;display:flex;flex-direction:column;justify-content:center;padding:5% 5%;">
          <div style="font-family:'Inter',sans-serif;font-weight:900;font-size:11px;color:var(--muted);letter-spacing:0.18em;text-transform:uppercase;margin-bottom:2vh;">他做的事</div>
          <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--accent1);line-height:1.75;margin-bottom:2.5vh;">同年，GPT-4发布，GPTs发布，OpenAI的商业化节奏没有放慢一天。</p>
          <div style="background:#fff;border-radius:4px;padding:2.5% 3%;border-left:4px solid var(--burgundy);">
            <div style="font-family:'Inter',sans-serif;font-weight:700;font-size:18px;color:var(--burgundy);margin-bottom:1vh;">2024年，安全团队大规模离职</div>
            <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.65;">包括安全团队多名核心负责人相继离职，以及Ilya Sutskever本人的出走。</p>
          </div>
        </div>
      </div>
    </div>
""")

# SLIDE 36: THREE CARDS CONTRADICTION ANALYSIS
w("""
    <!-- SLIDE 36: THREE CARDS CONTRADICTION ANALYSIS -->
    <div class="slide" id="slide-36" style="background:#F5F2EE;">
      <div style="padding:4% 4%;height:100%;display:flex;flex-direction:column;">
        <h2 style="font-family:'Playfair Display',serif;font-weight:700;font-size:2.2vw;color:var(--accent1);margin-bottom:2.5vh;text-align:center;">他的核心逻辑</h2>
        <div style="display:flex;gap:2%;flex:1;">
          <div style="flex:1;background:#fff;border-radius:4px;padding:3.5% 3%;border-top:3px solid var(--burgundy);">
            <div style="font-family:'Inter',sans-serif;font-weight:700;font-size:11px;color:var(--burgundy);letter-spacing:0.15em;text-transform:uppercase;margin-bottom:1.5vh;">01 有据可查的矛盾</div>
            <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.7;">他说以安全为核心，但2024年安全团队多名核心负责人相继离职，包括Ilya本人。他设计的非营利结构，在宫斗后加速向常规营利公司转型。</p>
          </div>
          <div style="flex:1;background:#FFFFFF;border-radius:4px;padding:3.5% 3%;border-top:3px solid var(--gold);">
            <div style="font-family:'Inter',sans-serif;font-weight:700;font-size:11px;color:var(--gold);letter-spacing:0.15em;text-transform:uppercase;margin-bottom:1.5vh;">02 他的核心逻辑</div>
            <p style="font-family:'Playfair Display',serif;font-style:italic;font-size:18px;color:var(--accent1);line-height:1.6;margin-bottom:1.5vh;">「如果AGI真的要到来，我宁愿它由一个认真对待安全的组织开发，而不是由不在乎安全的竞争者开发。」</p>
            <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.6;">这个逻辑建立在三个前提：AGI必然到来；OpenAI是最在乎安全的前沿实验室；放慢不会阻止AGI，只会改变谁来主导。</p>
          </div>
          <div style="flex:1;background:#F0EDE8;border-radius:4px;padding:3.5% 3%;border-top:3px solid var(--muted);">
            <div style="font-family:'Inter',sans-serif;font-weight:700;font-size:11px;color:var(--muted);letter-spacing:0.15em;text-transform:uppercase;margin-bottom:1.5vh;">03 可以质疑的地方</div>
            <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.7;">2024年安全团队大规模离职后，「OpenAI最在乎安全」这个前提是否仍成立？DeepSeek等竞争者的出现让假设更复杂。更根本的问题：这套逻辑与他的商业利益高度一致——这是真实信念还是合理化，无法从外部验证。</p>
          </div>
        </div>
      </div>
    </div>
""")

# SLIDE 37: CHAPTER CLOSE PART 07
w("""
    <!-- SLIDE 37: CHAPTER CLOSE PART 07 -->
    <div class="slide" id="slide-37" style="background:#FFFFFF;">
      <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8%;">
        <div style="max-width:720px;text-align:center;">
          <p style="font-family:'Playfair Display',serif;font-style:italic;font-weight:400;font-size:1.8vw;color:var(--accent1);line-height:1.65;margin-bottom:3vh;">Sam Altman身上所有看起来矛盾的东西，放在他的长期目标里看，全部自洽——让AGI真正到来，并且由他来主导这件事。这不是虚伪，是一个把所有手段都压在同一个目标上的人，必然呈现出的样子。</p>
          <div style="width:50px;height:1px;background:var(--gold);margin:0 auto 2.5vh;"></div>
        </div>
        <div style="position:absolute;bottom:5%;left:50%;transform:translateX(-50%);font-family:'Inter',sans-serif;font-size:0.7vw;color:var(--muted);opacity:0.5;letter-spacing:0.12em;text-transform:uppercase;">PART 07 / 贡献六</div>
      </div>
    </div>
""")

# SLIDE 38: CLOSING CHAPTER COVER
w("""
    <!-- SLIDE 38: CLOSING CHAPTER COVER -->
    <div class="slide" id="slide-38" style="background:#F5F2EE;">
      <div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;padding:0 8%;">
        <div style="position:relative;z-index:2;text-align:center;">
          <h2 style="font-family:'Playfair Display',serif;font-weight:700;font-size:4.5vw;color:var(--accent1);margin-bottom:2vh;line-height:1.15;">硅谷从不缺乏改变世界的人</h2>
          <div style="width:60px;height:2px;background:var(--gold);margin:0 auto 2vh;"></div>
          <p style="font-family:'Inter',sans-serif;font-weight:300;font-size:1.5vw;color:var(--muted);">但每一个人改变世界的方式都不一样</p>
        </div>
      </div>
    </div>
""")

# SLIDE 39: THREE LEGENDS COMPARISON (Fix D: 3 portrait circles instead of collage)
w("""
    <!-- SLIDE 39: THREE LEGENDS COMPARISON -->
    <div class="slide" id="slide-39" style="background:#F5F2EE;overflow:hidden;">
      <div style="width:100%;height:100%;display:flex;flex-direction:column;padding:4% 3%;">
        <div style="display:flex;gap:2%;flex:1;">
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:3% 3%;border-right:1px solid rgba(0,0,0,0.08);">
            <div style="width:200px;height:200px;border-radius:50%;overflow:hidden;margin-bottom:2.5vh;background:#e8e4de;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <span style="font-family:'Playfair Display',serif;font-weight:700;font-size:60px;color:var(--muted);">SJ</span>
            </div>
            <h3 style="font-family:'Playfair Display',serif;font-weight:700;font-size:2.5vw;color:var(--accent1);margin-bottom:1.5vh;">乔布斯</h3>
            <div style="width:30px;height:1px;background:var(--muted);margin-bottom:1.5vh;opacity:0.5;"></div>
            <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.75;text-align:center;">技术可以有美感，好的产品应该让人觉得理所当然。他留给我们的，是一个标准——在他之后，丑陋的科技产品变得难以被接受。</p>
          </div>
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:3% 3%;border-right:1px solid rgba(0,0,0,0.08);">
            <div style="width:200px;height:200px;border-radius:50%;overflow:hidden;margin-bottom:2.5vh;flex-shrink:0;">
              <img src="images/elon_musk.jpg" alt="Elon Musk" style="width:100%;height:100%;object-fit:cover;object-position:top center;">
            </div>
            <h3 style="font-family:'Playfair Display',serif;font-weight:700;font-size:2.5vw;color:var(--accent1);margin-bottom:1.5vh;">Elon Musk</h3>
            <div style="width:30px;height:1px;background:var(--muted);margin-bottom:1.5vh;opacity:0.5;"></div>
            <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.75;text-align:center;">人类的边界可以被推得更远。电动车、火星移民、脑机接口——他做的每一件事都在回答同一个问题：我们能走多远。</p>
          </div>
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:3% 3%;">
            <div style="width:200px;height:200px;border-radius:50%;overflow:hidden;margin-bottom:2.5vh;flex-shrink:0;">
              <img src="images/Sam奥特曼图片/01_Sam_Altman_正面头像.jpg" alt="Sam Altman" style="width:100%;height:100%;object-fit:cover;object-position:top center;">
            </div>
            <h3 style="font-family:'Playfair Display',serif;font-weight:700;font-size:2.5vw;color:var(--gold);margin-bottom:1.5vh;">Sam Altman</h3>
            <div style="width:30px;height:1px;background:var(--gold);margin-bottom:1.5vh;"></div>
            <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.75;text-align:center;">能把权力博弈、技术理想和对未来的洞察，全部压在同一个长期目标上。他身上所有看起来矛盾的东西，放在这个长期目标里看，全部自洽。</p>
          </div>
        </div>
      </div>
    </div>
""")

# SLIDE 40: CLOSING TEXT (Fix E: all text min 18px)
w("""
    <!-- SLIDE 40: CLOSING TEXT -->
    <div class="slide" id="slide-40" style="background:#FFFFFF;">
      <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8%;">
        <div style="max-width:700px;text-align:center;">
          <p style="font-family:'Inter',sans-serif;font-weight:400;font-size:18px;color:var(--accent1);line-height:1.9;margin-bottom:4vh;">这种把一件事想得极度清楚、然后用一切手段去实现它的能力，值得每一个普通人认真学习。不是学他的结论，而是学他思考问题的方式。</p>
          <div style="width:40px;height:1px;background:var(--gold);margin:0 auto 4vh;"></div>
          <p style="font-family:'Inter',sans-serif;font-weight:300;font-size:18px;color:var(--muted);line-height:1.85;margin-bottom:4vh;">这个系列，我们会持续介绍那些推动人类历史进程的人。不是仰望他们，而是和大家一起学习：AI是怎么走到今天的，接下来它会把我们带去哪里。</p>
          <p style="font-family:'Playfair Display',serif;font-style:italic;font-weight:400;font-size:2.5vw;color:var(--gold);">下一期，你想听谁？</p>
        </div>
      </div>
    </div>
""")

# SLIDE 41: END CARD
w("""
    <!-- SLIDE 41: END CARD -->
    <div class="slide" id="slide-41" style="background:#F5F2EE;">
      <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8%;">
        <h1 style="font-family:'Playfair Display',serif;font-weight:700;font-size:4.5vw;color:var(--accent1);margin-bottom:2.5vh;letter-spacing:0.03em;">大白话讲AI</h1>
        <div style="width:80px;height:2px;background:var(--gold);margin-bottom:3vh;"></div>
        <p style="font-family:'Inter',sans-serif;font-weight:300;font-size:18px;color:var(--gold);margin-bottom:1.2vh;letter-spacing:0.08em;">出品：大白话讲AI</p>
        <p style="font-family:'Inter',sans-serif;font-weight:300;font-size:18px;color:var(--muted);letter-spacing:0.05em;">发行人：谢谢Miss</p>
        <div style="margin-top:5vh;display:flex;gap:2vw;align-items:center;">
          <div style="width:8px;height:8px;border-radius:50%;background:var(--gold);opacity:0.6;"></div>
          <div style="width:6px;height:6px;border-radius:50%;background:var(--gold);opacity:0.4;"></div>
          <div style="width:4px;height:4px;border-radius:50%;background:var(--gold);opacity:0.2;"></div>
        </div>
      </div>
    </div>

  </div><!-- end slides-wrapper -->
</div><!-- end presentation -->

<!-- Fixed UI -->
<div id="progress-bar"></div>
<div id="slide-counter">01 / 41</div>
<div id="chapter-indicator"></div>

<script>
const totalSlides = 41;
let currentSlide = 1;

const chapters = {
  1: '',
  2: 'PART 01 \u00b7 \u4ed6\u662f\u8c01',
  3: 'PART 01 \u00b7 \u4ed6\u662f\u8c01',
  4: 'PART 01 \u00b7 \u4ed6\u662f\u8c01',
  5: 'PART 01 \u00b7 \u4ed6\u662f\u8c01',
  6: 'PART 02 \u00b7 \u8d21\u732e\u4e00',
  7: 'PART 02 \u00b7 \u8d21\u732e\u4e00',
  8: 'PART 02 \u00b7 \u8d21\u732e\u4e00',
  9: 'PART 02 \u00b7 \u8d21\u732e\u4e00',
  10: 'PART 02 \u00b7 \u8d21\u732e\u4e00',
  11: 'PART 02 \u00b7 \u8d21\u732e\u4e00',
  12: 'PART 03 \u00b7 \u8d21\u732e\u4e8c',
  13: 'PART 03 \u00b7 \u8d21\u732e\u4e8c',
  14: 'PART 03 \u00b7 \u8d21\u732e\u4e8c',
  15: 'PART 03 \u00b7 \u8d21\u732e\u4e8c',
  16: 'PART 03 \u00b7 \u8d21\u732e\u4e8c',
  17: 'PART 04 \u00b7 \u8d21\u732e\u4e09',
  18: 'PART 04 \u00b7 \u8d21\u732e\u4e09',
  19: 'PART 04 \u00b7 \u8d21\u732e\u4e09',
  20: 'PART 04 \u00b7 \u8d21\u732e\u4e09',
  21: 'PART 04 \u00b7 \u8d21\u732e\u4e09',
  22: 'PART 04 \u00b7 \u8d21\u732e\u4e09',
  23: 'PART 05 \u00b7 \u8d21\u732e\u56db',
  24: 'PART 05 \u00b7 \u8d21\u732e\u56db',
  25: 'PART 05 \u00b7 \u8d21\u732e\u56db',
  26: 'PART 05 \u00b7 \u8d21\u732e\u56db',
  27: 'PART 05 \u00b7 \u8d21\u732e\u56db',
  28: 'PART 06 \u00b7 \u8d21\u732e\u4e94',
  29: 'PART 06 \u00b7 \u8d21\u732e\u4e94',
  30: 'PART 06 \u00b7 \u8d21\u732e\u4e94',
  31: 'PART 06 \u00b7 \u8d21\u732e\u4e94',
  32: 'PART 06 \u00b7 \u8d21\u732e\u4e94',
  33: 'PART 06 \u00b7 \u8d21\u732e\u4e94',
  34: 'PART 07 \u00b7 \u8d21\u732e\u516d',
  35: 'PART 07 \u00b7 \u8d21\u732e\u516d',
  36: 'PART 07 \u00b7 \u8d21\u732e\u516d',
  37: 'PART 07 \u00b7 \u8d21\u732e\u516d',
  38: '',
  39: '',
  40: '',
  41: ''
};

function goToSlide(n) {
  if (n < 1 || n > totalSlides) return;
  document.getElementById('slide-' + currentSlide).classList.remove('active');
  currentSlide = n;
  document.getElementById('slide-' + currentSlide).classList.add('active');
  
  const counter = document.getElementById('slide-counter');
  counter.textContent = String(currentSlide).padStart(2,'0') + ' / ' + String(totalSlides).padStart(2,'0');
  
  const progress = document.getElementById('progress-bar');
  progress.style.width = ((currentSlide / totalSlides) * 100) + '%';
  
  const chapterEl = document.getElementById('chapter-indicator');
  chapterEl.textContent = chapters[currentSlide] || '';
}

function next() { goToSlide(currentSlide + 1); }
function prev() { goToSlide(currentSlide - 1); }

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); next(); }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prev(); }
});

document.getElementById('presentation').addEventListener('click', function(e) {
  const rect = this.getBoundingClientRect();
  const x = e.clientX - rect.left;
  if (x < rect.width * 0.2) { prev(); }
  else { next(); }
});

// Init
goToSlide(1);
</script>
</body>
</html>
""")

print("Slides 34-41 + footer done")
out.close()
