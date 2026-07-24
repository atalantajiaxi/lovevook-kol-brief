(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(e){if(e.ep)return;e.ep=!0;const l=s(e);fetch(e.href,l)}})();class r{constructor(){this.currentIndex=0,this.slides=[],this.totalSlides=0,this.viewport=document.getElementById("ppt-viewport"),this.prevBtn=document.getElementById("prevBtn"),this.nextBtn=document.getElementById("nextBtn"),this.progressBarFill=document.getElementById("progressBarFill"),this.pageIndicator=document.getElementById("pageIndicator"),this.init(),this.initWindowMessage()}init(){this.loadSlides(),this.bindEvents(),this.initializePage(),this.updateUI(),this.updateViewportScale()}initWindowMessage(){window.addEventListener("message",t=>{if(!t.data||typeof t.data!="object")return;const{type:s,data:a}=t.data;s==="childrenstart"?(this.prevBtn.style.visibility="hidden",this.nextBtn.style.visibility="hidden",this.progressBarFill.style.visibility="hidden",this.pageIndicator.style.visibility="hidden"):s==="childrenstop"&&(this.prevBtn.style.visibility="visible",this.nextBtn.style.visibility="visible",this.progressBarFill.style.visibility="visible",this.pageIndicator.style.visibility="visible")})}initializePage(){const t=new URLSearchParams(window.location.search);let s=t.get("page");if(!s){s="1",t.set("page","1");const l=`${window.location.pathname}?${t.toString()}`;window.history.replaceState({},"",l)}const a=parseInt(s,10),e=a-1;if(!isNaN(a)&&e>=0&&e<this.totalSlides)this.slides[0]&&this.slides[0].classList.remove("active"),this.currentIndex=e,this.slides[e]&&this.slides[e].classList.add("active");else{console.warn(`无效的页码参数: ${s}，将显示第 1 页`),t.set("page","1");const l=`${window.location.pathname}?${t.toString()}`;window.history.replaceState({},"",l)}}loadSlides(){if(typeof window.slideDataMap>"u"){console.error("未找到 slideDataMap");return}const t=Array.from(window.slideDataMap.keys()).sort((s,a)=>s-a);if(this.totalSlides=t.length,this.totalSlides===0){console.warn("slideDataMap 为空，没有幻灯片可加载");return}t.forEach((s,a)=>{const e=document.createElement("div");e.className="slide",a===0&&e.classList.add("active");const l=window.slideDataMap.get(s);if(!l||typeof l!="string"){this.totalSlides--,console.error(`未找到页码 ${s} 的内容, 或者页码 ${s} 的内容为空`);return}const i=document.createElement("div");i.innerHTML=l.trim(),e.appendChild(i),this.viewport.appendChild(e),this.slides.push(e)})}bindEvents(){this.prevBtn.addEventListener("click",()=>this.prevSlide()),this.nextBtn.addEventListener("click",()=>this.nextSlide()),document.addEventListener("keydown",s=>{s.key==="ArrowLeft"?this.prevSlide():s.key==="ArrowRight"||s.key===" "?(s.preventDefault(),this.nextSlide()):s.key==="Home"?this.goToSlide(0):s.key==="End"&&this.goToSlide(this.totalSlides-1)});let t=0;this.viewport.addEventListener("touchstart",s=>{t=s.touches[0].clientX}),this.viewport.addEventListener("touchend",s=>{const a=s.changedTouches[0].clientX,e=t-a;Math.abs(e)>50&&(e>0?this.nextSlide():this.prevSlide())}),window.addEventListener("resize",()=>this.updateViewportScale())}prevSlide(){this.currentIndex>0&&this.goToSlide(this.currentIndex-1)}nextSlide(){this.currentIndex<this.totalSlides-1&&this.goToSlide(this.currentIndex+1)}goToSlide(t){t<0||t>=this.totalSlides||(this.slides[this.currentIndex].classList.remove("active"),this.currentIndex=t,this.slides[this.currentIndex].classList.add("active"),this.updateUrlPage(t+1),this.updateUI())}updateUrlPage(t){const s=new URLSearchParams(window.location.search);s.set("page",t.toString());const a=`${window.location.pathname}?${s.toString()}`;window.history.replaceState({},"",a)}updateUI(){if(this.totalSlides===0){this.prevBtn.disabled=!0,this.nextBtn.disabled=!0,this.progressBarFill.style.width="0%",this.pageIndicator.textContent="制作中";return}this.prevBtn.disabled=this.currentIndex===0,this.nextBtn.disabled=this.currentIndex===this.totalSlides-1;const t=(this.currentIndex+1)/this.totalSlides*100;this.progressBarFill.style.width=`${t}%`,this.pageIndicator.textContent=`${this.currentIndex+1} / ${this.totalSlides}`}updateViewportScale(){const e=window.innerWidth-40,l=window.innerHeight-40,i=e/1440,n=l/810,d=Math.min(i,n,1);this.viewport.style.transform=`scale(${d})`,console.log(`窗口: ${window.innerWidth}x${window.innerHeight}, 缩放: ${d.toFixed(3)}`)}}class x{constructor(){this.validRoutes=["/","/index.html"],this.checkRoute()}checkRoute(){const t=window.location.pathname;if(t.includes("404.html"))return;this.validRoutes.some(a=>a==="/"?t==="/"||t==="/index.html":t===a)||(console.warn(`Invalid route detected: ${t}, redirecting to 404`),window.location.href="/404.html")}addRoute(t){this.validRoutes.includes(t)||this.validRoutes.push(t)}isValidRoute(t){return this.validRoutes.includes(t)}}window.addEventListener("DOMContentLoaded",()=>{new x,new r});window.slideDataMap.set(1,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden bg-black flex items-center justify-center">
  <img src="./assets/images/cover-roles-evolve.jpg" alt="LOVEVOOK KOL Brief Cover" class="h-full w-auto object-contain" style="max-width:100%; max-height:100%;">
</div>
`);window.slideDataMap.set(2,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg flex items-center justify-center">
  <div class="w-[1200px] mx-auto">
    <h2 class="text-4xl font-bold text-gray-900 mb-3 text-center" style="font-family: 'Noto Sans SC', sans-serif;">Contents / 目录</h2>
    <div class="w-20 h-1 bg-[#F7941D] mx-auto mb-10 rounded"></div>
    <div class="grid grid-cols-2 gap-x-16 gap-y-4">
      <div class="flex items-center gap-4 p-4 hover:bg-orange-50 rounded-lg transition-all duration-300 group">
        <div class="w-12 h-12 bg-[#F7941D] text-white flex items-center justify-center text-lg font-bold flex-shrink-0 rounded-lg group-hover:scale-110 transition-transform">01</div>
        <div class="text-lg text-gray-800"><span class="font-medium">品牌介绍</span> <span class="text-gray-400 text-sm ml-2">Brand Story</span></div>
      </div>
      <div class="flex items-center gap-4 p-4 hover:bg-orange-50 rounded-lg transition-all duration-300 group">
        <div class="w-12 h-12 bg-[#F7941D] text-white flex items-center justify-center text-lg font-bold flex-shrink-0 rounded-lg group-hover:scale-110 transition-transform">02</div>
        <div class="text-lg text-gray-800"><span class="font-medium">新品展示</span> <span class="text-gray-400 text-sm ml-2">New Products</span></div>
      </div>
      <div class="flex items-center gap-4 p-4 hover:bg-orange-50 rounded-lg transition-all duration-300 group">
        <div class="w-12 h-12 bg-[#F7941D] text-white flex items-center justify-center text-lg font-bold flex-shrink-0 rounded-lg group-hover:scale-110 transition-transform">03</div>
        <div class="text-lg text-gray-800"><span class="font-medium">内容方向</span> <span class="text-gray-400 text-sm ml-2">Inspiration</span></div>
      </div>
      <div class="flex items-center gap-4 p-4 hover:bg-orange-50 rounded-lg transition-all duration-300 group">
        <div class="w-12 h-12 bg-[#F7941D] text-white flex items-center justify-center text-lg font-bold flex-shrink-0 rounded-lg group-hover:scale-110 transition-transform">04</div>
        <div class="text-lg text-gray-800"><span class="font-medium">硬性要求</span> <span class="text-gray-400 text-sm ml-2">Requirements</span></div>
      </div>
      <div class="flex items-center gap-4 p-4 hover:bg-orange-50 rounded-lg transition-all duration-300 group">
        <div class="w-12 h-12 bg-[#F7941D] text-white flex items-center justify-center text-lg font-bold flex-shrink-0 rounded-lg group-hover:scale-110 transition-transform">05</div>
        <div class="text-lg text-gray-800"><span class="font-medium">发布规范</span> <span class="text-gray-400 text-sm ml-2">Guidelines</span></div>
      </div>
      <div class="flex items-center gap-4 p-4 hover:bg-orange-50 rounded-lg transition-all duration-300 group">
        <div class="w-12 h-12 bg-[#F7941D] text-white flex items-center justify-center text-lg font-bold flex-shrink-0 rounded-lg group-hover:scale-110 transition-transform">06</div>
        <div class="text-lg text-gray-800"><span class="font-medium">审核流程</span> <span class="text-gray-400 text-sm ml-2">Review Process</span></div>
      </div>
      <div class="flex items-center gap-4 p-4 hover:bg-orange-50 rounded-lg transition-all duration-300 group">
        <div class="w-12 h-12 bg-[#F7941D] text-white flex items-center justify-center text-lg font-bold flex-shrink-0 rounded-lg group-hover:scale-110 transition-transform">07</div>
        <div class="text-lg text-gray-800"><span class="font-medium">合作权益 & 结算规则</span> <span class="text-gray-400 text-sm ml-2">Benefits & Terms</span></div>
      </div>
      <div class="flex items-center gap-4 p-4 hover:bg-orange-50 rounded-lg transition-all duration-300 group">
        <div class="w-12 h-12 bg-[#F7941D] text-white flex items-center justify-center text-lg font-bold flex-shrink-0 rounded-lg group-hover:scale-110 transition-transform">08</div>
        <div class="text-lg text-gray-800"><span class="font-medium">联系我们</span> <span class="text-gray-400 text-sm ml-2">Contact Us</span></div>
      </div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(3,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1360px] h-[750px] mx-auto my-[30px] flex flex-col justify-between">
    <!-- Header -->
    <div class="flex items-end justify-between mb-0">
      <div>
        <p class="text-[10px] tracking-[0.2em] text-[#F7941D] font-semibold uppercase" style="font-family:'Montserrat'">BRAND STORY & ACHIEVEMENTS</p>
        <h1 class="text-2xl font-bold text-gray-900 mt-0.5" style="font-family:'Noto Sans SC'">品牌故事与实力</h1>
      </div>
      <p class="text-[11px] text-gray-400 italic mb-1" style="font-family:'Inter'">Why LOVEVOOK? · Trusted by 5M+ Globally</p>
    </div>

    <!-- ROW 1: Brand Story — 4 equal cards -->
    <div class="grid grid-cols-4 gap-3" style="height: 210px;">
      <div class="p-3.5 bg-gradient-to-b from-[#FFF8F0] to-white rounded-xl border border-[#FDE8D0] shadow-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-1.5 mb-1.5">
            <span class="text-base">🌱</span>
            <p class="text-sm font-bold text-[#E86C20]" style="font-family:'Noto Sans SC'">品牌起源</p>
          </div>
          <p class="text-[11px] text-gray-600 leading-relaxed" style="font-family:'Noto Sans SC'">2014 年创立，源于洞察：市面上包包要么实用缺风格，要么有格调但昂贵。LOVEVOOK 让每位女性轻松拥有既好看又实用的包包。</p>
        </div>
      </div>
      <div class="p-3.5 bg-gradient-to-b from-[#FFF4EB] to-white rounded-xl border border-[#FDD6B0] shadow-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-1.5 mb-1.5">
            <span class="text-base">🎨</span>
            <p class="text-sm font-bold text-[#F7941D]" style="font-family:'Noto Sans SC'">品牌哲学</p>
          </div>
          <p class="text-[11px] text-gray-600 leading-relaxed" style="font-family:'Noto Sans SC'">世界不该只有单调色彩。我们专注用<span class="text-[#F7941D] font-semibold">色彩艺术</span>表达真实的每个侧面。色彩塑造情绪、指引行动。</p>
        </div>
      </div>
      <div class="p-3.5 bg-gradient-to-b from-[#FFF1E8] to-white rounded-xl border border-[#FDD6B0] shadow-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-1.5 mb-1.5">
            <span class="text-base">✨</span>
            <p class="text-sm font-bold text-[#E86C20]" style="font-family:'Noto Sans SC'">品牌使命</p>
          </div>
          <p class="text-[11px] text-gray-600 leading-relaxed" style="font-family:'Noto Sans SC'">通过每只包包的色彩艺术，赋能自由自我表达，陪伴人们勇敢追逐如色彩般鲜活的人生。</p>
        </div>
      </div>
      <div class="p-3.5 bg-gradient-to-br from-[#F7941D] to-[#E86C20] rounded-xl shadow-md text-white flex flex-col justify-between">
        <div>
          <p class="text-sm font-bold opacity-95 mb-1" style="font-family:'Montserrat'">Color Your Life</p>
          <p class="text-[11px] opacity-85 leading-relaxed" style="font-family:'Noto Sans SC'">不仅是口号，是缝进每一针、每一色、每一处细节的设计哲学</p>
        </div>
        <p class="text-[10px] opacity-75 pt-2 mt-1 border-t border-white/20" style="font-family:'Noto Sans SC'">10+ 年研发经验 · 150+ 款年新品</p>
      </div>
    </div>

    <!-- ROW 2: Brand Achievements — 4 stat cards -->
    <div class="grid grid-cols-4 gap-3" style="height: 95px;">
      <div class="p-3 bg-gradient-to-r from-[#F7941D] to-[#E67A15] text-white rounded-xl shadow-sm flex items-center justify-center gap-3">
        <p class="text-3xl font-bold leading-none" style="font-family:'Montserrat'">14M+</p>
        <p class="text-[12px] opacity-85" style="font-family:'Noto Sans SC'">全球交付包包</p>
      </div>
      <div class="p-3 bg-gradient-to-r from-[#E86C20] to-[#CC5500] text-white rounded-xl shadow-sm flex items-center justify-center gap-3">
        <p class="text-3xl font-bold leading-none" style="font-family:'Montserrat'">50%+</p>
        <p class="text-[12px] opacity-85" style="font-family:'Noto Sans SC'">年同比增长</p>
      </div>
      <div class="p-3 bg-gradient-to-r from-[#2D2D2D] to-[#555] text-white rounded-xl shadow-sm flex items-center justify-center gap-3">
        <p class="text-3xl font-bold leading-none" style="font-family:'Montserrat'">#1</p>
        <p class="text-[12px] opacity-85" style="font-family:'Noto Sans SC'">Amazon US 双类目冠军</p>
      </div>
      <div class="p-3 bg-white border-2 border-[#F7941D] rounded-xl shadow-sm flex items-center justify-center gap-3">
        <p class="text-3xl font-bold leading-none text-[#F7941D]" style="font-family:'Montserrat'">65K+</p>
        <p class="text-[12px] text-gray-500" style="font-family:'Noto Sans SC'">达人联合推荐</p>
      </div>
    </div>

    <!-- ROW 3: Authority + Social Media — 2 columns, equal height -->
    <div class="grid grid-cols-2 gap-3" style="height: 270px;">
      <!-- Authority -->
      <div class="p-3.5 bg-gradient-to-b from-[#FFF8F0] to-white rounded-xl border border-[#FDE8D0] shadow-sm flex flex-col">
        <p class="text-sm font-bold text-[#E86C20] mb-2.5" style="font-family:'Noto Sans SC'">🏆 权威认证</p>
        <div class="grid grid-cols-2 gap-2 flex-1">
          <div class="p-2.5 bg-white/80 rounded-lg flex items-center gap-2 border border-[#FDE8D0]">
            <span class="text-base shrink-0">🛍️</span>
            <div>
              <p class="text-[12px] font-semibold text-gray-800" style="font-family:'Noto Sans SC'">Amazon US</p>
              <p class="text-[10px] text-gray-500" style="font-family:'Noto Sans SC'">笔电托特包 #1</p>
            </div>
          </div>
          <div class="p-2.5 bg-white/80 rounded-lg flex items-center gap-2 border border-[#FDE8D0]">
            <span class="text-base shrink-0">🎒</span>
            <div>
              <p class="text-[12px] font-semibold text-gray-800" style="font-family:'Noto Sans SC'">Amazon US</p>
              <p class="text-[10px] text-gray-500" style="font-family:'Noto Sans SC'">笔电双肩包 #1</p>
            </div>
          </div>
          <div class="p-2.5 bg-white/80 rounded-lg flex items-center gap-2 border border-[#FDE8D0]">
            <span class="text-base shrink-0">🎵</span>
            <div>
              <p class="text-[12px] font-semibold text-gray-800" style="font-family:'Noto Sans SC'">TikTok Shop</p>
              <p class="text-[10px] text-gray-500" style="font-family:'Noto Sans SC'">箱包类目 TOP1</p>
            </div>
          </div>
          <div class="p-2.5 bg-white/80 rounded-lg flex items-center gap-2 border border-[#FDE8D0]">
            <span class="text-base shrink-0">🌟</span>
            <div>
              <p class="text-[12px] font-semibold text-gray-800" style="font-family:'Noto Sans SC'">TikTok Global</p>
              <p class="text-[10px] text-gray-500" style="font-family:'Noto Sans SC'">2025.08 销售冠军</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Social Media -->
      <div class="p-3.5 bg-gradient-to-br from-[#FFF4EB] to-[#FFF8F0] rounded-xl border border-[#FDE8D0] shadow-sm flex flex-col">
        <p class="text-sm font-bold text-[#E86C20] mb-2.5" style="font-family:'Noto Sans SC'">📱 社交媒体影响力 (2025)</p>
        <div class="flex flex-col gap-2.5 flex-1 justify-center">
          <div class="p-3 bg-white/80 rounded-lg border border-[#FDE8D0]">
            <div class="flex items-center justify-between mb-1.5">
              <p class="text-[13px] font-semibold text-gray-700" style="font-family:'Noto Sans SC'">Instagram + Facebook</p>
              <div class="flex items-baseline gap-1.5">
                <p class="text-xl font-bold text-[#F7941D]" style="font-family:'Montserrat'">146K</p>
                <p class="text-[11px] text-green-500 font-semibold" style="font-family:'Montserrat'">+126%</p>
              </div>
            </div>
            <div class="w-full bg-[#FDE8D0] rounded-full h-1.5">
              <div class="bg-[#F7941D] h-1.5 rounded-full" style="width: 73%"></div>
            </div>
          </div>
          <div class="p-3 bg-white/80 rounded-lg border border-[#FDE8D0]">
            <div class="flex items-center justify-between mb-1.5">
              <p class="text-[13px] font-semibold text-gray-700" style="font-family:'Noto Sans SC'">TikTok</p>
              <div class="flex items-baseline gap-1.5">
                <p class="text-xl font-bold text-[#F7941D]" style="font-family:'Montserrat'">104K</p>
                <p class="text-[11px] text-green-500 font-semibold" style="font-family:'Montserrat'">+210%</p>
              </div>
            </div>
            <div class="w-full bg-[#FDE8D0] rounded-full h-1.5">
              <div class="bg-[#F7941D] h-1.5 rounded-full" style="width: 52%"></div>
            </div>
          </div>
          <div class="p-3 bg-white/80 rounded-lg border border-[#FDE8D0]">
            <div class="flex items-center justify-between mb-1.5">
              <p class="text-[13px] font-semibold text-gray-700" style="font-family:'Noto Sans SC'">Brand Buzz 品牌曝光</p>
              <div class="flex items-baseline gap-1.5">
                <p class="text-xl font-bold text-[#F7941D]" style="font-family:'Montserrat'">3.6B+</p>
                <p class="text-[11px] text-green-500 font-semibold" style="font-family:'Montserrat'">+530%</p>
              </div>
            </div>
            <div class="w-full bg-[#FDE8D0] rounded-full h-1.5">
              <div class="bg-[#F7941D] h-1.5 rounded-full" style="width: 90%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(5,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[45px]">
    <div class="flex items-center gap-3 mb-5">
      <div class="w-1 h-10 bg-[#F7941D] rounded-full"></div>
      <span class="text-sm font-semibold text-[#F7941D] uppercase tracking-wider" style="font-family:'Montserrat'">New Products 2026</span>
    </div>
    <div class="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-bold rounded-full mb-2" style="font-family:'Montserrat'">The Anchor Collection</div>
    <h2 class="text-4xl font-bold text-gray-900 mb-1" style="font-family:'Noto Sans SC'">2026 新品阵容</h2>
    <p class="text-base text-[#F7941D] font-semibold mb-1" style="font-family:'Noto Sans SC'">身份在变，底气不变。</p>
    <p class="text-sm text-gray-500 mb-5" style="font-family:'Montserrat'">Roles Evolve, Confidence Remains. — Three Styles, One Mission</p>

    <div class="grid grid-cols-3 gap-6">
      <!-- Product 5576 -->
      <div class="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
        <div class="h-[200px] bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-4">
          <img src="./assets/images/product-5576-overview.png" alt="5576" class="max-h-[180px] object-contain rounded-lg" onerror="this.style.display='none'" />
        </div>
        <div class="p-5">
          <div class="inline-block px-3 py-1 bg-[#F7941D] text-white text-xs font-bold rounded-full mb-3" style="font-family:'Montserrat'">5576</div>
          <h3 class="font-bold text-xl text-gray-900 mb-1" style="font-family:'Noto Sans SC'">全能通勤托特包</h3>
          <p class="text-sm font-medium text-[#E86C20] mb-3" style="font-family:'Montserrat'">The Utility Powerhouse</p>
          <p class="text-base text-gray-600 leading-relaxed mb-3" style="font-family:'Noto Sans SC'"><span class="text-[#F7941D] font-bold">"Carry it All"</span> — 能装、耐用、好搭。1.2mm加厚PU皮革，自立结构永不塌。</p>
          <div class="flex flex-wrap gap-1.5">
            <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">15.6"-17.3"</span>
            <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">自立结构</span>
            <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">水杯位</span>
          </div>
        </div>
      </div>

      <!-- Product 5595 -->
      <div class="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
        <div class="h-[200px] bg-gradient-to-br from-stone-100 to-amber-50 flex items-center justify-center p-4">
          <img src="./assets/images/product-5595-overview.jpg" alt="5595" class="max-h-[180px] object-contain rounded-lg" onerror="this.style.display='none'" />
        </div>
        <div class="p-5">
          <div class="inline-block px-3 py-1 bg-gray-800 text-white text-xs font-bold rounded-full mb-3" style="font-family:'Montserrat'">5595</div>
          <h3 class="font-bold text-xl text-gray-900 mb-1" style="font-family:'Noto Sans SC'">美学通勤单肩包</h3>
          <p class="text-sm font-medium text-gray-500 mb-3" style="font-family:'Montserrat'">The Aesthetic Hustler</p>
          <p class="text-base text-gray-600 leading-relaxed mb-3" style="font-family:'Noto Sans SC'"><span class="text-gray-700 font-bold">"Work-Life Integration"</span> — 厚实帆布+精致皮革，告别IT男审美。</p>
          <div class="flex flex-wrap gap-1.5">
            <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">32.5cm宽</span>
            <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">帆布+皮</span>
            <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">Clean Girl</span>
          </div>
        </div>
      </div>

      <!-- Product 5701 -->
      <div class="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
        <div class="h-[200px] bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center p-4">
          <img src="./assets/images/product-5701-overview.jpg" alt="5701" class="max-h-[180px] object-contain rounded-lg" onerror="this.style.display='none'" />
        </div>
        <div class="p-5">
          <div class="inline-block px-3 py-1 bg-black text-white text-xs font-bold rounded-full mb-3" style="font-family:'Montserrat'">5701</div>
          <h3 class="font-bold text-xl text-gray-900 mb-1" style="font-family:'Noto Sans SC'">时尚Hobo包</h3>
          <p class="text-sm font-medium text-gray-500 mb-3" style="font-family:'Montserrat'">Structured Rebellion</p>
          <p class="text-base text-gray-600 leading-relaxed mb-3" style="font-family:'Noto Sans SC'"><span class="text-[#E86C20] font-bold">"Out of Office,<br/>Into Your Style"</span> — 有结构的反叛，一包多背。</p>
          <div class="flex flex-wrap gap-1.5">
            <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">双肩带</span>
            <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">欧式皮革</span>
            <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600rounded">Y2K</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 text-center text-sm text-gray-400">从左到右：实用主义 → 美学融合 → 态度表达 — 覆盖北美女性多元需求</div>
  </div>
</div>
`);window.slideDataMap.set(6,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1400px] h-[780px] mx-auto my-[15px] flex gap-6 px-2">
    <!-- Left: Product Image -->
    <div class="w-[40%] flex items-center justify-center bg-gradient-to-br from-stone-100 to-amber-50 rounded-2xl p-6">
      <img src="./assets/images/product-5576-new.png" alt="5576" class="max-h-[640px] w-full object-contain rounded-xl drop-shadow-lg" onerror="this.style.display='none'" />
    </div>

    <!-- Right: Content -->
    <div class="w-[60%] flex flex-col pr-2">
      <!-- Title -->
      <div class="flex items-center gap-3 mb-2">
        <span class="px-3 py-1 bg-[#F7941D] text-white text-sm font-bold rounded-full" style="font-family:'Montserrat'">5576</span>
        <h2 class="text-3xl font-bold text-gray-900" style="font-family:'Noto Sans SC'">全能通勤托特包</h2>
      </div>
      <p class="text-lg text-[#E86C20] font-medium mb-4 italic" style="font-family:'Montserrat'">The Utility Powerhouse — "Carry it All"</p>

      <!-- Features -->
      <div class="grid grid-cols-2 gap-2 mb-4">
        <div class="flex items-start gap-2 p-2.5 bg-white rounded-lg border border-gray-100 shadow-sm">
          <span class="text-[#F7941D] text-base">✦</span><div><p class="font-semibold text-gray-800 text-sm">自立结构</p><p class="text-xs text-gray-500">1.2mm加厚PU皮革 + 底部molding</p></div>
        </div>
        <div class="flex items-start gap-2 p-2.5 bg-white rounded-lg border border-gray-100 shadow-sm">
          <span class="text-[#F7941D] text-base">✦</span><div><p class="font-semibold text-gray-800 text-sm">笔电脑仓</p><p class="text-xs text-gray-500">容纳15.6"-17.3"笔记本</p></div>
        </div>
        <div class="flex items-start gap-2 p-2.5 bg-white rounded-lg border border-gray-100 shadow-sm">
          <span class="text-[#F7941D] text-base">✦</span><div><p class="font-semibold text-gray-800 text-sm">水杯安全舱</p><p class="text-xs text-gray-500">竖放Stanley大杯不漏水</p></div>
        </div>
        <div class="flex items-start gap-2 p-2.5 bg-white rounded-lg border border-gray-100 shadow-sm">
          <span class="text-[#F7941D] text-base">✦</span><div><p class="font-semibold text-gray-800 text-sm">精致细节</p><p class="text-xs text-gray-500">分区系统 + 双色拼皮 + 金属五金</p></div>
        </div>
      </div>

      <!-- Use Cases -->
      <div class="flex-1 bg-stone-100/70 rounded-xl p-5 border border-stone-200 flex flex-col min-h-0">
        <p class="text-xs text-[#E86C20] mb-4 font-bold uppercase tracking-wider">使用场景 / Use Cases</p>
        <div class="flex flex-col gap-4 flex-1 min-h-0">
          <!-- 办公室办公 -->
          <div class="flex-1 flex items-center gap-4 min-h-0">
            <div class="w-[40%] h-full rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 shadow-sm flex items-center justify-center">
              <img src="./assets/images/use-cases/5576-office.jpg" alt="5576 办公室" class="max-w-full max-h-full object-contain" onerror="this.parentElement.innerHTML='<div class=\\'w-full h-full flex items-center justify-center text-gray-400 text-xs\\'>办公室</div>'" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="font-bold text-base text-gray-800 mb-1.5">🏢 办公室办公</p>
              <p class="text-sm text-gray-600 leading-relaxed">电脑仓+分区设计，办公桌旁高效收纳，从键盘鼠标到文件井然有序</p>
            </div>
          </div>
          <!-- 差旅出行 -->
          <div class="flex-1 flex items-center gap-4 min-h-0">
            <div class="w-[40%] h-full rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 shadow-sm flex items-center justify-center">
              <img src="./assets/images/use-cases/5576-airport.png" alt="5576 差旅" class="max-w-full max-h-full object-contain" onerror="this.parentElement.innerHTML='<div class=\\'w-full h-full flex items-center justify-center text-gray-400 text-xs\\'>差旅</div>'" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="font-bold text-base text-gray-800 mb-1.5">✈️ 差旅出行</p>
              <p class="text-sm text-gray-600 leading-relaxed">大容量拉杆箱伴侣，电脑/水杯/护照/充电线全部收纳，机场高铁都一路从容</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(7,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1400px] h-[780px] mx-auto my-[15px] flex gap-6 px-2">
    <!-- Left: Content -->
    <div class="w-[60%] flex flex-col">
      <!-- Title -->
      <div class="flex items-center gap-3 mb-2">
        <span class="px-3 py-1 bg-gray-800 text-white text-sm font-bold rounded-full" style="font-family:'Montserrat'">5595</span>
        <h2 class="text-3xl font-bold text-gray-900" style="font-family:'Noto Sans SC'">美学通勤单肩包</h2>
      </div>
      <p class="text-lg text-gray-500 font-medium mb-4 italic" style="font-family:'Montserrat'">The Aesthetic Hustler — "Work-Life Integration"</p>

      <!-- Features -->
      <div class="grid grid-cols-2 gap-2 mb-4">
        <div class="flex items-start gap-2 p-2.5 bg-white rounded-lg border border-gray-100 shadow-sm">
          <span class="text-gray-800 text-base">✦</span><div><p class="font-semibold text-gray-800 text-sm">结构美学</p><p class="text-xs text-gray-500">厚实帆布 + 精致皮革包边</p></div>
        </div>
        <div class="flex items-start gap-2 p-2.5 bg-white rounded-lg border border-gray-100 shadow-sm">
          <span class="text-gray-800 text-base">✦</span><div><p class="font-semibold text-gray-800 text-sm">宽容电脑仓</p><p class="text-xs text-gray-500">32.5cm宽 装下MacBook+iPad</p></div>
        </div>
        <div class="flex items-start gap-2 p-2.5 bg-white rounded-lg border border-gray-100 shadow-sm">
          <span class="text-gray-800 text-base">✦</span><div><p class="font-semibold text-gray-800 text-sm">细节质感</p><p class="text-xs text-gray-500">心形吊坠 + 拼接撞色设计</p></div>
        </div>
        <div class="flex items-start gap-2 p-2.5 bg-stone-50 rounded-lg border border-stone-200 shadow-sm">
          <span class="text-[#E86C20] text-base">💡</span><div><p class="font-semibold text-gray-800 text-sm">核心差异化</p><p class="text-xs text-gray-500">从工具升级为穿搭配饰</p></div>
        </div>
      </div>

      <!-- Use Cases -->
      <div class="flex-1 bg-stone-100/70 rounded-xl p-5 border border-stone-200 flex flex-col min-h-0">
        <p class="text-xs text-[#E86C20] mb-4 font-bold uppercase tracking-wider">使用场景 / Use Cases</p>
        <div class="flex flex-col gap-4 flex-1 min-h-0">
          <!-- 通勤路上 -->
          <div class="flex-1 flex items-center gap-4 min-h-0">
            <div class="w-[40%] h-full rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 shadow-sm flex items-center justify-center">
              <img src="./assets/images/use-cases/5595-commute.png" alt="5595 通勤" class="max-w-full max-h-full object-contain" onerror="this.parentElement.innerHTML='<div class=\\'w-full h-full flex items-center justify-center text-gray-400 text-xs\\'>通勤</div>'" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="font-bold text-base text-gray-800 mb-1.5">🚶‍♀️ 通勤路上</p>
              <p class="text-sm text-gray-600 leading-relaxed">单肩斜挎轻盈自在，从家到公司一路优雅，穿搭完整不臃肿</p>
            </div>
          </div>
          <!-- 咖啡厅办公 -->
          <div class="flex-1 flex items-center gap-4 min-h-0">
            <div class="w-[40%] h-full rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 shadow-sm flex items-center justify-center">
              <img src="./assets/images/use-cases/5595-cafe-1.jpg" alt="5595 咖啡厅" class="max-w-full max-h-full object-contain" onerror="this.parentElement.innerHTML='<div class=\\'w-full h-full flex items-center justify-center text-gray-400 text-xs\\'>咖啡厅</div>'" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="font-bold text-base text-gray-800 mb-1.5">☕ 咖啡厅办公</p>
              <p class="text-sm text-gray-600 leading-relaxed">电脑+充电器轻松装下，斜挎解放双手，移动办公/自由职业完美搭配</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right: Product Image -->
    <div class="w-[40%] flex items-center justify-center bg-gradient-to-br from-stone-100 to-amber-50 rounded-2xl p-6">
      <img src="./assets/images/product-5595-new.png" alt="5595" class="max-h-[640px] w-full object-contain rounded-xl drop-shadow-lg" onerror="this.style.display='none'" />
    </div>
  </div>
