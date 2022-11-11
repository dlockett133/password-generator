// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy")
// Variables for criteria
var length = 0;
var lowercase = "";
var uppercase = "";
var numeric = ""
var specialchars = "";
var charSet = "";
// var final = "";

// Keeps count of each criteria that is included
var count = 0;

// Prompts user for password lengths
function passwordLengthPrompt () {
  var passwordLength = prompt("Pleaae enter the length of the password (at least 8 charaters, less than 128 characters)");
  if (passwordLength >= 8 && passwordLength <= 128) {

    length = passwordLength;

  } else {

    alert('Invalid Entry');
    passwordLengthPrompt();

  }
}

// Prompts for use of Lower Case Letters
function lowercasePrompt () {

  var includeLower = window.confirm("Would you like to include lowercase letters?")
  if (includeLower === true) {

    lowercase = "abcdefghijklmnopqrstuvwxyz";
    count++;
    
  } else if (includeLower === false) {

    lowercase = "";

  } else {

    alert('Invalid Entry');
    lowercasePrompt();

  }
}

// Prompts for use of Upper Case Letters
function upperCasePrompt () {

  var includeUpper = window.confirm("Would you like to include uppercase letters?");
  if (includeUpper === true) {

    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    count++;
    
  } else if (includeUpper === false) {

    uppercase = "";

  } else {

    alert('Invalid Entry');
    upperCasePrompt();

  }
}

 // Prompts for use of Numeric Characters
function numericPrompt () {

  var includenumbers = window.confirm(`Would you like to include "numeric" characters? Ex: 12345`);
  if (includenumbers === true) {
 
    numeric = "1234567890"
    count++;
    
  } else if (includenumbers === false) {
 
    numeric = "";
 
  } else {
 
    alert('Invalid Entry');
    numericPrompt();
 
  }
}

// Prompts for use of Special Characters
function specialCharsPrompt () {

  var includeSpecialChars = window.confirm(`Would you like to include "Special" characters? Ex: !"#$%&`);
  if (includeSpecialChars === true) {
  
    specialchars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    count++;
    
  } else if (includeSpecialChars === false) {
  
    specialchars = "";
  
  } else {
  
    alert('Invalid Entry');
    specialCharsPrompt();
  }
}

// Prompts/Calls all of the criteria to generate a password
function generatePassword() {

  //container for generated password
  var final = "";
  passwordLengthPrompt();
  lowercasePrompt();
  upperCasePrompt();
  numericPrompt();
  specialCharsPrompt();

  // Confirms if at least ONE criteria (besides passwordLegth) is included
  if (count <= 0) {
  alert(`Please choose at least ONE criteria.`);
  generatePassword();
  }

  // Concatenates all criteria into one string
  charSet = lowercase + uppercase + numeric + specialchars;

  // Using for loop and 'charAt()' method to return a specified character at a specific index in the string
  for (i = 0; i < length; i++) {
    final += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

return final;
}

// Write password to the #password input
function writePassword() {
  var password = ""
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Copies generated password to clipboard
function copyPassword() {
  //Selects all text from the textarea
  document.querySelector("#password").select();
  document.execCommand('copy');
  window.alert(`Your passward is copied!`);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listerner to copy button
copyBtn.addEventListener("click", copyPassword);