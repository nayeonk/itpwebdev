var digits = "0123456789";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// whitespace characters
var whitespace = " \t\n\r";
// decimal point character differs by language and culture
var decimalPointDelimiter = "."
// non-digit characters which are allowed in phone numbers
var phoneNumberDelimiters = "()- ";
// characters which are allowed in US phone numbers
var validUSPhoneChars = digits + phoneNumberDelimiters;
// characters which are allowed in international phone numbers
// (a leading + is OK)
var validWorldPhoneChars = digits + phoneNumberDelimiters + "+";
// non-digit characters which are allowed in 
// Social Security Numbers
var SSNDelimiters = "- ";
// characters which are allowed in Social Security Numbers
var validSSNChars = digits + SSNDelimiters;
// U.S. Social Security Numbers have 9 digits.
// They are formatted as 123-45-6789.
var digitsInSocialSecurityNumber = 9;
// U.S. phone numbers have 10 digits.
// They are formatted as 123 456 7890 or (123) 456-7890.
var digitsInUSPhoneNumber = 10;
// non-digit characters which are allowed in ZIP Codes
var ZIPCodeDelimiters = "-";
// our preferred delimiter for reformatting ZIP Codes
var ZIPCodeDelimeter = "-"
// characters which are allowed in Social Security Numbers
var validZIPCodeChars = digits + ZIPCodeDelimiters
// U.S. ZIP codes have 5 or 9 digits.
// They are formatted as 12345 or 12345-6789.
var digitsInZIPCode1 = 5
var digitsInZIPCode2 = 9
// non-digit characters which are allowed in credit card numbers
var creditCardDelimiters = " "

var mPrefix = "You did not enter a value into the "
var mSuffix = " field. This is a required field. Please enter it now."

// s is an abbreviation for "string"
var sUSLastName = "Last Name"
var sUSFirstName = "First Name"
var sWorldLastName = "Family Name"
var sWorldFirstName = "Given Name"
var sTitle = "Title"
var sCompanyName = "Company Name"
var sUSAddress = "Street Address"
var sWorldAddress = "Address"
var sCity = "City"
var sStateCode = "State Code"
var sWorldState = "State, Province, or Prefecture"
var sCountry = "Country"
var sZIPCode = "ZIP Code"
var sWorldPostalCode = "Postal Code"
var sPhone = "Phone Number"
var sFax = "Fax Number"
var sDateOfBirth = "Date of Birth"
var sExpirationDate = "Expiration Date"
var sEmail = "Email"
var sSSN = "Social Security Number"
var sCreditCardNumber = "Credit Card Number"
var sOtherInfo = "Other Information"
var sUserName = "User Name"
var sContactName = "Contact Name"
var sNumUnits = "Total Packages"
var sValue = "Value of Goods"
var sOrgName = "Organization Name"
var sOrgId = "Organization ID"
var sPkgDescription = "Package Description"
var sPkgInsurance = "Insurance"

// i is an abbreviation for "invalid"
var iFloat = "This field must be a valid dollar amount. Please reenter it now."
var iStateCode = "This field must be a valid two character U.S. state abbreviation (like CA for California). Please reenter it now."
var iZIPCode = "Please enter a valid 5 digit U.S. ZIP Code (like 11021)."
var iUSPhone = "Please enter a 10 digit U.S. phone number (like 212 773 4889)."
var iWorldPhone = "This field must be a valid international phone number. Please reenter it now."
var iSSN = "This field must be a 9 digit U.S. social security number (like 123 45 6789). Please reenter it now."
var iEmail = "Please enter a valid email address (like name@domain.com) for "
var iCreditCardPrefix = "This is not a valid "
var iCreditCardSuffix = " credit card number. Please reenter it now."
var iDay = "This field must be a day number between 1 and 31.  Please reenter it now."
var iMonth = "This field must be a month number between 1 and 12.  Please reenter it now."
var iYear = "This field must be a 2 or 4 digit year number.  Please reenter it now."
var iDatePrefix = "The Month, Day and Year for "
var iDateSuffix = " do not form a valid date.  Please reenter them now."

