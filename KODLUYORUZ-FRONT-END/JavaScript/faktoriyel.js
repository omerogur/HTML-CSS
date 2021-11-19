//faktoriyel 
function factorial(x) {
    var toplam=1;
    for (var i = 1; i <= x; i++) {
         toplam *=i;   
        
    }
    //console .log(toplam)
    return toplam

}

console.log(factorial(4))



