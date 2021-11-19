let userFormDOM = document.querySelector("#userForm")
let userListDOM = document.querySelector("#userList")
userFormDOM.addEventListener("submit", formHandler)
const alertDOM= document.querySelector("#alert")
const alertFunction= (title,message) => `<div class="alert alert-danger alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#userName")
    const SCORE = document.querySelector("#score")

    if (USER_NAME.value && SCORE.value) {

        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = ""
        SCORE.value = ""
        console.log("test")
    } else {
        alertDOM.innerHTML = alertFunction("Baslik Bilgisi","Eksik Bilgi Kontrol Ediniz")
       // console.log("test")
    }

}

const addItem = (userName, score) => {

    let liDOM = document.createElement("li")
    liDOM.innerHTML = `${userName}
     <span class="badge bg-primary rounded-pill">${score}</span> `
    userListDOM.append(liDOM)
    liDOM.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")


}