var iHour = "This field must be an hour number between 1 and 12.  Please reenter it now."
var iMinute = "This field must be a minute number between 0 and 59.  Please reenter it now."

function isNA(s){
	return (s == "n/a");
}

function isFirstOption(theField){
	return (theField.selectedIndex == 0);
}

function noneChecked(theField){
	if (typeof(theField.length) == "undefined"){
		return !theField.checked;
	}
	for(i=0;i<theField.length;i++){
		if (theField[i].checked){
			return false;
		}
	}
	return true;
}

function getChecked(theField){
	if (typeof(theField.length) == "undefined"){
		return theField.value;
	}
	for(i=0;i<theField.length;i++){
		if (theField[i].checked){
			return theField[i].value;
		}
	}
	return null;
}

function getSelected(theField){
	if (typeof theField.options == "undefined"){
		return "";
	} 
	if (isFirstOption(theField)){
		return null;
	}
	return theField.options[theField.selectedIndex].value;
}

function isTimeEmpty(form,datePre){
	return (
			isFirstOption(form.elements[datePre+"Hour"])
		&&  isFirstOption(form.elements[datePre+"Minute"])
		&&	isFirstOption(form.elements[datePre+"AmPm"])
	)
}

function checkNA (theField, s){
	if (!isNA(theField.value)){
		return warnNotNA (theField, s);
	} else {
		return true;
	}
}

function checkEmpty(theField, s){

	if(isEmpty(theField.value)){
		return true;
	} else {
		return warnNotEmpty (theField, s);
	}
}

function checkSelect (theField, s, emptyOK){
	if (checkSelect.arguments.length == 2) emptyOK = defaultEmptyOK;
    if (emptyOK == true) return true;

	if (isFirstOption(theField) || theField.selectedIndex == -1){
		return warnEmptySelect (theField, s);
	} else {
		return true;
	}
}

function checkTrulySelect (theField, s, emptyOK){
	if (checkTrulySelect.arguments.length == 2) emptyOK = defaultEmptyOK;
    if (emptyOK == true) return true;

	if (theField.selectedIndex == -1){
		return warnEmptySelect (theField, s);
	} else {
		return true;
	}
}

function checkNotSelect (theField, s){
    	if (!isFirstOption(theField)){
			return warnNotEmpty (theField, s);
    	} else {
    		return true;
	}
}

function checkChecked (theField, s){
	if (noneChecked(theField)){
		return warnEmptyCheck (theField, s);
	} else {
		return true;
	}
}

function checkFloat(theField, s, emptyOK){
	if (checkFloat.arguments.length == 2) emptyOK = defaultEmptyOK;

	if (emptyOK == true){
		if(isEmpty(theField.value)){
			return true;
		}
	} else {
		if (!checkString(theField,s)){
			return false;
		}
	}

	theField.value = removeCommas(theField.value);
	if (isFloat(theField.value)){
		return true;
	} else {
		return warnInvalidNumber (theField, s);
	}
}

function checkInt(theField, s, emptyOK){
	if (checkInt.arguments.length == 2) emptyOK = defaultEmptyOK;

	if (emptyOK == true){
		if(isEmpty(theField.value)){
			return true;
		}
	} else {
		if (!checkString(theField,s)){
			return false;
		}
	}

	theField.value = removeCommas(theField.value);
	if (isInteger(theField.value)){
		return true;
	} else {
		return warnInvalidNumber (theField, s);
	}
}

function checkPositive(theField, s, emptyOK){
	if (checkPositive.arguments.length == 2) emptyOK = defaultEmptyOK;

	if (emptyOK == true){
		if(isEmpty(theField.value)){
			return true;
		}
	} else {
		if (!checkString(theField,s)){
			return false;
		}
	}

	if (Number(theField.value) > 0){
		return true;
	} else {
		return warnNonPositiveNumber (theField, s);
	}
}

