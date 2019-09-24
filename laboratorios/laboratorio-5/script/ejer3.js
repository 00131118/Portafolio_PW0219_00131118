function ocurrencias(num, arr){
    let numOcu = 0;
    for(i=0; i<arr.length; i++){
        if(num == arr[i]){
            numOcu++;
        }
    }
    console.log("El número de ocurrencias es: " + numOcu);
}