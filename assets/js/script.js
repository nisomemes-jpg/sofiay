
(function(){
var $=function(s){return document.querySelector(s)},$$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
var START=new Date(2023,5,27,0,0,0);

/* céu de estrelas e corações */
var cv=$('#sky'),cx=cv.getContext('2d'),W,H,R,stars=[],hearts=[],col='#fff';
function size(){R=window.devicePixelRatio||1;W=cv.width=innerWidth*R;H=cv.height=innerHeight*R;col=getComputedStyle(document.documentElement).getPropertyValue('--star').trim()||'#fff';
 stars=[];for(var i=0;i<110;i++)stars.push({x:Math.random()*W,y:Math.random()*H,r:(.5+Math.random()*1.4)*R,p:Math.random()*6.3});
 hearts=[];for(i=0;i<9;i++)hearts.push({x:Math.random()*W,y:Math.random()*H,s:(12+Math.random()*16)*R,v:(.15+Math.random()*.3)*R})}
function draw(t){cx.clearRect(0,0,W,H);cx.fillStyle=col;
 stars.forEach(function(s){cx.globalAlpha=RM?.5:.25+.6*Math.abs(Math.sin(t/1400+s.p));cx.beginPath();cx.arc(s.x,s.y,s.r,0,6.3);cx.fill()});
 cx.globalAlpha=.16;cx.textAlign='center';
 hearts.forEach(function(h){cx.font=h.s+'px serif';cx.fillText('♡',h.x,h.y);if(!RM){h.y-=h.v;if(h.y<-40*R){h.y=H+40*R;h.x=Math.random()*W}}});
 if(!RM)requestAnimationFrame(draw)}
size();var lw=innerWidth,lh=innerHeight;addEventListener('resize',function(){if(innerWidth===lw&&Math.abs(innerHeight-lh)<200)return;lw=innerWidth;lh=innerHeight;size();if(RM)draw(0)});requestAnimationFrame(draw);

/* explosão de corações */
function burst(x,y){if(RM)return;for(var i=0;i<14;i++){var s=document.createElement('span'),a=Math.random()*6.28,r=60+Math.random()*120;
 s.className='h';s.textContent='♡';s.style.cssText='left:'+x+'px;top:'+y+'px;--dx:'+Math.cos(a)*r+'px;--dy:'+(Math.sin(a)*r-80)+'px;font-size:'+(14+Math.random()*18)+'px';
 document.body.appendChild(s);(function(e){setTimeout(function(){e.remove()},1400)})(s)}}

/* trava */
var card=$('#card'),boxesEl=$('#boxes'),code=$('#code'),ins=$$('#boxes .bx'),msg=$('#msg'),ct=$('#ct'),cd=$('#cd'),busy=false,tries=0;
function render(){var v=code.value,a=Math.min(v.length,ins.length-1);ins.forEach(function(b,i){b.textContent=v.charAt(i);b.classList.toggle('f',i<v.length);b.classList.toggle('act',i===a)})}
function caret(){var n=code.value.length;try{code.setSelectionRange(n,n)}catch(e){}}
code.addEventListener('input',function(){if(busy)return;code.value=code.value.replace(/\D/g,'').slice(0,8);render();caret();
 if(code.value.length===8){busy=true;msg.textContent='';setTimeout(check,350)}});
code.addEventListener('focus',function(){boxesEl.classList.add('on');render();setTimeout(caret,0)});
code.addEventListener('blur',function(){boxesEl.classList.remove('on')});
code.addEventListener('click',caret);
code.addEventListener('keydown',function(e){if(e.key==='Enter')code.blur()});
$('#hintbtn').addEventListener('click',function(){msg.textContent='Dica: foi num mês de festa junina.';code.focus()});
if(matchMedia('(pointer:fine)').matches)setTimeout(function(){code.focus({preventScroll:true})},300);
render();
function check(){if(code.value==='27062023')go();else wrong()}
function wrong(){tries++;boxesEl.classList.add('bad');
 msg.textContent=tries>=3?'Dica: foi num mês de festa junina.':'Essa não é a data. Pense no dia em que viramos nós.';
 setTimeout(function(){code.value='';render();boxesEl.classList.remove('bad');busy=false;code.focus()},900)}

function spin(){var cr=boxesEl.getBoundingClientRect(),mx=cr.left+cr.width/2,my=cr.top+cr.height/2,n=ins.length,R=Math.min(72,cr.width/4);
 ins.forEach(function(b,i){var r=b.getBoundingClientRect(),x=mx-(r.left+r.width/2),y=my-(r.top+r.height/2),a=i/n*6.283;
  function P(g,d){return 'translate('+(x+Math.cos(g)*d)+'px,'+(y+Math.sin(g)*d)+'px)'}
  b.animate([
   {transform:'translate(0,0) rotate(0deg) scale(1)',opacity:1},
   {transform:P(a,R)+' rotate(25deg) scale(1)',opacity:1,offset:.35},
   {transform:P(a+2.2,R*.8)+' rotate(140deg) scale(.8)',opacity:1,offset:.7},
   {transform:P(a+4.4,0)+' rotate(300deg) scale(.1)',opacity:0}
  ],{duration:1500,easing:'ease-in-out',fill:'forwards'})})}
function go(){code.blur();code.readOnly=true;card.classList.add('going');
 if(RM)boxesEl.style.opacity=0;else spin();
 setTimeout(function(){card.classList.add('verifying');ct.textContent='Verificando...';cd.textContent='Conferindo se o coração lembra da data.';count()},RM?200:1550)}
function count(){var arc=$('#arc'),num=$('#num'),C=339.3,t0=null,D=RM?500:2300;
 function step(t){if(t0===null)t0=t;var p=Math.min(1,(t-t0)/D),e=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;
  arc.style.strokeDashoffset=C*(1-e);num.textContent=Math.round(e*100);
  if(p<1)requestAnimationFrame(step);else success()}
 requestAnimationFrame(step)}
function success(){card.classList.remove('verifying');card.classList.add('done');
 ct.textContent='Você lembrou ♡';cd.textContent='Bem-vinda de volta ao nosso começo. Abrindo a nossa história…';
 confetti();setTimeout(unlock,RM?800:2600)}
function confetti(){if(RM)return;var cs=['#7b4dff','#ffd966','#22c55e','#ff6fa5','#5ec8ff'];
 for(var i=0;i<26;i++){var s=document.createElement('i'),a=Math.random()*6.283,r=90+Math.random()*90;s.className='cf';
  s.style.cssText='--dx:'+Math.cos(a)*r+'px;--dy:'+(Math.sin(a)*r-20)+'px;--rot:'+(Math.random()*540-270)+'deg;background:'+cs[i%5]+';animation-delay:'+(Math.random()*.15)+'s';
  card.appendChild(s);(function(e){setTimeout(function(){e.remove()},1700)})(s)}}
function unlock(){var l=$('#lock');l.classList.add('gone');$('#main').hidden=false;document.body.classList.remove('locked');
 window.scrollTo(0,0);burst(innerWidth/2,innerHeight/2);startCounter();setTimeout(function(){l.hidden=true;$('#h1').focus({preventScroll:true})},900)}

/* contador + infinito */
function pad(n){return n<10?'0'+n:''+n}
function pl(n,a,b){return n+' '+(n===1?a:b)}
function startCounter(){
 var path=$('#inf'),trail=$('#trail'),dot=$('#dot'),L=path.getTotalLength();
 function text(){var n=new Date(),y=n.getFullYear()-2023,m=n.getMonth()-5,d=n.getDate()-27;
  if(d<0){m--;d+=new Date(n.getFullYear(),n.getMonth(),0).getDate()}if(m<0){y--;m+=12}
  $('#ymd').textContent=pl(y,'ano','anos')+', '+pl(m,'mês','meses')+' e '+pl(d,'dia','dias');
  var ms=n-START;$('#d').textContent=Math.floor(ms/864e5).toLocaleString('pt-BR');$('#h').textContent=pad(Math.floor(ms/36e5)%24);
  $('#m').textContent=pad(Math.floor(ms/6e4)%60);$('#s').textContent=pad(Math.floor(ms/1e3)%60)}
 function orbit(){var n=new Date(),p=(n.getSeconds()+n.getMilliseconds()/1e3)/60*L,pt=path.getPointAtLength(p);
  dot.setAttribute('cx',pt.x);dot.setAttribute('cy',pt.y);trail.style.strokeDasharray='90 '+L;trail.style.strokeDashoffset=90-p;
  if(!RM)requestAnimationFrame(orbit)}
 text();setInterval(text,1000);orbit();if(RM)setInterval(orbit,1000);
 $('.counter').addEventListener('click',function(e){burst(e.clientX,e.clientY)})}

/* carta: destaca o parágrafo que está sendo lido */
var ps=$$('#letter p');
if('IntersectionObserver' in window&&!RM){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add('on')})},{rootMargin:'0px 0px -15% 0px',threshold:.15});ps.forEach(function(p){io.observe(p)})}
else document.body.classList.add('noio');

$$('details').forEach(function(d){d.addEventListener('toggle',function(){if(d.open){var r=d.getBoundingClientRect();burst(r.right-30,r.top+24)}})});
})();
