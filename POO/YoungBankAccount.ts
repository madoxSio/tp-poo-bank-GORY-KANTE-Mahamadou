import { BankAccount } from "./BankAccount";    

export class YoungBankAccount extends BankAccount{
    
    override withdraw(somme: number): void {
        console.log("!Vous ne pouvez pas retirer d'argent avec ce type de compte!\n");
    }

    public override transfer(compte: BankAccount, somme: number): void {
        console.log("!Vous ne pouvez pas effectuer de transfert d'argent avec ce type de compte!\n");
    }
}