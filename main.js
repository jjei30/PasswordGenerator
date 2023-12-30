function passResult(){
    //Assigning each variable the input from the user
    let length = document.getElementById("length").value;
    let includeLower = document.getElementById("lowercaseCheck").checked;
    let includeUpper = document.getElementById("uppercaseCheck").checked;
    let includeNumber = document.getElementById("numberCheck").checked;
    let includeSymbol = document.getElementById("symbolCheck").checked;
    
    let allowedChar = "";
    let password = "";

    const lowerChar = "abcdefghijklmnopqrstuvwxyz";
    const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "1234567890";
    const symbol = "!@#$%^&*()_+-=";
    //Allowedchar will add one of the above characters depending on if there is a true value, if not then nothing will be added to the allowedChar
    allowedChar += includeLower ? lowerChar : "";
    allowedChar += includeUpper ? upperChar : "";
    allowedChar += includeNumber ? number : "";
    allowedChar += includeSymbol ? symbol : "";

    console.log(allowedChar);
    //Checks whether the minimum is at least 8 and if there is a character set selected
    if(length < 8){
        alert("The password length must be at minimum 8");
    }else{
        if(allowedChar.length === 0){
            alert("At least one set of characters must be selected");
        }else{
            //Creates a randomly generated password depending on the length and according to the allowed characters
            for(let i = 0; i<length; i++){
                const random = Math.floor(Math.random()*allowedChar.length);
                password += allowedChar[random];
            }
            //Shows the password generated on the webpage
            document.getElementById('passGenerated').value = password;
            
            console.log(`Generated password: ${password} with length ${password.length}`);
        }
    }
    
}

function copyPassword(){
    document.getElementById("passGenerated").select();
    document.execCommand("copy");
}
