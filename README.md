Algorithmic Design Document:

Initialize function to add variables?

function bankAccount(name) {
    this.name = name;
    this.balance = 0.00;
}

bankAccount.prototype.deposit = function(amount) {
   return this.balance += amount;
}

bankAccount.prototype.withdrawal = function(amount) {
    return this.balance -= amount;
}

bankAccount.prototype.acctInfo = function() {
    return [this.name, this.balance];
}

