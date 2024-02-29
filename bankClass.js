class Bank {     //OBJECT
         // name : string
        // branches: Branch[]

    constructor(name){ 
        this.name = name    //PROPTIES
        this.branchs = []
    }

    addBranch(branch){     //METHODS
        this.branchs.push(branch)
    }

    getBranchs(){
        return this.branchs
        // return JSON.stringify(this.branchs, null,2)
    }

    getname (){
        return this.name
    }

     
    addCustomer(customer){
        let branch =this.branchs.find((branch) => branch === branch);
        if (branch) {
            branch.addCustomer(customer);
        }
        // this.customer.push(customer)   first try 
    }

    // getCustomer(){
    //     return this.customer   **
    // }

    addCustomerTransactions(branch,customerId,amount){
       let branch = this.branchs.find((branch) => branch.name === branch.name );
       if (branch){
        branch.addCustomerTransaction(customerId,amount);
       }
    }

    findBranchByName(branchName){

    }


}

const ksaBank = new Bank ("suthksa")
const branch = {
    name:"KSA" ,
    customers: [
        {
            name:"raneem",
            id:1,
            transactions:[
                {
                    amount:7,
                    date:"5.7.2024",
                },
            ],
        }
    ],
} 

console.log(JSON.stringify(Bank.getBranches(), null, 2))