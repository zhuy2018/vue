map.addOverlay(labelDc);
map.addOverlay(labelDc1);
map.addOverlay(labelDc2);   

var echartmap;
var myChart;

var seriesDT=[ [{name:'火车东站',value:parseInt(dt01/3)},{name:'地铁C口'}],[{name:'火车东站',value:parseInt(dt01/3)},{name:'地铁B口'}],[{name:'火车东站',value:parseInt(dt01/3)},{name:'地铁A口'}] ],
  seriesDT1=[{name:'地铁C口',value:parseInt(dt01/3)},{name:'地铁B口',value:parseInt(dt01/3)},{name:'地铁A口',value:parseInt(dt01/3)}];
var seriesGJC=[],seriesGJC1=[],
    seriesDB=[],seriesDB1=[],
    seriesCZC=[],seriesCZC1=[],
    seriesSHCL=[],seriesSHCL1=[];

//第一层点击
var _hc=0;
$('.index_gj p a').on('click', function (){
  _hc=$(this).attr('id')
  $(this).addClass('active')
         .siblings().removeClass();

  iElist();
  seriesDT=[],seriesDT1=[],
  seriesGJC=[],seriesGJC1=[],
  seriesDB=[],seriesDB1=[],
  seriesCZC=[],seriesCZC1=[],
  seriesSHCL=[],seriesSHCL1=[];
  if( _hc==0 ){
    seriesDT = seriesDT.concat( dt0 );
    seriesDT1 = seriesDT1.concat( dt );
    tolist(iObj)
  }else{
    seriesDT = seriesDT.concat( dt1 );
    seriesDT1 = seriesDT1.concat( dt ); 
    tolist(iObj1)
  }
  createEchart();
  reCreate(seriesDT,seriesDT1,seriesGJC,seriesGJC1,seriesDB,seriesDB1,seriesCZC,seriesCZC1,seriesSHCL,seriesSHCL1);
  map.removeOverlay(labelGjc);
  map.removeOverlay(labelGjc1);
  map.removeOverlay(labelDb);
  map.removeOverlay(labelCzc);
  map.removeOverlay(labelCzc1);
  map.removeOverlay(labelCzc2);
  map.removeOverlay(labelCzc3);
  map.removeOverlay(labelShcl);
  map.removeOverlay(labelShcl1);
  $('.index_gj ul li').removeClass('active1');
  $('.index_gj ul li:eq(0)').addClass('active1');
});

//第二层点击
$('.index_gj ul li').bind('click', function(){
  $(this).toggleClass('active1');
  if( $('.active1').size() == 0 ){
    $(this).addClass('active1')
    alert('至少选择一个')
    return;
  }
  carClick();
  iElist();
  function maCap(){
    $('.index_total').css('display', 'block')
    seriesDT=[],seriesDT1=[],
    seriesGJC=[],seriesGJC1=[],
    seriesDB=[],seriesDB1=[],
    seriesCZC=[],seriesCZC1=[],
    seriesSHCL=[],seriesSHCL1=[];
    $('.index_total p').css('display', 'none');
    if($('.index_gj ul li:eq(0)').attr('class')=='active1'){
      seriesDT = seriesDT.concat( dt0 );
      seriesDT1 = seriesDT1.concat( dt );
      $('.index_total p:nth-child(2)').css('display', 'block');
    }
    if($('.index_gj ul li:eq(1)').attr('class')=='active1'){
      seriesGJC = seriesGJC.concat( gjc0 );
      seriesGJC1 = seriesGJC1.concat( gjc );
      $('.index_total p:nth-child(3)').css('display', 'block');
    }
    if($('.index_gj ul li:eq(2)').attr('class')=='active1'){
      seriesDB = seriesDB.concat( db0 );
      seriesDB1 = seriesDB1.concat( db );
      $('.index_total p:nth-child(4)').css('display', 'block');
    }
    if($('.index_gj ul li:eq(3)').attr('class')=='active1'){
      seriesCZC = seriesCZC.concat( czc0 );
      seriesCZC1 = seriesCZC1.concat( czc );
      $('.index_total p:nth-child(5)').css('display', 'block');
    }
    if($('.index_gj ul li:eq(4)').attr('class')=='active1'){
      seriesSHCL = seriesSHCL.concat( shcl0 );
      seriesSHCL1 = seriesSHCL1.concat( shcl );
      $('.index_total p:nth-child(6)').css('display', 'block');
    }
    createEchart();
    reCreate(seriesDT,seriesDT1,seriesGJC,seriesGJC1,seriesDB,seriesDB1,seriesCZC,seriesCZC1,seriesSHCL,seriesSHCL1);
  }

  function maCap1(){
    $('.index_total').css('display', 'block')
    seriesDT=[],seriesDT1=[],
    seriesGJC=[],seriesGJC1=[],
    seriesDB=[],seriesDB1=[],
    seriesCZC=[],seriesCZC1=[],
    seriesSHCL=[],seriesSHCL1=[];
    $('.index_total p').css('display', 'none');
    if($('.index_gj ul li:eq(0)').attr('class')=='active1'){
      seriesDT = seriesDT.concat( dt1 );
      seriesDT1 = seriesDT1.concat( dt );
      $('.index_total p:nth-child(2)').css('display', 'block');
    }
    if($('.index_gj ul li:eq(1)').attr('class')=='active1'){
      seriesGJC = seriesGJC.concat( gjc1 );
      seriesGJC1 = seriesGJC1.concat( gjc );
      $('.index_total p:nth-child(3)').css('display', 'block');
    }
    if($('.index_gj ul li:eq(2)').attr('class')=='active1'){
      seriesDB = seriesDB.concat( db1 );
      seriesDB1 = seriesDB1.concat( db );
      $('.index_total p:nth-child(4)').css('display', 'block');
    }
    if($('.index_gj ul li:eq(3)').attr('class')=='active1'){
      seriesCZC = seriesCZC.concat( czc1 );
      seriesCZC1 = seriesCZC1.concat( czc );
      $('.index_total p:nth-child(5)').css('display', 'block');
    }
    if($('.index_gj ul li:eq(4)').attr('class')=='active1'){
      seriesSHCL = seriesSHCL.concat( shcl1 );
      seriesSHCL1 = seriesSHCL1.concat( shcl );
      $('.index_total p:nth-child(6)').css('display', 'block');
    }
    createEchart();
    reCreate(seriesDT,seriesDT1,seriesGJC,seriesGJC1,seriesDB,seriesDB1,seriesCZC,seriesCZC1,seriesSHCL,seriesSHCL1);
  }

  if( _hc==0 ){
    maCap(); 
  }else{
    maCap1(); 
  }
})

