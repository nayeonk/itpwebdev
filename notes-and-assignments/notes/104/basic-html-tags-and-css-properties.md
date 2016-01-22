Resource: Basic HTML Tags and CSS Properties
==============


<table border=1 cellpadding=9 bgcolor="#ffffcc">
	<tr bgcolor="#cccc99">
		<td colspan=3 align=center>
		<h3 style="color:#800000">
			B &nbsp;&nbsp;A &nbsp;&nbsp;S &nbsp;&nbsp;I &nbsp;&nbsp;C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; H&nbsp;&nbsp; T&nbsp;&nbsp; M&nbsp;&nbsp; L&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; T &nbsp;&nbsp;A &nbsp;&nbsp;G &nbsp;&nbsp;S &nbsp;&nbsp;

		</td>
	</tr>
	<tr bgcolor=#cccc99>
		<td><font color=#800000><b>Tag</b></font></td>
		<td><font color=#800000><b>Primary Attributes</b></font></td>
		<td><font color=#800000><b>Notes and comments</b></font></td>
	</tr>
	<tr>
		<td>&lt;body&gt;</td>
		<td>&nbsp;</td>
		<td>example: <i>&lt;body style=&quot;background-color:#333333; color:#666666"&gt;</i></td>
	</tr>

	<tr>
		<td>&lt;br&gt;</td>
		<td>&nbsp;</td>
		<td>Example: <i>&lt;br /&gt;</i></td>
	</tr>

	<tr>
		<td>&lt;strong&gt;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
	</tr>

	<tr>
		<td>&lt;em&gt;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
	</tr>

	<tr>
		<td>&lt;a&gt;</td>
		<td><B>href</B>, name, target</td>
		<td>example: <I>&lt;a href=&quot;homepage.html&quot;&gt;</i></td>
	</tr>

	<tr>
		<td><nobr>&lt;h1, h2, h3, h4, h5, h5, h6&gt;</nobr></td>
		<td>&nbsp;</td>
		<td valign=top><I>one alternate is to use styles to format text </i></td>
	</tr>

	<tr>
		<td>&lt;p&gt;&#9;</td>
		<td>&nbsp;</td>
		<td><em>Example:</em> &lt;p style=&quot;text-align:center&quot;&gt;</td>
	</tr>

	<tr>
		<td>&lt;hr&gt;</td>
		<td>width</td>
		<td>example: <i>&lt;hr width="90%" /&gt; also &lt;hr style=&quot;width:200px;height:10px&quot; /&gt; </i></td>
	</tr>

	<tr>
		<td valign=top>&lt;blockquote&gt;</td>
		<td>&nbsp;</td>
		<td valign=top>Indents and separates a paragraph of text on the page</td>
	</tr>

	<tr>
		<td valign=top>&lt;img&gt;</td>
		<td><B>src</B>,  alt</td>
		<td>example: <I>&lt;img src=&quot;picture.gif&quot; alt=&quot;Text label for picture&quot; style=&quot;width:200px; height:150px; float:left&quot;  /&gt;</i></td>
	</tr>

	<tr>
		<td valign=top>&lt;ul&gt;</td>
		<td>&lt;li&gt; for each element/item</td>
		<td valign=top>example: <i>&lt;ul&gt; List &lt;li&gt; Item 1&lt;/li&gt; &lt;li&gt; Item 2&lt;/li&gt; &lt;/ul&gt;</i></td>
	</tr>

	<tr>
		<td valign=top>&lt;ol&gt;</td>
		<td>&lt;li&gt; for each element/item</td>
		<td valign=top>Same as &lt;ul&gt; except numerates the items instead of bulleting them</td>
	</tr>
<!--
<tr><td valign=top>&lt;dl&gt;</td>
<td>Tags &lt;dt&gt; and &lt;dd&gt; work similiar to &lt;li&gt;</td>
<td valign=top>Often useful in conjunction with &lt;ul&gt; &lt;li&gt; to create tiered bulleted items</td></tr>
-->
</table>

##Common CSS Properties

<table>

<tr bgcolor=#cc66ff>
<td valign=middle height=50>
<strong>Text properties</strong>
</td>
<td valign=middle>Sample values</td>
</tr>

<tr>
<td valign=top><strong>font-family</strong></td>
<td valign=top>Times, serif
</td></tr>

<tr>
<td valign=top><strong>font-style</strong></td>
<td valign=top>normal, italic, oblique
</td></tr>

<tr>
<td valign=top><strong>font-weight</strong></td>
<td valign=top>normal, bold, bolder, lighter, 100-900
</td></tr>

<tr>
<td valign=top><strong>font-size</strong></td>
<td valign=top>12pt, 14px, 1em, 75%, small (xx-small, x-small, small, medium, large, x-large, xx-large), smaller/larger
</td></tr>

