//1.11.2021  JS KAMP 2.DERS

function add(...numbers) {   // rest toparlama
    for (let i = 0; i< numbers.length; i++) {
          console.log(numbers[i])        
    }
}

let numbers = [30,10,500,600,120] 
console.log(...numbers)   //spread ayrıştırma

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
{name:"İç Anadolu", population:"20m"},
{name:"Marmara", population:"30m"},
{name:"Karadeniz", population:"10m"},
[
    ["Ankara","Konya"],
    ["İstanbul","Bursa"],
    ["Sinop","Trabzon"],

]
]

console.log(icAnadolu)
console.log(icAnadoluSehirleri)
console.log(marmaraSehirleri)
console.log(karadenizSehirleri)

let newProductName,newUnitPrice,newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}  = {productName:"elma",unitPrice:10,quantity:5})

console.log(newProductName)

// js 3. hafta
