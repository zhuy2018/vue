var playflag = true;    //当前显示的是播放按钮还是暂停按钮   true为播放

$(function (){
  zong();
  window.onresize = zong;
  
  // Car();
  // Car1();
  BannerCilck();

  var xdata=['高铁','地铁','公交车','出租车','社会车辆'],
      sdata=[900,200, 334, 690, 430],
      sdata1=[767, 1356, 1622, 326, 200];
  showHalfYearYkrs(xdata, sdata,sdata1);

  var pig_data=[
      {value:335, name:'高铁'},
      {value:310, name:'地铁'},
      {value:274, name:'公交车'},
      {value:235, name:'出租车'},
      {value:400, name:'社会车辆'}
  ];
  pie_bj(pig_data);
  pie_bj1(pig_data);

  var like_data=[1242, 560, 2008, 3861, 300, 6044,5041]
  index_kll_like(like_data)
  heat_map();

  fn1();
  fn3();
})
//汽车
function Car(){
  var obtn;
  var css = {left:'1100px'};
  setTimeout(function (){
    $('#carList').animate(css,2000,rowBack);
  }, 1800)
  function rowBack(){
    if(css.left==='310px'){
      obtn=false;
      css.left='1100px';
    }else if(css.left==='1100px'){
      setTimeout(function (){
        obtn=true;
      }, 100)
      if(obtn){
        css.left='310px';
        $('#carList').css({
          'left': '310px'
        })
        obtn=false;
      }
    }
    $('#carList').animate(css,2500,rowBack);
  }
}
function Car1(){
  var obtn;
  var css = {left:'1100px'};
  setTimeout(function (){
    $('#carList1').animate(css,2000,rowBack);
  }, 1800);
  function rowBack(){
    if(css.left==='400px'){
      obtn=false;
      css.left='1100px';
    }else if(css.left==='1100px'){
      setTimeout(function (){
        obtn=true;
      }, 100)
      if(obtn){
        css.left='400px';
        $('#carList1').css({
          'left': '400px'
        })
        obtn=false;
      }
    }
    $('#carList1').animate(css,2500,rowBack);
  }
}

//生成切分成14个口，位置，和数量
renLike();
function renLike(){
  var html='';
  for(let i=0;i<14;i++){
    html +='<div style="left:'+(180+i*54)+'px;top:'+(161+i*2)+'px;" class="index_ren_animation'+(i+1)+'">';
    html +='</div>';
  }
  $('.index_bj_top > ul li:first-child .index_ren_animation').html( html )

  $('.index_bj_top > ul li:first-child .index_ren_animation > div').each((i, obj)=>{
    For(getRandom(3, 25),$(obj),"ren"+(getRandom(1, 12)))
  });
}

function fn1(){
  //主站房
  $('.index_bj_top > ul li:first-child .ren_like3').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12').addClass("ren"+getRandom(1, 12))
                    .animate({ top: "385px",opacity: "1" },600)
                    .animate({ left: "1120px" },Math.ceil(1500))
                    .animate({ top: getRandom(380, 410)+"px" }, Math.ceil(800))
                    .animate({ left: getRandom(330, 1100)+"px" }, getRandom(3000, 6000))
                    .animate({ top: getRandom(380, 410)+"px" }, getRandom(2000, 4000))
                    .animate({ left: "1150px",top: "385px",opacity: "0" },getRandom(1000000, 10000000))

  //出入口
  $('.index_bj_top > ul li:first-child .ren_like').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12').addClass("ren"+getRandom(1, 12)).animate({ top: "250px",opacity: "1" },Math.ceil(1500))
                .animate({ left: parseInt(getRandom(380, 842))+"px" }, getRandom(3000, 6000))
                .animate({ top: parseInt(getRandom(300, 420))+"px" }, getRandom(4000, 10000))
                .animate({ left: "670px",top: "195px",opacity: "0" },getRandom(1000000, 10000000))
  $('.index_bj_top > ul li:first-child .ren_like1').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12').addClass("ren"+getRandom(1, 12)).animate({ top: "250px",opacity: "1" },getRandom(500, 8000))
                .animate({ left: parseInt(getRandom(380, 842))+"px" }, getRandom(5000, 8000))
                .animate({ top: parseInt(getRandom(300, 420))+"px" }, getRandom(3000, 6000))
                .animate({ left: "670px",top: "195px",opacity: "0" },getRandom(1000000, 10000000))
  
  //出租车下课处
  $('.index_bj_top > ul li:first-child .ren_like4').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12').addClass("ren"+getRandom(1, 12)).animate({ top: "540px",opacity: "1" },300).animate({ top: "470px" },3000)
                .animate({ left: parseInt(getRandom(360, 1050))+"px" }, getRandom(5000, 6000))
                .animate({ top: parseInt(getRandom(400, 470))+"px" }, getRandom(4000, 6000))
                .animate({ left: "670px",top: "530px",opacity: "0" },getRandom(1000000, 10000000))

  $('.index_bj_top > ul li:first-child .ren_like4_1').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12').addClass("ren"+getRandom(1, 12)).animate({ top: "540px",opacity: "1" },300).animate({ top: "470px",opacity: "1" },5000)
                  .animate({ left: parseInt(getRandom(360, 1050))+"px" }, getRandom(1500, 10000))
                  .animate({ top: parseInt(getRandom(340, 470))+"px" }, getRandom(2000, 8000))
                  .animate({ left: "750px",top: "530px",opacity: "0" },getRandom(1000000, 10000000))
}

