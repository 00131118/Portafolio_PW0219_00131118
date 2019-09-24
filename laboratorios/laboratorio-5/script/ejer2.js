function sumProm(arr){
    let suma = 0;
    let n = 0;
    for(i=0; i<arr.length; i++){
        suma += arr[i];
        n++;
    }
    console.log("La suma es: " + suma);
    console.log("El promedio es: " + suma/n);
}