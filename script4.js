
const accountObject = {
  /*Inserting main variables of the object: name, balance, values for withdrawal and deposit*/
  accountName: "Gláucia Silva Bierwagen",  
  option: 1, 
  valueWith: 1,
  date : new Date(2022, 1, 20, 3, 12, 0, 0),
  balance: 100.00,
  depoSit: 0.00, 
  number: 0,

  /*Function getBalance - to display the account balance for the user*/
  getBalance: function() {
    return `Your balance in the account is: $ ${this.balance}. 
    Is there anything else would you like to do? 
    Click on OK to go back to the main menu.`;
  }, 
/*Function makeDeposit - asking and allowing the user to do deposit.*/
  makeDeposit: function() {
    depoSit = parseInt(prompt("How much would you like to deposit? Type the value."));
    /*conditions if/else statement: a user should not be able to deposit 0, empty string or string or negative values. */
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
  /*Function withDrawal -  asking and allowing the user to do withdrawal.*/ 
  withDrawal: function() {
    valueWith = parseInt(prompt("How much would you like to withdrawal? Type the value"));
    /*conditions if/else statement: a user should not be able to deposit 0, empty string or string or negative values. */
      if ((valueWith < this.balance) && (valueWith>=1) && (valueWith!= " ")) {
        this.balance = this.balance - valueWith;
          return `Processing withdrawal. 
          Take the money out of the tray. 
          Your actual balance is:  ${this.balance}. 
          Is there anything else you would like to do? 
          Click on OK to go back to the main menu.` 
        ;
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
/*Function accountError was created to verify if the user can access the account. It was created a fictitious account number. 
Possibly it isn't a type of number which exist in real life.  */
function accountError() {
  number = parseInt(prompt("Type the number of your account (Four digits)")); 
  if ((this.number>=1) && (this.number<=9999) && (this.number!= " ")) {
    return (atm()); 
  } else {
  message = alert(`The number the account is wrong. Try it again!`);
  return (accountError());
}
}
alert(accountError());
// Ver se dá para fazer retornos na funcão accountError e retorno para o menu inicial
function atm() {
  
  do {
  option = parseInt(prompt("Select a choice:\n1 - See balance.\n2 - Make a deposit.\n3 - Make a withdrawal.\n4 - Get account name. \n0 - Exit\n Type a number.")); //Initial menu
  /*Explaining switch use: for me with a more than three possibilities is a better alternative way of writting a complicated than if/else statement.
 Moreover, I tried to practice coding with switch in this assignment. */ 
  switch (option) {
  case 1:
  return(accountObject.getBalance()); 
  break;
  case 2:
    return(accountObject.makeDeposit());
    break;
  case 3:
    return(accountObject.withDrawal());
    break;  
  case 4:
    return(accountObject.getAccountName());
  break;
  }
  } while (option != 0); 
  alert(`Thank you for using our services.`);
}
alert(atm());

     