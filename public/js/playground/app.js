var myTextarea = document.querySelector('textarea');
var frame = document.querySelector('#preview');

var editor = CodeMirror.fromTextArea(myTextarea, {
  mode: "text/html",
  lineNumbers: true
});
 

editor.on('change', function() {
	var html = editor.getValue();
	var doc = document.implementation.createHTMLDocument("New Document");

	doc.body.innerHTML = html;

	var destDocument = frame.contentDocument;
  var srcNode = doc.documentElement;
  var newNode = destDocument.importNode(srcNode, true);
  
  destDocument.replaceChild(newNode, destDocument.documentElement);
});