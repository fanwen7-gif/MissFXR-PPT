# -*- coding: utf-8 -*-
out = open('/Users/wenmac/Downloads/PPT_Sam/index.html', 'a', encoding='utf-8')
def w(s): out.write(s)

# SLIDE 17: PART 04 CHAPTER COVER
w("""
    <!-- SLIDE 17: PART 04 CHAPTER COVER -->
    <div class="slide" id="slide-17" style="background:#F5F2EE;">
      <div style="position:absolute;bottom:6%;right:6%;z-index:2;">
        <img src="images/microsoft_openai.jpg" alt="Microsoft OpenAI" style="width:14vw;height:9vw;object-fit:cover;border-radius:4px;opacity:0.7;">
      </div>
      <div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;padding:0 8%;">
        <div style="position:absolute;font-family:'Inter',sans-serif;font-weight:900;font-size:18vw;color:rgba(26,26,26,0.04);line-height:1;user-select:none;pointer-events:none;white-space:nowrap;">PART 04</div>
        <div style="position:relative;z-index:2;">
          <div style="font-family:'Inter',sans-serif;font-size:0.9vw;font-weight:600;color:var(--gold);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:2vh;">PART 04</div>
          <h2 style="font-family:'Playfair Display',serif;font-weight:700;font-size:4vw;color:var(--accent1);margin-bottom:2vh;line-height:1.2;">贡献三：运筹帷幄，资本博弈</h2>
          <div style="width:60px;height:2px;background:var(--gold);margin-bottom:2vh;"></div>
          <p style="font-family:'Inter',sans-serif;font-weight:300;font-size:1.4vw;color:var(--muted);">使不可能变为可能</p>
        </div>
      </div>
    </div>
""")

# SLIDE 18: TRAINING COST DATA
w("""
    <!-- SLIDE 18: TRAINING COST DATA -->
    <div class="slide" id="slide-18" style="background:#FFFFFF;">
      <div style="padding:5% 8%;height:100%;display:flex;flex-direction:column;justify-content:center;">
        <h2 style="font-family:'Playfair Display',serif;font-weight:700;font-size:2.8vw;color:var(--accent1);margin-bottom:0.8vh;">研究AGI需要烧掉天文数字的钱</h2>
        <p style="font-family:'Inter',sans-serif;font-weight:300;font-size:18px;color:var(--muted);margin-bottom:3.5vh;">而且是指数级增长的那种</p>
        <div style="display:flex;flex-direction:column;gap:2.5vh;margin-bottom:3.5vh;">
          <div style="display:flex;align-items:center;gap:2%;">
            <div style="width:12%;font-family:'Inter',sans-serif;font-weight:600;font-size:18px;color:var(--accent1);">GPT-2</div>
            <div style="flex:1;height:28px;background:#F0EDE8;border-radius:2px;overflow:hidden;"><div style="width:0.5%;height:100%;background:var(--muted);opacity:0.4;"></div></div>
            <div style="width:28%;text-align:right;">
              <div style="font-family:'Inter',sans-serif;font-weight:700;font-size:18px;color:var(--muted);">约4万美元（28万人民币）</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:2%;">
            <div style="width:12%;font-family:'Inter',sans-serif;font-weight:600;font-size:18px;color:var(--accent1);">GPT-3</div>
            <div style="flex:1;height:28px;background:#F0EDE8;border-radius:2px;overflow:hidden;"><div style="width:5%;height:100%;background:var(--blue);opacity:0.6;"></div></div>
            <div style="width:28%;text-align:right;">
              <div style="font-family:'Inter',sans-serif;font-weight:700;font-size:18px;color:var(--blue);">约460万美元（3300万人民币）</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:2%;">
            <div style="width:12%;font-family:'Inter',sans-serif;font-weight:600;font-size:18px;color:var(--accent1);">GPT-4</div>
            <div style="flex:1;height:28px;background:#F0EDE8;border-radius:2px;overflow:hidden;"><div style="width:35%;height:100%;background:var(--burgundy);opacity:0.6;"></div></div>
            <div style="width:28%;text-align:right;">
              <div style="font-family:'Inter',sans-serif;font-weight:700;font-size:18px;color:var(--burgundy);">超过1亿美元（约7亿人民币）</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:2%;">
            <div style="width:12%;font-family:'Inter',sans-serif;font-weight:600;font-size:18px;color:var(--accent1);">GPT-5</div>
            <div style="flex:1;height:28px;background:#F0EDE8;border-radius:2px;overflow:hidden;"><div style="width:100%;height:100%;background:linear-gradient(to right,var(--gold),#8B3A3A);"></div></div>
            <div style="width:28%;text-align:right;">
              <div style="font-family:'Inter',sans-serif;font-weight:700;font-size:18px;color:var(--accent1);">估算17–25亿美元（约120–180亿人民币）</div>
            </div>
          </div>
        </div>
        <div style="border-top:1px solid rgba(0,0,0,0.08);padding-top:2.5vh;">
          <p style="font-family:'Playfair Display',serif;font-weight:700;font-size:2.5vw;color:var(--gold);">六年时间，涨了约<span style="color:var(--accent1);">6万倍</span></p>
        </div>
      </div>
    </div>
""")

