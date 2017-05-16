/*
  菜单移动
 * */

$(function(){
		
		$(window).scroll( //滚轮滑动  头部固定
			function() {
				if($(document).scrollTop() > 0) {
					$('#header').css({
						'position': 'fixed','left':'0'
					})
					$('.MainContent').css({
						'padding-top': '40px'
					})
				}
			}
		)
		$('#header a').click(function() { //顶级 头部去除 fixed固定
			
			$('#header').css({
				'position': 'relative'
			})
			$('.MainContent').css({
				'padding-top': '0px'
			})
		})
		
		// 轮播插件
		
//		var mySwiper = new Swiper('.swiper-container', {
//			autoplay: 500000,//可选选项，自动滑动
//			pagination : '.swiper-pagination',
//		})


		
	  
})