function checkAlphanumeric(theField, s, emptyOK){
	if (checkAlphanumeric.arguments.length == 2) emptyOK = defaultEmptyOK;

	if (emptyOK == true){
		if(isEmpty(theField.value)){
			return true;
		}
	} else {
		if (!checkString(theField,s)){
			return false;
		}
	}

	var c;
	var val = theField.value;
	for (i = 0; i < val.length; i++){
        c = val.charAt(i);
        if (digits.indexOf(c) == -1
        &&  lowercaseLetters.indexOf(c) == -1
        &&  uppercaseLetters.indexOf(c) == -1){
        	return warnNotAlphanumeric (theField, s);
        }
    }

	return true;
}

function checkAlpha(theField, s, emptyOK){
	if (checkAlpha.arguments.length == 2) emptyOK = defaultEmptyOK;

	if (emptyOK == true){
		if(isEmpty(theField.value)){
			return true;
		}
	} else {
		if (!checkString(theField,s)){
			return false;
		}
	}

	var c;
	var val = theField.value;
	for (i = 0; i < val.length; i++){
        c = val.charAt(i);
        if (lowercaseLetters.indexOf(c) == -1
        &&  uppercaseLetters.indexOf(c) == -1){
        	return warnNotAlpha (theField, s);
        }
    }

	return true;
}

function checkDate2(theField, s, emptyOK){
	if (checkDate2.arguments.length == 2) emptyOK = defaultEmptyOK;

	if (emptyOK == true){
		if(isEmpty(theField.value)){
			return true;
		}
	} else {
		if (!checkString(theField, s)){
			return false;
		}
	}


	var dateFieldsA = theField.value.split("/");
	if (isDate2 (dateFieldsA[2], Number(dateFieldsA[0]), Number(dateFieldsA[1]))){
		return true;
    }
    alert (iDatePrefix + s + iDateSuffix);
    return false;
}

function checkHour(theField, s, emptyOK){
	if (checkHour.arguments.length == 2) emptyOK = defaultEmptyOK;

	if (emptyOK == true){
		if(isEmpty(theField.value)){
			return true;
		}
	} else {
		if (!checkString(theField,s)){
			return false;
		}
	}

	if (!isIntegerInRange (theField.value, 1, 12)){
		return warnInvalid (theField, iHour);
	}

	return true;
}

function checkMinute(theField, s, emptyOK){
	if (checkMinute.arguments.length == 2) emptyOK = defaultEmptyOK;

	if (emptyOK == true){
		if(isEmpty(theField.value)){
			return true;
		}
	} else {
		if (!checkString(theField,s)){
			return false;
		}
	}

	if (!isIntegerInRange (theField.value, 0, 59)){
		return warnInvalid (theField, iMinute);
	}

	return true;
}

function checkPasswordFields(theField1, theField2){

	if (theField1.value != theField2.value){
		theField1.focus();
	    alert("Please make sure the Confirmation Password matches the Password");
	    return false;
	}

	return true;
}

function checkTextarea(theField, maxLength, s){
	return checkLength(theField, maxLength, s)
	&& checkTextareaSafeHtml(theField, s);
}

function checkLength(theField, maxLength, s){
	if (theField.value.length > maxLength){
		theField.focus();
		theField.select();
		theField.value = theField.value.substring(0,maxLength);
		alert("The "+s+" field had more than "+maxLength+" chars.  It has been truncated.");
	    return true;
	}

	return true;
}

function checkLengthMin(theField, minLength, s){
	if (theField.value.length < minLength ){
		theField.focus();
		theField.select();
		alert("The "+s+" field has less than "+minLength+" chars.  Please enter at least "+minLength+" chars.");
	    return false;
	}

	return true;
}

function checkLengthMax(theField, maxLength, s){
	if (theField.value.length > maxLength ){
		theField.focus();
		theField.select();
		alert("The "+s+" field has more than "+maxLength+" chars.  Please enter no more than "+maxLength+" chars.");
	    return false;
	}

	return true;
}

