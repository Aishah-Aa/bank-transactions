class Transactions {
  amount: Number;
  date: Date;
  constructor(amount: number, date: Date) {
    this.amount = amount;
    this.date = date;
  }
}

const transaction1 = new Transactions(100, new Date());

console.log(transaction1);
