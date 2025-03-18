export class Transaction{
    date: Date;
    montant: number;
    type: string;

    constructor(date: Date, montant: number, type: string){
        this.date = date;
        this.montant=montant;
        this.type=type;
    }    
}