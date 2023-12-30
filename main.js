function passResult(){
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

    allowedChar += includeLower ? lowerChar : "";
    allowedChar += includeUpper ? upperChar : "";
    allowedChar += includeNumber ? number : "";
    allowedChar += includeSymbol ? symbol : "";

    console.log(allowedChar);

    if(length < 8){
        alert("The password length must be at minimum 8");
    }else{
        if(allowedChar.length === 0){
            alert("At least one set of characters must be selected");
        }else{
            for(let i = 0; i<length; i++){
                const random = Math.floor(Math.random()*allowedChar.length);
                password += allowedChar[random];
            }
            
            document.getElementById('passGenerated').value = password;
            
            console.log(`Generated password: ${password} with length ${password.length}`);
        }
    }
    
}

function copyPassword(){
    document.getElementById("passGenerated").select();
    document.execCommand("copy");
}
