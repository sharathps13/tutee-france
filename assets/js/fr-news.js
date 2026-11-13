/* ===== v58 live news relay ===== */
(function(){
'use strict';
var NEWS0=[{"id": "n2026-10-15-target", "date": "2026-10-15", "tag": "Policy", "title": "France aims to welcome 30,000 Indian students by 2030", "summary": "At the Choose France Tour in New Delhi, the French Embassy's deputy head of mission called the 30,000 target a priority, with education now a key pillar of the India–France partnership.", "source": "ANI", "url": "https://www.aninews.in/news/world/asia/choose-france-tour-2026-sees-strong-student-engagement-in-new-delhi-reflecting-growing-interest-in-french-higher-education20261015175852/", "checked": "2026-11-11"}, {"id": "n2026-10-15-enrol", "date": "2026-10-15", "tag": "Trends", "title": "Indian enrolment in France up 17% to 9,100 students", "summary": "Campus France figures for 2024–25 put India 11th among source countries for international students in France, up from 13th. Indian student numbers have risen 63% since 2018.", "source": "ANI / Campus France", "url": "https://www.aninews.in/news/world/asia/choose-france-tour-2026-sees-strong-student-engagement-in-new-delhi-reflecting-growing-interest-in-french-higher-education20261015175852/", "checked": "2026-11-11"}, {"id": "n2026-10-15-tour", "date": "2026-10-15", "tag": "Events", "title": "Choose France Tour 2026 brings 50+ French institutions to Delhi", "summary": "Universities, business and engineering schools, and design and hospitality schools met students one to one. Classes Internationales, a French-language foundation year, now runs at 30+ institutions with 200+ undergraduate courses.", "source": "ANI", "url": "https://www.aninews.in/news/world/asia/choose-france-tour-2026-sees-strong-student-engagement-in-new-delhi-reflecting-growing-interest-in-french-higher-education20261015175852/", "checked": "2026-11-11"}, {"id": "n2026-10-eiffel", "date": "2026-10-02", "tag": "Scholarship", "title": "Eiffel Excellence 2027 call for applications is open", "summary": "French institutions submit nominations for master's and PhD students. Campus France must receive them by 6 January 2027, and results are published from 12 April 2027. Age limits: 29 for master's, 35 for PhD.", "source": "Campus France", "url": "https://www.campusfrance.org/en/france-excellence-eiffel-scholarship-program", "when": "October 2026", "checked": "2026-11-11"}, {"id": "n2026-08-funds", "date": "2026-07-24", "tag": "Visa", "title": "Higher minimum proof of funds for French student visas", "summary": "From 1 August 2026 the monthly amount you must show for a student visa went up by about 43%. Check the current figure on France-Visas before you prepare your file.", "source": "Campus France India", "url": "https://www.inde.campusfrance.org/france-visa-important-announcement", "checked": "2026-11-11"}, {"id": "n2026-08-eef", "date": "2026-07-24", "tag": "Applying", "title": "Études en France procedure fee revised from 1 August 2026", "summary": "Campus France India has updated the Études en France fee for applications from 1 August 2026. The current amount is shown on the Campus France India site.", "source": "Campus France India", "url": "https://www.inde.campusfrance.org/increase-in-etudes-en-france-fees", "when": "From 1 Aug 2026", "checked": "2026-11-11"}, {"id": "n2026-07-college", "date": "2026-07-07", "tag": "Alert", "title": "Collège de Paris International placed in liquidation", "summary": "A court judgment of 2 June 2026 liquidated the institution. The French Embassy in India asks affected students to fill in its form so it can help them through the legal process.", "source": "Campus France India", "url": "https://www.inde.campusfrance.org/important-notice-college-de-paris", "checked": "2026-11-11"}, {"id": "n2026-06-modi", "date": "2026-06-15", "tag": "Policy", "title": "India and France make student mobility a priority", "summary": "During the Prime Minister's June 2026 visit to France, both countries reaffirmed education and student mobility as priorities, and French universities were invited to open campuses in India.", "source": "ANI", "url": "https://www.aninews.in/news/world/asia/choose-france-tour-2026-sees-strong-student-engagement-in-new-delhi-reflecting-growing-interest-in-french-higher-education20261015175852/", "when": "June 2026", "checked": "2026-11-11"}, {"id": "n2026-04-strategy", "date": "2026-04-15", "tag": "Policy", "title": "New 'Choose France for Higher Education' strategy", "summary": "France's higher-education minister set out a strategy that prioritises health, digital and AI, quantum, biotech, energy, environment and space, building on the 2018 Bienvenue en France plan.", "source": "ANI", "url": "https://www.aninews.in/news/world/asia/choose-france-tour-2026-sees-strong-student-engagement-in-new-delhi-reflecting-growing-interest-in-french-higher-education20261015175852/", "when": "April 2026", "checked": "2026-11-11"}];
var bar=document.getElementById('news');if(!bar)return;
var track=bar.querySelector('#nrTrack'),items=NEWS0.slice(),seen={},panel=null,listEl=null,live=false;
var MO=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function fmt(d,short){var p=String(d||'').split('-');if(p.length<3)return esc(d);return (+p[2])+' '+MO[(+p[1]||1)-1]+(short?'':' '+p[0]);}
function when(x,short){return x.when?esc(x.when):fmt(x.date,short);}
function ok(x){return x&&typeof x.title==='string'&&x.title.length<220&&typeof x.date==='string'&&/^\d{4}-\d\d-\d\d$/.test(x.date)&&(!x.url||/^https:\/\//.test(x.url));}
function sort(){items.sort(function(a,b){return a.date<b.date?1:a.date>b.date?-1:0;});}
function checked(){var c='';items.forEach(function(x){if(x.checked&&x.checked>c)c=x.checked;});return c;}
var TAGC={Visa:'v',Scholarship:'s',Policy:'p',Alert:'a',Events:'e',Trends:'t',Applying:'ap'};
function tag(t){return '<em class="nr-tag nr-'+(TAGC[t]||'p')+'">'+esc(t||'Update')+'</em>';}
function drawTicker(){sort();
  var one=items.map(function(x,i){return '<button type="button" class="nr-it" data-i="'+i+'"><time datetime="'+esc(x.date)+'">'+when(x,true)+'</time>'+tag(x.tag)+'<span class="nr-h">'+esc(x.title)+'</span><small>'+esc(x.source||'')+'</small></button>';}).join('');
  track.innerHTML=one+one.replace(/<button type="button" class="nr-it"/g,'<button type="button" class="nr-it" tabindex="-1" aria-hidden="true"');
  track.style.setProperty('--dur',Math.max(46,items.length*12)+'s');
  var c=checked(),u=bar.querySelector('.nr-up');if(u&&c)u.textContent='Checked '+fmt(c);
  window.__TCNEWS=items;}
function drawList(hi){if(!listEl)return;
  listEl.innerHTML=items.map(function(x,i){return '<article class="nrp-card'+(x._new?' is-new':'')+'" data-i="'+i+'" style="--d:'+i+'"><div class="nrp-meta">'+tag(x.tag)+'<time datetime="'+esc(x.date)+'">'+when(x)+'</time>'+(x._new?'<b class="nrp-new">New</b>':'')+'</div><h4>'+esc(x.title)+'</h4><p>'+esc(x.summary||'')+'</p><div class="nrp-act">'+
    (x.url?'<a href="'+esc(x.url)+'" target="_blank" rel="noopener">'+esc(x.source||'Source')+' <span aria-hidden="true">↗</span></a>':'<span>'+esc(x.source||'')+'</span>')+
    '<button type="button" class="nrp-ask" data-ask="'+esc('Explain this update and what it means for me: '+x.title)+'">Ask Tutee AI</button></div></article>';}).join('');
  var c=checked(),u=panel.querySelector('.nrp-up');if(u)u.textContent=(live?'Live feed':'Latest updates')+(c?' · checked '+fmt(c):'');
  if(hi!=null){var el=listEl.querySelector('[data-i="'+hi+'"]');if(el){el.classList.add('is-hi');el.scrollIntoView({block:'nearest'});setTimeout(function(){el.classList.remove('is-hi');},1600);}}}
function build(){if(panel)return;
  panel=document.createElement('div');panel.className='nrp';panel.id='nrPanel';panel.setAttribute('role','dialog');panel.setAttribute('aria-labelledby','nrpT');panel.hidden=true;
  panel.innerHTML='<header class="nrp-h"><span class="nrp-live"><i aria-hidden="true"></i>LIVE</span><div><b id="nrpT">France study news relay</b><span class="nrp-up"></span></div><button type="button" class="nrp-x" aria-label="Close news">×</button></header><div class="nrp-list"></div><p class="nrp-note">Headlines link to their original sources. Rules change, so check official sites or <a href="#enquire">ask an advisor</a> before you act.</p>';
  document.body.appendChild(panel);listEl=panel.querySelector('.nrp-list');
  panel.querySelector('.nrp-x').addEventListener('click',close);
  panel.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
  panel.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href="#enquire"],[data-ask]');if(a)close();});}
var opener=null;
function open(i){build();drawList(i);panel.hidden=false;requestAnimationFrame(function(){panel.classList.add('on');});
  $all('[aria-controls="nrPanel"]').forEach(function(b){b.setAttribute('aria-expanded','true');});setTimeout(function(){panel.querySelector('.nrp-x').focus({preventScroll:true});},50);}
function close(){if(!panel)return;panel.classList.remove('on');$all('[aria-controls="nrPanel"]').forEach(function(b){b.setAttribute('aria-expanded','false');});setTimeout(function(){if(!panel.classList.contains('on'))panel.hidden=true;},350);if(opener)opener.focus({preventScroll:true});}
function $all(s){return Array.prototype.slice.call(document.querySelectorAll(s));}
bar.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.nr-it,.nr-live,.nr-all');if(!b)return;opener=b.getAttribute('aria-hidden')?bar.querySelector('.nr-all'):b;open(b.dataset.i!=null?+b.dataset.i:null);});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&panel&&panel.classList.contains('on'))close();});
items.forEach(function(x){seen[x.id]=1;});
drawTicker();

/* live feed: db collection "news", newest first; the embedded list stays when db is unavailable or empty */
function connect(){
  if(!window.claude||!window.claude.use)return;
  window.claude.use('db').then(function(db){if(!db)return;
    db.collection('news').orderBy('date','desc').limit(30).onSnapshot(function(s){
      var arr=s.docs.map(function(d){var x=d.data()||{};return {id:d.id,date:x.date,when:x.when,tag:x.tag,title:x.title,summary:x.summary,source:x.source,url:x.url,checked:x.checked};}).filter(ok);
      if(!arr.length)return;var fresh=0;
      arr.forEach(function(x){if(!seen[x.id]){if(live){x._new=1;fresh++;}seen[x.id]=1;}});
      items=arr;live=true;bar.classList.add('is-live');drawTicker();if(panel&&!panel.hidden)drawList();
      if(fresh){bar.classList.remove('flash');void bar.offsetWidth;bar.classList.add('flash');}
    },function(){});
  },function(){});}
if(document.readyState==='complete')setTimeout(connect,300);else addEventListener('load',function(){setTimeout(connect,300);});
})();
