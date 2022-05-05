
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

/*const accouuntObject = {
  accountName: "Glaucia Silva Bierwagen",
  lastName: "Silva",
  birthYear: 1978,
  age: 2022 - 1978,
  job: "teacher", 
  cats: ["Samba", "Kika", "Juca"],
  hasDriversLicense2: true,

  getBalance: function() {
    console.log(this);
    return 2022 - this.birthYear;
  },
  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()} years old ${this.job
    }. And she has ${this.hasDriversLicense2 ? "a" : "no"} drivers license`;
  }
};
console.log(glauciaObject.getSummary());*/

let accountName = "Glaucia Silva Bierwagen";
let option, valueWith;
let balance = 100.00;
let depoSit = 0.00;

do {
function atm () {
  return `Your option is ${this.option}`;
}
option = parseInt(prompt("Select a choice:\n1 - See balance.\n2 - Make a deposit.\n3 - Make a withdrawal.\n4 - Get account name. \n0 - Exit\n Type a number.")); // MENU inicial
switch (option) {
case 1:
  function getBalance(){ 
    return`balance is ${this.balance}`;}
    alert(`Your balance in the account is: $ ${balance}. Is there anything else you would like to do? Click on OK to see main menu.`); 
  break;
case 2:
  function deposit(){
    return `deposit is ${this.deposit}`;
  }
     depoSit = parseInt(prompt("How much would you like to deposit? Type the value."))/*Opção pra saber o valor pra depositar*/
       if (depoSit>=1 && depoSit != " ") {
       alert("The value of : $ "+depoSit+" was deposited with sucess.");
       balance = balance + depoSit;
       alert(`Now the total balance is $ ${balance}`);
      } else {
        alert("It is a not valid number!");}
      break;
case 3:
  valueWith = parseInt(prompt("Qual o valor do saque:"));
  if (valueWith>balance) {
      alert("Your balance is not enough to do this withdrawal.")
  } else {
      balance = balance - valueWith;
      alert("Processing withdrawal");
      alert("....... Take the money out of the tray");
      alert("Thank you for using our services!");
      alert(`Your actual balance is:  ${balance}. Is there anything else you would like to do? Click on OK to see main menu.`);
  }
  break;
  case 4:
    function getAccountName() { 
      return`account name is ${this.accountName}`;
    }
    alert(`The account name is:  ${accountName}. Is there anything else you would like to do? Click on OK to see main menu.`); 
    break;
  }
} while (option != 0);

