
/*get the number of characters*/


function charLength() {
    
    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;
    

}


const btn = document.querySelector(".btn")

btn.addEventListener("click",function(){

    const range = document.getElementById('length').addEventListener('change', charLength)

    const upper = document.getElementById("uppercase")
    const lower = document.getElementById("lowercase")
    const numbers = document.getElementById("numbers")
    const symbols = document.getElementById("symbols")


    let cap = "";

    //for capital letters
    if (upper.checked === true) {
     cap += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    //for small letters
    if (lower.checked === true) {
         cap += "abcdefghijklmnopqrstuvwxyz"
        }
    //for numbers    
    if (numbers.checked === true) {
            cap += "0123456789"
           }
    //for symbols       
    if (symbols.checked === true) {
            cap += "[~! @#£€$¢¥§%^&*/()\\-_+={}[]:;\'<>,.?]"
           }

     
    let big = ""
    for(i=0;i<charLength();i++){
        //create random password with math random
        big += cap[Math.floor(Math.random() * cap.length)]

    }
 
    const result = document.getElementById("password__result")

    result.value = big   
})
