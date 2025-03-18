import { BankAccount} from "./POO/BankAccount";
import { YoungBankAccount } from "./POO/YoungBankAccount";

const c1 = new BankAccount(100);
const c2 = new BankAccount(1000);
const c3 = new YoungBankAccount(500);

//dépôt et  retrait
c1.deposite(100);
c1.deposite(100);
c1.withdraw(100);

//transfer
c2.transfer(c1,500);

//test youngBankAccount
c3.withdraw(100);
c3.transfer(c1,100);

//afficahge de l'historique
c1.displayHistory();
c2.displayHistory();