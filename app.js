const CONFIG = { zGap: 900, camSpeed: 2.5, cullNear: -1400, cullFar: 450 };

function getOrbitRadius() {
    const styles = getComputedStyle(document.documentElement);
    const rx = parseFloat(styles.getPropertyValue('--orbit-radius-x')) || 0.25;
    const ry = parseFloat(styles.getPropertyValue('--orbit-radius-y')) || 0.25;
    return { rx, ry };
}

const SWOT_TIMELINE = [
    {
        type: 'section_header',
        title: 'SWOT ANALİZİ',
        subtitle: 'FƏRDİ İNKİŞAF VƏ STRATEJİ YANAŞMA',
        flickerIndices: [0, 1, 4]
    },
    {
        type: 'card_group',
        items: [
            { 
                badge: 'S', title: 'GÜCLÜ TƏRƏFLƏR', 
                points: [
                    'Sürətli adaptasiya: Yeni texnologiyaları qısa müddətdə mənimsəmə və tətbiq etmə bacarığı.',
                    'Çoxşaxəli texniki baza: Frontend və Backend (Full Stack) inteqrasiyasında praktiki təcrübə.',
                    'Sistemli düşüncə: Mürəkkəb problemləri sadə və işlək həll yollarına çevirmə qabiliyyəti.',
                    'Nəticəyönümlülük: Çətinliklərdən çəkinməyən, hədəfə fokuslanan çevik iş tərzi.'
                ],
                cardClass: 'card-s', cursorClass: 'cursor-s' 
            },
            { 
                badge: 'W', title: 'İNKİŞAF SAHƏLƏRİ', 
                points: [
                    'Strukturlaşdırılmış planlama: Mürəkkəb layihələrdə daha dərin inzibati və sistemli planlama vərdişləri.',
                    'Komanda sinerjisi: Fərdi icra bacarıqları ilə yanaşı, korporativ komanda işində əməkdaşlıq dinamikasını gücləndirmə.',
                    'Dərin ixtisaslaşma: Geniş bilik spektrini spesifik sahələrdə dərin ekspertiza ilə balanslaşdırma.',
                    'Analitik fokus: Uzunmüddətli layihələrdə diqqəti dəqiq strateji hədəflərə fokuslamaq.'
                ],
                cardClass: 'card-w', cursorClass: 'cursor-w' 
            },
            { 
                badge: 'O', title: 'İMKANLAR', 
                points: [
                    'Dövlət və özəl sektorda rəqəmsal transformasiya layihələrində iştirak.',
                    'Qlobal İT standartlarını yerli həllərdə tətbiq etmə potensialı.',
                    'Beynəlxalq dil bilikləri hesabına müasir texnoloji trendləri operativ izləmək.',
                    'Mentorluq və bilik mübadiləsi: İT icmasında öz təcrübəsini bölüşmək.'
                ],
                cardClass: 'card-o', cursorClass: 'cursor-o' 
            },
            { 
                badge: 'T', title: 'XARİCİ RİSKLƏR', 
                points: [
                    'Texnoloji dinamika: Sürətlə dəyişən bazar tələblərinə uyğunlaşma zərurəti.',
                    'Sektorun seçimi: İxtisaslaşma sahəsində düzgün strateji hədəflər müəyyən etmə riski.',
                    'Bazarın rəqabət mühiti: Texnologiyanın hər an yeni və daha çevik həllərlə əvəzlənməsi.',
                    'İnformasiya bolluğu: Çoxsaylı sahələr arasında prioriteti doğru müəyyən etmək məsuliyyəti.'
                ],
                cardClass: 'card-t', cursorClass: 'cursor-t' 
            }
        ]
    },
    {
        type: 'section_header',
        title: 'GÜCLÜ TƏRƏFLƏR',
        subtitle: 'ƏTRAFLI ANALİZ',
        flickerIndices: [0, 3, 7]
    },
    {
        type: 'card_group',
        items: [
            { badge: 'S', title: 'SÜRƏTLİ ADAPTASİYA', points: ['Yeni proqramlaşdırma dillərini qısa müddətdə mənimsəmək.', 'Texniki sənədləri oxuyub praktikada tətbiq etmək bacarığı.', 'Sıfırdan başlayaraq işlək layihələr qurmaq təcrübəsi.'], cardClass: 'card-s', cursorClass: 'cursor-s' },
            { badge: 'S', title: 'FULL STACK İNKİŞAF', points: ['Python/Django backend və React frontend üzrə təcrübə.', 'Tam funksional veb tətbiqləri sıfırdan qurmaq bacarığı.', 'Verilənlər bazası dizaynı və API inteqrasiyası.'], cardClass: 'card-s', cursorClass: 'cursor-s' },
            { badge: 'S', title: 'SİSTEMLİ DÜŞÜNCƏ', points: ['Veb inkişafla yanaşı digər İT sahələrinin arxitekturasını anlamaq.', 'Yeni texnologiyaları araşdırıb biznes tələblərinə uyğunlaşdırmaq.', 'Dəyişən şərtlərə uyğun effektiv iş axınları yaratmaq.'], cardClass: 'card-s', cursorClass: 'cursor-s' },
            { badge: 'S', title: 'NƏTİCƏYÖNLÜLÜK', points: ['Çətin texniki tapşırıqları qəbul edib həllə çatdırmaq.', 'Şəxsi məhsuldarlıqla özünü davamlı motivasiya etmək.', 'Daimi təkmilləşmə üçün daxili intizam və əzm. '], cardClass: 'card-s', cursorClass: 'cursor-s' }
        ]
    },
    {
        type: 'section_header',
        title: 'İNKİŞAF SAHƏLƏRİ',
        subtitle: 'STRATEJİ TƏKMİLLƏŞMƏ',
        flickerIndices: [0, 2, 5]
    },
    {
        type: 'card_group',
        items: [
            { badge: 'W', title: 'PLANLAMA VƏ STRUKTUR', points: ['Mürəkkəb layihələrdə uzunmüddətli sistemli planlama.', 'Öz-özünə öyrənmə prosesində nizam-intizamı qorumaq.', 'İnzibati və texniki proseslərin balanslaşdırılması.'], cardClass: 'card-w', cursorClass: 'cursor-w' },
            { badge: 'W', title: 'KOMANDA SİNERJİSİ', points: ['Fərdi işdən komanda əməkdaşlığına keçid dinamikası.', 'Layihələrdə effektiv ünsiyyət və bilik bölüşümü.', 'Korporativ mühitdə əməkdaşlıq bacarıqlarının təkmilləşdirilməsi.'], cardClass: 'card-w', cursorClass: 'cursor-w' },
            { badge: 'W', title: 'DƏRİN İXTİSASLAŞMA', points: ['Geniş bilik spektrini spesifik sahələrdə ekspertiza ilə balanslaşdırmaq.', 'Karyera yolunda konkret strateji istiqamət seçimi.', 'Daha dərin nəzəri bilik tələb edən sahələrdə davamlılıq.'], cardClass: 'card-w', cursorClass: 'cursor-w' },
            { badge: 'W', title: 'STRATEJİ FOKUS', points: ['Layihələrdə diqqəti dəqiq strateji hədəflərə yönəltmək.', 'Gündəlik tapşırıqları böyük qlobal məqsədlərlə əlaqələndirmək.', 'Prioritetlərin düzgün müəyyən edilməsi.'], cardClass: 'card-w', cursorClass: 'cursor-w' }
        ]
    },
    {
        type: 'section_header',
        title: 'İNKİŞAF İMKANLARI',
        subtitle: 'GƏLƏCƏK PERSPEKTİVLƏRİ',
        flickerIndices: [0, 4, 7]
    },
    {
        type: 'card_group',
        items: [
            { badge: 'O', title: 'RƏQƏMSAL TRANSFORMASİYA', points: ['Dövlət və özəl sektorda innovativ həllərin tətbiqi.', 'İT infrastrukturlarının müasir tələblərə uyğunlaşdırılması.', 'Texnologiyalar vasitəsilə ictimai xidmətlərin səmərəliliyini artırmaq.'], cardClass: 'card-o', cursorClass: 'cursor-o' },
            { badge: 'O', title: 'BİLİK MÜBADİLƏSİ', points: ['İT icmasında mentorluq proqramlarına qoşulmaq.', 'Açıq qaynaq kodlu layihələrlə ekosistemi gücləndirmək.', 'Konfrans və seminarlarda iştirakla şəbəkələşmə.'], cardClass: 'card-o', cursorClass: 'cursor-o' },
            { badge: 'O', title: 'STRATEJİ VAXT YÖNETİMİ', points: ['Yeni texnologiyaları effektiv öyrənmək üçün resursların optimallaşdırılması.', 'Uzunmüddətli karyera üçün düzgün tərəfdaşlıqlar.', 'İT sektorunun dinamikasına uyğun çevik inkişaf.'], cardClass: 'card-o', cursorClass: 'cursor-o' },
            { badge: 'O', title: 'QÜRSƏL PERSPEKTİV', points: ['Beynəlxalq təcrübəni yerli bazarda tətbiq etmək.', 'Qlobal texnoloji trendləri operativ təhlil etmək.', 'Dillər və mədəniyyətlərarası əməkdaşlıq gücü.'], cardClass: 'card-o', cursorClass: 'cursor-o' }
        ]
    },
    {
        type: 'section_header',
        title: 'XARİCİ RİSKLƏR',
        subtitle: 'RİSK QİYMƏTLƏNDİRMƏSİ',
        flickerIndices: [0, 3, 6]
    },
    {
        type: 'card_group',
        items: [
            { badge: 'T', title: 'TEXNOLOJİ DİNAMİKA', points: ['Sürətli inkişafın köhnə texnologiyaları aktuallıqdan salması.', 'Davamlı yenilənmə və təkmilləşmə zərurəti.', 'Bazarın dəyişən tələblərinə operativ uyğunlaşma.'], cardClass: 'card-t', cursorClass: 'cursor-t' },
            { badge: 'T', title: 'STRATEJİ İSTİQAMƏT', points: ['İxtisaslaşma sahəsində düzgün prioriteti müəyyən etmək.', 'Texnoloji seçimlərin gələcək bazara uyğunluğu.', 'İnvestisiya edilən zamanın ən effektiv sahəyə yönəlməsi.'], cardClass: 'card-t', cursorClass: 'cursor-t' },
            { badge: 'T', title: 'RƏQABƏT MÜHİTİ', points: ['Daha sürətli və innovativ həllərin bazar payını əvəzləməsi.', 'İT sektorunda rəqabətin daimi artması.', 'Rəqabətədavamlılıq üçün daimi diferensiasiya.'], cardClass: 'card-t', cursorClass: 'cursor-t' },
            { badge: 'T', title: 'MƏLUMAT AXINI', points: ['Çoxsaylı texnoloji mənbələr arasında ən etibarlısını seçmək.', 'İnformasiya bolluğunda əsas hədəfi qorumaq.', 'Səthi biliklərlə dərin ekspertiza arasındakı tarazlıq.'], cardClass: 'card-t', cursorClass: 'cursor-t' }
        ]
    },
    {
        type: 'section_header',
        title: 'NƏTİCƏ',
        subtitle: 'STRATEJİ YOL XƏRİTƏSİ',
        flickerIndices: [0, 2, 5]
    }
];

