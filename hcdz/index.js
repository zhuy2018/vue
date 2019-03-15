var iHtml = '';
var dt,gjc,db,czc,shcl;
var iObj,dt01,dt02,dt03,dt04,dt05;
var dt0,gjc0,db0,czc0,shcl0;
var iObj1,dt11,dt12,dt13,dt14,dt15;
var dt1,gjc1,db1,czc1,shcl1;

abs();
setInterval(function (){
  if( _hc==0 ){
    tolist(iObj); 
  }else{
    tolist(iObj1); 
  }
  $('.index_total p').css('display', 'none');
  abs();
  if($('.index_gj ul li:eq(0)').attr('class')=='active1'){
    $('.index_total p:nth-child(2)').css('display', 'block');
    if(_hc==0){
      seriesDT=[ [{name:'火车东站',value:parseInt(dt01/3)},{name:'地铁C口'}],[{name:'火车东站',value:parseInt(dt01/3)},{name:'地铁B口'}],[{name:'火车东站',value:parseInt(dt01/3)},{name:'地铁A口'}] ];
      seriesDT1=[{name:'地铁C口',value:parseInt(dt01/3)},{name:'地铁B口',value:parseInt(dt01/3)},{name:'地铁A口',value:parseInt(dt01/3)}];
    }else{
      seriesDT =[ [{name:'地铁C口',value:parseInt(dt11/3)},{name:'火车东站'}],[{name:'地铁B口',value:parseInt(dt11/3)},{name:'火车东站'}],[{name:'地铁A口',value:parseInt(dt11/3)},{name:'火车东站'}] ];
      seriesDT1 = [{name:'地铁C口',value:parseInt(dt11/3)},{name:'地铁B口',value:parseInt(dt11/3)},{name:'地铁A口',value:parseInt(dt11/3)}];
    }
  }
  if($('.index_gj ul li:eq(1)').attr('class')=='active1'){
    $('.index_total p:nth-child(3)').css('display', 'block');
    if(_hc==0){
      seriesGJC=[ [{name:'火车东站',value:parseInt(dt02/2)},{name:'公交车(西)'}],[{name:'火车东站',value:parseInt(dt02/2)},{name:'公交车(东)'}] ];
      seriesGJC1=[{name:'公交车(东)',value:parseInt(dt02/2)},{name:'公交车(西)',value:parseInt(dt02/2)}];
    }else{
      seriesGJC=[ [{name:'公交车(西)',value:parseInt(dt12/2)},{name:'火车东站'}],[{name:'公交车(东)',value:parseInt(dt12/2)},{name:'火车东站'}] ];
      seriesGJC1=[{name:'公交车(东)',value:parseInt(dt12/2)},{name:'公交车(西)',value:parseInt(dt12/2)}];
    }
  }
  if($('.index_gj ul li:eq(2)').attr('class')=='active1'){
    $('.index_total p:nth-child(4)').css('display', 'block');
    if(_hc==0){
      seriesDB=[ [{name:'火车东站',value:dt03},{name:'大巴'}] ];
      seriesDB1=[{name:'大巴',value:dt03}];
    }else{
      seriesDB=[ [{name:'大巴',value:dt13},{name:'火车东站'}] ];
      seriesDB1=[{name:'大巴',value:dt13}];
    }
  }
  if($('.index_gj ul li:eq(3)').attr('class')=='active1'){
    $('.index_total p:nth-child(5)').css('display', 'block');
    if(_hc==0){
      seriesCZC=[ [{name:'火车东站',value:parseInt(dt04/2)},{name:'出租车(北)'}],[{name:'火车东站',value:parseInt(dt04/2)},{name:'出租车(南)'}] ];
      seriesCZC1=[{name:'出租车(北)',value:parseInt(dt04/2)},{name:'出租车(南)',value:parseInt(dt04/2)}];
    }else{
      seriesCZC=[ [{name:'出租车(北1)',value:parseInt(dt14/2)},{name:'火车东站'}],[{name:'出租车(南1)',value:parseInt(dt14/2)},{name:'火车东站'}] ];
      seriesCZC1=[{name:'出租车(北1)',value:parseInt(dt14/2)},{name:'出租车(南1)',value:parseInt(dt14/2)}];
    }
  }
  if($('.index_gj ul li:eq(4)').attr('class')=='active1'){
    $('.index_total p:nth-child(6)').css('display', 'block');
    if(_hc==0){
      seriesSHCL=[ [{name:'火车东站',value:parseInt(dt05/2)},{name:'社会车辆'}],[{name:'社会车辆',value:parseInt(dt05/2)},{name:'社会车辆(西)'}],[{name:'火车东站',value:parseInt(dt05/2)},{name:'社会车辆(东)'}] ];
      seriesSHCL1=[{name:'社会车辆(东)',value:parseInt(dt05/2)},{name:'社会车辆',value:parseInt(dt05/2)}];
    }else{
      seriesSHCL=[ [{name:'社会车辆(西)',value:parseInt(dt15/2)},{name:'社会车辆'}],[{name:'社会车辆',value:parseInt(dt15/2)},{name:'火车东站'}],[{name:'社会车辆(东)'},{name:'火车东站',value:parseInt(dt15/2)}] ];
      seriesSHCL1=[{name:'社会车辆(东)',value:parseInt(dt15/2)},{name:'社会车辆(西)',value:parseInt(dt15/2)}];
    }
  }
  createEchart();
  reCreate(seriesDT,seriesDT1,seriesGJC,seriesGJC1,seriesDB,seriesDB1,seriesCZC,seriesCZC1,seriesSHCL,seriesSHCL1); 
}, 30*1000)