// p is an abbreviation for "prompt"
var pEntryPrompt = "Please enter a "
var pStateCode = "2 character code (like CA)."
var pZIPCode = "5 or 9 digit U.S. ZIP Code (like 94043)."
var pUSPhone = "10 digit U.S. phone number (like 415 555 1212)."
var pWorldPhone = "international phone number."
var pSSN = "9 digit U.S. social security number (like 123 45 6789)."
var pEmail = "valid email address (like foo@bar.com)."
var pCreditCard = "valid credit card number."
var pDay = "day number between 1 and 31."
var pMonth = "month number between 1 and 12."
var pYear = "2 or 4 digit year number."

var defaultEmptyOK = false

function makeArray(n) {
//   this.length = n;
   for (var i = 1; i <= n; i++) {
      this[i] = 0
   } 
   return this
}

var daysInMonth = makeArray(12);
daysInMonth[1] = 31;
daysInMonth[2] = 29;   // must programmatically check this
daysInMonth[3] = 31;
daysInMonth[4] = 30;
daysInMonth[5] = 31;
daysInMonth[6] = 30;
daysInMonth[7] = 31;
daysInMonth[8] = 31;
daysInMonth[9] = 30;
daysInMonth[10] = 31;
daysInMonth[11] = 30;
daysInMonth[12] = 31;

var USStateCodeDelimiter = "|";
var USStateCodes = "AL|AK|AS|AZ|AR|CA|CO|CT|DE|DC|FM|FL|GA|GU|HI|ID|IL|IN|IA|KS|KY|LA|ME|MH|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|MP|OH|OK|OR|PW|PA|PR|RI|SC|SD|TN|TX|UT|VT|VI|VA|WA|WV|WI|WY|AE|AA|AE|AE|AP"

function isEmpty(s)
{   return ((s == null) || (s.length == 0))
}

function isWhitespace (s)

{   var i;

    if (isEmpty(s)) return true;

    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);

        if (whitespace.indexOf(c) == -1) return false;
    }
    return true;
}


function stripCharsInBag (s, bag)

{   var i;
    var returnString = "";

    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }

    return returnString;
}


function stripCharsNotInBag (s, bag)

{   var i;
    var returnString = "";


    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (bag.indexOf(c) != -1) returnString += c;
    }

    return returnString;
}



function stripWhitespace (s)

{   return stripCharsInBag (s, whitespace)
}

function charInString (c, s)
{   for (i = 0; i < s.length; i++)
    {   if (s.charAt(i) == c) return true;
    }
    return false
}


function stripInitialWhitespace (s)

{   var i = 0;

    while ((i < s.length) && charInString (s.charAt(i), whitespace))
       i++;
    
    return s.substring (i, s.length);
}



function isLetter (c)
{   return ( ((c >= "a") && (c <= "z")) || ((c >= "A") && (c <= "Z")) )
}


function isDigit (c)
{   return ((c >= "0") && (c <= "9"))
}


function isLetterOrDigit (c)
{   return (isLetter(c) || isDigit(c))
}



function isInteger (s)

{   var i;

    if (isEmpty(s)) 
       if (isInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isInteger.arguments[1] == true);

      for (i = 0; i < s.length; i++)
    {   
        // Check that current character is number.
        var c = s.charAt(i);

        if (!isDigit(c)) return false;
    }

    // All characters are numbers.
    return true;
}





function isSignedInteger (s)

{   if (isEmpty(s)) 
       if (isSignedInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isSignedInteger.arguments[1] == true);

    else {
        var startPos = 0;
        var secondArg = defaultEmptyOK;

        if (isSignedInteger.arguments.length > 1)
            secondArg = isSignedInteger.arguments[1];

        // skip leading + or -
        if ( (s.charAt(0) == "-") || (s.charAt(0) == "+") )
           startPos = 1;    
        return (isInteger(s.substring(startPos, s.length), secondArg))
    }
}


function isPositiveInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isPositiveInteger.arguments.length > 1)
        secondArg = isPositiveInteger.arguments[1];

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (Number (s) > 0) ) );
}


function isNonnegativeInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isNonnegativeInteger.arguments.length > 1)
        secondArg = isNonnegativeInteger.arguments[1];


    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (Number (s) >= 0) ) );
}





function isNegativeInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isNegativeInteger.arguments.length > 1)
        secondArg = isNegativeInteger.arguments[1];


    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (Number (s) < 0) ) );
}




function isNonpositiveInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isNonpositiveInteger.arguments.length > 1)
        secondArg = isNonpositiveInteger.arguments[1];

 

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (Number (s) <= 0) ) );
}



function isFloat (s)

{   var i;
    var seenDecimalPoint = false;

    if (isEmpty(s)) 
       if (isFloat.arguments.length == 1) return defaultEmptyOK;
       else return (isFloat.arguments[1] == true);

    if (s == decimalPointDelimiter) return false;

    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is number.
        var c = s.charAt(i);

        if ((c == decimalPointDelimiter) && !seenDecimalPoint) seenDecimalPoint = true;
        else if (!isDigit(c)) return false;
    }

    // All characters are numbers.
    return true;
}



function isSignedFloat (s)

{   if (isEmpty(s)) 
       if (isSignedFloat.arguments.length == 1) return defaultEmptyOK;
       else return (isSignedFloat.arguments[1] == true);

    else {
        var startPos = 0;
        var secondArg = defaultEmptyOK;

        if (isSignedFloat.arguments.length > 1)
            secondArg = isSignedFloat.arguments[1];

        // skip leading + or -
        if ( (s.charAt(0) == "-") || (s.charAt(0) == "+") )
           startPos = 1;    
        return (isFloat(s.substring(startPos, s.length), secondArg))
    }
}


function isAlphabetic (s)

{   var i;

    if (isEmpty(s)) 
       if (isAlphabetic.arguments.length == 1) return defaultEmptyOK;
       else return (isAlphabetic.arguments[1] == true);

    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is letter.
        var c = s.charAt(i);

        if (!isLetter(c))
        return false;
    }

    // All characters are letters.
    return true;
}




function isAlphanumeric (s)

{   var i;

    if (isEmpty(s)) 
       if (isAlphanumeric.arguments.length == 1) return defaultEmptyOK;
       else return (isAlphanumeric.arguments[1] == true);

    // Search through string's characters one by one
    // until we find a non-alphanumeric character.
    // When we do, return false; if we don't, return true.

    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is number or letter.
        var c = s.charAt(i);

        if (! (isLetter(c) || isDigit(c) ) )
        return false;
    }

    // All characters are numbers or letters.
    return true;
}



function reformat (s)

{   var arg;
    var sPos = 0;
    var resultString = "";

    for (var i = 1; i < reformat.arguments.length; i++) {
       arg = reformat.arguments[i];
       if (i % 2 == 1) resultString += arg;
       else {
           resultString += s.substring(sPos, sPos + arg);
           sPos += arg;
       }
    }
    return resultString;
}




function isSSN (s)
{   if (isEmpty(s)) 
       if (isSSN.arguments.length == 1) return defaultEmptyOK;
       else return (isSSN.arguments[1] == true);
    return (isInteger(s) && s.length == digitsInSocialSecurityNumber)
}

function isUSPhoneNumber (s)
{   if (isEmpty(s)) 
       if (isUSPhoneNumber.arguments.length == 1) return defaultEmptyOK;
       else return (isUSPhoneNumber.arguments[1] == true);
    return (isInteger(s) && s.length == digitsInUSPhoneNumber)
}



function isInternationalPhoneNumber (s)
{   if (isEmpty(s)) 
       if (isInternationalPhoneNumber.arguments.length == 1) return defaultEmptyOK;
       else return (isInternationalPhoneNumber.arguments[1] == true);
    return (isPositiveInteger(s))
}



function isZIPCode (s)
{  if (isEmpty(s)) 
       if (isZIPCode.arguments.length == 1) return defaultEmptyOK;
       else return (isZIPCode.arguments[1] == true);
   return (isInteger(s) && 
            ((s.length == digitsInZIPCode1) ||
             (s.length == digitsInZIPCode2)))
}


function isStateCode(s)
{   if (isEmpty(s)) 
       if (isStateCode.arguments.length == 1) return defaultEmptyOK;
       else return (isStateCode.arguments[1] == true);
    return ( (USStateCodes.indexOf(s) != -1) &&
             (s.indexOf(USStateCodeDelimiter) == -1) )
}