function cutTitle(text) { return text.split('').map(ch => ch === ' ' ? ' ' : `<span class="cut">${ch}</span>`).join(''); }
function injectFlickers(text, indices) { const chars = text.split(''); indices.forEach(idx => { if (idx < chars.length) chars[idx] = `<span class="flicker">${chars[idx]}</span>`; }); return chars.join(''); }
function buildCardContent(data) {
    const pointsHTML = data.points.map(point => `<li class="card-list-item"><span class="bullet">■</span><span>${point}</span></li>`).join('');
    return `<div class="card-meta"><span>HESABAT</span><span>№${String(Math.floor(Math.random()*99)+1).padStart(2,'0')}</span></div><h2 class="card-title">${cutTitle(data.title)}</h2><div class="card-divider"></div><ul class="card-list">${pointsHTML}</ul><div class="card-watermark">${data.badge}</div>`;
}

function compileTimeline(timeline) {
    const items = [];
    let z = 0;
    const orbit = getOrbitRadius();
    timeline.forEach(block => {
        if (block.type === 'section_header') { items.push({ type: 'section_header', title: block.title, subtitle: block.subtitle, flickerIndices: block.flickerIndices, baseZ: -z * CONFIG.zGap }); z++; }
        else if (block.type === 'card_group') { block.items.forEach((card, i) => { const a = (i / block.items.length) * Math.PI * 4; items.push({ type: 'card', ...card, rot: ((i * 37) % 9) - 4, x: Math.cos(a) * (window.innerWidth * orbit.rx), y: Math.sin(a) * (window.innerHeight * orbit.ry), baseZ: -z * CONFIG.zGap }); z++; }); }
    });
    return items;
}
const TIMELINE_ITEMS = compileTimeline(SWOT_TIMELINE);
CONFIG.loopSize = TIMELINE_ITEMS.length * CONFIG.zGap;

