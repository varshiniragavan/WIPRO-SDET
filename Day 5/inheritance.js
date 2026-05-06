class User {
    constructor(name) {
        this.name = name;
    }
    logIn() {
        console.log(`${this.name} has logged in.`);
    }
}
 
class Admin extends User {
    constructor(name, role) {
        super(name); // call the parent class constructor
        this.role = role;
    }
    logIn() {
        super.logIn(); // call the parent class method
        console.log(`${this.name} has admin privileges as a ${this.role}.`);
    }
}
 
const user1 = new User("Alice");
const admin1 = new Admin("Bob", "Super Admin");
 
user1.logIn(); // Alice has logged in.
admin1.logIn(); // Bob has logged in. Bob has admin privileges as a Super Admin.
 


//-------------------------------------Example for inheritance--------------------------------------------------------------------------------------------------------------


class Account { // Account is Parent class here 
    constructor(AccountholderName) {
        this.AccountholderName = AccountholderName;
    }

    details() {
        console.log(`${this.AccountholderName} has a bank account.`);
    }
}

class SavingsAccount extends Account {
    constructor(AccountholderName, balance) {
        super(AccountholderName); // Calling parent class constructo here
        this.balance = balance;
    }

    details() {
        super.details(); // Calling Praent class here
        console.log(`${this.AccountholderName} has a balance of ₹${this.balance}.`);
    }
}

const acc1 = new Account("Prabhav");
const save1 = new SavingsAccount("Aryan", 50000);

acc1.details(); 
save1.details(); 



//-------------------------------------------------------------------------------------------------------------------------------------------------------