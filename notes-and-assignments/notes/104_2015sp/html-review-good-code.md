HTML Review and Good Code
=========================

### Review

*   HTML tags are lowercase, first is the tag name. If there are any attributes (modifiers) for that tag/object then after a space they are listed as attributes="value" ... such as _src="dent.jpg"_ with the "value" of the attribute in quotes.
*   Styles generally control or modify the appearance of text and objects of a page. The syntax for a style is __property: value;__
*   For now, we place styles INSIDE of an HTML tag INSIDE of a "style" attribute. So for instance, 

```html
<hr style="width: 50%" />
```

### Good code

Well formed HTML should follow some simple ideas/steps:

*   Always close your tags, or in the case of self-closing tags like img, hr and br give them internal closes. I.e. if you open a &lt;strong&gt; tag, make sure at some point you have closed it with &lt;strong&gt; ... and for non-closing tags make sure you give them internal closes, so you type

```html
<br />
```

instead of:

```html
<br>
```

*   Don't violate the "nest order" of tags. If you open up three tags, make sure you close them in the opposite order you opened them. I.e. if put a p tag then strong tag then em tag:

```html
<p><strong><em>
```

 then you would need to first close the em, then strong, then p tag.

```html
<p><strong><em>content here</em></strong></p>
```

*   Required attributes: While most attributes are optional on html tags, some are not. For instance, on the anchor (a) tag, you MUST have at least one attribute (href). On the img tag, there is not an image without at least a src attribute. Etc.
*   Recommended attributes: Some tags have attributes that should always be scoped out for good practice. The most prominent example of this is the img tag, which should always have its width, height and alt attributes specified.
*   Attribute values in quotes: when you set attributes of tags (such as title="About Me" src="dent.jpg"), it is safest to ALWAYS surround the value for the attribute in quotes. While there are some attribute values that do not require quotes, it is safest to just put them all inside the marks. In HTML you can use single or double quotes

We will learn other "good practices" as the semester goes on. 
    
    
