$(function (){
  function zong() {
    let _w = $(window).width(),
        _h = $(window).height(),
        _P = (_w / 1920).toFixed(2),
        _P1 = (_h / 1080).toFixed(2);
    $('body').css({
        'marginTop': -1080 / 2 + 'px',
        'margin-left': -1920 / 2 + 'px'
    });
    $(".index").css({
        'width': '1920px',
        'height': '1080px',
        'transform': 'scale( ' + _P + ',' + _P1 + ' )'
    });
    $('#main').css({
      'width': _w+'px',
      'height': _h+'px'
    })
  }
  zong();
  window.onresize = zong;

  // $('.index_nav ul.nav li').each(function (index){
  //   if(index>0){
  //     $(this).find('em').text(index);
  //   }else{
  //     $(this).find('em').text('总').css('background', '#b13f3e');
  //   }
  // });

  // var btn1=$('.b_nav p a'); 
  // btn1.each(function (index){
  //   $(this).css('background-position', -index*278+'px');
  // });

  // btn1.click(function(){
  //   $(this).addClass('active')
  //          .siblings().removeClass();
  //   var _index=$(this).index()+1;
  //   $('.b_nav_echarts .b_nav'+_index).css('display', 'block').siblings().css('display', 'none');
  // });

  // $('.b_nav_echarts a').click(function (){
  //     $(this).parent().css('display', 'none');
  //     $('.b_nav p a').removeClass('active');
  // });

  //导航移入移出
  var timer2 = null;
  $(".header1").mouseover(function(){
    clearTimeout(timer2);
    $(".header").css({top:'0px'});
  });
  $(".header").mouseout(function(){
    clearTimeout(timer2);
    timer2=setTimeout(function(){
      $(".header").css({top:'-66px'});
    },800)
  });

  //点击操作
  $('.index_gj ul li').on('click', function (){
    $(this).addClass('active')
    map.addOverlay(polyline3);
    map.addOverlay(polyline4);
  })
});