Resource - Remove USC Notice
============================

Code to put in head of every page

In the HEAD of your document, paste in the following code: 

```html
<script>
<!--
/*
<body>
</body>
</html>
*/
-->
</script>
```

On any page that you place the above code within the head the USC Disclaimer should no longer appear. The USC Disclaimer can mess up script blocks, layers and code used to create new, dynamic documents/windows. A good practice is to place those 8 lines right under your open head tag. You can still create additional script blocks for a page's scripting, but I like to segregate that code.