<tr>
<td valign=top><strong>color</strong></td>
<td valign=top>green, #336699
</td></tr>

<tr>
<td valign=top><strong>font</strong></td>
<td valign=top>Can contain direct values for: font-variant, font-weight, font-size/lineheight, font-family
</td></tr>

<tr>
<td valign=top><strong>line-height</strong></td>
<td valign=top>normal, 2 (number of lines), 200% (double spacing), 24pt (so 12pt text in 24pt space would be double spacing)
</td></tr>

<tr>
<td valign=top><strong>text-decoration</strong></td>
<td valign=top>none, underlineline-through
</td></tr>

<tr>
<td valign=top><strong>text-transform</strong></td>
<td valign=top>none, capitalize, uppercase, lowercase
</td></tr>

<tr>
<td valign=top><strong>text-align</strong></td>
<td valign=top>left, right, center, justify
</td></tr>

<tr>
<td valign=top><strong>text-indent</strong></td>
<td valign=top>24px, 5%<br> 
</td></tr>



<tr bgcolor=#cc66ff>
<td valign=middle height=50>
<strong>Color and Background Properties</strong>
</td>
<td valign=middle>Sample Values</td>
</tr>

<tr>
<td valign=top><strong>background-color</strong></td>
<td valign=top>transparent, red, #99ff22
</td></tr>

<tr>
<td valign=top><strong>background-image</strong></td>
<td valign=top>none, url(images/image.gif)
</td></tr>

<tr>
<td valign=top><strong>background-repeat</strong></td>
<td valign=top>repeat, repeat-x, repeat-y, no-repeat
</td></tr>

<tr>
<td valign=top><strong>background-size</strong></td>
<td valign=top>Dynamic like 100% 100% or static size like 300px 400px
</td>
</tr>

<tr>
<td valign=top><strong>background-attachment</strong></td>
<td valign=top>scroll, fixed
</td></tr>

<tr>
<td valign=top><strong>background-position</strong></td>
<td valign=top>50%, 200px, top, center, bottom, left, right
</td></tr>

<tr>
<td valign=top><strong>background</strong></td>
<td valign=top>Can contain direct values for: background-color, background-image, background-repeat, background-attachment, background-position<br> 
</td></tr>


<tr bgcolor=#cc66ff>
<td valign=middle height=50>
<strong>Margin and Border Properties</strong>
</td>
<td valign=middle>Sample Values</td>
</tr>

<tr>
<td valign=top><strong>margin</strong></td>
<td valign=top>10px, 5%, auto
</td></tr>

<tr>
<td valign=top><strong>margin-top/bottom/left/right</strong></td>
<td valign=top>10px, 5%, auto
</td></tr>

<tr>
<td valign=top><strong>padding</strong></td>
<td valign=top>10%, auto
</td></tr>

<tr>
<td valign=top><strong>padding-top/bottom/left/right</strong></td>
<td valign=top>10%, auto
</td></tr>

<tr>
<td valign=top><strong>border-color</strong></td>
<td valign=top>green, #336699
</td></tr>

<tr>
<td valign=top><strong>border-style</strong></td>
<td valign=top>none, dotted, dashed, solid, double, groove, ridge, inset, outset</td></tr>

<tr>
<td valign=top><strong>border-top/bottom/left/right</strong></td>
<td valign=top>Can contain direct values for border-width, border-style, color</td></tr>

<tr>
<td valign=top><strong>border</strong></td>
<td valign=top>Can contain direct values for border-width, border-style, color
</td></tr>

<tr>
<td valign=top><strong>width</strong></td>
<td valign=top>auto, 200px, 30%
</td></tr>

<tr>
<td valign=top><strong>height</strong></td>
<td valign=top>auto, 200px
</td></tr>

<tr>
<td valign=top><strong>float</strong></td>
<td valign=top>none, left, right
</td></tr>

<tr>
<td valign=top><strong>clear</strong></td>
<td valign=top>none, left, right, both<br> 
</td></tr>



<tr bgcolor=#cc66ff>
<td valign=middle height=50>
<strong>Positioning Properties</strong>
</td>
<td valign=middle>Sample Values</td>
</tr>

<tr>
<td valign=top><strong>position</strong></td>
<td valign=top>static, absolute, relative</td></tr>

<tr>
<td valign=top><strong>left</strong></td>
<td valign=top>auto, 24px, 5%
</td></tr>

<tr>
<td valign=top><strong>top</strong></td>
<td valign=top>auto, 24px, 5%</td></tr>

<tr>
<td valign=top><strong>clip</strong></td>
<td valign=top>auto, rect(100,200)</td></tr>

<tr>
<td valign=top><strong>z-index</strong></td>
<td valign=top>auto, number (1 - 100)
</td></tr>

<tr>
<td valign=top><strong>visibility</strong></td>
<td valign=top>inherit, visible, hidden
</td></tr>

</table>  

