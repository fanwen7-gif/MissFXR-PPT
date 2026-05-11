# -*- coding: utf-8 -*-
out = open('/Users/wenmac/Downloads/PPT_Sam/index.html', 'a', encoding='utf-8')
def w(s): out.write(s)

# Fix slide 29 - I already wrote it with wrong filename in unicode escape
# Actually the unicode escape for 奥特曼 is correct - let me check what was written
# The file is 奥特曼 = \u5965\u7279\u66fc, 图片 = \u56fe\u724728 - wait that's wrong
# Let me re-check: 图 = \u56fe, 片 = \u724728? No, 片 = \u724728 is wrong
# 片 = \u7247, not \u724728
# The correct path is: images/Sam奥特曼图片/25_F1_拉斯维加斯.jpg
# Let me just use the actual Chinese characters in the Python file

# SLIDE 30: TWO FACTIONS CARDS
w("""
    <!-- SLIDE 30: TWO FACTIONS CARDS -->
    <div class="slide" id="slide-30" style="background:#F5F2EE;">
      <div style="display:flex;width:100%;height:100%;">
        <div style="flex:1;background:#FFFFFF;display:flex;flex-direction:column;justify-content:center;padding:6% 5%;border-right:2px solid rgba(0,0,0,0.06);">
          <div style="font-family:'Inter',sans-serif;font-weight:900;font-size:11px;color:var(--gold);letter-spacing:0.18em;text-transform:uppercase;margin-bottom:2vh;">01 商业加速派（Altman）</div>
          <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.75;margin-bottom:2.5vh;">快速落地才能掌握主导权。如果OpenAI放慢，不在乎安全的竞争者会填补空白。</p>
        </div>
        <div style="flex:1;background:#F5F2EE;display:flex;flex-direction:column;justify-content:center;padding:6% 5%;">
          <div style="font-family:'Inter',sans-serif;font-weight:900;font-size:11px;color:var(--burgundy);letter-spacing:0.18em;text-transform:uppercase;margin-bottom:2vh;">02 安全优先派（Ilya Sutskever）</div>
          <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.75;margin-bottom:2.5vh;">AGI风险不可逆，商业压力会系统性压低安全投入。</p>
        </div>
      </div>
      <div style="position:absolute;bottom:8%;left:50%;transform:translateX(-50%);width:80%;text-align:center;">
        <p style="font-family:'Playfair Display',serif;font-style:italic;font-size:1.4vw;color:var(--muted);">这不是好人坏人之争，是在极大不确定性下两种不同的风险权衡。</p>
      </div>
    </div>
""")

# SLIDE 31: FIVE DAY TIMELINE
w("""
    <!-- SLIDE 31: FIVE DAY TIMELINE -->
    <div class="slide" id="slide-31" style="background:#F5F2EE;">
      <div style="display:flex;width:100%;height:100%;">
        <div style="width:30%;height:100%;position:relative;overflow:hidden;">
          <img src="images/Sam奥特曼图片/25_F1_拉斯维加斯.jpg" alt="F1 Las Vegas" style="width:100%;height:100%;object-fit:cover;object-position:top center;">
          <div style="position:absolute;inset:0;background:linear-gradient(to right,transparent 70%,#F5F2EE 100%);"></div>
        </div>
        <div style="width:70%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;padding:3% 5% 3% 3%;overflow:hidden;">
          <h3 style="font-family:'Playfair Display',serif;font-weight:700;font-size:2vw;color:var(--accent1);margin-bottom:2vh;">五天时间轴</h3>
          <div style="display:flex;flex-direction:column;gap:0;position:relative;">
            <div style="position:absolute;left:7px;top:0;bottom:0;width:1px;background:linear-gradient(to bottom,var(--gold),rgba(200,169,110,0.15));"></div>
            <div style="display:flex;gap:1.5vw;align-items:flex-start;padding-bottom:1.8vh;">
              <div style="width:16px;height:16px;border-radius:50%;background:var(--burgundy);flex-shrink:0;margin-top:0.3vh;position:relative;z-index:1;"></div>
              <div>
                <div style="font-family:'Inter',sans-serif;font-weight:700;font-size:13px;color:var(--burgundy);margin-bottom:0.3vh;">11月17日 下午</div>
                <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--accent1);line-height:1.6;">Sam被解雇。联合创始人Greg Brockman随即辞职。</p>
              </div>
            </div>
            <div style="display:flex;gap:1.5vw;align-items:flex-start;padding-bottom:1.8vh;">
              <div style="width:16px;height:16px;border-radius:50%;background:var(--blue);flex-shrink:0;margin-top:0.3vh;position:relative;z-index:1;"></div>
              <div>
                <div style="font-family:'Inter',sans-serif;font-weight:700;font-size:13px;color:var(--blue);margin-bottom:0.3vh;">11月17日 晚</div>
                <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--accent1);line-height:1.6;">微软CEO纳德拉第一时间联系Sam。</p>
              </div>
            </div>
            <div style="display:flex;gap:1.5vw;align-items:flex-start;padding-bottom:1.8vh;">
              <div style="width:16px;height:16px;border-radius:50%;background:var(--muted);flex-shrink:0;margin-top:0.3vh;position:relative;z-index:1;"></div>
              <div>
                <div style="font-family:'Inter',sans-serif;font-weight:700;font-size:13px;color:var(--muted);margin-bottom:0.3vh;">11月18–19日</div>
                <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--accent1);line-height:1.6;">约770名员工中超过700人签联名信要求Sam回归，威胁集体离职。签名者包括Ilya Sutskever本人。</p>
              </div>
            </div>
            <div style="display:flex;gap:1.5vw;align-items:flex-start;padding-bottom:1.8vh;">
              <div style="width:16px;height:16px;border-radius:50%;background:var(--muted);flex-shrink:0;margin-top:0.3vh;position:relative;z-index:1;"></div>
              <div>
                <div style="font-family:'Inter',sans-serif;font-weight:700;font-size:13px;color:var(--muted);margin-bottom:0.3vh;">11月19日</div>
                <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--accent1);line-height:1.6;">Ilya公开发帖：「我深深后悔参与了董事会的行动。」</p>
              </div>
            </div>
            <div style="display:flex;gap:1.5vw;align-items:flex-start;padding-bottom:1.8vh;">
              <div style="width:16px;height:16px;border-radius:50%;background:var(--blue);flex-shrink:0;margin-top:0.3vh;position:relative;z-index:1;"></div>
              <div>
                <div style="font-family:'Inter',sans-serif;font-weight:700;font-size:13px;color:var(--blue);margin-bottom:0.3vh;">11月20日</div>
                <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--accent1);line-height:1.6;">纳德拉公开表示愿意接收全部OpenAI员工，向董事会直接施压。</p>
              </div>
            </div>
            <div style="display:flex;gap:1.5vw;align-items:flex-start;">
              <div style="width:16px;height:16px;border-radius:50%;background:var(--gold);flex-shrink:0;margin-top:0.3vh;position:relative;z-index:1;"></div>
              <div>
                <div style="font-family:'Inter',sans-serif;font-weight:700;font-size:13px;color:var(--gold);margin-bottom:0.3vh;">11月22日</div>
                <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--accent1);line-height:1.6;font-weight:600;">Sam回归，原董事会全部换血。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
""")