// 第三页
function fn3(){
  $('.index_bj_top > ul li:last-child .ren_like4').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12').addClass("ren"+getRandom(1, 12)).animate({ top: "390px",opacity: "1" },1200)
                                                .animate({ left: "350px",opacity: "0" },2000)
                                                .animate({ top: "465px",left: "413px" },0)

  $('.index_bj_top > ul li:last-child .ren_like4_1').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12').addClass("ren"+getRandom(1, 12)).animate({ top: "390px",opacity: "1" },3000)
                                                .animate({ left: "580px" },5000)
                                                .animate({ left: "653px",opacity: "0" },2000)
                                                .animate({ top: "465px",left: "413px" },0) 

  $('.index_bj_top > ul li:last-child .ren_like4_z1').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12')
                                .addClass("ren"+getRandom(1, 12))
                                .animate({ top:"460px",opacity:"1" },getRandom(800, 1000))
                                .animate({ top:"250px", },5000)
                                .animate({ top:"210px",opacity:"0" },5000)
                                .animate({ top: "511px",left: "880px" },0)

  $('.index_bj_top > ul li:last-child .ren_like4_z2').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12')
                                .addClass("ren"+getRandom(1, 12))
                                .animate({ top: "360px",opacity:"1" },2000)
                                .animate({ left:"370px" }, 1000)
                                .animate({ top: "480px",opacity:"0" },2000)
                                .animate({ top: "428px",left: "258px" },0)

  $('.index_bj_top > ul li:last-child .ren_like4_z3').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12')
                                .addClass("ren"+getRandom(1, 12))
                                .animate({ top: "470px",opacity:"1" },2000)
                                .animate({ top: "360px" },3000)
                                .animate({ left: "600px" },1000)
                                .animate({ top: "260px" },3000)
                                .animate({ top: "200px",opacity:"0" },1000)
                                .animate({ top: "510px",left: "570px" },0)

  $('.index_bj_top > ul li:last-child .ren_like').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12').addClass("ren"+getRandom(1, 12)).animate({ top: "270px",opacity: "1" },getRandom(800, 1000))
                                            .animate({ left: "430px" },1000)
                                            .animate({ top: "305px" },1500)
                                            .animate({ left: "470px",opacity: "0" },600)
                                            .animate({ top: "252px",left: "470px" },0)

  $('.index_bj_top > ul li:last-child .ren_like1').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12').addClass("ren"+getRandom(1, 12)).animate({ top: "300px",opacity: "1" },getRandom(1000, 1500))
                                            .animate({ left: "470px",opacity: "0" },2000)
                                            .animate({ top: "252px",left: "555px" },0)
  $('.index_bj_top > ul li:last-child .ren_like1_1').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12').addClass("ren"+getRandom(1, 12)).animate({ top: "280px",opacity: "1" },1000)
                                                .animate({ left: "730px" },3000)
                                                .animate({ top: "315px" },1000)
                                                .animate({ left: "660px",opacity: "0" },2000)
                                                .animate({ top: "255px",left: "677px" },0)
  $('.index_bj_top > ul li:last-child .ren_like1_2').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12').addClass("ren"+getRandom(1, 12)).animate({ top: "315px",opacity: "1" },2000)
                                                .animate({ left: "650px",opacity: "0" },3000)
                                                .animate({ top: "255px",left: "746px" },0)
  $('.index_bj_top > ul li:last-child .ren_like1_3').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12').addClass("ren"+getRandom(1, 12)).animate({ top: "325px",opacity: "1" },1000)
                                                .animate({ left: "950px",opacity: "0" },5000)
                                                .animate({ top:  "255px",left: "797px" },0)
  $('.index_bj_top > ul li:last-child .ren_like1_4').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12').addClass("ren"+getRandom(1, 12)).animate({ top: "290px",opacity: "1" },1000)
                                                .animate({ left: "1030px" },3000)
                                                .animate({ top: "330px" },1000)
                                                .animate({ left: "970px",opacity: "0" },1000)
                                                .animate({ top: "260px",left: "976px" },0)
  $('.index_bj_top > ul li:last-child .ren_like1_5').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12').addClass("ren"+getRandom(1, 12)).animate({ top: "330px",opacity: "1" },1500)
                                                .animate({ left: "960px",opacity: "0" },3000)
                                                .animate({ top: "260px",left: "1040px" },0)  

  $('.index_bj_top > ul li:last-child .ren_like4_2').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12').addClass("ren"+getRandom(1, 12)).animate({ top: "400px",opacity: "1" },4000)
                                                .animate({ top: "410px",opacity: "0" },1000)
                                                .animate({ top: "481px",left: "667px" },0)
  $('.index_bj_top > ul li:last-child .ren_like4_3').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12').addClass("ren"+getRandom(1, 12)).animate({ top: "390px",opacity: "1" },300)
                                                .animate({ left: "690px" },3000)
                                                .animate({ left: "660px",opacity: "0" },1000)
                                                .animate({ top: "481px",left: "730px" },0)
  $('.index_bj_top > ul li:last-child .ren_like4_4').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12').addClass("ren"+getRandom(1, 12)).animate({ top: "390px",opacity: "1" },2200)
                                                .animate({ left: "700px" },4000)
                                                .animate({ left: "640px",opacity: "0" },1000)
                                                .animate({ top: "481px",left: "782px" },0)
  $('.index_bj_top > ul li:last-child .ren_like4_5').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12').addClass("ren"+getRandom(1, 12)).animate({ top: "405px",opacity: "1" },3000)
                                                .animate({ left: "970px",opacity: "0" },800)
                                                .animate({ top: "488px",left: "990px" },0)
  $('.index_bj_top > ul li:last-child .ren_like4_6').removeClass('ren1 ren2 ren3 ren4 ren5 ren6 ren7 ren8 ren9 ren10 ren11 ren12').addClass("ren"+getRandom(1, 12)).animate({ top: "400px",opacity: "1" },2000)
                                                .animate({ left: "1000px" },3000)
                                                .animate({ left: "970px",opacity: "0" },1000)
                                                .animate({ top: "488px",left: "1058px" },0)        
}

