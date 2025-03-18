import { Transaction } from "./Transaction";

export class BankAccount{

    balance: number;
    transaction: Transaction[]

    constructor(balance: number){
        this.balance = balance;
        this.transaction = [];
    }

    //deposer des sous
    deposite(somme:number): void {
        this.balance +=somme;
        //ajout de la transaction
        let transaction = new Transaction(new Date, somme, "dépôt")

        //ajouter la transaction
        this.transaction.push(transaction) 
    }

    //retirer des sous
    withdraw(somme:number): void {
        if(this.balance > 0){
            this.balance-=somme;
            //ajout
            let transaction = new Transaction(new Date(), somme, "retrait");
            this.transaction.push(transaction);
        }else{
            console.log(`solde insuffisnat`);
        }
        
    }

    displayHistory() :void{
       
        //afficher les transactions
        console.log("Liste des transactions : \n");
        this.transaction.forEach(t => { 
            //1 
            console.log(`date : ${t.date} - ${t.type}:  ${t.montant} \n`)
            //2
            console.log(`${t.date.toISOString()}, Type: ${t.type}, Montant: ${t.montant}€ \n`);
            // 3
            console.log(`${t.date.getDate()}/${t.date.getMonth()+1}/${t.date.getFullYear()} - D${t.montant}€ \n`);
        });
        console.log(`La balance aprés opération est de : ${this.balance}€ \n`);
    }

    transfer(c: BankAccount,montant: number) : void{

        this.withdraw(montant);
        c.deposite(montant);
    }

}

