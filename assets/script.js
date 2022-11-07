// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt criteria for password
function generatePassword() {
  var length = 0;
  var lowercase = "";
  var uppercase = "";
  var numeric = ""
  var specialchars = "";
  var charSet = "";
  var final = "";

  // Prompts for Length of Password
  var passwordLength = prompt("Pleaae choose the length of the password (at least 8 charaters, less than 128 characters)");
  if (passwordLength >= 8 && passwordLength <= 128) {

    length = passwordLength;

  } else {

    alert('Invalid Entry');
    generatePassword();

  }

  // Prompts for use of Lower Case Letters
  var includeLower = prompt("Would you like to include lowercase letters? Reply: Yes or No")
  if (includeLower.toUpperCase() === 'YES') {

    lowercase = "abcdefghijklmnopqrstuvwxyz";

  } else if (includeLower.toUpperCase() === 'NO') {

    lowercase = "";

  } else {

    alert('Invalid Entry');
    generatePassword();

  }

  // Prompts for use of Upper Case Letters
  var includeUpper = prompt("Would you like to include uppercase letters? Reply: Yes or No");
  if (includeUpper.toUpperCase() === 'YES') {

    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  } else if (includeUpper.toUpperCase() === 'NO') {

    uppercase = "";

  } else {

    alert('Invalid Entry');
    generatePassword();

  }

  // Prompts for use of Numeric Characters
  var includenumbers = prompt(`Would you like to include "numeric" characters? Ex: 12345 Reply: Yes or No`);
  if (includenumbers.toUpperCase() === 'YES') {

    numeric = "1234567890"

  } else if (includenumbers.toUpperCase() === 'NO') {

    numeric = "";

  } else {

    alert('Invalid Entry');
    generatePassword();

  }

  // Prompts for use of Special Characters
  var includeSpecialChars = prompt(`Would you like to include "Special" characters? Ex: !"#$%& Reply: Yes or No`);
  if (includeSpecialChars.toUpperCase() === 'YES') {

    specialchars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  } else if (includeSpecialChars.toUpperCase() === 'NO') {

    specialchars = "";

  } else {

    alert('Invalid Entry');
    generatePassword();

  }

  charSet = lowercase + uppercase + numeric + specialchars;

  for (i = 0; i < length; i++) {
    
    // Using 'charAt()' method to return a specified character at a specific index in the string
    final += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

return final
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

