(function(window, undefined) {

var myTextarea = document.querySelector('textarea');
var frame = document.querySelector('#preview');

var editor = CodeMirror.fromTextArea(myTextarea, {
  mode: "text/html",
  lineNumbers: true
});

var createHTMLDocument = function(html) {
	var doc = document.implementation.createHTMLDocument("New Document");
	doc.body.innerHTML = html;

	return doc;
};

var insertHTMLDocumentIntoFrame = function(doc) {
	var destDocument = frame.contentDocument;
  var srcNode = doc.documentElement;
  var newNode = destDocument.importNode(srcNode, true);
  
  destDocument.replaceChild(newNode, destDocument.documentElement);

  return destDocument;
};

editor.on('change', function() {
	var html = editor.getValue();
	var doc = createHTMLDocument(html);
	insertHTMLDocumentIntoFrame(doc);
});

})(window);
