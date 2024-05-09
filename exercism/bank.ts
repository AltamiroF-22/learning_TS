export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}

export class BankAccount {
  private _balance: number = 0;
  private accountStatus: boolean = false;

  open(): void {
    if (this.accountStatus) throw new ValueError();

    this.accountStatus = true;
  }

  close(): void {
    if (!this.accountStatus) throw new ValueError();

    this.accountStatus = false;
    this._balance = 0;
  }

  deposit(cash: number): void {
    if (!this.accountStatus) throw new ValueError();
    if (cash <= 0) throw new ValueError();

    this._balance = this._balance + cash;
  }

  withdraw(amount: number): number {
    if (amount > this._balance) throw new ValueError();
    if (amount <= 0) throw new ValueError();

    this._balance = this._balance - amount;

    return amount;
  }

  get balance(): number {
    if (!this.accountStatus) throw new ValueError();

    return this._balance;
  }
}

const account = new BankAccount();
account.open();
account.deposit(100)
account.deposit(50)
account.withdraw(75)
console.log(account.balance)

// Simulate a bank account supporting opening/closing, withdrawals, and deposits
// of money. Watch out for concurrent transactions!

// A bank account can be accessed in multiple ways. Clients can make deposits and
// withdrawals using the internet, mobile phones, etc. Shops can charge against the account.

// Create an account that can be accessed from multiple threads/processes (terminology depends
//  on your programming language).
// It should be possible to close an account; operations against a closed account must fail.