const state = { scroll: 0, velocity: 0, targetSpeed: 0, mouseX: 0, mouseY: 0 };
const world = document.getElementById('world');
const items = [];
const root = document.documentElement;
const ropeSvg = document.getElementById('ropeConnections');
const gooeyCursor = document.getElementById('gooeyCursor');
const cardRefs = [];
let activeCursorClass = '';
const isMobile = window.innerWidth <= 768;

let mouse = { x: window.innerWidth/2, y: window.innerHeight/2 };
let cursor = { x: mouse.x, y: mouse.y };
window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; root.style.setProperty('--mouse-x', `${e.clientX}px`); root.style.setProperty('--mouse-y', `${e.clientY}px`); state.mouseX = (e.clientX/window.innerWidth-0.5)*2; state.mouseY = (e.clientY/window.innerHeight-0.5)*2; });

window.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    mouse.x = touch.clientX; mouse.y = touch.clientY;
    root.style.setProperty('--mouse-x', `${touch.clientX}px`);
    root.style.setProperty('--mouse-y', `${touch.clientY}px`);
    state.mouseX = (touch.clientX/window.innerWidth-0.5)*2;
    state.mouseY = (touch.clientY/window.innerHeight-0.5)*2;
}, { passive: true });

const CURSOR = { amount: 16, sineDots: 5, width: 20, idleTimeout: 180, dots: [], timeoutID: null, idle: false };
class CursorDot { constructor(i=0){ this.i=i; this.as=0.05; this.x=0;this.y=0; this.sc=1-0.04*i; this.rg=CURSOR.width/2-CURSOR.width/2*this.sc+2; this.el=document.createElement("span"); this.el.style.transform=`scale(${this.sc})`; gooeyCursor.appendChild(this.el); } lock(){ this.lx=this.x;this.ly=this.y; this.ax=Math.PI*2*Math.random(); this.ay=Math.PI*2*Math.random(); } draw(){ if(!CURSOR.idle||this.i<=CURSOR.sineDots) this.el.style.transform=`translate(${this.x}px,${this.y}px) scale(${this.sc})`; else { this.ax+=this.as;this.ay+=this.as; this.y=this.ly+Math.sin(this.ay)*this.rg; this.x=this.lx+Math.sin(this.ax)*this.rg; this.el.style.transform=`translate(${this.x}px,${this.y}px) scale(${this.sc})`; } } }
for(let i=0;i<CURSOR.amount;i++) CURSOR.dots.push(new CursorDot(i));
function startIdleTimer(){ clearTimeout(CURSOR.timeoutID); CURSOR.timeoutID=setTimeout(()=>{CURSOR.idle=true;CURSOR.dots.forEach(d=>d.lock());},CURSOR.idleTimeout); CURSOR.idle=false; }

