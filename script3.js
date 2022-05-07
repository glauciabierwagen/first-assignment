
const accountObject = {
  /*Inserting main variables of the object: name, balance, values for withdrawal and deposit*/
  accountName: "Gláucia Silva Bierwagen",  
  option: 1, 
  valueWith: 1,
  date : new Date(2022, 1, 20, 3, 12, 0, 0),
  balance: 100.00,
  depoSit: 0.00, 

  /*Function getBalance - to display the account balance for the user*/
  getBalance: function() {
    return `Your balance in the account is: $ ${this.balance}. 
    Is there anything else would you like to do? 
    Click on OK to go back to the main menu.`;
  }, 
/*Function makeDeposit - asking and allowing the user to do deposit. 
A user should not be able to deposit 0, empty string or string or negative values. */
  makeDeposit: function() {
    depoSit = parseInt(prompt("How much would you like to deposit? Type the value."));
      if ((depoSit >= 1) && (depoSit != " ")) {
        this.balance = depoSit + this.balance;
          return `The value of : $ ${depoSit} was deposited with sucess. 
          Now the total balance is $ ${this.balance}. 
          Is there anything else you would like to do? 
          Click on OK to go back to the main menu`;
      } else {
          return `It is a not valid number! 
          Is there anything else would you like to do? 
          Click on OK to go back to the main menu.`;
      }
  },
  /*Function withDrawal -  asking and allowing the user to do withdrawal. 
A user should not be able to deposit 0, empty string or string or negative values. */
  withDrawal: function() {
    valueWith = parseInt(prompt("How much would you like to withdrawal? Type the value"));
    if ((valueWith < this.balance) && (valueWith>=1) && (valueWith!= " ")) {
      this.balance = this.balance - valueWith;
        return `Processing withdrawal. 
        Take the money out of the tray. 
        Your actual balance is:  ${this.balance}. 
        Is there anything else you would like to do? 
        Click on OK to go back to the main menu.`;
      } else {
        return`Your balance is not enough to do this withdrawal.
        Or it is not a valid number.`;
    }
  },
  /*Function getAccountName - to display the user's name of the account and the date*/
  getAccountName: function() {
    return`In the ${this.date}, the account name is: ${this.accountName}. 
    Is there anything else would you like to do? 
    Click on OK to go back to the main menu.`;
  },
};
/*Explaining switch use: for me with a more than three possibilities is a better alternative way of writting a complicated than if/else statement.
 Moreover, I tried to practice coding with switch in this assignment. */ 
function atm () {
  return option;
}
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
    break;  
  case 4:
    alert(accountObject.getAccountName());
  break;
  }
  } while (option != 0);
     