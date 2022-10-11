const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let boxEl = document.getElementById("input-box-el")
let boxEl2 = document.getElementById("input-box-2-el")

function generatePassword() {
   const passwordLength = 15
   const password = ""
   
   for (let i = 0; i < passwordLength; i++) {
       let randomChar = Math.floor(Math.random() * characters.length)
       boxEl.textContent += characters[randomChar]
       boxEl2.textContent += characters[randomChar]
   }
}








