// chiedo l'email al mio utente
const emailUser = prompt("Inserire la propria E-mail")

// creo un contenitore per le email di sistema
const recordMail = ["matteotosini300@icloud.com","daniele@gmail.it","alessio@gmail.it"]



for (let x = 0; x < recordMail.length; x++) {
    const mail = recordMail[x];
    console.log(mail)
    // se 
    if(emailUser === mail){
        alert("Complimenti accesso effettuato")
    }
    if(emailUser != mail){
        alert("l'email non è presente nel sistema")
    }
}