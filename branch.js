class Branch {
    constructor(name) {
        this.name = name;
        this.customers = [];
    }
    getName() {
        return this.name
    }

    getCustomers() {
        return this.customers
    }
    addCustomer(customer) {
        this.customers.push(customer);

    }

}

const branch = new Branch("riyadh");
const customer = { name: "Thoa", id: 111 };
const customer2={name:"renad",id:999};
const customer3={name:"azeez",id:777};
branch.addCustomer(customer);
branch.addCustomer(customer2)
branch.addCustomer(customer3)
const customerList = branch.getCustomers();
console.log(customerList)


