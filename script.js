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
  let pLength = prompt("How long should your password be? \nMust be between 8-128 characters (inclusive). ");
  while(pLength < 8 || pLength > 128){
    let pLength = prompt("Please enter a number between 8-128");
  }
  let password = "";
  let possible = "";

  hasLowerCase = confirm("Would you like lower case characters?");
  hasUpperCase = confirm("Would you like upper case characters?");
  hasNumber = confirm("Would you like numbers?");
  hasSpecialChar = confirm("Would you like special characters?");

  let selections = [hasLowerCase, hasUpperCase, hasNumber, hasSpecialChar]; 
  let selected = 0;
  //there is most likely a more elegeant way to set this variable.
  selections.forEach(element => {if(element){selected+=1}});
  
  //randomly generate string for password to pick from.
  //I've done it this way to encourage an even distribution of each type of character
  for(let i=0; i<pLength-selected+1; i++){
    if (hasLowerCase) {
      possible += letters[Math.floor(Math.random()*letters.length)];
    }
    if (hasUpperCase) {
      possible += upperCase[Math.floor(Math.random()*upperCase.length)];
    }
    if (hasNumber) {
      possible += numbers[Math.floor(Math.random()*numbers.length)];
    }
    if (hasSpecialChar) {
      possible += special[Math.floor(Math.random()*special.length)];
    }
  }
  //we generate a possible string with a length of password * selected 
  //this creates in essence an array where each element contains one type of each selected character
  //we then pick randomly from these and move on to the next set of characters
  //the first 'element' is used in its entirety to comepletely ensure one characted of each type is used 
  //its possible to implement this in one for loop but i've decided to prioritize readability (also that sounds harder)  

  password += possible.substring(0, selected);
  for(let i=0; i<pLength-selected; i++){
    let random = Math.floor(Math.random()*selected);
    password+=possible[selected+i*selected+random];//picks random character from each 'element'
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
