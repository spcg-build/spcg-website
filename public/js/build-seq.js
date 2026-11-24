// Hero build sequence: blueprint -> framing -> rough-in -> turnover, scrubbed by scroll (desktop) or autoplayed (mobile / reduced motion off).
(function(){var sec=document.querySelector('.r-ht');if(!sec)return;var fr=[].slice.call(sec.querySelectorAll('.r-bs-f')),li=[].slice.call(sec.querySelectorAll('.r-bs-steps li'));if(!fr.length)return;
var N=fr.length,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,timer=null,auto=0;
function show(p){var x=Math.max(0,Math.min(N-1,p*(N-1)));fr.forEach(function(f,i){var d=Math.abs(x-i);f.style.opacity=Math.max(0,1-d*1.6).toFixed(3)});var c=Math.round(x);li.forEach(function(l,i){l.classList.toggle('is-on',i===c);l.classList.toggle('is-past',i<c)});}
function pinned(){return innerWidth>1100&&sec.dataset.active==='all'&&!reduce}
function onScroll(){if(!pinned())return;var r=sec.getBoundingClientRect(),span=sec.offsetHeight-innerHeight;var p=span>0?Math.min(1,Math.max(0,-r.top/span)):1;show(p);}
function startAuto(){if(timer)return;timer=setInterval(function(){if(pinned()||sec.dataset.active!=='all')return;auto=(auto+1)%N;show(auto/(N-1));},2200);}
sec.classList.toggle('is-pin',pinned());
new MutationObserver(function(){sec.classList.toggle('is-pin',pinned());onScroll();}).observe(sec,{attributes:true,attributeFilter:['data-active']});
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',function(){sec.classList.toggle('is-pin',pinned());onScroll();});
show(pinned()?0:(reduce?1:0));if(!reduce)startAuto();onScroll();
})();