# SLIDE 19: COMPARISON ANCHORING
w("""
    <!-- SLIDE 19: COMPARISON ANCHORING -->
    <div class="slide" id="slide-19" style="background:#F5F2EE;">
      <div style="width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;padding:6% 10%;">
        <h2 style="font-family:'Playfair Display',serif;font-weight:700;font-size:3.2vw;color:var(--accent1);margin-bottom:3.5vh;line-height:1.2;">对比一下</h2>
        <div style="display:flex;gap:3%;margin-bottom:3.5vh;">
          <div style="flex:1;background:#fff;border-radius:4px;padding:3.5% 4%;border-left:4px solid var(--blue);box-shadow:0 2px 12px rgba(0,0,0,0.05);">
            <div style="font-family:'Inter',sans-serif;font-weight:700;font-size:18px;color:var(--blue);margin-bottom:1.2vh;">小米 2023年全年研发总投入</div>
            <div style="font-family:'Inter',sans-serif;font-weight:900;font-size:2.8vw;color:var(--accent1);line-height:1;margin-bottom:1vh;">191亿</div>
            <div style="font-family:'Inter',sans-serif;font-weight:300;font-size:13px;color:var(--muted);letter-spacing:0.05em;text-transform:uppercase;margin-bottom:1.5vh;">人民币</div>
            <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.65;">训练一个GPT-5相当于花掉小米半年到一年的研发预算</p>
          </div>
          <div style="flex:1;background:#fff;border-radius:4px;padding:3.5% 4%;border-left:4px solid var(--burgundy);box-shadow:0 2px 12px rgba(0,0,0,0.05);">
            <div style="font-family:'Inter',sans-serif;font-weight:700;font-size:18px;color:var(--burgundy);margin-bottom:1.2vh;">清华大学 2023年全年科研经费</div>
            <div style="font-family:'Inter',sans-serif;font-weight:900;font-size:2.8vw;color:var(--accent1);line-height:1;margin-bottom:1vh;">126亿</div>
            <div style="font-family:'Inter',sans-serif;font-weight:300;font-size:13px;color:var(--muted);letter-spacing:0.05em;text-transform:uppercase;margin-bottom:1.5vh;">人民币</div>
            <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.65;">训练一个GPT-5相当于清华大学2023年全年科研经费</p>
          </div>
        </div>
        <div style="border-top:1px solid rgba(0,0,0,0.08);padding-top:2.5vh;">
          <p style="font-family:'Playfair Display',serif;font-style:italic;font-size:1.8vw;color:var(--muted);">这种规模，靠捐款的非营利机构根本撑不住。</p>
        </div>
      </div>
    </div>
""")

print("Slides 17-19 done")
out.close()
