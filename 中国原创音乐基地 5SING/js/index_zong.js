$(function (){
	//屏幕滚动条大于400显示返回顶部
	$(window).scroll(function (){
		if( $(this).scrollTop() > 400 ){
			$('.dingbu').css('opacity', 1);
		}else{
			$('.dingbu').css('opacity', 0);
		}
	});
	
	//返回顶部
	$('.dingbu .btn').click(function (){
		$('body,html').animate({scrollTop:0},500);
		return false;
	});
	
	//上传 app	
	$('#upload').find('li').hover(function (){
		$(this).find('a.nav_app_til').css( 'color', '#70c404' );
		$(this).find('ul').fadeIn(100);
	}, function (){
		$(this).find('a.nav_app_til').css( 'color', '#fff' );
		$(this).find('ul').fadeOut(40);
	});
	
	//热门音乐人
	$('.artist_pic').hover(function (){
		$(this).addClass('on');
	}, function (){
		$(this).removeClass('on');
	});
	$('.gr').click(function (){
		alert('敬请期待');
	});
	
	//音乐现场
	$('.live_wrap_bd dt').hover(function (){
		$(this).find('.a_class').fadeIn(100);
	}, function (){
		$(this).find('.a_class').fadeOut(40);
	});
	$('.live_wrap_hd').find('.live_open').click(function (){
		alert('敬请期待');
	});
	
	//右侧二维码显示
	$('.app_qr a').hover(function (){
		$(this).siblings('.app_download').fadeIn(100);
	}, function (){
		$(this).siblings('.app_download').fadeOut(40);
	});
	
	//选项卡
	xxk( '.album_main','#navs li','#box1 div','album_tit_clo'  );
	xxk( '.share_main','#r_navs li','#box2 div','album_tit_clo'  );
	xxk( '#nav_song','#nav_l li','#adiv .s_r_box','song_rank_nav_clo'  );
	function xxk( div,li,wdiv,classen ){
		$( div+':gt(0)').hide();
		var btn=$(li);
		btn.click(function(){
			$(this).addClass(classen)
				   .siblings().removeClass();
			$(wdiv).eq(btn.index(this)).css('display', 'block')
									   .siblings().css('display', 'none');
		});	
	}
	
	//原创推荐 
	$('.PlayerWidget_play').click(function (){
		window.open(' http://5sing.kugou.com/fm/m/ ');
	});
	
	//大图切换
	var arr = 
	[
		'http://www.miaov.com/student/syd/images/1.jpg',
		'http://www.miaov.com/student/syd/images/2.jpg',
		'http://www.miaov.com/student/syd/images/3.jpg',
		'http://www.miaov.com/student/syd/images/4.jpg',
		'http://www.miaov.com/student/syd/images/5.jpg',
		'http://www.miaov.com/student/syd/images/6.jpg',
	];
	
	var oBox = $$('#banner_list');
	var oNum = $$('#num');
	var listA = $$('a',oNum);
	var oPrev = $$('.prev')[0];
	var oNext = $$('.next')[0];
	var oUl = $$('ul',oBox)[0];
	var aLi = $$('li',oUl);
	var aImg = $$('img',oBox);
	var index = 0, timer = null; //焦点图片的位置。
	
	for( var i=0; i<arr.length; i++){
	  oNum.innerHTML += '<a href="javascript:;"></a>';  
	}
	listA[0].className = 'current';
	oPrev.onclick = function(){
		index--;
		index = (index + arr.length)%arr.length;
		fnMove( 'l' , 650, index );
		fnTab( index );
	};
	oNext.onclick =toRight;
	oPrev.onmouseover = oNext.onmouseover = function(){
	  clearInterval( timer );  
	};
	
	oPrev.onmouseout = oNext.onmouseout = toNext;
	toNext();
	
	
	for(var i=0; i<listA.length; i++){
	  
	  listA[i].index = i;
	  listA[i].onclick = listA[i].onmouseover = function(){
		if( index == this.index )return;
		fnTab( this.index );
		
		index < this.index  ? 
		  fnMove( 'r' , -650 , this.index ) : fnMove( 'l' , 650 , this.index );
		
		index = this.index;
		
	  };  
	  
	}
	
	
	function toRight(){
	  index ++;
	  index %= arr.length;
	  
	  fnMove( 'r' , -650, index );
	  fnTab( index );
	};
	
	function fnTab( index ){
		for(var i=0; i<listA.length; i++){
		  listA[i].className = '';  
		}
		listA[index].className = 'current';
	}
	
	function fnMove( str , target , index ){
	  aLi[1].className = str;
	  aImg[1].src = arr[index];
	  
	  doMove( oUl, 'left', 20, target , function(){
		aImg[0].src = arr[index];
		oUl.style.left = '0px';
	  });
	}
	function toNext(){
	   clearInterval( timer );
	   timer = setInterval( function(){
			toRight();
			toNext();
		}, 4000);
	  
	}
	
	function $$( v , p ){
		
		var type = typeof v , s;
			
		if( type == 'string' ){
			s = v.charAt();
			if( s == '#') return document.getElementById( v.substring(1) );
			if( s == '.') return (p||document).getElementsByClassName( v.substring(1) );
			return (p || document).getElementsByTagName( v );
		}
		
		if( type == 'function' ){
			window.onload = v;	
		} 
		
		return v;
		
	}
	function doMove(obj,attr,speed,target,endFn){
	
		speed = parseFloat(getStyle(obj,attr)) < target ? 
					Math.abs(speed) : -Math.abs(speed);
	
		clearInterval( obj.timer );
		obj.timer = setInterval(function(){
	
			var iCur = parseFloat(getStyle(obj,attr)) + speed;
	
			if( (speed > 0 && iCur >= target) || (speed < 0 && iCur <= target) ){
				iCur = target;
			}
	
			obj.style[attr] = iCur + 'px';
	
			if(iCur == target){
				clearInterval( obj.timer );
				if(typeof endFn === 'function')endFn();
			}
	
		},20);
	
	}
	
	function getStyle(obj,attr){
	
		if( obj.currentStyle ){
			return obj.currentStyle[attr];
		}
	
		return getComputedStyle(obj)[attr];
	
	}
	
	/*var $uli=$('#banner_list').find('li');
	var $num_a=$('#num').find('a');
	var prenindex=0;
	
	$uli.slice(1).css('left', 650);
	$num_a.click(function (){
		var index=$(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		
		if( prenindex<index ){
			$uli.eq(index).css('left', 650);
			$uli.eq(prenindex).animate( {left:-650}, 300 );
		}else if( prenindex>index ){
			$uli.eq(index).css('left', -650);
			$uli.eq(prenindex).animate( {left:650}, 300 );
		}
		
		$uli.eq(index).animate( {left:0}, 300 );
		prenindex=index;
	});
	
	var speed=0;
	$('#next_aa').click(function (){
		speed++;
		if( speed>$uli.length-1 ){
			speed=0;
			$uli.css('left', 650);
			$uli.eq(speed-1).animate( {left:-650}, 300 );
		}
		//$uli.eq(n-1).css('left', 650);
		//$uli.eq(n-1).animate( {left:-650}, 300 );
		$uli.eq(n).animate( {left:0}, 300 );
		console.log( n );
	});*/

	
	//搜索
	$('.seh_b').click(function (){
		var $txtKey=$('#txtKey').val();
		if( $txtKey==0 ){
			alert('请输入搜索内容');
		}else{
			window.open( 'http://search.5sing.kugou.com/?keyword='+$txtKey );
			return false;
		}
	});
	
	//推荐资讯 好歌抢先听
	tab( '#news_list','ul','#news_prev','#news_next','flipInY','flipInY' );
	tab( '#musicList_01','ol','#prevPage1','#nextPage1','animation fadeInLeft','animation fadeInLeft' );
	tab( '#musicList_02','ol','#prevPage2','#nextPage2','animation fadeInLeft','animation fadeInLeft' );
	tab( '#musicList_03','ol','#prevPage3','#nextPage3','animation fadeInLeft','animation fadeInLeft' );
	
	function tab( odiv,oli,xz,xy,class1,class2 ){
		var oul=$( odiv ).find( oli );
		var n=0;
		$(xz).click(function (){
			n--;
			if( n<0 ){
				n=oul.length-1;
			}
			oul.eq(n).addClass(class1).show().siblings().hide().removeClass(class2);
		});
		$(xy).click(function (){
			n++;
			if( n>oul.length-1 ){
				n=0;
			}
			oul.eq(n).addClass(class1).show().siblings().hide().removeClass(class2);
		});	
	}
	
	//换一换
	function rndNum(m, n) {
		return parseInt(Math.random() * (n - m) + m)
	};
	function ajax( adiv_ajax ){
		var sHtml='';
		$.ajax({
			url:'http://service.5sing.kugou.com/song/webRecommend?jsoncallback=?&t='+ rndNum(1, 10) +'&p='+ rndNum(1, 10) +'&pz=10&_='+new Date().getTime(),
			dataType:'jsonp',
			success:function (data){
				for( var i=0;i<data.length;i++ ){
					sHtml += '<dl class="clearfix">';
					sHtml += '<dt><strong class="sl_name"><a href="http://5sing.kugou.com/yc/'+ data[i].id +'.html" class="f_gb" target="_blank" title=" '+data[i].songname+' ">'+data[i].songname+'</a></strong></dt>';
					sHtml += '<dd class="sl_d1"><a href="http://5sing.kugou.com/18430055" class="f_g9 ell" target="_blank">'+data[i].nickname+'</a></dd>';
					sHtml += '<dd class="sl_d2 g9"><span class="b">'+data[i].click+'</span>次播放</dd><dd class="sl_d3"><a href="http://5sing.kugou.com/yc/'+ data[i].id +'.html" songinfo=" '+ data[i].songtype + '$' + data[i].id +' " class="btn bni play_btn PlayerWidget_play" title="播放">试听</a></dd>';
					sHtml += '</dl>';
					$(adiv_ajax).html( sHtml );
				}
			}
		});	
	}
	$('#RefreshYc').click(function (){
		ajax('#start_song_list');
	});
	$('#RefreshFc').click(function (){
		ajax('#opasite_song_list');
	});
});