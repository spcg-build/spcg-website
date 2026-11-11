// Site behavior: header, phone menu, audience selector, project strip, scroll effects and forms.
(function(){
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;

var mb=document.getElementById('menuBtn'),mp=document.getElementById('menuPanel');
function setMenu(o){if(!mb||!mp)return;mp.hidden=!o;mb.setAttribute('aria-expanded',o?'true':'false');document.body.classList.toggle('menu-open',o);}
if(mb){mb.addEventListener('click',function(){setMenu(mp.hidden);});mp.addEventListener('click',function(e){if(e.target.closest('a'))setMenu(false);});addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false);});addEventListener('resize',function(){if(innerWidth>1100)setMenu(false);});}

var AUD=window.SPCG_AUDIENCES||{};
if(document.getElementById('foryou')){
var hero={h1:document.querySelector('.r-h1'),sub:document.querySelector('.r-w100 p'),cta:document.querySelector('.r-w100 a'),eb:document.querySelector('.r-heroin>div')};
var orig={h1:hero.h1&&hero.h1.innerHTML,sub:hero.sub&&hero.sub.innerHTML,cta:hero.cta&&hero.cta.innerHTML,eb:hero.eb&&hero.eb.innerHTML};
[hero.h1,hero.sub,hero.cta].forEach(function(e){if(e)e.classList.add('r-swap')});
var fy=document.getElementById('foryou');
function swap(el,html){if(!el)return;el.classList.add('out');setTimeout(function(){el.innerHTML=html;el.classList.remove('out');},reduce?0:250);}
function choose(k,scroll){var pills=document.querySelectorAll('.r-pill');pills.forEach(function(p){p.setAttribute('aria-pressed',p.getAttribute('data-aud')===k?'true':'false')});
 try{if(k)localStorage.setItem('spcg-aud',k);else localStorage.removeItem('spcg-aud');}catch(e){}
 if(!k){fy.hidden=true;swap(hero.h1,orig.h1);swap(hero.sub,orig.sub);swap(hero.cta,orig.cta);return;}
 var a=AUD[k];
 swap(hero.h1,a.h1);swap(hero.sub,a.sub);swap(hero.cta,a.cta[0]+' <span aria-hidden="true" style="color: #B5541C">→</span>');if(hero.cta)hero.cta.setAttribute('href',a.cta[1]);
 document.getElementById('fyEyebrow').textContent=a.eyebrow;document.getElementById('fyTitle').textContent=a.title;
 document.getElementById('fyPoints').innerHTML=a.pts.map(function(p){return '<div class="r-fy-pt"><b>'+p[0]+'</b><span>'+p[1]+'</span></div>'}).join('');
 var c=document.getElementById('fyCta');c.textContent=a.cta[0]+' ';c.setAttribute('href',a.cta[1]);
 document.getElementById('fyJump').innerHTML=a.jump.map(function(j){return '<a href="'+j[1]+'">'+j[0]+'</a>'}).join('');
 fy.hidden=false;var card=fy.firstElementChild;card.style.animation='none';void card.offsetWidth;card.style.animation='';
 if(scroll){var y=fy.getBoundingClientRect().top+scrollY-140;scrollTo({top:y,behavior:reduce?'auto':'smooth'});}
}
document.querySelectorAll('.r-pill').forEach(function(p){p.addEventListener('click',function(){var k=p.getAttribute('data-aud');choose(p.getAttribute('aria-pressed')==='true'?null:k,true);});});
document.getElementById('fyClear').addEventListener('click',function(){choose(null,false);});
try{var saved=localStorage.getItem('spcg-aud');if(saved&&AUD[saved])choose(saved,false);}catch(e){}
}


