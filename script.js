


function inserisciparola (){
    let parola = prompt("inseisci parola");

    let risultato = document.getElementById('risultato');


    function giraparola () {
        let fixmaiuscole = parola.toLowerCase();
        let letters = fixmaiuscole.split("");
        console.log(letters);
        console.log(fixmaiuscole);
        let parolagirata = "";
        for (let i = letters.length -1; i >= 0; i--){//questo for funziona al contrario cosi da permetermi di legere da lultima lettera del for
            parolagirata += letters[i];

        }

        if(parolagirata == fixmaiuscole){
            risultato.innerText = (`La parola (${parola}) è palindroma`)
        } else{
            risultato.innerText = (`La parola (${parola}) non è palindroma`)
        }
        return parolagirata;
    }
console.log(giraparola());
}




document.getElementById("palindroma").addEventListener("click", inserisciparola);