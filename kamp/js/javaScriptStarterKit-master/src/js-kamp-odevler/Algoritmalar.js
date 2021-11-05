// Sınırsız parametre ile Asal Sayı Bulma
function findasal(...numbers) {
   
    console.log("lütfen 1 den büyük pozitif bir tam sayı giriniz")
     
    for (let x = 0; x < numbers.length; x++) {
        let asal=true; 
    for (let i = 2; i < numbers[x]; i++) {
        if(numbers[x]%i==0){
            asal=false;
            break;
    }       
}
if (asal) {
    console.log("Bu sayı asaldır : ("  +numbers[x]+")")
} else {
    console.log("Bu sayı asal değildir :(" +numbers[x]+")")
}
}
}
findasal(1,10,50,35,5,7,13,15)


let toplam1=0;
let toplam2=0;
  

// Girilen 2 Sayı Arkadaş Sayı mı Kontrol
function arkadasSayilar(sayi1,sayi2) {
    for (let i = 0; i < sayi1; i++) {
        if(sayi1%i==0){
            toplam1=toplam1+i
        }
        
    }

    for (let i = 0; i < sayi2; i++) {
        if(sayi2%i==0){
            toplam2=toplam2+i
        }
        
    }
    console.log(sayi1,sayi2)
    console.log(toplam1,toplam2)

    if(toplam1==sayi2 && toplam2==sayi1){
        console.log("girilen parametreler arkadaş sayıdır.")
    }else{
        console.log("girilen parametreler arkadaş sayı değildir.")
    }
}
arkadasSayilar(220,284)

 // 1-1000 arası mükemmel sayılar
     let total = 0
    for (let i = 1000; i > 0; i--) {
        let total = 0
        for (let k = 0; k < i; k++) {
            if(i%k==0){
                total = total+k
            }
            
        }
        if(total==i){
            console.log(i+" Mükemmel Sayıdır")
        }
        
    }
    


    //1 den 1000e kadar asal sayılar

    for (let i = 1000; i > 1; i--) {
        let asal=true;
        for (let k = 2; k < i; k++) {
            if(i%k==0){
                asal=false;
            }
            
        }
        if(asal==true){
        console.log(i+" asaldır.")
        }
        
    }