var map;
var rlzsheatmapOverlay;

$(function (){
  //地图
  viewMap()
});
function viewMap(){
  var map = new BMap.Map("allmap");    // 创建Map实例
  point = new BMap.Point(120.219506,30.296885);
  map.centerAndZoom(point, 18.5);
  map.setMapStyle({styleJson:styleJson});
  map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放


  var sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
    scale: 0.6,//图标缩放大小
    strokeColor:'#fff',//设置矢量图标的线填充颜色
    strokeWeight: '2',//设置线宽
  });
  var icons = new BMap.IconSequence(sy, '10', '30');
  var icons1 = new BMap.IconSequence(sy, '10', '30');
  var icons2 = new BMap.IconSequence(sy, '10', '30');
  // 创建polyline对象
  var pois = [
    new BMap.Point(120.218805,30.297161),
    new BMap.Point(120.218948,30.296822),
    new BMap.Point(120.219653,30.297241)
  ];
  var polyline =new BMap.Polyline(pois, {
     icons:[icons],
     strokeWeight:'10',//折线的宽度，以像素为单位
     strokeOpacity: 0.8,//折线的透明度，取值范围0 - 1
     strokeColor:"#eee" //折线颜色
  });
  map.addOverlay(polyline);

  var polyline1 = new BMap.Polyline([
    new BMap.Point(120.219561,30.297613),
    new BMap.Point(120.219653,30.297241)
  ], {strokeColor:"#eee",icons:[icons1], strokeWeight:10, strokeOpacity:0.8});
  map.addOverlay(polyline1); 

  var polyline2 = new BMap.Polyline([
    new BMap.Point(120.220298,30.298141),
    new BMap.Point(120.220556,30.297688),
    new BMap.Point(120.219653,30.297241)
  ], {strokeColor:"#eee",icons:[icons2],strokeWeight:10, strokeOpacity:0.8});
  map.addOverlay(polyline2); 

  var polyline3 = new BMap.Polyline([
    new BMap.Point(120.216873,30.295427),
    new BMap.Point(120.219653,30.297241)
  ], {strokeColor:"yellow",icons:[icons2],strokeWeight:10, strokeOpacity:0.8});
  var polyline4 = new BMap.Polyline([
    new BMap.Point(120.222308,30.298968),
    new BMap.Point(120.219653,30.297241)
  ], {strokeColor:"yellow",icons:[icons2],strokeWeight:10, strokeOpacity:0.8});

  //点击操作
  $('.index_gj ul li').on('click', function (){
    $(this).addClass('active')
    map.addOverlay(polyline3);
    map.addOverlay(polyline4);
  })
}



var styleJson=[{
          "featureType": "water",
          "elementType": "all",
          "stylers": {
                    "color": "#021019"
          }
},{
          "featureType": "highway",
          "elementType": "geometry.fill",
          "stylers": {
                    "color": "#000000"
          }
},{
          "featureType": "highway",
          "elementType": "geometry.stroke",
          "stylers": {
                    "color": "#147a92"
          }
},{
          "featureType": "arterial",
          "elementType": "geometry.fill",
          "stylers": {
                    "color": "#000000"
          }
},{
          "featureType": "arterial",
          "elementType": "geometry.stroke",
          "stylers": {
                    "color": "#0b3d51"
          }
},{
          "featureType": "local",
          "elementType": "geometry",
          "stylers": {
                    "color": "#000000"
          }
},{
          "featureType": "land",
          "elementType": "all",
          "stylers": {
                    "color": "#08304b"
          }
},{
          "featureType": "railway",
          "elementType": "geometry.fill",
          "stylers": {
                    "color": "#000000"
          }
},{
          "featureType": "railway",
          "elementType": "geometry.stroke",
          "stylers": {
                    "color": "#08304b"
          }
},{
          "featureType": "subway",
          "elementType": "geometry",
          "stylers": {
                    "lightness": -70
          }
},{
          "featureType": "building",
          "elementType": "geometry.fill",
          "stylers": {
                    "color": "#000000"
          }
},{
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": {
                    "color": "#857f7f"
          }
},{
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": {
                    "color": "#000000"
          }
},{
          "featureType": "building",
          "elementType": "geometry",
          "stylers": {
                    "color": "#022338"
          }
},{
          "featureType": "green",
          "elementType": "geometry",
          "stylers": {
                    "color": "#062032"
          }
},{
          "featureType": "boundary",
          "elementType": "all",
          "stylers": {
                    "color": "#1e1c1c"
          }
},{
          "featureType": "manmade",
          "elementType": "geometry",
          "stylers": {
                    "color": "#022338"
          }
},{
          "featureType": "poi",
          "elementType": "all",
          "stylers": {
                    "visibility": "off"
          }
},{
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": {
                    "visibility": "off"
          }
},{
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": {
                    "color": "#2da0c6",
                    "visibility": "on"
          }
}]