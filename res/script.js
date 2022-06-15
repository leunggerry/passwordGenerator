/**
 * Global Constants
 **************************************************************************************************/
//define upper and lower case alphabet
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const upperAlpha = alpha.map((i) => String.fromCharCode(i));
const lowerAlpha = upperAlpha.map((letter) => String.fromCharCode(letter.charCodeAt(0) + 32));

/**
 * Global Variables
 **************************************************************************************************/

var passLen;
var includeUpCase;
var includeLowCase;
var includeNumeric;
var includeSpecialChar;

/**
 * Function Defintions
 **************************************************************************************************/

/**
 *
 * @returns
 */

// getLength()
// get user password length
function getLength() {
  var length = window.prompt(
    "Please choose the length of your password (choose between 8 characters and 128 characters):"
  );

  // if password is less than 8 chars or greater than 128
  // alert the user to enter a valid input
  console.log(typeof length);
  if (typeof length != "number" || length < 8 || length > 128) {
    window.alert(length + " is an invalid password length. Please choose again.");
    getLength();
  }
  return length;
}

// getUpperCase()
// Ask if user wants upper case letters in password
function getUpperCase() {
  var isUpper = window.prompt(
    "Do you want upper case letters in your password? (Please enter Yes/Y/No/N)"
  );

  // if it is Not one of Yes/Y/No/N then ask the user for a valid input
  if (isUpper !== "Yes" && isUpper !== "Y" && isUpper !== "No" && isUpper !== "N") {
    window.alert(isUpper + " is and invalid input. Please enter a valid input.");
    getUpperCase();
  }

  // Return true if upperCase is included otherwise false
  if (isUpper === "Yes" || isUpper === "Y") {
    return true;
  } else {
    return false;
  }
}

// getLowerCase()
// Ask if user wants lower case letters
function getLowerCase() {
  var isLower = window.prompt(
    "Do you want lower case letters in your password? (Please enter Yes/Y/No/N)"
  );

  // Validate user input
  // if it is Not one of Yes/Y/No/N then ask the user for a valid input
  if (isLower !== "Yes" && isLower !== "Y" && isLower !== "No" && isLower !== "N") {
    window.alert(isLower + " is and invalid input. Please enter a valid input.");
    getLowerCase();
  }

  // Return true if lowerCase is included otherwise false
  if (isLower === "Yes" || isLower === "Y") {
    return true;
  } else {
    return false;
  }
}

// getNumeric()
function getNumeric() {
  var isNumeric = window.prompt(
    "Do you want numerals(0-9) in your password? (Please enter Yes/Y/No/N)"
  );

  // Validate user input
  // if it is Not one of Yes/Y/No/N then ask the user for a valid input
  if (isNumeric !== "Yes" && isNumeric !== "Y" && isNumeric !== "No" && isNumeric !== "N") {
    window.alert(isNumeric + " is and invalid input. Please enter a valid input.");
    getNumeric();
  }

  // Return true if numerals are included otherwise false
  if (isNumeric === "Yes" || isNumeric === "Y") {
    return true;
  } else {
    return false;
  }
}

// getSpecialChar()
// Ask if the user wants special characters
function getSpecialChar() {
  var isSpecChar = window.prompt(
    "Do you want special characters(!@#$%^&) in your password? (Please enter Yes/Y/No/N)"
  );

  // Validate user input
  // if it is Not one of Yes/Y/No/N then ask the user for a valid input
  if (isSpecChar !== "Yes" && isSpecChar !== "Y" && isSpecChar !== "No" && isSpecChar !== "N") {
    window.alert(isSpecChar + " is and invalid input. Please enter a valid input.");
    getSpecialChar();
  }

  // Return true if special characters are included otherwise return false
  if (isSpecChar === "Yes" || isSpecChar === "Y") {
    return true;
  } else {
    return false;
  }
}

function generatePassword() {
  passLen = getLength();
  includeUpCase = getUpperCase();
  includeLowCase = getLowerCase();
  includeNumeric = getNumeric();
  includeSpecialChar = getSpecialChar();

  console.log(passLen + includeUpCase + includeLowCase + includeNumeric + includeSpecialChar);

  // if no password options are select
  // ask the user to restart the process
  if (!includeLowCase && !includeUpCase && !includeNumeric && !includeSpecialChar) {
    // 1. Alert the user than no option was selected
    // and ask the user to select at least one password
    // option
    // 2. Recall the function
    var generatePasswordConfirm = window.confirm(
      "Invalid Password Options. Please include one of the options (Lower Case, Upper Case, Numerals, or Special Characters)"
    );

    // Confirm they want to generate password again
    if (generatePasswordConfirm) {
      generatePassword();
    }
  }

  // generate
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
