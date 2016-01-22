Client-side Templating
======================

### Generating HTML on the client-side

1. You can create strings of HTML and concatonate your dynamic data. However, with complicated HTML chunks, this can become quite messy and hard to maintain.
2. Alternatively, we can generate HTML using native DOM methods / properties like:
	* document.createElement()
	* element.appendChild(node)
	* document.removeElement()
	* element.innerHTML
Again, this can get kind of long and hard to maintain with complicated HTML chunks. It is also hard to see what the HTML fragment looks like at a quick glance
3. Client-side templating libraries allow you to create HTML chunks with placeholders for your dynamic data. These libraries allow you to pass data to a template which will replace all instances of the placeholders in a template with the actual data themselves. Templating libraries include:
	* [Handlebars](http://handlebarsjs.com/)
	* [Underscore JS library](http://underscorejs.org/) - more than just templating
	* [Mustache](https://github.com/janl/mustache.js/)

* Client side templates can be created by placing HTML fragments within a script tag with a __type="template"__ as an attribute.
* Scripts without a type specified default to "text/javascript". With a type attribute set to 'template' (or anything the browser can't interpret), the browser will not recognize this type and won't evaulate what is inside the script tag as Javascript. 
* This makes for a good place to store HTML templates. Note that you cannot place HTML templates inside external script references. They must be internal script blocks. Other common script type attribute values for templates include "text/template", 'handlebars/template', etc.