// chiedo l'email al mio utente
const emailUser = prompt("Inserire la propria E-mail");

// creo un contenitore per le email di sistema
const recordMail = ["matteotosini300@icloud.com","daniele@gmail.it","alessio@gmail.it"];
let messageUser = "";

let match = false

for (let x = 0; x < recordMail.length; x++) {
    const mail = recordMail[x];
    console.log(mail);
    
    
    if(emailUser === mail){
      match = true
      console.log("sono dentro l'if")
    }
    else{
       console.log("sono dentro l'else")
    }

}
if (match){
    messageUser = "Complimenti hai effettuato l'accesso" 
}
else{
    messageUser= "l'email non è presente nel sistema"
}

alert(messageUser)