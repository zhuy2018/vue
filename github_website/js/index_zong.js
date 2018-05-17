//首页和归档分类标题获取	
var data=[
	{"href":'codeguide.html',"name":"编码规范","timer":'2016-09-18',"em":'编码规范 by @mdo'},
	{"href":'css_preload.html',"name":"css3预加载效果","timer":'2016-09-19',"em":'css3预加载效果'},
	{"href":'sort.html',"name":"js五种排序","timer":'2016-09-21',"em":'冒泡、快速、选择、插入、希尔排序'},
	{"href":'four_algorithms.html',"name":"一行代码数组四算法","timer":'2016-09-29',"em":'一行代码 数组求加、减、乘、除'},
	{"href":'webapp_skills.html',"name":"web app开发技巧总结","timer":'2016-09-29',"em":'web app开发技巧总结'},
	{"href":'jQuery_mouse.html',"name":"jQuery获取鼠标滑入div的方向","timer":'2016-09-30',"em":'jQuery获取鼠标滑入div的方向'},
	{"href":'Js_phone.html',"name":"js判断手机型号","timer":'2016-09-30',"em":'js判断手机型号'},
	{"href":'css3_tab.html',"name":"纯css3自适滑动选项卡","timer":'2016-09-30',"em":'纯css3自适滑动选项卡'},
	{"href":'event_prohibited.html',"name":"禁止事件冒泡和禁止默认事件","timer":'2016-10-09',"em":'JS事件——禁止事件冒泡和禁止默认事件'},
	{"href":'jquery_notes.html',"name":"jQuery笔记","timer":'2016-10-09',"em":'Miaov_jQuery笔记'},
	{"href":'scrolling_number.html',"name":"号码滚动抽奖效果","timer":'2016-10-11',"em":'号码滚动抽奖效果'},
	{"href":'form_special.html',"name":"网站中比较不错的表单特效","timer":'2016-10-18',"em":'网站中比较不错的表单特效'},
	{"href":'picture_suspension.html',"name":"简约且简单的图片悬浮效果","timer":'2016-11-8',"em":'简约且简单的图片悬浮效果'},
	{"href":'larger_picture.html',"name":"JQuery鼠标移到小图显示大图效果","timer":'2016-12-1',"em":'JQuery鼠标移到小图显示大图效果'},
	{"href":'mouse_mask.html',"name":"鼠标移入方框遮罩效果","timer":'2017-1-17',"em":'鼠标移入方框遮罩效果'},
	{"href":'percentage.html',"name":"原生js百分比进度条效果","timer":'2017-1-17',"em":'js百分比进度条效果'},
	{"href":'text_circularly_all.html',"name":"不同文字循环滚动效果","timer":'2017-1-17',"em":'不同文字循环滚动效果'},
	{"href":'gets_current_week_date.html',"name":"获取当前周、上一周、下一周日期","timer":'2017-3-17',"em":'获取当前周、上一周、下一周日期'},
	{"href":'navigation.html',"name":"导航切换效果","timer":'2017-4-10',"em":'导航切换效果'},
	{"href":'canvas_circle_progress.html',"name":"canvas圆环进度","timer":'2017-4-19',"em":'canvas圆环进度'},
	{"href":'css3_switch.html',"name":"最简单的纯CSS3滑动开关按钮特效","timer":'2017-4-27',"em":'最简单的纯CSS3滑动开关按钮特效'},
	{"href":'two_select_value.html',"name":"两个select变化的值检测","timer":'2017-4-28',"em":'两个select变化的值检测'},
	{"href":'time_controls.html',"name":"时间控件","timer":'2017-5-2',"em":'时间控件'},
	{"href":'shopping_all_choose.html',"name":"购物车的全选，全不选，局部全选，全选判定","timer":'2017-5-8',"em":'购物车的全选，全不选，局部全选，全选判定'},
	{"href":'interception_string.html',"name":"截取字符串的各种操作","timer":'2017-5-17',"em":'截取字符串的各种操作'},
	{"href":'all_the_selected.html',"name":"全选反选","timer":'2017-5-23',"em":'全选反选'},
	{"href":'canvas_percentage_animation.html',"name":"Canvas百分比动画","timer":'2017-6-15',"em":'Canvas百分比动画'},
	{"href":'to_choose_repeat.html',"name":"一组选重复不选和Git常用命令表","timer":'2017-7-3',"em":'一组选重复不选和Git常用命令表'},
	{"href":'can_drag_progress.html',"name":"可拖拽进度条","timer":'2017-7-6',"em":'可拖拽进度条'},
	{"href":'select_multiple_deletion.html',"name":"select选择，重复选择删除","timer":'2017-7-13',"em":'select选择，重复选择删除'},
	{"href":'JSON_online_editor.html',"name":"JSON在线编辑器","timer":'2017-7-25',"em":'JSON在线编辑器'},
	{"href":'array_sort_json.html',"name":"数组排序json","timer":'2017-8-31',"em":'数组排序json'},
	{"href":'drag_sorting.html',"name":"拖动排序","timer":'2017-9-4',"em":'拖动排序'},
	{"href":'data_page.html',"name":"数据分页和密码强度","timer":'2017-9-20',"em":'数据分页和密码强度'},
	{"href":'table_row_telescopic.html',"name":"表格行展开与伸缩","timer":'2017-10-18',"em":'表格行展开与伸缩'},
	{"href":'commonly_functions.html',"name":"常用函数封装整理","timer":'2017-10-24',"em":'常用函数封装整理'},
	{"href":'two_layers_for_loop.html',"name":"两层for循环(原生JS和JQ)","timer":'2017-11-13',"em":'两层for循环(原生JS和JQ)'},
	{"href":'echarts_histogram_pie.html',"name":"echarts(柱状图,双层饼图,双柱状图)","timer":'2017-12-11',"em":'echarts(柱状图,双层饼图,双柱状图)'},
	{"href":'echarts_histogram_pie.html',"name":"手动切换和自动切换","timer":'2018-02-28',"em":'手动切换和自动切换'},
];
console.log( data );

$(function(){
	var zong={
		init:function(){
			this.prepend();
			this.strUrl();
			this.click();
		},
		prepend:function(){ //每个页面头部和导航HTML
			iHtml="";
			iHtml+='<h1>';
			iHtml+='<a href="javascript:;">Outstanding McDull</a>';
			iHtml+='</h1>';
			iHtml+='<nav>';
			iHtml+='<ul>';
			iHtml+='<li>';
			iHtml+='<a href="index.html">首页</a>';
			iHtml+='<a href="archives.html">文章归档</a>';
			iHtml+='</li>';
			iHtml+='</ul>';
			iHtml+='</nav>';
			$('body').prepend( iHtml );
		},
		strUrl:function(){  //获取当前网页名称
			var strUrl = window.location.href;
			var arrUrl = strUrl.split("/");
			var strPages = arrUrl[arrUrl.length - 1];
			//console.log( strPages );

			//获取select的默认val和下拉选择时动态获取val值
			// $(".select").change(function(){
			// 	console.log( $(".select").val() );
			// }); 
			// console.log( $(".select").val() );
		},
		click:function(){  //头部点击切换大图
			$('h1>a').click(function (){
				var headImgArr = [];
					headImgArr.push("image/hdbg01.jpg"), 
					headImgArr.push("image/hdbg02.jpg"),
					headImgArr.push("image/hdbg03.jpg"),
					headImgArr.push("image/hdbg04.jpg");
				var item = Math.floor(Math.random() * (headImgArr.length));
				$('body').css({
					"background-image": "url(" + headImgArr[item] + ")"
				});
			});
		}
	}
	zong.init();
});