function iElist(){
  seriesDT=[ [{name:'火车东站',value:parseInt(dt01/3)},{name:'地铁C口'}],[{name:'火车东站',value:parseInt(dt01/3)},{name:'地铁B口'}],[{name:'火车东站',value:parseInt(dt01/3)},{name:'地铁A口'}] ];
  seriesDT1=[{name:'地铁C口',value:parseInt(dt01/3)},{name:'地铁B口',value:parseInt(dt01/3)},{name:'地铁A口',value:parseInt(dt01/3)}];

  seriesGJC=[ [{name:'火车东站',value:parseInt(dt02/2)},{name:'公交车(西)'}],[{name:'火车东站',value:parseInt(dt02/2)},{name:'公交车(东)'}] ];
  seriesGJC1=[{name:'公交车(东)',value:parseInt(dt02/2)},{name:'公交车(西)',value:parseInt(dt02/2)}];

  seriesDB=[ [{name:'火车东站',value:dt03},{name:'大巴'}] ];
  seriesDB1=[{name:'大巴',value:dt03}];

  seriesCZC=[ [{name:'火车东站',value:parseInt(dt04/2)},{name:'出租车(北)'}],[{name:'火车东站',value:parseInt(dt04/2)},{name:'出租车(南)'}] ];
  seriesCZC1=[{name:'出租车(北)',value:parseInt(dt04/2)},{name:'出租车(南)',value:parseInt(dt04/2)}];

  seriesSHCL=[ [{name:'火车东站',value:parseInt(dt05/2)},{name:'社会车辆'}],[{name:'社会车辆',value:parseInt(dt05/2)},{name:'社会车辆(西)'}],[{name:'火车东站',value:parseInt(dt05/2)},{name:'社会车辆(东)'}] ];;
  seriesSHCL1=[{name:'社会车辆(东)',value:parseInt(dt05/2)},{name:'社会车辆(西)',value:parseInt(dt05/2)}];

  dt=[{name:'地铁C口',value:parseInt(dt01/3)},{name:'地铁B口',value:parseInt(dt01/3)},{name:'地铁A口',value:parseInt(dt01/3)}];
  gjc=[{name:'公交车(东)',value:parseInt(dt02/2)},{name:'公交车(西)',value:parseInt(dt02/2)}]
  db=[{name:'大巴',value:dt03}]
  if(_hc==0){
    czc=[{name:'出租车(北)',value:parseInt(dt04/2)},{name:'出租车(南)',value:parseInt(dt04/2)}]
  }else{
    czc=[{name:'出租车(北1)',value:parseInt(dt14/2)},{name:'出租车(南1)',value:parseInt(dt14/2)}];
  }
  shcl=[{name:'社会车辆(东)',value:parseInt(dt05/2)},{name:'社会车辆(西)',value:parseInt(dt05/2)}]
}