function initVanta(){ if(window.VANTA&&window.VANTA.CLOUDS){ window.VANTA.CLOUDS({el:"#vantaLayer",mouseControls:false,touchControls:false,gyroControls:false,minHeight:200,minWidth:200,skyColor:0x000000,cloudColor:0x1a1a2e,cloudShadowColor:0x000000,sunColor:0x000000,sunGlareColor:0x000000,sunlightColor:0x000000,speed:0.8}); } else setTimeout(initVanta,300); }
initVanta();

function getCardCenter(el){ if(!el)return{x:0,y:0}; const r=el.getBoundingClientRect(); return{x:r.left+r.width/2,y:r.top+r.height/2}; }
function updateRopeConnections(){ const v=cardRefs.filter(r=>r.el&&r.el.style.display!=='none'&&parseFloat(r.el.style.opacity)>0.15); if(v.length<2){ropeSvg.innerHTML='';return;} const g={S:[],W:[],O:[],T:[]}; v.forEach(r=>{const c=r.el.querySelector('.deconstructed-card');if(c&&g[r.badge])g[r.badge].push(c);}); let p=''; Object.values(g).forEach(gr=>{for(let i=0;i<gr.length-1;i++){const a=getCardCenter(gr[i]),b=getCardCenter(gr[i+1]); p+=`<path d="M${a.x},${a.y} Q${(a.x+b.x)/2},${(a.y+b.y)/2+15} ${b.x},${b.y}" class="rope-active"/>`;}}); ropeSvg.innerHTML=p; }

