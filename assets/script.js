// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt criteria for password
function generatePassword() {
  var passwordLength = prompt("Pleaae choose the length of the password (at least 8 charaters, less than 128 characters)");
  if (passwordLength >= 8 && passwordLength <= 128) {

    return passwordLength;

  } else {

    alert('Invalid Entry');
    generatePassword();

  }

  var includeLower = prompt("Would you like to include lowercase letters? Reply: Yes or No")
  if (includeLower.toUpperCase() === 'YES') {

    return includeLower;

  } else if (includeLower.toUpperCase() === 'NO') {

    return includeLower

  } else {

    alert('Invalid Entry');
    generatePassword();

  }

  var includeUpper = prompt("Would you like to include uppercase letters? Reply: Yes or No")
  if (includeUpper.toUpperCase() === 'YES') {
    return includeUpper;
  } else if (includeUpper.toUpperCase() === 'NO') {
    return includeUpper;
  } else {
    alert('Invalid Entry');
    generatePassword();

  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