createEchart = function(option) {
  echartmap = new BMapExt();
  echartmap._init();

  var container = echartmap._echartsContainer;
  var option = {
      color: ['gold','aqua','lime'],
      title: {
          text: ''
      },
      /*tooltip: {
          trigger: 'item',
          formatter: function(v) {
              return v[1].replace(':', ' > ') + (v[2] != '' ? ('[' + v[2] + ']') : '');
          }
      },*/
      series: [{
          name: 'p1',
          type: 'map',
          mapType: 'none',
          data: [],
          geoCoord: {
              'p1': [121.4648, 31.2891],
              'p2': [116.4551, 40.2539],
          },
          markLine: {
              smooth: true,
              effect: {
                  show: true,
                  scaleSize: 1,
                  period: 30,
                  color: '#fff',
                  shadowBlur: 10
              },
              itemStyle: {
                  normal: {
                      borderWidth: 1,
                      lineStyle: {
                        type: 'solid',
                        shadowBlur: 10
                      }
                  }
              },
              data: [
                [{
                    name: 'p1',
                    value: 95
                },
                {
                    name: 'p2',
                    value: 95
                }]
              ]
          },
          markPoint: {
              symbol: 'emptyCircle',
              symbolSize: function(v) {
                  return 10 + v / 10
              },
              effect: {
                  show: true,
                  shadowBlur: 0
              },
              itemStyle: {
                  normal: {
                      label: {
                          show: false
                      }
                  }
              },
              data: [{
                  name: 'p1',
                  value: 95,
                  id: 1
              },{
                  name: 'p2',
                  value: 95,
                  id: 1
              }]
          }

      }]
  };
  if (myChart && myChart.dispose) {
      myChart.dispose();
  }
  myChart = echartmap.initECharts(container);
  window.onresize = myChart.resize;
  echartmap.setOption(option, true);
}
reCreate = function(seriesDT,seriesDT1,seriesGJC,seriesGJC1,seriesDB,seriesDB1,seriesCZC,seriesCZC1,seriesSHCL,seriesSHCL1) {
  var option = {
      color: ['green', 'yellow', '#008fff', '#cf3f0c', 'red'],
      /*tooltip: {
          trigger: 'item',
          backgroundColor : 'rgba(15,91,149,0.6)',
          borderRadius : 5,
          formatter: function(v) {
            var temp = '<div style="padding:16px 24px;border:0px;">';
                temp += '<span style="font-size:24px;font-family: 黑体;">' + v[1].split(' > ')[0] + '</span>';
                if( v[1].split(' > ')[1]!=undefined ){
                  temp += '<span style="font-size:24px;font-family: 黑体;display:inline-block;margin:0 20px;">→</span>';
                  temp += '<span style="font-size:24px;font-family: 黑体;">' + v[1].split(' > ')[1] + '</span>';
                }
                if(v[2]!=''){
                  temp += '<p style="font-size:48px;font-family: 黑体;margin: 20px 0 10px;">' + v[2] + '</p>';
                }
                temp += '</div>';
            return temp;
            //return v[1].replace(':', ' > ') + (v[2] != '' ? ('[' + v[2] + ']') : '');
          }
      },*/
      series: [
        //地铁
        {
            name: name,
            type: 'map',
            mapType: 'none',
            data: [],
            geoCoord:{
              '火车东站': [120.219653,30.297241],
              '地铁C口': [120.218805,30.297161],
              '地铁B口': [120.219561,30.297613],
              '地铁A口': [120.220298,30.298141]
            },
            markLine: {
                smooth: true,
                effect: {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                      label:{
                        position:'inside',
                        textStyle: {
                          color: 'rgba(0,0,0,0)',
                          fontSize: 16
                        }
                      },
                      borderWidth: 3,
                      lineStyle: {
                        type: 'solid',
                        shadowBlur: 10
                      }
                    }
                },
                data: seriesDT
            }/*,
            markPoint: {
                symbol:'emptyCircle',
                symbolSize : function (v){
                    return 10
                },
                effect: {
                    show: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        }
                    }
                },
                data: seriesDT1
            }*/
        },

        //公交车
        {
            name: name,
            type: 'map',
            mapType: 'none',
            data: [],
            geoCoord:{
              '火车东站': [120.219653,30.297241],

              '公交车(西)': [120.21673, 30.295661],
              '公交车(东)': [120.222298, 30.298969]
            },
            markLine: {
                smooth: true,
                effect: {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                      label:{
                        position:'inside',
                        textStyle: {
                          color: 'rgba(0,0,0,0)',
                          fontSize: 16
                        }
                      },
                      borderWidth: 3,
                      lineStyle: {
                        type: 'solid',
                        shadowBlur: 10
                      }
                    }
                },
                data: seriesGJC
            }/*,
            markPoint: {
                symbol:'emptyCircle',
                symbolSize : function (v){
                    return 10
                },
                effect: {
                    show: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        }
                    }
                },
                data: seriesGJC1
            }*/
        },
        //大巴
        {
            name: name,
            type: 'map',
            mapType: 'none',
            data: [],
            geoCoord:{
              '火车东站': [120.219653,30.297241],

              '大巴': [120.221284,30.299703],
            },
            markLine: {
                smooth: true,
                effect: {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                      label:{
                        position:'inside',
                        textStyle: {
                          color: 'rgba(0,0,0,0)',
                          fontSize: 16
                        }
                      },
                      borderWidth: 3,
                      lineStyle: {
                        type: 'solid',
                        shadowBlur: 10
                      }
                    }
                },
                data: seriesDB
            }/*,
            markPoint: {
                symbol:'emptyCircle',
                symbolSize : function (v){
                    return 10
                },
                effect: {
                    show: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        }
                    }
                },
                data: seriesDB1
            }*/
        },
        //出租车
        {
            name: name,
            type: 'map',
            mapType: 'none',
            data: [],
            geoCoord:{
              '火车东站': [120.219653,30.297241],

              '出租车(北)': [120.218806,30.297906],
              '出租车(南)': [120.220369,30.29676],

              '出租车(北1)': [120.219004,30.297699],
              '出租车(南1)': [120.220229,30.296905]
            },
            markLine: {
                smooth: true,
                effect: {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                      label:{
                        position:'inside',
                        textStyle: {
                          color: 'rgba(0,0,0,0)',
                          fontSize: 16
                        }
                      },
                      borderWidth: 3,
                      lineStyle: {
                        type: 'solid',
                        shadowBlur: 10
                      }
                    }
                },
                data: seriesCZC
            }/*,
            markPoint: {
                symbol:'emptyCircle',
                symbolSize : function (v){
                    return 10
                },
                effect: {
                    show: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        }
                    }
                },
                data: seriesCZC1
            }*/
        },
        //社会车辆
        {
            name: name,
            type: 'map',
            mapType: 'none',
            data: [],
            geoCoord:{
              '火车东站': [120.219653,30.297241],

              '社会车辆(西)': [120.215135,30.29722],
              '社会车辆':[120.21651,30.29522],
              '社会车辆(东)': [120.222941,30.299083],
            },
            markLine: {
                smooth: true,
                effect: {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                      label:{
                        position:'inside',
                        textStyle: {
                          color: 'rgba(0,0,0,0)',
                          fontSize: 16
                        }
                      },
                      borderWidth: 3,
                      lineStyle: {
                        type: 'solid',
                        shadowBlur: 10
                      }
                    }
                },
                data: seriesSHCL
            }/*,
            markPoint: {
                symbol:'emptyCircle',
                symbolSize : function (v){
                    return 10
                },
                effect: {
                    show: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        }
                    }
                },
                data: seriesSHCL1
            }*/
        }
      ]
  };
  echartmap.setOption(option, true);
  echartmap._echartsContainer.style.display = 'block';
}
createEchart();
reCreate(seriesDT,seriesDT1,seriesGJC,seriesGJC1,seriesDB,seriesDB1,seriesCZC,seriesCZC1,seriesSHCL,seriesSHCL1); 
