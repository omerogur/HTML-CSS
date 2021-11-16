

let veri = prompt("Lütfen isminizi Giriniz")

let isim = document.querySelector("#name")

isim.innerHTML = `${veri.toUpperCase()} !`


function onClock() {
    var tarih = new Date()
    var gun = tarih.getDay();
    var saat = new Date().toLocaleTimeString();
    if (gun == 1) {
        gun = "Pazartesi";
      } else if (gun == 2) {
        gun = "Salı";
      } else if (gun == 3) {
        gun = "Çarşamba";
      } else if (gun == 4) {
        gun = "Perşembe";
      } else if (gun == 5) {
        gun = "Cuma";
      } else if (gun == 6) {
        gun = "Cumartesi";
      } else if (gun == 7) {
        gun = "Pazar";
      }


      document.querySelector("#clock").innerHTML = `${saat} ${gun};`

    }


setInterval(onClock, 1000); 