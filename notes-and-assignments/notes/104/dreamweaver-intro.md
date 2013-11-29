Dreamweaver Introduction
===========================

*	Open an existing page (including ones you created in Notepad/Simpletext).
*	Create a new html blank document through Blank Page &gt; HTML &gt; None
*	Create a new html document starting from Blank Page &gt; HTML &gt; and pick a layout style. This will create a new page with divs and all the underlying stylesheet and css instructions to create that layout, and will pre-populate the different areas with starter content.

 
### Dreamweaver visual editor: most important interfaces

* Code / Design / Split Modes -- buttons at upper left of interface that control which UI the program is using
* Properties Window -- Edit the properties of an element on the page (image, div, link, etc.) 
* CSS Styles Window -- Edit and create styles (id, classes and tag instructions) in the page
* Insert menus and/or Insert Window -- add elements/objects to the page
* HTML source code -- can access by switching to Code view OR can bring up separately through Code Inspector window.
* Lost / can't find a window/interface? Go to the Window menu to show/hide different UIs.

### Property Inspector

* Generally keep this window open all the time
* When you select an object on the page, Properties interface lets you edit/set the properties of that element.
* "HTML" is the "normal" mode of the Properties window. This allows you to edit the HTML properties of the object. You can set things such as the class or ID of an object, the src of an image, the href of a links, etc.
* "CSS" side of the Properties window lets you edit or create new CSS styles for the object. If the object is set to a CSS class, yu can click on Edit Rule to directly edit that related CSS class. Or if the object does not have any CSS assigned to it you can click on Edit Rule to simultaneously create a class and assign it to the object.
* Defaults: Remember to 0 out properties you want to be 0 -- don't just leave them blank

### CSS Styles window
 
* Lists out all styles (internal or from an external file) for the page
* Select a style (id, class or tag) and then EITHER edit its properties in the bottm half of the window OR double-click on the style to bring up a more in-depth, pop-up CSS Rule Definitions interface
* Create a new style:
    * To add a new style click on the little New CSS Rule button (has a "+" icon) at the bottom of the CSS Styles window.
    * Then you need to set if you want to create a new ID, Class or Tag instruction. For new ID or Class elements, give them a name. For Tag instructions pick the name of the tag from the list. For now we will ignore the more complex "Compound" option.
    * Finally, at the bottom under Rule Definition you can set whether to the new style will be saved in the page (Internal) or in a separate file (External) and if necessary create a new css file.
    * Once you hit OK it will bring up the pop-up CSS Rule Defintion window. Notice it sorts the LONG list of Style Properties you are familiar with into different categories: 
		
* Type: All of the text formatting such as size, family, color, etc.
* Background: Background color and/or images, and background image settings
* Block: Mainly paragraph-type settings such as word and letter spacing, text alignment, and indent.
* Box: Width, height, margin and padding settings.
* Border: Size, color and style of borders.
* List: Properties of lists and list items

### Adding elements to the page

* First off, since this is a visual interface, when in Design mode you can simply click anywhere in the page and start typing to add text content at that location.
* If you want to add a new element to the page, such as an image, you click where you want to "insert" it, then use the Insert menu or Window to add a new element
* __Insert menu:__ If you use the Insert menu you will mostly be using: 
		
    * Insert &gt; Images
    * Insert &gt; Layout Objects &gt; Divs
    * Insert &gt; HTML &gt; Horizontal Rule
	* Insert &gt; Forms -- for adding a new base form and all form objects. __Note: If you try to add a form object to a page that does not already have a containing "form", it will prompt you to add the form around it.__
    * Hyperlinks: You can add a hyperlink from the Insert menu. But you can also simply select the text and/or image that you want to put a link around and use the Link part of the Propety window to add a hyperlink.
        
* Insert window/palette:
    * When you first bring up the Inserrt menu by defalt it should list out the "Common" insert objects such as Hyperlink, Horizontal Rule, Insert Div tag, Images, etc.
    * If you click on the arrow next to "Common" you can switch it to other object palettes. The main other one you might want is "Forms".
    

### Dreamweaver pre-built "layouts"

* When you start a new document in Dreamweaver, NEVER (for now) pick Template. Always pick "Blank Page" and "HTML" in the first two columns -- no other options!
* In the third column, "None" will give you a blank page.
* If you want to try starting a page from one of DW's pre-built layouts, in the third column select one of the Layout styles:
	
    * The preview is not very good so if you want to see what a style looks like you might want to just press Create and see it.
    * All of the DW layout styles will save an external stylesheet (css file) in addition to the page itself
    * The layouts not only start from pages with design and layouts done, but each element (header, content, sidebar, navigation, etc.) is pre-populate with content/text.
    * To edit the properties of the layout (dimensions, colors, etc.) you find the corresponding CSS Style and edit that. For instance, to change the height or background colo of a header you would find the .header class and edit its CSS Rules.
	* When working with their layouts remember you will have TWO files -- the HTML page AND the css file. And so of course you need to save (and copy) both files.
    
