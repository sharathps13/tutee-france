(function(){
var SRC0='<!doctype html>'+document.documentElement.outerHTML,FAVI='data:image/png;base64,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';
/* favicon: the Tutee Connect mark (added at runtime too, in case the host drops head tags) */
(function(){if(!document.querySelector('link[rel="icon"]')){var l=document.createElement('link');l.rel='icon';l.type='image/png';l.href=FAVI;document.head.appendChild(l);}})();
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var eur=function(n){return '€'+Math.round(n).toLocaleString('en-IE');};
/* perf: canvases drop to ~10 fps while the page is being scrolled, so scrolling always wins */
var __offIO=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle('is-off',!e.isIntersecting);});},{rootMargin:'200px 0px'}):null;
addEventListener('DOMContentLoaded',function(){if(__offIO)$$('main>section,footer,.ux,.nr').forEach(function(el){__offIO.observe(el);});});
var __scrT=0;addEventListener('scroll',function(){__scrT=performance.now();},{passive:true});function scrolling(n){return (n||performance.now())-__scrT<160;}
var esc=function(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});};

/* ---------- nav ---------- */
var nav=$('#nav'),prog=$('#progress'),fc=$('#floatCta');
var heroVis=true,enqVis=false;
var heroEl=$('#home'),navTick=false,navOn=null;
function onScroll(){navTick=false;var h=document.documentElement,y=h.scrollTop||window.pageYOffset||0;var p=y/(h.scrollHeight-h.clientHeight||1);prog.style.transform='scaleX('+Math.min(1,Math.max(0,p))+')';
  var on=y>40;if(on!==navOn){navOn=on;nav.classList.toggle('is-scrolled',on);}}
window.addEventListener('scroll',function(){if(!navTick){navTick=true;requestAnimationFrame(onScroll);}},{passive:true});onScroll();
var mb=$('#menuBtn'),mm=$('#mobileMenu');
var mmS=$('#mmShade');function mmSet(o){mm.hidden=!o;if(mmS)mmS.hidden=!o;mb.setAttribute('aria-expanded',String(o));}
mb.addEventListener('click',function(){mmSet(mm.hidden);});
if(mmS)mmS.addEventListener('click',function(){mmSet(false);});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!mm.hidden){mmSet(false);mb.focus();}});
$$('#mobileMenu a,#mobileMenu button').forEach(function(a){a.addEventListener('click',function(){mmSet(false);});});
function openNews(){var b=document.querySelector('.nr-all');if(b)b.click();}
$$('.mm-news,.mb-news').forEach(function(b){b.addEventListener('click',function(){setTimeout(openNews,30);});});
var mbar=$('#mbar');function mbarSet(on){if(!mbar)return;mbar.classList.toggle('is-on',on);document.body.classList.toggle('mbar-on',on);}
/* swipe-rail dots (mobile) */
(function(){if(!window.matchMedia)return;var mq=matchMedia('(max-width:700px)');
  $$('.why-grid,.fund-grid').forEach(function(r){var n=r.children.length,d=document.createElement('div');d.className='m-dots';d.setAttribute('aria-hidden','true');d.innerHTML=new Array(n+1).join('<i></i>');r.parentNode.insertBefore(d,r.nextSibling);
    var dots=d.children,t=0;function upd(){t=0;var w=r.children[0]?r.children[0].offsetWidth+12:1,i=Math.round(r.scrollLeft/w);if(r.scrollLeft+r.clientWidth>=r.scrollWidth-4)i=n-1;for(var k=0;k<n;k++)dots[k].classList.toggle('on',k===i);}
    r.addEventListener('scroll',function(){if(!t)t=requestAnimationFrame(upd);},{passive:true});upd();
    function vis(){d.style.display=mq.matches?'':'none';}vis();try{mq.addEventListener('change',vis);}catch(e){mq.addListener&&mq.addListener(vis);}});})();
if('IntersectionObserver' in window){
  new IntersectionObserver(function(e){heroVis=e[0].isIntersecting;fc.classList.toggle('show',!heroVis&&!enqVis);mbarSet(!heroVis&&!enqVis);document.documentElement.classList.toggle('in-hero',heroVis);},{threshold:.2}).observe($('#home'));
  new IntersectionObserver(function(e){enqVis=e[0].isIntersecting;fc.classList.toggle('show',!heroVis&&!enqVis);mbarSet(!heroVis&&!enqVis);},{threshold:.12}).observe($('#enquire'));
  var links=$$('.nav-links a[href^="#"]:not(.btn)');
  var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id);});}});},{rootMargin:'-45% 0px -50% 0px'});
  links.forEach(function(l){var t=$(l.getAttribute('href'));if(t)so.observe(t);});
}
/* spotlight on primary buttons */
document.addEventListener('pointermove',function(e){var b=e.target.closest&&e.target.closest('.btn-primary');if(!b)return;var r=b.getBoundingClientRect();b.style.setProperty('--mx',(e.clientX-r.left)+'px');b.style.setProperty('--my',(e.clientY-r.top)+'px');},{passive:true});

