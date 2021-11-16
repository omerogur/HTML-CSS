class Customer{
    constructor(id,customerNumber){
      this.id=id;
      this.customerNumber=customerNumber
    }

}

let customer = new Customer(1,"345");
customer.name="Murat Kurtboğan" //prototyping bir nesneye bambaşka bir özellik ekleyerek ekleyebiliriz. 
console.log(customer)
console.log(customer.customerNumber)

class IndividualCustomer extends Customer{

    constructor(firstName,id,customerNumber){
     super(id,customerNumber)
     this.firstName=firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
    }
}