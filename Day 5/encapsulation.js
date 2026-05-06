class BankAccount {
    #balance = 0; // private variable | Access modifier
 
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. Current Balance: ₹${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
 
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. Current Balance: ₹${this.#balance}`);
        } else {
            console.log("Withdrawal amount must be positive and less than or equal to the current balance.");
        }
    }
 
    getBalance() {
        return this.#balance;
    }
}
 
const AryanAccount = new BankAccount();
AryanAccount.deposit(1000);
AryanAccount.withdraw(200);
// AryanAccount.balance = 10000;
console.log(`Final Balance: ₹${AryanAccount.getBalance()}`);
 
const PriyaAccount = new BankAccount();
PriyaAccount.deposit(500);
PriyaAccount.withdraw(1000);
console.log(`Final Balance: ₹${PriyaAccount.getBalance()}`);
 


//------------------------------Example for Encapsulation--------------------------------------------------------------------------------------------------------------------


class Student {
    #marks = 0; // if we use # it means that it is private variable

    GotMarks(score) {
        if (score > 0) {
            this.#marks += score;
            console.log(`Got Marks: ${score}. Total Marks: ${this.#marks}`);
        } else {
            console.log("Marks should be positive.");
        }
    }

    DeductedMarks(score) {
        if (score > 0 && score <= this.#marks) {
            this.#marks -= score;
            console.log(`Deducted Marks: ${score}. Total Marks: ${this.#marks}`);
        } else {
            console.log("Invalid marks deduction.");
        }
    }

    getMarks() {
        return this.#marks;
    }
}

const Prabhav = new Student();

Prabhav.GotMarks(90);
Prabhav.DeductedMarks(20);

console.log(`Final Marks: ${Prabhav.getMarks()}`);

const Aryan = new Student();

Aryan.GotMarks(75);
Aryan.DeductedMarks(100);

console.log(`Final Marks: ${Aryan.getMarks()}`);