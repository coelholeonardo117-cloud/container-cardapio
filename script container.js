"use strict";
var WA="5569992614430";
var C=[
{id:"esp",t:"🔥 Espetinhos",i:[
["Linguiça Calabresa","Simples: mandioca e vinagrete","~12,00"],["Linguiça Toscana","Simples: mandioca e vinagrete","~12,00"],["Porco","Simples: mandioca e vinagrete","~12,00"],["Coxão Mole","Simples: mandioca e vinagrete","~12,00"],
["Queijo Coalho","Simples: mandioca e vinagrete","~14,00"],["Contra Filé","Simples: mandioca e vinagrete","~14,00"],["Frango com Bacon","Simples: mandioca e vinagrete","~14,00"]]},
{id:"lan",t:"🍔 Lanches",i:[
["Big Bacon","Pão brioche, hambúrguer artesanal, cheddar, bacon, alface","29,00"],
["Big Bacon Crispy","Pão brioche, hambúrguer artesanal, queijo fundido","27,00"],
["Big Bob Esponja","Pão brioche, hambúrguer, ketchup, mostarda, picles, cebola","29,00"],
["Big Calabresa","Pão brioche, hambúrguer artesanal, calabresa, ovo, mussarela","29,00"],
["Big Cheddar Cremoso","Pão brioche, hambúrguer artesanal, cheddar cremoso","30,00"],
["Big Container","Pão brioche, hambúrguer artesanal, cheddar, bacon","37,00"],
["Duplo Burgue","Pão brioche, 2 hambúrgueres artesanais, cheddar, cebola","31,00"],
["Salada Burgue","Pão brioche, hambúrguer artesanal, ovo, queijo mussarela","29,00"],
["Hot Dog","Pão, molho, 2 salsichas, milho, alface, tomate e batata","18,00"],
["Misto Quente","Pão, presunto e queijo mussarela","14,00"],
["Top Burgue","Pão brioche, hambúrguer artesanal, 2 cheddar, cebola","28,00"],
["Panqueca de Carne de Boi","Carne moída c/ catupiry, queijo, batata palha e arroz","25,00"],
["Panqueca de Frango","Frango c/ catupiry, queijo, batata palha e arroz","25,00"]]},
{id:"por",t:"🍟 Porções",i:[
["Batata Palito","","~20,00"],["Batata c/ Cheddar e Bacon","","~30,00"],["Calabresa Acebolada","","~22,00"],
["Frango a Passarinho","","~22,00"],["Tulipa","","~22,00"],["Filé de Tilápia","","~33,00"],["Costelinha de Tambaqui","","~31,00"]]},
{id:"aco",t:"🍚 Acompanhamentos",i:[
["Marmita Arroz","","12,00"],["Marmita de Canjica","","14,00"],["Marmita de Farofa","","14,00"],["Marmita de Salada","","16,00"],["Marmita Tropeiro","","18,00"],["Molho de Alho","","2,00"],["Ovo Frito","","3,00"]]},
{id:"doc",t:"🍰 Doce",i:[["Trident","","4,00"]]},
{id:"suc",t:"🥤 Sucos",i:[
["Abacaxi","","~7,00"],["Abacaxi c/ Menta","","~7,00"],["Acerola","","~7,00"],["Cupuaçu","","~7,00"],["Goiaba","","~7,00"],["Limonada","","~7,00"],["Maracujá","","~7,00"],
["Laranja","","~10,00"],["Del Valle Laranja 600ml","","10,00"],["Del Valle Uva 600ml","","10,00"]]},
{id:"ref",t:"🥫 Refrigerantes",i:[
["Coca-Cola","","~4,00"],["Fanta Laranja","","~6,00"],["Fanta Uva","","~6,00"],["Sukita Laranja","","10,00"],["Guaraná Antarctica","","~6,00"],
["Pepsi lata 350ml","","6,00"],["Água Tônica 350ml","","6,00"],["H2O Limão","","7,50"],["H2O Limoneto","","7,50"]]},
{id:"ter",t:"🧉 Tereré",i:[
["Limão","","20,00"],["Abacaxi e Menta","","20,00"],["Abacaxi e Limão","","20,00"],["Uva e Menta","","20,00"],["Menta e Limão","","20,00"],
["Energético","","22,00"],["Água e Limão","","18,00"],["Copo adicional","","3,00"]]},
{id:"cer",t:"🍺 Cervejas",i:[
["Skol lata","","5,00"],["Brahma lata","","5,00"],["Skol 600ml","","11,00"],["Brahma 600ml","","11,00"],
["Original 600ml","","13,00"],["Heineken","","10,00"],["Heineken Zero","","10,00"],["Cerveja Suja 600ml","","14,00"]]}
];
var nav=document.getElementById("nav"),menu=document.getElementById("menu");
function msg(n){return "https://wa.me/"+WA+"?text="+encodeURIComponent("Olá! Quero pedir: "+n)}
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
C.forEach(function(c,k){
 var b=el("button",k?"":"on",c.t);b.type="button";b.dataset.id=c.id;
 b.onclick=function(){document.getElementById(c.id).scrollIntoView({behavior:"smooth",block:"start"})};
 nav.appendChild(b);
 var h=el("h2","",c.t);h.id=c.id;menu.appendChild(h);
 c.i.forEach(function(x){
  var a=el("a","it");a.target="_blank";a.rel="noopener noreferrer";a.href=msg(x[0]);
  var info=el("div");info.appendChild(el("div","n",x[0]));if(x[1])info.appendChild(el("div","d",x[1]));
  var p=el("div","p"),pr=x[2];
  if(!pr){p.appendChild(el("small","","valor"));p.appendChild(document.createTextNode("Consulte"))}
  else{if(pr.charAt(0)==="~"){pr=pr.slice(1);p.appendChild(el("small","","a partir de"))}p.appendChild(document.createTextNode("R$ "+pr))}
  a.appendChild(info);a.appendChild(p);menu.appendChild(a);
 });
});
var s="🔥 ESPETINHOS ✦ LANCHES ✦ PORÇÕES ✦ SUCOS ✦ TERERÉ ✦ GELADA ✦ ";
document.getElementById("tk").textContent=s+s+s+s;
document.getElementById("cta").href=msg("um pedido");
var items=document.querySelectorAll(".it");
if("IntersectionObserver" in window){
 var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting)x.target.classList.add("v")})},{threshold:.1});
 items.forEach(function(e){io.observe(e)});
}else{items.forEach(function(e){e.classList.add("v")})}
var hs=document.querySelectorAll("h2"),busy=false;
addEventListener("scroll",function(){
 if(busy)return;busy=true;
 requestAnimationFrame(function(){busy=false;
  var cur=hs[0].id;hs.forEach(function(h){if(h.getBoundingClientRect().top<130)cur=h.id});
  nav.querySelectorAll("button").forEach(function(b){var on=b.dataset.id===cur;if(on!==b.classList.contains("on")){b.classList.toggle("on",on);if(on)b.scrollIntoView({inline:"center",block:"nearest"})}});
 });
},{passive:true});
