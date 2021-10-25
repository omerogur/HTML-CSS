// var,let,const

let student={id:1,name:"ömer"}
function save(puan=10,ogrenci) {
    
    console.log(puan+ " : "+ogrenci.name)
}
save(undefined,student);

let students=["Engin Demiroğ","ömer oğur","halit kalaycı","engin toprak"];

console.log(students)

let students2=[student,{id:2,name:"emre"},"Ankara",{city : "istanbul"}];
console.log(students2)