</div>
`);window.slideDataMap.set(8,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1400px] h-[780px] mx-auto my-[15px] flex gap-6 px-2">
    <!-- Left: Product Image -->
    <div class="w-[40%] flex items-center justify-center bg-gradient-to-br from-stone-100 to-amber-50 rounded-2xl p-6">
      <img src="./assets/images/product-5701-new.png" alt="5701" class="max-h-[640px] w-full object-contain rounded-xl drop-shadow-lg" onerror="this.style.display='none'" />
    </div>

    <!-- Right: Content -->
    <div class="w-[60%] flex flex-col pr-2">
      <!-- Title -->
      <div class="flex items-center gap-3 mb-2">
        <span class="px-3 py-1 bg-black text-white text-sm font-bold rounded-full" style="font-family:'Montserrat'">5701</span>
        <h2 class="text-3xl font-bold text-gray-900" style="font-family:'Noto Sans SC'">时尚Hobo包</h2>
      </div>
      <p class="text-lg text-[#E86C20] font-medium mb-4 italic" style="font-family:'Montserrat'">Structured Chic — "Out of Office, Into Your Style"</p>

      <!-- Features -->
      <div class="grid grid-cols-2 gap-2 mb-4">
        <div class="p-2.5 bg-white rounded-lg border border-gray-100 shadow-sm"><p class="font-semibold text-gray-800 text-sm mb-0.5">有结构的时尚</p><p class="text-xs text-gray-500">复古Hobo廓形 + 三角皮料拼接</p></div>
        <div class="p-2.5 bg-white rounded-lg border border-gray-100 shadow-sm"><p class="font-semibold text-gray-800 text-sm mb-0.5">高定质感</p><p class="text-xs text-gray-500">1.2mm欧式分纹皮革</p></div>
        <div class="p-2.5 bg-white rounded-lg border border-gray-100 shadow-sm"><p class="font-semibold text-gray-800 text-sm mb-0.5">一包多背</p><p class="text-xs text-gray-500">双肩带系统 (短肩+长斜挎)</p></div>
        <div class="p-2.5 bg-white rounded-lg border border-gray-100 shadow-sm"><p class="font-semibold text-gray-800 text-sm mb-0.5">精致细节</p><p class="text-xs text-gray-500">马蹄扣 + 心形吊坠 + 麂皮绒面</p></div>
      </div>

      <!-- Use Cases -->
      <div class="flex-1 bg-stone-100/70 rounded-xl p-5 border border-stone-200 flex flex-col min-h-0">
        <p class="text-xs text-[#E86C20] mb-4 font-bold uppercase tracking-wider">使用场景 / Use Cases</p>
        <div class="flex flex-col gap-4 flex-1 min-h-0">
          <!-- 时尚穿搭 -->
          <div class="flex-1 flex items-center gap-4 min-h-0">
            <div class="w-[40%] h-full rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 shadow-sm flex items-center justify-center">
              <img src="./assets/images/use-cases/5701-fashion.jpg" alt="5701 时尚穿搭" class="max-w-full max-h-full object-contain" onerror="this.parentElement.innerHTML='<div class=\\'w-full h-full flex items-center justify-center text-gray-400 text-xs\\'>穿搭</div>'" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="font-bold text-base text-gray-800 mb-1.5">👗 时尚穿搭</p>
              <p class="text-sm text-gray-600 leading-relaxed">复古Hobo廓形提升整体造型感，欧式皮革点亮街头风与法式慵懒风</p>
            </div>
          </div>
          <!-- 日常社交 -->
          <div class="flex-1 flex items-center gap-4 min-h-0">
            <div class="w-[40%] h-full rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 shadow-sm flex items-center justify-center">
              <img src="./assets/images/use-cases/5701-social.png" alt="5701 日常社交" class="max-w-full max-h-full object-contain" onerror="this.parentElement.innerHTML='<div class=\\'w-full h-full flex items-center justify-center text-gray-400 text-xs\\'>社交</div>'" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="font-bold text-base text-gray-800 mb-1.5">👯 日常社交</p>
              <p class="text-sm text-gray-600 leading-relaxed">咖啡、Brunch、闺蜜逛街——轻装出行的同时保持造型完整度</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(9,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1380px] h-[750px] mx-auto my-[30px] flex flex-col">
    <!-- Header -->
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-3">
        <div class="w-1 h-10 bg-[#F7941D] rounded-full"></div>
        <div>
          <span class="text-sm font-semibold text-[#F7941D] uppercase tracking-wider block" style="font-family:'Montserrat'">Content Direction (2/2)</span>
          <h2 class="text-2xl font-bold text-gray-900 leading-tight" style="font-family:'Noto Sans SC'">内容创作方向</h2>
        </div>
      </div>
      <div class="text-right">
        <p class="text-xs text-gray-400" style="font-family:'Montserrat'">Scene & Storytelling · Vlog</p>
      </div>
    </div>

    <!-- Two directions side by side -->
    <div class="grid grid-cols-2 gap-4" style="height:680px;">

      <!-- Direction C: 场景剧情 -->
      <div class="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-3 border border-orange-100 flex flex-col">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-xl">🎬</span>
          <div>
            <h3 class="text-base font-bold text-gray-800" style="font-family:'Noto Sans SC'">场景剧情</h3>
            <p class="text-[11px] text-[#E86C20] font-medium" style="font-family:'Montserrat'">Scene & Storytelling</p>
          </div>
        </div>
        <p class="text-[11px] text-gray-600 mb-2 leading-relaxed" style="font-family:'Noto Sans SC'">
          用剧情、街采、机场、通勤等场景把产品自然带入，降低广告感。让产品在故事里"不经意"出现，完播率更高。
        </p>

        <div class="flex flex-col gap-2" style="height:560px;">
          <!-- Reference 1 -->
          <div class="bg-white rounded-xl p-2 shadow-sm flex gap-3 overflow-hidden" style="height:180px;">
            <div class="w-[170px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
              <img src="./assets/images/ref/dezbreel-street-interview.png" alt="ref-c1" class="w-full h-full object-cover" onerror="this.style.display='none'"/>
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <p class="text-sm font-bold text-gray-800">① 街采搭讪式</p>
              <p class="text-[11px] text-gray-500 mb-1">"不好意思打扰一下"</p>
              <p class="text-[11px] text-gray-600 leading-snug mb-1">街采路人式开头，主动搭讪制造真实偶遇感，借包主之口说卖点</p>
              <p class="text-[10px] text-[#E86C20] truncate">tiktok.com/@dezbreel/video/7650226919497075982</p>
            </div>
          </div>

          <!-- Reference 2 -->
          <div class="bg-white rounded-xl p-2 shadow-sm flex gap-3 overflow-hidden" style="height:180px;">
            <div class="w-[170px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
              <img src="./assets/images/ref/nnbmdhj-office-bag.png" alt="ref-c2" class="w-full h-full object-cover" onerror="this.style.display='none'"/>
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <p class="text-sm font-bold text-gray-800">② 特定场景使用</p>
              <p class="text-[11px] text-gray-500 mb-1">"new office work bag"</p>
              <p class="text-[11px] text-gray-600 leading-snug mb-1">现代办公室+通勤穿搭，环境音+氛围大于产品硬推销</p>
              <p class="text-[10px] text-[#E86C20] truncate">tiktok.com/@nnbmdhj/video/7579639828787039506</p>
            </div>
          </div>

          <!-- Reference 3 -->
          <div class="bg-white rounded-xl p-2 shadow-sm flex gap-3 overflow-hidden" style="height:180px;">
            <div class="w-[170px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
              <img src="./assets/images/ref/michellemennella-boat-reaction.png" alt="ref-c3" class="w-full h-full object-cover" onerror="this.style.display='none'"/>
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <p class="text-sm font-bold text-gray-800">③ 第三方围观种草</p>
              <p class="text-[11px] text-gray-500 mb-1">"Oh my god" 悬念开场</p>
              <p class="text-[11px] text-gray-600 leading-snug mb-1">船上情绪爆点开场，借路人完成价格锚定；第三方说 perfect+群体围观建立信任，"经常断货"制造FOMO</p>
              <p class="text-[10px] text-[#E86C20] truncate">tiktok.com/@michellemennella/video/7609347855978990878</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Direction D: Vlog -->
      <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-3 border border-orange-100 flex flex-col">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-xl">📹</span>
          <div>
            <h3 class="text-base font-bold text-gray-800" style="font-family:'Noto Sans SC'">Vlog</h3>
            <p class="text-[11px] text-[#E86C20] font-medium" style="font-family:'Montserrat'">Day in My Life / Travel</p>
          </div>
        </div>
        <p class="text-[11px] text-gray-600 mb-2 leading-relaxed" style="font-family:'Noto Sans SC'">
          用日常记录形式自然植入产品，降低广告感。让包在行走/通勤/工作/旅行中不经意出现，真实感强。
        </p>

        <div class="flex flex-col gap-2" style="height:560px;">
          <!-- Reference 1 -->
          <div class="bg-white rounded-xl p-2 shadow-sm flex gap-3 overflow-hidden" style="height:180px;">
            <div class="w-[170px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
              <img src="./assets/images/ref/sofia-commute-vlog.png" alt="ref-d1" class="w-full h-full object-cover" onerror="this.style.display='none'"/>
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <p class="text-sm font-bold text-gray-800">① 完整一天 Vlog</p>
              <p class="text-[11px] text-gray-500 mb-1">换穿搭不换包 · 全天场景记录</p>
              <p class="text-[11px] text-gray-600 leading-snug mb-1">从早到晚一套包搭配多套造型，口播自然带出"一只包满足全天需求"</p>
              <p class="text-[10px] text-[#E86C20] truncate">tiktok.com/@sofia_linaresss/video/7552169806930218295</p>
            </div>
          </div>

          <!-- Reference 2 -->
          <div class="bg-white rounded-xl p-2 shadow-sm flex gap-3 overflow-hidden" style="height:180px;">
            <div class="w-[170px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
              <img src="./assets/images/ref/oleada-commute-pack.png" alt="ref-d2" class="w-full h-full object-cover" onerror="this.style.display='none'"/>
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <p class="text-sm font-bold text-gray-800">② 通勤装包+使用场景</p>
              <p class="text-[11px] text-gray-500 mb-1">"The perfect professional workbag"</p>
              <p class="text-[11px] text-gray-600 leading-snug mb-1">先实拍通勤路上手持包包，再装入日常办公与生活用品，最后切换到通勤、打电话等真实使用场景</p>
              <p class="text-[10px] text-[#E86C20] truncate">tiktok.com/@oleada_workbags/video/7384167655906757919</p>
            </div>
          </div>

          <!-- Reference 3 -->
          <div class="bg-white rounded-xl p-2 shadow-sm flex gap-3 overflow-hidden" style="height:180px;">
            <div class="w-[170px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
              <img src="./assets/images/ref/savinachow-what-in-my-bag.png" alt="ref-d3" class="w-full h-full object-cover" onerror="this.style.display='none'"/>
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <p class="text-sm font-bold text-gray-800">③ What's in my bag</p>
              <p class="text-[11px] text-gray-500 mb-1">展示包内物品 · 暗示容量</p>
              <p class="text-[11px] text-gray-600 leading-snug mb-1">把日常所需物品逐一装入或取出，直观证明这只包装得下所有必需品</p>
              <p class="text-[10px] text-[#E86C20] truncate">tiktok.com/@rockilutsky/video/7631346017241287950</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
`);window.slideDataMap.set(11,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1380px] h-[750px] mx-auto my-[30px] flex flex-col">
    <!-- Header -->
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-3">
        <div class="w-1 h-10 bg-[#F7941D] rounded-full"></div>
        <div>
          <span class="text-sm font-semibold text-[#F7941D] uppercase tracking-wider block" style="font-family:'Montserrat'">Content Direction (1/2)</span>
          <h2 class="text-2xl font-bold text-gray-900 leading-tight" style="font-family:'Noto Sans SC'">内容创作方向</h2>
        </div>
      </div>
      <div class="text-right">
        <p class="text-xs text-gray-400" style="font-family:'Montserrat'">OOTD & Styling · Unboxing & Review</p>
      </div>
    </div>

    <!-- Two directions side by side -->
    <div class="grid grid-cols-2 gap-4" style="height:680px;">

      <!-- Direction A: OOTD & 穿搭 -->
      <div class="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-3 border border-orange-100 flex flex-col">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-xl">👗</span>
          <div>
            <h3 class="text-base font-bold text-gray-800" style="font-family:'Noto Sans SC'">OOTD & 穿搭</h3>
            <p class="text-[11px] text-[#E86C20] font-medium" style="font-family:'Montserrat'">OOTD & Styling</p>
          </div>
        </div>
        <p class="text-[11px] text-gray-600 mb-2 leading-relaxed" style="font-family:'Noto Sans SC'">
          达人出镜展示穿搭与包包，可用 OOTD、变装、一周穿搭等形式。同一只包搭配 1-3 套不同风格造型，展示多场景穿着适用性。
        </p>

        <div class="flex flex-col gap-2" style="height:560px;">
          <!-- Reference 1 -->
          <div class="bg-white rounded-xl p-2 shadow-sm flex gap-3 overflow-hidden" style="height:180px;">
            <div class="w-[170px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
              <img src="./assets/images/ref/priricart-ootd.png" alt="ref-a1" class="w-full h-full object-cover" onerror="this.style.display='none'"/>
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <p class="text-sm font-bold text-gray-800">① OOTD 场景展示</p>
              <p class="text-[11px] text-gray-500 mb-1">城市地标 / 出游场景</p>
              <p class="text-[11px] text-gray-600 leading-snug mb-1">同包搭配 1-3 套 look，证明百搭属性，自然光线下展示产品档次感</p>
              <p class="text-[10px] text-[#E86C20] truncate">tiktok.com/@priricart/video/7664009808785214751</p>
            </div>
          </div>

          <!-- Reference 2 -->
          <div class="bg-white rounded-xl p-2 shadow-sm flex gap-3 overflow-hidden" style="height:180px;">
            <div class="w-[170px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
              <img src="./assets/images/ref/denisseaidaee-transform.png" alt="ref-a2" class="w-full h-full object-cover" onerror="this.style.display='none'"/>
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <p class="text-sm font-bold text-gray-800">② 变装对比</p>
              <p class="text-[11px] text-gray-500 mb-1">素颜 → 精致变装</p>
              <p class="text-[11px] text-gray-600 leading-snug mb-1">从素颜居家到精致出门，形成强烈反差，强化"有包更完整"</p>
              <p class="text-[10px] text-[#E86C20] truncate">tiktok.com/@denisse_aidee/video/7623984319966612757</p>
            </div>
          </div>

          <!-- Reference 3 -->
          <div class="bg-white rounded-xl p-2 shadow-sm flex gap-3 overflow-hidden" style="height:180px;">
            <div class="w-[170px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
              <img src="./assets/images/ref/moiramans-weekly-outfit.png" alt="ref-a3" class="w-full h-full object-cover" onerror="this.style.display='none'"/>
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <p class="text-sm font-bold text-gray-800">③ 一周穿搭</p>
              <p class="text-[11px] text-gray-500 mb-1">7天不重样</p>
              <p class="text-[11px] text-gray-600 leading-snug mb-1">用高频出现强化包包的日常陪伴感，展示百搭与实用性</p>
              <p class="text-[10px] text-[#E86C20] truncate">tiktok.com/@moiramans/video/7649700873710456097</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Direction B: 测评 -->
      <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-3 border border-orange-100 flex flex-col">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-xl">📦</span>
          <div>
            <h3 class="text-base font-bold text-gray-800" style="font-family:'Noto Sans SC'">测评</h3>
            <p class="text-[11px] text-[#E86C20] font-medium" style="font-family:'Montserrat'">Unboxing & Review</p>
          </div>
        </div>
        <p class="text-[11px] text-gray-600 mb-2 leading-relaxed" style="font-family:'Noto Sans SC'">
          真实拆箱或翻包展示，突出质感、容量、分区、性价比。用第一视角让观众"云体验"产品，建立信任感。
        </p>

        <div class="flex flex-col gap-2" style="height:560px;">
          <!-- Reference 1 -->
          <div class="bg-white rounded-xl p-2 shadow-sm flex gap-3 overflow-hidden" style="height:180px;">
            <div class="w-[170px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
              <img src="./assets/images/ref/ambersharel-tech-work-bag.png" alt="ref-b1" class="w-full h-full object-cover" onerror="this.style.display='none'"/>
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <p class="text-sm font-bold text-gray-800">① 功能和场景展示</p>
              <p class="text-[11px] text-gray-500 mb-1">"My non negotiable as a woman in tech"</p>
              <p class="text-[11px] text-gray-600 leading-snug mb-1">上班场景导入→包身结构特写→装入工作物品+口播→通勤/咖啡厅实拍使用，覆盖 boss babe on the move 全动线</p>
              <p class="text-[10px] text-[#E86C20] truncate">tiktok.com/@ambersharel/video/7604997290419326221</p>
            </div>
          </div>

          <!-- Reference 2 -->
          <div class="bg-white rounded-xl p-2 shadow-sm flex gap-3 overflow-hidden" style="height:180px;">
            <div class="w-[170px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
              <img src="./assets/images/ref/user1682910208-unboxing.png" alt="ref-b2" class="w-full h-full object-cover" onerror="this.style.display='none'"/>
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <p class="text-sm font-bold text-gray-800">② 惊喜开箱 + 结构展示</p>
              <p class="text-[11px] text-gray-500 mb-1">开箱 → 外观 → 内部结构 → 上身展示</p>
              <p class="text-[11px] text-gray-600 leading-snug mb-1">惊喜开箱后展示外观与内部结构，最后背上包旋转展示适配性与上身效果</p>
              <p class="text-[10px] text-[#E86C20] truncate">tiktok.com/@user1682910208/video/7663046166493351200</p>
            </div>
          </div>

          <!-- Reference 3 -->
          <div class="bg-white rounded-xl p-2 shadow-sm flex gap-3 overflow-hidden" style="height:180px;">
            <div class="w-[170px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
              <img src="./assets/images/ref/instagram-pack-carry-on.png" alt="ref-b3" class="w-full h-full object-cover" onerror="this.style.display='none'"/>
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <p class="text-sm font-bold text-gray-800">③ Pack My Carry-On With Me</p>
              <p class="text-[11px] text-gray-500 mb-1">差旅场景 · 经典 packing 格式</p>
              <p class="text-[11px] text-gray-600 leading-snug mb-1">能装但不大，松弛包型依然精致；多背法设计，perfect airport bag</p>
              <p class="text-[10px] text-[#E86C20] truncate">instagram.com/p/DalrUQuSrgR</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
