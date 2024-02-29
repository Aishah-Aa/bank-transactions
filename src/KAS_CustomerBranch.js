class Customer {
    constructor(name, id) {
        this.name = name 
        this.id = id 
        this.transactions =  []

    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getTransactions() {
        return this.transactions
    }

    getBalance() {
        let balance = 0
        balance = this.transactions.forEach((transaction) => (balance += transaction))
        return balance 

    }

    addTransactions(amount) {
        this.transactions.push(amount)

    }

}
// create the customer based on our constructor 
const person1 = new Customer("bashayr", 1);
person1.addTransactions(800)
person1.addTransactions(400)
 

let personId =  person1.getId(); 
console.log(personId); 
let personName = person1.getName("Bashayr")
console.log(personName)
console.log(person1)
console.log(person1.getTransactions())
console.log(person1.getBalance())

