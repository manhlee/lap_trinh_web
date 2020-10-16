 
 $(document).ready(function(){
 	var docao = $(window).height();
	 	$('.big-img').css({'height': docao + 'px'});
	 $(window).resize(function(){
	 	var docao = $(window).height();
	 	$('.big-img').css({'height': docao + 'px'});
	 });
 });
 // bây giờ chỉ có chúa mới hiểu
 // move menu
 /* cách để làm thò ra thụt vào
 trong thẻ muốn làm hiệu ứng thực hiện css transition để nó có thể di chuyển và sử dụng right:250px để ẩn
 thẻ đó đi, sau đó viết thêm một class move-left có css là right:0px để hiện nó cái mình ẩn đi
 sau đó dùng jquery để add class vào
 */
 $(document).ready(function(){
 	$('.btn-menu').click(function(){
 		$('nav').addClass('move-left');
 	});
 	$('.btn-cancel').click(function(){
 		$('nav').removeClass('move-left');
 	});
 });

 //ham cuon chuot
 $(document).ready(function(){
 	$('.big-img a.btn.btn-default').click(function(){
 		$('html,body').animate({scrollTop:$('.text-under-bigimg').offset().top},500);
 		return false;
 	});
 	$('.clickHome').click(function(){
 		$('html,body').animate({scrollTop:0},1000);
 	});
 	$('.clickAbout').click(function(){
 		$('html,body').animate({scrollTop:$('.text-under-bigimg').offset().top},500);
 		return false;
 	});
 	
 	$('.clickServices').click(function(){
 		$('html,body').animate({scrollTop:$('.bg-blue').offset().top},500);
 		return false;
 	});
 	$('.click3').click(function(){
 		$('html,body').animate({scrollTop:$('._4img').offset().top},500);
 		return false;
 	});
 	$('.click4').click(function(){
 		$('html,body').animate({scrollTop:$('.map').offset().top},500);
 		return false;
 	});
 	
 });