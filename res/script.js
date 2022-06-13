/**
 * Function Defintions
 **************************************************************************************************/

/**
 * 
 * @returns 
 */
// Assignment code here
function getLength() {
  var length = window.prompt(
    "Please choose the length of your password (choose between 8 characters and 128 characters):"
  );

  // if password is less than 8 chars or greater than 128
  // alert the user to enter a valid input
  if (length < 8 || length > 128) {
    window.alert(length + " is an invalid password length. Please choose again");
    getLength();
  }
  return length;
}


function generatePassword() {
  var passLen = getLength();

  console.log(passLen);
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
/**
 * Main
 **************************************************************************************************/
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
