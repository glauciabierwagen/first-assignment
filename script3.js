
const accountObject = {
  accountName: "Gláucia Silva Bierwagen",
  option: 1, 
  valueWith: 1,
  date : new Date(2022, 1, 20, 3, 12, 0, 0),
  balance: 100.00,
  depoSit: 0.00,

  getBalance: function() {
    return `Your balance in the account is: $ ${this.balance}. Is there anything else would you like to do? Click on OK to see main menu.`;
  },

  makeDeposit: function(depoSit) {
      depoSit = parseInt(prompt("How much would you like to deposit? Type the value."));
       if ((depoSit >= 1) && (depoSit != " ")) {
       totalBalance = balance + depoSit;
       return `The value of : $ ${this.depoSit} was deposited with sucess.Now the total balance is $ ${this.totalBalance}. 
       Is there anything else you would like to do? Click on OK to see main menu`;
       } else {
        return `It is a not valid number!`;}
      },

  withDrawal: function() {
    valueWith = parseInt(prompt("How much would you like to withdrawal? Type the value"));
    if (valueWith > balance) {
      return`Your balance is not enough to do this withdrawal.`;
    } else {
      balance = balance - valueWith;
      return `Processing withdrawal. Take the money out of the tray. Your actual balance is:  ${this.balance}. 
      Is there anything else you would like to do? Click on OK to see main menu.`;
    }
},
  getAccountName: function() {
    return`In the ${this.date}, the account name is: ${this.accountName}. Is there anything else would you like to do? Click on OK to see main menu.`;
  },
 };
/*console.log(accountObject.accountName);
console.log(accountObject.date);
console.log(accountObject.getBalance());*/ 
do {
  option = parseInt(prompt("Select a choice:\n1 - See balance.\n2 - Make a deposit.\n3 - Make a withdrawal.\n4 - Get account name. \n0 - Exit\n Type a number.")); // MENU inicial
  switch (option) {
  case 1:
    alert(accountObject.getBalance()); 
    break;
  case 2:
    alert(accountObject.makeDeposit());
    break;
  case 3:
    alert(accountObject.withDrawal());
    console.log(accountObject.withDrawal());
    break;  
  case 4:
    alert(accountObject.getAccountName());
  break;
  }
   
      } while (option != 0);
     