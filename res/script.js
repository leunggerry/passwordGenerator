/**
 * Global Constants
 **************************************************************************************************/
//define upper and lower case alphabet
// create array from of 26 entries from 65-90 (ASCII code for capital letters)
// convert the Decimal to the character representation
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const libraryUpperAlpha = alpha.map((i) => String.fromCharCode(i));
const libraryLowerAlpha = libraryUpperAlpha.map((letter) =>
  String.fromCharCode(letter.charCodeAt(0) + 32)
);
//generate array from 0-9
//convert array to string array
const nums = Array.from(Array(10)).map((e, i) => i + 48);
const libraryNums = nums.map((i) => String.fromCharCode(i));
const librarySpecialChar = Array.from("!@#$%^&*()");

/**
 * Global Variables
 **************************************************************************************************/

/**
 * Function Defintions
 **************************************************************************************************/

// getLength()
// get user password length
function getLength() {
  var length = parseInt(
    window.prompt(
      "Please choose the length of your password (choose between 8 characters and 128 characters):"
    )
  );
  // if password is less than 8 chars or greater than 128
  // alert the user to enter a valid input
  if (typeof length != "number" || length < 8 || length > 128) {
    window.alert(length + " is an invalid password length. Please choose again.");
    getLength();
  }
  return length;
}

// getUpperCase()
// Ask if user wants upper case letters in password
function getUpperCase() {
  var isUpper = window.confirm(
    "Do you want upper case letters in your password? (Please click Ok(Yes)/Cancel(No))"
  );

  return isUpper;
}

// getLowerCase()
// Ask if user wants lower case letters
function getLowerCase() {
  var isLower = window.confirm(
    "Do you want lower case letters in your password? (Please click Ok(Yes)/Cancel(No))"
  );

  return isLower;
}

// getNumeric()
// Ask if the user want numerical values
function getNumeric() {
  var isNumeric = window.confirm(
    "Do you want numerals(0-9) in your password? (Please click Ok(Yes)/Cancel(No))"
  );

  return isNumeric;
}

// getSpecialChar()
// Ask if the user wants special characters
function getSpecialChar() {
  var isSpecChar = window.confirm(
    "Do you want special characters(!@#$%^&*()) in your password? (Please enter click Ok(Yes)/Cancel(No))"
  );

  return isSpecChar;
}

// generateCharacterLibrary()
// Based on the inputs of:
//    - isLowCase
//    - isUpperCase
//    - isNumeric
//    - isSpecialCharacters
// Generate an array of character lists to create the password with and return the library
function generateCharacterLibrary(isLowCase, isUpperCase, isNumeric, isSpecialCharacters) {
  var charLibrary = [];

  // if lower case is include add lowCase to the library
  if (isLowCase) {
    // console.log("add low case");
    charLibrary = charLibrary.concat(libraryLowerAlpha);
  }
  if (isUpperCase) {
    // console.log("add up case");
    charLibrary = charLibrary.concat(libraryUpperAlpha);
  }
  if (isNumeric) {
    // console.log("add nums");
    charLibrary = charLibrary.concat(libraryNums);
  }
  if (isSpecialCharacters) {
    // console.log("add special char");
    charLibrary = charLibrary.concat(librarySpecialChar);
  }
  return charLibrary;
}

function generatePassword() {
  var passLen = getLength();
  var includeUpCase = getUpperCase();
  var includeLowCase = getLowerCase();
  var includeNumeric = getNumeric();
  var includeSpecialChar = getSpecialChar();

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

  // generate the library of characters where the password will be
  // created from
  var charLibrary = generateCharacterLibrary(
    includeLowCase,
    includeUpCase,
    includeNumeric,
    includeSpecialChar
  );

  var password = [];
  // use Math library random number gnerator to generate number between 0 and 1
  // to get an index into the character library array to add to the password
  for (let c = 0; c < passLen; c++) {
    var randomIdx = Math.floor(Math.random() * charLibrary.length);

    // console.log(randomIdx);
    password.push(charLibrary[randomIdx]);
  }

  password = password.join("");
  return password;
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
