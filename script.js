let parola = prompt("inseisci parola");


function giraparola () {
    let letters = parola.split("");
    console.log(letters);
    let parolagirata = "";
    for (let i = letters.length -1; i >= 0; i--){//questo for funziona al contrario cosi da permetermi di legere da lultima lettera del for
        parolagirata += letters[i];

    
    }
    return parolagirata;

    function parolaPalindroma(parolagirata);
}


function parolaPalindroma(parolagirata){
    if(parolagirata === parola ){
        //parola palindroma
    } else{
        //parola non palindroma
    }
}

console.log(giraparola());
