// 海岛风光滚动动画效果

(function ($) {
	$.fn.extend({
		"Slider":function(options){
			return new Slider(this,options);
		}
	});

	function Slider(ts,ops){
		this.ts = ts;
		ops = ops ? ops : {};
		this._count = ts.find('ul>li').length; // 图片数量
		this._width = ops._width ? ops._width : ts.width(); // 图片高度
		this._height = ops._height ? ops._height : ts.height() / this._count; // 图片宽度
		this._img_speed = ops.img_speed ? ops.img_speed : 1500; // 图片切换速度
		this._img_stop_speed = ops.stop_speed ? ops.stop_speed : 2000; // 切换停留时间
		this.default_start = ops.default_start;
		this._circle = ops.circle;


		/* 初始化 */
		this.initial();
		if(this._count < 2){
			return;
		}
		this.setup();
		this.touchStart();
	}

	Slider.prototype = {

			index : 0,
			default_arr : {
				touch_start_x:0,
				touch_move_x:0,
				touch_end_x:0,
				touch_start_y:0,
				touch_move_y:0,
				touch_end_y:0,
			},

			/* 初始化 */
			initial : function(){
				this.ts.css({"width":this._width,"height":this._height,"overflow":"hidden"});
				this.ts.find('ul').css({"width":this._width*this._count,"height":this._height,"float":"left"});
				this.ts.find('ul>li>img').css({"width":this._width,"height":this._height,'display':'block',"float":"left"});
				var s = this.ts.find('ul').clone(true);
				this.ts.html('<div class="ul_list"></div>');
				this.ts.find('.ul_list').html(s);


				// 圆点
				if(this._circle && this._count >= 2){
					var txt = '<div class="circle" style="margin-top: -20px;margin-right: 5px;float: right;"><ul>';
					for(var i=0;i<this._count;i++){
						txt += '<li val="' + i + '"></li>';
					}
					txt += '</ul></div>';
					this.ts.append(txt);
					this.ts.find('.circle ul li').css({'width':'10px','height':'10px','border-radius':'8px','background-color':'#FFFFFF','float':'left','margin':'0px 2px',}).eq(0).css('background-color','#EA8124');
					var ts = this;
					$('.circle ul li').click(function(){
						var idx = $(this).attr('val');
						if(idx == ts.index) return;
						ts.index = idx-1;
						if(idx > ts.index){
							ts.next();
						}else{
							ts.prev();
						}
					});
				}
			},

			/* 开始 */
			setup : function(){
				var ts = this;
				setTimeout(function(){
					ts.next();
					ts.tm = setInterval(function(){
						ts.next();
					},ts._img_stop_speed+ts._img_speed);
				},ts._img_stop_speed);
			},

			Circle : function(index){
				if(this._circle){
					this.ts.find('.circle ul li').css('background-color','#FFFFFF').eq(index).css('background-color','#EA8124');
				}
			},

			/* 动画 */
			Direact : function(index,flag){

				// 正在运行
				if((parseFloat(this.ts.find('ul').css('margin-left')) % this._width) != 0){
					return;
				}
				if(index < 0){
					var s = this.ts.find('.ul_list ul').clone(true);
					s.css("margin-left",-(this._width*this._count));
					this.ts.find('.ul_list ul').addClass('drop_del');
					this.ts.find('.ul_list').prepend(s).css({"width":this._width*this._count*this.ts.find('.ul_list ul').length,"height":this._height,"overflow":"hidden"});
					var ts_del = this.ts.find('.ul_list .drop_del');
					this.Circle(this.index+1);
					this.index = this._count-1;
					this.ts.find('.ul_list ul').eq(0).animate({"margin-left":-this._width*(this._count-1)},this._img_speed,function(){
						ts_del.remove();
					});
					return;
				}else if((index+1) > this._count){
					var s = this.ts.find('.ul_list ul').clone(true);
					s.css("margin-left","0px");
					this.ts.find('.ul_list ul').addClass('drop_del');
					this.ts.find('.ul_list').append(s).css({"width":this._width*this._count*this.ts.find('.ul_list ul').length,"height":this._height,"overflow":"hidden"});
					var ts_del = this.ts.find('.ul_list .drop_del');
					this.Circle(this.index-1);
					ts_del.animate({"margin-left":-this._width*index},this._img_speed,function(){
						ts_del.remove();
					});
					this.index = 0;
					return;
				}
				if(flag){
					this.Circle(this.index+1);
				}else{
					this.Circle(this.index-1);
				}
				index = index ? index : 0;
				this.index = index;
				this.ts.find('.ul_list ul').animate({"margin-left":-this._width*index},this._img_speed);
			},

			/* 下一个 */
			next : function(){
				this.Direact(this.index+1,true);
			},

			/* 上一个 */
			prev : function(){
				this.Direact(this.index-1,false);
			},

			/* 触摸 */
			touchStart : function(){
				// 手指滑动切换
				var default_arr = this.default_arr;
				var ts = this;
				$(this.ts)[0].addEventListener('touchstart',function(e){
					default_arr.touch_start_x = e.touches[0].clientX;
					e.preventDefault();//阻止出现滚动条
				},false);
				$(this.ts)[0].addEventListener('touchmove',function(e){
					default_arr.touch_move_x = e.changedTouches[0].clientX;
				},false);
				$(this.ts)[0].addEventListener('touchend',function(e){
					if(default_arr.touch_move_x > default_arr.touch_start_x){
						ts.prev();
					}else if(default_arr.touch_move_x < default_arr.touch_start_x){
						ts.next();
					}
				},false);
			}
	};
})(jQuery);