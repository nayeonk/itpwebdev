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

var createHTMLDocument = function(html) {
	var doc = document.implementation.createHTMLDocument("New Document");
	doc.body.innerHTML = html;

	return doc;
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

/**
 * [CodeEditor description]
 * @param {object} textarea    HTMLTextAreaElement
 * @param {[type]} codePreview [description]
 */
function CodeEditor(textarea, codePreview) {
	this.editor = CodeMirror.fromTextArea(textarea, {
	  mode: "text/html",
	  lineNumbers: true,
	  theme: 'eclipse'
	});

	this.codePreview = codePreview;
	this.bindEvents();
}

CodeEditor.prototype.bindEvents = function() {
	var self = this;
	this.editor.on('change', function() {
		self.renderCode();
	});
};

CodeEditor.prototype.renderCode = function() {
	var html = this.editor.getValue();
	var doc = createHTMLDocument(html);
	this.codePreview.insertHTMLDocumentIntoFrame(doc);
	localStorage.setItem('myhtml', html);
};

/**
 * [CodePreview description]
 * @param {iframe} frame HTML iframe element
 */
function CodePreview(frame) {
	this.frame = frame;
}

CodePreview.prototype.insertHTMLDocumentIntoFrame = function(doc) {
	var destDocument = this.frame.contentDocument;
  var srcNode = doc.documentElement;
  var newNode = destDocument.importNode(srcNode, true);
  
  destDocument.replaceChild(newNode, destDocument.documentElement);

  return destDocument;
};

$('#libraries').on('change', function() {
	var lib = this.value;
	var scripts = createScriptTagsForLibrary(lib);
	var newHTML = insertScript(editor.getValue(), scripts);

	editor.setValue(newHTML);
});

var App = ({
	defaultHTML: [
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
	].join("\n"),
	setHTML: function(editor) {
		var html = localStorage.getItem('myhtml') || this.defaultHTML;
		editor.setValue(html);
	},
	init: function() {
		var codeEditor = new CodeEditor(
			document.querySelector('textarea'),
			new CodePreview(document.querySelector('#preview'))
		);
		
		this.setHTML(codeEditor.editor);
		codeEditor.renderCode();
	}
}).init();

})(window);
