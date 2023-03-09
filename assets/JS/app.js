
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



    //uppercase
    if (upper.checked === true) {
        
    let big = ""
    for(i=0;i<charLength();i++){

        const cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        big += cap[Math.floor(Math.random() * cap.length)]

    }
 
    const result = document.getElementById("password__result")

    result.value = big
    }

    //lowercase
    if (lower.checked === true) {
        
        let small = ""
        for(i=0;i<charLength();i++){
    
            const cap = "abcdefghijklmnopqrstuvwxyz"
            small += cap[Math.floor(Math.random() * cap.length)]
    
        }
     
        const result = document.getElementById("password__result")
    
        result.value = small
        }

        //numbers
        if (numbers.checked === true) {
        
            let digit = ""
            for(i=0;i<charLength();i++){
        
                const cap = "0123456789"
                digit += cap[Math.floor(Math.random() * cap.length)]
        
            }
         
            const result = document.getElementById("password__result")
        
            result.value = digit
            }

            //symbols
            if (symbols.checked === true) {
        
                let sym = ""
                for(i=0;i<charLength();i++){
            
                    const cap = "[~! @#£€$¢¥§%^&*/()\\-_+={}[]:;\'<>,.?]"
                    sym += cap[Math.floor(Math.random() * cap.length)]
            
                }
             
                const result = document.getElementById("password__result")
            
                result.value = sym
                }

                //upper and lower
                if (upper.checked === true && lower.checked === true) {
        
                    let letter = ""
                    for(i=0;i<charLength();i++){
                
                        const cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
                        letter += cap[Math.floor(Math.random() * cap.length)]
                
                    }
                 
                    const result = document.getElementById("password__result")
                
                    result.value = letter
                    }

                    //uppper and lower and number
                    if (upper.checked === true && lower.checked === true && numbers.checked === true) {
        
                        let letter = ""
                        for(i=0;i<charLength();i++){
                    
                            const cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
                            letter += cap[Math.floor(Math.random() * cap.length)]
                    
                        }
                     
                        const result = document.getElementById("password__result")
                    
                        result.value = letter
                        }

                        //upper and lower and number and symbol
                        if (upper.checked === true && lower.checked === true && numbers.checked === true && symbols.checked === true) {
        
                            let letter = ""
                            for(i=0;i<charLength();i++){
                        
                                const cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789[~! @#£€$¢¥§%^&*/()\\-_+={}[]:;\'<>,.?]"
                                letter += cap[Math.floor(Math.random() * cap.length)]
                        
                            }
                         
                            const result = document.getElementById("password__result")
                        
                            result.value = letter
                            }

    

    
    

    
    
})

