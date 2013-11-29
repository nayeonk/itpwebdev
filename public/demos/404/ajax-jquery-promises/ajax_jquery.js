$('#some-button').on('click', function() {
	var promise = $.ajax({
		url: 'example.php',
		type: 'GET',
		data: {
			name: 'David',
			school: 'USC'
		}
	});

	promise.done(function(response) {
		$('#ajaxResponse').html(response);
	});

	promise.done(function(response) {
		$('#ajaxResponse').css('color', 'red');
	});
});