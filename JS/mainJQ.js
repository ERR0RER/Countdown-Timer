$(document).ready(function () {
	$(document).on('keypress', function (event) {
		if ($('.start-time').attr('disabled')) {
			console.log("Button disabled");
		} else {
			if (event.keyCode === 13) {
				$('.start-time').trigger('click');
			}
		}
	})




})