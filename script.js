var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // password length validation
    var isValid = false;
    // while length is not within 8 and 128,  display length prompt
    while (isValid == false) {
        var lengthPrompt = prompt("Enter length of at least 8 characters and no more than 128 characters.");
        var passwordLength = lengthPrompt;
        console.log(passwordLength);
        if (passwordLength > 7 && passwordLength < 129) {
            isValid = true;
        }
    }

    // prompt confirmation for each charcter types
    var charTypeConfirmLC = confirm("Would you like to include lowercase characters in your password?");
    var charTypeConfirmUC = confirm("Include uppercase characters?");
    var charTypeConfirmN = confirm("Include numeric characters?");
    var charTypeConfirmSC = confirm("Include special characters?");

    function generatePassword() {
        // define conditional character type strings
        var lowercase = "abcdefghijklmnopqrstuvwxyz";
        var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var numeric = "0123456789";
        var specialCharacters = ",.<>/?;:'+=_-";
        var passwordString = "";

        // initialize empty array for character type strings
        characterArray = [];
        // if LC selected, add LC charcter string (lowercase) 
        if (charTypeConfirmLC === true) {
            characterArray.push(lowercase);
            console.log(charTypeConfirmLC)
            passwordString += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
        }
        // if UC
        if (charTypeConfirmUC === true) {
            characterArray.push(uppercase);
            console.log(charTypeConfirmUC)
            passwordString += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
        }
        // if N
        if (charTypeConfirmN === true) {
            characterArray.push(numeric);
            console.log(charTypeConfirmN)
            passwordString += numeric.charAt(Math.floor(Math.random() * numeric.length));
        }
        // if SC
        if (charTypeConfirmSC === true) {
            characterArray.push(specialCharacters);
            console.log(charTypeConfirmSC)
            passwordString += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
        }
        console.log(characterArray);
        remainingCharCount = passwordLength - passwordString.length;
        console.log(remainingCharCount)

        // join conditional character strings to form character set (characters)
        characters = characterArray.join('');

        // add to passwordString from character set at random position while loop number <=  remaining password length
        for (var i = 0, n = characters.length; i < remainingCharCount; i++) {
            passwordString += characters.charAt(Math.floor(Math.random() * n));
        }
        return passwordString;
    }
    // select text area for password
    var passwordText = document.querySelector("#password");
    // set password equal to returned value of generatePassword function
    var password = generatePassword();
    // set text area equal to password
    passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);