function buildTower(P,O){
  var cx=300,base=900,H=800,W=225;
  function hw(y){return .035+.965*Math.pow(Math.max(0,1-y),2.35);}
  function X(y,sg){return cx+sg*W*hw(y);}function Y(y){return base-H*y;}
  function f(n){return n.toFixed(1);}
  var L=[],R=[];for(var y=0;y<=1.0001;y+=.01){L.push(f(X(y,-1))+','+f(Y(y)));R.push(f(X(y,1))+','+f(Y(y)));}
  var outline='M'+L.concat(R.slice().reverse()).join('L')+'Z',edgeL='M'+L.join('L'),edgeR='M'+R.join('L');
  var a0=W*.56,archTop=Y(.135);
  var arch='M'+f(cx-a0)+','+base+'C'+f(cx-a0)+','+f(base-H*.1)+' '+f(cx-W*.24)+','+f(archTop)+' '+cx+','+f(archTop)+'C'+f(cx+W*.24)+','+f(archTop)+' '+f(cx+a0)+','+f(base-H*.1)+' '+f(cx+a0)+','+base+'Z';
  var m1=W*hw(.19)*.5;
  var mid='M'+f(cx-m1)+','+f(Y(.19))+'Q'+f(cx-W*hw(.27)*.32)+','+f(Y(.27))+' '+cx+','+f(Y(.335))+'Q'+f(cx+W*hw(.27)*.32)+','+f(Y(.27))+' '+f(cx+m1)+','+f(Y(.19))+'Z';
  // lattice
  var lat='',pts=[];
  function xo(y,sg){return X(y,sg);}function xi(y,sg){return cx+sg*W*hw(y)*.56;}
  for(var y2=0;y2<.335;y2+=.024){var d=Math.min(.024,.335-y2);[-1,1].forEach(function(sg){
    lat+='M'+f(xo(y2,sg))+','+f(Y(y2))+'L'+f(xi(y2+d,sg))+','+f(Y(y2+d))+'M'+f(xi(y2,sg))+','+f(Y(y2))+'L'+f(xo(y2+d,sg))+','+f(Y(y2+d))+'M'+f(xo(y2,sg))+','+f(Y(y2))+'L'+f(xi(y2,sg))+','+f(Y(y2));
    pts.push([xo(y2,sg),Y(y2)],[xi(y2,sg),Y(y2)]);});}
  for(var y3=.36;y3<.97;y3+=(y3<.84?.032:.026)){var d3=y3<.84?.032:.026;
    lat+='M'+f(X(y3,-1))+','+f(Y(y3))+'L'+f(X(y3+d3,1))+','+f(Y(y3+d3))+'M'+f(X(y3,1))+','+f(Y(y3))+'L'+f(X(y3+d3,-1))+','+f(Y(y3+d3))+'M'+f(X(y3,-1))+','+f(Y(y3))+'L'+f(X(y3,1))+','+f(Y(y3));
    pts.push([X(y3,-1),Y(y3)],[X(y3,1),Y(y3)],[cx,Y(y3+d3/2)]);}
  function plat(y0,y1,k){var w=W*hw((y0+y1)/2)*k;return '<rect class="t-plat" x="'+f(cx-w)+'" y="'+f(Y(y1))+'" width="'+f(2*w)+'" height="'+f(Y(y0)-Y(y1))+'" rx="2"/>';}
  // sparkles
  var sp='',sd2=17;function r2(){sd2=(sd2*16807)%2147483647;return sd2/2147483647;}
  for(var k=0;k<170;k++){var yy=Math.pow(r2(),1.25),xx=cx+(r2()*2-1)*W*hw(yy)*.95;if(yy<.135&&Math.abs(xx-cx)<a0*Math.sqrt(1-yy/.135))continue;pts.push([xx,Y(yy)]);}
  pts.forEach(function(p){sp+='<circle class="sp" cx="'+f(p[0])+'" cy="'+f(p[1])+'" r="'+(1.3+r2()*1.6).toFixed(2)+'" style="--d:'+(1.6+r2()*2.6).toFixed(2)+'s;--dl:-'+(r2()*4).toFixed(2)+'s"/>';});
  var gl='';for(var g=0;g<16;g++){var p=pts[Math.floor(r2()*pts.length)],z=6+r2()*7;gl+='<path class="glint" d="M'+f(p[0])+','+f(p[1]-z)+'L'+f(p[0]+z*.18)+','+f(p[1]-z*.18)+'L'+f(p[0]+z)+','+f(p[1])+'L'+f(p[0]+z*.18)+','+f(p[1]+z*.18)+'L'+f(p[0])+','+f(p[1]+z)+'L'+f(p[0]-z*.18)+','+f(p[1]+z*.18)+'L'+f(p[0]-z)+','+f(p[1])+'L'+f(p[0]-z*.18)+','+f(p[1]-z*.18)+'Z" style="--d:'+(2.4+r2()*3).toFixed(2)+'s;--dl:-'+(r2()*5).toFixed(2)+'s"/>';}
  var top=Y(1.04);
  var markup='<defs><linearGradient id="'+P+'tGold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF1C4"/><stop offset=".45" stop-color="#FBCB5C"/><stop offset="1" stop-color="#F7941D"/></linearGradient>'+
   '<linearGradient id="'+P+'beamG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FFF6E4" stop-opacity=".9"/><stop offset="1" stop-color="#FFF6E4" stop-opacity="0"/></linearGradient>'+
   '<filter id="'+P+'tGlow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>'+
   '<radialGradient id="'+P+'halo" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FBCB5C" stop-opacity=".35"/><stop offset="1" stop-color="#FBCB5C" stop-opacity="0"/></radialGradient></defs>'+
   '<ellipse cx="'+cx+'" cy="'+f(Y(.45))+'" rx="330" ry="470" fill="url(#'+P+'halo)"/>'+
   (O.beam?'<g class="beam" style="--bx:'+cx+'px;--by:'+f(top)+'px"><path d="M'+cx+','+f(top)+'L'+(cx+1500)+','+f(top-90)+'L'+(cx+1500)+','+f(top+90)+'Z" fill="url(#'+P+'beamG)"/></g>':'')+
   '<path class="t-fill" fill-rule="evenodd" d="'+outline+arch+mid+'"/>'+
   '<path class="t-lat draw" pathLength="1" d="'+lat+'"/>'+
   '<path class="t-edge draw" pathLength="1" d="'+edgeL+'"/><path class="t-edge draw" pathLength="1" d="'+edgeR+'"/><path class="t-edge draw" pathLength="1" d="'+arch+'"/><path class="t-edge draw" pathLength="1" d="'+mid+'"/>'+
   plat(.172,.186,1.1)+plat(.348,.358,1.16)+plat(.842,.85,1.5)+'<rect class="t-plat" x="'+(cx-5)+'" y="'+f(Y(.995))+'" width="10" height="'+f(H*.03)+'"/><path d="M'+cx+','+f(Y(.995))+'V'+f(top)+'" stroke="#FBCB5C" stroke-width="2.5"/>'+
   '<circle cx="'+cx+'" cy="'+f(top)+'" r="5" fill="#FFF6E4" filter="url(#'+P+'tGlow)"/>'+
   (O.sp?'<g class="spk">'+sp+gl+'</g>':'');
  return {markup:markup,outline:outline,arch:arch,mid:mid,lat:lat};
}
/* ---------- Paris skyline hero: sparkle, beacon, hover ---------- */
var NS='http://www.w3.org/2000/svg';
(function(){
  var DD={"pts":[[0.6241,0.178],[0.6079,0.5177],[0.6447,0.6116],[0.5952,0.5467],[0.6504,0.6034],[0.6396,0.5588],[0.6082,0.606],[0.6222,0.4924],[0.6235,0.462],[0.6,0.5725],[0.632,0.2191],[0.6285,0.2581],[0.6301,0.3545],[0.6526,0.5877],[0.6152,0.4792],[0.6317,0.5056],[0.6105,0.426],[0.5639,0.6597],[0.6149,0.3392],[0.6282,0.2941],[0.6108,0.391],[0.5686,0.6673],[0.6,0.5811],[0.6558,0.6334],[0.6244,0.2292],[0.6295,0.3144],[0.6593,0.6562],[0.6149,0.5837],[0.6304,0.6176],[0.6273,0.2272],[0.6171,0.3413],[0.6124,0.392],[0.6149,0.4675],[0.6158,0.4696],[0.6247,0.5953],[0.6301,0.5461],[0.5823,0.6176],[0.6095,0.5],[0.6082,0.4326],[0.625,0.2246],[0.6187,0.2967],[0.6444,0.6085],[0.6174,0.5066],[0.6003,0.5913],[0.6244,0.2576],[0.6114,0.428],[0.6415,0.5781],[0.613,0.3925],[0.5832,0.6217],[0.6051,0.4878],[0.6317,0.4062],[0.6035,0.5198],[0.62,0.2581],[0.6399,0.6313],[0.6349,0.5766],[0.6282,0.6111],[0.6041,0.4255],[0.6187,0.2845],[0.6124,0.5958],[0.6244,0.4346],[0.6266,0.3002],[0.6288,0.2835],[0.6022,0.6029],[0.6504,0.6359],[0.6282,0.5183],[0.6345,0.5198],[0.6203,0.4574],[0.6247,0.2495],[0.6149,0.3367],[0.6241,0.607],[0.6235,0.4275],[0.6238,0.3347],[0.6241,0.2688],[0.6241,0.247],[0.6279,0.4366],[0.6171,0.5938],[0.6206,0.6014],[0.6219,0.3976],[0.6203,0.2104],[0.6298,0.3976],[0.6016,0.5396],[0.6456,0.6029],[0.6396,0.573],[0.6168,0.2774],[0.6282,0.2181],[0.6269,0.2018],[0.619,0.3641],[0.5994,0.57],[0.6136,0.3829],[0.6288,0.5822],[0.5987,0.5603],[0.6197,0.289],[0.6117,0.4006],[0.6254,0.4108],[0.6197,0.5827],[0.6567,0.6587],[0.6225,0.2292],[0.5655,0.6526],[0.6127,0.3687],[0.6162,0.6161],[0.6197,0.2363],[0.6025,0.5335],[0.6222,0.3829],[0.6222,0.4625],[0.6323,0.4944],[0.6177,0.3377],[0.6177,0.4442],[0.6263,0.3661],[0.5933,0.5857],[0.6225,0.3458],[0.6177,0.2997],[0.6082,0.4508],[0.626,0.4939],[0.645,0.5877],[0.6165,0.5827],[0.5823,0.6227],[0.575,0.6481],[0.6491,0.5994],[0.626,0.3403],[0.6406,0.5482],[0.6374,0.4934],[0.6368,0.5578],[0.6231,0.5081],[0.6596,0.6466],[0.6025,0.6192],[0.5765,0.6217],[0.5759,0.6308],[0.6152,0.3215],[0.6016,0.5877],[0.6152,0.5827],[0.5933,0.5598],[0.619,0.217],[0.6422,0.5705],[0.626,0.2845],[0.6143,0.5081],[0.5975,0.5715],[0.6035,0.4184],[0.6257,0.4777],[0.6298,0.5269],[0.6412,0.5578],[0.6158,0.4026],[0.626,0.2459],[0.6155,0.431],[0.6235,0.4412],[0.6136,0.4625],[0.5724,0.641],[0.6114,0.3874],[0.6181,0.4361],[0.6206,0.3423],[0.6136,0.4858],[0.6235,0.3707],[0.6171,0.4883],[0.607,0.5877],[0.5971,0.5461],[0.6117,0.39],[0.5604,0.68],[0.6282,0.2906],[0.6288,0.4995],[0.6177,0.2982],[0.6501,0.6374],[0.6162,0.3636],[0.6032,0.568],[0.5775,0.644],[0.6073,0.499],[0.6266,0.5091],[0.6228,0.4843],[0.6485,0.6415],[0.619,0.4513],[0.6235,0.4508],[0.6266,0.2769],[0.6228,0.2135],[0.6523,0.6445],[0.6501,0.6075],[0.6187,0.3007],[0.612,0.6014],[0.6558,0.6531],[0.6044,0.5365],[0.6158,0.3813],[0.6184,0.212],[0.612,0.6105],[0.607,0.5188],[0.6247,0.5132],[0.6032,0.5664],[0.593,0.6095],[0.5984,0.6166],[0.6374,0.539],[0.6422,0.6207],[0.6323,0.4244],[0.6539,0.682],[0.6162,0.3798],[0.6219,0.2647],[0.6187,0.323],[0.6336,0.5507],[0.6184,0.3129],[0.619,0.4072],[0.625,0.2576],[0.6193,0.3316],[0.6342,0.4954],[0.6532,0.5801],[0.6238,0.4371],[0.6244,0.2079],[0.5781,0.6298],[0.6532,0.6141],[0.619,0.4569],[0.6152,0.3727],[0.6197,0.4037],[0.6269,0.4189],[0.6301,0.3732],[0.5639,0.6577],[0.6298,0.214],[0.6155,0.2165],[0.6136,0.3443],[0.6428,0.5659],[0.6358,0.5259],[0.6171,0.6045],[0.6212,0.2667],[0.62,0.3611],[0.6073,0.5172],[0.6079,0.5938],[0.6523,0.6232],[0.6273,0.2201],[0.6025,0.5614],[0.6187,0.4244],[0.5997,0.5603],[0.6187,0.2196],[0.6339,0.5497],[0.6219,0.5086],[0.6298,0.5461],[0.6339,0.4954],[0.6422,0.5822],[0.6171,0.6111],[0.6269,0.2373],[0.6577,0.6587],[0.6079,0.5056],[0.6368,0.5294],[0.6168,0.2515],[0.6238,0.6192],[0.6564,0.6567],[0.6235,0.3225],[0.6276,0.6166],[0.6235,0.4168],[0.626,0.1978],[0.5721,0.642],[0.6295,0.2825],[0.6162,0.503],[0.6586,0.642],[0.638,0.5654],[0.5848,0.5822],[0.6206,0.4625],[0.6019,0.4229],[0.6098,0.4173],[0.5886,0.5771],[0.5772,0.644],[0.6127,0.3788],[0.6212,0.2926],[0.6219,0.3605],[0.6171,0.4691],[0.626,0.4503],[0.5674,0.6699],[0.6352,0.5188],[0.6254,0.3616],[0.6241,0.2018],[0.6326,0.4752],[0.5677,0.6805],[0.5933,0.5639],[0.6127,0.4706],[0.6257,0.2125],[0.6235,0.3215],[0.632,0.4741],[0.6082,0.5112],[0.6219,0.6176],[0.6029,0.5492],[0.5883,0.5857],[0.6333,0.5431],[0.6225,0.3073],[0.6203,0.2835],[0.6539,0.6344],[0.575,0.6258],[0.5968,0.571],[0.6254,0.3337],[0.6593,0.6826],[0.6266,0.4975],[0.6165,0.5],[0.6368,0.5183],[0.6349,0.568],[0.6203,0.2429],[0.6228,0.2759],[0.6247,0.2252],[0.6371,0.4929],[0.659,0.6486],[0.5616,0.6602],[0.6152,0.5842],[0.6475,0.6045],[0.6498,0.6415],[0.6583,0.6755],[0.6203,0.5862],[0.6225,0.427],[0.6051,0.5132],[0.6247,0.3666],[0.6038,0.4194],[0.6292,0.3093],[0.6247,0.2667],[0.612,0.5979],[0.6162,0.462],[0.6333,0.4483],[0.6184,0.4883],[0.6301,0.5958],[0.633,0.4523],[0.6054,0.4863],[0.6269,0.4006],[0.6127,0.3854],[0.6212,0.4397],[0.5971,0.5644],[0.5778,0.5842],[0.6019,0.5421],[0.6444,0.6105],[0.6244,0.1907],[0.6187,0.6156],[0.6193,0.324],[0.6428,0.5674],[0.6216,0.4457],[0.6238,0.4026],[0.599,0.5735],[0.6466,0.6085],[0.6187,0.5852],[0.5616,0.6618],[0.6358,0.4878],[0.6222,0.4052],[0.588,0.6258],[0.6431,0.6212],[0.6285,0.3808],[0.6038,0.5963],[0.632,0.5066],[0.6168,0.3291],[0.6254,0.3144],[0.6171,0.3134],[0.6491,0.6445],[0.6241,0.3332],[0.6181,0.3443],[0.6086,0.4985],[0.6111,0.5112],[0.6187,0.2353],[0.5914,0.6207],[0.6168,0.3839],[0.6181,0.4493],[0.6206,0.3185],[0.593,0.5502],[0.6345,0.498],[0.613,0.3616],[0.6254,0.1765],[0.626,0.4863],[0.6529,0.5847],[0.625,0.2693],[0.5956,0.6161],[0.6368,0.5933],[0.5708,0.6344],[0.6022,0.5],[0.6298,0.4559],[0.5975,0.5254],[0.6177,0.2556],[0.6247,0.3362],[0.6146,0.4777],[0.6596,0.6511],[0.651,0.5781],[0.6041,0.5385],[0.5784,0.6349],[0.6266,0.2992],[0.6406,0.6105],[0.6361,0.5269],[0.6022,0.5117],[0.6409,0.5619],[0.6276,0.5061],[0.6276,0.4006],[0.6158,0.428],[0.6073,0.5071],[0.6463,0.5837],[0.6269,0.2013],[0.5895,0.6263],[0.6124,0.4726],[0.5731,0.6389],[0.6149,0.4462],[0.6542,0.6222],[0.6095,0.467],[0.6238,0.1988],[0.6048,0.5943],[0.6298,0.5264],[0.6231,0.3489],[0.6139,0.3306],[0.6038,0.4934],[0.6114,0.4001],[0.6158,0.5984],[0.6377,0.5938],[0.6238,0.3068],[0.6349,0.573],[0.6507,0.5953],[0.6019,0.5188],[0.6139,0.3281],[0.62,0.3458],[0.6393,0.5695],[0.5981,0.5593],[0.6295,0.3164],[0.6298,0.2348],[0.6247,0.4675],[0.6536,0.5872],[0.6155,0.4589],[0.6282,0.5953],[0.6295,0.2125],[0.6314,0.4949],[0.6136,0.5872],[0.625,0.2302],[0.6441,0.6389],[0.6057,0.5304],[0.6466,0.5857],[0.6231,0.36],[0.6311,0.5593],[0.6143,0.3316],[0.5997,0.5451],[0.6082,0.4229],[0.6288,0.2769],[0.6057,0.4919],[0.632,0.538],[0.6098,0.4128],[0.5784,0.5908],[0.6022,0.4929],[0.6197,0.2317],[0.5693,0.6673],[0.6301,0.4924],[0.619,0.2738],[0.62,0.3448],[0.6339,0.5451],[0.6254,0.4848],[0.633,0.4503],[0.6628,0.6623],[0.6225,0.3352],[0.5683,0.644],[0.632,0.6176],[0.6326,0.5969],[0.6361,0.5213],[0.601,0.4975],[0.6177,0.4057],[0.6092,0.4138],[0.619,0.253],[0.6377,0.5304],[0.6254,0.4462],[0.6333,0.4528],[0.6225,0.4341],[0.6187,0.3144],[0.6301,0.5193],[0.5826,0.6176],[0.5949,0.6222],[0.6266,0.4488],[0.6216,0.2348],[0.619,0.2926],[0.6244,0.2394],[0.6044,0.4873],[0.6254,0.3458],[0.6263,0.501],[0.5702,0.6785],[0.6225,0.501],[0.6311,0.5522],[0.5765,0.6207],[0.6222,0.4939],[0.6152,0.4868],[0.6158,0.3022],[0.6323,0.4204],[0.6295,0.2987],[0.5965,0.571],[0.6396,0.5867],[0.593,0.5649],[0.6431,0.5887],[0.6333,0.5791],[0.6022,0.5477],[0.6317,0.4234],[0.5816,0.5791],[0.6269,0.2297],[0.6247,0.604],[0.6238,0.3403],[0.6177,0.3012],[0.6263,0.2515],[0.62,0.4681],[0.5911,0.5827],[0.6203,0.354],[0.6326,0.4934],[0.5962,0.6029],[0.6263,0.4711],[0.6231,0.5847],[0.652,0.6212],[0.5835,0.5806],[0.6222,0.3915],[0.625,0.3621],[0.6181,0.3732],[0.6117,0.4843],[0.6209,0.4797],[0.5978,0.5766],[0.6602,0.6415],[0.6517,0.6207],[0.6105,0.4878],[0.6399,0.6293],[0.6152,0.4599],[0.6365,0.5502],[0.6558,0.6359],[0.6171,0.2637],[0.6222,0.463],[0.6025,0.4295],[0.6295,0.285],[0.6041,0.533],[0.6349,0.5177],[0.6266,0.4473],[0.6184,0.3286],[0.6532,0.6724],[0.6282,0.5984],[0.6241,0.3083],[0.6076,0.4721],[0.6177,0.4087],[0.5971,0.5319],[0.6447,0.5933],[0.5712,0.6395],[0.619,0.393],[0.6225,0.39],[0.6279,0.323],[0.6231,0.6014],[0.6292,0.5396],[0.6231,0.4391],[0.6545,0.6592],[0.633,0.4868],[0.6304,0.4797],[0.6228,0.2911],[0.6051,0.5101],[0.6063,0.4817],[0.5895,0.606],[0.5835,0.6217],[0.6304,0.5527],[0.6079,0.5162],[0.6634,0.6602],[0.6197,0.4138],[0.6063,0.5177],[0.6216,0.5963],[0.6301,0.536],[0.6187,0.465],[0.6181,0.215],[0.6263,0.2535],[0.6529,0.5842],[0.5956,0.57],[0.6349,0.4823],[0.6403,0.5695],[0.6298,0.2378],[0.6257,0.1947],[0.6,0.5279],[0.5772,0.6212],[0.5823,0.6136],[0.6307,0.3976],[0.5984,0.6146],[0.5886,0.5867],[0.6238,0.2901],[0.5978,0.5761],[0.6108,0.5918],[0.6038,0.5193],[0.601,0.503],[0.5952,0.5456],[0.6254,0.4397]],"top":[0.6244,0.1826],"box":[0.5537,0.15,0.6656,0.6856],"w":3155,"h":1972},DN={"top": [0.5594, 0.2033], "box": [0.475, 0.12, 0.645, 0.86], "pts": [[0.5057, 0.8229], [0.5557, 0.3767], [0.5073, 0.8004], [0.5734, 0.4388], [0.5294, 0.6629], [0.6018, 0.7425], [0.5714, 0.4554], [0.5526, 0.4517], [0.5547, 0.46], [0.5971, 0.7275], [0.581, 0.6967], [0.5555, 0.4088], [0.5534, 0.27], [0.5906, 0.72], [0.5573, 0.2475], [0.5724, 0.5662], [0.5331, 0.7133], [0.524, 0.8283], [0.5531, 0.4333], [0.5422, 0.5517], [0.5773, 0.4975], [0.6211, 0.8058], [0.4956, 0.8454], [0.5852, 0.655], [0.5656, 0.5525], [0.5628, 0.3962], [0.5362, 0.6996], [0.5599, 0.4612], [0.5625, 0.3771], [0.5654, 0.3217], [0.5906, 0.7183], [0.5698, 0.5067], [0.5036, 0.8008], [0.4878, 0.8479], [0.563, 0.3471], [0.6198, 0.8279], [0.5836, 0.6483], [0.6083, 0.7979], [0.5474, 0.4138], [0.531, 0.7217], [0.594, 0.6967], [0.5521, 0.5212], [0.6146, 0.8012], [0.574, 0.4458], [0.5651, 0.2771], [0.6148, 0.7971], [0.5677, 0.3533], [0.5638, 0.2546], [0.5529, 0.5462], [0.5625, 0.2654], [0.531, 0.6637], [0.5536, 0.3004], [0.5409, 0.6392], [0.4997, 0.8262], [0.5669, 0.3221], [0.4898, 0.8204], [0.5943, 0.7088], [0.556, 0.1892], [0.5659, 0.3787], [0.5612, 0.5542], [0.6286, 0.8175], [0.5745, 0.4525], [0.5565, 0.37], [0.5685, 0.4979], [0.5339, 0.7154], [0.562, 0.3975], [0.5117, 0.7962], [0.5792, 0.6833], [0.5451, 0.4942], [0.5669, 0.3279], [0.5568, 0.2888], [0.5589, 0.3475], [0.6297, 0.8042], [0.5547, 0.4512], [0.5318, 0.7033], [0.5354, 0.6829], [0.5482, 0.5488], [0.569, 0.4054], [0.5297, 0.7017], [0.5461, 0.5188], [0.5677, 0.3358], [0.5685, 0.4708], [0.563, 0.375], [0.5701, 0.4629], [0.5771, 0.4908], [0.5547, 0.4542], [0.4984, 0.8142], [0.5531, 0.4729], [0.5669, 0.4742], [0.6253, 0.7912], [0.5828, 0.6517], [0.5591, 0.1725], [0.5685, 0.3538], [0.5654, 0.465], [0.556, 0.3638], [0.4898, 0.835], [0.5318, 0.6562], [0.5602, 0.3208], [0.5458, 0.4979], [0.531, 0.7033], [0.5555, 0.3825], [0.5544, 0.4962], [0.5096, 0.7837], [0.5659, 0.4133], [0.5576, 0.4854], [0.6128, 0.7975], [0.5716, 0.36], [0.581, 0.5521], [0.5451, 0.4817], [0.5604, 0.5029], [0.5362, 0.6796], [0.5555, 0.2812], [0.5862, 0.6946], [0.5701, 0.5212], [0.5362, 0.6742], [0.5823, 0.6462], [0.5724, 0.4996], [0.5667, 0.4467], [0.5349, 0.6017], [0.4922, 0.8196], [0.551, 0.2879], [0.5909, 0.6979], [0.5734, 0.5242], [0.5336, 0.6908], [0.5576, 0.3771], [0.4943, 0.8254], [0.5763, 0.4817], [0.5625, 0.4821], [0.5513, 0.3238], [0.5536, 0.3233], [0.5573, 0.3992], [0.5646, 0.3212], [0.5349, 0.6817], [0.5763, 0.57], [0.5529, 0.5025], [0.5625, 0.3421], [0.5797, 0.6958], [0.5062, 0.8225], [0.5474, 0.5608], [0.5542, 0.5062], [0.5331, 0.6467], [0.5682, 0.3854], [0.5661, 0.48], [0.5542, 0.3504], [0.5622, 0.3721], [0.5661, 0.4625], [0.5552, 0.425], [0.4964, 0.7971], [0.5359, 0.7062], [0.6148, 0.7904], [0.5544, 0.4858], [0.5659, 0.3467], [0.5461, 0.5579], [0.5388, 0.6833], [0.5638, 0.3458], [0.5057, 0.81], [0.4891, 0.8354], [0.5586, 0.3412], [0.4938, 0.8179], [0.624, 0.8008], [0.5445, 0.5108], [0.5417, 0.5638], [0.556, 0.2596], [0.518, 0.7429], [0.6234, 0.7904], [0.5924, 0.6604], [0.5656, 0.4529], [0.5859, 0.7012], [0.5427, 0.5488], [0.5526, 0.375], [0.5682, 0.4267], [0.5237, 0.7092], [0.5294, 0.7375], [0.6089, 0.7867], [0.5557, 0.49], [0.5586, 0.2554], [0.5633, 0.1892], [0.568, 0.33], [0.5484, 0.4012], [0.6102, 0.8088], [0.5615, 0.4121], [0.5646, 0.2521], [0.568, 0.4617], [0.5646, 0.4971], [0.626, 0.8071], [0.5323, 0.6904], [0.5818, 0.6975], [0.6052, 0.8096], [0.5667, 0.4704], [0.5292, 0.6917], [0.5674, 0.5529], [0.5867, 0.6587], [0.5576, 0.4558], [0.5682, 0.4275], [0.5708, 0.5704], [0.5549, 0.2612], [0.5615, 0.2946], [0.5367, 0.6712], [0.6143, 0.7887], [0.5849, 0.6842], [0.5698, 0.3983], [0.5333, 0.7179], [0.5977, 0.7229], [0.6195, 0.8067], [0.5508, 0.455], [0.5458, 0.5054], [0.556, 0.2954], [0.5344, 0.6796], [0.5549, 0.3754], [0.5581, 0.3758], [0.5516, 0.4133], [0.6232, 0.775], [0.5573, 0.2833], [0.5466, 0.5479], [0.5846, 0.7012], [0.6161, 0.8167], [0.5669, 0.4821], [0.5966, 0.6896], [0.5547, 0.455], [0.5776, 0.5429], [0.5487, 0.3779], [0.5956, 0.6667], [0.5664, 0.1933], [0.6266, 0.7875], [0.5362, 0.6988], [0.5068, 0.8142], [0.5641, 0.2804], [0.5643, 0.3842], [0.5888, 0.7029], [0.5602, 0.3979], [0.5531, 0.345], [0.6221, 0.8246], [0.5953, 0.6804], [0.5562, 0.4392], [0.5049, 0.8079], [0.5924, 0.7229], [0.5094, 0.7829], [0.5875, 0.685], [0.5018, 0.8075], [0.6224, 0.8275], [0.5185, 0.7192], [0.5599, 0.2592], [0.5974, 0.6729], [0.5859, 0.6779], [0.6031, 0.7425], [0.5549, 0.4533], [0.5234, 0.7258], [0.5685, 0.5496], [0.5534, 0.4846], [0.599, 0.6875], [0.5518, 0.3821], [0.5979, 0.6942], [0.568, 0.4071], [0.5635, 0.2767], [0.5648, 0.3312], [0.568, 0.4854], [0.5576, 0.2758], [0.562, 0.2912], [0.5607, 0.285], [0.6237, 0.7862], [0.5703, 0.5242], [0.5661, 0.4892], [0.5539, 0.315], [0.6055, 0.8125], [0.5284, 0.7108], [0.6182, 0.7962], [0.5885, 0.6546], [0.5635, 0.2938], [0.562, 0.5508], [0.5529, 0.4258], [0.5688, 0.4633], [0.5328, 0.6546], [0.5724, 0.5471], [0.5549, 0.3758], [0.6167, 0.7904], [0.5531, 0.2962], [0.5312, 0.6554], [0.5664, 0.3246], [0.6112, 0.7842], [0.6232, 0.7883], [0.5656, 0.3533], [0.556, 0.3729], [0.5482, 0.5588], [0.5651, 0.27], [0.5539, 0.3879], [0.4958, 0.8133], [0.499, 0.8058], [0.5372, 0.6283], [0.5633, 0.19], [0.5497, 0.3962], [0.562, 0.3379], [0.6086, 0.6512], [0.5669, 0.3271], [0.5336, 0.7029], [0.569, 0.5617], [0.5635, 0.5158], [0.6143, 0.83], [0.5474, 0.5612], [0.562, 0.4454], [0.618, 0.8046], [0.6021, 0.79], [0.4935, 0.8217], [0.613, 0.8258], [0.5539, 0.3683], [0.5357, 0.6492], [0.506, 0.8204], [0.5607, 0.3938], [0.557, 0.4421], [0.5503, 0.4904], [0.531, 0.6688], [0.5466, 0.4808], [0.6094, 0.7983], [0.5565, 0.2679], [0.5294, 0.6788], [0.563, 0.29], [0.5503, 0.5058], [0.507, 0.7821], [0.5497, 0.3883], [0.562, 0.32], [0.525, 0.7262], [0.6177, 0.8417], [0.5544, 0.4421], [0.6234, 0.7033], [0.5651, 0.2625], [0.5729, 0.4288], [0.5034, 0.8129], [0.6344, 0.8262], [0.5701, 0.4754], [0.5385, 0.6704], [0.5628, 0.4662], [0.5326, 0.6792], [0.5318, 0.675], [0.6185, 0.8192], [0.5961, 0.6683], [0.6154, 0.7883], [0.5797, 0.5362], [0.5521, 0.275], [0.5276, 0.7071], [0.5628, 0.29], [0.5714, 0.5367], [0.5542, 0.2958], [0.5565, 0.5329], [0.5638, 0.34], [0.5547, 0.4962], [0.5893, 0.6838], [0.4982, 0.8338], [0.5635, 0.3504], [0.6164, 0.8229], [0.499, 0.8258], [0.5336, 0.6962], [0.6271, 0.8212], [0.5034, 0.8017], [0.5654, 0.3412], [0.5763, 0.5271], [0.5497, 0.3983], [0.5578, 0.2925], [0.5596, 0.5467], [0.6232, 0.8312], [0.5698, 0.5521], [0.5078, 0.7358], [0.5724, 0.3896], [0.5091, 0.81], [0.5729, 0.4121], [0.5693, 0.4204], [0.5698, 0.4133], [0.5352, 0.6883], [0.5643, 0.2471], [0.5651, 0.2967], [0.5633, 0.3583], [0.6096, 0.8079], [0.5557, 0.4304], [0.6117, 0.7887], [0.5448, 0.5512], [0.5576, 0.3267], [0.5661, 0.2875], [0.525, 0.6967], [0.5578, 0.3958], [0.5612, 0.2788], [0.5237, 0.7154], [0.5331, 0.7258], [0.5536, 0.2579], [0.4953, 0.8321], [0.6135, 0.8208], [0.562, 0.5083], [0.5638, 0.4179], [0.5099, 0.7429], [0.5625, 0.28], [0.5654, 0.3483], [0.5721, 0.5196], [0.55, 0.4992], [0.5503, 0.5333], [0.4971, 0.8075], [0.5549, 0.3229], [0.5674, 0.3817], [0.5523, 0.3108], [0.5529, 0.2717], [0.6237, 0.8233], [0.5562, 0.3583], [0.5497, 0.6621], [0.5651, 0.2892], [0.6065, 0.6529], [0.5643, 0.2733], [0.5049, 0.8192], [0.5328, 0.7133], [0.5312, 0.7058], [0.4901, 0.8162], [0.5529, 0.3229], [0.5719, 0.5646], [0.5, 0.8233], [0.5573, 0.4688], [0.6013, 0.6933], [0.5315, 0.6662], [0.5729, 0.5492], [0.5607, 0.5092], [0.624, 0.7871], [0.5461, 0.5583], [0.563, 0.3762], [0.5039, 0.7967], [0.5672, 0.4062], [0.5503, 0.38], [0.5674, 0.5267], [0.5651, 0.3646], [0.5055, 0.8196], [0.5922, 0.6408], [0.5417, 0.5617], [0.563, 0.3821], [0.5544, 0.4758], [0.6125, 0.8183], [0.5792, 0.7012], [0.5552, 0.2688], [0.5924, 0.7208], [0.5029, 0.8329], [0.5026, 0.8217], [0.5365, 0.6958], [0.5682, 0.4129], [0.6047, 0.7917], [0.5958, 0.7208], [0.5648, 0.4558], [0.6089, 0.8042], [0.5628, 0.4567], [0.563, 0.3988], [0.5036, 0.8125], [0.563, 0.4575], [0.6224, 0.7954], [0.5958, 0.725], [0.5471, 0.4679], [0.574, 0.5046], [0.5044, 0.8004], [0.5635, 0.4488], [0.5651, 0.4558], [0.6083, 0.8208], [0.6227, 0.7862], [0.549, 0.5229], [0.5396, 0.6608], [0.5284, 0.6929], [0.5349, 0.6529], [0.6128, 0.8108], [0.5523, 0.4279], [0.5461, 0.4817], [0.6138, 0.8196], [0.5875, 0.6958], [0.5716, 0.4517], [0.624, 0.7996], [0.5508, 0.4821], [0.5698, 0.4071], [0.4906, 0.8375], [0.499, 0.8362], [0.606, 0.7742], [0.5542, 0.4521], [0.5081, 0.7683], [0.5534, 0.29], [0.6255, 0.8262], [0.5557, 0.4775], [0.5057, 0.785], [0.5771, 0.5046], [0.5331, 0.6742], [0.5922, 0.6629], [0.569, 0.3912], [0.5695, 0.4596], [0.5419, 0.7262], [0.6177, 0.825], [0.5299, 0.6688], [0.5643, 0.2725], [0.6115, 0.8012], [0.5586, 0.315], [0.568, 0.5208], [0.5667, 0.5062], [0.562, 0.5104], [0.5648, 0.2983], [0.6148, 0.835], [0.5521, 0.3688], [0.5422, 0.5967], [0.5047, 0.7908], [0.5568, 0.4754], [0.5664, 0.3888], [0.5453, 0.5225], [0.5841, 0.6771], [0.5419, 0.7375], [0.5505, 0.4038], [0.5805, 0.5592], [0.5607, 0.4358], [0.5591, 0.2825], [0.5964, 0.6658], [0.5521, 0.4996], [0.5542, 0.4612], [0.5508, 0.4733], [0.5344, 0.7108], [0.5016, 0.7879], [0.6188, 0.7971], [0.5654, 0.3396], [0.551, 0.4508], [0.5862, 0.6583], [0.5659, 0.475], [0.593, 0.7021], [0.5, 0.8004], [0.5023, 0.7887], [0.6208, 0.8383], [0.5648, 0.2821], [0.5911, 0.7], [0.6161, 0.8117], [0.5307, 0.6629], [0.5469, 0.4971], [0.5708, 0.4325], [0.5531, 0.5225], [0.5536, 0.5079], [0.569, 0.6021], [0.5661, 0.5592], [0.5729, 0.4071], [0.5589, 0.4554], [0.4885, 0.8288], [0.5365, 0.6792], [0.5776, 0.5521], [0.6297, 0.8208], [0.5604, 0.375], [0.6133, 0.8317], [0.4904, 0.8288], [0.5497, 0.6017], [0.5841, 0.6942], [0.6039, 0.7821], [0.5667, 0.3817], [0.6292, 0.8162], [0.549, 0.3738], [0.5651, 0.1979], [0.5544, 0.4638], [0.6122, 0.8042], [0.5771, 0.6883], [0.5523, 0.33], [0.5391, 0.6867], [0.5456, 0.5042], [0.5719, 0.5142], [0.5721, 0.4975], [0.5958, 0.705], [0.5646, 0.2583], [0.5328, 0.6579]], "w": 3840, "h": 2400},D=document.documentElement.getAttribute('data-theme')==='light'?DD:DN,hero=$('#home'),img=$('#hbgImg'),inn=$('#hbgIn'),cv=$('#hbgFx'),hit=$('#tHit'),tag=$('#tTag');if(!hero||!img)return;
  var cx=cv.getContext('2d'),dpr=1,W=0,H=0,S=1,OX=0,OY=0,act=[],burstUntil=0,hover=0,hv=0,vis=true,t0=performance.now(),hraf=0,hl=0;
  function layout(){var r=inn.getBoundingClientRect();W=inn.offsetWidth;H=inn.offsetHeight;cv.width=W*dpr;cv.height=H*dpr;cx.setTransform(dpr,0,0,dpr,0,0);
    var pos=(getComputedStyle(img).objectPosition||'50% 50%').split(' '),px=parseFloat(pos[0])/100,py=parseFloat(pos[1]||'50')/100;
    S=Math.max(W/D.w,H/D.h);OX=(W-D.w*S)*px;OY=(H-D.h*S)*py;
    /* hit box + label in hero coords (inn is inset -14px) */
    var bx=OX+D.box[0]*D.w*S-14,by=OY+D.box[1]*D.h*S-14,bw=(D.box[2]-D.box[0])*D.w*S,bh=(D.box[3]-D.box[1])*D.h*S;
    hit.style.cssText='left:'+bx+'px;top:'+by+'px;width:'+bw+'px;height:'+bh+'px';
    tag.style.left=(bx+bw+10)+'px';tag.style.top=(by+bh*.5)+'px';}
  function P(u,v){return [OX+u*D.w*S,OY+v*D.h*S];}
  if(img.complete)layout();else img.addEventListener('load',layout);addEventListener('resize',layout);
  /* each theme has its own photo, so the tower geometry follows the theme */
  function pickD(){var nd=document.documentElement.getAttribute('data-theme')==='light'?DD:DN;if(nd!==D){D=nd;act=[];layout();}}
  pickD();new MutationObserver(pickD).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
  if(reduce){return;}
  new IntersectionObserver(function(e){vis=e[0].isIntersecting&&e[0].intersectionRatio>.2;hrun();},{threshold:[0,.2,.4]}).observe(hero);document.addEventListener('visibilitychange',function(){hrun();});
  function burst(ms){burstUntil=Math.max(burstUntil,performance.now()+ms);}
  setTimeout(function(){burst(5200);},2600);setInterval(function(){if(!document.hidden&&!hover)burst(5200);},21000);
  function on(){hover=1;tag.classList.add('show');burst(60000);}
  function off(){hover=0;tag.classList.remove('show');burstUntil=performance.now()+900;}
  hit.addEventListener('pointerenter',on);hit.addEventListener('pointerleave',off);hit.addEventListener('focus',on);hit.addEventListener('blur',off);
  hit.addEventListener('click',function(){burst(5200);tag.classList.add('show');clearTimeout(hit._t);hit._t=setTimeout(function(){if(!hover)tag.classList.remove('show');},3200);});
  /* gentle pointer parallax */
  var tx=0,ty=0,cxp=0,cyp=0;
  if(matchMedia('(pointer:fine)').matches)hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();tx=-((e.clientX-r.left)/r.width-.5)*12;ty=-((e.clientY-r.top)/r.height-.5)*8;});
  function dot(x,y,r,a){var g=cx.createRadialGradient(x,y,0,x,y,r*2.6);g.addColorStop(0,'rgba(255,255,255,'+a+')');g.addColorStop(.4,'rgba(255,248,226,'+(a*.45)+')');g.addColorStop(1,'rgba(255,236,190,0)');cx.fillStyle=g;cx.fillRect(x-r*2.6,y-r*2.6,r*5.2,r*5.2);}
  /* daylight: a slow, faint sun glint climbs the ironwork (no hover change); soft sun haze top right */
  function dayFx(now){var b0=P(D.box[0],D.box[1]),b1=P(D.box[2],D.box[3]),w=b1[0]-b0[0],h=b1[1]-b0[1];
    var sh=cx.createRadialGradient(W*.9,-H*.1,0,W*.9,-H*.1,H*.9);sh.addColorStop(0,'rgba(255,248,225,.22)');sh.addColorStop(1,'rgba(255,248,225,0)');cx.fillStyle=sh;cx.fillRect(0,0,W,H);
    var ph=((now-t0)/7000)%1,y=b1[1]-ph*h*1.15,al=.06*Math.sin(Math.min(1,ph*1.1)*Math.PI);
    var g=cx.createLinearGradient(0,y-h*.08,0,y+h*.08);g.addColorStop(0,'rgba(255,240,200,0)');g.addColorStop(.5,'rgba(255,240,200,'+al+')');g.addColorStop(1,'rgba(255,240,200,0)');
    cx.save();cx.beginPath();var tp=P(D.top[0],D.top[1]);cx.moveTo(tp[0],tp[1]-4);cx.lineTo(b1[0],b1[1]);cx.lineTo(b0[0],b1[1]);cx.closePath();cx.clip();cx.fillStyle=g;cx.fillRect(b0[0],y-h*.08,w,h*.16);cx.restore();}
  function hrun(){if(!hraf&&vis&&!document.hidden)hraf=requestAnimationFrame(frame);}
  function frame(now){hraf=0;if(!vis||document.hidden)return;hraf=requestAnimationFrame(frame);
    var ddx=tx-cxp,ddy=ty-cyp;if(ddx*ddx+ddy*ddy>.0004){cxp+=ddx*.06;cyp+=ddy*.06;inn.style.setProperty('--px',cxp.toFixed(2)+'px');inn.style.setProperty('--py',cyp.toFixed(2)+'px');}
    if(now-hl<(scrolling(now)?100:33))return;hl=now;
    hv+=((hover?1:0)-hv)*.07;
    cx.clearRect(0,0,W,H);cx.globalCompositeOperation='lighter';
    var day=document.documentElement.getAttribute('data-theme')==='light';
    if(day){dayFx(now);cx.globalCompositeOperation='source-over';return;}
    var top=P(D.top[0],D.top[1]),k=S,len=Math.max(W,900)*.75;
    /* warm bloom on the tower, stronger on hover */
    var b0=P((D.box[0]+D.box[2])/2,(D.box[1]*0.35+D.box[3]*0.65)),br=(D.box[3]-D.box[1])*D.h*S*.75;
    var bl=cx.createRadialGradient(b0[0],b0[1],0,b0[0],b0[1],br);bl.addColorStop(0,'rgba(255,190,90,'+(.05+.16*hv)+')');bl.addColorStop(1,'rgba(255,170,60,0)');cx.fillStyle=bl;cx.fillRect(b0[0]-br,b0[1]-br,br*2,br*2);
    /* beacon: two soft beams sweeping round */
    var ang=(now-t0)/16000*6.283;
    for(var j=0;j<2;j++){var a=ang+j*Math.PI,c=Math.cos(a),sn=Math.sin(a),ex=top[0]+c*len,ey=top[1]-len*.02,al=(.035+.06*Math.abs(c))*(1+hv*.6),sp=8+34*Math.abs(sn);
      for(var L=0;L<3;L++){var m=[1,.55,.25][L],aa=al*[.5,.7,1][L],g=cx.createLinearGradient(top[0],top[1],ex,ey);g.addColorStop(0,'rgba(255,240,210,'+aa+')');g.addColorStop(.35,'rgba(255,230,180,'+(aa*.45)+')');g.addColorStop(1,'rgba(255,225,170,0)');
        cx.fillStyle=g;cx.beginPath();cx.moveTo(top[0],top[1]-1);cx.lineTo(ex,ey-sp*m);cx.lineTo(ex,ey+sp*m);cx.lineTo(top[0],top[1]+1);cx.closePath();cx.fill();}
      if(sn>.9)dot(top[0],top[1],(3+5*(sn-.9)*10)*Math.max(.8,k),.35*(sn-.9)*10);}
    /* sparkle: tiny white flickers across the ironwork */
    var burstOn=now<burstUntil,n=burstOn?(hover?11:8):.35;
    for(var i=0;i<n;i++){if(n<1&&Math.random()>n)break;var p=D.pts[(Math.random()*D.pts.length)|0];act.push({u:p[0],v:p[1],t:now,d:burstOn?180+Math.random()*220:400+Math.random()*400,r:.55+Math.random()*.9});}
    for(var q=act.length-1;q>=0;q--){var o=act[q],u=(now-o.t)/o.d;if(u>=1){act.splice(q,1);continue;}var pp=P(o.u,o.v);dot(pp[0],pp[1],o.r*Math.max(.8,k*1.1),Math.sin(u*Math.PI)*.95);}
    cx.globalCompositeOperation='source-over';}
  hrun();
})();


/* ---------- v56: every "go to Let's begin" link lands with the whole journey + form UI in view ---------- */
function goEnq(smooth){var sec=$('#enquire');if(!sec)return;var nav=$('#nav'),nb=nav?Math.max(0,nav.getBoundingClientRect().bottom):80,Y=scrollY;
  var head=$('.enq-head',sec),jc=$('.journey',sec),fc=$('#formwrap'),vh=innerHeight,y;
  function T(e){return e.getBoundingClientRect().top+Y;}function B(e){return e.getBoundingClientRect().bottom+Y;}
  if(innerWidth<=980){y=T(fc)-nb-12;}                                    // stacked layout: open on the form
  else{var ht=T(head),ct=Math.min(T(jc),T(fc)),cb=Math.max(B(jc),B(fc)),avail=vh-nb-16;
    if(cb-ht<=avail)y=ht-nb-12;else if(cb-ct<=avail)y=cb-vh+16;else y=ct-nb-12;}
  try{scrollTo({top:Math.max(0,y),behavior:(smooth===false||reduce)?'auto':'smooth'});}catch(_){scrollTo(0,Math.max(0,y));}}
window.__goEnq=goEnq;
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href="#enquire"]');if(!a||e.defaultPrevented)return;if($('#ux')&&!$('#ux').hidden&&a.closest('#ux'))return;e.preventDefault();goEnq();try{history.replaceState(null,'','#enquire');}catch(_){}},true);
if(location.hash==='#enquire')setTimeout(function(){goEnq(false);},300);

