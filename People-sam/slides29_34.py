# -*- coding: utf-8 -*-
out = open('/Users/wenmac/Downloads/PPT_Sam/index.html', 'a', encoding='utf-8')
def w(s): out.write(s)

# SLIDE 29: FIRING NARRATIVE OPENING
w("""
    <!-- SLIDE 29: FIRING NARRATIVE OPENING -->
    <div class="slide" id="slide-29" style="background:#F5F2EE;">
      <div style="display:flex;width:100%;height:100%;">
        <div style="width:30%;height:100%;position:relative;overflow:hidden;">
          <img src="images/Sam\u5965\u7279\u66fc\u56fe\u724728_F1_\u62c9\u65af\u7ef4\u52a0\u65af.jpg" alt="F1 Las Vegas" style="width:100%;height:100%;object-fit:cover;">
          <div style="position:absolute;inset:0;background:linear-gradient(to right,transparent 70%,#F5F2EE 100%);"></div>
        </div>
        <div style="width:70%;height:100%;display:flex;flex-direction:column;justify-content:center;padding:5% 6% 5% 3%;">
          <div style="font-family:'Inter',sans-serif;font-size:0.7vw;font-weight:400;color:var(--gold);letter-spacing:0.12em;margin-bottom:1.5vh;">2023\u5e7411\u670817\u65e5\uff0c\u661f\u671f\u4e94\u4e0b\u5348</div>
          <h2 style="font-family:'Playfair Display',serif;font-weight:700;font-size:3vw;color:var(--accent1);margin-bottom:2vh;line-height:1.2;">Sam Altman\u6b63\u5728\u62c9\u65af\u7ef4\u52a0\u65af\u770bF1\u5927\u5956\u8d5b</h2>
          <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.75;margin-bottom:2vh;">\u7a81\u7136\u6536\u5230\u901a\u77e5\uff0c\u88ab\u8981\u6c42\u52a0\u5165\u4e00\u4e2aGoogle Meet\u4f1a\u8bae\u3002\u8fdb\u5165\u4f1a\u8bae\u524d5\u523010\u5206\u949f\uff0c\u4ed6\u624d\u77e5\u9053\uff1a\u8fd9\u4e2a\u4f1a\u8bae\u662f\u6765\u89e3\u96c7\u4ed6\u7684\u3002</p>
          <p style="font-family:'Inter',sans-serif;font-size:18px;color:var(--muted);line-height:1.75;margin-bottom:2vh;">\u5b98\u65b9\u7406\u7531\u662f\u300c\u672a\u80fd\u59cb\u7ec8\u5982\u4e00\u5730\u5bf9\u8463\u4e8b\u4f1a\u5766\u8bda\u300d\u2014\u2014\u6ca1\u6709\u5177\u4f53\u4e8b\u4ef6\uff0c\u6ca1\u6709\u8c03\u67e5\u7a0b\u5e8f\uff0c\u63aa\u8f9e\u523b\u610f\u6a21\u7cca\u3002</p>
          <div style="border-left:3px solid var(--gold);padding:1.5vh 1.5vw;background:rgba(200,169,110,0.06);">
            <p style="font-family:'Playfair Display',serif;font-style:italic;font-size:1.8vw;color:var(--gold);">\u4e94\u5929\u540e\uff0c\u4ed6\u56de\u6765\u4e86\u3002\u539f\u6765\u7684\u8463\u4e8b\u4f1a\uff0c\u5168\u90e8\u6362\u8840\u3002</p>
          </div>
        </div>
      </div>
    </div>
""")

print("Slide 29 written, closing")
out.close()
