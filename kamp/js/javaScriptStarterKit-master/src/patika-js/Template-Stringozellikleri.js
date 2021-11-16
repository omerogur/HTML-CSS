

// Template Literals --- 
let ornek = "sayın kullanıcı"
let info =`Merhaba ${ornek} sitemize hosgeldin 
 metnin uzunlugu: ${ornek.length} 
 borcunuz ${3+5} 
 metnin ilk harif ${ornek[0]} `
console.log(info)
// *************************** ``  
// String icinde istidigimiz bilgiyi aramak  .search("")    indexOf(); 

// belli bir yere kadar al   slice();

// bilgiyi değiştirme ---->< replace('eski bilgi','yeni bilgi')

// istediğim bilgi var mı ? ---->> includes('@')   true false olarak değer verir
let email = "deneme3434@gmail.com"
let DOMAIN = email.slice(email.search("@"))
console.log(DOMAIN)

console.log(DOMAIN.search("."))
console.log(DOMAIN.indexOf("@"))





