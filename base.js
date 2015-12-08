eggnum = 1;eggnumold = 1;
function randomchik(min, max){return Math.floor(Math.random() * (max - min + 1)) + min;}
$(window).scroll(function(){$("#EGGSGAME").attr("onclick","timer()");$("#EGGSGAME").html('<div id="clean"><img src="/PEPPA/BIRD.png" style="width:128px;"></div>');$("#score").html($(".EGG").length);$("#clean").show();});
time=30;function timer(){if(time > 0){if(time>10){time=time-1;}else{time=time-1;time="0"+time};$("#timer").text("0:"+time);setTimeout(function(){return timer();},1000)}else{time=30;stape=1;$("#eggv"+eggnum).hide();fiska();};};
stape=0;
$("#EGGSGAME").click(function(e){if(stape==0){piz=e;EGGA(piz)}});
randorno=1;function EGGA(e) {$("#clean").hide();
if(randorno==1) {
var hei=$("#EGGSGAME").height()-235;var wid=$("#EGGSGAME").width()-128;
var randhei=Math.floor(Math.random()*(hei - 1 + 1))+1;var randwid=Math.floor(Math.random()*(wid - 1 + 1))+1;
} else {
var hei=$("#EGGSGAME").height();var wid=$("#EGGSGAME").width();
var offset = $("#EGGSGAME").offset();
var randwid1 = e.pageX - offset.left;var randwid = randwid1-64;if(randwid<0){randwid=0};if(randwid>wid-128){randwid=randwid1-128};
var randhei1 = e.pageY - offset.top;var randhei = randhei1-171;if(randhei>hei-211){randhei=randhei1-211};if(randhei<-20){randhei=-20};
};
$("#eggv"+eggnumold).hide();
eggnumkek = eggnum;suka=randwid;function srav(){if(suka >= parseInt($("#EGG"+eggnumkek).css("margin-left"))+64){return "zerk"};};clases=srav();
eggnum = eggnum+1;
eggnumold = eggnum;
$("#EGGSGAME").append('<div id="EGG'+eggnum+'" style="margin-top:'+randhei+';margin-left:'+randwid+';" class="EGG"><div id="birdright" class="EGG2"><img class="'+clases+'" src="/PEPPA/BIRDTOJUMP.png" style="width: 128px;vertical-align: bottom;" id="eggv'+eggnum+'"><img src="/PEPPA/EGG.png" style="width: 64px; display: none;" class="EGGSHOW" id="eggc'+eggnum+'"></div></div>');
setTimeout(function(){$("#eggv"+eggnum).attr("src", "/PEPPA/BIRDONJUMP.png");if($("#vol").prop('checked')){var audio=new Audio();audio.src='/PEPPA/kurl.mp3';audio.autoplay=true;};$("#eggc"+eggnum).show();setTimeout(function(){$("#eggc"+eggnum).css("transform", "none");}, 10);setTimeout(function(){$("#eggv"+eggnum).attr("src", "/PEPPA/BIRD.png");}, 200);},400);
$("#score").html($(".EGG").length);
};
$("#rand").click(function(){rand();});function rand(){if($("#rand").prop('checked')){randorno=1}else{randorno=0}};
oldfiska=0;stopaimvil=0
function fiska() {if(eggnum > oldfiska){oldfiska=oldfiska+1;vilupka(oldfiska);return fiska();}else{ if($(".EGG").length==0){return star();}else{setTimeout(function(){return fiska();},10)} }};
function star(){stape=0;$("#EGGSGAME").attr("onclick","timer();$('#EGGSGAME').attr('onclick','');");$("#EGGSGAME").html('<div id="clean"><img src="/PEPPA/BIRD.png" style="width:128px;"></div>');$("#score").html($(".EGG").length);$("#clean").show();};
function vilupka(nam){
var rand=randomchik(1, 200);setTimeout(function(){$("#eggc"+nam).addClass("roteg");setTimeout(function(){$("#eggc"+nam).removeClass("roteg");$("#eggc"+nam).attr("src", "/PEPPA/BIRDONJUMP.png");},725);setTimeout(function(){animvil()},900);},rand)
function animvil() {
$("#eggc"+nam).attr("src", "/PEPPA/BIRDLEFTLEG.png");setTimeout(function(){$("#eggc"+nam).attr("src", "/PEPPA/BIRDRIGHTLEG.png");},300);
if(stopaimvil==0){setTimeout(function(){return animvil();},600)}else{stopaimvil=0}
};
setTimeout(function(){$("#EGG"+nam).css("margin-left","0px");setTimeout(function(){$("#EGG"+nam).remove();}, 1000);},1200);
}

// CODED BY SPEAKPRESENTS
