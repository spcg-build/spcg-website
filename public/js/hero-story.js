// Draft v2 hero: advances the illustrated room through 8 stages as the visitor scrolls.
(function(){var sec=document.querySelector('.r-story');if(!sec)return;
var st=[].slice.call(sec.querySelectorAll('.r-stage'));var now=sec.querySelector('.r-story-now'),cnt=sec.querySelector('.r-story-count'),bar=sec.querySelector('.r-story-bar span');
var names=st.map(function(f){return f.querySelector('figcaption').textContent.replace(/^\d+/,'').trim()});var cur=-1;
function set(i){if(i===cur)return;cur=i;st.forEach(function(f,k){f.classList.toggle('is-on',k===i);f.classList.toggle('is-past',k<i)});
var n=('0'+(i+1)).slice(-2);if(now)now.textContent=n+' · '+names[i];if(cnt)cnt.textContent=n+' / 08';}
function tick(){if(window.innerWidth<=1100){st.forEach(function(f){f.classList.add('is-on')});return}
var r=sec.getBoundingClientRect(),run=sec.offsetHeight-window.innerHeight;var p=Math.min(1,Math.max(0,-r.top/run));
set(Math.min(7,Math.floor(p*8)));if(bar)bar.style.width=(12.5+p*87.5)+'%';}
window.addEventListener('scroll',tick,{passive:true});window.addEventListener('resize',tick);tick();})();
