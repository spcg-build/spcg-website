// Draft v2 hero: project-type selector swaps headline, subcopy and render; client-type buttons (.r-pill) are handled by site.js and pick a matching render.
(function(){var sec=document.querySelector('.r-ht');if(!sec)return;
var h1=document.getElementById('htH1'),sub=document.getElementById('htSub');
var tabs=[].slice.call(sec.querySelectorAll('.r-ht-proj'));
function show(t){sec.dataset.active=t;}
function set(t){var b=tabs.filter(function(x){return x.dataset.type===t})[0];if(!b)return;
var on=document.querySelector('.r-pill[aria-pressed="true"]');if(on)on.click();
show(t);tabs.forEach(function(x){var o=x===b;x.classList.toggle('is-on',o);x.setAttribute('aria-pressed',o?'true':'false')});
sec.classList.add('is-swapping');setTimeout(function(){h1.textContent=b.dataset.h1;sub.textContent=b.dataset.sub;sec.classList.remove('is-swapping')},180);}
tabs.forEach(function(b){b.addEventListener('click',function(){set(b.dataset.type)})});
[].forEach.call(sec.querySelectorAll('.r-pill'),function(p){p.addEventListener('click',function(){setTimeout(function(){var pressed=p.getAttribute('aria-pressed')==='true';
tabs.forEach(function(x){var o=!pressed&&x.dataset.type==='all';x.classList.toggle('is-on',o);x.setAttribute('aria-pressed',o?'true':'false')});
show(pressed?(p.dataset.show||'all'):'all');},0)})});
})();
