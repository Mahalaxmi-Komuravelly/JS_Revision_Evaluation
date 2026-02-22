function BankAccount(){
    let balance = 0;
    let transactions = [];
    return {
        deposit(amount){
            if(typeof amount !== "number" || amount < 0){
                return "Deposit must be Positive"
            }
            balance += amount;
            transactions.push({type:"Deposit",amount,balance});
            return `Deposit:${amount} and Balance:${balance}`
        },
        withdraw(amount){
            if(typeof amount !== "number" || amount < 0){
                return "Withdraw amount must be Positive"
            }
            if(amount > balance){
                return "Insufficient balance"
            }
            balance -= amount;
            transactions.push({type:"Withdraw",amount,balance});
            return `Withdraw:${amount} and Balance:${balance}`
        },
        getBalance(){
            return balance;
        },
        getTransactionHistory(){
            return transactions
        }
    }
};

let createAccount = BankAccount();
console.log(createAccount.deposit(4000));
console.log(createAccount.withdraw(2000));
console.log(createAccount.getBalance());
console.log(createAccount.getTransactionHistory());


