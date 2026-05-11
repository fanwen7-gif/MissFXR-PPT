# -*- coding: utf-8 -*-
out = open('/Users/wenmac/Downloads/PPT_Sam/index.html', 'a', encoding='utf-8')
def w(s): out.write(s)

# SLIDE 12: PART 03 CHAPTER COVER
w("""
    <!-- SLIDE 12: PART 03 CHAPTER COVER -->
    <div class="slide" id="slide-12" style="background:#F0EDE8;">
      <div style="position:absolute;top:4%;right:5%;z-index:3;">
        <img src="images/yc_logo.png" alt="YC" style="height:5vh;object-fit:contain;opacity:0.5;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
        <div style="display:none;width:60px;height:60px;background:#FF6600;border-radius:8px;align-items:center;justify-content:center;"><span style="color:#fff;font-weight:700;font-size:22px;font-family:'Inter',sans-serif;">YC</span></div>
      </div>
      <div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;padding:0 8%;">
        <div style="position:absolute;font-family:'Inter',sans-serif;font-weight:900;font-size:18vw;color:rgba(26,26,26,0.04);line-height:1;user-select:none;pointer-events:none;white-space:nowrap;">PART 03</div>
        <div style="position:relative;z-index:2;">
          <div style="font-family:'Inter',sans-serif;font-size:0.9vw;font-weight:600;color:var(--gold);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:2vh;">PART 03</div>
          <h2 style="font-family:'Playfair Display',serif;font-weight:700;font-size:4.2vw;color:var(--accent1);margin-bottom:2vh;line-height:1.2;">贡献二：判断力的来源</h2>
          <div style="width:60px;height:2px;background:var(--gold);margin-bottom:2vh;"></div>
          <p style="font-family:'Inter',sans-serif;font-weight:300;font-size:1.3vw;color:var(--muted);">YC五年，训练出识别真实价值的能力</p>
        </div>
      </div>
    </div>
""")

# SLIDE 13: TIMELINE LOOPT + YC
w("""
    <!-- SLIDE 13: TIMELINE LOOPT + YC -->
    <div class="slide" id="slide-13" style="background:#F5F2EE;">
      <div style="padding:5% 7%;height:100%;display:flex;flex-direction:column;justify-content:center;">
        <div style="display:flex;gap:8%;height:80%;">
          <div style="flex:1;position:relative;">
            <div style="font-family:'Playfair Display',serif;font-weight:900;font-size:8vw;color:rgba(26,26,26,0.06);line-height:1;position:absolute;top:0;left:0;user-select:none;">失败</div>
            <div style="position:relative;z-index:1;padding-top:6vh;">
              <div style="font-family:'Inter',sans-serif;font-weight:900;font-size:3vw;color:var(--muted);opacity:0.5;margin-bottom:1.5vh;">2005</div>
              <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.75;">19岁从斯坦福辍学，创办Loopt——一个在iPhone发布两年前就想做「实时查看朋友位置」的移动社交App。融资超过3000万美元，用户始终无法规模化，2012年以4340万美元出售。第一次创业，失败了。</p>
            </div>
          </div>
          <div style="width:1px;background:rgba(0,0,0,0.08);align-self:stretch;"></div>
          <div style="flex:1;position:relative;">
            <div style="font-family:'Playfair Display',serif;font-weight:900;font-size:8vw;color:rgba(26,26,26,0.06);line-height:1;position:absolute;top:0;left:0;user-select:none;">积累</div>
            <div style="position:relative;z-index:1;padding-top:6vh;display:flex;flex-direction:column;gap:3vh;">
              <div>
                <div style="font-family:'Inter',sans-serif;font-weight:900;font-size:3vw;color:var(--gold);opacity:0.7;margin-bottom:1.5vh;">2014</div>
                <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.75;">YC联合创始人Paul Graham退休，29岁的Sam接班，成为总裁。</p>
              </div>
              <div>
                <div style="font-family:'Inter',sans-serif;font-weight:900;font-size:3vw;color:var(--accent1);opacity:0.6;margin-bottom:1.5vh;">2019</div>
                <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.75;">卸任。任期内YC累计帮助超过1900家公司。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
""")

print("Slides 12-13 done")
out.close()