function isEmail (s)
{   if (isEmpty(s)) 
       if (isEmail.arguments.length == 1) return defaultEmptyOK;
       else return (isEmail.arguments[1] == true);
   
    // is s whitespace?
    if (isWhitespace(s)) return false;
    
    // there must be >= 1 character before @, so we
    // start looking at character position 1 
    // (i.e. second character)
    var i = 1;
    var sLength = s.length;

    // look for @
    while ((i < sLength) && (s.charAt(i) != "@"))
    { i++
    }

    if ((i >= sLength) || (s.charAt(i) != "@")) return false;
    else i += 2;

    // look for .
    while ((i < sLength) && (s.charAt(i) != "."))
    { i++
    }

    // there must be at least one character after the .
    if ((i >= sLength - 1) || (s.charAt(i) != ".")){ 
    	return false;
    }else{
    	var s2 = s.substring(i);
    	if (s2.indexOf(",") != -1 || s2.indexOf(";") != -1 || s2.indexOf(" ") != -1 || s2.indexOf("@") != -1){
    		return false;
    	}else{
    		//HR 3/5/05 - I added this logic to allow only these chars
    		//return true;
    		var badChars = "";
		    var validChars = uppercaseLetters + lowercaseLetters + digits + "._-@";
		    for (i = 0;i < sLength;i++){
		        if (validChars.indexOf(s.charAt(i)) == -1){
		            badChars += s.charAt(i) + ",";
		        }
		    }
		    return badChars == "";
		    //end of HR change
		}
	}
}



function isYear (s)
{   if (isEmpty(s)) 
       if (isYear.arguments.length == 1) return defaultEmptyOK;
       else return (isYear.arguments[1] == true);
    if (!isNonnegativeInteger(s)) return false;
    return ((s.length == 2) || (s.length == 4));
}




function isIntegerInRange (s, a, b)
{   if (isEmpty(s)) 
       if (isIntegerInRange.arguments.length == 1) return defaultEmptyOK;
       else return (isIntegerInRange.arguments[1] == true);

    if (!isInteger(s, false)) return false;

    var num = Number (s);
    return ((num >= a) && (num <= b));
}




function isMonth (s)
{   if (isEmpty(s)) 
       if (isMonth.arguments.length == 1) return defaultEmptyOK;
       else return (isMonth.arguments[1] == true);
    return isIntegerInRange (s, 1, 12);
}




function isDay (s)
{   if (isEmpty(s)) 
       if (isDay.arguments.length == 1) return defaultEmptyOK;
       else return (isDay.arguments[1] == true);   
    return isIntegerInRange (s, 1, 31);
}




function daysInFebruary (year)
{   // February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (  ((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0) ) ) ? 29 : 28 );
}

function isDate2 (year, month, day)
{   // catch invalid years (not 2- or 4-digit) and invalid months and days.

    if (! (isYear(year, false) && isMonth(month, false) && isDay(day, false))) return false;

    // Explicitly change type to integer to make code work in both
    // JavaScript 1.1 and JavaScript 1.2.
    var intYear = Number(year);
    var intMonth = Number(month);
    var intDay = Number(day);

    // catch invalid days, except for February
    if (intDay > daysInMonth[intMonth]) return false; 
    if ((intMonth == 2) && (intDay > daysInFebruary(intYear))) return false;

    return true;
}




/*
function prompt (s)
{   window.status = s
}
*/



function promptEntry (s)
{   window.status = pEntryPrompt + s
}




function warnEmpty (theField, s)
{   theField.focus()
    alert(mPrefix + s + mSuffix)
    return false
}




function warnInvalid (theField, s)
{   theField.focus()
    theField.select()
    alert(s)
    return false
}





function checkString (theField, s, emptyOK)
{   // Next line is needed on NN3 to avoid "undefined is not a number" error
    // in equality comparison below.
    if (checkString.arguments.length == 2) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (isWhitespace(theField.value)) 
       return warnEmpty (theField, s);
    else return true;
}

function checkFloat (theField, s, emptyOK)
{   // Next line is needed on NN3 to avoid "undefined is not a number" error
    // in equality comparison below.
    if (checkFloat.arguments.length == 2) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (!isFloat(theField.value)) 
       return warnInvalid (theField, iFloat);
    else return true;
}



