class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

class BankAccountVip extends BankAccount {
  constructor(initialAmount) {
    super(initialAmount)
  }

  deposit(amount) {
    if (amount >= 1000) {
      return super.deposit(amount + (amount *3)/100);
    } else {
      return super.deposit(amount)
    }
  }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(2200);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(2800);
bankAccountVip.deposit(1100);
bankAccountVip.view();