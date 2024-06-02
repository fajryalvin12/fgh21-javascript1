function segitigaSiku(panjang){
    let printSegitiga = "";

    for(i = 0; i < 5; i++){
        for(j = 0; j > i; j--){
            printSegitiga = '* ';
        }
    
    }   printSegitiga = '\n';
    
    return printSegitiga; 
}
console.log(segitigaSiku(5))