function zong() {
    let _w = $(window).width(),
        _h = $(window).height(),
        _P = (_w / 1920).toFixed(2),
        _P1 = (_h / 1080).toFixed(2);
    $('body').css({
        'marginTop': -1080 / 2 + 'px',
        'margin-left': -1920 / 2 + 'px'
    });
    $(".index_bj").css({
        'width': '1920px',
        'height': '1080px',
        'transform': 'scale( ' + _P + ',' + _P1 + ' )'
    });
}

//热力图
function heat_map(){
  var iH = '';
  for(var i=0;i<28;i++){
    iH += '<span class="s'+Math.floor(Math.random()*5 + 1)+'" style=" top:' + Math.floor(Math.random()*290+10) + 'px; left:' + Math.floor(Math.random()*770+100) + 'px; "></span>';
  }
  $('.heatmapOverlay_co').html(iH)

  $(".index_bj_top_rlt_co a.click").click(function(){
    if( playflag ){
      $(this).addClass("play");
      playflag = false;
    }else{
       $(this).removeClass("play");
      playflag = true;
    }
  })
}

//大图点击事件
function BannerCilck(){
  $('.index_bj_top ul').css('width', $('.index_bj_top ul li').length*1418+'px')
  var btn1=$('.index_kll_top1 ul li'); 
  btn1.click(function(){
    $(this).addClass('active')
           .siblings().removeClass();
    var _index=$(this).index();
    $('.index_bj_top ul').css('left', -1418*_index+'px');
  });
}

