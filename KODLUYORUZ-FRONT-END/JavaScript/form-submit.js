
let formDOM = document.querySelector("#userForm")

formDOM.addEventListener("submit",formSubmit)

function formSubmit(event) {
    event.preventDefault()   //default işlemi engelledik
    console.log("işlem gerçekleşti")
    let socreInputDOM = document.querySelector("#score")
    console.log(socreInputDOM.value) 
    localStorage.setItem("score",socreInputDOM.value)
}