/* ---------- Let's begin: night flight to Paris (canvas) ---------- */
(function(){var cv=$('#enqBg'),sec=$('#enquire');if(!cv||!sec)return;var cx=cv.getContext('2d'),W=0,H=0,dpr=Math.min(1.5,devicePixelRatio||1)*.7,vis=false,t0=performance.now(),last=0;
  function R(a){var s=a;return function(){s=(s*16807)%2147483647;return (s-1)/2147483646;};}
  var r=R(4242),stars=[],lights=[],clouds=[];
  for(var i=0;i<170;i++)stars.push([r(),r(),r()*1.1+.25,r()*6.28]);
  /* city clusters on the ground: u = longitude-ish (wraps), v = depth 0 (horizon) .. 1 (near) */
  for(var c=0;c<46;c++){var cu=r(),cvv=r(),n=8+(r()*34|0),sp=.012+r()*.03;for(var k=0;k<n;k++)lights.push([cu+(r()-.5)*sp*2,Math.min(1,Math.max(0,cvv+(r()-.5)*sp*3)),r(),r()*6.28,r()<.18]);}
  for(var k2=0;k2<520;k2++)lights.push([r(),r(),r()*.6,r()*6.28,r()<.12]);
  for(var q=0;q<7;q++)clouds.push([r(),.12+r()*.55,.18+r()*.25,.03+r()*.05]);
  function size(){var b=sec.getBoundingClientRect();W=b.width;H=b.height;cv.width=W*dpr;cv.height=H*dpr;cx.setTransform(dpr,0,0,dpr,0,0);}
  size();if('ResizeObserver' in window)new ResizeObserver(size).observe(sec);else addEventListener('resize',size);
  new IntersectionObserver(function(e){vis=e[0].isIntersecting;if(vis)requestAnimationFrame(f);}).observe(sec);
  var SC=document.createElement('canvas'),scx=SC.getContext('2d'),sKey='';
  function f(now){if(!vis||document.hidden){return;}requestAnimationFrame(f);if(now-last<(scrolling(now)?100:33))return;last=now;var t=(now-t0)/1000,day=document.documentElement.getAttribute('data-theme')==='light';
    cx.clearRect(0,0,W,H);
    var hy=Math.min(H*.32,(innerWidth<700?520:430)),ER=Math.max(W,900)*2.4,ecx=W*.5,ecy=hy+ER;                     // earth: huge circle, top at the horizon line
    var px=W*(innerWidth<700?.80:.945),py=ecy-Math.sqrt(ER*ER-(px-ecx)*(px-ecx)),key=W+'x'+H+day;
    if(key!==sKey){sKey=key;SC.width=cv.width;SC.height=cv.height;var real=cx;cx=scx;cx.setTransform(dpr,0,0,dpr,0,0);cx.clearRect(0,0,W,H);
    /* atmosphere glow along the curve */
    var g=cx.createRadialGradient(ecx,ecy,ER*.995,ecx,ecy,ER*1.06);
    if(day){g.addColorStop(0,'rgba(255,214,170,.85)');g.addColorStop(.35,'rgba(255,226,196,.45)');g.addColorStop(1,'rgba(255,240,225,0)');}
    else{g.addColorStop(0,'rgba(90,200,220,.55)');g.addColorStop(.25,'rgba(60,120,220,.35)');g.addColorStop(1,'rgba(40,80,200,0)');}
    cx.fillStyle=g;cx.beginPath();cx.arc(ecx,ecy,ER*1.06,0,6.2832);cx.fill();
    /* sun / Paris glow on the right horizon */
    var sg=cx.createRadialGradient(px,py,0,px,py,H*.55);
    if(day){sg.addColorStop(0,'rgba(255,236,200,.95)');sg.addColorStop(.12,'rgba(255,200,150,.55)');sg.addColorStop(1,'rgba(255,190,150,0)');}
    else{sg.addColorStop(0,'rgba(255,205,120,.55)');sg.addColorStop(.15,'rgba(255,170,90,.18)');sg.addColorStop(1,'rgba(255,150,80,0)');}
    cx.fillStyle=sg;cx.fillRect(0,0,W,H);
    /* the earth */
    var eg=cx.createLinearGradient(0,hy,0,H);
    if(day){eg.addColorStop(0,'#6F86C2');eg.addColorStop(.3,'#4C64A6');eg.addColorStop(1,'#3A4F8E');}else{eg.addColorStop(0,'#0C1A3E');eg.addColorStop(.3,'#07112B');eg.addColorStop(1,'#040A1C');}
    cx.fillStyle=eg;cx.beginPath();cx.arc(ecx,ecy,ER,0,6.2832);cx.fill();
    cx=real;}
    cx.save();cx.setTransform(1,0,0,1,0,0);cx.drawImage(SC,0,0);cx.restore();
    /* stars */
    {for(var i=0;i<stars.length;i++){var s=stars[i],y=s[1]*hy*.95;var a=.25+.45*Math.sin(t*1.3+s[3])*.5+.3;cx.fillStyle=(day?'rgba(255,255,255,'+(a*.7*(1-y/hy)).toFixed(3):'rgba(235,240,255,'+(a*(1-y/hy)).toFixed(3))+')';cx.fillRect(s[0]*W,y,s[2],s[2]);}}
    /* city lights drifting past (the plane flies east) */
    var drift=t*.006;
    for(var i2=0;i2<lights.length;i2++){var L=lights[i2],u=((L[0]-drift)%1+1)%1,v=L[1];
      var depth=Math.pow(v,1.6);                                              // perspective: points bunch up near the horizon
      var X=u*W*1.3-W*.15, Y=0;var dx=X-ecx;if(Math.abs(dx)>ER)continue;var surf=ecy-Math.sqrt(ER*ER-dx*dx);Y=surf+depth*(H-surf)+2;
      if(Y>H)continue;var sz=(.5+depth*1.9)*(.6+L[2]*.8),tw=.65+.35*Math.sin(t*2+L[3]);
      var al=(day?.9:.85)*tw*(.35+.65*depth+.25*(1-depth));
      cx.fillStyle=L[4]?(day?'rgba(255,255,255,':'rgba(200,225,255,')+al.toFixed(3)+')':(day?'rgba(255,206,120,':'rgba(255,196,110,')+al.toFixed(3)+')';if(sz<1.3)cx.fillRect(X-sz,Y-sz,sz*2,sz*2);else{cx.beginPath();cx.arc(X,Y,sz,0,6.2832);cx.fill();}
      if(sz>1.6){cx.fillStyle=(day?'rgba(255,200,120,':'rgba(255,180,90,')+(al*(day?.18:.12)).toFixed(3)+')';cx.beginPath();cx.arc(X,Y,sz*4,0,6.2832);cx.fill();}}
    /* Paris: a bright point on the horizon with a soft pulse */
    var pr=4+1.5*Math.sin(t*2.2);cx.fillStyle=day?'rgba(206,17,38,.9)':'rgba(255,214,120,1)';cx.beginPath();cx.arc(px,py+3,pr*.6,0,6.2832);cx.fill();
    cx.strokeStyle=day?'rgba(206,17,38,'+(.5-.4*((t*.6)%1)).toFixed(3)+')':'rgba(255,214,120,'+(.6-.5*((t*.6)%1)).toFixed(3)+')';cx.lineWidth=1.4;cx.beginPath();cx.arc(px,py+3,6+30*((t*.6)%1),0,6.2832);cx.stroke();
    /* flight path: from lower-left over the curve to Paris */
    var ax=-W*.02,ay=hy+(H-hy)*.55,bx=px,by=py+3,mx=W*.38,my=hy-120;
    cx.setLineDash([2,7]);cx.lineWidth=1.6;cx.strokeStyle=day?'rgba(36,87,197,.45)':'rgba(255,214,140,.45)';cx.beginPath();cx.moveTo(ax,ay);cx.quadraticCurveTo(mx,my,bx,by);cx.stroke();cx.setLineDash([]);
    var k=(t%11)/11,e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;                        // plane light travels the path every 11 s
    function Q(u){var a=1-u;return [a*a*ax+2*a*u*mx+u*u*bx,a*a*ay+2*a*u*my+u*u*by];}
    var tr=cx.createLinearGradient(Q(Math.max(0,e-.12))[0],Q(Math.max(0,e-.12))[1],Q(e)[0],Q(e)[1]);tr.addColorStop(0,'rgba(255,214,140,0)');tr.addColorStop(1,day?'rgba(36,87,197,.9)':'rgba(255,224,160,.95)');
    cx.strokeStyle=tr;cx.lineWidth=2.4;cx.beginPath();for(var s2=Math.max(0,e-.12);s2<=e;s2+=.01){var pp=Q(s2);if(s2===Math.max(0,e-.12))cx.moveTo(pp[0],pp[1]);else cx.lineTo(pp[0],pp[1]);}cx.stroke();
    var hp=Q(e);cx.fillStyle=day?'#2457C5':'#FFF3D6';cx.beginPath();cx.arc(hp[0],hp[1],2.6,0,6.2832);cx.fill();
    var hg=cx.createRadialGradient(hp[0],hp[1],0,hp[0],hp[1],16);hg.addColorStop(0,day?'rgba(36,87,197,.35)':'rgba(255,230,170,.55)');hg.addColorStop(1,'rgba(255,230,170,0)');cx.fillStyle=hg;cx.fillRect(hp[0]-16,hp[1]-16,32,32);
    if(((t*1.6)%1)<.12){cx.fillStyle='rgba(255,60,60,.9)';cx.beginPath();cx.arc(hp[0]-3,hp[1]+1,1.3,0,6.2832);cx.fill();}
    /* daytime: puffy clouds below the plane, drifting past in perspective */
    /* thin high clouds sliding past, below the camera */
    for(var c2=0;c2<clouds.length;c2++){var C=clouds[c2],u2=((C[0]-t*C[3]*.25)%1.4+1.4)%1.4-.2,cyy=hy+(H-hy)*C[1],cw=W*C[2];
      var cg=cx.createRadialGradient(u2*W,cyy,0,u2*W,cyy,cw);cg.addColorStop(0,day?'rgba(255,255,255,.16)':'rgba(150,175,230,.07)');cg.addColorStop(1,'rgba(150,175,230,0)');
      cx.save();cx.translate(u2*W,cyy);cx.scale(1,.18);cx.translate(-u2*W,-cyy);cx.fillStyle=cg;cx.fillRect(u2*W-cw,cyy-cw,cw*2,cw*2);cx.restore();}
    /* soften behind the content so the form stays readable */
    var vg=cx.createLinearGradient(0,0,0,H);vg.addColorStop(0,day?'rgba(238,242,252,.0)':'rgba(4,10,30,.0)');vg.addColorStop(1,day?'rgba(40,60,120,.12)':'rgba(4,10,30,.35)');cx.fillStyle=vg;cx.fillRect(0,0,W,H);
  }
  if(reduce){vis=true;f(performance.now());vis=false;}
})();

/* ---------- theme switch ---------- */
(function(){var root=document.documentElement,btn=$('#themeBtn'),saved=null;
  try{saved=localStorage.getItem('tc-theme');}catch(e){}
  var sys=window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
  function apply(t){root.setAttribute('data-theme',t);btn.setAttribute('aria-pressed',String(t==='dark'));btn.setAttribute('aria-label',t==='dark'?'Switch to light mode':'Switch to dark mode');}
  apply(window.__THEME||'light'); /* every visit opens in light mode; the switch still works */
  btn.addEventListener('click',function(){var next=root.getAttribute('data-theme')==='dark'?'light':'dark';
    try{localStorage.setItem('tc-theme',next);}catch(e){}
    btn.classList.remove('pop');void btn.offsetWidth;btn.classList.add('pop');
    var r=btn.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;
    root.style.setProperty('--tx',x+'px');root.style.setProperty('--ty',y+'px');root.style.setProperty('--tr',Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y))+'px');
    if(document.startViewTransition&&!reduce){document.startViewTransition(function(){apply(next);});}
    else{if(!reduce){root.classList.add('theme-anim');setTimeout(function(){root.classList.remove('theme-anim');},700);}apply(next);}
  });
})();

/* ---------- rotating city ---------- */
var cities=['Paris','Lyon','Grenoble','Toulouse','Strasbourg','Montpellier','Lille'],ci=0,cityEl=$('#city');
if(!reduce)setInterval(function(){cityEl.classList.add('out');setTimeout(function(){ci=(ci+1)%cities.length;cityEl.textContent=cities[ci];cityEl.classList.remove('out');},450);},2800);

/* ---------- count up ---------- */
if('IntersectionObserver' in window&&!reduce){
  var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var el=e.target,to=+el.dataset.count,pre=el.dataset.prefix||'',suf=el.dataset.suffix||'',s=performance.now();
    (function step(n){var k=Math.min(1,(n-s)/1300);k=1-Math.pow(1-k,3);el.textContent=pre+Math.round(to*k).toLocaleString('en-IE')+suf;if(k<1)requestAnimationFrame(step);})(s);});},{threshold:.6});
  $$('[data-count]').forEach(function(el){var r=el.getBoundingClientRect();if(r.top>innerHeight)co.observe(el);});
}

/* ---------- how it works ---------- */
var HOW=[
 {t:'Free call',w:'Week 1',ic:'i-chat',h:'Start with a free profile review',p:'We look at your grades, budget, language scores and goals, and tell you plainly whether France fits. You leave with a shortlist of programme types and a timeline.',we:'Profile evaluation, course and city options, funding plan',you:'Share transcripts, test scores and your budget',time:'One 30–45 minute call'},
 {t:'Shortlist and apply',w:'Months 1–3',ic:'i-uni',h:'Build your Études en France file',p:'Students in India, the UAE and 73 other countries apply through Campus France\'s Études en France platform. We choose programmes, write your statement of purpose and complete the file with you.',we:'University shortlist, SOP and CV editing, file review',you:'Create your Études en France account and upload documents',time:'Usually October to March for a September start'},
 {t:'Campus France interview',w:'Month 3–4',ic:'i-lang',h:'Prepare for the Campus France interview',p:'A short academic interview checks your study plan and motivation. We run mock interviews until you can explain your choices with confidence.',we:'Mock interviews, feedback, document checks',you:'Attend the interview at your Campus France office',time:'About 20 minutes'},
 {t:'Student visa',w:'Months 4–6',ic:'i-pass',h:'Apply for your VLS-TS student visa',p:'With an offer letter, you apply for a long-stay student visa on France-Visas and give your biometrics at the visa centre. You also show proof of funds for your stay, which we help you prepare.',we:'France-Visas form, funds proof, appointment and file check',you:'Attend the visa centre appointment',time:'Apply as soon as you accept an offer'},
 {t:'Fly and settle',w:'August–September',ic:'i-plane',h:'Land, validate and settle in',p:'Within three months of arriving you validate your VLS-TS online. You also complete the CVEC student contribution and register for French health insurance.',we:'Housing, pre-departure briefing, bank and insurance help',you:'Validate your visa online and enrol at your institution',time:'Your first weeks in France'}
];
var hs2=$('#howSteps'),bp=$('#howPanel'),hi=-1,seen={};
hs2.innerHTML=HOW.map(function(s,i){return '<button type="button" class="bp-tab" role="tab" id="how-'+i+'" aria-controls="howPanel" aria-selected="false"><span class="n">0'+(i+1)+'</span>'+s.t+'</button>';}).join('');
var htabs=$$('.bp-tab',hs2);
function setHow(i,anim){if(i===hi)return;hi=i;seen[i]=1;var s=HOW[i],nx=HOW[i+1];
  htabs.forEach(function(b,k){b.setAttribute('aria-selected',String(k===i));b.tabIndex=k===i?0:-1;b.classList.toggle('seen',!!seen[k]&&k!==i);});
  bp.innerHTML='<div class="bp-main"><div class="bp-top"><span class="air"><svg width="16" height="16"><use href="#i-plane"/></svg>Tutee Connect · Boarding pass</span><span>Step 0'+(i+1)+' / 05</span></div>'+
   '<div class="bp-route"><div class="pt"><small>From</small><b>0'+(i+1)+'</b></div><span class="ln"><svg width="22" height="22"><use href="#i-plane"/></svg></span><div class="pt" style="text-align:right"><small>To</small><b>'+(nx?'0'+(i+2):'FR')+'</b></div></div>'+
   '<h3>'+s.h+'</h3><p>'+s.p+'</p>'+
   '<div class="bp-fields"><div><small>We handle</small><span>'+s.we+'</span></div><div><small>You do</small><span>'+s.you+'</span></div><div><small>Timing</small><span>'+s.time+'</span></div></div></div>'+
   '<div class="bp-stub"><small>Gate · '+s.w+'</small><span class="ic morph"><svg width="28" height="28"><use href="#'+s.ic+'"/></svg></span><span class="big">0'+(i+1)+'</span><span class="bp-code" aria-hidden="true"></span>'+(i===HOW.length-1?'<span class="stamp-ok" aria-hidden="true">Bienvenue</span>':'')+'</div>';
  if(anim&&!reduce){bp.classList.remove('enter');void bp.offsetWidth;bp.classList.add('enter');}
  $('#bpPrev').disabled=i===0;$('#bpNext').disabled=i===HOW.length-1;}
htabs.forEach(function(b,k){b.addEventListener('click',function(){setHow(k,true);});
  b.addEventListener('keydown',function(e){var n=e.key==='ArrowRight'?k+1:e.key==='ArrowLeft'?k-1:-1;if(n>=0&&n<HOW.length){e.preventDefault();setHow(n,true);htabs[n].focus();}});});
$('#bpPrev').addEventListener('click',function(){if(hi>0)setHow(hi-1,true);});$('#bpNext').addEventListener('click',function(){if(hi<HOW.length-1)setHow(hi+1,true);});
setHow(0,false);

/* ---------- university finder ---------- */
var CITYXY={"Paris": [236.7, 133.8], "Lyon": [315.1, 275.4], "Grenoble": [344.5, 301], "Marseille": [335.7, 388.4], "Strasbourg": [400.8, 142.6], "Montpellier": [285.5, 374.9], "Lille": [258, 52.4], "Toulouse": [204.5, 374.8], "Nice": [398, 366.7], "Bordeaux": [139.7, 316], "Reims": [287.3, 115.3]};
var UNIS=[
 {n:'PSL University',c:'Paris',a:'Paris',t:'uni',ty:'Public research university',r:'34',fo:'2019 (oldest school 1530)',st:'17,000',in:'20%',cp:'6 sites in Paris and Meudon',ac:'',f:['sci','econ','hum','eng'],k:['Mathematics and physics','Sciences and engineering','Economics and finance','Humanities and arts'],p:['International Bachelor of Science in AI','Master in Quantum Engineering','Master in Cognitive Science'],x:'Its community counts 28 Nobel Prizes. Member schools include ENS, Mines Paris and Paris Dauphine.',w:'https://psl.eu/en'},
 {n:'Institut Polytechnique de Paris',c:'Palaiseau',a:'Paris',t:'ge',ty:'Engineering grande école group',r:'=43',fo:'2019 (École Polytechnique 1794)',st:'11,200',in:'About 41%',cp:'Palaiseau, south of Paris',ac:'',f:['eng','sci','econ'],k:['Mathematics','Computer science and AI','Physics and engineering','Economics and statistics'],p:['Bachelor of Science (École Polytechnique)','MSc&T AI and Advanced Visual Computing','MSc Data Science & AI for Business (X-HEC)'],x:'Alumna Hong Wang (X 2010) received the 2026 Fields Medal.',w:'https://www.ip-paris.fr/en'},
 {n:'Sorbonne University',c:'Paris',a:'Paris',t:'uni',ty:'Public research university',r:'73',fo:'2018 (roots 1257)',st:'53,000+',in:'About 22%',cp:'Latin Quarter, Jussieu, Pitié-Salpêtrière and more',ac:'',f:['hum','sci','med'],k:['Arts and humanities','Sciences and engineering','Medicine and health','Mathematics'],p:['Paris Physics Master','Master of Computer Science – Quantum Information','Master in Computational Mechanics'],x:'Marie Curie was its first woman professor.',w:'https://www.sorbonne-universite.fr/en'},
 {n:'Université Paris-Saclay',c:'Orsay',a:'Paris',t:'uni',ty:'Public research university',r:'76',fo:'2019 (roots 1971)',st:'About 60,000',in:'24%',cp:'Saclay plateau, Sceaux, Versailles, Évry',ac:'',f:['sci','eng','med'],k:['Mathematics','Physics','Computer science','Life sciences and health'],p:['Master Artificial Intelligence','Master Data, Knowledge and Hybrid AI','Master Nuclear Engineering'],x:'13 Fields Medallists and 5 Nobel laureates have been affiliated with it.',w:'https://www.universite-paris-saclay.fr/en'},
 {n:'CentraleSupélec',c:'Gif-sur-Yvette',a:'Paris',t:'ge',ty:'Engineering grande école',r:'',fo:'2015 (Centrale 1829, Supélec 1894)',st:'About 5,350',in:'About 1,070 students',cp:'Paris-Saclay, Metz, Rennes',ac:'',f:['eng'],k:['General engineering','Electrical engineering and energy','Computer science and AI','Data science'],p:['Bachelor in Computer Science and AI (with BITS Pilani)','MSc in Artificial Intelligence','MSc in Data Sciences and Business Analytics (with ESSEC)'],x:'Its joint bachelor with BITS Pilani runs 2 years in India, then 2 years in Paris. Gustave Eiffel studied at Centrale.',w:'https://www.centralesupelec.fr/en'},
 {n:'Paris 1 Panthéon-Sorbonne',c:'Paris',a:'Paris',t:'uni',ty:'Public university',r:'=246',fo:'1971',st:'About 46,000',in:'About 6,000 students',cp:'Sorbonne, Panthéon, Tolbiac and more',ac:'',f:['law','econ','hum'],k:['Law','Economics and management','Philosophy and history','Political science'],p:[],x:'Alumni include several heads of state.',w:'https://www.pantheonsorbonne.fr/en'},
 {n:'Université Paris Cité',c:'Paris',a:'Paris',t:'uni',ty:'Public research university',r:'=303',fo:'2019 (medicine c. 1200)',st:'63,000',in:'About 23%',cp:'Latin Quarter, Grands Moulins',ac:'',f:['med','sci','hum'],k:['Medicine and health','Life sciences','Physics and earth sciences','Humanities'],p:['Master in Biomedical Engineering (BME-Paris)','Master in Fundamental Physics (ICFP)','Master in Comparative Law: Common Law'],x:'Nobel laureates include physicist George Smoot (2006).',w:'https://u-paris.fr/en/'},
 {n:'Sciences Po',c:'Paris',a:'Paris',t:'ge',ty:'Grande école for social sciences',r:'=354',fo:'1872',st:'About 14,000',in:'39%',cp:'Paris, Reims, Le Havre, Menton and 3 more',ac:'',f:['law','econ','hum'],k:['Political science','International affairs','Public policy','Economics and law'],p:['Undergraduate Euro-Asian Programme (Le Havre)','Undergraduate North America Programme (Reims)','PSIA master\'s in international affairs'],x:'Six of the eight presidents of France\'s Fifth Republic studied here.',w:'https://www.sciencespo.fr/en/'},
 {n:'HEC Paris',c:'Jouy-en-Josas',a:'Paris',t:'biz',ty:'Business school',r:'',fo:'1881',st:'About 4,300 degree students',in:'135 nationalities',cp:'Jouy-en-Josas, near Paris',ac:'AACSB, EQUIS, AMBA',f:['biz'],k:['Master in Management','Finance','Entrepreneurship','Strategy and AI'],p:['Master in International Finance','MSc Data Science & AI for Business (X-HEC)','Master in Strategic Management'],x:'Co-founded the Hi! PARIS AI research centre with IP Paris. More than 80,000 alumni.',w:'https://www.hec.edu/en'},
 {n:'ESSEC Business School',c:'Cergy',a:'Paris',t:'biz',ty:'Business school',r:'',fo:'1907',st:'About 8,500',in:'About 38%',cp:'Cergy, Paris La Défense, Singapore, Rabat',ac:'AACSB, EQUIS, AMBA',f:['biz'],k:['Management','Finance','Data, AI and analytics','Luxury and marketing'],p:['Master in Finance','Global MBA'],x:'About 79,000 alumni worldwide.',w:'https://www.essec.edu/en/'},
 {n:'ESCP Business School',c:'Paris',a:'Paris',t:'biz',ty:'Business school',r:'',fo:'1819',st:'11,500+',in:'140 nationalities',cp:'Paris, Berlin, London, Madrid, Turin, Warsaw, Dubai',ac:'AACSB, EQUIS',f:['biz'],k:['Finance','Management','Marketing and luxury','Digital business and AI'],p:['MSc in Finance','MSc in Business Analytics & AI','MSc in Luxury Management'],x:'Founded in 1819, it calls itself the world\'s first business school, and it has a Dubai campus.',w:'https://escp.eu/'},
 {n:'SKEMA Business School',c:'Paris, Lille, Sophia Antipolis',a:'Paris',t:'biz',ty:'Business school',r:'',fo:'2009 (roots 1892)',st:'11,000',in:'130 nationalities',cp:'Grand Paris, Lille, Sophia Antipolis, Dubai and more',ac:'AACSB, EQUIS',f:['biz'],k:['Supply chain','Finance','Digital and AI','Luxury'],p:['MSc Global Supply Chain Management & Procurement','MSc AI for Business Transformation','MSc Global Luxury Management'],x:'Its MSc programmes are fully taught in English, including at its Dubai campus.',w:'https://www.skema.edu/'},
 {n:'ENS de Lyon',c:'Lyon',a:'Lyon',t:'ge',ty:'Grande école for research',r:'=235',fo:'2010 (roots 1880)',st:'About 2,400',in:'About 200 students',cp:'Monod and Descartes campuses, Lyon',ac:'',f:['sci','hum'],k:['Mathematics','Physics and chemistry','Life sciences','Humanities'],p:[],x:'Fields Medallists Cédric Villani and Alessio Figalli are associated with it.',w:'https://www.ens-lyon.fr/en'},
 {n:'emlyon business school',c:'Lyon',a:'Lyon',t:'biz',ty:'Business school',r:'',fo:'1872',st:'About 9,900',in:'135 nationalities',cp:'Lyon, Paris, Shanghai',ac:'AACSB, EQUIS, AMBA',f:['biz'],k:['Entrepreneurship','Management','Finance','Data science and AI strategy'],p:['Master in Finance','Master in Data Science & AI Strategy','MSc in Luxury Management & Marketing'],x:'Ranked 8th worldwide in the 2024 FT Masters in Management ranking.',w:'https://em-lyon.com/en'},
 {n:'INSA Lyon',c:'Villeurbanne (Lyon)',a:'Lyon',t:'ge',ty:'Engineering school',r:'',fo:'1957',st:'About 6,300',in:'About 30%',cp:'LyonTech–La Doua',ac:'',f:['eng'],k:['Mechanical engineering','Materials science','Computer science','Civil engineering'],p:['GLOBALINSA international section'],x:'One of the most sought-after engineering schools among French school-leavers.',w:'https://www.insa-lyon.fr/en/'},
 {n:'Université Grenoble Alpes',c:'Grenoble',a:'Grenoble',t:'uni',ty:'Public research university',r:'387',fo:'2016 (roots 1339)',st:'57,000',in:'About 9,700 students',cp:'Grenoble, Valence, Chambéry',ac:'',f:['sci','eng'],k:['Physics and materials','Micro and nanotechnology','Computer science and AI','Engineering'],p:[],x:'Hosts one of France\'s four interdisciplinary AI institutes.',w:'https://www.univ-grenoble-alpes.fr/english/'},
 {n:'Grenoble École de Management',c:'Grenoble',a:'Grenoble',t:'biz',ty:'Business school',r:'',fo:'1984',st:'7,200',in:'120 nationalities',cp:'Grenoble, Paris',ac:'AACSB, EQUIS, AMBA',f:['biz'],k:['Technology and innovation','Finance','Geopolitics','Sustainability'],p:['MSc Finance and Investment Banking','MSc Digital Marketing & Data Analytics','MSc Management in International Business'],x:'Hosts the annual Grenoble Geopolitics Festival.',w:'https://www.grenoble-em.com/en'},
 {n:'Aix-Marseille Université',c:'Marseille',a:'Marseille',t:'uni',ty:'Public university',r:'=443',fo:'2012 (roots 1409)',st:'84,000',in:'12,000 students',cp:'Marseille, Aix-en-Provence and 7 more',ac:'',f:['law','med','sci','hum'],k:['Law and humanities','Health and life sciences','Astrophysics and oceans','Engineering'],p:[],x:'The largest university in the French-speaking world by students and staff.',w:'https://www.univ-amu.fr/en'},
 {n:'KEDGE Business School',c:'Marseille, Bordeaux',a:'Marseille',t:'biz',ty:'Business school',r:'',fo:'2013 (roots 1872)',st:'16,000',in:'29%',cp:'Marseille, Bordeaux, Paris and 4 more',ac:'AACSB, EQUIS, AMBA',f:['biz'],k:['Supply chain and logistics','Wine and hospitality','Creative industries','Sustainability'],p:['MSc Data Analytics for Business','MSc Business Transformation for Sustainability'],x:'Formed from two of France\'s oldest business schools, founded in 1872 and 1874.',w:'https://kedge.edu/'},
 {n:'Université de Strasbourg',c:'Strasbourg',a:'Strasbourg',t:'uni',ty:'Public research university',r:'=456',fo:'2009 (roots 1538)',st:'56,000',in:'About 23%',cp:'Strasbourg, Colmar, Haguenau and more',ac:'',f:['sci','med','law'],k:['Chemistry','Medicine and life sciences','European studies','Physics and materials'],p:[],x:'Associated with 18 Nobel laureates.',w:'https://en.unistra.fr/'},
 {n:'Université de Montpellier',c:'Montpellier',a:'Montpellier',t:'uni',ty:'Public university',r:'473',fo:'2015 (roots 1220)',st:'About 41,000',in:'About 16%',cp:'Montpellier, Nîmes, Béziers and more',ac:'',f:['sci','med'],k:['Ecology and environment','Medicine','Agronomy and water','Chemistry'],p:['IDIL master\'s (13 courses taught fully in English)','Global Challenges for Sustainable Development (CHARM-EU)'],x:'Home to the world\'s oldest medical school still operating, and France\'s oldest botanical garden (1593).',w:'https://www.umontpellier.fr/en/'},
 {n:'EDHEC Business School',c:'Lille',a:'Lille',t:'biz',ty:'Business school',r:'',fo:'1906',st:'About 8,600',in:'100 nationalities',cp:'Lille, Nice, Paris, London, Singapore',ac:'AACSB, EQUIS, AMBA',f:['biz','econ'],k:['Finance','Financial engineering','Data analytics and AI','Entrepreneurship'],p:['MSc in Financial Engineering','MSc in Data Analytics & AI','MSc in Climate Change & Sustainable Finance'],x:'Known for its EDHEC-Risk finance research.',w:'https://www.edhec.edu/en'},
 {n:'NEOMA Business School',c:'Reims, Rouen',a:'Reims',t:'biz',ty:'Business school',r:'',fo:'2013 (roots 1871)',st:'About 9,000',in:'25%',cp:'Reims, Rouen, Paris',ac:'AACSB, EQUIS, AMBA',f:['biz'],k:['Finance','Marketing','Business analytics and AI','Wine and luxury'],p:['MSc International Finance','MSc AI for Business','MSc Business Analytics'],x:'All its MSc programmes are taught 100% in English.',w:'https://neoma-bs.com/'},
 {n:'ISAE-SUPAERO',c:'Toulouse',a:'Toulouse',t:'ge',ty:'Aerospace engineering school',r:'',fo:'2007 (SUPAERO 1909)',st:'1,940+',in:'37% of new students',cp:'Rangueil campus, Toulouse',ac:'',f:['eng'],k:['Aerospace engineering','Space systems','Aircraft design','Embedded systems and AI'],p:['Master\'s in Aerospace Engineering','Advanced Master in Space Systems Engineering','Advanced Master in Aerospace Project Management'],x:'The world\'s first dedicated aerospace engineering school. ESA astronaut Thomas Pesquet is an alumnus.',w:'https://www.isae-supaero.fr/en/'},
 {n:'Toulouse School of Economics',c:'Toulouse',a:'Toulouse',t:'uni',ty:'School of economics (Université Toulouse Capitole)',r:'',fo:'2006',st:'About 2,400',in:'90+ nationalities',cp:'Toulouse Capitole campus',ac:'',f:['econ'],k:['Economics research','Econometrics and data science','Markets and competition','Environmental economics'],p:['Bachelor of Science in Economics','Master in Data Science for Social Sciences','Master in Environmental Economics and Policy'],x:'Founding figure Jean Tirole won the 2014 Nobel Prize in Economics.',w:'https://www.tse-fr.eu/'},
 {n:'Université de Bordeaux',c:'Bordeaux',a:'Bordeaux',t:'uni',ty:'Public research university',r:'=485',fo:'2014 (roots 1441)',st:'50,000+',in:'About 8,700 students',cp:'Talence, Pessac, Bordeaux and 22 sites',ac:'',f:['sci','med'],k:['Wine and vine science','Neuroscience','Optics and lasers','Public health'],p:['Master Image Processing and Computer Vision','Master Neuroscience (Neurasmus)','Master Public Health Data Science'],x:'Its Institute of Vine and Wine Science teaches and researches wine in one of the world\'s great wine regions.',w:'https://www.u-bordeaux.com/'}
];
var FIELDS=[['all','All fields'],['eng','Engineering & tech'],['biz','Business'],['sci','Sciences'],['med','Medicine & health'],['hum','Humanities & arts'],['law','Law & politics'],['econ','Economics']];
var TYPES=[['all','All'],['uni','Universities'],['ge','Grandes écoles'],['biz','Business schools']];
var AREAS={Paris:'Paris region',Lyon:'Lyon',Grenoble:'Grenoble',Marseille:'Marseille',Strasbourg:'Strasbourg',Montpellier:'Montpellier',Lille:'Lille',Toulouse:'Toulouse',Bordeaux:'Bordeaux',Reims:'Reims'};
var LBL={Paris:[-1,0],Reims:[1,0],Strasbourg:[0,1],Lille:[1,0],Lyon:[1,0],Grenoble:[1,0],Toulouse:[-1,0],Montpellier:[0,1],Marseille:[1,0],Bordeaux:[-1,0]};
/* ---------- services: expanding stage panels ---------- */
(function(){var ps=$$('#phases .phase'),cur=0,timer=null,touched=false,vis=false;
  ps.forEach(function(p){var bar=document.createElement('span');bar.className='ph-prog';p.appendChild(bar);});
  function set(k){cur=k;ps.forEach(function(p,i){var on=i===k;p.classList.toggle('on',on);$('.ph-tab',p).setAttribute('aria-expanded',String(on));var b=$('.ph-prog',p);b.style.transition='none';b.style.transform='scaleX(0)';
    if(on&&!touched&&!reduce){requestAnimationFrame(function(){requestAnimationFrame(function(){b.style.transition='transform 7s linear';b.style.transform='scaleX(1)';});});}});}
  function loop(){clearInterval(timer);if(touched||reduce||!vis)return;timer=setInterval(function(){set((cur+1)%ps.length);},7000);}
  ps.forEach(function(p,i){$('.ph-tab',p).addEventListener('click',function(){touched=true;clearInterval(timer);set(i);});
    p.addEventListener('pointerenter',function(){if(matchMedia('(hover:hover)').matches&&!p.classList.contains('on')){touched=true;clearInterval(timer);set(i);}});});
  set(0);
  if('IntersectionObserver' in window)new IntersectionObserver(function(e){vis=e[0].isIntersecting;if(vis){set(cur);loop();}else clearInterval(timer);},{threshold:.4}).observe($('#phases'));
})();