`);window.slideDataMap.set(12,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[45px]">
    <div class="flex items-center gap-3 mb-5">
      <div class="w-1 h-10 bg-[#F7941D] rounded-full"></div>
      <span class="text-sm font-semibold text-[#F7941D] uppercase tracking-wider" style="font-family:'Montserrat'">Hard Requirements</span>
    </div>
    <h2 class="text-4xl font-bold text-gray-900 mb-6" style="font-family:'Noto Sans SC'">硬性要求</h2>

    <div class="grid grid-cols-3 gap-5 mb-5">
      <!-- Video Specs -->
      <div class="col-span-2 bg-white rounded-xl p-5 border-l-4 border-red-500 shadow-sm">
        <h3 class="font-bold text-base text-gray-800 mb-4 flex items-center gap-2"><span>📹</span> 视频规格 / Video Specs</h3>
        <div class="grid grid-cols-2 gap-3">
          <div class="flex items-start gap-2 p-2.5 bg-red-50 rounded-lg"><span class="text-red-500 font-bold">▸</span><div><p class="text-sm font-medium text-gray-800">平台</p><p class="text-xs text-gray-500">TikTok</p></div></div>
          <div class="flex items-start gap-2 p-2.5 bg-red-50 rounded-lg"><span class="text-red-500 font-bold">▸</span><div><p class="text-sm font-medium text-gray-800">时长</p><p class="text-xs text-gray-500"><strong class="text-red-600">20-60 秒</strong> (必选范围)</p></div></div>
          <div class="flex items-start gap-2 p-2.5 bg-red-50 rounded-lg"><span class="text-red-500 font-bold">▸</span><div><p class="text-sm font-medium text-gray-800">格式</p><p class="text-xs text-gray-500">9:16 竖屏 (Vertical)</p></div></div>
          <div class="flex items-start gap-2 p-2.5 bg-red-50 rounded-lg"><span class="text-red-500 font-bold">▸</span><div><p class="text-sm font-medium text-gray-800">画质</p><p class="text-xs text-gray-500">高清 1080p 及以上</p></div></div>
        </div>
      </div>

      <!-- Must-have elements -->
      <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-5 border border-red-200">
        <h3 class="font-bold text-base text-red-800 mb-3 flex items-center gap-2">⚠️ 必含元素</h3>
        <ul class="space-y-2 text-xs text-red-900">
          <li class="flex items-start gap-1.5"><strong>#lovevook</strong> Hashtag 标签</li>
          <li class="flex items-start gap-1.5"><strong>#anchorcollection</strong> Hashtag 标签</li>
          <li>视频保留 ≥ 1年</li>
        </ul>
      </div>
    </div>

    <!-- Hashtags -->
    <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
      <h3 class="font-bold text-sm text-gray-700 mb-2"># 推荐Hashtag组合 / Recommended Hashtags</h3>
      <div class="flex flex-wrap gap-2">
        <span class="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs rounded-md font-mono">#lovevook</span>
        <span class="px-2.5 py-1 bg-pink-100 text-pink-800 text-xs rounded-md font-mono">#lovevookbags</span>
        <span class="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs rounded-md font-mono">#anchorcollection</span>
        <span class="px-2.5 py-1 bg-rose-100 text-rose-800 text-xs rounded-md font-mono">#lovevookanchorcollection</span>
        <span class="px-2.5 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-md font-mono">#What's in my bag</span>
        <span class="px-2.5 py-1 bg-purple-100 text-purple-800 text-xs rounded-md font-mono">#totebag</span>
        <span class="px-2.5 py-1 bg-green-100 text-green-800 text-xs rounded-md font-mono">#workbag</span>
        <span class="px-2.5 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-md font-mono">#laptopbag</span>
        <span class="px-2.5 py-1 bg-red-100 text-red-800 text-xs rounded-md font-mono">#hobobag</span>
        <span class="px-2.5 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-md font-mono">#worktote</span>
        <span class="px-2.5 py-1 bg-orange-100 text-orange-800 text-xs rounded-md font-mono">#outofoffice</span>
        <span class="px-2.5 py-1 bg-violet-100 text-violet-800 text-xs rounded-md font-mono">#OOTD</span>
        <span class="px-2.5 py-1 bg-lime-100 text-lime-800 text-xs rounded-md font-mono">#BagReview</span>
        <span class="px-2.5 py-1 bg-fuchsia-100 text-fuchsia-800 text-xs rounded-md font-mono">#BagOfTheDay</span>
      </div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(13,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[45px]">
    <div class="flex items-center gap-3 mb-5">
      <div class="w-1 h-10 bg-[#F7941D] rounded-full"></div>
      <span class="text-sm font-semibold text-[#F7941D] uppercase tracking-wider" style="font-family:'Montserrat'">Posting Guidelines</span>
    </div>
    <h2 class="text-4xl font-bold text-gray-900 mb-6" style="font-family:'Noto Sans SC'">发布规范</h2>

    <div class="grid grid-cols-2 gap-6 mb-5">
      <!-- Don'ts -->
      <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-5 border-2 border-red-300 shadow-sm">
        <h3 class="font-bold text-lg text-red-700 mb-4 flex items-center gap-2" style="font-family:'Noto Sans SC'">❌ 禁止事项 / Don'ts</h3>
        <ul class="space-y-2 text-sm text-gray-800">
          <li class="flex items-start gap-2 p-2 bg-red-100 rounded-lg">
            <span class="text-red-600 font-bold text-base leading-5">✕</span>
            <div><strong>严禁恶意拉踩</strong> — 不得诋毁、抹黑或贬低品牌声誉</div>
          </li>
          <li class="flex items-start gap-2 p-2 bg-red-100 rounded-lg">
            <span class="text-red-600 font-bold text-base leading-5">✕</span>
            <div><strong>严禁太过脱离</strong> — 严禁太过脱离我们沟通好的内容方向和脚本</div>
          </li>
          <li class="flex items-start gap-2 p-2 bg-red-100 rounded-lg">
            <span class="text-red-600 font-bold text-base leading-5">✕</span>
            <div><strong>严禁涉及政治敏感话题</strong> — 不讨论任何政治人物、事件、观点、地缘争议、选举等</div>
          </li>
          <li class="flex items-start gap-2 p-2 bg-red-100 rounded-lg">
            <span class="text-red-600 font-bold text-base leading-5">✕</span>
            <div><strong>严禁侵权</strong> — 未经授权不得使用他人图片/视频/文案</div>
          </li>
          <li class="flex items-start gap-2 p-2 bg-red-100 rounded-lg">
            <span class="text-red-600 font-bold text-base leading-5">✕</span>
            <div><strong>严禁虚假承诺</strong> — 不对产品功能做无法兑现的承诺</div>
          </li>
          <li class="flex items-start gap-2 p-2 bg-red-100 rounded-lg">
            <span class="text-red-600 font-bold text-base leading-5">✕</span>
            <div><strong>严禁未披露商业合作</strong> — 必须按TikTok平台要求标注 #ad / #sponsored</div>
          </li>
        </ul>
      </div>

      <!-- Do's -->
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border-2 border-green-300 shadow-sm">
        <h3 class="font-bold text-lg text-green-700 mb-4 flex items-center gap-2" style="font-family:'Noto Sans SC'">✅ 鼓励事项 / Do's</h3>
        <ul class="space-y-2 text-sm text-gray-800">
          <li class="flex items-start gap-2 p-2 bg-green-100 rounded-lg">
            <span class="text-green-600 font-bold text-base leading-5">✓</span>
            <div><strong>内容真实客观</strong> — 分享真实的产品使用体验</div>
          </li>
          <li class="flex items-start gap-2 p-2 bg-green-100 rounded-lg">
            <span class="text-green-600 font-bold text-base leading-5">✓</span>
            <div><strong>客观对比视频</strong> — 可展示自身优势或分享真实对比感受，禁止恶意拉踩</div>
          </li>
          <li class="flex items-start gap-2 p-2 bg-green-100 rounded-lg">
            <span class="text-green-600 font-bold text-base leading-5">✓</span>
            <div><strong>展示真实场景</strong> — 避免生硬、引起不适的硬广感</div>
          </li>
          <li class="flex items-start gap-2 p-2 bg-green-100 rounded-lg">
            <span class="text-green-600 font-bold text-base leading-5">✓</span>
            <div><strong>保持个人风格</strong> — 在品牌框架内发挥你的创意特色</div>
          </li>
          <li class="flex items-start gap-2 p-2 bg-green-100 rounded-lg">
            <span class="text-green-600 font-bold text-base leading-5">✓</span>
            <div><strong>优先使用自然光</strong> — 拍摄效果更真实亲切</div>
          </li>
          <li class="flex items-start gap-2 p-2 bg-green-100 rounded-lg">
            <span class="text-green-600 font-bold text-base leading-5">✓</span>
            <div><strong>配合品牌方投流推广</strong> — 配合品牌方必要时的投流推广等动作并加上标签</div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Violation Warning -->
    <div class="bg-gray-900 rounded-xl p-4 text-white flex items-center gap-4">
      <div class="text-3xl">⚠️</div>
      <div>
        <h4 class="font-bold text-base" style="font-family:'Noto Sans SC'">违规后果 / Violation Consequences</h4>
        <p class="text-sm text-gray-300 mt-1">若达人违反以上任一条款，品牌方有权立即终止合作，并对已产生的费用不予结算。</p>
      </div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(14,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[45px]">
    <div class="flex items-center gap-3 mb-5">
      <div class="w-1 h-10 bg-[#F7941D] rounded-full"></div>
      <span class="text-sm font-semibold text-[#F7941D] uppercase tracking-wider" style="font-family:'Montserrat'">Review Process</span>
    </div>
    <h2 class="text-4xl font-bold text-gray-900 mb-6" style="font-family:'Noto Sans SC'">素材交付审核流程</h2>

    <!-- 3-Step Process -->
    <div class="grid grid-cols-3 gap-5 mb-6">
      <!-- Step 1 -->
      <div class="bg-white rounded-xl p-5 border-l-4 border-[#F7941D] shadow-md relative">
        <div class="absolute -top-3 left-4 w-10 h-10 bg-[#F7941D] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg" style="font-family:'Montserrat'">1</div>
        <div class="mt-4">
          <h3 class="font-bold text-lg text-gray-800 mb-2" style="font-family:'Noto Sans SC'">脚本初审</h3>
          <p class="text-xs text-[#F7941D] font-semibold mb-3" style="font-family:'Montserrat'">Script Review</p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start gap-1.5"><span class="text-[#F7941D]">▸</span>达人完成创意构思后提交初稿脚本</li>
            <li class="flex items-start gap-1.5"><span class="text-[#F7941D]">▸</span>品牌方在<strong class="text-[#E86C20]">3个工作日</strong>内反馈修改意见</li>
            <li class="flex items-start gap-1.5"><span class="text-[#F7941D]">▸</span>确认通过后可进入拍摄阶段</li>
          </ul>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="bg-white rounded-xl p-5 border-l-4 border-[#E86C20] shadow-md relative">
        <div class="absolute -top-3 left-4 w-10 h-10 bg-[#E86C20] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg" style="font-family:'Montserrat'">2</div>
        <div class="mt-4">
          <h3 class="font-bold text-lg text-gray-800 mb-2" style="font-family:'Noto Sans SC'">成片审核</h3>
          <p class="text-xs text-[#E86C20] font-semibold mb-3" style="font-family:'Montserrat'">Final Review</p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start gap-1.5"><span class="text-[#E86C20]">▸</span>达人完成拍摄剪辑后提交成片</li>
            <li class="flex items-start gap-1.5"><span class="text-[#E86C20]">▸</span>品牌方确认内容无误后方可发布</li>
            <li class="flex items-start gap-1.5"><span class="text-[#E86C20]">▸</span>如需修改，<strong class="text-[#E86C20]">2个工作日</strong>内完成调整</li>
          </ul>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="bg-white rounded-xl p-5 border-l-4 border-[#333333] shadow-md relative">
        <div class="absolute -top-3 left-4 w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg" style="font-family:'Montserrat'">3</div>
        <div class="mt-4">
          <h3 class="font-bold text-lg text-gray-800 mb-2" style="font-family:'Noto Sans SC'">正式发布</h3>
          <p class="text-xs text-[#333333] font-semibold mb-3" style="font-family:'Montserrat'">Publish</p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start gap-1.5"><span class="text-[#333333]">▸</span>审核通过后按约定时间发布</li>
            <li class="flex items-start gap-1.5"><span class="text-[#333333]">▸</span>发布后将链接发送给品牌方备案</li>
            <li class="flex items-start gap-1.5"><span class="text-[#333333]">▸</span>品牌方进行转发和二次传播支持</li>
          </ul>
          <div class="mt-3 p-2 bg-orange-50 rounded-lg border border-orange-200">
            <p class="text-xs text-[#E86C20] font-bold">⏰ 视频发布时间</p>
            <p class="text-xs text-gray-600 mt-0.5">产品确认到货的<strong class="text-[#E86C20]"> 10 个工作日</strong>内</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Timeline & Flow Diagram -->
    <div class="bg-gradient-to-r from-[#F7941D] to-[#E86C20] rounded-xl p-5 text-white flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div class="text-3xl">⏱</div>
        <div>
          <h4 class="font-bold text-base" style="font-family:'Noto Sans SC'">时效提醒</h4>
          <p class="text-sm text-white/90">请预留充足的沟通和修改时间，建议<strong>提前5-7天</strong>提交初稿脚本</p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="bg-white/20 rounded-lg px-4 py-2 text-center">
          <p class="text-xs font-semibold" style="font-family:'Montserrat'">SCRIPT</p>
          <p class="text-xs">脚本 →</p>
        </div>
        <div class="text-white/60">→</div>
        <div class="bg-white/20 rounded-lg px-4 py-2 text-center">
          <p class="text-xs font-semibold" style="font-family:'Montserrat'">FILMING</p>
          <p class="text-xs">拍摄 →</p>
        </div>
        <div class="text-white/60">→</div>
        <div class="bg-white/20 rounded-lg px-4 py-2 text-center">
          <p class="text-xs font-semibold" style="font-family:'Montserrat'">REVIEW</p>
          <p class="text-xs">审核 →</p>
        </div>
        <div class="text-white/60">→</div>
        <div class="bg-white/20 rounded-lg px-4 py-2 text-center">
          <p class="text-xs font-semibold" style="font-family:'Montserrat'">PUBLISH</p>
          <p class="text-xs">发布 ✓</p>
        </div>
      </div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(15,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[45px]">
    <div class="flex items-center gap-3 mb-5">
      <div class="w-1 h-10 bg-[#F7941D] rounded-full"></div>
      <span class="text-sm font-semibold text-[#F7941D] uppercase tracking-wider" style="font-family:'Montserrat'">Benefits & Terms</span>
    </div>
    <h2 class="text-4xl font-bold text-gray-900 mb-2" style="font-family:'Noto Sans SC'">合作权益与结算规则</h2>
    <p class="text-base text-gray-500 mb-6" style="font-family:'Montserrat'">Gift Exchange or Sample + Flat Fee — Simple, Transparent, Fair</p>

    <div class="grid grid-cols-2 gap-6">
      <!-- Left: What We Offer -->
      <div>
        <h3 class="font-bold text-lg text-[#F7941D] mb-4 flex items-center gap-2" style="font-family:'Noto Sans SC'">🎁 我们提供的支持 / What We Offer</h3>

        <!-- Sample Support (Gift) -->
        <div class="bg-white rounded-xl p-4 mb-4 border border-gray-200 shadow-sm">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-9 h-9 bg-[#F7941D] rounded-lg flex items-center justify-center text-white text-lg">★</div>
            <div>
              <h4 class="font-bold text-sm text-gray-800" style="font-family:'Noto Sans SC'">样品置换 (Gift Exchange)</h4>
              <p class="text-xs text-[#F7941D]" style="font-family:'Montserrat'">Free Product + Shipping</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 leading-relaxed">免费提供LOVEVOOK The Anchor Collection包包一个（或多个），运费由品牌方<strong>全额承担</strong>。样品归属权归达人所有。</p>
        </div>

        <!-- Sample + Flat Fee -->
        <div class="bg-white rounded-xl p-4 mb-4 border-2 border-[#F7941D] shadow-md">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-9 h-9 bg-[#E86C20] rounded-lg flex items-center justify-center text-white text-lg">💰</div>
            <div>
              <h4 class="font-bold text-sm text-gray-800" style="font-family:'Noto Sans SC'">寄样 + 固定一口价</h4>
              <p class="text-xs text-[#E86C20]" style="font-family:'Montserrat'">Sample + Flat Fee</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 leading-relaxed">品牌方寄送样品，并根据达人量级与内容形式，双方协商确定<strong>固定一口价</strong>。价格透明，无隐藏条款，合作前确认。</p>
        </div>

        <!-- Creative Support -->
        <div class="bg-white rounded-xl p-4 mb-4 border border-gray-200 shadow-sm">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-9 h-9 bg-[#333333] rounded-lg flex items-center justify-center text-white text-lg">★</div>
            <div>
              <h4 class="font-bold text-sm text-gray-800" style="font-family:'Noto Sans SC'">创作支持</h4>
              <p class="text-xs text-[#333333]" style="font-family:'Montserrat'">Creative Assets</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 leading-relaxed">提供全套产品高清素材、核心卖点提炼文案、品牌Logo及视觉资产，协助达人优化选题与内容方向。</p>
        </div>
      </div>

      <!-- Right: Payment Terms -->
      <div>
        <h3 class="font-bold text-lg text-[#E86C20] mb-4 flex items-center gap-2" style="font-family:'Noto Sans SC'">📋 结算规则 / Payment Terms</h3>

        <div class="bg-gradient-to-br from-[#F7941D]/10 to-[#E86C20]/10 rounded-xl p-5 border-2 border-[#F7941D] shadow-md">
          <!-- Collaboration Model -->
          <div class="flex items-center justify-between mb-4 p-3 bg-white rounded-lg shadow-sm">
            <div>
              <h4 class="font-bold text-sm text-gray-800" style="font-family:'Noto Sans SC'">合作形式</h4>
              <p class="text-xs text-[#666666]">Collaboration Model</p>
            </div>
            <div class="text-right">
              <span class="text-base font-bold text-[#F7941D]" style="font-family:'Montserrat'">Gift <span class="text-gray-500">or</span> Sample+Fee</span>
              <p class="text-xs text-[#666666]">产品置换 或 寄样+一口价</p>
            </div>
          </div>

          <!-- Payment Method -->
          <div class="flex items-center justify-between mb-4 p-3 bg-white rounded-lg shadow-sm">
            <div>
              <h4 class="font-bold text-sm text-gray-800" style="font-family:'Noto Sans SC'">付款方式</h4>
              <p class="text-xs text-[#666666]">Payment Method</p>
            </div>
            <div class="text-right">
              <span class="text-base font-bold text-[#E86C20]" style="font-family:'Montserrat'">按合作形式</span>
              <p class="text-xs text-[#666666]">置换无现金 / 一口价合作前确认</p>
            </div>
          </div>

          <!-- Settlement Conditions -->
          <div class="flex items-center justify-between mb-4 p-3 bg-white rounded-lg shadow-sm">
            <div>
              <h4 class="font-bold text-sm text-gray-800" style="font-family:'Noto Sans SC'">结算条件</h4>
              <p class="text-xs text-[#666666]">Settlement Conditions</p>
            </div>
            <p class="text-sm text-gray-700">成片审核通过并发布后结算</p>
          </div>

          <!-- Settlement Cycle -->
          <div class="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
            <div>
              <h4 class="font-bold text-sm text-gray-800" style="font-family:'Noto Sans SC'">结算周期</h4>
              <p class="text-xs text-[#666666]">Payment Cycle</p>
            </div>
            <div class="text-right">
              <span class="text-xl font-bold text-[#E86C20]" style="font-family:'Montserrat'">~15</span>
              <span class="text-sm font-medium text-gray-700">个工作日</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(16,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden" style="background: url('./assets/images/slide-16-bg.jpg') center center / cover no-repeat">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col items-center justify-center text-center">
    <!-- Collection Name -->
    <div class="bg-white/20 rounded-full px-6 py-2 backdrop-blur-sm mb-4">
      <p class="text-sm font-bold text-white tracking-widest" style="font-family:'Montserrat'">The Anchor Collection</p>
    </div>

    <!-- Main Title -->
    <h1 class="text-4xl font-bold text-white mb-2 drop-shadow-lg" style="font-family:'Noto Sans SC'">身份在变，底气不变。</h1>
    <h2 class="text-xl font-medium text-white/90 mb-2" style="font-family:'Montserrat'">Roles Evolve, Confidence Remains.</h2>
    <h3 class="text-base text-white/80 mb-6" style="font-family:'Noto Sans SC'">她的每一种状态，都有专属的形态。</h3>

    <!-- Divider -->
    <div class="w-24 h-1 bg-white rounded-full mb-6 opacity-70"></div>

    <h4 class="text-2xl font-bold text-white mb-6 drop-shadow" style="font-family:'Montserrat','Noto Sans SC'">Let's Create Something Beautiful Together</h4>

    <!-- Contact Cards -->
    <div class="grid grid-cols-4 gap-4 mb-8">
      <div class="bg-white/95 rounded-xl p-4 shadow-lg backdrop-blur-sm">
        <div class="text-2xl mb-2">👩</div>
        <p class="text-xs text-[#666666] font-medium mb-1">品牌对接人</p>
        <p class="text-sm font-bold text-gray-900" style="font-family:'Noto Sans SC'">Atalanta</p>
      </div>
      <div class="bg-white/95 rounded-xl p-4 shadow-lg backdrop-blur-sm">
        <div class="text-2xl mb-2">📧</div>
        <p class="text-xs text-[#666666] font-medium mb-1">邮箱 Email</p>
        <p class="text-sm font-bold text-[#F7941D]" style="font-family:'Montserrat'">collab@lovevook.com</p>
      </div>
      <div class="bg-white/95 rounded-xl p-4 shadow-lg backdrop-blur-sm">
        <div class="text-2xl mb-2">🌐</div>
        <p class="text-xs text-[#666666] font-medium mb-1">官网 Website</p>
        <p class="text-sm font-bold text-gray-900" style="font-family:'Montserrat'">lovevook.com</p>
      </div>
      <div class="bg-white/95 rounded-xl p-4 shadow-lg backdrop-blur-sm">
        <div class="text-2xl mb-2">🎵</div>
        <p class="text-xs text-[#666666] font-medium mb-1">TikTok</p>
        <p class="text-sm font-bold text-gray-900" style="font-family:'Montserrat'">@lovevook</p>
      </div>
    </div>

    <!-- Brand Slogan -->
    <div class="bg-white/20 rounded-full px-8 py-3 backdrop-blur-sm">
      <p class="text-lg font-semibold text-white tracking-wide" style="font-family:'Montserrat'">LOVEVOOK &nbsp;|&nbsp; Color Your Life &nbsp;|&nbsp; TikTok Campaign 2026</p>
    </div>
  </div>
</div>
`);
