//Palindrome Checker
function palindrome(str) {
    let temp = "" //declare string temp for the changes to the string.
    let result =''; //result of taking non alphanumerics out of string.
    //Initialize a temporary variable to reduce confusion
    temp = str;
    //Change string to lowercase.
    temp=temp.toLowerCase();
    //Take spaces out of string.
    //take special characters out of string
    //take numbers out of string
    //leaves only alphanumerics
    let ourRegex = /[a-z0-9]/gi;

    //Do regex
    result=temp.match(ourRegex);
    //Join the array into single element and convert to string. 
    result=result.join('')
    result=result.toString();
    //Reverse the word.
    let reverseResult = "";  
    for (let i = result.length - 1; i < 0; i--) {
      reverseResult = result[i]
      console.log(reverseResult)
    }
//Check to see if it is a palindrome
    if (result == reverseResult) {
      console.log('true')
      return true
      
    }
    return false
  }
  
  palindrome("1 eye for of 1 eye.");