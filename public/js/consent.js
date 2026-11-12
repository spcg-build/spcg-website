// Cookie consent. Choice is stored for 12 months as 'all' or 'essential'.
// Cookie-based tools (Google Analytics, Microsoft Clarity) only load after "Accept all". Paste each ID below once the account is set up.
// Vercel Web Analytics is cookieless and runs for everyone (loaded in app/layout.tsx).
(function(){
  var GA_ID = ''; // e.g. 'G-XXXXXXXXXX'
  var CLARITY_ID = ''; // Microsoft Clarity project ID, e.g. 'abcd1234ef'
  var KEY='spcg-consent', DAY=864e5;
  function get(){try{var v=JSON.parse(localStorage.getItem(KEY)||'null');if(v&&Date.now()-v.t<365*DAY)return v.c;}catch(e){}return null;}
  function set(c){try{localStorage.setItem(KEY,JSON.stringify({c:c,t:Date.now()}));}catch(e){}}
  function loadClarity(){
    if(!CLARITY_ID||window.__spcgCL)return;window.__spcgCL=1;
    window.clarity=window.clarity||function(){(window.clarity.q=window.clarity.q||[]).push(arguments);};
    var s=document.createElement('script');s.async=1;s.src='https://www.clarity.ms/tag/'+CLARITY_ID;document.head.appendChild(s);
  }
  function loadAnalytics(){
    loadClarity();
    if(!GA_ID||window.__spcgGA)return;window.__spcgGA=1;
    var s=document.createElement('script');s.async=1;s.src='https://www.googletagmanager.com/gtag/js?id='+GA_ID;document.head.appendChild(s);
    window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments);};gtag('js',new Date());gtag('config',GA_ID,{anonymize_ip:true});
  }
  var bar;
  function show(){
    if(bar){bar.hidden=false;return;}
    bar=document.createElement('div');bar.className='ck';bar.setAttribute('role','dialog');bar.setAttribute('aria-label','Cookie choices');
    bar.innerHTML='<p class="ck-t"><strong>We use cookies.</strong> Essential cookies keep this site working. With your OK, we also use analytics cookies to see how visitors use the site so we can improve it. You can reject them. <a href="/privacy/">Privacy &amp; cookies</a></p>'+
      '<div class="ck-b"><button type="button" class="ck-no">Reject non-essential</button><button type="button" class="ck-yes">Accept all</button></div>';
    document.body.appendChild(bar);
    bar.querySelector('.ck-yes').onclick=function(){set('all');bar.hidden=true;loadAnalytics();};
    bar.querySelector('.ck-no').onclick=function(){set('essential');bar.hidden=true;if(window.__spcgGA||window.__spcgCL)location.reload();};
  }
  var c=get(); if(c==='all')loadAnalytics(); else if(!c) show();
  document.addEventListener('click',function(e){var t=e.target.closest&&e.target.closest('[data-cookie-settings]');if(t){e.preventDefault();show();}});
})();
