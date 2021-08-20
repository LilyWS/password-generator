// Assignment Code
var generateBtn = document.querySelector("#generate");

var letters = "abcdefghijklmnopqrstuvwyxz";
var upperCase = letters.toUpperCase(); 
var numbers = "1234567890";
var special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var hasLowerCase = true;
var hasUpperCase = true;
var hasNumber = true;
var hasSpecialChar = true;

var password = "";

function generatePassword() {
  //CODE HERE
  let pLength = 12;
  let password = "";
  let possible = "";

  hasLowerCase = true;
  hasUpperCase = true;
  hasNumber = true;
  hasSpecialChar = true;

  let selections = [hasLowerCase, hasUpperCase, hasNumber, hasSpecialChar]; 
  let selected = 0;
  selections.forEach(element => {if(element){selected+=1}});
  console.log(selected);
  
  //randomly generate
  for(let i=0; i<pLength-selected+1; i++){
    if (hasLowerCase) {
      possible += letters[Math.floor(Math.random()*letters.length)];
    }
    if (hasUpperCase) {
      possible += upperCase[Math.floor(Math.random()*upperCase.length)];
    }
    if (numbers) {
      possible += numbers[Math.floor(Math.random()*numbers.length)];
    }
    if (hasSpecialChar) {
      possible += special[Math.floor(Math.random()*special.length)];
    }
  }

  

  return(password);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

if (password) {
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
