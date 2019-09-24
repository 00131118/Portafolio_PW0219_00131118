function guessNum(){
    let arr = [];
    let result = false;
    for(i=0; i<21; i++){
        arr[i] = Math.floor(Math.random() * 10);
    }
    console.log("Arreglo creado");
    let num = prompt("Ingrese un número:");
    for(i=0; i<arr.length; i++){
        if(num == arr[i]){
            result = true;
        }
    }
    if(result){
        console.log("¡Ganaste! Adivinaste un número :D");
    }
    else{
        console.log("Perdiste :( Sigue intentando.");
    }
    console.log("Arreglo creado: " + arr);
}