function For(iNow,iDiv,aaa){
  $(iDiv).html()
  var html1='';
  for(var i=0;i<iNow;i++){
    if( iNow <=5 ){
      html1 +='<span class="'+aaa+'" style="left:'+(getRandom(1, 54))+'px;top:'+(getRandom(5, 170))+'px;"></span>';
    }else if(  iNow >5 && iNow <=10  ){
      html1 +='<span class="'+aaa+'" style="left:'+(getRandom(1, 54))+'px;top:'+(getRandom(5, 170))+'px;"></span>';
    }else if(  iNow >10 && iNow <=15  ){
      html1 +='<span class="'+aaa+'" style="left:'+(getRandom(1, 54))+'px;top:'+(getRandom(5, 170))+'px;"></span>';
    }else if(  iNow >15 && iNow <=20  ){
      html1 +='<span class="'+aaa+'" style="left:'+(getRandom(1, 54))+'px;top:'+(getRandom(5, 170))+'px;"></span>';
    }else if(  iNow >20 && iNow <=25  ){
      html1 +='<span class="'+aaa+'" style="left:'+(getRandom(1, 54))+'px;top:'+(getRandom(5, 170))+'px;"></span>';
    }
  }
  $(iDiv).html( html1 )
}

//东站枢纽客流量
function index_kll_like(like_data){
  var option1 = {
      grid: {
        left: '15%',
        borderWidth:'0'
      },
      tooltip: {
        backgroundColor : '#19486e',
        borderColor : '#228f96',
        borderRadius : 10,
        borderWidth: 1,
        textStyle:{
          fontSize:16,
          align:'center'
        },
        trigger: 'item'
      },
      xAxis: { 
          data: ['00:00','04:00','08:00','12:00','16:00','20:00','24:00'],   
          axisLine:{
              lineStyle:{
                  width:1,  
                  color:'#444d6e'  
              }
          },   
          axisLabel:{
              textStyle:{
                  color:"#fff",              
                  fontFamily:"Arial",     
                  fontSize:16               
              },  
              rotate:0,  
              interval:0  
          }, 
          splitLine:{
            show: false
          }
      },  
      yAxis: { 
          splitLine:{
            show: false,
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: ['#fff'],
                width: 1,
                type: 'solid'
            }
          },
          type: 'value' ,
          axisLabel:{ 
              textStyle:{
                  color:"#fff",              
                  fontFamily:"Arial",     
                  fontSize:16       
              }
          },
          axisLine:{  
              lineStyle:{  
                  width:1,
                  color:'#444d6e'  
              }
          }
      },  
      series: [  
          {  
              name:'客流量',  
              type:'line',
              symbol:'circle',
              symbolSize:15,   
              data:like_data,  
              smooth:false,   
              itemStyle:{  
                  normal:{
                      color:'#02d081',
                      lineStyle:{
                          width:2,
                          color:'#02d081',  
                          type:'solid' 
                      },
                  }  
              },
              animationDelay: function (idx) {
                  return idx * 100;
              } 
          }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
          return idx * 5;
      }
  };
  var barChart1 = echarts.init(document.getElementById('index_kll_like')); 
  barChart1.setOption(option1);
}

