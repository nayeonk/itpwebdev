var totalCount = 0;

function facebookPageQuery(pageName) {
	var promise = $.ajax({
		url: 'facebook-page-fetch.php',
		type: 'get',
		dataType: 'json',
		data: {
			page: pageName
		}
	});

	return promise;
}


$('#facebook-pages').on('click', 'a', function(e) {
	var page = this.id;
	var query = facebookPageQuery(page);

	query.done(function(data) {
		console.log(data);
		// render data on page using client side templating
	});

	query.done(function(data) {
		totalCount++;
		$('#total-count').html(totalCount);
	});
});