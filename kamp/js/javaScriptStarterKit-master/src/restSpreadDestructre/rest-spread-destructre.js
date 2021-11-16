// var,let,const

let student={id:1,name:"ömer"}
function save(puan=10,ogrenci) {
    
    console.log(puan+ " : "+ogrenci.name)
}
//save(undefined,student);

let students=["Engin Demiroğ","ömer oğur","halit kalaycı","engin toprak"];

//console.log(students)

let students2=[student,{id:2,name:"emre"},"Ankara",{city : "istanbul"}];
//console.log(students2)


//*********************************************rest**** (geriye kalan) arrayi birleştirme************
let showProducts = function (id,...products) {//üç nokta geriye kalanlar--> geriye kalanlar ürünler olsun şeklinde array olarak tanımlıyor rest parametre denir.
    console.log(id)
    console.log(products)
}
//showProducts(10,"elma","armut","karpuz")


   //spread**** arrayi ayrıştırma********************************
let points = [1,2,3,4,50,4,60,14]
//console.log(...points)
//console.log(Math.max(...points))

//console.log(..."ABC","D",..."EFG","H")


//Destructuring  elimizdeki arryin değerlerini değişkenlere atama yöntemi***********************************

let populations =[10000,20000,30000,[40000,10000]]
 let [small,medium,high,[veryhigh,maximum]] = populations

console.log(small)
console.log(medium)
console.log(high)   
console.log(veryhigh)
console.log(maximum)
 
function someFunction([small1],number) {
    console.log(small1)  
}
someFunction(populations)

let category = {id:1,name1:"İçecek",marka:"pepsi"}

let{id,name1,marka} = category

console.log(id)
console.log(name1)   //redux için önemli
console.log(marka)

