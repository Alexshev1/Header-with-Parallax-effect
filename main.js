$(function () {
	//
	//
	// Preloader
	// var $preloader = $('#page-preloader'),
	// 	   $spinner = $preloader.find('.spinner');
	//	$spinner.fadeOut();
	//	$preloader.delay(350).fadeOut('slow');

	//Параллакс от движения мыши
	if ($(window).width() > 960)
	{
		$('body').parallax({
			'elements': [
			{	
				'selector': '.ellipse',
				'properties': {
					'x': {
						'right': {
							'initial': 0,
							'multiplier': 0.04, // если хочу сдвиг на 10 пикселей ставлю = 1
							'unit': '%',
							'invert': false
						}
					},
					'y': {
						'top': {
							'initial': 25,
							'multiplier': 0.1,
							'unit': '%',
							'invert': true
						}
					}
				}
			}
		]
	});
	};
});