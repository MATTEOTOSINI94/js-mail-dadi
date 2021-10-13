const userNumber = [1,2,3,4,5,6]
const pcNumber = [1,2,3,4,5,6]
let msg = ""
let match = false

for (let x = 0; x < userNumber.length; x++) {
    const element = Math.floor(Math.random() * userNumber[x]);
    console.log(element)

    for (let y = 0; y < pcNumber.length; y++) {
        const pcNum = Math.floor(Math.random() * pcNumber[y]);
        
        if (element > pcNum){
            match = true  
        }
    
        else{
        }
    }

   
    
}

if (match){
    msg = "hai vinto"
    console.log= msg
}
else{
    msg ="hai perso"
    console.log= msg
}

alert(msg)