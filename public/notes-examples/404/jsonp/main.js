var templateString = document.getElementById('facebook-page-template').innerHTML;
var template = Handlebars.compile(templateString);

function handleData(json) {
	var html = template(json);
	console.log(json);
	$('#main').append(html);
}

function jsonpRequest(url) {
	var script = document.createElement('script');
	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
}

jsonpRequest('https://graph.facebook.com/FastAndFurious?callback=handleData');
jsonpRequest('https://graph.facebook.com/cocacola?callback=handleData');
jsonpRequest('https://graph.facebook.com/pepsi?callback=handleData');