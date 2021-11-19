/* documentId ile querySelector kullanımı ***************
let t1 = document.getElementById('title'   //dogrudan erişim
t1.innerHTML = "degişim"
textInfo=t1.innerHTML
let link = document.querySelector("ul#d1>li>a"  // #id ile de erisiliyor
link.innerHTML ="link bilgisi değişti"
textInfo=link.innerHTML
link.style.color ="red"      // css işlemleri
link.classList.add("dddd"  //class ekleme */


/*promp kullanımı *************
var kelime=prompt("Adını gir","ornek:ali"
let baslik =document.querySelector("#baslik"
baslik.innerHTML = (`$){baslik.innerHTML}  <span style="color:red">$){kelime}</span> deneme`
textInfo=baslik.innerHTML */


//liste içerisindeki son  elemana ulaşmak veya eleman eklemek*********************
/*let item = document.querySelector("ul#list>li:last-child"
textInfo=item
item.innerHTML = "son öge değişti last-child"

let item2=document.querySelector("ul#list>li:first-child"
item2.innerHTML = "ilk öge değişti"

 let ulDOM = document.querySelector("ul#list"
 let liDOM = document.createElement("li"
 liDOM.innerHTML ="Kendi Oluşturduğumuz öge"
 ulDOM.prepend(liDOM // başa ekleme
  ulDOM.append(liDOM sona ekleme */

/* listeye input ile veri eklemek 
let ekle = document.querySelector("#buton"
let list = document.querySelector("#list"
var veri = document.querySelector("#veri"

ekle.addEventListener("click", function ekleme( ){
    var v1 = document.createElement("li"
    v1.innerHTML = veri.value
    list.append(v1
    veri.value = ""
};
*/
const SMILE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`
const SAD = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`


function greetings2(firstName,lastName) {
    
    let don = `Merhaba ${firstName} ${lastName}`
    return don
}

 let info = greetings2("ömer ","oğur")
 
console.log(info)


function domIdWriteInfo(id,info) {
    
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}
htmlINfo = `<h1 style ="color:red">COLOr REDDDDD </h1>`

domIdWriteInfo("info",htmlINfo)





const helloFuncV1 = (firstName,lastName) =>{
    let info= (`Merhaba ${firstName} ${lastName}`)
    console.log(info)
    return info
}

helloFuncV1("parametre1","parametre2")

function greet(who) {
    return `Hello, ${who}!`
  }
 console.log( greet("John"))