//各交通方式客流量
function showHalfYearYkrs(xdata, sdata,sdata1){
  var formatterMax;
  var option = {
      grid:{
        x:55,
        x2:0,
        y:10,
        y2:30,
        borderWidth:0
      },
      tooltip : {
        backgroundColor : '#19486e',
        borderColor : '#228f96',
        borderRadius : 10,
        borderWidth: 1,
        textStyle:{
          fontSize:16,
          align:'center'
        },
        trigger: 'item',
        formatter: '{b} <br/>{a} : {c} 人'
      },
      xAxis : [ {
        type : 'category',
        splitLine : 'false',// 不显示分割线
        axisLabel : {
          textStyle : {
            color : "#FFFFFF",
            fontSize:16
          }
        },
        boundaryGap : [ 0, 0.01 ],
        data : xdata
      }],
      yAxis : [{
        type : 'value',
        axisLabel : {
          formatter: function (value, index) {
                  formatterMax=value;
                    return value;
                },
          textStyle : {
            color : "#FFFFFF",
            fontSize:16
          }
        },
        splitLine : 'false'
      }],
      series : [
        {
          name : '到达',
          type : 'bar',
          barWidth : 30,
          barCategoryGap : '60%', // 类目间柱形距离，默认为类目间距的20%，可设固定值
          itemStyle : {
            normal : {
              color: ['rgba(255,255,255,0)']
            }
          },
          data : sdata
        },
        {
          name : '离开',
          type : 'bar',
          barWidth : 35,
          barCategoryGap : '60%', // 类目间柱形距离，默认为类目间距的20%，可设固定值
          itemStyle : {
            normal : {
              color: ['rgba(255,255,255,0)']
            }
          },
          data : sdata1
        }
    ],
    noDataLoadingOption:{
      text: '暂无数据',
      effect: 'dynamicLine'
    }
  };
  var barChart = echarts.init(document.getElementById('traffic_transportation')); 
  barChart.setOption(option);
  xHtml(formatterMax,sdata,sdata1,xdata)
}
function xHtml(formatterMax,sdata,sdata1,xdata){
  var _html='';
  var zgsj=formatterMax;
  function add_toThousands(num) {
      var num = (num || 0).toString();
      var result = '';
      while (num.length > 3) {
          result = ',' + num.slice(-3) + result;
          num = num.slice(0, num.length - 3);
      }
      if (num) { result = num + result; }
      return result;
  }
  for(var i=0;i<sdata.length;i++){
    if(i==0){
      _html+='<li style="margin-left:52px">'
    }else{
      _html+='<li style="margin-left:85px">'
    }
    if( parseInt((sdata1[i]/zgsj)*212) <80 ){
      if(  parseInt((sdata1[i]/zgsj)*212) <30  ){
        _html+='<img style="left:36%;height:'+ parseInt((sdata1[i]/zgsj)*212) +'px" src="img/traffic_transportation_icon5.png" />'
      }else{
        _html+='<img style="left:36%;height:'+ parseInt((sdata1[i]/zgsj)*212) +'px" src="img/traffic_transportation_icon4.png" />'
      }
    }else{
      _html+='<img style="left:36%;height:'+ parseInt((sdata1[i]/zgsj)*212) +'px" src="img/traffic_transportation_icon2.png" />'
    }
    
    if( parseInt((sdata[i]/zgsj)*212) <80 ){
      if( parseInt((sdata[i]/zgsj)*212) <30 ){
        _html+='<img style="left:0%;height:'+ parseInt((sdata[i]/zgsj)*212) +'px" src="img/traffic_transportation_icon6.png" />'
      }else{
        _html+='<img style="left:0%;height:'+ parseInt((sdata[i]/zgsj)*212) +'px" src="img/traffic_transportation_icon3.png" />'
      }
    }else{
      _html+='<img style="left:0%;height:'+ parseInt((sdata[i]/zgsj)*212) +'px" src="img/traffic_transportation_icon1.png" />'
    }
    
    _html+='</li>'
  }
  $('.index_bottom1_echarts ul.six_month').html(_html);
}

//高铁到达量
function pie_bj(pig_data){
  var myChart1 = echarts.init(document.getElementById("index_bottom1_pie_bj")); 
  var option1 = { 
      tooltip : {
        backgroundColor : '#19486e',
        borderColor : '#228f96',
        borderRadius : 10,
        borderWidth: 1,
        textStyle:{
          fontSize:14,
          align:'center'
        },
        trigger: 'item',
        formatter: '{a}:{c} 人'
      },
      series : [
          {
              name:'高铁到达量',
              type:'pie',
              radius : '55%',
              center: ['50%', '50%'],
              data: pig_data,
              roseType: 'radius',
              labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 1)'
                    }
                }
              },
              label: {
                normal: {
                    fontFamily:"Arial",
                    fontSize:14,
                    formatter: "{b}\n {c}人",
                    color: '#fff'
                }
              },
              itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 150,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
          }
      ],
      noDataLoadingOption:{
        text: '暂无数据',
             effect: 'dynamicLine'
      }
  };  
  myChart1.setOption(option1,true);
}

//高铁离开量
function pie_bj1(pig_data){
  var myChart1 = echarts.init(document.getElementById("index_bottom1_pie_bj1")); 
  var option1 = {   
      tooltip : {
        backgroundColor : '#19486e',
        borderColor : '#228f96',
        borderRadius : 10,
        borderWidth: 1,
        textStyle:{
          fontSize:14,
          align:'center'
        },
        trigger: 'item',
        formatter: '{a}:{c} 人'
      },
      series : [
          {
              name:'高铁到达量',
              type:'pie',
              radius : '55%',
              center: ['50%', '50%'],
              data: pig_data,
              roseType: 'radius',
              labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 1)'
                    }
                }
              },
              label: {
                normal: {
                    fontFamily:"Arial",
                    fontSize:14,
                    formatter: "{b}\n {c}人",
                    color: '#fff'
                }
              },
              itemStyle: {
                normal: {
                    color: '#bf660a',
                    shadowBlur: 150,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
          }
      ],
      noDataLoadingOption:{
        text: '暂无数据',
             effect: 'dynamicLine'
      }
  };  
  myChart1.setOption(option1,true);
}

function getRandom(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}