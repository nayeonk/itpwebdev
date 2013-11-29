var popWin;

function prefixedParamsToArray(form, prefix) {
	var a = new Array();
	var param;
	paramA = form.elements;
	for(var i=0;i<paramA.length;i++){
		param = paramA[i].name;
		if (param.substr(0,prefix.length)==prefix) {
			a.push(param.substr(prefix.length));
		}
	}
	return a;	
}

function grabFromPinedit(form,pineditField){
	var s = document.getElementById("pinedit").contentWindow.editGetXHtmlBody();
	if (s.substr(0,5) == "<?xml"){
		s = s.substr(142);
		// getting rid of <?xml version="1.0"?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	}
	form.elements[pineditField].value = s;
}

function info(msg){	
	var msgLength = msg.length;
	
	var h = 110+20;
	var w;
	if (msgLength < 100){
		w = Math.max(175,7 * msgLength);
	} else {
		w = 700;
		h += Math.floor(msgLength / 100) * 15;
	}

	return window.showModalDialog('/info.jsp?msg='+escape(msg), 'infoWin', 'dialogWidth:'+w+'px;dialogHeight:'+h+'px;help:no;status:no;scroll:no;');
}

function yesNo(msg){
	var msgLength = msg.length;
	
	var h = 110+20;
	var w;
	if (msgLength < 100){
		w = Math.max(175,7 * msgLength);
	} else {
		w = 700;
		h += Math.floor(msgLength / 100) * 15;
	}
	return window.showModalDialog('/yesNo.jsp?msg='+escape(msg), 'yesNoWin', 'dialogWidth:'+w+'px;dialogHeight:'+h+'px;help:no;status:no;scroll:no;');
}

function pop(url,w,h) {
	pop(url,w,h,10,10);
}

function pop(url,w,h,l,t) {
	pop(url,w,h,l,t,'popupwin');
}

function pop(url,w,h,center,winName,options) {
	popWin = window.open((url), winName, 'top='+t+',left='+l+',width='+w+',screenX='+l+',screenY='+w+',height='+h+','+options);
	popWin.focus();
}

function pop(url,w,h,l,t,winName,options) {
	if (l == 'center'){
		l = (screen.availWidth-10 - w) / 2;
  		t = (screen.availHeight-20 - h) / 2;
	}

	popWin = window.open((url), winName, 'top='+t+',left='+l+',width='+w+',screenX='+l+',screenY='+w+',height='+h+','+options);
	if (popWin != null){
		popWin.focus();
	}
}

function pad(s,num,padVal,prePost){
	if (s == null) s = "";
	
	var i;
	var pads = "";
	
	for(i=0;i<num-s.length;i++){
		pads += padVal;
	}
	
	if (prePost == "post"){
		return ""+s+pads;
	} else {
		return ""+pads+s;
	}
}

function trim(s){
	
	var charFound = false;
	var c;
	var newS = "";
	var newLength = 0;
	
	for (i=0; i<s.length; i++){   
    	c = s.charAt(i);
		if (c != " " || charFound){
			charFound = true;
			newS += c.toString();
		}
	}
	
	s = newS;
	 
	for (i=s.length-1; i>=0; i--){   
    	c = s.charAt(i);
		if (c != " "){
			newLength = i+1;
			break;
		}
	}
	
	return s.substr(0,newLength);
}

function changeList(field,dir){
	i = field.selectedIndex;
	
	if (i==-1) return;
	
	var incDec = 0;
	
	if (dir == "up"){
		if (i==0){
			return;
		}
		
		incDec = -1;
	}
	
	if (dir == "down"){
		for(;i<field.options.length;i++){
			if (!field.options[i].selected){
				break;
			}
		}
		i--;
		
		if (i==field.options.length-1){
			return;
		}
	
		incDec = 1;	
	
	} 

	holdText = field.options[i+incDec].text;
	holdValue = field.options[i+incDec].value;

	for(var j=i;dir == "up" ? j<field.options.length : j>-1;j-=incDec){
		if (field.options[j].selected){
			field.options[j+incDec].text = field.options[j].text;
			field.options[j+incDec].value = field.options[j].value;
			field.options[j+incDec].selected = true;
		} else {
			break;
		}
	}
	
	field.options[j+incDec].text = holdText;
	field.options[j+incDec].value = holdValue;		
	field.options[j+incDec].selected = false;

	
}

function jumpList(field_from,field_to){	
	var i = field_from.selectedIndex;
	var newOption;
	
	for(var i=0;i<field_from.options.length;i++){
		if (!field_from.options[i].selected) continue;
		
		newOption = new Option(field_from.options[i].text, field_from.options[i].value);
		newOption.selected = true;
		field_to.options[field_to.options.length] = newOption;
		field_from.options[i] = null;
		i--;
	}
}

function removeFromList(field){	
	for(var i=0;i<field.options.length;i++){
		if (!field.options[i].selected) continue;
		field.options[i] = null;
		i--;
	}
}

function selectAll(field){
	for(i=0;i<field.options.length;i++){
		field.options[i].selected = true;
	}
}

function unselectAll(field){
	for(i=0;i<field.options.length;i++){
		field.options[i].selected = false;
	}
}

function getSelectedOptions(field,delim){
	if (getSelectedOptions.arguments.length == 1){
		delim = ",";
	}    

	var selectedOptions = "";
	for(i=0;i<field.options.length;i++){
		if(field.options[i].selected){
			selectedOptions += field.options[i].value + delim ; 
		}
	}
	return chop(selectedOptions);
}

function checkAll(form,fieldIdent){
	a = form.elements;
	for(i=0;i<a.length;i++){
		ind = a[i].name.indexOf(fieldIdent);
		if (ind != -1){
			a[i].checked = true;
		}
	}
}

function uncheckAll(form,fieldIdent){
	a = form.elements;
	for(i=0;i<a.length;i++){
		ind = a[i].name.indexOf(fieldIdent);
		if (ind != -1){
			a[i].checked = false;
		}
	}
}	

	
function chop(s,i){
	if (chop.arguments.length == 1){
		i = 1;
	}
	if (s.length < i) {
		return s;
	}
	return s.substring(0,s.length-i);
}

function arrayContains(a,s){
	for(var i=0;i<a.length;i++){
		if (a[i] == s){
			return true;
		}
	}
	return false;
}

function sortList(field,dir){
	var separator = "\t";
	var origA = new Array(field.options.length);
	for(i=0;i<field.options.length;i++){
		origA[i] = field.options[i].text + separator + field.options[i].value;
	}
	var sortedA = dir == "a" ? origA.sort(caseInsensitiveSort) : origA.sort(reverseSort);
	var textValueA;
	for(i=0;i<sortedA.length;i++){
		textValueA = sortedA[i].split(separator);
		field.options[i].text = textValueA[0]; 
		field.options[i].value = textValueA[1];
	}
}

function reverseSort(a, b){ 
   if(a.toLowerCase() > b.toLowerCase()) 
      return -1 
   if(a.toLowerCase() < b.toLowerCase()) 
      return 1 
   return 0 
} 

function caseInsensitiveSort(a, b){ 
   if(a.toLowerCase() > b.toLowerCase()) 
      return 1 
   if(a.toLowerCase() < b.toLowerCase()) 
      return -1 
   return 0 
} 

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function newImage(arg) {
if (document.images) {
rslt = new Image();
rslt.src = arg;
return rslt;
}
}

function changeImages() {
if (document.images && (preloadFlag == true)) {
for (var i=0; i<changeImages.arguments.length; i+=2) {
document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
}
}
}

var preloadFlag = false;
function preloadImages() {
if (document.images) {
navbuttons_home_over = newImage("images/navbuttons_home-over.jpg");
navbuttons_prelecture_over = newImage("images/navbuttons_prelecture-over.jpg");
preloadFlag = true;
}
}


