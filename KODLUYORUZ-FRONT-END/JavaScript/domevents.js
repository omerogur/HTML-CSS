
/*let greeting = document.querySelector("#greeting")
greeting.addEventListener("mouseover",domClick)

function domClick(){
    console.log("tıklandı")
    this.innerHTML = "bilgi degisti"
    this.style.color = "red"
}

*/


let increaseDOM=document.querySelector("#increase")
let decreaseDOM=document.querySelector("#decrease")
let counterDOM = document.querySelector("#counter")
let counter=0;
counterDOM.innerHTML = counter;

increaseDOM.addEventListener("click",function () {
    
    
    counterDOM.innerHTML = counter;
})
decreaseDOM.addEventListener("click",function () {
    
    counter--;
    counterDOM.innerHTML = counter;
    console.log("tik")
})


