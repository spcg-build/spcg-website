// Draft v2 hero: "By project" swaps headline, subcopy, CTA and render. "By role" uses site.js audiences (.r-pill) and picks a matching render.
(function(){var sec=document.querySelector('.r-ht');if(!sec)return;
var h1=document.getElementById('htH1'),sub=document.getElementById('htSub'),cta=document.getElementById('htCta'),ctaT=document.getElementById('htCtaText'),st=document.getElementById('htStatus');
var rail=sec.querySelector('.r-ht-rail'),tabs=[].slice.call(sec.querySelectorAll('.r-ht-proj')),pills=[].slice.call(sec.querySelectorAll('.r-pill'));
var mob=function(){return innerWidth<=1100};
function toTop(){if(mob()){var y=sec.getBoundingClientRect().top+scrollY;scrollTo({top:y,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}}
function setTab(b){tabs.forEach(function(x){var o=x===b;x.setAttribute('aria-checked',o?'true':'false');x.tabIndex=o?0:-1})}
function set(t,focus){var b=tabs.filter(function(x){return x.dataset.type===t})[0];if(!b)return;
if(window.SPCG_clearAudience)window.SPCG_clearAudience();
sec.dataset.active=t;setTab(b);if(focus)b.focus();
sec.classList.add('is-swapping');setTimeout(function(){h1.textContent=b.dataset.h1;sub.textContent=b.dataset.sub;cta.innerHTML=b.dataset.cta+' <span aria-hidden="true" style="color: #C96A1E">→</span>';cta.setAttribute('href','/request-a-budget/'+(t==='all'?'':'?type='+t));sec.classList.remove('is-swapping')},180);
st.textContent=t==='all'?'Showing all work':'Showing '+b.textContent+' work';toTop();}
tabs.forEach(function(b,i){b.addEventListener('click',function(){set(b.dataset.type)});
 b.addEventListener('keydown',function(e){var d=e.key==='ArrowRight'||e.key==='ArrowDown'?1:e.key==='ArrowLeft'||e.key==='ArrowUp'?-1:0;if(!d)return;e.preventDefault();set(tabs[(i+d+tabs.length)%tabs.length].dataset.type,true)})});
pills.forEach(function(p){p.addEventListener('click',function(){setTimeout(function(){var on=p.getAttribute('aria-pressed')==='true';sec.dataset.active=on?(p.dataset.show||'all'):'all';
 if(!on){setTab(tabs[0])}st.textContent=on?'Showing work for '+p.textContent:'Showing all work';toTop();},0)})});
[].forEach.call(sec.querySelectorAll('.r-ht-mode'),function(m){m.addEventListener('click',function(){var md=m.dataset.mode;rail.dataset.mode=md;
 [].forEach.call(sec.querySelectorAll('.r-ht-mode'),function(x){var o=x===m;x.classList.toggle('is-on',o);x.setAttribute('aria-selected',o?'true':'false')});
 sec.querySelector('.r-ht-tabs-p').hidden=md!=='project';sec.querySelector('.r-ht-tabs-r').hidden=md!=='role';
 if(md==='project'){var on=pills.filter(function(p){return p.getAttribute('aria-pressed')==='true'})[0];if(on)on.click();}else{set('all');}})});
function toRole(){var m=sec.querySelector('.r-ht-mode[data-mode="role"]');if(m)m.click();var y=rail.getBoundingClientRect().top+scrollY-140;scrollTo({top:y,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}
[].forEach.call(document.querySelectorAll('a[href$="#serve"]'),function(a){a.addEventListener('click',function(e){e.preventDefault();var mp=document.getElementById('menuPanel');if(mp&&!mp.hidden){var mb=document.getElementById('menuBtn');if(mb)mb.click();}toRole();history.replaceState(null,'','#serve')})});
if(location.hash==='#serve')setTimeout(toRole,300);
})();