function checkLengthExact(theField, exactLength, s, emptyOK){
	if (checkLengthExact.arguments.length == 3) emptyOK = defaultEmptyOK;
    if (emptyOK == true && isEmpty(theField.value)){
		return true;
	}

	if (theField.value.length != exactLength ){
		theField.focus();
		theField.select();
		alert("The "+s+" field has "+theField.value.length+" chars.  Please enter exactly "+exactLength+" chars.");
	    return false;
	}

	return true;
}
function checkTextareaSafeHtml(theField, s){
	var illegalHtmlA = new Array();
	illegalHtmlA[0] = "textarea";
	illegalHtmlA[1] = "<!--";

	for(i=0;i<illegalHtmlA.length;i++){
		if (theField.value.indexOf(illegalHtmlA[i]) != -1){
			theField.focus();
	    	alert("Please make sure "+s+" does not contain the following illegal value: '"+illegalHtmlA[i]+"'");
	    	return false;
		}
	}

	return true;

}

function checkCreditCard2 (cardTypeField, theField){
  var cardType = getSelected(cardTypeField);
  var normalizedCCN = stripCharsInBag(theField.value, creditCardDelimiters)
  if (!isCardMatch(cardType, normalizedCCN))
    return warnInvalid (theField, iCreditCardPrefix + iCreditCardSuffix);
  else {
    theField.value = normalizedCCN
    return true
  }
}

function warnInvalidNumber (theField, s){
	var nPrefix = "You did not enter a valid number in the "
	var nSuffix = " field.  Please enter a valid number now."
	theField.focus()
	alert(nPrefix + s + nSuffix)
	return false
}

function warnNonPositiveNumber (theField, s){
	var nPrefix = "You did not enter a positive number in the "
	var nSuffix = " field.  Please enter a positive number now."
	theField.focus()
	alert(nPrefix + s + nSuffix)
	return false
}

function warnNotEmpty (theField, s){
	var ePrefix = "You entered a value into the "
	var eSuffix = " field. This field must be blank. Please clear it now."
	theField.focus()
	alert(ePrefix + s + eSuffix)
	return false
}

function warnNotNA (theField, s){
	var ePrefix = "You entered a value into the "
	var eSuffix = " field. This field must stay 'n/a'."
	theField.focus()
	alert(ePrefix + s + eSuffix)
	return false
}

function warnEmptySelect (theField, s){
	var prefix = "You did not select a value in the "
	var suffix = " field. This is a required field. Please select it now."
	theField.focus()
	alert(prefix + s + suffix)
	return false
}

function warnEmptyCheck (theField, s){
	var prefix = "You did not check a value in the "
	var suffix = " field. This is a required field. Please check a value now."
	alert(prefix + s + suffix)
	return false
}

function warnNotAlphanumeric (theField, s){
	var aPrefix = "You entered non-alphanumeric characters in the "
	var aSuffix = " field.  Please enter only alphanumeric characters."
	theField.focus()
    alert(aPrefix + s + aSuffix)
    return false
}

function warnNotAlpha (theField, s){
	var aPrefix = "You entered non-alpha characters in the "
	var aSuffix = " field.  Please enter only alpha characters."
	theField.focus()
    alert(aPrefix + s + aSuffix)
    return false
}

function formatZero(form){
	for(i=0;i<form.elements.length;i++){
		if (!form.elements[i].selectedIndex && isWhitespace(form.elements[i].value)){
			form.elements[i].value = "0";
		}
	}
}

function formatSpace(form){
	for(i=0;i<form.elements.length;i++){
		if (!form.elements[i].selectedIndex && isWhitespace(form.elements[i].value)){
			form.elements[i].value = " ";
		}
	}
}

function removeCommas(s){
	return s.replace(new RegExp(",","g"),"");
}

function checkValidChars(s,c){
	var c;
	for (i=0; i<s.length; i++){
    	if (s.charAt(i) == c){
			return warnInvalidCharacter (theField, s);
		}
	}
	return true;
}

function checkValidChars (theField, s, c){
	var val = theField.value;
	for (i=0; i<val.length; i++){
    	if (val.charAt(i) == c){
       		return warnInvalidCharacter (theField, s, c);
    	}
    }
    return true;
}

function warnInvalidCharacter (theField, s, c){
	var nPrefix = "You entered the invalid character "
	var nMidfix = " in the "
	var nSuffix = " field.  Please remove that character and try again."
	theField.focus();
	alert(nPrefix + "'" + c + "'" + nMidfix + s + nSuffix);
	return false;
}



