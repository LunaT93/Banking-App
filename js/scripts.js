function BankAccount(name) {
    this.name = name;
    this.balance = 0.00;
}

BankAccount.prototype.deposit = function(amount) {
    return this.balance += amount;
 }
 
 BankAccount.prototype.withdrawal = function(amount) {
     return this.balance -= amount;
 }
 
 BankAccount.prototype.acctInfo = function() {
     return [this.name, this.balance];
 }


function handleFormSubmission(event) {
    event.preventDefault();
    const name = document.querySelector("input#new-name").value;
    let bankAccount = new BankAccount(name);
    console.log(bankAccount.acctInfo());
}

window.addEventListener("load", function (){
    document.querySelector("form#register-acct").addEventListener("submit", handleFormSubmission);
  });