function checkStateCode (theField, emptyOK)
{   if (checkStateCode.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else
    {  theField.value = theField.value.toUpperCase();
       if (!isStateCode(theField.value, false)) 
          return warnInvalid (theField, iStateCode);
       else return true;
    }
}


function reformatZIPCode (ZIPString)
{   if (ZIPString.length == 5) return ZIPString;
    else return (reformat (ZIPString, "", 5, "-", 4));
}


function checkZIPCode (theField, emptyOK)
{   if (checkZIPCode.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else
    { var normalizedZIP = stripCharsInBag(theField.value, ZIPCodeDelimiters)
      if (!isZIPCode(normalizedZIP, false)) 
         return warnInvalid (theField, iZIPCode);
      else 
      {  // if you don't want to insert a hyphen, comment next line out
         theField.value = reformatZIPCode(normalizedZIP)
         return true;
      }
    }
}



function reformatUSPhone (USPhone)
{   return (reformat (USPhone, "(", 3, ") ", 3, "-", 4))
}



function checkUSPhone (theField, emptyOK)
{   if (checkUSPhone.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else
    {  var normalizedPhone = stripCharsInBag(theField.value, phoneNumberDelimiters)
       if (!isUSPhoneNumber(normalizedPhone, false)) 
          return warnInvalid (theField, iUSPhone);
       else 
       {  // if you don't want to reformat as (123) 456-789, comment next line out
          theField.value = reformatUSPhone(normalizedPhone)
          return true;
       }
    }
}




function checkInternationalPhone (theField, emptyOK)
{   if (checkInternationalPhone.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else
    {  if (!isInternationalPhoneNumber(theField.value, false)) 
          return warnInvalid (theField, iWorldPhone);
       else return true;
    }
}



function checkEmail (theField,  s, emptyOK)
{   
	if (checkEmail.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else if (!isEmail(theField.value, false)) 
       return warnInvalid (theField, iEmail+s);
    else return true;
}




function reformatSSN (SSN)
{   return (reformat (SSN, "", 3, "-", 2, "-", 4))
}



function checkSSN (theField, emptyOK)
{   if (checkSSN.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else
    {  var normalizedSSN = stripCharsInBag(theField.value, SSNDelimiters)
       if (!isSSN(normalizedSSN, false)) 
          return warnInvalid (theField, iSSN);
       else 
       {  // if you don't want to reformats as 123-456-7890, comment next line out
          theField.value = reformatSSN(normalizedSSN)
          return true;
       }
    }
}




function checkYear (theField, emptyOK)
{   if (checkYear.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (!isYear(theField.value, false)) 
       return warnInvalid (theField, iYear);
    else return true;
}



function checkMonth (theField, emptyOK)
{   if (checkMonth.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (!isMonth(theField.value, false)) 
       return warnInvalid (theField, iMonth);
    else return true;
}



function checkDay (theField, emptyOK)
{   if (checkDay.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (!isDay(theField.value, false)) 
       return warnInvalid (theField, iDay);
    else return true;
}



function checkDate (yearField, monthField, dayField, labelString, OKtoOmitDay)
{   // Next line is needed on NN3 to avoid "undefined is not a number" error
    // in equality comparison below.
    if (checkDate.arguments.length == 4) OKtoOmitDay = false;
    if (!isYear(yearField.value)) return warnInvalid (yearField, iYear);
    if (!isMonth(monthField.value)) return warnInvalid (monthField, iMonth);
    if ( (OKtoOmitDay == true) && isEmpty(dayField.value) ) return true;
    else if (!isDay(dayField.value)) 
       return warnInvalid (dayField, iDay);
    if (isDate2 (yearField.value, monthField.value, dayField.value))
       return true;
    alert (iDatePrefix + labelString + iDateSuffix)
    return false
}



// Get checked value from radio button.

function getRadioButtonValue (radio)
{   for (var i = 0; i < radio.length; i++)
    {   if (radio[i].checked) { break }
    }
    return radio[i].value
}




// Validate credit card info.

function checkCreditCard (radio, theField){
  var cardType = getRadioButtonValue (radio)
  var normalizedCCN = stripCharsInBag(theField.value, creditCardDelimiters)
  if (!isCardMatch(cardType, normalizedCCN)) 
    return warnInvalid (theField, iCreditCardPrefix + iCreditCardSuffix);
  else {
    theField.value = normalizedCCN
    return true
  }
}

function isCreditCard(st) {
  if (st.length > 19)
    return (false);
  sum = 0; mul = 1; l = st.length;
  for (i = 0; i < l; i++) {
    digit = st.substring(l-i-1,l-i);
    tproduct = parseInt(digit ,10)*mul;
    if (tproduct >= 10)
      sum += (tproduct % 10) + 1;
    else
      sum += tproduct;
    if (mul == 1)
      mul++;
    else
      mul--;
  }
  if ((sum % 10) == 0)
    return (true);
  else
    return (false);

}


function isVisa(cc){
  if (((cc.length == 16) || (cc.length == 13)) && (cc.substring(0,1) == 4))
    return isCreditCard(cc);
  return false;
}  

//Sample number: 5500 0000 0000 0004 (16 digits)

function isMasterCard(cc){
  firstdig = cc.substring(0,1);
  seconddig = cc.substring(1,2);
  if ((cc.length == 16) && (firstdig == 5) &&
      ((seconddig >= 1) && (seconddig <= 5)))
    return isCreditCard(cc);
  return false;
}

//Sample number: 340000000000009 (15 digits)

function isAmericanExpress(cc){
  firstdig = cc.substring(0,1);
  seconddig = cc.substring(1,2);
  if ((cc.length == 15) && (firstdig == 3) &&
      ((seconddig == 4) || (seconddig == 7)))
    return isCreditCard(cc);
  return false;
}
//Sample number: 30000000000004 (14 digits)

function isDinersClub(cc){
  firstdig = cc.substring(0,1);
  seconddig = cc.substring(1,2);
  if ((cc.length == 14) && (firstdig == 3) &&
      ((seconddig == 0) || (seconddig == 6) || (seconddig == 8)))
    return isCreditCard(cc);
  return false;
}

function isCarteBlanche(cc){  return isDinersClub(cc);}

//Sample number: 6011000000000004 (16 digits)

function isDiscover(cc){
  first4digs = cc.substring(0,4);
  if ((cc.length == 16) && (first4digs == "6011"))
    return isCreditCard(cc);
  return false;
}

//Sample number: 201400000000009 (15 digits)

function isEnRoute(cc){
  first4digs = cc.substring(0,4);
  if ((cc.length == 15) &&
      ((first4digs == "2014") ||
       (first4digs == "2149")))
    return isCreditCard(cc);
  return false;
}

function isJCB(cc){
  first4digs = cc.substring(0,4);
  if ((cc.length == 16) && ((first4digs == "3088") ||
      (first4digs == "3096") || (first4digs == "3112") ||
      (first4digs == "3158") || (first4digs == "3337") ||
      (first4digs == "3528")))
    return isCreditCard(cc);
  return false;
}

function isAnyCard(cc){
  if (!isCreditCard(cc))
    return false;
  if (!isMasterCard(cc) && !isVisa(cc) && !isAmericanExpress(cc) && !isDinersClub(cc) &&
      !isDiscover(cc) && !isEnRoute(cc) && !isJCB(cc)) {
    return false;
  }
  return true;
}
function isCardMatch (cardType, cardNumber){
  //cardType = cardType.toUpperCase();
  var doesMatch = true;
  if ((cardType == "visa") && (!isVisa(cardNumber)))
	doesMatch = false;
  if ((cardType == "mc") && (!isMasterCard(cardNumber)))
 	doesMatch = false;
  if ( ( (cardType == "AMERICANEXPRESS") || (cardType == "AMEX") )
          && (!isAmericanExpress(cardNumber))) doesMatch = false;
  if ((cardType == "disc") && (!isDiscover(cardNumber)))
	doesMatch = false;
  if ((cardType == "JCB") && (!isJCB(cardNumber)))
	doesMatch = false;
  if ((cardType == "DINERS") && (!isDinersClub(cardNumber)))
	doesMatch = false;
  if ((cardType == "CARTEBLANCHE") && (!isCarteBlanche(cardNumber)))
 	doesMatch = false;
  if ((cardType == "ENROUTE") && (!isEnRoute(cardNumber)))
	doesMatch = false;
  return doesMatch;
}


