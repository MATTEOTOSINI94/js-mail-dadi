const userNumber = Math.floor(Math.random() * 6)
const pcNumber =  Math.floor(Math.random() * 6)

console.log(userNumber)
console.log(pcNumber)

if(userNumber === pcNumber){
    alert("pari")
}

else if(userNumber < pcNumber){
    alert("hai vinto")
}
else if(userNumber > pcNumber){
    alert("hai perso")
}
