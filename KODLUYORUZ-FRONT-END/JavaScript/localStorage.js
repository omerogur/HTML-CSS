let user = {userName: "ömer oğur",isActive:true}
localStorage.setItem('userInfo',JSON.stringify(user))
 
let userInfo = localStorage.getItem("userInfo")
userInfo = JSON.parse(userInfo)
console.log(userInfo)


let items = [1,2,3,user]

console.log(items)
localStorage.setItem("newItem",JSON.stringify(items)) 
let itemsInfo =JSON.parse(localStorage.getItem("newItem"))

console.log(itemsInfo)

 ///// bölüm sonu calısması ***////
let increaseDOM=document.querySelector("#increase")
let decreaseDOM=document.querySelector("#decrease")
let counterDOM = document.querySelector("#counter")
let counter=localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0
counterDOM.innerHTML = counter;

increaseDOM.addEventListener("click",clickEvent)
decreaseDOM.addEventListener("click",clickEvent)

function clickEvent() {
   this.id == "increase" ? counter+=1 : counter -=1
   localStorage.setItem("counter",counter)
   counterDOM.innerHTML=counter
}

