/*

Descrizione
Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch di altre 10 mail (sostituendo le altre)

*/

const newEl = document.getElementById('element')
const button = document.querySelector('.btn')

function goEmailsRandom() {
    for (let i = 0; i < 10; i++) {

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail?items=10') 
        .then((res) => {
            
            let elemn = document.createElement('li')
            
            elemn = res.data.response
    
            newEl.innerHTML += `<li>${elemn}</li>`
    
            console.log('è andata', res.data, elemn)
        })
        .catch((err) => {
            console.log('riprova', err)
        }) 
        
    }
}
goEmailsRandom()

button.addEventListener('click', () => {

    newEl.innerHTML = ''
    goEmailsRandom()

})