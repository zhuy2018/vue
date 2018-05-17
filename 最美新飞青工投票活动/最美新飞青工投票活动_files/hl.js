$(function(){
     




var browser=navigator.appName

var b_version=navigator.appVersion

var version=b_version.split(";");

var trim_Version=version[1].replace(/[ ]/g,"");


if(browser=="Microsoft Internet Explorer" && (trim_Version=="MSIE8.0" || trim_Version=="MSIE7.0" || trim_Version=="MSIE6.0"))

{    

    // layer.alert('本系统采用前沿的前端标准搭建，为使您获得最佳的用户体验，请将浏览器升级到IE 8.0 以上或者使用手机进行投票！', 9);

   $.layer({
    type: 2,
    shadeClose: false,
    title: false,
    closeBtn: [0, false],
    shade: [0.8, '#000'],
    border: [0],
    offset: ['20px',''],
    area: ['1000px', ($(window).height() - 50) +'px'],
    iframe: {src: 'phone.html'}
});    
   $('#xubox_shade1').css({'opacity':'1','background':'#e5e5e5'});

}

  




var result=[];
// 投票人数初始化
var tpAmount=3;
updateTp(tpAmount);
// layer.alert('您已投票成功！', 9);
$('.tp').click(function(event) {
   if($('.ytp').size()>=tpAmount){
    layer.alert('投票数量已满！', 8);
    return;
  }
  
  if($(this).html()=='投票'){
  $(this).html('已投票').attr('class','ytp');
  var p_val=$(this).parent().parent().parent().find('h5 span').html();
    $(this).parent().parent().parent().find('h5 span').html(parseInt(p_val)+1);
    updateTp(tpAmount);
    result.push($(this).prev().html());
    // "http://localhost/index.php/Home/Tp/"
    // 投票数量到一定程度开始投票
    if($('.ytp').size()==tpAmount){
    $.post('index.php/Home/Tp/',{'result':result},function(data){
    if(data=='1'){
      layer.alert('您已投票成功！', 9);
    }else if(data=='2'){
      layer.alert('您已投票,请勿重投！', 8);
    }else{
      layer.alert('系统发生错误，请与管理员联系！', 8);
    }
    });
    }

}

});



$('.qx').click(function(event) {
if($(this).prev().html()=='已投票'){
   $(this).parent().find('.ytp').attr({
    'class': 'tp'
   }).html('投票');
   updateTp(tpAmount);
   var p_val=$(this).parent().parent().parent().find('h5 span').html();
   $(this).parent().parent().parent().find('h5 span').html(parseInt(p_val)-1);
    result.splice($.inArray('1',result),1);
   }
 
});

$('#info').css('margin-top',$(window).height()-30+'px');

$(window).scroll(function(event) {
  /* Act on the event */
  if($(this).scrollTop()>=$(document).height()-$('.footer-bottom').outerHeight()-$(window).height()){
    $('#info').stop().fadeOut(400);
  }else{
  $('#info').stop().fadeIn(400);  
  $('#info').animate({'opacity':0.8}, 400);
  }
    // document.title=$(this).scrollTop()+'/'+$(document).height()+'/'+$('.footer-bottom').outerHeight()+'/'+$(window).height();
});

$(window).resize(function(event) {
$('#info').css('margin-top',$(window).height()-30+'px');
});



}
)

function updateTp(tpAmount){
  $('#info_tp').html($('.ytp').size());
  $('#info_wtp').html(tpAmount-$('.ytp').size());

}


