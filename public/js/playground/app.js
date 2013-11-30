var myTextarea = document.querySelector('textarea');
var editor = CodeMirror.fromTextArea(myTextarea, {
  mode: "text/html",
  lineNumbers: true,
  height: '600'
});

$('#run').on('click', function(e) {
	var html = editor.getValue();
	// var promise = $.ajax({
	// 	type: 'post',
	// 	url: 'playground/render',
	// 	data: {
	// 		html: html
	// 	}
	// });

	// promise
	// 	.done(function(res) {
	// 		console.log(res);

	// 	})
	// 	.fail(function(res) {
	// 		console.error(res);
	// 	});

	var doc = document.implementation.createHTMLDocument("New Document");
	var frame = document.querySelector('#preview');

	doc.body.innerHTML = html;

	var destDocument = frame.contentDocument;
  var srcNode = doc.documentElement;
  var newNode = destDocument.importNode(srcNode, true);
  
  destDocument.replaceChild(newNode, destDocument.documentElement);
});