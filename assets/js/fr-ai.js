/* ===== v58 Tutee AI: local knowledge engine + Claude fallback ===== */
(function(){
'use strict';
var D=window.__TC||{},FAQ=D.FAQ||[],UNIS=D.UNIS||[],HOW=D.HOW||[],ST=D.ST||window.__TCST||[];
var KIND={uni:'University',ge:'Grande école',biz:'Business school'};
var FORM='#enquire',MAIL='business@tuteeconnect.com';
var LOANS=['Auxilo','Avanse','Axis Bank','Credila Education Loan','ICICI Bank','IDFC FIRST Bank','InCred','MPOWER Financing','Poonawalla Fincorp Education Loan','Prodigy Finance','Union Bank of India'];

/* ---------- text helpers ---------- */
function fold(s){s=String(s||'').toLowerCase();try{s=s.normalize('NFD').replace(/[̀-ͯ]/g,'');}catch(e){}return s.replace(/[’‘]/g,"'").replace(/&/g,' and ');}
var STOP={};('a an the is are am was were be been i im me my we our you your to of in on for and or with do does did can could should would will it its this that these those what which how when where who whom there their they them about any much many get got have has had from at as by if not no so tell please want need know like just also some more most into than then very really okay ok hey pls plz u ur france')
  .split(' ').forEach(function(w){STOP[w]=1;});
var SYN={uni:'university',univ:'university',universities:'university',college:'university',colleges:'university',institute:'university',institution:'university',school:'university',schools:'university',
  ms:'master',msc:'master',masters:'master',postgrad:'master',pg:'master',ma:'master',mtech:'master',mim:'master',
  bachelor:'bachelor',bachelors:'bachelor',ug:'bachelor',undergrad:'bachelor',undergraduate:'bachelor',btech:'bachelor',bsc:'bachelor',
  phd:'phd',doctorate:'phd',doctoral:'phd',research:'phd',
  job:'work',jobs:'work',employment:'work',employ:'work',earn:'work',earning:'work',salary:'work',parttime:'work',hours:'work',hour:'work',
  career:'career',careers:'career',placement:'career',placements:'career',
  internship:'internship',internships:'internship',stage:'internship',
  pr:'resident',permanent:'resident',residency:'resident',settle:'resident',settlement:'resident',residence:'resident',
  citizen:'citizenship',passport:'citizenship',nationality:'citizenship',naturalisation:'citizenship',naturalization:'citizenship',
  loan:'loan',loans:'loan',bank:'loan',banks:'loan',lender:'loan',lenders:'loan',collateral:'loan',sponsor:'loan',sponsors:'loan',nbfc:'loan',credila:'loan',poonawalla:'loan',avanse:'loan',auxilo:'loan',mpower:'loan',prodigy:'loan',incred:'loan',
  scholarship:'scholarship',scholarships:'scholarship',bursary:'scholarship',grant:'scholarship',grants:'scholarship',eiffel:'scholarship',charpak:'scholarship',stipend:'scholarship',
  wife:'family',husband:'family',spouse:'family',kid:'family',kids:'family',child:'family',children:'family',dependent:'family',dependant:'family',dependents:'family',dependants:'family',parents:'family',partner:'family',
  ielts:'language',toefl:'language',pte:'language',delf:'language',dalf:'language',tcf:'language',test:'language',tests:'language',
  intake:'intake',intakes:'intake',deadline:'intake',deadlines:'intake',september:'intake',january:'intake',fall:'intake',spring:'intake',
  visa:'visa',visas:'visa',vls:'visa',vlsts:'visa','vls-ts':'visa',biometric:'visa',biometrics:'visa',embassy:'visa',refusal:'refusal',refused:'refusal',reject:'refusal',rejected:'refusal',rejection:'refusal',
  house:'housing',housing:'housing',accommodation:'housing',accomodation:'housing',hostel:'housing',dorm:'housing',rent:'housing',flat:'housing',apartment:'housing',crous:'housing',guarantor:'housing',visale:'housing',
  apl:'apl',caf:'apl',
  interview:'interview',interviews:'interview',
  sop:'document',documents:'document',document:'document',transcript:'document',transcripts:'document',cv:'document',resume:'document',lor:'document',
  rank:'rank',ranking:'rank',rankings:'rank',ranked:'rank',qs:'rank',top:'rank',
  english:'english',french:'french',francais:'french',
  insurance:'insurance',ameli:'insurance',health:'insurance',cvec:'cvec',
  graduate:'graduate',graduation:'graduate',graduating:'graduate',poststudy:'graduate',psw:'graduate',aps:'graduate',
  schengen:'schengen',alumni:'alumni',travel:'schengen',
  service:'service',services:'service',offer:'service',offering:'service',help:'service',support:'service',
  step:'step',steps:'step',process:'step',procedure:'step',roadmap:'step',timeline:'step',
  why:'why',benefit:'why',benefits:'why',advantage:'why',advantages:'why',worth:'why',
  campus:'campusfrance',etudes:'campusfrance',
  contact:'contact',call:'contact',phone:'contact',email:'contact',whatsapp:'contact',counsellor:'contact',counselor:'contact',advisor:'contact',adviser:'contact',human:'contact',consultation:'contact',appointment:'contact',
  mba:'mba',business:'business',management:'business',finance:'business',marketing:'business',
  arrive:'arrival',arrival:'arrival',land:'arrival',landing:'arrival',reach:'arrival',
  funds:'funds',proof:'funds',blocked:'funds',bankstatement:'funds',
  success:'success',rate:'success',
  talent:'talent',bluecard:'talent'};
function stem(w){if(w.length>5&&/ies$/.test(w))return w.slice(0,-3)+'y';if(w.length>5&&/ing$/.test(w))return w.slice(0,-3);if(w.length>4&&/ed$/.test(w))return w.slice(0,-2);if(w.length>3&&/s$/.test(w)&&!/ss$/.test(w))return w.slice(0,-1);return w;}
function toks(s){var out=[];fold(s).replace(/[^a-z0-9\- ]+/g,' ').split(/\s+/).forEach(function(w){w=w.replace(/^-+|-+$/g,'');if(!w||STOP[w])return;out.push(SYN[w]||SYN[stem(w)]||stem(w));});return out;}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
/* tiny safe markdown: **bold**, - bullets, [text](https|#anchor|mailto), paragraphs */
function md(src){var lines=String(src||'').replace(/\r/g,'').split('\n'),h='',ul=false;
  function inl(t){t=esc(t);t=t.replace(/\*\*([^*]+)\*\*/g,'<b>$1</b>').replace(/(^|[^*])\*([^*\s][^*]*)\*/g,'$1<i>$2</i>');
    t=t.replace(/\[([^\]]+)\]\(((?:https?:\/\/|#|mailto:)[^)\s]+)\)/g,function(m,a,u){var ext=/^https?:/.test(u);return '<a href="'+u+'"'+(ext?' target="_blank" rel="noopener"':'')+'>'+a+'</a>';});return t;}
  lines.forEach(function(l){var m=l.match(/^\s*(?:[-•*]|\d+[.)])\s+(.*)$/);
    if(m){if(!ul){h+='<ul>';ul=true;}h+='<li>'+inl(m[1])+'</li>';return;}
    if(ul){h+='</ul>';ul=false;}
    l=l.replace(/^#{1,6}\s*/,'');if(l.trim())h+='<p>'+inl(l.trim())+'</p>';});
  if(ul)h+='</ul>';return h;}
function strip(h){return String(h).replace(/<[^>]+>/g,'').replace(/&amp;/g,'&');}

/* ---------- knowledge base (from this page) ---------- */
var KB=[];
function kb(id,t,k,a,c){KB.push({id:id,t:t,k:k,a:a,c:c||[]});}
function faq(q){for(var i=0;i<FAQ.length;i++)if(FAQ[i][1].indexOf(q)===0)return FAQ[i][2].join('\n\n');return '';}
kb('about','About Tutee Connect',['tutee','about','company','agency','consultant','success','who','trust','experience'],
  'Tutee Connect guides students from India to France, from choosing a course to your first week in Paris or beyond.\n\n- **99%** student visa success\n- **200+** French university tie-ups\n- **5,000+** students guided\n\nYour first consultation is free. [Book it here](#enquire).',['What services do you offer?','How does the process work?']);
kb('services','Our services',['service','consultation','package','what'],
  'One team covers every stage, with **nine services** in three stages:\n\n- **Before you apply:** career consultation, language test prep (IELTS, TOEFL, PTE, DELF, TCF) and a university shortlist.\n- **Getting in:** Campus France and visa, documents and SOP, scholarships and loans.\n- **After you land:** housing and pre-departure, post-landing support (bank, insurance, CVEC, part-time work) and family migration planning.',['How does the process work?','Book a free consultation']);
kb('steps','How it works',['step','start','apply','application','begin','plan','how'],
  'Most students start **9 to 12 months** before the September intake. Five steps:\n\n'+(HOW.length?HOW.map(function(s,i){return '- **'+(i+1)+'. '+s.t+'** ('+s.w+'): '+s.h+'.';}).join('\n'):'- Free call\n- Shortlist and apply\n- Campus France interview\n- Student visa\n- Fly and settle')+'\n\nStep 1 is a free call. [Start here](#enquire).',['How does Campus France work?','How do I apply for the visa?']);
kb('why','Why France',['why','good','europe','eu','choose','worth'],
  'France is one of Europe\'s best-value study destinations and a gateway to an EU career:\n\n- About **400,000** international students\n- **4** universities in the QS 2027 world top 100\n- **1,700+** programmes taught in English\n- **2 years** to look for work after a master\'s, for Indian graduates\n- Most master\'s programmes include a paid internship (stage)',['Which universities are top ranked?','Can I study in English?']);
kb('rank','Top-ranked universities',['rank','best','university','world'],
  'Four French universities are in the **QS World University Rankings 2027** top 100:\n\n- **PSL University**, #34\n- **Institut Polytechnique de Paris**, #43\n- **Sorbonne University**, #73\n- **Université Paris-Saclay**, #76\n\nOur explorer covers 26 institutions, 13 of them QS-ranked. [Open the explorer](#universities).',['Tell me about PSL','Best business schools?']);
kb('req','What you need to apply',['require','eligib','document','need','admission','criteria','gmat','gre','qualify'],faq('What do I need to apply'),['Do I need to speak French?','When are the intakes?']);
kb('cf','Campus France and Études en France',['campusfrance','etudes','platform','procedure'],faq('How does Campus France')+'\n\nThe Campus France interview is a short academic interview (about 20 minutes) on your study plan and motivation. We run mock interviews until you\'re confident.',['How do I prepare for the interview?','How do I apply for the visa?']);
kb('fr','French language',['french','speak','learn','fluent'],faq('Do I need to speak French'),['Which tests do I need?','Can I study in English?']);
kb('eng','English-taught programmes',['english','taught','program','programme','course'],'France offers **1,700+ programmes taught in English**, so you can start without French and learn it alongside your degree. For English-taught programmes you usually need IELTS, TOEFL or PTE.',['Do I need to speak French?','Which universities are top ranked?']);
kb('intake','Intakes and timeline',['intake','start','when','time','month','timeline'],faq('When should I start')+'\n\nThe Eiffel scholarship for 2027 has its own timeline: nominations close **6 January 2027**.',['How does the process work?','Tell me about scholarships']);
kb('funds','Proof of funds',['funds','money','sponsor','financial','show','minimum','threshold'],faq('Do I need to show proof of funds')+'\n\n**Update:** from 1 August 2026 the minimum monthly amount for a French student visa went up by about 43% (Campus France India). Check the current figure on [France-Visas](https://france-visas.gouv.fr/en/assistant-visa), and we\'ll help you plan for it.',['Which banks give loans?','Tell me about scholarships']);
kb('arr','After you land',['arrival','validate','validation','first','week','cvec','insurance'],faq('What happens after I land'),['Can I work while I study?','Do you help with accommodation?']);
kb('sch','Scholarships',['scholarship','fund','financial','aid'],faq('Can I get scholarships')+'\n\n- **Eiffel 2027** opens 2 Oct 2026, nominations close 6 Jan 2027, results in April 2027\n- **Charpak** scholarships for Indian students\n- **School scholarships** from individual institutions',['Which banks give loans?','Can I work while I study?']);
kb('loan','Education loans and loan partners',['loan','fund','finance','collateral'],'We arrange **collateral and non-collateral** education loans through our banking partners in India, covering your studies and living costs in France, with fast approvals.\n\nOur loan partners:\n\n'+LOANS.map(function(l){return '- '+l;}).join('\n')+'\n\nLoan amounts and rates depend on your profile and the lender, so an advisor checks your eligibility. [Check loan eligibility](#enquire).',['Tell me about scholarships','Do I need proof of funds?']);
kb('apl','Housing aid (APL)',['apl','aid','housing','caf'],faq('Can I get housing aid'),['Do you help with accommodation?']);
kb('work','Part-time work',['work','part','time','week','while','study'],faq('Can I work while I study')+'\n\nYou can work from your first day in France.',['How long can I stay after I graduate?','Is the internship paid?']);
kb('intern','Internships (stage)',['internship','paid','industry'],'Most French master\'s programmes include a **paid internship**, or stage. Internships that are part of your programme don\'t count towards the 964-hour yearly work limit.',['Can I work while I study?','How long can I stay after I graduate?']);
kb('post','After graduation',['graduate','stay','after','job','search','career','work','permit'],faq('How long can I stay after I graduate'),['Can I get permanent residence?','Can my family join me?']);
kb('alum','5-year alumni Schengen visa',['alumni','schengen','return','visit','back','leave'],faq('Is there a visa to come back'),['How long can I stay after I graduate?']);
kb('pr','Permanent residence and citizenship',['resident','citizenship','card','settle','year'],faq('Can I get permanent residence')+'\n\nThe pathway: student visa (VLS-TS) → post-study job search → work permit, Talent permit or EU Blue Card → 10-year resident card → citizenship.',['How long can I stay after I graduate?','Can my family join me?']);
kb('fam','Family',['family','bring','join','together','dependent'],faq('Can my family come with me'),['What is the Talent permit?','Can I get permanent residence?']);
kb('talent','Talent permit and EU Blue Card',['talent','permit','blue','card','skilled'],'After graduating, you switch to a work permit with a job related to your studies that meets the salary threshold. Higher-skilled jobs open the multi-year **Talent permit** or the **EU Blue Card**. With a Talent permit, your spouse and children can join you, and your spouse may work.',['Can my family join me?','Can I get permanent residence?']);
kb('house','Accommodation',['housing','stay','live','room'],faq('Do you help with accommodation'),['Can I get housing aid (APL)?','What happens after I land?']);
kb('visa','Student visa (VLS-TS)',['visa','apply','process','long','biometric','france-visas'],(HOW[3]?HOW[3].p:'You apply for a long-stay student visa on France-Visas.')+'\n\nAfter arriving, you validate your VLS-TS online within three months. We prepare the France-Visas form, proof of funds and appointment with you, and check the file before you go.',['Do I need proof of funds?','What happens after I land?']);
kb('refuse','Visa refusals',['refusal','success','chance','risk','visa'],'Our students have a **99% student visa success** rate. Most refusals happen at the "getting in" stage, from weak files, unclear study plans or missing funds proof, so we check your documents and SOP, run mock Campus France interviews and review the France-Visas file before you submit.\n\nIf you were refused before, an advisor can review what went wrong. [Talk to an advisor](#enquire).',['What do I need to apply?','How do I prepare for the interview?']);
kb('int','Campus France interview',['interview','prepare','mock','question'],(HOW[2]?HOW[2].p:'')+' It usually takes about **20 minutes**.',['How do I apply for the visa?']);
kb('lang','Language tests',['language','score','band','exam','test'],'For English-taught programmes you need **IELTS, TOEFL or PTE**. French-taught programmes ask for **DELF, DALF or TCF**. We run prep for all of them alongside your application. Required scores vary by programme, so we confirm them for your shortlist.',['Do I need to speak French?','What do I need to apply?']);
kb('contact','Talk to an advisor',['contact','talk','speak','book','free','reach'],'You can talk to a real advisor for free:\n\n- [Chat on WhatsApp](https://wa.me/917358364959)\n- [Fill in the consultation form](#enquire), it takes about a minute\n- Email **'+MAIL+'**\n\nAn advisor answers for your exact profile, usually in one short call.',['What services do you offer?']);
kb('biz','Business schools and MBA',['business','mba','management','school'],'Our explorer includes **9 business schools**:\n\n'+UNIS.filter(function(u){return u.t==='biz';}).map(function(u){return '- **'+u.n+'**, '+u.c;}).join('\n')+'\n\n[Compare them in the explorer](#universities).',['Tell me about HEC Paris','Do I need GMAT?']);

/* ---------- university lookups ---------- */
var ALIAS={'psl':0,'polytechnique':1,'ip paris':1,'ipp':1,'ecole polytechnique':1,'sorbonne university':2,'sorbonne universite':2,'sorbonne':2,'saclay':3,'paris saclay':3,'centrale':4,'supelec':4,'centralesupelec':4,'pantheon':5,'paris 1':5,'paris cite':6,'sciences po':7,'sciencespo':7,'hec':8,'essec':9,'escp':10,'skema':11,'ens lyon':12,'ens de lyon':12,'emlyon':13,'em lyon':13,'insa':14,'grenoble alpes':15,'uga':15,'gem':16,'grenoble ecole':16,'grenoble em':16,'aix marseille':17,'amu':17,'kedge':18,'strasbourg':19,'unistra':19,'montpellier':20,'edhec':21,'neoma':22,'isae':23,'supaero':23,'isae supaero':23,'tse':24,'toulouse school':24,'bordeaux':25};
function uniIdx(q){var f=' '+fold(q).replace(/[^a-z0-9 ]+/g,' ').replace(/\s+/g,' ')+' ',best=-1,len=0;
  UNIS.forEach(function(u,i){var n=' '+fold(u.n).replace(/[^a-z0-9 ]+/g,' ').replace(/\s+/g,' ').trim()+' ';if(f.indexOf(n)>-1&&n.length>len){best=i;len=n.length;}});
  if(best>-1)return best;
  Object.keys(ALIAS).forEach(function(a){if(f.indexOf(' '+a+' ')>-1&&a.length>len&&ALIAS[a]<UNIS.length){
    /* plain city names only count when the city has one institution */
    if(a==='strasbourg'||a==='montpellier'||a==='bordeaux'){if(!/univ|uni |universit/.test(f))return;}
    best=ALIAS[a];len=a.length;}});
  return best;}
function rk(u){return u.r?'QS 2027 #'+u.r.replace('=',''):'';}
function uniCard(u){var bits=[KIND[u.t]||'Institution',u.c];
  var s='**'+u.n+'** ('+bits.join(', ')+(rk(u)?', '+rk(u):'')+')\n\n';
  s+='- **Type:** '+u.ty+', founded '+u.fo+'\n';
  if(u.st)s+='- **Students:** '+u.st+(u.in?', international: '+u.in:'')+'\n';
  if(u.cp)s+='- **Campus:** '+u.cp+'\n';
  if(u.k&&u.k.length)s+='- **Known for:** '+u.k.join(', ')+'\n';
  if(u.p&&u.p.length)s+='- **Programmes in English include:** '+u.p.join('; ')+'\n';
  if(u.ac)s+='- **Accreditation:** '+u.ac+'\n';
  if(u.x)s+='\n'+u.x+'\n';
  if(u.w)s+='\n[Official website]('+u.w+') · [Compare in the explorer](#universities)';
  return s;}
var CITIES=['paris','lyon','grenoble','toulouse','strasbourg','montpellier','lille','bordeaux','marseille','reims','rouen','cergy','palaiseau','orsay','nice','sophia'];
var SUBJ=[['AI',/\b(ai|artificial intelligence|machine learning|ml)\b/,/artificial intelligence|\bai\b|machine learning/],['computer science',/\b(computer|computing|software|cs|it|coding)\b/,/computer|software|computing|\bai\b/],['data science',/\bdata\b/,/data/],['engineering',/engineer/,/engineer/],['business',/\b(business|management|mba|mim|marketing)\b/,/business|management|mba/],['finance',/financ/,/financ/],['economics',/econom/,/econom/],['law',/\blaw|legal\b/,/\blaw\b/],['medicine',/medic|health|mbbs|doctor|pharma/,/medic|health|life sciences/],['aerospace',/aero|space|aviation|aircraft/,/aero|space/],['physics',/physic|quantum/,/physic|quantum/],['mathematics',/\bmath/,/mathemat/],['political science',/politic|international (relations|affairs)|public policy/,/politic|international affairs|public policy/],['humanities',/humanit|arts?\b|history|philosoph/,/humanit|arts|history|philosoph/],['hospitality and luxury',/luxury|hospitality|hotel|fashion/,/luxury|hospitality|fashion/]];
function cityOf(q){var f=fold(q);for(var i=0;i<CITIES.length;i++)if(new RegExp('\\b'+CITIES[i]+'\\b').test(f))return CITIES[i];return '';}
function subjOf(q){var f=fold(q);for(var i=0;i<SUBJ.length;i++)if(SUBJ[i][1].test(f))return SUBJ[i];return null;}
function list(us,max){return us.slice(0,max||8).map(function(u){return '- **'+u.n+'**, '+u.c+(rk(u)?' ('+rk(u)+')':'');}).join('\n');}
function byRank(a,b){var x=parseInt((a.r||'9999').replace('=',''),10)||9999,y=parseInt((b.r||'9999').replace('=',''),10)||9999;return x-y;}

/* ---------- local answer ---------- */
var MONEY=/\b(fee|fees|tuition|cost|costs|costing|price|prices|pricing|charges?|expens\w*|cheap\w*|afford\w*|how much|lakhs?|crores?|euros?|rupees?|inr|eur|budget|package cost)\b|[€₹$]/;
var ctx={uni:-1,last:''};
function local(q){
  var f=fold(q).trim(),t=toks(q);
  if(/^(hi+|hello+|hey+|hiya|bonjour|salut|namaste|good (morning|afternoon|evening)|yo)\b[!. ]*$/.test(f))return {s:9,a:'Bonjour! I\'m **Tutee AI**. Ask me anything about studying in France: universities, Campus France, visas, scholarships, loans, work rights or settling in.',c:['How does the process work?','Which universities are top ranked?','Can I work while I study?']};
  if(/^(thanks?|thank you|thx|ty|merci|great|cool|awesome|nice|perfect)\b/.test(f))return {s:9,a:'Avec plaisir! Anything else about France I can help with?',c:['Book a free consultation','Tell me about scholarships']};
  if(/^(bye|goodbye|see you|au revoir|ciao)\b/.test(f))return {s:9,a:'Au revoir, and bonne chance! When you\'re ready, [book a free consultation](#enquire).',c:[]};
  if(/\b(book|schedule)\b.*\b(consult|call|session|appointment)|free consultation|talk to (a |an )?(human|advisor|counsel)/.test(f))return {s:9,a:KB.filter(function(e){return e.id==='contact';})[0].a,c:['What services do you offer?']};
  if(MONEY.test(f)&&!/\bloan|scholar|proof|funds|show|visa|work|earn/.test(f))return {s:9,money:1,a:'We don\'t list fees or prices on this page, because tuition and living costs vary by programme, city and year. An advisor will give you **current, exact figures** for your shortlist in the free consultation.\n\nTo plan funding, ask me about scholarships, education loans with our partner banks, or part-time work.',c:['Tell me about scholarships','Which banks give loans?','Book a free consultation']};
  if(/\b(news|latest|updates?|announcements?|what'?s new|headlines?)\b/.test(f)&&!/\bvisa refus/.test(f)&&(window.__TCNEWS||[]).length){var N=window.__TCNEWS.slice(0,5);
    return {s:9,a:'Latest France study updates from our live news relay:\n\n'+N.map(function(x){return '- **'+(x.when||(function(p){return (+p[2])+' '+['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][(+p[1]||1)-1]+' '+p[0];})(String(x.date).split('-')))+':** '+x.title+(x.url?' ([source]('+x.url+'))':'');}).join('\n')+'\n\nOpen **All updates** in the LIVE bar under the hero for summaries.',c:['What changed for proof of funds?','Tell me about scholarships']};}
  /* university by name, or "it/there" follow-ups */
  var ui=uniIdx(q);if(ui<0&&ctx.uni>-1&&/\b(it|its|there|this (uni|university|school|one)|that (uni|university|school|one))\b/.test(f))ui=ctx.uni;
  if(ui>-1&&!/\b(visa|loan|scholarship|family|citizen)\b/.test(f)){ctx.uni=ui;var u=UNIS[ui];return {s:10,a:uniCard(u),c:['How do I apply?','Which banks give education loans?','Tell me about '+(UNIS[ui===0?1:0].n)]};}
  var city=cityOf(q),sub=subjOf(q),uniQ=/\b(univ|universit|college|school|institut|where|which|best|top|programme|program|course|master|bachelor|degree|study|grande)/.test(f);
  if(city&&uniQ){var us=UNIS.filter(function(u){return fold(u.c).indexOf(city)>-1&&(!sub||sub[2].test(fold((u.k||[]).join(' ')+' '+(u.p||[]).join(' ')+' '+u.ty)));}).sort(byRank);
    if(us.length)return {s:9,a:'In **'+city.charAt(0).toUpperCase()+city.slice(1)+'**'+(sub?' for '+sub[0]:'')+', our explorer covers:\n\n'+list(us)+'\n\nAsk me about any of them, or [open the explorer](#universities).',c:us.slice(0,2).map(function(u){return 'Tell me about '+u.n;})};}
  if(sub&&uniQ){var ss=UNIS.filter(function(u){return sub[2].test(fold((u.k||[]).join(' ')+' '+(u.p||[]).join(' ')+' '+u.ty));}).sort(byRank);
    if(ss.length)return {s:9,a:'Strong options for **'+sub[0]+'** in our explorer:\n\n'+list(ss,7)+'\n\nThe right fit depends on your grades and goals, so an advisor can shortlist with you. [Book a free call](#enquire).',c:ss.slice(0,2).map(function(u){return 'Tell me about '+u.n;})};}
  /* keyword scoring over the KB */
  var best=null,bs=0,second=0;
  KB.forEach(function(e){var sc=0,tt=toks(e.t);
    t.forEach(function(w){if(e.k.indexOf(w)>-1)sc+=3;else if(e.k.some(function(k){return k.length>3&&w.indexOf(k)===0;}))sc+=2;if(tt.indexOf(w)>-1)sc+=1;});
    if(sc>bs){second=bs;bs=sc;best=e;}else if(sc>second)second=sc;});
  if(!best)return {s:0};
  return {s:bs,margin:bs-second,a:best.a,c:best.c,id:best.id};}

/* ---------- Claude fallback (sample capability) ---------- */
var samp=null,sampState='idle',hist=[];
function getSample(){if(sampState!=='idle')return Promise.resolve(samp);sampState='wait';
  try{if(!window.claude||!window.claude.use){sampState='none';return Promise.resolve(null);}
    return Promise.race([window.claude.use('sample'),new Promise(function(r){setTimeout(function(){r(null);},10000);})]).then(function(s){samp=s||null;sampState=samp?'ok':'none';return samp;},function(){sampState='none';return null;});}catch(e){sampState='none';return Promise.resolve(null);}}
var FACTS='';
function facts(){if(FACTS)return FACTS;
  var f=['Today is '+new Date().toISOString().slice(0,10)+'. Visa rules on this page were checked on 7 October 2026 against service-public.gouv.fr, campusfrance.org and france-visas.gouv.fr.'];
  KB.forEach(function(e){f.push('## '+e.t+'\n'+strip(e.a).replace(/\[([^\]]+)\]\([^)]+\)/g,'$1'));});
  f.push('## Universities in our explorer (26)\n'+UNIS.map(function(u){return '- '+u.n+' | '+(KIND[u.t]||'')+' | '+u.c+(u.r?' | QS 2027 #'+u.r.replace('=',''):'')+' | known for: '+(u.k||[]).join(', ')+(u.p&&u.p.length?' | English programmes: '+u.p.join('; '):'');}).join('\n'));
  if(ST.length)f.push('## Pathway\n'+ST.map(function(s){return '- '+s.h+': '+s.p;}).join('\n'));
  return FACTS=f.join('\n\n');}
function prompt(q,hint){var NW=(window.__TCNEWS||[]).slice(0,10).map(function(x){return '- '+(x.when||x.date)+' | '+x.title+': '+(x.summary||'')+' (source: '+(x.source||'')+(x.url?', '+x.url:'')+')';}).join('\n');
  var rules='You are Tutee AI, the assistant on the Tutee Connect France landing page. Tutee Connect is an education consultancy that helps students, mainly from India, study in France.\n\n'+
  'Rules:\n- Answer the visitor\'s question helpfully and accurately, in 40 to 140 words. Use short paragraphs or "- " bullets and **bold** for key facts. No headings, no tables.\n'+
  '- Base answers about Tutee Connect, its services, partners and the facts below ONLY on the PAGE FACTS. For general questions about France, study abroad or student life, use your own knowledge, but say when something should be checked on an official site (campusfrance.org, france-visas.gouv.fr, service-public.gouv.fr).\n'+
  '- NEVER state tuition fees, living-cost figures, loan amounts, interest rates, prices or service charges. Say an advisor gives exact current figures in the free consultation.\n'+
  '- Never promise admission, a visa or a job. Do not invent deadlines, scores or rules.\n'+
  '- When the answer depends on the visitor\'s own profile, end with a one-line nudge to book the free consultation using the markdown link [book a free consultation](#enquire).\n'+
  '- If the question is unrelated to studying, living or working in France, answer briefly and kindly, then steer back to how you can help with France.\n'+
  '- Reply in the visitor\'s language.\n\nPAGE FACTS\n'+facts()+(NW?'\n\n## Latest news (live relay on the page)\n'+NW:'');
  var msgs=[],h=hist.slice(-6);
  var first=rules+(hint?'\n\nMOST RELEVANT FACT FOR THIS QUESTION\n'+strip(hint):'')+'\n\nVISITOR QUESTION\n';
  if(!h.length)return [{role:'user',content:first+q}];
  msgs.push({role:'user',content:first+h[0].q});
  h.forEach(function(x,i){msgs.push({role:'assistant',content:x.a});msgs.push({role:'user',content:i+1<h.length?h[i+1].q:q});});
  return msgs;}
var FALLBACK='I don\'t have a checked answer for that one yet. An advisor can answer it for your exact profile in one short, free call.\n\n- [Book a free consultation](#enquire)\n- [Chat on WhatsApp](https://wa.me/917358364959)\n- Email **'+MAIL+'**';

/* answer(text, onUpdate(html)) -> Promise<{html, chips, src}> */
var ctl=null;
function answer(q,onUpdate){q=String(q||'').trim().slice(0,600);
  var L=local(q),strong=L.s>=9||(L.s>=6&&L.margin>=2);
  function done(a,c,src){hist.push({q:q,a:strip(a)});if(hist.length>12)hist.shift();return {html:md(a),chips:c||[],src:src,text:a};}
  if(strong)return Promise.resolve(done(L.a,L.c,'kb'));
  return getSample().then(function(s){
    if(!s){return done(L.s>=3?L.a:FALLBACK,L.s>=3?L.c:['Book a free consultation','What services do you offer?'],L.s>=3?'kb':'fallback');}
    if(ctl)try{ctl.abort();}catch(e){}
    ctl=new AbortController();var last=0,pend='',raf=0;
    function flush(){raf=0;onUpdate&&onUpdate(md(pend));}
    return s(prompt(q,L.s>=3?L.a:''),{cache:false,signal:ctl.signal,modelTier:'default',onText:function(u){pend=u.text||'';if(!raf)raf=requestAnimationFrame(flush);}})
      .then(function(r){var a=(r&&r.text||'').trim();if(!a)a=L.s>=3?L.a:FALLBACK;return done(a,L.s>=3?L.c:['Book a free consultation'],'ai');},
        function(e){if(e&&e.code==='not_granted'){samp=null;sampState='none';}
          if(e&&e.name==='AbortError')throw e;
          return done(L.s>=3?L.a:FALLBACK,L.s>=3?L.c:['Book a free consultation'],'fallback');});
  });}
window.TuteeAI={answer:answer,render:md};

/* ---------- floating panel UI ---------- */
var SUG=['How does the process work?','Which universities are top ranked?','Can I work while I study?','Which banks give education loans?','Can my family join me?','Best universities for AI?'];
var root=null,logEl,inEl,sendEl,chipsEl,busy=false,opened=false;
var ORB='<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M12 2.5l1.9 5.6 5.6 1.9-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.9zM18.5 15l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9z"/></svg>';
function build(){if(root)return;
  root=document.createElement('div');root.className='tai';root.id='tuteeAI';root.setAttribute('role','dialog');root.setAttribute('aria-modal','false');root.setAttribute('aria-labelledby','taiT');root.hidden=true;
  root.innerHTML='<header class="tai-h"><span class="tai-av" aria-hidden="true">'+ORB+'</span><div><b id="taiT">Tutee AI</b><span class="tai-st"><i aria-hidden="true"></i>Online · France study expert</span></div><button type="button" class="tai-x" aria-label="Close Tutee AI">×</button></header>'+
   '<div class="tai-log" id="taiLog" role="log" aria-live="polite"></div>'+
   '<div class="tai-chips" id="taiChips"></div>'+
   '<form class="tai-in" autocomplete="off"><label class="sr" for="taiIn">Ask Tutee AI a question</label><input id="taiIn" type="text" maxlength="600" placeholder="Ask anything about studying in France"><button type="submit" class="tai-go" aria-label="Send">'+
   '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M3.4 20.4l17.4-7.5c.8-.4.8-1.5 0-1.8L3.4 3.6c-.7-.3-1.4.3-1.2 1l1.7 6.1 9.1 1.3-9.1 1.3-1.7 6.1c-.2.7.5 1.3 1.2 1z"/></svg></button></form>'+
   '<p class="tai-note">AI answers can be wrong. Check key details with an <a href="#enquire">advisor</a>.</p>';
  document.body.appendChild(root);
  logEl=root.querySelector('.tai-log');inEl=root.querySelector('#taiIn');chipsEl=root.querySelector('#taiChips');sendEl=root.querySelector('.tai-go');
  root.querySelector('.tai-x').addEventListener('click',close);
  root.querySelector('form').addEventListener('submit',function(e){e.preventDefault();ask(inEl.value);});
  root.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(a&&window.matchMedia('(max-width:620px)').matches)close();
    var b=e.target.closest&&e.target.closest('.tai-chip');if(b)ask(b.dataset.q==='Book a free consultation'?'book a free consultation':b.dataset.q);});
  root.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
  bubble('bot',md('Bonjour! I\'m **Tutee AI**, your France study expert. Ask me about universities, Campus France, visas, scholarships, loans, work rights or settling in.'));
  chips(SUG);}
function bubble(cls,html){var d=document.createElement('div');d.className='tai-m '+cls;d.innerHTML=html;logEl.appendChild(d);logEl.scrollTop=logEl.scrollHeight;return d;}
function chips(list){chipsEl.innerHTML=(list||[]).slice(0,4).map(function(c){return '<button type="button" class="tai-chip" data-q="'+esc(c)+'">'+esc(c)+'</button>';}).join('');}
function ask(q){q=String(q||'').trim();if(!q||busy)return;busy=true;inEl.value='';chips([]);
  bubble('me',esc(q));var t=bubble('bot tai-typing','<i></i><i></i><i></i>'),b=null;sendEl.disabled=true;
  var min=new Promise(function(r){setTimeout(r,380);});
  answer(q,function(h){if(!b){t.remove();b=bubble('bot',h);}else b.innerHTML=h;logEl.scrollTop=logEl.scrollHeight;})
   .then(function(r){return min.then(function(){return r;});})
   .then(function(r){if(!b){t.remove();b=bubble('bot',r.html);}else b.innerHTML=r.html;if(r.src==='ai')b.insertAdjacentHTML('beforeend','<span class="tai-src">Answered by Claude · check key details with an advisor</span>');
     chips(r.chips);var top=b.offsetTop-logEl.offsetTop-10;logEl.scrollTop=b.offsetHeight>logEl.clientHeight-40?top:logEl.scrollHeight;},function(){if(t.parentNode)t.remove();})
   .then(function(){busy=false;sendEl.disabled=false;});}
var fab=null;
function open(){build();root.hidden=false;opened=true;requestAnimationFrame(function(){root.classList.add('on');});fab&&fab.setAttribute('aria-expanded','true');document.documentElement.classList.add('tai-open');
  if(!window.matchMedia('(pointer:coarse)').matches)setTimeout(function(){inEl.focus({preventScroll:true});},260);}
function close(){if(!root)return;root.classList.remove('on');opened=false;fab&&fab.setAttribute('aria-expanded','false');document.documentElement.classList.remove('tai-open');
  setTimeout(function(){if(!opened)root.hidden=true;},300);fab&&fab.focus({preventScroll:true});}
fab=document.createElement('button');fab.type='button';fab.className='tai-fab';fab.setAttribute('aria-controls','tuteeAI');fab.setAttribute('aria-expanded','false');
fab.innerHTML='<span class="tai-orb" aria-hidden="true">'+ORB+'</span><span class="tai-lbl">Ask Tutee AI</span>';
fab.addEventListener('click',function(){opened?close():open();});
document.body.appendChild(fab);
window.TuteeAI.open=function(q){open();if(q)ask(q);};
/* any element with data-ask opens the panel */
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('[data-ask]');if(a){e.preventDefault();window.TuteeAI.open(a.getAttribute('data-ask'));}});
})();
