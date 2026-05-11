# -*- coding: utf-8 -*-
out = open('/Users/wenmac/Downloads/PPT_Sam/index.html', 'a', encoding='utf-8')
def w(s): out.write(s)

# SLIDE 14: YC EXPLAINER CARD
w("""
    <!-- SLIDE 14: YC EXPLAINER CARD -->
    <div class="slide" id="slide-14" style="background:#FFFFFF;">
      <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8%;">
        <div style="display:flex;align-items:center;gap:3vw;margin-bottom:3vh;">
          <img src="images/yc_logo.png" alt="YC" style="height:7vh;object-fit:contain;opacity:0.7;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
          <div style="display:none;width:80px;height:80px;background:#FF6600;border-radius:10px;align-items:center;justify-content:center;"><span style="color:#fff;font-weight:700;font-size:28px;font-family:'Inter',sans-serif;">YC</span></div>
        </div>
        <h2 style="font-family:'Playfair Display',serif;font-weight:700;font-size:4.5vw;color:var(--accent1);margin-bottom:1.5vh;text-align:center;">Y Combinator（YC）</h2>
        <p style="font-family:'Inter',sans-serif;font-weight:300;font-size:1.4vw;color:var(--gold);margin-bottom:3vh;text-align:center;">全球最有影响力的早期创业孵化器</p>
        <div style="width:50px;height:1px;background:var(--gold);margin-bottom:3vh;"></div>
        <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);text-align:center;margin-bottom:2vh;line-height:1.7;">孵化了Airbnb、Dropbox、Stripe、Reddit，还有后来的OpenAI。</p>
        <p style="font-family:'Inter',sans-serif;font-weight:300;font-size:18px;color:var(--muted);text-align:center;letter-spacing:0.05em;">每年两期，每期投资约200家早期公司。</p>
      </div>
    </div>
""")

# SLIDE 15: WHAT YC REALLY GAVE HIM
w("""
    <!-- SLIDE 15: WHAT YC REALLY GAVE HIM -->
    <div class="slide" id="slide-15" style="background:#F5F2EE;">
      <div style="display:flex;width:100%;height:100%;">
        <div style="width:50%;height:100%;position:relative;overflow:hidden;">
          <img src="images/sam_altman_yc.jpg" alt="Sam at YC" style="width:100%;height:100%;object-fit:cover;object-position:top center;">
          <div style="position:absolute;inset:0;background:linear-gradient(to right,transparent 60%,#F5F2EE 100%);"></div>
        </div>
        <div style="width:50%;height:100%;display:flex;flex-direction:column;justify-content:center;padding:5% 7% 5% 4%;">
          <div style="font-family:'Inter',sans-serif;font-size:0.7vw;font-weight:400;color:var(--gold);letter-spacing:0.12em;margin-bottom:1.5vh;">他真正得到的不是人脉</div>
          <h2 style="font-family:'Playfair Display',serif;font-weight:700;font-size:3.8vw;color:var(--accent1);margin-bottom:2.5vh;line-height:1.1;">人脉是副产品</h2>
          <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.78;margin-bottom:2.5vh;">真正的收获是：五年内，他接触了极高密度的创业项目和创始人，亲眼看到什么东西会成功、什么东西注定失败。这种输入，训练出了一种具体的能力——在别人还看不清的时候，判断「这件事有没有真正的价值」。</p>
          <div style="border-left:3px solid var(--gold);padding:1.5vh 1.5vw;background:rgba(200,169,110,0.06);border-radius:0 4px 4px 0;">
            <p style="font-family:'Playfair Display',serif;font-style:italic;font-size:1.5vw;color:var(--gold);margin-bottom:0.8vh;line-height:1.4;">「Sam总是比我们早半步知道接下来会发生什么。」</p>
            <p style="font-family:'Inter',sans-serif;font-weight:300;font-size:18px;color:var(--muted);">—— YC创始人</p>
          </div>
        </div>
      </div>
    </div>
""")

# SLIDE 16: CHAPTER CLOSE PART 03
w("""
    <!-- SLIDE 16: CHAPTER CLOSE PART 03 -->
    <div class="slide" id="slide-16" style="background:#FFFFFF;">
      <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8%;">
        <div style="max-width:720px;text-align:center;">
          <p style="font-family:'Playfair Display',serif;font-style:italic;font-weight:400;font-size:1.8vw;color:var(--accent1);line-height:1.65;margin-bottom:3vh;">Loopt的失败教会了他「超前于时代是要付出代价的」，YC的五年教会了他「什么样的时机才是真正的时机」。没有这段经历，他很可能只是一个押注过早、又一次失败的创业者。</p>
          <div style="width:50px;height:1px;background:var(--gold);margin:0 auto 2.5vh;"></div>
        </div>
        <div style="position:absolute;bottom:5%;left:50%;transform:translateX(-50%);font-family:'Inter',sans-serif;font-size:0.7vw;color:var(--muted);opacity:0.5;letter-spacing:0.12em;text-transform:uppercase;">PART 03 / 贡献二</div>
      </div>
    </div>
""")

print("Slides 14-16 done")
out.close()
