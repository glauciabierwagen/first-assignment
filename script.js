
const accountObject = {
  /*Inserting main variables of the object: name, balance, values for withdrawal and deposit*/
  accountName: "Gláucia Silva Bierwagen",  
  option: 1, 
  valueWith: 1,
   date : new Date(2022, 5, 8, 3, 12, 0, 0),
  balance: 100.00,
  depoSit: 0.00, 
  number: 0,
  /*Function getBalance - to display the account balance for the user*/
  getBalance: function() {
    message = alert(`Your balance in the account is: $ ${this.balance}. 
                    Is there anything else would you like to do? 
                    Click on OK to go back to the main menu.`);
    return(atm());
  }, 
/*Function makeDeposit - asking and allowing the user to do deposit.*/
  makeDeposit: function() {
    depoSit = parseInt(prompt("How much would you like to deposit? Type the value."));
    /*conditions if/else statement: a user should not be able to deposit 0, empty string or string or negative values. */
      if ((depoSit >= 1) && (depoSit != " ")) {
        this.balance = depoSit + this.balance;
          message = alert(`The value of : $ ${depoSit} was deposited with sucess. 
                          Now the total balance is $ ${this.balance}. 
                          Is there anything else you would like to do? 
                          Click on OK to go back to the main menu`);
          return(atm()); 
        } else {
          message = alert(`It is not a valid number! 
                          Is there anything else would you like to do? 
                          Click on OK to go back to the main menu.`);
          return(atm()); 
        }
  },
  /*Function withDrawal -  asking and allowing the user to do withdrawal.*/ 
  withDrawal: function() {
    valueWith = parseInt(prompt("How much would you like to withdrawal? Type the value"));
    /*conditions if/else statement: a user should not be able to deposit 0, empty string or string or negative values. */
      if ((valueWith < this.balance) && (valueWith>=1) && (valueWith!= " ")) {
        this.balance = this.balance - valueWith;
          message = alert(`Processing withdrawal. 
                          Take the money out of the tray. 
                          Your actual balance is:  ${this.balance}. 
                          Is there anything else you would like to do? 
                          Click on OK to go back to the main menu.`);
          return(atm()); 
        } else {
          message = alert(`Your balance is not enough to do this withdrawal.
                          Or it is not a valid number.`);
          return(atm());
        }
  },
  /*Function getAccountName - to display the user's name of the account and the date*/
  getAccountName: function() {
    message = alert(`In the ${this.date}, the account name is: ${this.accountName}. 
                    Is there anything else would you like to do? 
                    Click on OK to go back to the main menu.`);
    return(atm()); 
  },
  /*Function accountError was created to verify if the user can access the account. It was created a fictitious account number. 
  Possibly it isn't a type of number which exist in real life. The account's number is a number between 1000 and 9999 */
  accountError: function() {
    number = parseInt(prompt("Type the number of your account (Four digits).")); 
    if ((number>=1000) && (number<=9999) && (number!= " ")) {
      return (atm()); 
    } else {
    message = alert(`The number the account is wrong.
                    Letters and empty values are not allowed.
                    Only numbers with four digits are allowed.
                     Try it again!`);// I used the information about numbers under 1000 are not allowed, but I think that is unsecure in real life. 
    return (accountObject.accountError());
  }
  }
};

alert(accountObject.accountError());//Call the function accountError()
// Function atm() holds the actual menu
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
  } while (option!=0) /*&& (option<=4)*/; 
  alert(`Thank you for using our services.`);
  exit();   
}
alert(atm());//Call the function atm()

     