function mart(){
	var txt = $('.list-center .center .list-txt');
	var right = $('.list-center .center .list-right');
	right.css('margin-top',(txt.height()-right.height())/2);
}

$(function(){

	var y = 0;
	var y2 = 0;
	document.body.addEventListener('touchstart',function(e){
		y = e.touches[0].clientY;
	},false);
	document.body.addEventListener('touchmove',function(e){
		y2 = e.touches[0].clientY;
		if(y2 > y){
			$('.container .btm').slideDown();
		}else{
			$('.container .btm').slideUp();
		}
	},false);

	mart();

	$('.luxian_top input').bind('touchstart',function(){
		var index = $(this).index();
		$('.luxian_top input').removeClass().eq(index).addClass('cur');
		$('.luxian_center .luxian_btm>div').hide().eq(index).show();
	});

	$('.index_btm').closest('.container').css('margin-top',$('.index_btm').height()+20);
	$('.top').closest('.container').css('margin-top',$('.top').height()+10);
});