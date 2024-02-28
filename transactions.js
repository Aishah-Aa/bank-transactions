class Transactions {
  constructor(amount, date) {
    this.amount = amount;
    this.date = date;
  }
}

const transaction1 = new Transactions(100, "28-02-2024");

console.log(transaction1);