function abs(){
  var _time = getNowFormatDate();
  carList = carList.sort(function(a, b) {
      return b.data - a.data;
  });
  $(carList).each(function (i,obj){
    if((obj.data.substring(8, 10) + obj.data.substring(10, 12)) <= _time){
      iObj = obj;
      //console.log(iObj)
      return false;
    }
  })
  $(iObj).each(function (i, obj){
    dt01=obj.dt;
    dt02=obj.gjc;
    dt03=obj.db;
    dt04=obj.czc;
    dt05=obj.shcl;
  })
  dt0=[ [{name:'火车东站',value:parseInt(dt01/3)},{name:'地铁C口'}],[{name:'火车东站',value:parseInt(dt01/3)},{name:'地铁B口'}],[{name:'火车东站',value:parseInt(dt01/3)},{name:'地铁A口'}] ],
  gjc0=[ [{name:'火车东站',value:parseInt(dt02/2)},{name:'公交车(西)'}],[{name:'火车东站',value:parseInt(dt02/2)},{name:'公交车(东)'}] ],
  db0=[ [{name:'火车东站',value:dt03},{name:'大巴'}] ],
  czc0=[ [{name:'火车东站',value:parseInt(dt04/2)},{name:'出租车(北)'}],[{name:'火车东站',value:parseInt(dt04/2)},{name:'出租车(南)'}] ],
  shcl0=[ [{name:'火车东站',value:parseInt(dt05/2)},{name:'社会车辆'}],[{name:'社会车辆',value:parseInt(dt05/2)},{name:'社会车辆(西)'}],[{name:'火车东站',value:parseInt(dt05/2)},{name:'社会车辆(东)'}] ];

  carList1 = carList1.sort(function(a, b) {
      return b.data - a.data;
  });
  $(carList1).each(function (i,obj){
    if((obj.data.substring(8, 10) + obj.data.substring(10, 12)) <= _time){
      iObj1 = obj;
      return false;
    }
  })
  $(iObj1).each(function (i, obj){
    dt11=obj.dt;
    dt12=obj.gjc;
    dt13=obj.db;
    dt14=obj.czc;
    dt15=obj.shcl;
  })
  dt1=[ [{name:'地铁C口',value:parseInt(dt11/3)},{name:'火车东站'}],[{name:'地铁B口',value:parseInt(dt11/3)},{name:'火车东站'}],[{name:'地铁A口',value:parseInt(dt11/3)},{name:'火车东站'}] ],
  gjc1=[ [{name:'公交车(西)',value:parseInt(dt12/2)},{name:'火车东站'}],[{name:'公交车(东)',value:parseInt(dt12/2)},{name:'火车东站'}] ],
  db1=[ [{name:'大巴',value:dt13},{name:'火车东站'}] ],
  czc1=[ [{name:'出租车(北1)',value:parseInt(dt14/2)},{name:'火车东站'}],[{name:'出租车(南1)',value:parseInt(dt14/2)},{name:'火车东站'}] ],
  shcl1=[ [{name:'社会车辆(西)',value:parseInt(dt15/2)},{name:'社会车辆'}],[{name:'社会车辆',value:parseInt(dt15/2)},{name:'火车东站'}],[{name:'社会车辆(东)'},{name:'火车东站',value:parseInt(dt15/2)}] ];
}

tolist(iObj)
function tolist(obj){
  var date1=new Date();
  var iHtml1='';
  iHtml1+='<h1>数据时间：'+date1.getFullYear()+'-'+(date1.getMonth()+1)+'-'+date1.getDate()+' '+obj.data.substring(8, 10)+':'+obj.data.substring(10)+'</h1>';
  iHtml1+='<p><span>地铁交通换乘:</span>'+ obj.dt +' 人</p>';
  iHtml1+='<p style="display:none;"><span>公交车交通换乘:</span>'+ obj.gjc +' 人</p>';
  iHtml1+='<p style="display:none;"><span>大巴交通换乘:</span>'+ obj.db +' 人</p>';
  iHtml1+='<p style="display:none;"><span>出租车交通换乘:</span>'+ obj.czc +' 人</p>';
  iHtml1+='<p style="display:none;"><span>社会车辆交通换乘:</span>'+ obj.shcl +' 人</p>';
  $('.index_total1').html(iHtml1);
}

$(function (){
  zong();
  window.onresize = zong;

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
    },200)
  });
  function zong(){
    var _w = $(window).width(),
        _h = $(window).height(),
        _P = (_w / 1920).toFixed(2),
        _P1 = (_h / 975).toFixed(2);

    $("#pupList").css({
      'top': (_h-40)+'px'
    });
    $(".pupList_style").css({
      'top': (_h-118)+'px'
    });
    if(_h<800){
      $(".index_gj").css({
        'top': (_h-130)+'px',
        'transform': 'scale( ' + _P + ',' + _P1 + ' )'
      });
      $(".index_total").css({
        'top': (_h-390)+'px',
        'right': '31%',
        'transform': 'scale( ' + _P + ',' + _P1 + ' )'
      });
    }else{
      $(".index_gj").css({
        'top': (_h-190)+'px',
        'transform': 'scale( ' + _P + ',' + _P1 + ' )'
      });
      $(".index_total").css({
        'top': (_h-560)+'px',
        'right': '32%',
        'transform': 'scale( ' + _P + ',' + _P1 + ' )'
      });
    }
  }

  var on=true;
  $('#pupList a.fg').on('click', function (){
    if(on){
      $('.pupList_style').css('display', 'block');
    }else{
      $('.pupList_style').css('display', 'none');
    }
    on=!on;
  })
  $('.pupList_style').on('click', function (){
    $(this).css('display', 'none');
    on=true;
  });
  $("#wyl").click(function(){
    map.setMapStyle({styleJson:styleJson});
  });
  $("#hy").click(function(){
    map.setMapStyle({style:'dark'});
  });
  $("#gdh").click(function(){
    map.setMapStyle({style:'grayscale'});
  });
  $("#zsz").click(function(){
    map.setMapStyle({styleJson:styleJson1});
  });
});
window.onload=function (){
  $('.anchorBL').css('display', 'none');
}