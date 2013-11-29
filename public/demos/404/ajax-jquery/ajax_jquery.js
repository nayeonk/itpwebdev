$('#some-button').on('click', function() {
	$.ajax({
		url: 'example.php',
		type: 'GET',
		data: {
			name: 'David',
			school: 'USC'
		},
		success: function(msg) {
			$('#ajaxResponse').html(msg);
		}
	});
});