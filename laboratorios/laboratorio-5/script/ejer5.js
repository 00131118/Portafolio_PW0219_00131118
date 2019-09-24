function palindrome(word){
    let normal = Array.from(word);
    let reversed = Array.from(word).reverse();
    if(normal.toString() == reversed.toString()){
        console.log("La palabra es palíndroma");
    }
    else{
        console.log("La palabra no es palíndroma");
    }
    console.log("Palabra original: " + normal);
    console.log("Palabra al revés: " + reversed);
}