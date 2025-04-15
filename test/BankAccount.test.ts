import { BankAccount } from "../POO/BankAccount"; 

describe("BankAccount", () => {

  it("should initialize with the correct balance", () => {
    const account = new BankAccount(100);
    expect(account.balance).toBe(100);
    expect(account.transaction.length).toBe(0);
  });

  it("should deposit money and create a transaction", () => {
    const account = new BankAccount(100);
    account.deposite(50);

    expect(account.balance).toBe(150);
    expect(account.transaction.length).toBe(1);
    expect(account.transaction[0].type).toBe("dépôt");
    expect(account.transaction[0].montant).toBe(50);
  });

  it("should withdraw money and create a transaction if balance is sufficient", () => {
    const account = new BankAccount(100);
    account.withdraw(40);

    expect(account.balance).toBe(60);
    expect(account.transaction.length).toBe(1);
    expect(account.transaction[0].type).toBe("retrait");
    expect(account.transaction[0].montant).toBe(40);
  });

  it("should not withdraw money if balance is insufficient", () => {
    const account = new BankAccount(30);
    account.withdraw(50);

    expect(account.balance).toBe(30); // no change
    expect(account.transaction.length).toBe(0); // no transaction added
  });

  it("should transfer money between accounts", () => {
    const accountA = new BankAccount(100);
    const accountB = new BankAccount(50);

    accountA.transfer(accountB, 40);

    expect(accountA.balance).toBe(60);
    expect(accountB.balance).toBe(90);
    expect(accountA.transaction.length).toBe(1);
    expect(accountB.transaction.length).toBe(1);
    expect(accountA.transaction[0].type).toBe("retrait");
    expect(accountB.transaction[0].type).toBe("dépôt");
  });

});
