(function($){
		$(function(){
		var box = $('<div/>', { 'style': 'border: 1px solid gray; position: absolute;'}).appendTo('body');
		$('.reference').hover(
			function(){
				$('body').bind('mousemove.footnotehover',function(e){
						box.position({
								'my': 'top center',
								'at': 'center',
								'of': e
							}
						);
					}
				);
				box.html($($(this).find('a').attr('href')).clone()).show();
			},
			function(){
				$('body').unbind('mousemove.footnotehover');
				box.hide().empty();
			}
		);
	}
);
})(jQuery);