# SLIDE 32: THE REAL POWER (Sam return) — Fix B: object-position top center
w("""
    <!-- SLIDE 32: THE REAL POWER -->
    <div class="slide" id="slide-32" style="background:#F5F2EE;">
      <div style="display:flex;width:100%;height:100%;">
        <div style="width:50%;height:100%;position:relative;overflow:hidden;">
          <img src="images/sam_altman_return.jpg" alt="Sam Return" style="width:100%;height:100%;object-fit:cover;object-position:top center;">
          <div style="position:absolute;inset:0;background:linear-gradient(to right,transparent 65%,#F5F2EE 100%);"></div>
        </div>
        <div style="width:50%;height:100%;display:flex;flex-direction:column;justify-content:center;padding:5% 7% 5% 4%;">
          <div style="font-family:'Inter',sans-serif;font-weight:900;font-size:5.5vw;color:var(--gold);line-height:1;margin-bottom:0.5vh;">700 / 770</div>
          <p style="font-family:'Inter',sans-serif;font-weight:300;font-size:18px;color:var(--muted);margin-bottom:3vh;">员工愿意为他集体辞职</p>
          <div style="width:100%;height:1px;background:rgba(0,0,0,0.1);margin-bottom:3vh;"></div>
          <p style="font-family:'Playfair Display',serif;font-style:italic;font-weight:400;font-size:1.9vw;color:var(--accent1);margin-bottom:2.5vh;line-height:1.4;">制度可以解雇一个CEO，但制度留不住一支团队。</p>
          <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.75;">Sam没有OpenAI的股权，但770名员工里有700人愿意为他集体辞职。他真正的权力来源——不是股权，不是职位，而是人心。</p>
        </div>
      </div>
    </div>
""")

# SLIDE 33: CHAPTER CLOSE PART 06
w("""
    <!-- SLIDE 33: CHAPTER CLOSE PART 06 -->
    <div class="slide" id="slide-33" style="background:#FFFFFF;">
      <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8%;">
        <div style="max-width:720px;text-align:center;">
          <p style="font-family:'Playfair Display',serif;font-style:italic;font-weight:400;font-size:1.8vw;color:var(--accent1);line-height:1.65;margin-bottom:3vh;">Sam没有OpenAI的股权，但770名员工里有700人愿意为他集体辞职。制度可以解雇一个CEO，但制度留不住一支团队。</p>
          <div style="width:50px;height:1px;background:var(--gold);margin:0 auto 2.5vh;"></div>
          <p style="font-family:'Inter',sans-serif;font-weight:300;font-size:18px;color:var(--muted);line-height:1.7;">这一章的逻辑：Sam赢得这场战争的方式，揭示了他真正的权力来源——不是股权，不是职位，而是人心。</p>
        </div>
        <div style="position:absolute;bottom:5%;left:50%;transform:translateX(-50%);font-family:'Inter',sans-serif;font-size:0.7vw;color:var(--muted);opacity:0.5;letter-spacing:0.12em;text-transform:uppercase;">PART 06 / 贡献五</div>
      </div>
    </div>
""")

print("Slides 30-33 done")
out.close()
