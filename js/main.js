/*

Descrizione
Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch di altre 10 mail (sostituendo le altre)

*/


axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail?items=10') 
    .then((res) => {
        const newEl = document.getElementById('element')
        let elemn = document.createElement('li')
        elemn = res.data.response

        newEl.append(elemn)

        console.log('è andata', res.data, elemn)
    })
    .catch((err) => {
        console.log('riprova', err)
    }) 