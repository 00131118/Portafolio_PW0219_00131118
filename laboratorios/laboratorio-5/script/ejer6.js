function ordenAsc(arr){
    let ant = 0;
    let post = 0;
    for(i=0; i<arr.length; i++){
        if(arr[i] >= arr[i++]){
            ant = arr[i++];
            post = arr[i];
            arr[i++] = post;
            arr[i] = ant;
        }
    }
    console.log(arr);
}