function init(){ TIMELINE_ITEMS.forEach((data,i)=>{ const el=document.createElement('div'); el.className='item'; if(data.type==='section_header'){ el.innerHTML=`<div class="section-header"><div class="stamp-badge">HESABAT</div><h1 class="header-title">${injectFlickers(data.title,data.flickerIndices)}</h1><span class="header-subtitle">${data.subtitle}</span></div>`; items.push({el,type:'section_header',x:0,y:0,baseZ:data.baseZ,visible:false}); } else { el.innerHTML=`<div class="deconstructed-card ${data.cardClass}" style="--rot:${data.rot}deg;"><div class="card-pin"></div>${buildCardContent(data)}</div>`; const cardEl=el.querySelector('.deconstructed-card'); cardRefs.push({el,badge:data.badge}); cardEl.addEventListener('mouseenter',()=>{ if(isMobile)return; root.style.setProperty('--spotlight-size','400px'); if(activeCursorClass)document.body.classList.remove(activeCursorClass); activeCursorClass=data.cursorClass; document.body.classList.add(activeCursorClass); }); cardEl.addEventListener('mouseleave',()=>{ if(isMobile)return; root.style.setProperty('--spotlight-size','280px'); if(activeCursorClass)document.body.classList.remove(activeCursorClass); activeCursorClass=''; }); items.push({el,type:'card',x:data.x,y:data.y,rot:data.rot,baseZ:data.baseZ,visible:false}); } el.style.display='none'; world.appendChild(el); }); }
init();

const lenis=new Lenis({smooth:true,lerp:0.04,direction:'vertical',gestureDirection:'vertical',smoothTouch:true});
lenis.on('scroll',({scroll,velocity})=>{state.scroll=scroll;state.targetSpeed=velocity;});

function raf(time){ lenis.raf(time); 
    if(!isMobile){ cursor.x+=(mouse.x-cursor.x)*0.18; cursor.y+=(mouse.y-cursor.y)*0.18; startIdleTimer(); CURSOR.dots.forEach((dot,i,dots)=>{ dot.x=cursor.x-CURSOR.width/2; dot.y=cursor.y-CURSOR.width/2; if(i>0){const prev=dots[i-1]; dot.x+=(prev.x-dot.x)*0.4*i; dot.y+=(prev.y-dot.y)*0.4*i;} dot.draw(); }); }
    state.velocity+=(state.targetSpeed-state.velocity)*0.05; world.style.transform=`rotateX(${state.mouseY*1.0}deg) rotateY(${state.mouseX*1.0}deg) translateZ(0)`; const camZ=state.scroll*CONFIG.camSpeed,modC=CONFIG.loopSize; for(let i=0;i<items.length;i++){ const item=items[i]; if(!item.el)continue; let vizZ=((item.baseZ+camZ)%modC+modC)%modC; if(vizZ>modC/2)vizZ-=modC; if(vizZ<=CONFIG.cullNear||vizZ>=CONFIG.cullFar){if(item.visible){item.el.style.display='none';item.visible=false;}continue;} if(!item.visible){item.el.style.display='flex';item.visible=true;} let alpha=1; if(vizZ<-900)alpha=(vizZ-CONFIG.cullNear)/500; if(vizZ>150)alpha=Math.min(alpha,1-((vizZ-150)/300)); alpha=alpha<0.02?0:alpha>0.99?1:Math.round(alpha*100)/100; item.el.style.opacity=alpha; if(alpha<0.02)continue; let tx=(item.x||0)+(item.type==='card'?Math.sin(time*0.0005+(item.x||0)*0.006)*1.0:0); item.el.style.transform=`translate3d(${Math.round(tx)}px,${Math.round(item.y||0)}px,${Math.round(vizZ)}px)`; } updateRopeConnections(); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const orbit = getOrbitRadius();
        items.forEach((item, i) => {
            if (item.type === 'card' && TIMELINE_ITEMS[i]) {
                const cardIndex = TIMELINE_ITEMS.findIndex(ti => ti.type === 'card' && ti.title === item.title);
                if (cardIndex >= 0) {
                    const a = (cardIndex % 4 / 4) * Math.PI * 4;
                    item.x = Math.cos(a) * (window.innerWidth * orbit.rx);
                    item.y = Math.sin(a) * (window.innerHeight * orbit.ry);
                }
            }
        });
    }, 250);
});