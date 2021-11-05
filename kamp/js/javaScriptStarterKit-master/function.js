//1.11.2021  JS KAMP 2.DERS

function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi : ürün :"+productName+" adet"+quantity)
}
//addToCart("elma");
addToCart(10)
//addToCart("karpuz")

let sayHello=() =>{
    console.log("hello world!")
}
sayHello();

let sayHello2 = function name(params) {
    console.log("hello world! 2")

}
sayHello2();

function addToCart2(productName,quantity,unitPrice) {
    
}
addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("LİMon",3,15)

function addToCart3(product) {
    console.log("Ürün :" +product.productName)
    console.log("birim fiyat :" +product.unitPrice)
    console.log("adet :" +product.quantity)
    
}
let product1 = {productName:"Elma",unitPrice:10,quantity:5}
addToCart3(product1)


let product2 = {productName:"Elma",unitPrice:10,quantity:5}
let product3 = {productName:"Elma",unitPrice:10,quantity:5}
product2=product3
product2.productName="KARPUZ"
console.log(product3.productName)


function addToCart4(x) {

    console.log(products);
}

let products = [
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
] 

addToCart4(products)


function add(...numbers) {
    for (let i = 0; i< numbers.length; i++) {
          console.log(numbers[i])        
    }
}


let findPrime = (...numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        let isPrime = true;
        if (numbers[i] < 1) {
            console.log("Invalid number(" + numbers[i] + ")");
            continue;
        }
        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] % j === 0) {
                isPrime = false;
                break;
            };
        }
        if (isPrime === true) {
            console.log("This number is prime number.(" + numbers[i] + ")")
        } else {
            console.log("This number is not prime number.(" + numbers[i] + ")")
        }
    }
}



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
        
        for (let k = 0; k < i; k++) {
            if(i%k==0){
                total = total+k
            }
            
        }
        if(total==i){
            console.log(i+" Mükemmel Sayıdır")
        }
        total = 0;
    }
    


    //1 den 1000e kadar asal sayılar

    for (let i = 1000; i > 1; i--) {
        let asal=true;
        for (let k = 0; k < i; k++) {
            if(i%k==0){
                asal=false;
            }
            
        }
        if(asal){
        console.log(i+" asaldır.")
        }
        
    }