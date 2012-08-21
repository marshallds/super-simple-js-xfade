
	$(document).ready(function() {
		var bannerRotate = function() {
			var keyFrames = $('#banner > div');
			var frameCount = 0;

			keyFrames.each(function(index) {
				var frame = $(this);
				frame.attr({'sequence': index});
				frameCount=index;
			});

			var c=0;

			setInterval(function() {
				$('div[sequence='+c+']').fadeOut(1000);
				(c<frameCount) ? c++ : c=0;
				$('div[sequence='+c+']').fadeIn(1000);
			}, 5000);
		};

		bannerRotate();
	});

