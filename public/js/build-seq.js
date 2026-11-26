// Hero film: blueprint -> turnover. Desktop: scrubbed by scroll while the hero is pinned. Mobile: plays once, holds on the finished frame.
(function(){var sec=document.querySelector('.r-ht');if(!sec)return;var v=sec.querySelector('.r-bs-v'),li=[].slice.call(sec.querySelectorAll('.r-bs-steps li'));if(!v)return;
if(innerWidth<=1100&&v.currentSrc&&v.currentSrc.indexOf('build-mobile')<0){v.src='/images/hero-film/build-mobile.mp4';v.load();}
var reduce=matchMedia("(prefers-reduced-motion: reduce)").matches,marks=[0,.15,.33,.62];
function lab(p){var c=0;marks.forEach(function(m,i){if(p>=m)c=i});li.forEach(function(l,i){l.classList.toggle('is-on',i===c);l.classList.toggle('is-past',i<c)})}
function pinned(){return innerWidth>1100&&sec.dataset.active==='all'&&!reduce}
var target=0,raf=0;function seek(){raf=0;if(!v.duration)return;var t=target*(v.duration-0.05);if(Math.abs(v.currentTime-t)>0.02)v.currentTime=t;}
function onScroll(){if(!pinned())return;var r=sec.getBoundingClientRect(),span=sec.offsetHeight-innerHeight;var p=span>0?Math.min(1,Math.max(0,-r.top/span)):1;target=p;lab(p);if(!raf)raf=requestAnimationFrame(seek);}
function setup(){sec.classList.toggle('is-pin',pinned());if(pinned()){v.pause();onScroll();}else if(reduce){v.addEventListener('loadedmetadata',function(){v.currentTime=v.duration-0.05},{once:true});lab(1);}else{v.play().catch(function(){});}}
v.addEventListener('timeupdate',function(){if(!pinned()&&v.duration)lab(v.currentTime/v.duration)});
new MutationObserver(setup).observe(sec,{attributes:true,attributeFilter:['data-active']});
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',setup);
if(v.readyState>=1)setup();else v.addEventListener('loadedmetadata',setup,{once:true});setup();
})();
