//Caesars Cipher
//Decode messages that are offset by 13 alphabetical places, but do not mess with special characters.
function rot13(str) {
    let ascii = 0;
    let temp ="";
    let new_String="";
    for (let i = 0; i < str.length; i++) {
        ascii=str.charCodeAt(i);
        //console.log(ascii)
        if (ascii>= 65 && ascii <=90) {
            ascii += 13;
            if (ascii > 90) {
                ascii -= 26;
            }
            
        }
        temp=String.fromCharCode(ascii);
        new_String += temp;
        //console.log(new_String);

    }
    return new_String;
  }
  
  rot13("SERR PBQR PNZC!!~!");
