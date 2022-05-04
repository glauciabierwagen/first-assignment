// BANK ACCOUNT

// REQUIREMENTS
// Create an object called account that has the following properties:
// - accountName, should be the data type string
// - balance, should be the data type number
// - getBalance, should be a function
// - deposit, also a function
// - withdrawal, also a function
// - getAccountName, function as well
// - accountError, same as above function!
// EXTRA: exitAccount, should be a function
// EXTRA = optional

const accountName = "Gláucia Bierwagen";
let balance = 100;
const number = parseFloat(prompt("Select a choice. 1) See balance. 2) Make a deposit. 3) Make a withdrawl. 4) Get Account Name. 5) Exit. Type a number"));
alert(number);
if (number == 1) {
  function getBalance() { 
    return`balance is ${this.balance}`;
  }
  alert(`The balance is ${balance}`);
  let number = parseFloat(prompt("Select a choice. 1) See balance. 2) Make a deposit. 3) Make a withdrawl. 4) Get Account Name. 5) Exit. Type a number."));
  } else if (number == 2){
    const value = parseFloat(prompt("How much would you like to deposit? Type the value.")); 
    function deposit() { 
      if (value >= 1  && value != " ") {
      totalBalance = balance + value;
      alert(`Now the total balance is ${this.totalBalance}`);
      } else {
        alert("It is a not valid number!");
    }
  }
   else if (number == 3) {
    const value2 = parseFloat(prompt("How much money would you like to withdrawal? Type the value.")); 
    function widthdrawl() { 
      if (value2 >= 1  && value2 != " ") {
      totalBalance2 = balance - value2;
      alert(`Now the total balance is ${this.totalBalance2}`);
    } else {
      alert("It is a not valid number!");
    }
  }     
    console.log("That was a not cool number");
  } else if (number == 4) {
    console.log("That was a not cool number");
 } else if (number !== 5) {
  console.log("That was a not cool number");}
  else {
    alert("It is a not valid number!");
  }


/*switch (number) {
  case "1":
    number = "1";
    alert(number);
    function getBalance() { 
      alert(`The balance is ${balance}`);
      return `${this.balance}`;
    }
    alert(`The balance is ${balance}`);
    //const message = parseFloat(prompt("Select a choice. 1) See balance. 2) Make a deposit. 3) Make a withdrawl. 4) Get Account Name. 5) Exit. Type a number."));
  break;*/
  /*case "2":
    number = 2;
    function deposit() { 
      prompt("How much would you like to deposit? Type the value."); 
      value: 1;
      if (value <= 0) {
        alert("It is not a valid value!");
      } else {
        balance = balance + value;
        return balance;
      }
      alert(`The balance is ${balance}`);
      break;*/
  /*default:
    console.log("Not a valid number");*/     
    
  /*case "3":
      console.log("Write some codes examples");
      break;
  case "4":
      console.log("Give studentes feedback");
      console.log("Got to the gym");
      break;
  default:
      console.log("Not a valid number");       
};*/ 


/*const accountObject = {
  accountName: "Gláucia Bierwagen",
  balance: 100,
  number: 1, 
  atm: function choice() {
    const message = parseFloat(prompt("Select a choice. 1) See balance. 2) Make a deposit. 3) Make a withdrawl. 4) Get Account Name. 5) Exit. Type a number."));
  const number = 1;
  console.log(number);
    return e;
  },
}*/
//const message = parseFloat(prompt("Select a choice. 1) See balance. 2) Make a deposit. 3) Make a withdrawl. 4) Get Account Name. 5) Exit"));


/*function atm() {
  const message = parseFloat(prompt("Select a choice. 1) See balance. 2) Make a deposit. 3) Make a withdrawl. 4) Get Account Name. 5) Exit"));
  const number = 1;
  switch (number) {
    case 1:
      getBalance: function() { 
      return `${this.balance}`;
      }
      console.log(`The balance is ${this.getbalance()}`);
      break;
    case 2:
      prompt("Make a deposit"); 
      console.log("Prepare for theory lesson");
        break;
    case 3:
    case 4:
        console.log("Write some codes examples");
        break;
    case 5:
        console.log("Give studentes feedback");
        console.log("Got to the gym");
        break;
    default:
        console.log("Not a valid number");       
  }
}*/

/*const glauciaObject2 = {
  firstName2: "Glaucia",
  lastName: "Silva",
  birthYear: 1978,
  age: 2022 - 1978,
  job2: "teacher", 
  cats: ["Samba", "Kika", "Juca"],
  hasDriversLicense2: true,

  calcAge: function() {
    console.log(this);
    return 2022 - this.birthYear;
  },
  getSummary: function() {
    return `${this.firstName2} is a ${this.calcAge()} years old ${this.job2
    }. And she has ${this.hasDriversLicense2 ? "a" : "no"} drivers license`;
  }
};
console.log(glauciaObject2.getSummary());*/


//Switch is an alernative way of writing a complicated if/else statement//

/*const number = 1;
switch (number) {
    case 1:
        function getBalance() { 
        console.log(balance);
        return `The balance is ${this.balance}`;
      }
      break;
    case 2:
      prompt("Make a deposit"); 
      console.log("Prepare for theory lesson");
        break;
    case 3:
    case 4:
        console.log("Write some codes examples");
        break;
    case 5:
        console.log("Give studentes feedback");
        console.log("Got to the gym");
        break;
    default:
        console.log("Not a valid number");       
}
*/

/*console.log(accountObject);

function chocolateCake(butter, chocolate, eggs) {
  const cake = `A simple cake with ${butter} cup of butter, ${chocolate} cup of chocolate and ${eggs} eggs`;
  return cake;
}*/

// The object properties should work as following:
// - accountName: the account holders name
// - balance: total amount of the account should be initiated with 100 from start
// - getBalance: a function that should display the total balance of the account
// - deposit: a function that will deposit a certain amount into the account
// - withdrawal: a function that will withdraw the desired amount of money from the account
// - getAccountName: a function to display the account holders name
// - accountError: trick question! you need to think about this and how to use it
// but keep in mind that we do not want to repeat our code. So what could you use this function for?
// EXTRA (OPTIONAL): exitaccount - a function that should close the whole window. You need to do some research yourself and
// see if you can figure this one out.

// Remember that a function is just a value. And if a function is just a
// value then we can both pass it as a parameter to a function and
// pass it as a property of an object.

// The object should handle all of the functionality (logic)

// You also need to create a function called atm()
// The atm() function should be responsible for showing the user interface
// and based on the user input show the right meny choice

// In this assignment you will practice:
// Objects
// Functions
// This keyword
// Statements and operators

// && operator
// || operator

// A user should NOT be able to deposit och withdraw negative number!
// A user should NOT be able to deposit or withdraw an empty string, leaving the input empty
// A user should NOT be able to withdraw a larger total sum that the actual balance of the account
// A user should NOT be able to put anything that is NOT a number in the input

// In this assignment you do not have to create any HTML you will only output
// to the console. But you will use prompt instead of just regular console.

// to handle one of the potential errors you can use this built in method:
//const variableName = 10;
//isNaN(variableName);

//function atm() {
  //const message = parseFloat(prompt("Display message"));
  // you need to answer the question why we are using parseFloat() method here
  // either use a if/else statement or a switch. Write a comment and motivate your choice
//}*/