/* ---------- university teaser + explorer page ---------- */
var F={field:'all',type:'all',qs:false,q:'',city:null},cmp=[];
var KIND={uni:'University',ge:'Grande école',biz:'Business school'};
function rk(r){return '#'+r.replace('=','')+(r.charAt(0)==='='?' (tied)':'');}
var TG=buildTower('p',{});var TURI='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="60 60 480 860"><path fill-rule="evenodd" fill="rgba(255,255,255,.28)" d="'+TG.outline+TG.arch+TG.mid+'"/><path fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="3" d="'+TG.lat+'"/><path fill="none" stroke="#fff" stroke-width="7" d="'+TG.outline+'"/></svg>');
var TWR='<img class="twr" src="'+TURI+'" alt="">';
function stamp(u){return u.r?'<span class="stamp"><span><small>QS 2027</small><b>#'+u.r.replace('=','')+'</b></span></span>':'<span class="stamp nr"><span><small>FRANCE</small><b>'+(u.t==='biz'?'B-SCHOOL':'ÉCOLE')+'</b></span></span>';}
function front(u){return '<div class="pc-art"><span class="greet">Bonjour de</span><span class="city">'+u.c.split(/[ ,(]/)[0]+'</span>'+TWR+'</div>'+stamp(u)+'<span class="postmark" aria-hidden="true">'+AREAS[u.a].toUpperCase().slice(0,12)+'<br>· 2027 ·</span><div class="pc-txt"><h3>'+u.n+'</h3><p>'+KIND[u.t]+' · Founded '+u.fo.split(' ')[0]+'</p><div class="tags">'+u.k.slice(0,2).map(function(t){return '<span>'+t+'</span>';}).join('')+'</div></div>';}
/* teaser fan */
(function(){var pick=[0,1,7,8,23],pos=[[-14,-90,10,-24,-200,-4],[-6,-40,0,-12,-100,8],[0,0,0,0,0,0],[7,40,6,12,100,10],[14,90,12,24,200,-2]],fan=$('#utFan');
  fan.innerHTML=pick.map(function(i,k){var u=UNIS[i],p=pos[k];return '<button type="button" class="pc-mini t-'+u.t+'" data-i="'+i+'" style="--r:'+p[0]+'deg;--x:'+(p[1]*.35)+'px;--y:'+p[2]+'px;--r2:'+p[3]+'deg;--x2:'+p[4]+'px;--y2:'+p[5]+'px;z-index:'+(k===2?6:5-Math.abs(k-2))+'" aria-label="Open '+u.n+' in the explorer"><span class="pc-f" style="position:absolute;inset:0">'+front(u)+'</span></button>';}).join('');
  /* v42: the explorer opens in its own browser tab (same page, #explore hash); falls back to the in-page view if tabs are blocked */
  function tab(e,i){var th=document.documentElement.getAttribute('data-theme')==='light'?'light':'dark',bg=th==='light'?'#EEF2FC':'#0B1B3F',h=SRC0.replace(/<head([^>]*)>/i,'<head$1><base href="'+String(document.baseURI).replace(/[#].*$/,'').replace(/"/g,'%22')+'"><link rel="icon" type="image/png" href="'+FAVI+'"><style>html.ux-solo,html.ux-solo body{background:'+bg+'!important}html.ux-solo body{visibility:hidden}html.ux-solo .ux{visibility:visible}<\/style>'),w=null;
    /* blob URL first: a real address, so the browser shows the favicon and title (about:blank tabs never get a favicon) */
    try{var u=URL.createObjectURL(new Blob([h],{type:'text/html'}));w=window.open(u+'#tcx='+(i!=null?i:-1)+'.'+th,'_blank');if(w){setTimeout(function(){try{URL.revokeObjectURL(u);}catch(_){}},60000);return;}}catch(_){w=null;}
    try{w=window.open('','_blank');if(w){try{w.name='tcx:'+(i!=null?i:-1)+':'+th;}catch(_){}w.document.open();w.document.write(h);w.document.close();return;}}catch(_){}
    openUX(e,i);}
  $$('.pc-mini',fan).forEach(function(b){b.addEventListener('click',function(e){tab(e,+b.dataset.i);});});
  $('#utOpen').addEventListener('click',function(e){tab(e,null);});
})();
/* explorer chrome */
var ux=$('#ux'),lastFocus=null;
function openUX(e,focusI){lastFocus=e.currentTarget;var r=e.currentTarget.getBoundingClientRect();ux.style.setProperty('--ox',(r.left+r.width/2)+'px');ux.style.setProperty('--oy',(r.top+r.height/2)+'px');
  ux.hidden=false;document.body.classList.add('ux-open');ux.scrollTop=0;requestAnimationFrame(function(){requestAnimationFrame(function(){ux.classList.add('show');});});
  render();setTimeout(function(){if(focusI!=null){var c=$('.pc[data-i="'+focusI+'"]',ux);if(c){c.scrollIntoView({block:'center'});c.classList.add('flip');c.focus();}}else $('#uxBack').focus();},reduce?0:650);
  try{history.replaceState(null,'','#explore');}catch(_){}}
function closeUX(){ux.classList.remove('show');setTimeout(function(){ux.hidden=true;document.body.classList.remove('ux-open');if(lastFocus)lastFocus.focus();},reduce?0:800);tray.classList.add('away');try{history.replaceState(null,'',location.pathname+location.search);}catch(_){}}
$('#uxBack').addEventListener('click',function(){var R=document.documentElement;if(R.classList.contains('ux-solo')){ux.classList.add('solo-x');R.classList.remove('ux-solo');void ux.offsetWidth;requestAnimationFrame(function(){ux.classList.remove('solo-x');closeUX();});}else closeUX();});
ux.addEventListener('keydown',function(e){if(e.key==='Escape'&&!$('.ov.show')){closeUX();}});
/* floating France glyphs in explorer background */
(function(){var s='',sd=11,G=['✦','✈','♥','✦','⚜','✦'];function r(){sd=(sd*16807)%2147483647;return sd/2147483647;}
  for(var i=0;i<18;i++)s+='<i style="left:'+(r()*100).toFixed(1)+'%;--t:'+(10+r()*12).toFixed(1)+'s;--dl:-'+(r()*20).toFixed(1)+'s;--x:'+((r()-.5)*160).toFixed(0)+'px;--s:'+(12+r()*22).toFixed(0)+'px">'+G[i%G.length]+'</i>';
  $('#uxFloat').innerHTML=s;})();
/* filters */
$('#fField').innerHTML=FIELDS.map(function(x){return '<button type="button" data-v="'+x[0]+'" aria-pressed="'+(x[0]==='all')+'">'+x[1]+'</button>';}).join('');
$('#fType').innerHTML=TYPES.map(function(x){return '<button type="button" data-v="'+x[0]+'" aria-pressed="'+(x[0]==='all')+'">'+x[1]+'</button>';}).join('');
[['#fField','field'],['#fType','type']].forEach(function(p){$$(p[0]+' button').forEach(function(b,_,all){b.addEventListener('click',function(){all.forEach(function(x){x.setAttribute('aria-pressed',String(x===b));});F[p[1]]=b.dataset.v;render();});});});
$('#fQS').addEventListener('click',function(e){F.qs=!F.qs;e.currentTarget.setAttribute('aria-pressed',String(F.qs));render();});
$('#uSearch').addEventListener('input',function(e){F.q=e.target.value.trim().toLowerCase();render();});
var dots=$('#cityDots');
dots.innerHTML=Object.keys(AREAS).map(function(a){var p=CITYXY[a],o=LBL[a]||[1,0],anc=o[0]<0?'end':o[0]>0?'start':'middle';
  return '<g class="cdot" data-a="'+a+'" tabindex="0" role="button" transform="translate('+p[0]+' '+p[1]+')"><circle class="p" r="10"/><circle class="c" r="12"/><text class="n" text-anchor="middle" dy="4"></text><text class="lb" x="'+(o[0]*20)+'" y="'+(o[1]?o[1]*30:5)+'" text-anchor="'+anc+'">'+AREAS[a]+'</text></g>';}).join('');
$$('.cdot',dots).forEach(function(g){var go=function(){F.city=F.city===g.dataset.a?null:g.dataset.a;render();};g.addEventListener('click',go);g.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();go();}});});
$('#cityClear').addEventListener('click',function(){F.city=null;render();});
function match(u,ign){if(F.field!=='all'&&u.f.indexOf(F.field)<0)return false;if(F.type!=='all'&&u.t!==F.type)return false;if(F.qs&&!u.r)return false;if(!ign&&F.city&&u.a!==F.city)return false;
  if(F.q&&(u.n+' '+u.c+' '+u.k.join(' ')).toLowerCase().indexOf(F.q)<0)return false;return true;}
function back(u,i){var on=cmp.indexOf(i)>-1;return '<button type="button" class="bk" data-a="flip" aria-label="Turn postcard back over">↺</button><h4>'+u.n+'</h4><dl class="pc-lines"><div><dt>QS 2027</dt><dd>'+(u.r?rk(u.r):'Not ranked overall')+'</dd></div><div><dt>Students</dt><dd>'+u.st+'</dd></div><div><dt>International</dt><dd>'+u.in+'</dd></div><div><dt>Campuses</dt><dd>'+u.cp+'</dd></div>'+(u.ac?'<div><dt>Accredited</dt><dd>'+u.ac+'</dd></div>':'')+'</dl>'+
  '<span class="lbl">Taught in English</span>'+(u.p.length?'<ul>'+u.p.slice(0,3).map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul>':'<p style="font-size:13px;margin:0">Mostly French-taught. Ask us for current English options.</p>')+
  '<p class="fact ud-fact"><span>Did you know?</span>'+u.x+'</p><div class="pc-acts"><button type="button" class="cmp" data-a="cmp" aria-pressed="'+on+'">'+(on?'✓ Comparing':'+ Compare')+'</button><a class="ask" href="#enquire" data-a="ask">Ask us</a><a href="'+u.w+'" target="_blank" rel="noopener">Website ↗</a></div>';}
function render(){var list=UNIS.map(function(u,i){return i;}).filter(function(i){return match(UNIS[i]);});
  $$('.cdot',dots).forEach(function(g){var n=UNIS.filter(function(u){return u.a===g.dataset.a&&match(u,true);}).length;$('.n',g).textContent=n;$('.c',g).setAttribute('r',(9+Math.min(n,12)*1.1).toFixed(1));g.classList.toggle('dim',n===0);g.classList.toggle('on',F.city===g.dataset.a);g.setAttribute('aria-label',AREAS[g.dataset.a]+', '+n+' institutions');});
  $('#mapCity').textContent=F.city?AREAS[F.city]:'All of France';$('#cityClear').hidden=!F.city;
  $('#resCount').textContent=list.length+' institution'+(list.length===1?'':'s');
  $('#pcGrid').innerHTML=list.length?list.map(function(i,k){var u=UNIS[i];return '<article class="pc t-'+u.t+'" data-i="'+i+'" tabindex="0" style="--d:'+k+';--rr:'+((k%3)-1)*2+'deg" aria-label="'+u.n+'. Press Enter to turn over."><div class="pc-in"><div class="pc-f">'+front(u)+'</div><div class="pc-b">'+back(u,i)+'</div></div></article>';}).join(''):'<p class="no-res">No institutions match. Try another field or clear the city.</p>';}
$('#pcGrid').addEventListener('click',function(e){var c=e.target.closest('.pc');if(!c)return;var a=e.target.closest('[data-a]'),i=+c.dataset.i;
  if(a&&a.dataset.a==='cmp'){e.stopPropagation();toggleCmp(i);return;}
  if(a&&a.dataset.a==='ask'){e.preventDefault();var m=$('#f-msg');if(m&&!m.value)m.value='I\'m interested in '+UNIS[i].n+'.';closeUX();setTimeout(function(){goEnq();},reduce?0:850);return;}
  if(e.target.closest('a'))return;c.classList.toggle('flip');});
$('#pcGrid').addEventListener('keydown',function(e){var c=e.target.closest('.pc');if(c&&e.target===c&&(e.key==='Enter'||e.key===' ')){e.preventDefault();c.classList.toggle('flip');}});
/* compare */
var tray=document.createElement('div');tray.className='tray';tray.setAttribute('aria-live','polite');ux.appendChild(tray);
function toggleCmp(i){var k=cmp.indexOf(i);if(k>-1)cmp.splice(k,1);else{if(cmp.length>=3)cmp.shift();cmp.push(i);}try{localStorage.setItem('tc_fr_shortlist',JSON.stringify(cmp.map(function(x){return UNIS[x].n;})));}catch(_){}
  $$('.pc',ux).forEach(function(c){var on=cmp.indexOf(+c.dataset.i)>-1;$$('.cmp',c).forEach(function(b){b.setAttribute('aria-pressed',String(on));b.textContent=on?'✓ Comparing':'+ Compare';});});updTray();}
function updTray(){tray.classList.remove('away');tray.classList.toggle('show',cmp.length>0);
  tray.innerHTML='<div class="chipsx">'+cmp.map(function(i){return '<span>'+UNIS[i].n.replace(' Business School','').replace(' business school','')+'</span>';}).join('')+'</div><button type="button" class="clr">Clear</button><button type="button" class="go-c"'+(cmp.length<2?' disabled style="opacity:.6"':'')+'>Compare '+cmp.length+(cmp.length<2?' (pick 2+)':'')+'</button>';
  $('.clr',tray).addEventListener('click',function(){cmp.slice().forEach(function(i){toggleCmp(i);});});
  $('.go-c',tray).addEventListener('click',function(e){if(cmp.length<2)return;openCmp(e.target);});}
function overlay(html,cls,from){var ov=document.createElement('div');ov.className='ov '+(cls||'');ov.style.zIndex=190;ov.innerHTML=html;document.body.appendChild(ov);requestAnimationFrame(function(){ov.classList.add('show');});
  function close(){ov.classList.remove('show');document.removeEventListener('keydown',key,true);setTimeout(function(){ov.remove();},reduce?0:300);if(from)from.focus();}
  function key(e){if(e.key==='Escape'){e.stopPropagation();close();}}
  document.addEventListener('keydown',key,true);ov.addEventListener('click',function(e){if(e.target===ov)close();});$$('.dr-close',ov).forEach(function(b){b.addEventListener('click',close);});
  var fb=$('.dr-close',ov);if(fb)fb.focus();return {el:ov,close:close};}
function openCmp(from){var us=cmp.map(function(i){return UNIS[i];});
  var rows=[['QS 2027',function(u){return u.r?rk(u.r):'Not ranked overall';}],['Type',function(u){return u.ty;}],['City',function(u){return u.c;}],['Founded',function(u){return u.fo;}],['Students',function(u){return u.st;}],['International',function(u){return u.in;}],['Accreditations',function(u){return u.ac||'–';}],['Known for',function(u){return u.k.join(', ');}],['In English',function(u){return u.p.length?u.p.join('<br>'):'Ask us for current options';}]];
  var o=overlay('<div class="cmp-box" role="dialog" aria-modal="true" aria-labelledby="cmT"><button class="dr-close" type="button" aria-label="Close">×</button><h3 id="cmT">Side-by-side comparison</h3><div class="cmp-wrap"><table class="cmp-t"><thead><tr><th></th>'+us.map(function(u){return '<th scope="col">'+u.n+'</th>';}).join('')+'</tr></thead><tbody>'+rows.map(function(r){return '<tr><th scope="row">'+r[0]+'</th>'+us.map(function(u){return '<td>'+r[1](u)+'</td>';}).join('')+'</tr>';}).join('')+'</tbody></table></div><div class="dr-cta"><a class="btn btn-primary" href="#enquire" id="cmAsk">Help me choose <span class="arrow">→</span></a></div></div>','cmp-ov',from);
  $('#cmAsk').addEventListener('click',function(e){e.preventDefault();o.close();setTimeout(function(){goEnq();},reduce?0:850);var m=$('#f-msg');if(m&&!m.value)m.value='Help me choose between '+us.map(function(u){return u.n;}).join(', ')+'.';closeUX();});}
(function(){var m=/^#explore(?:=(\d+))?$/.exec(location.hash);if(!m&&typeof window.__EXPLORE==='number')m=[0,window.__EXPLORE>=0?String(window.__EXPLORE):null];if(m){document.title='University explorer · Tutee Connect France';var solo=document.documentElement.classList.contains('ux-solo');(solo?function(f){f();}:function(f){setTimeout(f,400);})(function(){var ct={getBoundingClientRect:function(){return {left:innerWidth/2,top:innerHeight/2,width:0,height:0};},focus:function(){try{scrollTo(0,0);}catch(_){}}};openUX({currentTarget:ct},m[1]!=null?+m[1]:null);});}})();

/* ---------- funding cards: tilt + glare ---------- */
$$('.fcard.fr').forEach(function(c){c.insertAdjacentHTML('afterbegin','<span class="stripe" aria-hidden="true"></span>');
  if(reduce)return;
  c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty('--ry',((x-.5)*10).toFixed(2)+'deg');c.style.setProperty('--rx',((.5-y)*8).toFixed(2)+'deg');c.style.setProperty('--gx',(x*100)+'%');c.style.setProperty('--gy',(y*100)+'%');});
  c.addEventListener('pointerleave',function(){c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg');});
  c.addEventListener('pointerdown',function(){c.classList.remove('pop');void c.offsetWidth;c.classList.add('pop');});});

/* ---------- pathway: living passport ---------- */
(function(){
  var ST=[
   {t:'Study',s:'Year 0',img:'sorb',h:'Study on a long-stay student visa',when:'Stage 1 · From arrival',p:'Validate your VLS-TS online within three months of arriving. You can work part-time from your first day in France.',f:['Online visa validation','964 work hours a year']},
   {t:'Graduate',s:'After your master\'s',img:'stras',h:'Graduate and look for work',when:'Stage 2 · After graduation',p:'Master\'s-level graduates can get a residence permit to job-hunt or start a business. It lasts 12 months and cannot be renewed. Indian graduates get 2 years.',f:['12 months standard','2 years for Indian graduates']},
   {t:'Work',s:'Once hired',img:'bord',h:'Switch to a work permit',when:'Stage 3 · Your first job',p:'Change status with a job related to your studies that meets the salary threshold. Higher-skilled roles open the multi-year Talent permits and the EU Blue Card.',f:['Talent – qualified employee','EU Blue Card']},
   {t:'Settle',s:'After 5 years',img:'paris',h:'Get a 10-year resident card',when:'Stage 4 · Long-term residence',p:'After five years of legal residence, you can apply for a 10-year resident card. You need B1 French and must pass the civic exam.',f:['B1 French','Civic exam']},
   {t:'Citizen',s:'2-year fast track',img:'night',h:'Become a French citizen',when:'Stage 5 · Citizenship',p:'If you earned a French higher-education diploma after at least two years of study in France, you can apply after just 2 years of residence. You need B2 French and must pass the civic exam (32 out of 40).',f:['2-year residence route','B2 French']}];window.__TCST=ST;
  var DEST=['Études','Diplôme','Travail','Résidence','Citoyen'],WHEN=['AN 0','+1–2 ANS','EMBAUCHE','+5 ANS','+2 ANS*'],TC=['#2457C5','#13693D','#CE1126','#B07A00','#7A2FD0'],STW=['ADMIS','DIPLÔMÉ','EMBAUCHÉ','RÉSIDENT','CITOYEN'],GL='abcdefghijklmnopqrstuvwxyz';
  var tabs=$('#sbRows'),book=$('#pbBook'),leaf=$('#pbLeaf'),cur=-1,pend=null,photo=$('#pbPhoto');
  /* one decoded <img> per stage, all created up front so a page turn never waits for an image */
  var cs=getComputedStyle(document.documentElement),IM=ST.map(function(s,i){var v=cs.getPropertyValue('--ph-'+s.img).trim(),m=v.match(/url\(["']?(.*?)["']?\)$/),im=new Image();im.alt='';im.decoding='sync';if(m)im.src=m[1].replace(/(\.webp)$/,'-960$1');photo.insertBefore(im,photo.firstChild);
    /* swap the full-size photo for a light copy sized to the page, so turns repaint fast */
    function shrink(){try{var W=Math.min(960,im.naturalWidth),H=Math.round(im.naturalHeight*W/im.naturalWidth),c=document.createElement('canvas');c.width=W;c.height=H;c.getContext('2d').drawImage(im,0,0,W,H);
      c.toBlob(function(b){if(!b)return;var u=URL.createObjectURL(b),t=new Image();t.onload=function(){(t.decode?t.decode():Promise.resolve()).then(function(){im.src=u;});};t.src=u;},'image/jpeg',.86);}catch(e){}}
    return im;});
  tabs.innerHTML=ST.map(function(s,i){return '<button type="button" class="sb-row" role="tab" data-i="'+i+'" aria-selected="false" style="--tc:'+TC[i]+'" aria-label="Stage '+(i+1)+': '+s.h+'"><i>0'+(i+1)+'</i>'+DEST[i]+'</button>';}).join('');
  var R=$$('.sb-row',tabs);
  function title(txt){var el=$('#sbFlap');el.setAttribute('aria-label',txt);if(reduce){el.textContent=txt;return;}var o=txt.split(''),n=o.length;
    el.innerHTML=o.map(function(c){return '<span class="ch'+(c===' '?'':' sc')+'" aria-hidden="true">'+(c===' '?' ':GL[(Math.random()*26)|0])+'</span>';}).join('');
    var C=$$('.ch',el),t=0,iv=setInterval(function(){t++;C.forEach(function(c,k){if(o[k]===' ')return;if(t>k*.22+2){c.textContent=o[k];c.classList.remove('sc');}else c.textContent=GL[(Math.random()*26)|0];});if(t>n*.22+3)clearInterval(iv);},28);}
  function mrz(i){var a='P<FRA'+('ETUDIANT<<'+DEST[i].toUpperCase().normalize('NFD').replace(/[̀-ͯ]/g,'')+'<<<<<<<<<<<<<<<<<<<<<<<<<<<<').slice(0,39),b=('TC'+(i+1)+'0'+(2026+[0,2,3,7,9][i])+'FRA'+'<'.repeat(i*3)+'0'.repeat(5-i)+'<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<').slice(0,44);return a+'\n'+b;}
  function fill(i){var s=ST[i];
    $('#pbNum').textContent='0'+(i+1);$('#pbDest').textContent=DEST[i];$('#pbWhen').textContent=WHEN[i];$('#pbStep').textContent='ÉTAPE 0'+(i+1)+' / 05';
    $('#pbSt').textContent=i===ST.length-1?'ARRIVÉE':'EMBARQUEMENT';
    var st=$('#pbStamp');st.style.setProperty('--sc',TC[i]);$('#pbStampT').textContent=STW[i];if(!reduce){st.classList.remove('thud');void st.offsetWidth;st.classList.add('thud');}
    $('#pbMrz').textContent=mrz(i);
    IM.forEach(function(im,k){im.classList.toggle('in',k===i);});
    $('#sbGate').textContent='PORTE 0'+(i+1);$('#sbWhen').textContent=s.when;title(s.h);$('#sbP').textContent=s.p;
    $('#sbFacts').innerHTML=s.f.map(function(x){return '<span>'+x+'</span>';}).join('');
    var pc=Math.round((i+1)/ST.length*100);$('#sbBar').style.width=pc+'%';$('#sbPct').textContent=pc+'%';}
  function stage(i){if(i===cur)return;var first=cur<0,dir=i>cur?1:-1;cur=i;
    R.forEach(function(r,k){r.setAttribute('aria-selected',String(k===i));r.classList.toggle('done',k<i);r.tabIndex=k===i?0:-1;});
    $('#pwPrev').disabled=i===0;$('#pwNext').disabled=i===ST.length-1;
    if(first||reduce||innerWidth<900){fill(i);return;}
    turn(dir,function(){fill(i);});}
  /* a real two-sided page: front = the page being lifted, back = the page it lands as */
  var pL=$('.pb-l',book),pR=$('.pb-r',book),cover=document.createElement('div'),endT=null;cover.className='pb-cover';book.appendChild(cover);
  function snap(el){var c=el.cloneNode(true);c.removeAttribute('id');c.removeAttribute('aria-live');$$('[id]',c).forEach(function(x){x.removeAttribute('id');});
    $$('#pbPhoto img:not(.in)',el).length;$$('img',c).forEach(function(im){if(!im.classList.contains('in'))im.remove();});var t=c.querySelector('.pb-title');if(t)t.textContent=$('#sbFlap').getAttribute('aria-label')||t.textContent;c.classList.add('pb-snap');c.setAttribute('aria-hidden','true');return c;}
  var secP=$('#pathway');function done(){clearTimeout(endT);secP.classList.remove('pb-turning');leaf.className='pb-leaf';leaf.innerHTML='';cover.className='pb-cover';cover.innerHTML='';}
  function turn(dir,swap){done();secP.classList.add('pb-turning');var oL=snap(pL),oR=snap(pR);swap();var nL=snap(pL),nR=snap(pR);
    var f=document.createElement('div'),bk=document.createElement('div');f.className='lf lf-f';bk.className='lf lf-b';
    if(dir>0){f.appendChild(oR);bk.appendChild(nL);cover.appendChild(oL);cover.classList.add('on','l');}
    else{f.appendChild(nR);bk.appendChild(oL);cover.appendChild(oR);cover.classList.add('on','r');}
    leaf.appendChild(f);leaf.appendChild(bk);void leaf.offsetWidth;leaf.classList.add(dir>0?'go':'back');
    /* the half that the leaf has not reached yet keeps the old page until the leaf covers it */
    setTimeout(function(){cover.className='pb-cover';cover.innerHTML='';},360);
    endT=setTimeout(done,700);}
  book.addEventListener('animationend',function(e){if(e.target===leaf)done();});
  R.forEach(function(r,i){r.addEventListener('click',function(){stage(i);});r.addEventListener('keydown',function(e){var d=e.key==='ArrowRight'||e.key==='ArrowDown'?1:e.key==='ArrowLeft'||e.key==='ArrowUp'?-1:0;if(d){e.preventDefault();var j=Math.max(0,Math.min(ST.length-1,i+d));stage(j);R[j].focus();}});});
  $('#pwPrev').addEventListener('click',function(){if(cur>0)stage(cur-1);});$('#pwNext').addEventListener('click',function(){if(cur<ST.length-1)stage(cur+1);});
  stage(0);
  /* flip by touching the book itself: click a page, drag or swipe, trackpad swipe, arrow keys */
  function go(d){var j=cur+d;if(j>=0&&j<ST.length)stage(j);}
  var sx=0,sy=0,dragging=false,moved=false,t0d=0;
  book.addEventListener('pointerdown',function(e){if(e.target.closest('button,a'))return;dragging=true;moved=false;sx=e.clientX;sy=e.clientY;t0d=performance.now();});
  addEventListener('pointerup',function(e){if(!dragging)return;dragging=false;var dx=e.clientX-sx,dy=e.clientY-sy;
    if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.2){go(dx<0?1:-1);return;}
    if(Math.abs(dx)<8&&Math.abs(dy)<8&&performance.now()-t0d<500&&!(e.target.closest&&e.target.closest('button,a'))){var r=book.getBoundingClientRect();
      if(innerWidth<900){go(1);}else go(e.clientX>r.left+r.width/2?1:-1);}});
  var wl=0,wt=0;book.addEventListener('wheel',function(e){if(Math.abs(e.deltaX)<Math.abs(e.deltaY))return;e.preventDefault();var n=performance.now();if(n-wt<700)return;wl+=e.deltaX;if(Math.abs(wl)>60){go(wl>0?1:-1);wl=0;wt=n;}},{passive:false});
  var inView=false;new IntersectionObserver(function(en){inView=en[0].intersectionRatio>.5;},{threshold:[0,.5,1]}).observe(book);
  addEventListener('keydown',function(e){if(!inView||/INPUT|TEXTAREA|SELECT/.test((document.activeElement||{}).tagName||''))return;if(e.key==='ArrowRight'){e.preventDefault();go(1);}else if(e.key==='ArrowLeft'){e.preventDefault();go(-1);}});
  /* show which way a click will turn */
  book.addEventListener('pointermove',function(e){var r=book.getBoundingClientRect(),right=e.clientX>r.left+r.width/2;book.classList.toggle('pb-hr',right&&cur<ST.length-1);book.classList.toggle('pb-hl',!right&&cur>0);});
  book.addEventListener('pointerleave',function(){book.classList.remove('pb-hr','pb-hl');});
  /* tilt + holographic foil follow the cursor */
  if(!reduce&&matchMedia('(pointer:fine)').matches){var raf=0,ex=0,ey=0;book.addEventListener('pointermove',function(e){ex=e.clientX;ey=e.clientY;if(raf)return;raf=requestAnimationFrame(function(){raf=0;var r=book.getBoundingClientRect(),dx=(ex-r.left)/r.width-.5,dy=(ey-r.top)/r.height-.5;
    book.style.setProperty('--ry',(dx*5).toFixed(2)+'deg');book.style.setProperty('--rx',(-dy*4).toFixed(2)+'deg');book.style.setProperty('--hx',(50+dx*100).toFixed(0)+'%');});});
    book.addEventListener('pointerleave',function(){book.style.setProperty('--rx','0deg');book.style.setProperty('--ry','0deg');});}
  var ck=$('#sbClock');function tick(){try{ck.textContent=new Date().toLocaleTimeString('fr-FR',{timeZone:'Europe/Paris',hour:'2-digit',minute:'2-digit'});}catch(e){}}if(ck){tick();setInterval(tick,20000);}
})();

/* ---------- family: CDG baggage carousel ---------- */
(function(){var sec=$('#family'),slots=$('#lcSlots');if(!sec||!slots)return;
  var S=[
   {dir:'Talent permit',note:'While you study, your family can visit you on a short-stay Schengen visa.',p:[
     ['yes','You','Student visa (VLS-TS), with up to 964 hours of work a year.'],
     ['no','Spouse','Can visit on a short-stay Schengen visa.'],
     ['no','Children','Can visit on a short-stay Schengen visa.']]},
   {dir:'Talent permit',note:'After your degree you can stay on to look for work, then move to a Talent permit once you are hired.',p:[
     ['yes','You','Job-search permit after your degree, then a qualifying job in your field.'],
     ['wait','Spouse','Still visits only. We prepare the family file in the meantime.'],
     ['wait','Children','Still visits only. We shortlist schools in your new city.']]},
   {dir:'Vie en France',note:'On a Talent permit, your spouse and children can live with you in France.',p:[
     ['yes','You','Multi-year Talent residence permit.'],
     ['yes','Spouse','Talent (family) permit, and allowed to work in France.'],
     ['yes','Children','Live with you and go to school in France.']]}];
  function bag(c,d,k){/* hard-shell suitcase; k = size variant */
    return '<svg viewBox="0 0 170 210" aria-hidden="true"><rect x="62" y="6" width="46" height="30" rx="8" fill="none" stroke="#2A2F45" stroke-width="7"/><rect x="58" y="30" width="54" height="10" rx="3" fill="#2A2F45"/>'+
    '<rect x="14" y="36" width="142" height="156" rx="20" fill="'+c+'"/><rect x="14" y="36" width="142" height="156" rx="20" fill="url(#lcSh)"/>'+
    [42,70,100,128].map(function(x){return '<rect x="'+x+'" y="46" width="6" height="136" rx="3" fill="'+d+'" opacity=".55"/>';}).join('')+
    '<rect x="14" y="104" width="142" height="8" fill="'+d+'" opacity=".6"/><circle cx="36" cy="198" r="9" fill="#1A1E30"/><circle cx="134" cy="198" r="9" fill="#1A1E30"/>'+
    '<g class="lc-stk"><circle cx="122" cy="72" r="15" fill="#fff"/><path d="M122 61l-3 12h6zM116 79h12" stroke="#14286E" stroke-width="2.4" fill="none"/><rect x="34" y="140" width="40" height="22" rx="4" fill="#fff"/><rect x="34" y="140" width="13" height="22" rx="2" fill="#2457C5"/><rect x="61" y="140" width="13" height="22" rx="2" fill="#CE1126"/>'+(k===2?'<path d="M100 150l5 10 11 1-8 7 2 11-10-6-10 6 2-11-8-7 11-1z" fill="#FFC21A"/>':'')+'</g></svg>';}
  var COL=[['#14286E','#0A1638'],['#8A1528','#5A0B18'],['#F7941D','#B8650A']],KIND=['ADULTE · AF','CONJOINT · AF','ENFANTS · AF'],CODE=['CDG','CDG','CDG'];
  var LBL={yes:'Arrivé · lives in France',wait:'Bientôt · coming soon',no:'Visite · visits only'},GH={wait:'FILE IN<br>PROGRESS',no:'VISITING<br>ONLY'};
  slots.innerHTML='<svg width="0" height="0" style="position:absolute"><defs><linearGradient id="lcSh" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity=".18"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".22"/></linearGradient></defs></svg>'+
    [0,1,2].map(function(i){return '<div class="lc-slot s'+i+' out"><div class="lc-ghost"></div><div class="lc-bag">'+bag(COL[i][0],COL[i][1],i)+'</div><div class="lc-tag"><div class="lc-tag-in"><span class="code">CDG</span><small>'+KIND[i]+' 22'+(5+i)+'</small><b></b><span class="st"></span><p></p></div></div></div>';}).join('');
  var SL=$$('.lc-slot',slots),tabs=$$('#lcTabs button'),belt=$('#lcBelt'),led=$('#lcLed'),stat=$('#lcStat'),note=$('#lcNote'),cur=-1,timers=[];
  function home(){var k=(typeof fromPick!=='undefined'&&fromPick&&fromPick.v)||'Delhi';return k.toUpperCase();}
  function set(k,first){if(k===cur)return;cur=k;var d=S[k];timers.forEach(clearTimeout);timers=[];
    tabs.forEach(function(t,i){t.setAttribute('aria-selected',String(i===k));t.tabIndex=i===k?0:-1;});
    led.textContent='AF 22'+(5+k)+' · '+home()+' → PARIS CDG';stat.textContent=['LIVRAISON · 1/3','EN ATTENTE · 1/3','LIVRÉ · 3/3'][k];stat.style.color=k===2?'#7FE3B0':k===1?'#FFC21A':'#FFB547';
    note.textContent=d.note;
    if(!reduce){belt.classList.add('run');timers.push(setTimeout(function(){belt.classList.remove('run');},1500));}
    SL.forEach(function(sl,i){var r=d.p[i],on=r[0]==='yes',was=sl.classList.contains('yes');
      $('b',sl).textContent=r[1];$('.st',sl).textContent=LBL[r[0]];$('p',sl).textContent=r[2];$('.lc-ghost',sl).innerHTML=GH[r[0]]||'';
      var base='lc-slot s'+i+' '+r[0];
      if(on){if(!was){sl.className=base+' out';void sl.offsetWidth;timers.push(setTimeout(function(){sl.className=base+' pop';},first||reduce?0:120+i*260));}else sl.className=base;}
      else{if(was&&!reduce){sl.className='lc-slot s'+i+' yes leave';timers.push(setTimeout(function(){sl.className=base+' out ghost pop';},900));}else sl.className=base+' out ghost'+(first?'':' pop');}});}
  tabs.forEach(function(t,i){t.addEventListener('click',function(){set(i);});t.addEventListener('keydown',function(e){var n=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(n){e.preventDefault();var j=(i+n+3)%3;set(j);tabs[j].focus();}});});
  /* start when the carousel first scrolls into view, so the bags arrive in front of the visitor */
  setTimeout(function(){set(0,true);SL[0].className='lc-slot s0 yes out';var fired=false;
    function go(){if(fired)return;fired=true;SL[0].className='lc-slot s0 yes pop';}
    if('IntersectionObserver' in window&&!reduce)new IntersectionObserver(function(e,o){if(e[0].isIntersecting){go();o.disconnect();}},{threshold:.35}).observe(belt);else go();
    new IntersectionObserver(function(e){sec.classList.toggle('lc-off',!e[0].isIntersecting);}).observe(sec);},0);
})();

/* ---------- stories: review wheel ---------- */
(function(){var R=[{"q": "My son got his student visa for higher studies at one of France&#x27;s reputed universities. Despite his complicated profile, the team made this happen.", "a": "R", "n": "Ramana S.", "r": "Parent of student"}, {"q": "Tutee Connect prepared me for the Campus France interview and got every document exactly right, and my visa was approved on the very first attempt!", "a": "P", "n": "Priya K.", "r": "Master's student, Paris"}, {"q": "They didn&#x27;t just help with the admission. The post-landing support for getting my accommodation near campus was a lifesaver.", "a": "V", "n": "Vishal M.", "r": "Undergrad, Lyon"}, {"q": "I had a previous visa refusal and was losing hope. My coordinator completely turned it around and guided me through the entire documentation process.", "a": "S", "n": "Sneha R.", "r": "Graduate student, Grenoble"}, {"q": "The non-collateral education loan assistance is 100% genuine. They connected me directly with their banking partners and got my financials sorted in record time.", "a": "R", "n": "Rahul V.", "r": "Engineering, Paris-Saclay"}, {"q": "Their career consultation on scholarships and the Talent permit pathway gave me the exact clarity I needed before flying out.", "a": "A", "n": "Anita D.", "r": "MBA candidate, Paris"}, {"q": "The counselling opened my eyes to institutions I hadn&#x27;t even considered. Now I&#x27;m loving my semester in France!", "a": "K", "n": "Karthik N.", "r": "Computer Science, Strasbourg"}, {"q": "From application essays to final visa prep, the entire journey felt so personalised. Highly recommended.", "a": "D", "n": "Divya P.", "r": "Data Science, Toulouse"}, {"q": "A scholarship felt impossible, but with their profile-building strategy I won a merit scholarship from my university.", "a": "S", "n": "Siddharth J.", "r": "PhD student, Sorbonne"}],n=R.length,cur=0,rot=0,ring=$('#wheelRing'),wh=$('#wheel'),q=$('#wQuote'),auto=null,touched=false;
  ring.innerHTML=R.map(function(r,i){return '<button type="button" class="w-item" role="option" data-i="'+i+'" aria-label="Review by '+r.n+'" aria-selected="false">'+r.a+'</button>';}).join('');
  var items=$$('.w-item',ring);$('#wheelOf').textContent='of '+n;
  function base(){return innerWidth<=860?90:0;}
  function draw(){var rad=wh.offsetWidth/2-40;items.forEach(function(it,i){var ang=(i*360/n)+rot+base();it.style.transform='rotate('+ang+'deg) translate('+rad+'px) rotate('+(-ang)+'deg)'+(i===cur?' scale(1.25)':'');});}
  function set(i,dir){var d=((i-cur)%n+n)%n;if(d>n/2)d-=n;cur=((i%n)+n)%n;rot-=d*360/n;draw();
    items.forEach(function(it,k){it.classList.toggle('on',k===cur);it.setAttribute('aria-selected',String(k===cur));});
    var r=R[cur];$('#wheelNum').textContent=cur+1;face(r,cur,dir===undefined?(d||1):dir);
    q.innerHTML='<div class="qm" aria-hidden="true">“</div><div class="stars" aria-label="5 out of 5">★★★★★</div><q>'+r.q+'</q><figcaption class="who"><span class="av morph">'+r.a+'</span><span><b>'+r.n+'</b><span>'+r.r+'</span></span></figcaption>';
    if(!reduce){q.classList.remove('enter');void q.offsetWidth;q.classList.add('enter');}}
  /* hub portrait: the reviewer's face irises in, the previous one sinks away */
  var FC=[['#2B4FB8','#0A1A55'],['#9B1B30','#4A0A18'],['#E8792B','#9B3A12'],['#C9962E','#6E4A0E'],['#0F8A8A','#08414A']],fbox=$('#whFace'),SIL='<svg class="wh-sil" viewBox="0 0 100 100"><defs><linearGradient id="whS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF6E4" stop-opacity=".95"/><stop offset="1" stop-color="#FFF6E4" stop-opacity=".55"/></linearGradient></defs><circle cx="50" cy="37" r="19" fill="url(#whS)"/><path d="M10 104c2-25 19-39 40-39s38 14 40 39z" fill="url(#whS)"/></svg>';
  function face(r,i,dir){if(!fbox)return;var c=FC[i%FC.length],el=document.createElement('div');el.className='wh-p';el.style.setProperty('--r',(dir>0?-18:18)+'deg');
    el.style.background='radial-gradient(120% 90% at 30% 20%,'+c[0]+','+c[1]+')';
    el.innerHTML=r.p?'<img src="'+r.p+'" alt="">':SIL;
    $$('.wh-p',fbox).forEach(function(o){o.classList.remove('in');o.classList.add('out');setTimeout(function(){o.remove();},900);});
    fbox.appendChild(el);if(reduce){el.classList.add('in');return;}void el.offsetWidth;requestAnimationFrame(function(){el.classList.add('in');});}
  function user(i){touched=true;clearInterval(auto);set(i);}
  items.forEach(function(it,i){it.addEventListener('click',function(){user(i);});});
  $('#vPrev').addEventListener('click',function(){user(cur-1);});$('#vNext').addEventListener('click',function(){user(cur+1);});
  var wt=0;wh.addEventListener('wheel',function(e){e.preventDefault();var now=Date.now();if(now-wt<260)return;wt=now;user(cur+(e.deltaY>0||e.deltaX>0?1:-1));},{passive:false});
  wh.addEventListener('keydown',function(e){if(e.key==='ArrowDown'||e.key==='ArrowRight'){e.preventDefault();user(cur+1);}else if(e.key==='ArrowUp'||e.key==='ArrowLeft'){e.preventDefault();user(cur-1);}});
  var sa=null;wh.addEventListener('pointerdown',function(e){if(e.target.closest('.w-item'))return;var r=wh.getBoundingClientRect();sa=Math.atan2(e.clientY-r.top-r.height/2,e.clientX-r.left-r.width/2);wh.setPointerCapture(e.pointerId);});
  wh.addEventListener('pointermove',function(e){if(sa===null)return;var r=wh.getBoundingClientRect(),a=Math.atan2(e.clientY-r.top-r.height/2,e.clientX-r.left-r.width/2),d=(a-sa)*180/Math.PI;if(d>180)d-=360;if(d<-180)d+=360;if(Math.abs(d)>360/n*.8){sa=a;user(cur+(d>0?-1:1));}});
  wh.addEventListener('pointerup',function(){sa=null;});wh.addEventListener('pointercancel',function(){sa=null;});
  window.addEventListener('resize',draw);
  set(0);
  if(!reduce&&'IntersectionObserver' in window)new IntersectionObserver(function(e){clearInterval(auto);if(e[0].isIntersecting&&!touched)auto=setInterval(function(){set(cur+1);},6000);}).observe(wh);
})();

/* ---------- FAQ ---------- */
var FAQ=[
 ['Applying','What do I need to apply to study in France?',['You need a valid passport, academic transcripts, proof of language ability (IELTS, TOEFL or PTE for English-taught programmes; DELF, DALF or TCF for French-taught ones), a statement of purpose, a CV and proof of funds. Some master\'s and MBA programmes also ask for GMAT or GRE scores or work experience.']],
 ['Applying','How does Campus France and Études en France work?',['Students in 75 countries, including India and the UAE, apply through the Campus France Études en France platform. You build one online file, apply to programmes and attend a Campus France interview.']],
 ['Applying','Do I need to speak French?',['Not to study on an English-taught programme, and the student visa has no French test. French makes daily life, internships and job hunting much easier, and later steps need it: B1 for the 10-year resident card and B2 for citizenship. We run French prep alongside your application.']],
 ['Applying','When should I start, and when are the intakes?',['Most programmes start in September, and some offer a January intake. Start 9 to 12 months ahead, because Études en France applications usually run from October to March.']],
 ['Visa','Do I need to show proof of funds for the visa?',['Yes. You must show enough funds for each month of your stay. A scholarship, a sponsor or an education loan can count towards this, and we help you prepare the documents.']],
 ['Visa','What happens after I land in France?',['Within three months you validate your VLS-TS visa online. You also complete the CVEC student contribution and register for French health insurance on the ameli student portal.']],
  ['Funding','Can I get scholarships or an education loan?',['Yes. The Eiffel Excellence scholarship pays a monthly allowance for master\'s and PhD students. For 2027, your French institution must nominate you by 6 January 2027, so start early. We also help with Charpak scholarships for Indian students, school scholarships, and collateral or non-collateral loans through our banking partners.']],
 ['Funding','Can I get housing aid (APL)?',['Since 1 July 2026, non-EU students can claim APL housing aid only if they hold a CROUS or regional grant, have a job, or are on an apprenticeship. Don\'t count on it in your plans, and we\'ll check whether you qualify once you arrive.']],
 ['Funding','Can I work while I study?',['Yes. Your student visa lets you work up to 964 hours a year, about 20 hours a week, and you are paid at least the French minimum wage. Internships that are part of your programme do not count towards this limit.']],
 ['After graduation','How long can I stay after I graduate?',['Graduates with a French master\'s-level degree can get a residence permit to look for work or start a business. It lasts 12 months and cannot be renewed. Indian graduates get 2 years.','To switch to a work permit, you need a job related to your studies that meets the minimum salary threshold. Higher-skilled jobs can lead to a multi-year Talent permit or the EU Blue Card.']],
 ['After graduation','Is there a visa to come back after I leave?',['Yes. Indian students with a master\'s degree who studied in France for at least one semester can get a 5-year short-stay Schengen visa for visits. It does not allow work.']],
 ['After graduation','Can I get permanent residence or citizenship?',['After five years of legal residence you can apply for a 10-year resident card, with B1 French and a civic exam. If you earned a French higher-education diploma after at least two years of study in France, you can apply for citizenship after just 2 years of residence, with B2 French and the civic exam.']],
 ['Life in France','Can my family come with me?',['Not while you are studying, and we\'d rather say so plainly. A student visa has no dependant category, so family visit on their own short-stay Schengen visa. Once you hold a Talent residence permit, your spouse and children can join you, and your spouse may work.']],
 ['Life in France','Do you help with accommodation?',['Yes. We help you find student housing near campus, including CROUS residences and private halls. We also help you get a rental guarantor, for example through the government-backed Visale scheme, and run a pre-departure briefing on arrival formalities.']]
];
var CATS=[['Applying','i-doc'],['Visa','i-pass'],['Funding','i-coin'],['After graduation','i-brief'],['Life in France','i-home']],fcat='Applying',asked={};
var tops=$('#faqCats'),sug=$('#faqList'),log=$('#chatLog'),quick=$('#chatQuick'),inp=$('#faqSearch'),busy=false;
tops.innerHTML=CATS.map(function(c,i){var n=FAQ.filter(function(f){return f[0]===c[0];}).length;return '<button type="button" class="fq-topic" role="tab" aria-selected="'+(i===0)+'" data-c="'+c[0]+'"><span class="ic"><svg width="18" height="18"><use href="#'+c[1]+'"/></svg></span>'+c[0]+'<span class="ct">'+n+'</span></button>';}).join('');
function drawSugg(){var list=FAQ.map(function(f,i){return [f,i];}).filter(function(p){return p[0][0]===fcat;});
  $('#fqLbl').textContent='Questions about '+fcat.toLowerCase();
  sug.innerHTML=list.map(function(p,k){return '<button type="button" class="fq-q'+(asked[p[1]]?' asked':'')+'" data-i="'+p[1]+'" style="--d:'+k+'">'+p[0][1]+'</button>';}).join('');
  $$('.fq-q',sug).forEach(function(b){b.addEventListener('click',function(){ask(+b.dataset.i);});});
  $$('.fq-topic',tops).forEach(function(t){t.setAttribute('aria-selected',String(t.dataset.c===fcat));});}
$$('.fq-topic',tops).forEach(function(t){t.addEventListener('click',function(){fcat=t.dataset.c;drawSugg();});});
function add(cls,html){var d=document.createElement('div');d.className='msg '+cls;d.innerHTML=html;log.appendChild(d);log.scrollTop=log.scrollHeight;return d;}
function botSay(html,cb){if(reduce){add('bot',html);cb&&cb();return;}var t=document.createElement('div');t.className='typing';t.innerHTML='<i></i><i></i><i></i>';log.appendChild(t);log.scrollTop=log.scrollHeight;
  setTimeout(function(){t.remove();add('bot',html);cb&&cb();},650);}
function ask(i){if(busy)return;busy=true;var f=FAQ[i];asked[i]=1;add('me',esc(f[1]));quick.hidden=true;inp.value='';
  botSay(f[2].map(function(p){return '<p>'+p+'</p>';}).join('')+'<span class="src">Topic: '+f[0]+'</span>',function(){busy=false;drawSugg();
    var more=FAQ.map(function(x,k){return [x,k];}).filter(function(p){return p[0][0]===f[0]&&!asked[p[1]];}).slice(0,3);
    if(more.length){quick.hidden=false;quick.innerHTML=more.map(function(p){return '<button type="button" data-i="'+p[1]+'">'+p[0][1]+'</button>';}).join('');$$('button',quick).forEach(function(b){b.addEventListener('click',function(){ask(+b.dataset.i);});});}});}
function greet(){log.innerHTML='';asked={};quick.hidden=true;add('bot','<p>Bonjour! I\'m here to help with studying in France.</p><p>Pick a question on the left, or type one below.</p>');drawSugg();}
function matches(s){s=s.toLowerCase();var w=s.split(/\s+/).filter(function(x){return x.length>2;});return FAQ.map(function(f,i){var t=(f[1]+' '+f[2].join(' ')).toLowerCase(),sc=0;w.forEach(function(x){if(t.indexOf(x)>-1)sc+=f[1].toLowerCase().indexOf(x)>-1?3:1;});return [sc,i];}).filter(function(p){return p[0]>0;}).sort(function(a,b){return b[0]-a[0];});}
inp.addEventListener('input',function(){var s=inp.value.trim();if(s.length<3){quick.hidden=true;return;}var m=matches(s).slice(0,4);quick.hidden=!m.length;quick.innerHTML=m.map(function(p){return '<button type="button" data-i="'+p[1]+'">'+FAQ[p[1]][1]+'</button>';}).join('');$$('button',quick).forEach(function(b){b.addEventListener('click',function(){ask(+b.dataset.i);});});});
$('#chatForm').addEventListener('submit',function(e){e.preventDefault();var s=inp.value.trim();if(!s||busy)return;
  if(window.TuteeAI){busy=true;add('me',esc(s));inp.value='';quick.hidden=true;var tp=document.createElement('div');tp.className='typing';tp.innerHTML='<i></i><i></i><i></i>';log.appendChild(tp);log.scrollTop=log.scrollHeight;var bb=null;
    window.TuteeAI.answer(s,function(h){if(!bb){tp.remove();bb=add('bot',h);}else bb.innerHTML=h;log.scrollTop=log.scrollHeight;}).then(function(r){if(!bb){tp.remove();bb=add('bot',r.html);}else bb.innerHTML=r.html;if(r.src==='ai')bb.insertAdjacentHTML('beforeend','<span class="ai-tag">Answered by Tutee AI</span>');log.scrollTop=log.scrollHeight;busy=false;},function(){if(tp.parentNode)tp.remove();busy=false;});return;}
  var m=matches(s);
  if(m.length){ask(m[0][1]);return;}
  busy=true;add('me',esc(s));inp.value='';quick.hidden=true;var fm=$('#f-msg');if(fm&&!fm.value)fm.value=s;
  botSay('<p>That\'s a great question for one of our advisors. I\'ve added it to the consultation form so they can answer it for your profile.</p><p><a href="#enquire">Go to the form →</a></p>',function(){busy=false;});});
$('#chClear').addEventListener('click',greet);
/* the mouse wheel over the chat scrolls the page, not the chat (new replies still scroll the chat into view) */
$$('#faq .chat-log,#faq .fq-sugg-box,#faq .fq-sugg').forEach(function(el){el.addEventListener('wheel',function(e){if(e.ctrlKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))return;e.preventDefault();e.stopPropagation();
  var dy=e.deltaY*(e.deltaMode===1?40:e.deltaMode===2?innerHeight:1);window.scrollTo({top:window.pageYOffset+dy,left:0,behavior:'instant'});},{passive:false});});
greet();
(function(){var bg=$('#faqBg'),s='',sd=9;function r(){sd=(sd*16807)%2147483647;return sd/2147483647;}var G=['?','?','✦','?','!','?','✦','?'];
  for(var i=0;i<16;i++){s+='<span class="fq-glyph" style="left:'+(r()*100).toFixed(1)+'%;font-size:'+(28+r()*70).toFixed(0)+'px;--t:'+(14+r()*14).toFixed(1)+'s;--dl:-'+(r()*24).toFixed(1)+'s;--r0:'+((r()-.5)*40).toFixed(0)+'deg;--r1:'+((r()-.5)*120).toFixed(0)+'deg;--o:'+(.06+r()*.12).toFixed(2)+'">'+G[i%G.length]+'</span>';}
  bg.insertAdjacentHTML('beforeend',s);})();


/* ---------- v11 backgrounds and effects ---------- */
(function(){
  /* explorer realistic tower */
  $('#uxTower').innerHTML=buildTower('x',{sp:1}).markup;
  /* pathway stars */
  var s='',sd=21;function r(){sd=(sd*16807)%2147483647;return sd/2147483647;}
  /* funding: interactive tricolour dot field */
  var cv=$('#fundBg'),sec=$('#afford'),ctx=cv.getContext('2d'),W=0,H=0,dpr=1,mx=-999,my=-999,tx=-999,ty=-999,vis=false,t0=performance.now(),last=0,raf=null;
  function size(){dpr=1;var nw=sec.offsetWidth,nh=sec.offsetHeight;if(nw===W&&nh===H&&cv.width)return;W=nw;H=nh;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);bdark=null;}
  function col(x){var p=x/W;return p<.36?[53,103,216]:p<.64?[200,205,225]:[224,40,63];}
  function frame(now){raf=null;if(!vis)return;var dark=document.documentElement.getAttribute('data-theme')==='dark';
    if(mx<-500){var t=(now-t0)/1000;tx=W*(.5+.38*Math.sin(t*.35));ty=H*(.45+.3*Math.sin(t*.5));}else{tx+=(mx-tx)*.18;ty+=(my-ty)*.18;}
    raf=requestAnimationFrame(frame);if(now-flast<(scrolling(now)?100:33))return;flast=now;
    var g=26,R=200;if(dark!==bdark||bW!==W||bH!==H)bake(dark,g);
    var x0=Math.max(0,tx-R-12),y0=Math.max(0,ty-R-12),x1=Math.min(W,tx+R+12),y1=Math.min(H,ty+R+12);
    ctx.clearRect(px0,py0,px1-px0,py1-py0);ctx.drawImage(base,px0*dpr,py0*dpr,(px1-px0)*dpr,(py1-py0)*dpr,px0,py0,px1-px0,py1-py0);
    px0=x0;py0=y0;px1=x1;py1=y1;if(x1<=x0||y1<=y0)return;
    ctx.clearRect(x0,y0,x1-x0,y1-y0);
    var gx0=Math.floor((x0-g/2)/g)*g+g/2,gy0=Math.floor((y0-g/2)/g)*g+g/2;if(gx0<g/2)gx0=g/2;if(gy0<g/2)gy0=g/2;
    for(var y=gy0;y<y1+g;y+=g)for(var x=gx0;x<x1+g;x+=g){if(y>=H||x>=W)continue;var dx=x-tx,dy=y-ty,d=Math.sqrt(dx*dx+dy*dy),k=Math.max(0,1-d/R),c=col(x);
      var a=(dark?.10:.14)+k*.75,rad=1.2+k*4.2,ox=k?dx/d*k*-6:0,oy=k?dy/d*k*-6:0;
      if(!dark&&x/W>.36&&x/W<.64)c=[120,130,170];
      ctx.fillStyle='rgba('+c[0]+','+c[1]+','+c[2]+','+a.toFixed(3)+')';ctx.beginPath();ctx.arc(x+ox,y+oy,rad,0,6.283);ctx.fill();}}
  var base=document.createElement('canvas'),bctx=base.getContext('2d'),bdark=null,bW=0,bH=0,flast=0,px0=0,py0=0,px1=0,py1=0;
  function bake(dark,g){base.width=cv.width;base.height=cv.height;bctx.setTransform(dpr,0,0,dpr,0,0);bctx.clearRect(0,0,W,H);
    for(var y=g/2;y<H;y+=g)for(var x=g/2;x<W;x+=g){var c=col(x);if(!dark&&x/W>.36&&x/W<.64)c=[120,130,170];bctx.fillStyle='rgba('+c[0]+','+c[1]+','+c[2]+','+(dark?.10:.14)+')';bctx.beginPath();bctx.arc(x,y,1.2,0,6.283);bctx.fill();}
    bdark=dark;bW=W;bH=H;ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,W,H);ctx.drawImage(base,0,0,W,H);px0=py0=px1=py1=0;}
  function run(){if(!raf&&vis&&!reduce)raf=requestAnimationFrame(frame);}
  sec.addEventListener('pointermove',function(e){var r2=sec.getBoundingClientRect();mx=e.clientX-r2.left;my=e.clientY-r2.top;});
  sec.addEventListener('pointerleave',function(){mx=-999;my=-999;t0=performance.now()-((Math.asin(Math.max(-1,Math.min(1,(tx/W-.5)/.38)))/.35)*1000||0);});
  window.addEventListener('resize',size);size();
  if(reduce){vis=true;mx=W/2;my=H/2;tx=mx;ty=my;frame(0);vis=false;}
  if('IntersectionObserver' in window)new IntersectionObserver(function(e){vis=e[0].isIntersecting;if(vis){size();run();}},{threshold:0}).observe(sec);
})();


/* ---------- v12: What we do confetti + stories constellation ---------- */
(function(){var s='',sd=31,C=['#2457C5','#FFFFFF','#E0283F','#FBCB5C'];function r(){sd=(sd*16807)%2147483647;return sd/2147483647;}
  for(var i=0;i<26;i++)s+='<i style="left:'+(r()*100).toFixed(1)+'%;background:'+C[i%4]+';--t:'+(10+r()*12).toFixed(1)+'s;--dl:-'+(r()*20).toFixed(1)+'s;--x:'+((r()-.5)*200).toFixed(0)+'px;--r:'+(360+r()*720).toFixed(0)+'deg;'+(C[i%4]==='#FFFFFF'?'box-shadow:0 0 0 1px rgba(20,28,58,.15);':'')+'"></i>';
  $('#svcConf').innerHTML=s;})();
(function(){var s='',sd=41;function r(){sd=(sd*16807)%2147483647;return sd/2147483647;}
  for(var k=0;k<12;k++)s+='<i style="left:'+(r()*100).toFixed(1)+'%;font-size:'+(40+r()*90).toFixed(0)+'px;--t:'+(16+r()*14).toFixed(1)+'s;--dl:-'+(r()*26).toFixed(1)+'s;--r0:'+((r()-.5)*30).toFixed(0)+'deg;--r1:'+((r()-.5)*90).toFixed(0)+'deg;--o:'+(.05+r()*.1).toFixed(2)+'">'+(k%3===2?'★':'“')+'</i>';
  $('#stQ').innerHTML=s;})();
/* ---------- v29: pathway floating documents ---------- */
(function(){var box=$('#sbDocs'),sec=$('#pathway');if(!box)return;
  var G='#FBCB5C',N='#14286E',R='#CE1126',C='#F5EEDC';
  function stamp(t,c){return '<g class="stp"><circle cx="0" cy="0" r="34" fill="none" stroke="'+c+'" stroke-width="3"/><circle cx="0" cy="0" r="27" fill="none" stroke="'+c+'" stroke-width="1.2"/><text x="0" y="4" text-anchor="middle" font-family="ui-monospace,Menlo,monospace" font-size="11" font-weight="700" fill="'+c+'" letter-spacing="1">'+t+'</text></g>';}
  var T={
   pass:function(){return '<svg viewBox="0 0 140 190"><rect width="140" height="190" rx="10" fill="#14286E"/><rect x="6" y="6" width="128" height="178" rx="7" fill="none" stroke="'+G+'" stroke-opacity=".5"/><text x="70" y="40" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="'+G+'" letter-spacing="2">RÉPUBLIQUE</text><text x="70" y="54" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="'+G+'" letter-spacing="2">FRANÇAISE</text><circle cx="70" cy="98" r="22" fill="none" stroke="'+G+'" stroke-width="1.5"/><path d="M58 104c4-14 20-14 24 0M64 92a6 6 0 1 0 12 0a6 6 0 1 0-12 0" fill="none" stroke="'+G+'" stroke-width="1.5"/><text x="70" y="150" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="'+G+'" letter-spacing="3">PASSEPORT</text><g transform="translate(108 160)">'+stamp('PARIS',R)+'</g></svg>';},
   visa:function(){return '<svg viewBox="0 0 200 128"><rect width="200" height="128" rx="8" fill="'+C+'"/><rect width="200" height="22" rx="8" fill="#2457C5"/><rect y="14" width="200" height="8" fill="#2457C5"/><text x="12" y="16" font-family="ui-monospace,Menlo,monospace" font-size="10" font-weight="700" fill="#fff" letter-spacing="2">VISA · LONG SÉJOUR</text><rect x="12" y="34" width="44" height="54" rx="4" fill="#C9C0A8"/><path d="M34 50a7 7 0 1 0 .1 0M22 84c2-12 22-12 24 0" fill="#9C9378"/>'+[40,52,64,76].map(function(y,i){return '<rect x="66" y="'+y+'" width="'+(110-i*14)+'" height="5" rx="2.5" fill="#B7AE95"/>';}).join('')+'<text x="12" y="112" font-family="ui-monospace,Menlo,monospace" font-size="9" fill="#7A7058">VLS-TS ÉTUDIANT</text><g transform="translate(160 88)">'+stamp('VALIDÉ','#13693D')+'</g></svg>';},
   card:function(){return '<svg viewBox="0 0 200 126"><rect width="200" height="126" rx="12" fill="#E8EEF9"/><path d="M0 12a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12v18H0z" fill="#14286E"/><rect x="0" y="22" width="66" height="4" fill="#2457C5"/><rect x="66" y="22" width="68" height="4" fill="#fff"/><rect x="134" y="22" width="66" height="4" fill="'+R+'"/><text x="12" y="19" font-family="ui-monospace,Menlo,monospace" font-size="9.5" font-weight="700" fill="#fff" letter-spacing="1.5">TITRE DE SÉJOUR</text><rect x="12" y="38" width="46" height="58" rx="4" fill="#C3CDE5"/><circle cx="35" cy="58" r="9" fill="#A2B0D2"/>'+[42,54,66,78].map(function(y,i){return '<rect x="68" y="'+y+'" width="'+(100-i*12)+'" height="5" rx="2.5" fill="#B4C0DD"/>';}).join('')+'<rect x="150" y="96" width="36" height="22" rx="3" fill="#D4AF37" opacity=".85"/><g transform="translate(156 60)">'+stamp('TALENT',N)+'</g></svg>';},
   dip:function(){return '<svg viewBox="0 0 200 140"><rect width="200" height="140" rx="4" fill="'+C+'"/><rect x="8" y="8" width="184" height="124" fill="none" stroke="#B89A52" stroke-width="2"/><rect x="13" y="13" width="174" height="114" fill="none" stroke="#B89A52" stroke-width=".8"/><text x="100" y="42" text-anchor="middle" font-family="Georgia,serif" font-size="17" font-style="italic" fill="#5A4416">Diplôme</text><text x="100" y="58" text-anchor="middle" font-family="Georgia,serif" font-size="8.5" fill="#7A6630" letter-spacing="2">MASTER · GRADE DE MASTER</text>'+[72,82,92].map(function(y,i){return '<rect x="'+(40+i*8)+'" y="'+y+'" width="'+(120-i*16)+'" height="3.5" rx="1.75" fill="#CBB98A"/>';}).join('')+'<circle cx="160" cy="112" r="13" fill="'+R+'"/><path d="M154 124l-3 12 9-5 9 5-3-12" fill="'+R+'"/></svg>';},
   res:function(){return '<svg viewBox="0 0 200 126"><rect width="200" height="126" rx="12" fill="#14286E"/><text x="14" y="26" font-family="ui-monospace,Menlo,monospace" font-size="10" font-weight="700" fill="'+G+'" letter-spacing="1.5">CARTE DE RÉSIDENT · 10 ANS</text><rect x="14" y="38" width="44" height="56" rx="4" fill="#24357E"/>'+[44,56,68].map(function(y,i){return '<rect x="68" y="'+y+'" width="'+(96-i*12)+'" height="5" rx="2.5" fill="#33468F"/>';}).join('')+'<rect x="14" y="104" width="172" height="8" rx="2" fill="#1C2C70"/><g transform="translate(160 76)">'+stamp('10 ANS',G)+'</g></svg>';},
   ticket:function(){return '<svg viewBox="0 0 200 80"><path d="M0 8a8 8 0 0 1 8-8h184a8 8 0 0 1 8 8v22a10 10 0 0 0 0 20v22a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V50a10 10 0 0 0 0-20z" fill="#F7941D"/><text x="14" y="26" font-family="ui-monospace,Menlo,monospace" font-size="10" font-weight="700" fill="#3A1704" letter-spacing="2">CARTE D\'EMBARQUEMENT</text><text x="14" y="58" font-family="Georgia,serif" font-size="22" font-weight="700" fill="#3A1704">DEL → CDG</text><g transform="translate(168 40) scale(.75)">'+stamp('AF 225',N)+'</g></svg>';}};
  var L=[['pass',6,12,120,-14,.95,0],['visa',22,62,190,8,.9,0],['dip',78,8,190,10,.9,0],['card',84,58,200,-8,.95,0],['res',40,80,180,6,.55,1.5],['ticket',58,4,180,-6,.6,1.2],['pass',92,30,90,18,.4,2.5],['visa',2,40,150,-20,.35,2.5],['dip',50,46,140,-12,.28,3],['card',30,-2,150,14,.35,2.5],['ticket',70,86,170,10,.5,1.5],['res',12,88,150,-10,.4,2]];
  box.innerHTML=L.map(function(l,i){var d=(14+i%5*3),mx=((i%3)-1)*30,my=-20-(i%4)*10,mr=(i%2?6:-6);
    return '<div class="sb-d" style="--x:'+l[1]+'%;--y:'+l[2]+'%;--w:'+l[3]+'px;--r:'+l[4]+'deg;--s:1;--o:'+l[5]+';--b:'+l[6]+'px;--d:'+d+'s;--dl:-'+(i*1.7).toFixed(1)+'s;--mx:'+mx+'px;--my:'+my+'px;--mr:'+mr+'deg">'+T[l[0]]()+'</div>';}).join('');
  var D=$$('.sb-d',box);
  /* stamps thud onto documents, matched to the selected stage */
  var MAP={0:['pass','visa','ticket'],1:['dip'],2:['card'],3:['res'],4:['pass','res']};
  function stampFor(i){D.forEach(function(d,k){var kind=L[k][0];var want=[].concat.apply([],Object.keys(MAP).filter(function(s){return +s<=i;}).map(function(s){return MAP[s];}));var on=want.indexOf(kind)>-1;
    if(on&&!d.classList.contains('on')&&!reduce){d.classList.add('hit');setTimeout(function(){d.classList.remove('hit');d.classList.add('on');},650+k*40);}else if(!on){d.classList.remove('on','hit');}});}
  var obs=new MutationObserver(function(){var r=$$('#sbRows .sb-row'),i=r.findIndex(function(x){return x.getAttribute('aria-selected')==='true';});if(i>-1)stampFor(i);});
  obs.observe($('#sbRows'),{attributes:true,subtree:true,attributeFilter:['aria-selected']});
  stampFor(0);
  var pend=false,mx=0,my=0;if(!reduce&&matchMedia('(pointer:fine)').matches){sec.addEventListener('pointermove',function(e){mx=e.clientX;my=e.clientY;if(pend)return;pend=true;requestAnimationFrame(function(){pend=false;var r=sec.getBoundingClientRect(),dx=(mx-r.left)/r.width-.5,dy=(my-r.top)/r.height-.5;box.style.transform='translate('+(dx*-30).toFixed(1)+'px,'+(dy*-20).toFixed(1)+'px)';});});sec.addEventListener('pointerleave',function(){box.style.transform='';});}
  new IntersectionObserver(function(e){sec.classList.toggle('sb-off',!e[0].isIntersecting);}).observe(sec);
})();

/* ---------- journey rail ---------- */
(function(){var S=[['home','Welcome'],['why','Why France'],['how','How it works'],['services','What we do'],['universities','Universities'],['afford','Funding'],['partners','Loan partners'],['pathway','Pathway'],['family','Family'],['stories','Stories'],['faq','FAQ'],['enquire','Consultation']];
  var dots=$('#jrDots'),fill=$('#jrFill'),plane=$('#jrPlane'),pct=$('#jrPct'),last=-1,lastY=0;
  dots.innerHTML=S.map(function(s){return '<li data-id="'+s[0]+'"><a href="#'+s[0]+'" aria-label="'+s[1]+'"><span>'+s[1]+'</span></a></li>';}).join('');
  var lis=$$('li',dots);
  function pos(){var H=document.documentElement.scrollHeight-innerHeight||1;lis.forEach(function(li){var el=document.getElementById(li.dataset.id);li.style.top=(Math.min(1,el.offsetTop/H)*100)+'%';li._t=el.offsetTop;});}
  function upd(){var H=document.documentElement.scrollHeight-innerHeight||1,p=Math.max(0,Math.min(1,scrollY/H)),mob=innerWidth<=860;
    if(mob){fill.style.width=(p*100)+'%';fill.style.height='';plane.style.left=(p*100)+'%';plane.style.top='';}else{fill.style.height=(p*100)+'%';fill.style.width='';plane.style.top=(p*100)+'%';plane.style.left='';}
    pct.textContent=Math.round(p*100)+'%';plane.classList.remove('idle');clearTimeout(plane._t);plane._t=setTimeout(function(){plane.classList.add('idle');},1400);
    var on=0;lis.forEach(function(li,k){if(scrollY+innerHeight*.4>=li._t)on=k;});
    lis.forEach(function(li,k){li.classList.toggle('on',k===on);li.classList.toggle('past',k<on);});
    if(on!==last){last=on;plane.classList.remove('fly');void plane.offsetWidth;plane.classList.add('fly');}
    var svg=$('svg',plane);if(mob)svg.style.transform='rotate('+(scrollY<lastY?-90:90)+'deg)';else svg.style.transform='rotate('+(scrollY<lastY?0:180)+'deg)';lastY=scrollY;}
  pos();upd();window.addEventListener('scroll',upd,{passive:true});window.addEventListener('resize',function(){pos();upd();});setTimeout(function(){pos();upd();},1500);
})();


/* ---------- flags (drawn, so they render on every OS) ---------- */
var FLAGS={
 'India':'<rect width="30" height="7" fill="#FF9933"/><rect y="7" width="30" height="6" fill="#fff"/><rect y="13" width="30" height="7" fill="#138808"/><circle cx="15" cy="10" r="2.4" fill="none" stroke="#000080" stroke-width=".9"/>',
 'UAE':'<rect width="30" height="20" fill="#fff"/><rect width="30" height="6.7" fill="#00732F"/><rect y="13.3" width="30" height="6.7" fill="#000"/><rect width="8" height="20" fill="#FF0000"/>',
 'Sri Lanka':'<rect width="30" height="20" fill="#FFBE29"/><rect x="1.5" y="1.5" width="4" height="17" fill="#00534E"/><rect x="5.5" y="1.5" width="4" height="17" fill="#EB7400"/><rect x="11" y="1.5" width="17.5" height="17" fill="#8D153A"/><circle cx="19.7" cy="10" r="3.4" fill="#FFBE29"/>',
 'Nepal':'<rect width="30" height="20" fill="transparent"/><path d="M6 1 L22 10 H11 L22 19 H6Z" fill="#DC143C" stroke="#003893" stroke-width="1.4" stroke-linejoin="round"/><circle cx="10" cy="8" r="1.6" fill="#fff"/><circle cx="10" cy="15" r="1.8" fill="#fff"/>',
 'Bangladesh':'<rect width="30" height="20" fill="#006A4E"/><circle cx="13.5" cy="10" r="5.5" fill="#F42A41"/>',
 'Qatar':'<rect width="30" height="20" fill="#8A1538"/><path d="M0 0H9L11.5 1.1 9 2.2 11.5 3.3 9 4.4 11.5 5.5 9 6.6 11.5 7.7 9 8.8 11.5 10 9 11.1 11.5 12.2 9 13.3 11.5 14.4 9 15.5 11.5 16.6 9 17.7 11.5 18.8 9 20H0Z" fill="#fff"/>',
 'Saudi Arabia':'<rect width="30" height="20" fill="#006C35"/><path d="M8 7.5h14M9 9.5h12" stroke="#fff" stroke-width="1.1" stroke-linecap="round"/><path d="M8 13.5h13l1.5-1" stroke="#fff" stroke-width="1" fill="none" stroke-linecap="round"/>',
 'Oman':'<rect width="30" height="20" fill="#DB161B"/><rect x="8" width="22" height="6.7" fill="#fff"/><rect x="8" y="13.3" width="22" height="6.7" fill="#008000"/><path d="M3 3l2 2M5 3L3 5" stroke="#fff" stroke-width=".9"/>',
 'Singapore':'<rect width="30" height="10" fill="#EF3340"/><rect y="10" width="30" height="10" fill="#fff"/><circle cx="7" cy="5" r="3.2" fill="#fff"/><circle cx="8.3" cy="5" r="3" fill="#EF3340"/><g fill="#fff"><circle cx="10" cy="3" r=".6"/><circle cx="12" cy="4.2" r=".6"/><circle cx="11.4" cy="6.5" r=".6"/><circle cx="8.8" cy="6.5" r=".6"/><circle cx="8.3" cy="4.2" r=".6"/></g>',
 'France':'<rect width="10" height="20" fill="#002654"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#CE1126"/>',
 'UK':'<rect width="30" height="20" fill="#012169"/><path d="M0 0L30 20M30 0L0 20" stroke="#fff" stroke-width="4"/><path d="M0 0L30 20M30 0L0 20" stroke="#C8102E" stroke-width="1.6"/><path d="M15 0V20M0 10H30" stroke="#fff" stroke-width="6"/><path d="M15 0V20M0 10H30" stroke="#C8102E" stroke-width="3.4"/>',
 'USA / Canada':'<rect width="30" height="20" fill="#fff"/><g fill="#B22234"><rect width="30" height="1.54"/><rect y="3.08" width="30" height="1.54"/><rect y="6.16" width="30" height="1.54"/><rect y="9.24" width="30" height="1.54"/><rect y="12.32" width="30" height="1.54"/><rect y="15.4" width="30" height="1.54"/><rect y="18.48" width="30" height="1.52"/></g><rect width="13" height="10.8" fill="#3C3B6E"/>'};
function flag(c){return '<svg class="flag-i" viewBox="0 0 30 20" aria-hidden="true">'+(FLAGS[c]||'<rect width="30" height="20" fill="#888"/>')+'</svg>';}
$$('.flg[data-f]').forEach(function(el){el.innerHTML=flag(el.dataset.f);});

/* ---------- custom picker (listbox with search) ---------- */
var pickN=0;
function Picker(host,o){var id='pk'+(++pickN),self=this;this.o=o;this.v=o.value;
  host.innerHTML='<button type="button" class="pk-btn" aria-haspopup="listbox" aria-expanded="false" aria-controls="'+id+'"'+(o.label?' aria-label="'+o.label+'"':'')+'></button><div class="pk-pop" id="'+id+'" hidden><div class="pk-search"><svg width="15" height="15"><use href="#i-search"/></svg><input type="text" placeholder="'+(o.ph||'Search')+'" aria-label="Search options"></div><div class="pk-list" role="listbox" tabindex="-1"></div></div>';
  var btn=$('.pk-btn',host),pop=$('.pk-pop',host),list=$('.pk-list',host),inp=$('input',host),act=-1,shown=[];
  function draw(q){q=(q||'').toLowerCase();shown=[];var html='',grp=null;
    o.items.forEach(function(it){if(q&&(it.search||it.label).toLowerCase().indexOf(q)<0)return;
      if(it.group&&it.group!==grp&&!q){grp=it.group;html+='<div class="pk-grp" role="presentation">'+it.group+'</div>';}
      var i=shown.length;shown.push(it);html+='<div class="pk-opt" role="option" id="'+id+'-'+i+'" data-i="'+i+'" aria-selected="'+(it.value===self.v)+'">'+flag(it.flag)+'<span class="pk-l">'+it.label+'</span><span class="pk-r">'+(it.right||'')+'</span><svg class="pk-ck" width="14" height="14"><use href="#i-check"/></svg></div>';});
    list.innerHTML=html||'<div class="pk-none">No matches</div>';act=-1;}
  function hi(i){var els=$$('.pk-opt',list);if(!els.length)return;act=Math.max(0,Math.min(els.length-1,i));els.forEach(function(e,k){e.classList.toggle('act',k===act);});list.setAttribute('aria-activedescendant',els[act].id);els[act].scrollIntoView({block:'nearest'});}
  function open(){draw('');inp.value='';pop.hidden=false;host.classList.add('open');btn.setAttribute('aria-expanded','true');var k=shown.findIndex(function(x){return x.value===self.v;});requestAnimationFrame(function(){pop.classList.add('show');if(matchMedia('(pointer:fine)').matches)inp.focus();else list.focus();hi(k<0?0:k);});document.addEventListener('pointerdown',outside,true);}
  function close(f){pop.classList.remove('show');host.classList.remove('open');btn.setAttribute('aria-expanded','false');setTimeout(function(){pop.hidden=true;},180);document.removeEventListener('pointerdown',outside,true);if(f)btn.focus();}
  function outside(e){if(!host.contains(e.target))close(false);}
  function choose(i){var it=shown[i];if(!it)return;self.set(it.value,true);close(true);}
  btn.addEventListener('click',function(){host.classList.contains('open')?close(true):open();});
  btn.addEventListener('keydown',function(e){if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();open();}});
  inp.addEventListener('input',function(){draw(inp.value);hi(0);});
  function keys(e){if(e.key==='ArrowDown'){e.preventDefault();hi(act+1);}else if(e.key==='ArrowUp'){e.preventDefault();hi(act-1);}else if(e.key==='Enter'){e.preventDefault();choose(act);}else if(e.key==='Escape'){e.preventDefault();e.stopPropagation();close(true);}else if(e.key==='Tab'){close(false);}}
  inp.addEventListener('keydown',keys);list.addEventListener('keydown',keys);
  list.addEventListener('pointermove',function(e){var el=e.target.closest('.pk-opt');if(el)hi(+el.dataset.i);});
  list.addEventListener('click',function(e){var el=e.target.closest('.pk-opt');if(el)choose(+el.dataset.i);});
  this.btn=btn;this.render();}
Picker.prototype.render=function(){var it=this.o.items.find(function(x){return x.value===this.v;},this)||this.o.items[0];this.btn.innerHTML=flag(it.flag)+'<span class="pk-v">'+(this.o.btnLabel?this.o.btnLabel(it):it.label)+'</span><svg class="pk-car" width="14" height="14" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';};
Picker.prototype.set=function(v,user){this.v=v;this.render();if(this.o.onChange)this.o.onChange(v,!!user);};

/* phone country code */
var CC=[['India','+91'],['UAE','+971'],['Sri Lanka','+94'],['Nepal','+977'],['Bangladesh','+880'],['Qatar','+974'],['Saudi Arabia','+966'],['Oman','+968'],['Singapore','+65'],['France','+33'],['UK','+44'],['USA / Canada','+1']];
var ccTouched=false;
var ccPick=new Picker($('#ccPick'),{label:'Country code',ph:'Search country or code',value:'+91',items:CC.map(function(c){return {value:c[1],label:c[0],right:c[1],flag:c[0],search:c[0]+' '+c[1]};}),btnLabel:function(it){return it.value;},
  onChange:function(v,user){$('#f-cc').value=v;if(user)ccTouched=true;}});

/* ---------- journey map ---------- */
var ORI={"New Delhi":{"xy":[676.6,410.6],"tz":"Asia/Kolkata","country":"India","cc":"+91","km":6587,"d":"M676.6,410.6L670.3,398.7L663.9,386.7L657.5,374.8L651.0,363.0L644.4,351.3L637.6,339.6L630.8,328.1L623.9,316.7L616.9,305.5L609.8,294.5L602.6,283.6L595.3,272.9L587.9,262.5L580.4,252.3L572.7,242.4L564.9,232.8L557.0,223.4L549.0,214.4L540.9,205.7L532.6,197.3L524.2,189.3L515.7,181.6L507.0,174.3L498.3,167.4L489.3,160.9L480.3,154.8L471.1,149.1L461.8,143.9L452.3,139.1L442.8,134.8L433.0,130.9L423.2,127.4L413.2,124.5L403.1,122.0L392.9,119.9L382.6,118.4L372.1,117.3L361.6,116.7L350.9,116.6L340.1,117.0L329.3,117.8L318.3,119.2L307.3,121.0L296.2,123.2L285.0,125.9L273.7,129.1L262.4,132.7L251.1,136.7L239.8,141.2L228.4,146.0L217.0,151.3L205.5,156.9L194.1,162.9L182.7,169.3L171.4,175.9L160.0,182.9L148.7,190.2L137.5,197.8L126.3,205.6L115.1,213.6"},"Mumbai":{"xy":[644.1,489],"tz":"Asia/Kolkata","country":"India","cc":"+91","km":7009,"d":"M644.1,489.0L638.3,476.7L632.4,464.4L626.4,452.2L620.4,440.1L614.4,428.0L608.2,415.9L602.0,404.0L595.8,392.3L589.4,380.6L583.0,369.1L576.5,357.8L569.9,346.6L563.2,335.7L556.5,325.0L549.6,314.5L542.7,304.3L535.6,294.3L528.5,284.6L521.2,275.2L513.9,266.1L506.4,257.3L498.8,248.8L491.1,240.6L483.3,232.8L475.4,225.4L467.3,218.3L459.1,211.6L450.8,205.2L442.3,199.3L433.8,193.7L425.0,188.6L416.2,183.8L407.2,179.4L398.0,175.5L388.7,172.0L379.3,168.8L369.7,166.1L360.0,163.9L350.1,162.0L340.1,160.6L330.0,159.5L319.7,158.9L309.2,158.7L298.7,159.0L288.0,159.6L277.1,160.6L266.2,162.1L255.1,163.9L243.9,166.1L232.6,168.7L221.2,171.7L209.7,175.0L198.1,178.7L186.4,182.8L174.6,187.2L162.8,191.9L151.0,196.9L139.0,202.2L127.1,207.8L115.1,213.6"},"Bengaluru":{"xy":[679.5,536.6],"tz":"Asia/Kolkata","country":"India","cc":"+91","km":7849,"d":"M679.5,536.6L673.3,523.7L667.2,510.7L660.9,497.8L654.7,484.9L648.3,472.1L641.9,459.4L635.5,446.7L629.0,434.2L622.4,421.8L615.7,409.6L609.0,397.5L602.1,385.7L595.2,374.0L588.3,362.5L581.2,351.2L574.0,340.2L566.7,329.4L559.3,318.9L551.8,308.7L544.2,298.8L536.5,289.1L528.7,279.8L520.7,270.8L512.6,262.2L504.4,253.8L496.0,245.9L487.5,238.3L478.8,231.0L470.0,224.2L461.0,217.7L451.9,211.6L442.6,205.9L433.2,200.6L423.6,195.7L413.8,191.2L403.8,187.1L393.7,183.4L383.3,180.2L372.8,177.3L362.2,174.9L351.3,172.9L340.2,171.4L329.0,170.2L317.6,169.5L306.0,169.2L294.2,169.4L282.3,169.9L270.2,170.9L258.0,172.3L245.6,174.1L233.0,176.3L220.3,179.0L207.5,182.0L194.6,185.4L181.5,189.2L168.4,193.4L155.2,197.9L141.9,202.8L128.5,208.1L115.1,213.6"},"Chennai":{"xy":[699.5,535.8],"tz":"Asia/Kolkata","country":"India","cc":"+91","km":8036,"d":"M699.5,535.8L693.2,522.6L686.9,509.5L680.5,496.5L674.1,483.4L667.6,470.5L661.0,457.6L654.4,444.8L647.7,432.1L640.9,419.6L634.0,407.2L627.1,395.0L620.1,383.0L613.0,371.1L605.8,359.5L598.5,348.1L591.1,336.9L583.6,326.0L575.9,315.3L568.2,305.0L560.3,294.9L552.3,285.1L544.2,275.7L536.0,266.5L527.6,257.8L519.1,249.3L510.4,241.2L501.6,233.5L492.6,226.1L483.4,219.2L474.1,212.6L464.6,206.4L455.0,200.6L445.1,195.3L435.1,190.3L424.9,185.8L414.5,181.7L404.0,178.0L393.2,174.7L382.3,171.9L371.1,169.6L359.8,167.6L348.3,166.1L336.6,165.1L324.7,164.5L312.6,164.3L300.4,164.6L288.0,165.4L275.4,166.6L262.6,168.2L249.7,170.2L236.7,172.7L223.6,175.7L210.3,179.0L196.9,182.8L183.4,187.0L169.9,191.6L156.2,196.5L142.6,201.9L128.9,207.6L115.1,213.6"},"Hyderabad":{"xy":[686.2,502.3],"tz":"Asia/Kolkata","country":"India","cc":"+91","km":7555,"d":"M686.2,502.3L680.0,489.6L673.8,476.9L667.5,464.2L661.1,451.6L654.7,439.0L648.2,426.5L641.7,414.1L635.1,401.9L628.3,389.8L621.5,377.8L614.6,366.0L607.7,354.4L600.6,343.0L593.4,331.8L586.1,320.8L578.8,310.1L571.3,299.6L563.7,289.5L555.9,279.6L548.1,270.0L540.1,260.7L532.0,251.8L523.8,243.2L515.4,234.9L506.9,227.0L498.2,219.4L489.4,212.3L480.5,205.5L471.4,199.1L462.1,193.2L452.7,187.6L443.1,182.4L433.3,177.7L423.4,173.4L413.3,169.5L403.1,166.1L392.7,163.1L382.1,160.5L371.3,158.4L360.4,156.7L349.3,155.5L338.1,154.7L326.7,154.4L315.1,154.6L303.4,155.1L291.5,156.1L279.5,157.6L267.4,159.5L255.2,161.8L242.8,164.6L230.3,167.8L217.8,171.4L205.1,175.4L192.4,179.7L179.6,184.5L166.7,189.7L153.9,195.1L141.0,201.0L128.0,207.1L115.1,213.6"},"Kolkata":{"xy":[760.2,460.9],"tz":"Asia/Kolkata","country":"India","cc":"+91","km":7856,"d":"M760.2,460.9L753.5,447.7L746.8,434.6L739.9,421.5L732.9,408.5L725.9,395.5L718.7,382.6L711.4,369.8L704.0,357.1L696.5,344.6L688.9,332.3L681.2,320.1L673.3,308.1L665.3,296.3L657.2,284.8L648.9,273.5L640.4,262.5L631.9,251.8L623.1,241.3L614.2,231.2L605.1,221.4L595.9,212.0L586.5,202.9L576.9,194.2L567.1,185.8L557.1,177.9L547.0,170.4L536.6,163.3L526.1,156.7L515.4,150.5L504.4,144.8L493.3,139.5L482.0,134.8L470.5,130.5L458.8,126.8L446.9,123.6L434.8,120.9L422.5,118.7L410.1,117.1L397.5,116.0L384.7,115.4L371.8,115.4L358.7,116.0L345.5,117.1L332.2,118.8L318.8,121.0L305.3,123.8L291.7,127.1L278.1,130.9L264.4,135.3L250.6,140.2L236.9,145.6L223.1,151.5L209.4,157.8L195.7,164.6L182.1,171.8L168.5,179.4L155.0,187.5L141.6,195.9L128.3,204.6L115.1,213.6"},"Kochi":{"xy":[669.5,559.9],"tz":"Asia/Kolkata","country":"India","cc":"+91","km":8003,"d":"M669.5,559.9L663.4,546.8L657.3,533.7L651.1,520.6L644.9,507.6L638.7,494.7L632.4,481.8L626.0,469.0L619.6,456.4L613.1,443.8L606.6,431.5L600.0,419.2L593.3,407.2L586.5,395.3L579.7,383.7L572.8,372.3L565.8,361.1L558.7,350.1L551.5,339.4L544.2,329.0L536.8,318.9L529.3,309.1L521.7,299.5L514.0,290.3L506.1,281.4L498.2,272.8L490.0,264.6L481.8,256.7L473.4,249.2L464.9,242.1L456.2,235.3L447.4,228.9L438.4,222.8L429.2,217.2L419.9,211.9L410.4,207.0L400.8,202.5L390.9,198.4L380.9,194.7L370.7,191.4L360.3,188.5L349.7,186.0L338.9,183.9L327.9,182.3L316.8,181.0L305.4,180.1L293.9,179.6L282.2,179.5L270.3,179.8L258.2,180.6L245.9,181.7L233.5,183.2L220.8,185.1L208.1,187.4L195.2,190.0L182.1,193.1L168.9,196.5L155.6,200.2L142.2,204.4L128.7,208.8L115.1,213.6"},"Ahmedabad":{"xy":[641.8,457.2],"tz":"Asia/Kolkata","country":"India","cc":"+91","km":6676,"d":"M641.8,457.2L635.9,445.3L630.0,433.3L624.0,421.4L618.0,409.5L611.8,397.7L605.6,386.0L599.4,374.4L593.0,362.9L586.6,351.6L580.1,340.4L573.5,329.4L566.8,318.6L560.0,308.0L553.1,297.7L546.2,287.6L539.1,277.7L531.9,268.1L524.7,258.8L517.3,249.8L509.8,241.1L502.2,232.7L494.5,224.6L486.7,216.9L478.7,209.6L470.7,202.6L462.5,196.0L454.2,189.8L445.7,184.0L437.2,178.5L428.5,173.5L419.6,168.9L410.7,164.7L401.6,160.9L392.4,157.6L383.0,154.7L373.6,152.2L363.9,150.1L354.2,148.5L344.3,147.3L334.3,146.5L324.2,146.2L314.0,146.3L303.6,146.8L293.2,147.7L282.6,149.1L271.9,150.9L261.1,153.0L250.3,155.6L239.3,158.6L228.3,161.9L217.1,165.6L206.0,169.7L194.7,174.1L183.4,178.8L172.1,183.9L160.7,189.3L149.4,195.0L138.0,200.9L126.5,207.2L115.1,213.6"},"Pune":{"xy":[651.4,493.4],"tz":"Asia/Kolkata","country":"India","cc":"+91","km":7125,"d":"M651.4,493.4L645.5,481.0L639.6,468.7L633.6,456.3L627.5,444.1L621.4,431.9L615.2,419.8L609.0,407.8L602.6,395.9L596.2,384.1L589.7,372.5L583.2,361.1L576.5,349.9L569.8,338.8L563.0,328.0L556.0,317.4L549.0,307.1L541.9,297.0L534.7,287.2L527.4,277.7L519.9,268.4L512.4,259.5L504.7,250.9L496.9,242.7L489.0,234.8L481.0,227.2L472.8,220.0L464.6,213.2L456.1,206.8L447.6,200.7L438.9,195.0L430.0,189.8L421.1,184.9L411.9,180.5L402.7,176.4L393.3,172.8L383.7,169.6L374.0,166.8L364.1,164.4L354.1,162.5L343.9,160.9L333.6,159.8L323.2,159.1L312.6,158.9L301.8,159.0L290.9,159.6L279.9,160.6L268.8,162.0L257.5,163.8L246.1,166.0L234.6,168.5L223.0,171.5L211.3,174.8L199.5,178.5L187.6,182.6L175.6,187.0L163.6,191.7L151.6,196.7L139.4,202.1L127.3,207.7L115.1,213.6"},"Dubai":{"xy":[512,439.3],"tz":"Asia/Dubai","country":"UAE","cc":"+971","km":5247,"d":"M512.0,439.3L507.3,429.3L502.6,419.2L497.8,409.2L493.0,399.3L488.2,389.4L483.2,379.6L478.3,369.9L473.3,360.3L468.2,350.8L463.1,341.4L457.9,332.2L452.7,323.2L447.4,314.4L442.0,305.7L436.6,297.2L431.1,289.0L425.6,281.0L420.0,273.2L414.3,265.7L408.6,258.4L402.8,251.4L396.9,244.7L391.0,238.2L385.0,232.1L378.9,226.2L372.7,220.7L366.5,215.4L360.2,210.5L353.8,205.9L347.3,201.7L340.7,197.7L334.1,194.1L327.4,190.8L320.6,187.8L313.7,185.2L306.7,182.9L299.7,180.9L292.6,179.3L285.3,177.9L278.0,176.9L270.6,176.2L263.2,175.9L255.6,175.8L248.0,176.0L240.2,176.5L232.4,177.3L224.5,178.4L216.5,179.7L208.5,181.4L200.3,183.2L192.1,185.3L183.8,187.7L175.5,190.3L167.1,193.0L158.6,196.0L150.0,199.2L141.4,202.6L132.7,206.1L123.9,209.8L115.1,213.6"},"Abu Dhabi":{"xy":[505.3,445.5],"tz":"Asia/Dubai","country":"UAE","cc":"+971","km":5241,"d":"M505.3,445.5L500.7,435.5L496.1,425.4L491.4,415.4L486.7,405.4L481.9,395.5L477.1,385.7L472.2,376.0L467.3,366.3L462.3,356.8L457.3,347.4L452.2,338.2L447.1,329.2L441.9,320.3L436.7,311.6L431.4,303.1L426.0,294.8L420.6,286.7L415.1,278.9L409.6,271.3L403.9,264.0L398.3,257.0L392.5,250.2L386.7,243.7L380.8,237.5L374.8,231.5L368.8,225.9L362.7,220.6L356.5,215.6L350.3,210.9L343.9,206.6L337.5,202.5L331.0,198.8L324.4,195.4L317.7,192.4L311.0,189.6L304.2,187.2L297.2,185.1L290.2,183.3L283.1,181.9L276.0,180.7L268.7,179.9L261.4,179.4L253.9,179.1L246.4,179.2L238.8,179.6L231.1,180.2L223.3,181.1L215.5,182.3L207.5,183.7L199.5,185.4L191.4,187.3L183.2,189.5L175.0,191.8L166.6,194.4L158.2,197.2L149.7,200.1L141.2,203.3L132.6,206.6L123.9,210.0L115.1,213.6"},"Colombo":{"xy":[696.5,582.7],"tz":"Asia/Colombo","country":"Sri Lanka","cc":"+94","km":8515,"d":"M696.5,582.7L690.1,569.1L683.7,555.6L677.2,542.2L670.7,528.7L664.2,515.4L657.6,502.1L651.0,488.9L644.4,475.8L637.6,462.9L630.8,450.1L624.0,437.4L617.1,424.9L610.1,412.7L603.0,400.6L595.8,388.7L588.6,377.1L581.3,365.7L573.8,354.6L566.3,343.7L558.6,333.2L550.9,322.9L543.0,312.9L535.0,303.2L526.9,293.9L518.6,284.9L510.2,276.2L501.7,267.8L493.0,259.8L484.2,252.2L475.1,245.0L466.0,238.1L456.6,231.6L447.1,225.4L437.4,219.7L427.5,214.3L417.4,209.4L407.1,204.8L396.6,200.6L385.9,196.9L375.0,193.5L363.9,190.6L352.6,188.0L341.1,185.9L329.3,184.2L317.3,182.9L305.2,182.1L292.8,181.6L280.1,181.6L267.3,182.0L254.3,182.8L241.1,184.0L227.7,185.7L214.1,187.8L200.4,190.2L186.5,193.1L172.4,196.5L158.3,200.2L144.0,204.3L129.6,208.8L115.1,213.6"},"Kathmandu":{"xy":[737.4,418.3],"tz":"Asia/Kathmandu","country":"Nepal","cc":"+977","km":7235,"d":"M737.4,418.3L730.8,405.6L724.0,393.0L717.2,380.4L710.2,367.9L703.1,355.4L696.0,343.0L688.7,330.8L681.3,318.7L673.7,306.8L666.1,295.0L658.3,283.4L650.4,272.0L642.4,260.9L634.2,250.0L625.9,239.4L617.4,229.0L608.8,219.0L600.0,209.2L591.1,199.8L582.0,190.8L572.7,182.1L563.3,173.7L553.7,165.8L544.0,158.3L534.1,151.2L524.0,144.6L513.7,138.3L503.3,132.6L492.7,127.3L481.9,122.5L471.0,118.2L459.9,114.4L448.7,111.1L437.3,108.3L425.7,106.1L414.0,104.3L402.2,103.1L390.2,102.5L378.1,102.4L365.9,102.8L353.5,103.8L341.1,105.3L328.6,107.3L316.0,109.9L303.4,113.0L290.7,116.6L278.0,120.7L265.2,125.3L252.5,130.4L239.7,136.0L227.0,142.1L214.3,148.5L201.6,155.4L189.0,162.7L176.4,170.4L164.0,178.4L151.6,186.8L139.3,195.4L127.2,204.4L115.1,213.6"},"Dhaka":{"xy":[775.6,450.8],"tz":"Asia/Dhaka","country":"Bangladesh","cc":"+880","km":7903,"d":"M775.6,450.8L768.8,437.5L761.9,424.3L754.9,411.1L747.8,397.9L740.6,384.8L733.3,371.8L725.9,358.9L718.4,346.2L710.7,333.5L702.9,321.1L695.0,308.8L686.9,296.7L678.7,284.9L670.4,273.3L661.9,261.9L653.2,250.8L644.3,240.0L635.3,229.5L626.2,219.3L616.8,209.4L607.3,199.9L597.5,190.8L587.6,182.0L577.5,173.7L567.2,165.8L556.7,158.3L546.0,151.2L535.1,144.6L524.0,138.5L512.7,132.9L501.2,127.7L489.4,123.1L477.5,118.9L465.4,115.4L453.1,112.3L440.6,109.8L427.9,107.9L415.0,106.5L402.0,105.7L388.8,105.4L375.5,105.8L362.1,106.7L348.5,108.2L334.8,110.3L321.1,112.9L307.2,116.2L293.3,119.9L279.4,124.3L265.4,129.2L251.5,134.6L237.5,140.5L223.6,146.9L209.7,153.8L195.9,161.2L182.1,169.0L168.5,177.2L155.0,185.8L141.5,194.7L128.3,204.0L115.1,213.6"},"Doha":{"xy":[484,438.6],"tz":"Asia/Qatar","country":"Qatar","cc":"+974","km":4973,"d":"M484.0,438.6L479.6,429.1L475.2,419.5L470.7,410.0L466.2,400.5L461.6,391.1L457.0,381.7L452.4,372.4L447.7,363.3L442.9,354.2L438.2,345.3L433.3,336.5L428.4,327.9L423.5,319.4L418.5,311.1L413.5,303.0L408.4,295.1L403.2,287.5L398.0,280.0L392.7,272.8L387.4,265.8L382.0,259.1L376.5,252.6L371.0,246.4L365.4,240.5L359.8,234.8L354.1,229.4L348.3,224.4L342.4,219.6L336.5,215.1L330.5,210.9L324.4,207.0L318.3,203.4L312.1,200.1L305.8,197.2L299.4,194.5L293.0,192.1L286.5,190.1L279.9,188.3L273.2,186.8L266.4,185.7L259.6,184.8L252.7,184.2L245.7,183.9L238.6,183.8L231.5,184.0L224.2,184.5L216.9,185.2L209.5,186.2L202.1,187.4L194.5,188.9L186.9,190.5L179.2,192.4L171.4,194.4L163.6,196.7L155.7,199.1L147.7,201.7L139.7,204.5L131.5,207.4L123.4,210.5L115.1,213.6"},"Riyadh":{"xy":[447.6,443.4],"tz":"Asia/Riyadh","country":"Saudi Arabia","cc":"+966","km":4677,"d":"M447.6,443.4L443.6,434.3L439.6,425.2L435.5,416.1L431.4,407.1L427.3,398.1L423.1,389.2L418.9,380.3L414.7,371.6L410.4,363.0L406.1,354.5L401.7,346.1L397.3,337.8L392.8,329.7L388.3,321.8L383.8,314.0L379.2,306.5L374.6,299.1L369.9,291.9L365.1,285.0L360.3,278.2L355.5,271.7L350.6,265.4L345.6,259.4L340.6,253.6L335.5,248.1L330.4,242.9L325.2,237.9L320.0,233.1L314.7,228.7L309.3,224.5L303.9,220.6L298.4,216.9L292.8,213.6L287.2,210.5L281.5,207.7L275.7,205.2L269.8,202.9L263.9,200.9L258.0,199.2L251.9,197.7L245.8,196.5L239.6,195.6L233.3,194.9L226.9,194.4L220.5,194.2L214.0,194.2L207.4,194.5L200.8,194.9L194.1,195.5L187.3,196.4L180.4,197.4L173.4,198.6L166.4,200.0L159.3,201.6L152.1,203.2L144.9,205.1L137.5,207.0L130.1,209.1L122.7,211.3L115.1,213.6"},"Muscat":{"xy":[535.5,452.6],"tz":"Asia/Muscat","country":"Oman","cc":"+968","km":5599,"d":"M535.5,452.6L530.6,441.9L525.7,431.2L520.7,420.6L515.7,410.0L510.6,399.4L505.5,389.0L500.3,378.6L495.1,368.4L489.8,358.3L484.4,348.3L479.0,338.5L473.5,328.8L468.0,319.4L462.4,310.1L456.7,301.1L451.0,292.3L445.2,283.8L439.3,275.5L433.4,267.4L427.4,259.7L421.3,252.2L415.1,245.0L408.9,238.1L402.5,231.6L396.1,225.3L389.6,219.4L383.1,213.8L376.4,208.5L369.6,203.6L362.8,199.0L355.9,194.8L348.9,191.0L341.7,187.4L334.5,184.3L327.2,181.5L319.9,179.0L312.4,176.9L304.8,175.2L297.1,173.7L289.3,172.7L281.5,172.0L273.5,171.6L265.4,171.5L257.3,171.8L249.0,172.4L240.7,173.3L232.2,174.5L223.7,176.0L215.1,177.8L206.4,179.9L197.6,182.2L188.7,184.8L179.8,187.7L170.8,190.8L161.6,194.1L152.5,197.6L143.2,201.3L133.9,205.3L124.6,209.4L115.1,213.6"},"Singapore":{"xy":[876.1,624.6],"tz":"Asia/Singapore","country":"Singapore","cc":"+65","km":10729,"d":"M876.1,624.6L868.3,609.2L860.5,593.7L852.6,578.3L844.7,562.9L836.8,547.6L828.8,532.4L820.7,517.3L812.6,502.2L804.5,487.3L796.2,472.6L787.9,458.0L779.5,443.6L771.0,429.3L762.4,415.3L753.7,401.4L744.8,387.8L735.8,374.4L726.7,361.3L717.4,348.5L707.9,335.9L698.3,323.6L688.4,311.6L678.4,300.0L668.2,288.6L657.7,277.6L647.1,266.9L636.1,256.7L625.0,246.7L613.5,237.2L601.8,228.1L589.8,219.3L577.5,211.0L564.9,203.2L552.0,195.7L538.7,188.8L525.1,182.3L511.2,176.4L496.9,171.0L482.3,166.1L467.3,161.7L451.9,157.9L436.2,154.7L420.2,152.2L403.8,150.2L387.1,148.9L370.1,148.3L352.8,148.4L335.2,149.1L317.4,150.6L299.4,152.8L281.2,155.7L262.8,159.3L244.3,163.7L225.8,168.8L207.2,174.6L188.6,181.1L170.1,188.3L151.6,196.1L133.3,204.6L115.1,213.6"}},DM={"paris":[455.9,117.9],"xy":{"New Delhi":[643,168.5],"Mumbai":[632.2,192.3],"Bengaluru":[644,207.6],"Chennai":[650.7,207.3],"Hyderabad":[646.2,196.5],"Kolkata":[670.9,183.6],"Kochi":[640.7,215.2],"Ahmedabad":[631.4,182.4],"Pune":[634.6,193.7],"Dubai":[588.2,177],"Abu Dhabi":[585.9,178.9],"Colombo":[649.7,222.7],"Kathmandu":[663.3,170.7],"Dhaka":[676,180.5],"Doha":[578.8,176.8],"Riyadh":[566.7,178.2],"Muscat":[596,181],"Singapore":[709.5,236.6]},"code":{"New Delhi":"DEL","Mumbai":"BOM","Bengaluru":"BLR","Chennai":"MAA","Hyderabad":"HYD","Kolkata":"CCU","Kochi":"COK","Ahmedabad":"AMD","Pune":"PNQ","Dubai":"DXB","Abu Dhabi":"AUH","Colombo":"CMB","Kathmandu":"KTM","Dhaka":"DAC","Doha":"DOH","Riyadh":"RUH","Muscat":"MCT","Singapore":"SIN"},"fr":{"Lyon":[462.1,125.6],"Toulouse":[453.6,131],"Lille":[457.6,113.4],"Marseille":[463.4,131.8],"Strasbourg":[469.4,118.6]}},PARIS=DM.paris;
var GROUPS=[['India',['New Delhi','Mumbai','Bengaluru','Chennai','Hyderabad','Kolkata','Kochi','Ahmedabad','Pune']],['Gulf',['Dubai','Abu Dhabi','Doha','Riyadh','Muscat']],['South Asia',['Colombo','Kathmandu','Dhaka']],['Southeast Asia',['Singapore']]];
$('#jParis').setAttribute('transform','translate('+PARIS[0]+' '+PARIS[1]+')');
var TZMAP={'Asia/Kolkata':'New Delhi','Asia/Calcutta':'New Delhi','Asia/Dubai':'Dubai','Asia/Colombo':'Colombo','Asia/Kathmandu':'Kathmandu','Asia/Katmandu':'Kathmandu','Asia/Dhaka':'Dhaka','Asia/Qatar':'Doha','Asia/Riyadh':'Riyadh','Asia/Muscat':'Muscat','Asia/Singapore':'Singapore'};
var tz='';try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone||'';}catch(e){}
var start=TZMAP[tz]||'New Delhi',detected=!!TZMAP[tz],curK=null;
function tzOff(zone){try{var d=new Date(),p=new Intl.DateTimeFormat('en-US',{timeZone:zone,hourCycle:'h23',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'}).formatToParts(d),o={};p.forEach(function(x){o[x.type]=x.value;});return (Date.UTC(+o.year,+o.month-1,+o.day,+o.hour,+o.minute)-Math.floor(d.getTime()/60000)*60000)/60000;}catch(e){return null;}}
var arc=$('#jArc'),glow=$('#jArcGlow'),plane=$('#jPlane'),anim=null;
var mapVis=false,flyFn=null;if('IntersectionObserver' in window)new IntersectionObserver(function(e){mapVis=e[0].isIntersecting;if(mapVis&&flyFn&&!anim)anim=requestAnimationFrame(flyFn);},{rootMargin:'80px'}).observe($('#jMap'));else mapVis=true;
document.addEventListener('visibilitychange',function(){if(!document.hidden&&mapVis&&flyFn&&!anim)anim=requestAnimationFrame(flyFn);});
var FEES={India:'You apply through <b>Campus France India</b> on the Études en France platform.',UAE:'The UAE is an Études en France country, so you apply through <b>Campus France UAE</b>.'};
function arcPath(a,b){var mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2,dx=b[0]-a[0],dy=b[1]-a[1],len=Math.sqrt(dx*dx+dy*dy),lift=Math.min(170,len*.42),nx=-dy/len,ny=dx/len;if(ny>0){nx=-nx;ny=-ny;}
  return 'M'+a[0]+','+a[1]+' Q'+(mx+nx*lift).toFixed(1)+','+(my+ny*lift).toFixed(1)+' '+b[0]+','+b[1];}
var items=[];GROUPS.forEach(function(g){g[1].forEach(function(k){items.push({value:k,label:k,right:DM.code[k],flag:ORI[k].country,group:g[0],search:k+' '+DM.code[k]+' '+ORI[k].country});});});
var fromPick=new Picker($('#jFromPick'),{label:'Starting city',ph:'Search city or airport',value:start,items:items,btnLabel:function(it){return '<b>'+it.label+'</b><em>'+it.right+'</em>';},onChange:function(v){setOrigin(v,false);}});
function setOrigin(k,first){if(k===curK&&!first)return;curK=k;var o=ORI[k],p=DM.xy[k];$('#f-origin').value=k;
  $('#jTitle').textContent=k+' to Paris';$('#jOriginLabel').textContent=DM.code[k]+' · YOU';
  var lx=p[0]>760?-16:16;$('#jOriginLabel').setAttribute('x',lx);$('#jOriginLabel').setAttribute('text-anchor',lx<0?'end':'start');
  $('#jOrigin').setAttribute('transform','translate('+p[0]+' '+p[1]+')');
  if(fromPick.v!==k){fromPick.v=k;fromPick.render();}
  var d=arcPath(p,PARIS);arc.setAttribute('d',d);glow.setAttribute('d',d);
  $('#jKm').textContent=o.km.toLocaleString('en-IE')+' km';
  $('#jHrs').textContent='~'+Math.round(o.km/800+.6)+' h';
  var a=tzOff(o.tz),b=tzOff('Europe/Paris');
  if(a!==null&&b!==null){var diff=a-b,h=Math.floor(Math.abs(diff)/60),m=Math.abs(diff)%60;$('#jTz').textContent=diff===0?'Same time':(h+' h'+(m?' '+m+' min':''));$('#jTzLab').textContent=diff>0?'Paris is behind you':diff<0?'Paris is ahead of you':'as Paris';}
  $('#jFee').innerHTML=(first&&detected?'We guessed your location from your time zone. ':first?'We couldn\'t detect your location, so we\'re showing India. ':'')+(FEES[o.country]||'You apply through Campus France or directly to your institution, depending on your country.');
  if(!ccTouched)ccPick.set(o.cc,false);
  var L=arc.getTotalLength();
  /* perf: sample the route once; the per-frame lookups were the page's biggest script cost */
  var PN=160,PT=[];for(var pi=0;pi<=PN;pi++){var pq=arc.getPointAtLength(L*pi/PN);PT.push(pq.x,pq.y);}
  function at(u){u=Math.max(0,Math.min(1,u));var f=u*PN,i=Math.min(PN-1,f|0),r=f-i;return {x:PT[2*i]+(PT[2*i+2]-PT[2*i])*r,y:PT[2*i+1]+(PT[2*i+3]-PT[2*i+1])*r};}
  if(anim)cancelAnimationFrame(anim);anim=0;
  if(reduce){var e=arc.getPointAtLength(L*.6);plane.setAttribute('transform','translate('+e.x+' '+e.y+')');return;}
  arc.style.strokeDasharray=L;glow.style.strokeDasharray=L;var s=performance.now();
  flyFn=function fly(n){anim=0;if(!mapVis||document.hidden)return;var k2=((n-s)/4200)%1.3;var t=Math.min(1,k2);var ease=t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
    var draw=Math.min(1,(n-s)/900);arc.style.strokeDashoffset=L*(1-draw);glow.style.strokeDashoffset=L*(1-ease);
    var q1=at(ease),q2=at(ease+2/L);
    var ang=Math.atan2(q2.y-q1.y,q2.x-q1.x)*180/Math.PI;plane.setAttribute('transform','translate('+q1.x.toFixed(1)+' '+q1.y.toFixed(1)+') rotate('+ang.toFixed(1)+')');plane.style.opacity=k2>1?0:1;
    anim=requestAnimationFrame(fly);};anim=requestAnimationFrame(flyFn);
}
setOrigin(start,true);

/* ---------- footer word glow ---------- */
(function(){var fw=$('#fWord');if(!fw)return;
  fw.addEventListener('pointermove',function(e){var r=fw.getBoundingClientRect();fw.style.setProperty('--mx',(e.clientX-r.left)+'px');fw.style.setProperty('--my',(e.clientY-r.top)+'px');});
  fw.addEventListener('click',function(){if(!matchMedia('(hover:hover)').matches)fw.classList.toggle('on');});
})();
/* ---------- seamless section blending ---------- */
(function(){
  function apply(){var seam=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--seam'))||120,lead=innerWidth<700?24:40;
    var all=$$('main>section');
    all.forEach(function(e){e.classList.remove('seam');e.style.paddingTop='';e.style.paddingBottom='';e.style.scrollMarginTop='';});
    var pads=all.map(function(e){var c=getComputedStyle(e);return [parseFloat(c.paddingTop)||0,parseFloat(c.paddingBottom)||0];});
    all.forEach(function(e,i){var nx=all[i+1];
      /* keep content out of the overlap with the next section so nothing gets covered or becomes unclickable */
      /* the bottom only needs to clear the overlap; the next section adds a short lead-in on top of the fade */
      if(nx&&nx.id!=='home')e.style.paddingBottom=(seam+8)+'px';
      if(e.id!=='home'){e.classList.add('seam');e.style.paddingTop=(seam+Math.min(pads[i][0],lead))+'px';e.style.scrollMarginTop=(-seam)+'px';}});}
  apply();var t;addEventListener('resize',function(){clearTimeout(t);t=setTimeout(apply,200);});
})();
/* ---------- form ---------- */
var form=$('#enq');
function setErr(f,msg){var el=form.querySelector('[data-f="'+f+'"]');el.classList.toggle('bad',!!msg);el.querySelector('.err').textContent=msg||'';}
form.addEventListener('input',function(e){var p=e.target.closest('.field');if(p&&p.dataset.f)setErr(p.dataset.f,'');});
/* Phone check per dial code: [national-number pattern, message]. Mobile and landline formats real carriers use. */
var PHONE_RULES={
  '+91':[/^[6-9]\d{9}$/,'Indian mobile numbers have 10 digits and start with 6, 7, 8 or 9.'],
  '+971':[/^(5[024568]\d{7}|[2-4679]\d{7})$/,'UAE numbers have 9 digits for mobiles (50, 52, 54, 55, 56 or 58…) or 8 for landlines.'],
  '+94':[/^(7[0-8]\d{7}|[1-689]\d{8})$/,'Sri Lankan numbers have 9 digits, mobiles start with 7.'],
  '+977':[/^(9[78]\d{8}|[1-8]\d{6,7})$/,'Nepali mobiles have 10 digits and start with 97 or 98.'],
  '+880':[/^(1[3-9]\d{8}|[2-9]\d{6,9})$/,'Bangladeshi mobiles have 10 digits after +880 and start with 13 to 19.'],
  '+974':[/^[3-7]\d{7}$/,'Qatari numbers have 8 digits and start with 3, 4, 5, 6 or 7.'],
  '+966':[/^(5\d{8}|1\d{7})$/,'Saudi mobiles have 9 digits and start with 5.'],
  '+968':[/^[279]\d{7}$/,'Omani numbers have 8 digits and start with 7, 9 or 2.'],
  '+65':[/^[689]\d{7}$/,'Singapore numbers have 8 digits and start with 6, 8 or 9.'],
  '+33':[/^[1-9]\d{8}$/,'French numbers have 9 digits after +33 (10 with the leading 0).'],
  '+44':[/^(7\d{9}|[1-3]\d{8,9})$/,'UK mobiles have 10 digits after +44 and start with 7.'],
  '+1':[/^[2-9]\d{2}[2-9]\d{6}$/,'US and Canadian numbers have 10 digits: area code then number.']
};
/* Returns {ok:true, e164:'+91 9876543210'} or {ok:false, msg}. */
function checkPhone(cc,raw){
  cc=String(cc||'').trim();var d=String(raw||'').replace(/\D/g,''),cd=cc.replace(/\D/g,'');
  if(!d)return {ok:false,msg:'Enter a phone number we can reach you on.'};
  var r=PHONE_RULES[cc];
  /* typed the country code again (+91 98…, 0091 98…, 9198…) */
  var dd=d.replace(/^00/,'');if(cd&&dd.indexOf(cd)===0&&(String(raw).trim().charAt(0)==='+'||/^00/.test(d)||(r&&!r[0].test(d.replace(/^0+/,''))&&r[0].test(dd.slice(cd.length).replace(/^0+/,'')))))d=dd.slice(cd.length);
  if(cd!=='1'&&d.charAt(0)==='0')d=d.replace(/^0+/,'');                                                   /* trunk 0, e.g. 098765… or 07… */
  if(/^(\d)\1+$/.test(d))return {ok:false,msg:'That number doesn\'t look real. Please check it.'};
  var seq='01234567890123456789',rev='98765432109876543210';
  if(d.length>=7&&(seq.indexOf(d)>-1||rev.indexOf(d)>-1))return {ok:false,msg:'That number doesn\'t look real. Please check it.'};
  if(/^(\d{2})\1{3,}$/.test(d)||/^(\d{3})\1{2,}$/.test(d))return {ok:false,msg:'That number doesn\'t look real. Please check it.'};
  var tail=d.slice(-7);if(/^(\d)\1{6}$/.test(tail))return {ok:false,msg:'That number doesn\'t look real. Please check it.'};
  if(r){if(!r[0].test(d))return {ok:false,msg:r[1]};}
  else if(d.length<6||d.length+cd.length>15)return {ok:false,msg:'Enter a valid number for that country, without the country code.'};
  return {ok:true,e164:cc+' '+d};
}
/* ---------- lead form → /api/enquiry → Apps Script (Google Sheets + email) ---------- */
var ENQUIRY_ENDPOINT=window.TC_ENQUIRY_ENDPOINT||'/api/enquiry';
var LIVE=/^https?:$/.test(location.protocol)&&!/(^|\.)(claude\.ai|claudeusercontent\.com|claudemcpcontent\.com|anthropic\.com)$/.test(location.hostname)&&!(window.claude&&window.claude.use);
var LEAD_KEY='tc_fr_lead_done',SL_KEY='tc_fr_shortlist';
var UTM={};try{new URLSearchParams(location.search).forEach(function(v,k){if(/^(utm_[a-z]+|gclid|fbclid)$/.test(k))UTM[k]=v.slice(0,120);});}catch(e){}
function lsGet(k){try{return JSON.parse(localStorage.getItem(k)||'null');}catch(e){return null;}}
function lsSet(k,v){try{if(v==null)localStorage.removeItem(k);else localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
(function(){var pn=$('.preview-note');if(pn){if(LIVE)pn.remove();else pn.textContent='Preview: on the live site this form sends each lead to the Website Leads sheet and to business@tuteeconnect.com.';}})();
/* shortlist: universities picked with "+ Compare" in the explorer ride along with the enquiry */
function shortlist(){var l=lsGet(SL_KEY);return Array.isArray(l)?l.filter(function(x){return typeof x==='string';}).slice(0,6):[];}
function drawShortlist(){var box=$('#slChips');if(!box)return;var l=shortlist();box.hidden=!l.length;
  box.innerHTML=l.length?'<span class="sl-lab">Your shortlist</span>'+l.map(function(n,i){return '<button type="button" data-i="'+i+'" aria-label="Remove '+esc(n)+'">'+esc(n)+' <span aria-hidden="true">×</span></button>';}).join(''):'';}
if($('#slChips'))$('#slChips').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var l=shortlist();l.splice(+b.dataset.i,1);lsSet(SL_KEY,l);drawShortlist();});
addEventListener('storage',function(e){if(e.key===SL_KEY)drawShortlist();});addEventListener('focus',drawShortlist);drawShortlist();
function showDone(d,animate){var first=esc(String(d.name||'').trim().split(/\s+/)[0]||'');
  var when=d.call_time&&!/^any/i.test(d.call_time)?' in the '+esc(d.call_time.replace(/\s*\(.*\)/,'').toLowerCase()):'';
  $('#formwrap').innerHTML='<div class="done'+(animate?'':' still')+'" tabindex="-1"><div class="tick morph"><svg width="32" height="32"><use href="#i-check"/></svg></div><h3>Merci'+(first?', '+first:'')+'!</h3><p class="sub" style="margin-top:8px">'+(d.preview?'This is a preview, so nothing was sent. On the live site, ':'')+'An advisor will call you'+when+(d.preview?'.':' within one working day.')+' Want an answer sooner?</p><div class="done-acts"><a class="btn btn-primary" href="https://wa.me/917358364959?text='+encodeURIComponent('Hi Tutee Connect, I just sent an enquiry about studying in France.')+'" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a><button type="button" class="again">Send another enquiry</button></div></div>';
  var dn=$('#formwrap .done');if(animate&&dn){dn.focus({preventScroll:true});var r=dn.getBoundingClientRect();if(r.top<70||r.bottom>innerHeight)dn.scrollIntoView({block:'center',behavior:reduce?'auto':'smooth'});}
  $('#formwrap .again').addEventListener('click',function(){lsSet(LEAD_KEY,null);location.hash='enquire';location.reload();});}
var prevDone=lsGet(LEAD_KEY);if(prevDone&&Date.now()-prevDone.at<30*864e5)showDone(prevDone,false);
(function(){var ph=$('#f-phone'),cc=$('#f-cc');if(!ph)return;function chk(){if(!ph.value.trim())return;var r=checkPhone(cc?cc.value:'+91',ph.value);setErr('phone_number',r.ok?'':r.msg);}
  ph.addEventListener('blur',chk);var last=cc?cc.value:'';setInterval(function(){if(cc&&cc.value!==last){last=cc.value;chk();}},400);})();
var sending=false;
form.addEventListener('submit',function(e){e.preventDefault();if(sending)return;var ok=true,d=new FormData(form),err=$('#enqErr');err.hidden=true;
  var name=String(d.get('name')||'').trim(),email=String(d.get('email')||'').trim(),num=String(d.get('phone_number')||'').trim();
  if(name.length<2){setErr('name','Enter your name.');ok=false;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)){setErr('email','Enter a valid email address, like name@email.com.');ok=false;}
  var pc=checkPhone(String(d.get('country_code')||'+91'),num);if(!pc.ok){setErr('phone_number',pc.msg);ok=false;}
  if(!ok){var b=form.querySelector('.bad input,.bad select');if(b)b.focus();return;}
  if(d.get('botcheck'))return; /* bots tick the hidden box */
  var level=String(d.get('description_level')||''),msg=String(d.get('description')||'').trim();
  var data={name:name,email:email,phone:pc.e164,state:String(d.get('state')||''),call_time:String(d.get('call_time')||'Anytime'),
    course:level,message:msg,shortlist:shortlist().join(', '),origin_city:String(d.get('origin_city')||''),destination:'France',form_location:'Consultation form',
    page:(function(){try{return location.host+location.pathname;}catch(x){return '';}})()};
  Object.keys(UTM).forEach(function(k){data[k]=UTM[k];});
  var btn=form.querySelector('button[type="submit"]'),lab=btn.innerHTML;
  function done(preview){var rec={name:name,call_time:data.call_time,at:Date.now(),preview:!!preview};if(!preview)lsSet(LEAD_KEY,rec);showDone(rec,true);}
  if(!LIVE){done(true);return;}
  sending=true;btn.disabled=true;btn.innerHTML='Sending…';
  var ctl=window.AbortController?new AbortController():null,tm=setTimeout(function(){if(ctl)ctl.abort();},20000);
  fetch(ENQUIRY_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data),signal:ctl?ctl.signal:undefined})
    .then(function(r){return r.json().catch(function(){return {success:false,message:'The server sent an unexpected reply.'};});})
    .then(function(res){if(res&&res.success)done(false);else fail((res&&res.message)||'Something went wrong.');})
    .catch(function(){fail('We could not reach the server. Check your connection.');})
    .then(function(){clearTimeout(tm);sending=false;if(btn.isConnected){btn.disabled=false;btn.innerHTML=lab;}});
  function fail(m){err.innerHTML=esc(m)+' Please try again, or <a href="https://wa.me/917358364959" target="_blank" rel="noopener noreferrer">message us on WhatsApp</a>.';err.hidden=false;}
});

/* ---------- copy email ---------- */
$('#copyMail').addEventListener('click',function(){var t='business@tuteeconnect.com',ok=$('#mailOk');var done=function(){ok.hidden=false;setTimeout(function(){ok.hidden=true;},1800);};
  try{navigator.clipboard.writeText(t).then(done,function(){selectTx();});}catch(e){selectTx();}
  function selectTx(){var r=document.createRange();r.selectNodeContents($('#mailTx'));var s=getSelection();s.removeAllRanges();s.addRange(r);}});
window.__TC={FAQ:FAQ,UNIS:UNIS,HOW:HOW};
})();
