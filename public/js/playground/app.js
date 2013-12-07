(function(window, undefined) {

var libraries = {
	jquery: {
		src: 'http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js',
		type: 'js'
	},
	underscore: { 
		src: 'http://documentcloud.github.io/underscore/underscore-min.js',
		type: 'js'
	},
	handlebars: { 
		src: 'http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.0/handlebars.js',
		type: 'js'
	},
	backbone: [
		'jquery',
		'underscore',
		{ src: 'http://documentcloud.github.io/backbone/backbone-min.js', type: 'js' }
	]
};

var myTextarea = document.querySelector('textarea');
var frame = document.querySelector('#preview');

var editor = CodeMirror.fromTextArea(myTextarea, {
  mode: "text/html",
  lineNumbers: true,
  theme: 'eclipse'
});

var defaultValue = [
	"<!doctype html>",
	"<html>",
	"<head>",
	"\<title>Demo</title>",
	"<style>\n",
	"</style>",
	"</head>",
	"<body>",
	"\n\n",
	"</body>",
	"</html>"
].join("\n");

editor.setValue(defaultValue);

var createHTMLDocument = function(html) {
	var doc = document.implementation.createHTMLDocument("New Document");
	doc.body.innerHTML = html;

	return doc;
};

var insertHTMLDocumentIntoFrame = function(frame, doc) {
	var destDocument = frame.contentDocument;
  var srcNode = doc.documentElement;
  var newNode = destDocument.importNode(srcNode, true);
  
  destDocument.replaceChild(newNode, destDocument.documentElement);

  return destDocument;
};

var insertScript = function(html, script) {
	var newHTML = script + "\n</body>";
	return html.replace('</body>', newHTML);
};

var createScriptTag = function(src) {
	return '<script src="' + src + '"></script>';
};

var createExternalStylesheet = function(href) {
	return '<link rel="stylesheet" href="'+ href +'" />';
};

var createDependency = function(val) {
	if (typeof val === 'string') {
		if (libraries.hasOwnProperty(val)) {
			return createScriptTag(libraries[val].src);
		} else {
			throw new Error('Missing dependency in libraries object.');
		}
	} else {
		return createScriptTag(val.src);
	}
};

var createScriptTagsForLibrary = function(library) {
	var lib = libraries[library];
	var scripts = [];

	if ($.isPlainObject(lib)) {
		return createScriptTag(lib.src);
	}

	lib.forEach(function(val) {
		scripts.push(createDependency(val));
	});

	return scripts.join("\n");
};

editor.on('change', function() {
	var html = editor.getValue();
	var doc = createHTMLDocument(html);
	insertHTMLDocumentIntoFrame(frame, doc);
});

$('#libraries').on('change', function() {
	var lib = this.value;
	var scripts = createScriptTagsForLibrary(lib);
	var newHTML = insertScript(editor.getValue(), scripts);

	editor.setValue(newHTML);
});

})(window);
