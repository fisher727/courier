
Modernizr.addTest('positionfixed',function(){if((!!navigator.userAgent.match(/iPad/i)||!!navigator.userAgent.match(/iPhone/i)||!!navigator.userAgent.match(/iPod/i))){navigator.userAgent.match(/OS (\d)/i);return(RegExp.$1>=5);}
var test=document.createElement('div'),control=test.cloneNode(false),fake=false,root=document.body||(function(){fake=true;return document.documentElement.appendChild(document.createElement('body'));}());var oldCssText=root.style.cssText;root.style.cssText='padding:0;margin:0';test.style.cssText='position:fixed;top:42px';root.appendChild(test);root.appendChild(control);var ret=test.offsetTop!==control.offsetTop;root.removeChild(test);root.removeChild(control);root.style.cssText=oldCssText;if(fake){document.documentElement.removeChild(root);}
return ret;});Modernizr.addTest('pointerevents',function(){var element=document.createElement('div'),documentElement=document.documentElement,getComputedStyle=window.getComputedStyle,supports;if(!('pointerEvents'in element.style)){return false;}
element.style.pointerEvents='auto';element.style.pointerEvents='x';documentElement.appendChild(element);supports=getComputedStyle&&getComputedStyle(element,'').pointerEvents==='auto';documentElement.removeChild(element);return!!supports;});var addParcelShopAnchor=function(){var parcelshopid=$(".dpdparcelshop").attr("id");$("#expressparcelshop").attr("href","#"+parcelshopid);};var initKeyEventListener=function(){$("input[type=text]").on("keydown",function(e){if(e.keyCode==13)
{trackOutboundLink("","Form","Send",$(this).closest("form").data("val"),0);}});};var jwplayer_init=function(){$jwplayer_items=$(".js_maincontent").find(".video_player_id");if($jwplayer_items.length>0)
{jwplayer_setup();}};var adLayer=function(){var data=$(".js_adlayer").data("id");if(!$.cookie("b2cadlayer")||(data!=$.cookie("b2cadlayer")))
{$(".innerlightbox").each(function(){var height=$(this).height()
$(".lightbox").height(height);});$(".js_adlayer").addClass("open");$(document).on("click",".js_adlayer_close",function(e){var data=$(".js_adlayer").data("id");if($("#dontshowoption").prop("checked"))
{$.cookie("b2cadlayer",data,{expires:365});}
else
{$.cookie("b2cadlayer",data);}
trackOutboundLink("","Ad Layer","Click","Close button",1);$('.js_adlayer').removeClass('open');});$(document).on('click','.js_adlayer .close',function(e){var data=$(".js_adlayer").data("id");if($("#dontshowoption").prop("checked"))
{$.cookie("b2cadlayer",data,{expires:365});}
trackOutboundLink("","Ad Layer","Click","Close top right corner",1);$('.js_adlayer').removeClass('open');});}};function specialFormSubmit(category,action,label,$object)
{trackOutboundLink("",category,action,label,1);$form=$object.closest("form");window.setTimeout("$form.submit()",100);}
function adLayerSubmit($this)
{$('.js_adlayer').removeClass('open');specialFormSubmit("Ad Layer","Click","Open competition",$this);}
var videoTrigger=function(){var $video_elems=$(document).find(".js_video_trigger");$.each($video_elems,function(i,v){var href=$(this).attr("href").split("/");var video_id=href[href.length-1];$(this).attr("href","javascript:void(0)");var video_id_link=video_id+"_link";$(this).attr("id",video_id_link);$(document).on('click',"#"+video_id_link,function(e){$('#'+video_id).addClass('open');});});$(document).on('click','.js_video .close, .overlay',function(e){$('.js_video').removeClass('open');});}
var newsFeed=function(){var $slider=$(".slider");if($slider.length!=0)
{var sliderConfslide={mode:'fade',animationTime:2000,delay:12000,delayBeforeAnimate:1,autoPlay:true,enableStartStop:false,expand:true,hashTags:false,resizeContents:true,buildNavigation:true,buildArrows:false,pauseOnHover:false};var sliderConffade=$.extend({},sliderConfslide,{mode:'fade',animationTime:1500,delay:5000,resizeContents:false});$slider.each(function(){$(this).anythingSlider(eval('sliderConf'+$(this).data('effect')));});}}
function trackingFunction($obj)
{var $form=$obj.closest("form");var $query=$form.find("input[name='query']");if($query.length==0)
{$query=$form.find("input[name='parcelno']");}
var $locale=$form.find("input[name='locale']");var $action=$form.find("input[name='action']");if($("#js_submit_tracking_langquery").length>0){$queryfind="input[name='"+$("#js_submit_tracking_parcelno").val()+"']";localefind="input[name='"+$("#js_submit_tracking_langquery").val()+"']";$query=$form.find($queryfind);$locale=$form.find(localefind);}
trackOutboundLink("",$form.data("category"),$form.data("action"),$form.data("label"),0);var value=$query.val();value=value.replace(/\s/g,"");$query.val(value);$form.submit();$query.removeAttr("disabled");$action.removeAttr("disabled");}
var initSubmitsTracking=function(){var $trackingFormButton=$('form .js_submit_tracking');$trackingFormButton.on('click',function(){trackingFunction($(this));});$trackingFormButton.closest("form").find("input[name='query']").on("keydown",function(event){if(event.which==13)
{event.preventDefault();trackingFunction($(this));}});$trackingFormButton.closest("form").find("input[name='parcelno']").on("keydown",function(event){if(event.which==13)
{event.preventDefault();trackingFunction($(this));}});}
var initGaTrack=function(){var $gaTrack=$(".js_track_event");if($gaTrack.length!=0)
{$gaTrack.each(function(){$(this).bind("click tap",function(){var target=0;trackOutboundLink("",$(this).data("category"),$(this).data("action"),$(this).data("label"),target);});});}
var $gaTrackURL=$(".js_track_event_url");if($gaTrackURL.length!=0)
{$gaTrackURL.each(function(){$(this).bind("click tap",function(e){e.preventDefault();var target=0;if($(this).is("[target]"))
{if($(this).attr("target")=="_blank")
{target=1;}}
var url=$(this).attr("href");trackOutboundLink(url,$(this).data("category"),$(this).data("action"),$(this).data("label"),target);});});}}
var initVideoYouTube=function(){var $yt_videos=$(".js_yt_video");if($yt_videos.length<=0){return;}
$.each($yt_videos,function(i,v){var $this=$(this);var $video_div=$this.next();var id=$video_div.data("id");var video=$video_div.data("video");var height=$video_div.data("height");var width=$video_div.data("width");player_data.push({id:id,video:video,height:height,width:width});});var tag=document.createElement('script');tag.src="//www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);}
var player_data=[];function onYouTubeIframeAPIReady()
{if(typeof player_data==='undefined')
return;for(var i=0;i<player_data.length;i++)
{var curplayer=createYTPlayer(player_data[i]);}}
function createYTPlayer(playerInfo)
{return new YT.Player(playerInfo.id,{height:playerInfo.height,width:playerInfo.width,videoId:playerInfo.video,playerVars:{'enablejsapi':1,'origin':document.domain,'rel':0},events:{'onReady':onPlayerReady,'onError':onPlayerError,'onStateChange':onPlayerStateChange}});}
function onPlayerReady(event)
{event.target.playVideo();}
function onPlayerStateChange(event)
{console.log("State changed");console.log(event.data);if(event.data==0)
{event.target.seekTo(0,false);event.target.pauseVideo();}}
function onPlayerError(event)
{console.log("Error");console.log(event);}
function initiateFocusBoxCycle(height)
{$('.js_cycle').cycle({fx:'scrollHorz',timeoutFn:calculateTimeout,easing:'easeInOutExpo',speed:480,height:height,slideExpr:'div.cycleslide',pager:'.sliderPagination',pagerAnchorBuilder:function(idx){return"<li>"+idx+"</li>";},cleartype:true,cleartypeNoBg:true});}
function calculateTimeout(currElement,nextElement,opts,isForward)
{return $(currElement).data('timeout');}
function checkforFocusBoxCycle()
{if($("#slide_height").length>0)
{var height=$("#slide_height").val();initiateFocusBoxCycle(height);}}
$(document).ready(function(){addParcelShopAnchor();initKeyEventListener();adLayer();videoTrigger();newsFeed();initSubmitsTracking();jwplayer_init();initGaTrack();initVideoYouTube();});(function(){var baseEasings={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(i,name){baseEasings[name]=function(p){return Math.pow(p,i+2);};});$.extend(baseEasings,{Sine:function(p){return 1-Math.cos(p*Math.PI/2);},Circ:function(p){return 1-Math.sqrt(1-p*p);},Elastic:function(p){return p===0||p===1?p:-Math.pow(2,8*(p-1))*Math.sin(((p-1)*80-7.5)*Math.PI/15);},Back:function(p){return p*p*(3*p-2);},Bounce:function(p){var pow2,bounce=4;while(p<((pow2=Math.pow(2,--bounce))-1)/11){}
return 1/Math.pow(4,3-bounce)-7.5625*Math.pow((pow2*3-2)/22-p,2);}});$.each(baseEasings,function(name,easeIn){$.easing["easeIn"+name]=easeIn;$.easing["easeOut"+name]=function(p){return 1-easeIn(1-p);};$.easing["easeInOut"+name]=function(p){return p<0.5?easeIn(p*2)/2:1-easeIn(p*-2+2)/2;};});})();(function(){var DPD=window.DPD||{};DPD.initAfterAjax=function(){DPD.Kickstarter&&DPD.Kickstarter.init($('.js_maincontent'));DPD.Stickybar&&DPD.Stickybar.init();DPD.ElementOpenHandler&&DPD.ElementOpenHandler.init();DPD.ElementCloseHandler&&DPD.ElementCloseHandler.init();DPD.pagenav&&DPD.pagenav.ajaxInit();init();}
var init=function(){initPlaceholders();initSubmits();}
var initPlaceholders=function(){var $no_placeholder=$('.no-placeholder');if($no_placeholder.length){$no_placeholder.find('input, textarea').placeholder();}}
var initSubmits=function(){$('form .js_submit').on('click',function(){$form=$(this).closest("form");trackOutboundLink("",$form.data("category"),$form.data("action"),$form.data("label"),0);$form.submit();});}
$(document).ready(function(){init();})
window.DPD=DPD;})();(function(){var speedFactor=0.05;$('.js_ticker').each(function(idx,ele){var $this=$(ele);var $list=$this.find('ul');var tickerWidth=$this.width();var listWidth=0;$list.find("li").each(function(i){listWidth+=$(this,i).outerWidth(true)+15;});$list.width(listWidth);var $list2=$list.clone();$list2.css('left',listWidth);$this.append($list2);if(listWidth<tickerWidth){var $list3=$list.clone();$list3.css('left',listWidth*2);$this.append($list3);}
var totalTravel=listWidth;var defTiming=totalTravel/speedFactor;var scrollnews=function(distance,speed){$list.animate({left:-distance},speed,"linear",function(){$list.css("left",0);scrollnews(totalTravel,defTiming);});$list2.animate({left:-distance+listWidth},speed,"linear",function(){$list2.css("left",listWidth);});$list3&&$list3.animate({left:-distance+(2*listWidth)},speed,"linear",function(){$list3.css("left",listWidth*2);});}
scrollnews(totalTravel,defTiming);$this.hover(function(){$this.find('ul').stop();},function(){var offset=$list.position();var residualSpace=offset.left+listWidth;var residualTime=residualSpace/speedFactor;scrollnews(listWidth,residualTime);});});})();(function(){var DPD=window.DPD||{};var $win=$(window);var $watchItems=undefined;var $body=$("body")
var borders=[];var endofPage=0
var borders=[]
var winHeight=undefined
$win.on("resize",function(){winHeight=$win.height();endofPage=$body.outerHeight(true);}).on("load",function(){endofPage=$body.outerHeight(true);$win.trigger("scroll");}).trigger("resize")
$win.on('scroll',function(e){var bottomBorder=winHeight+$win.scrollTop();var offset=(bottomBorder-winHeight/2.5);var counter=0;$(borders).each(function(index,$value){if($value.offset().top<offset||endofPage===bottomBorder){var c=$value.data('class_on_view');$value.addClass(c).trigger(c);counter++;}});borders.splice(0,counter);});var Kickstarter={init:function($node){$watchItems=$node.find('[data-class_on_view]');$watchItems.each(function(idx,elm){var $this=$(this);borders.push($this);});}}
Kickstarter.init($('.js_maincontent'));DPD.Kickstarter=Kickstarter;window.DPD=DPD;})();(function(){var alt_layout=false;var $stage=$('.canvas .stage.alternative_layout');if(!$stage.length)
{var $stage=$('.canvas .stage');if(!$stage.length)
{return;}}
else
{alt_layout=true;}
var $switch=$stage.find('.switch');var xhr;var imagePath=$stage.data('imagepath');var state=true;var img,rect,bmp,stage;if(alt_layout)
{if($stage.hasClass("init-deliver"))
{var startX=-325;var endX=650;var widthRect=800;}
else
{var startX=800;var endX=475;var widthRect=1400;}
var heightLoadedImage=353;var startY=0;var endY=-300;var rotation=0;}
else
{var heightLoadedImage=495;var startX=570;var startY=-1020;var endX=164;var endY=-328;var rotation=30;var widthRect=1400;}
var startA=0.5;var endA=0;var sX;var sY;var sA;var deltaX;var deltaY;var deltaA;var duration=12;var t=0;function init(){img=new Image();img.onload=handleImageLoad;img.src=imagePath;}
function handleImageLoad(){var canvas=document.getElementById("canvas");stage=new createjs.Stage(canvas);rect=new createjs.Shape();if(alt_layout)
{rect.graphics.beginStroke("#FFF").drawRect(0,0,widthRect,800);}
else
{rect.graphics.beginStroke("#FFF").setStrokeStyle(10).drawRect(0,0,widthRect,800);}
rect.rotation=rotation;rect.x=startX;rect.y=startY;bmp=new createjs.Bitmap(img);stage.addChild(bmp);bmp.mask=rect;shim=new createjs.Shape();shim.graphics.f('rgba(255,255,255,1)').drawRect(0,0,1280,heightLoadedImage);shim.mask=rect;shim.alpha=startA;stage.addChild(rect);stage.addChild(shim);stage.update();}
function tick(event){t++;if($stage.hasClass("init-deliver")&&$stage.hasClass("deliver"))
{sX=0;deltaX=-325;}
var newY=Math.easeInOutQuart(t,sY,deltaY,duration);var newX=Math.easeInOutQuart(t,sX,deltaX,duration);var newA=Math.easeInOutExpo(t,sA,deltaA,duration);rect.y=newY;rect.x=newX;shim.alpha=newA;if(sY+deltaY==Math.round(newY)){createjs.Ticker.removeEventListener("tick",tick);t=0;}
stage.update(event);}
Math.easeInOutExpo=function(t,b,c,d){t/=d/2;if(t<1)return c/2*Math.pow(2,10*(t-1))+b;t--;return c/2*(-Math.pow(2,-10*t)+2)+b;};Math.easeInOutQuart=function(t,b,c,d){t/=d/2;if(t<1)return c/2*t*t*t*t+b;t-=2;return-c/2*(t*t*t*t-2)+b;};$switch.on('click',function(e){e.preventDefault();toggleState();});var toggleState=_.throttle(function(){if(state)
{trackOutboundLink("","switch","click","b2c:parcel_send",0);sY=startY;sX=startX;sA=startA;var eY=endY;var eX=endX;var eA=endA;}
else
{trackOutboundLink("","switch","click","b2c:parcel_receive",0);sY=endY;sX=endX;sA=endA;var eY=startY;var eX=startX;var eA=startA;}
deltaY=Math.round((Math.abs(sY)-Math.abs(eY)));deltaX=Math.round((Math.abs(eX)-Math.abs(sX)));deltaA=Math.abs(eA)-Math.abs(sA);createjs.Ticker.removeEventListener("tick",tick);createjs.Ticker.addEventListener("tick",tick);var toload=$stage.hasClass('deliver')?'receive':'deliver';xhr&&xhr.abort();$stage.toggleClass('receive deliver');xhr=$.ajax({url:'?mode='+toload,success:function(data){$('.js_mainnav').fadeOut(200,function(){$('.js_mainnavcontainer').html($(data).find('.js_mainnav')).fadeIn(1000);})
$('.js_maincontent').fadeOut(200,function(){$('.js_maincontent').html($(data).find('.js_maincontent')).fadeIn(1000);addParcelShopAnchor();videoTrigger();newsFeed();jwplayer_init();checkforFocusBoxCycle();setTimeout(function(){window.DPD&&window.DPD.initAfterAjax()},0);});}});state=!state;},1000);$(document).ready(function(){init();});})();(function(){var showTab=function($tab){$tab.siblings('.active + .tabcontent').fadeOut('fast',function(){$tab.next('.tabcontent').fadeIn('fast');});$tab.siblings().removeClass('active').end().addClass('active');trackOutboundLink("","tab_module","select","b2c:deliver:"+$tab.attr("id"),0);DPD.pagenav&&DPD.pagenav.update();};var checkForHash=function(){if(window.location.hash.length>0){var hash=window.location.hash.slice(1);var id=hash.indexOf('!')==0?hash.slice(1):hash;var $tab=$('.js_tabbox #'+id);if($tab.length>0){showTab($tab);}}}
$(document).on('click tap','.js_tabbox .tab',function(e){var $tab=$(e.target).closest('.tab');window.location.hash='!'+$tab.attr('id');});$(window).on('hashchange',function(e){checkForHash();});var init=function(){$('.js_tabbox').each(function(i,v){var $tabbox=$(v);checkForHash()});}
$('document').ready(function(){init();})})();(function(){var DPD=window.DPD||{};var $elements;var ElementCloseHandler={init:function(){$elements=$('.js_close_anywhere');},close:function(target){$elements.each(function(idx,ele){if(ele!==target&&!$.contains(ele,target)){$(ele).removeClass('open');}})}}
$(document).on('mousedown touchstart',function(e){e.stopPropagation();ElementCloseHandler.close(e.target);})
ElementCloseHandler.init();DPD.ElementCloseHandler=ElementCloseHandler;window.DPD=DPD;})();(function(){$(document).on('click','.js_show_on_change input[type=radio], .js_show_on_change select',function(){showOnChange(this);});$(document).ready(function(){var $items=$('.js_show_on_change input[type=radio]:checked');$items.each(function(idx,ele){showOnChange(ele);})});var showOnChange=function(ele){$this=$(ele);var $parent=$this.closest('.js_show_on_change');var $show=$parent.find('.'+$this.data('show'));$parent.find('.show').removeClass('show');$show.addClass('show');}})();(function(){$(document).on('change','.js_togglePackets',function(e){var $this=$(this);var id=$this.val();var $el=$("#"+id);var $extra=$el.find('.js_extra');var $parent=$el.parent();var $oldel=$parent.find(".b2c_country_opened");if($oldel.length>0)
{var $oldextra=$oldel.find('.js_extra');$oldextra.fadeOut('slow');$oldel.removeClass('b2c_country_opened');}
$el.addClass('b2c_country_opened');$extra.fadeIn('slow');$el.on('transitionend',function(){$extra.fadeIn('slow');})})})();(function(){$(document).on('click','.js_toggle-trigger',function(e){var $this=$(e.currentTarget);var $box=$this.closest('.js_togglebox');$box.toggleClass('open');})
$(document).on('click','.js_toggle',function(e){if(e.target==e.currentTarget){$(e.currentTarget).toggleClass('open');}})
$(document).on('click','.js_close',function(e){$(e.target).closest('.js_toggle').toggleClass('open');})})();(function(){$(document).on('click','.js_select',function(e){$this=$(e.currentTarget);if($(e.target).is(':not(li)')){if($(e.target).is(':not(.button)')){$this.toggleClass('open');}}})
$(document).on('click','.js_select .option',function(e){var $this=$(this);var $parent=$this.closest('.js_select');var $fake=$parent.find('.fake');var $select=$parent.find('select');var dataVal=$this.data('val');$fake.text($this.text());if(dataVal!=$select.val()){$select.val(dataVal);$select.trigger('change');}
$parent.removeClass('open').addClass('selected');})
$(document).on('click','.js_submit_contact',function(e){var $this=$(this);var $parent=$this.closest('form');var $select=$parent.find('select');if($select.val()!=0)
{var $div=$parent.closest(".js_select").find(".list");var $list=$div.find("li");var label="";$.each($list,function(i,v){if($select.val()==$(this).data("val"))
{label=$(this).text();}});var url=$parent.find('select option:selected').text();trackOutboundLink("","Contact","Call",label,0);var newWindow=window.open(url);}})})();(function(){var DPD=window.DPD||{};var $pagenav=$('.js_mainnav');var $li;var $contentContainer=$();var previousIndex=undefined;var targets=[];$(document).on('click tap','a[href^="#"]',function(e){pagenav.scroll(e,$(this).attr('href').slice(1));pagenav.update();});if(window.location.hash.length>0){$(window).load(function(){_.defer(function(){pagenav.scroll(undefined,window.location.hash.slice(1));});});}
var pagenav={init:function(){currentIndex=0;$pagenav=$('.js_mainnav');$li=$pagenav.find('li:not(.switch)');pagenav.getData()
pagenav.update();},ajaxInit:function(){location.hash='';pagenav.init();},getData:function(){targets.length=0;$li.each(function(i,elm){var $this=$(this);var $anchor=$this.find('a');var id=$anchor.attr('href');targets.push({'li':$this,'anchor':$anchor,'target':$(id),'id':id,'isTabnav':$(id).hasClass('tab')});})},update:function(){var scrollPosition=$(document).scrollTop();pagenav.getData();var currentActive=_.findIndex(targets,function(ele){return ele.li.hasClass('active');})
var filteredIndex=_.findLastIndex(targets,function(ele){return((ele.isTabnav&&ele.target.hasClass('active'))||(!ele.isTabnav)&&scrollPosition>ele.target.offset().top-250);})
if(filteredIndex>=0&&filteredIndex!==currentActive){pagenav.highlightIndex(filteredIndex);}},onTabSelect:function(e){var $this=$(this);var tabIndex=_.findIndex(targets,function(ele){return ele.id=='#'+$this.attr('id');})
pagenav.highlightIndex(tabIndex);},highlightIndex:function(index){$(targets).each(function(idx,ele){ele.li.toggleClass('active',idx==index);})},scroll:function(e,name){name=name.indexOf('!')==0?name.slice(1):name;var $target=$('#'+name);if($target.length==0){$target=$('a[name="'+name+'"]');if($target.length==0){$target=$('html');return;}}
e&&e.preventDefault();window.location.hash='!'+name;$(document).trigger('softScrollStart');var offset=$target.data('offset')?$target.data('offset'):0;var scrollTop=$target.offset().top-$pagenav.height()+offset;$('html,body').stop().animate({scrollTop:String(scrollTop)},500,"easeInOutQuart",function(){$(document).trigger('softScrollEnd');});}}
pagenav.init();var throttled=_.throttle(pagenav.update,100);$(window).on('scroll',throttled);DPD.pagenav=pagenav;window.DPD=DPD;})();(function(){var DPD=window.DPD||{};var $stickybar=$('.js_stickybar');var lastState=0;var stickybarOffset;var Stickybar={init:function(){$stickybar=$('.js_stickybar');if(!$stickybar.length){return;}
stickybarOffset=stickybarOffset|| $stickybar.offset().top;},update:function(){var isSticky=$(window).scrollTop()>stickybarOffset;if(isSticky==lastState){return;}
$stickybar.toggleClass('sticky',isSticky);lastState=isSticky;}};Stickybar.init();var throttled=_.throttle(Stickybar.update,100);$(window).on('scroll',throttled);DPD.Stickybar=Stickybar;window.DPD=DPD;})();