document.querySelectorAll('[data-scroll]').forEach(function(b){b.addEventListener('click',function(){var t=document.querySelector(b.getAttribute('data-scroll'));if(t)t.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});});});
document.querySelectorAll('[data-apply]').forEach(function(b){b.addEventListener('click',function(){var r=document.getElementById('c-role');if(r)r.value=b.getAttribute('data-apply');var a=document.getElementById('apply');if(a)a.scrollIntoView({behavior:reduce?'auto':'smooth'});setTimeout(function(){var n=document.getElementById('c-name');if(n)n.focus({preventScroll:true});},reduce?0:500);});});
document.querySelectorAll('.v-fbtn').forEach(function(b){b.addEventListener('click',function(){var f=b.getAttribute('data-filter');document.querySelectorAll('.v-fbtn').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});document.querySelectorAll('.v-role').forEach(function(r){r.hidden=!(f==='all'||r.getAttribute('data-kind')===f);});});});
document.querySelectorAll('form[data-form]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var err=f.querySelector('.v-error'),done=f.querySelector('.v-done');var missing=[];
 f.querySelectorAll('[required]').forEach(function(i){var bad=!i.value.trim()||(i.type==='email'&&!/^\S+@\S+\.\S+$/.test(i.value));i.setAttribute('aria-invalid',bad?'true':'false');if(bad)missing.push(f.querySelector('label[for="'+i.id+'"]').textContent);});
 if(missing.length){err.textContent='Please fill in: '+missing.join(', ')+'.';err.hidden=false;done.hidden=true;var first=f.querySelector('[aria-invalid="true"]');if(first)first.focus();return;}
 err.hidden=true;var ep=f.getAttribute('action')||'';var btn=f.querySelector('[type=submit]');
 if(!ep||ep.indexOf('YOUR_FORM_ID')>-1){done.textContent='This form is not connected yet. Add the Formspree form ID in content/site.ts.';done.hidden=false;return;}
 if(btn)btn.disabled=true;
 fetch(ep,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}}).then(function(r){if(!r.ok)throw new Error('send failed');done.hidden=false;f.reset();})
 .catch(function(){err.innerHTML='Something went wrong sending this form. Please email <a href="mailto:bids@spconstructiongroup.com">Bids@SPConstructionGroup.com</a> or call <a href="tel:+14433000338">(443) 300-0338</a>.';err.hidden=false;})
 .then(function(){if(btn)btn.disabled=false;});
});});
var head=document.querySelector('.r-head');
function onScroll(){var y=window.scrollY;if(head)head.classList.toggle('solid',y>60);
 var b=document.getElementById('banner');if(b&&!reduce){var r=b.parentNode.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight){b.style.transform='translateY('+((r.top+r.height/2-innerHeight/2)*-0.08)+'px) scale(1.14)';}}
 var pr=document.querySelector('.r-promises');if(pr&&!reduce){var rr=pr.parentNode.getBoundingClientRect();pr.style.transform='translateX('+(rr.top*0.25)+'px)';}
 var ci=document.querySelector('.r-cta img');if(ci&&!reduce){var rc=ci.parentNode.getBoundingClientRect();if(rc.top<innerHeight&&rc.bottom>0){var p=1-(rc.top+rc.height)/(innerHeight+rc.height);ci.style.transform='scale('+(1.02+p*0.08)+')';}}
}
addEventListener('scroll',onScroll,{passive:true});onScroll();
// strip arrows + progress
var s=document.querySelector('.r-strip'),bar=document.getElementById('bar');
function step(d){if(!s)return;var c=s.querySelector('[data-card]');var w=c?c.getBoundingClientRect().width+20:400;s.scrollBy({left:d*w,behavior:reduce?'auto':'smooth'});}
var pv=document.getElementById('prev'),nx=document.getElementById('next');
if(pv)pv.addEventListener('click',function(){step(-1)});if(nx)nx.addEventListener('click',function(){step(1)});
function prog(){if(!s||!bar)return;var m=s.scrollWidth-s.clientWidth;var p=m>0?s.scrollLeft/m:1;bar.style.width=(18+p*82)+'%';}
if(s){s.addEventListener('scroll',prog,{passive:true});prog();
 var down=false,sx=0,sl=0,moved=false;
 s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;moved=false;sx=e.clientX;sl=s.scrollLeft;s.style.scrollSnapType='none';s.style.cursor='grabbing';});
 addEventListener('pointermove',function(e){if(!down)return;var dx=e.clientX-sx;if(Math.abs(dx)>4)moved=true;s.scrollLeft=sl-dx;});
 addEventListener('pointerup',function(){if(!down)return;down=false;s.style.cursor='';s.style.scrollSnapType='x mandatory';});
 s.addEventListener('click',function(e){if(moved){e.preventDefault();moved=false;}},true);
 s.style.cursor='grab';
}
if(reduce||!('IntersectionObserver' in window))return;
// reveal: only things below the first screen start hidden, so the page is complete at rest
var sel=['.r-commit .r-crow','.r-commit>div:nth-child(2)','[data-card]','.r-process [data-step]','.r-fig1','.r-fig2','.r-aboutl>div','.r-aboutr','[data-block]','.r-insgrid>a','.r-ctatext','.r-workhead','.r-lead>div:first-child','.r-process>div:first-child'];
var els=[];sel.forEach(function(q){document.querySelectorAll(q).forEach(function(el){if(el.getBoundingClientRect().top>innerHeight*0.95)els.push(el);});});
var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){var el=en.target;var sib=el.parentNode?Array.prototype.indexOf.call(el.parentNode.children,el):0;el.style.transitionDelay=Math.min(sib,4)*90+'ms';el.classList.add('in');io.unobserve(el);}});},{rootMargin:'0px 0px -8% 0px'});
els.forEach(function(el){el.classList.add('rv');io.observe(el);});
// report cards fan out
var rep=document.querySelector('.r-report');
if(rep&&rep.getBoundingClientRect().top>innerHeight){rep.classList.add('stack');var io2=new IntersectionObserver(function(es){if(es[0].isIntersecting){setTimeout(function(){rep.classList.remove('stack')},150);io2.disconnect();}},{threshold:0.35});io2.observe(rep);
 rep.querySelectorAll('[style*="width: 62%"],[style*="width: 58%"]').forEach(function(b){var w=b.style.width;b.style.transition='width 1.2s cubic-bezier(.2,.7,.2,1) .4s';b.style.width='0%';var io3=new IntersectionObserver(function(es){if(es[0].isIntersecting){b.style.width=w;io3.disconnect();}},{threshold:0.5});io3.observe(b);});}
// count up
document.querySelectorAll('[data-count]').forEach(function(el){var t=+el.getAttribute('data-count'),suf=el.getAttribute('data-suffix')||'';var io4=new IntersectionObserver(function(es){if(!es[0].isIntersecting)return;io4.disconnect();var st=null;function f(ts){if(!st)st=ts;var p=Math.min(1,(ts-st)/1200);el.textContent=Math.round(t*(1-Math.pow(1-p,3)))+suf;if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);});io4.observe(el);});
})();
