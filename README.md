# First Assignment JavaScript
 <b> Course IT Women </b>

In this assignment you will make a small program that will simulate a bank account and atm (a cash machine). You will get some guidance that will help you solve this assignment.

In this assignment you will have to use:

- object
- functions
this keyword
- if/else statement or switch
- prompt or only the console
- conditional operators
- You will also have to handle errors, like wrong input. All functions for this assignment except the atm() function should be properties to the account object.

<b> Requirements </b>

A user should NOT be able to deposit och withdraw negative number!
A user should NOT be able to deposit or withdraw an empty string, leaving the input empty
A user should NOT be able to withdraw a larger total sum that the actual balance of the account
A user should NOT be able to put anything that is NOT a number in the input
You can find screenshots in this repo so you can see how a menu can look like.

<b> Guidance </b>

The objects should have the following properties. You can also see what data type each property should be. Object name: account Properties of the object: accountName: String, balance: Number (initiate this to 100 from start), getBalance: function, deposit: function, withdrawal: function, getAccountName: function, accountError: function, exitAccount: function

The object should handle all of the functionality (logic). You also need to create a function called atm() that should be responsible for showing the menu to the user and based on the user input show the correct choice.

Remember that a function is just a value. And if a function is just a value. That means we can both pass it as a parameter to a function and as a property of an object.

Go through these steps to solve the assigment.

Start by creating an object called account and define all the properties above. Initiate balance to 100 from start. You can start by just leaving the function properties empty if that makes it easier. Like this: getBalance: function () { },

You will be able to clone starter code that i provided for you and you can also find some guiding images in the code repository. Check the images.pdf file. You can use a switch or if/else statement to create the navigate in the menu but comment what you based your choice on, you can comment in the code.

The first function that is a property of the account object is getBalance. This function should display the account balance for the user. At start the account balance is 100 but this can change depending on if the user makes a deposit or withdrawal. Don't forget to point at the actual property of the object. After get balance has been called you need to show the menu to the user again.

The second function that is a property of the object is deposit. This function should first ask the user how much he/she wants to deposit. You have some guidance in the starter code on how to sole this. You need to handle potential errors aswell. A user should not be able to deposit 0, empty string or string or negative values. I provided one solution to a potential error already but you will need to add some more in the condition and use logical operator. If the user tries not enter a non valid value you should display a error message and run the deposit function again. This works fine you can actually run the deposit function inside of the deposit function using this.deposit(). When the deposit function is done you should display the menu to the user again.

The third function that is a property of the object is withdrawal. This function should handle when the user wants to collect money from the account. You have some guidance here in the starter code. And just like the deposit function the user should not be able to withdraw 0, empty string/string or negative number. If the user tries to enter a non valid value you should handle it the same way as in the deposit function. And again, after the withdrawal function the user should see the menu.

The fourth function is getAccountName and is also a property of the object. This function should display the account holders name to the user. When the user clicks ok you should display the menu again.

The fifth function (also property of the object) accountError should handle errors and display a proper message to the user when the function i executed. Again, show the menu for the user when the error message has been shown.

The last of the functions that is a property of the object is exitAccount. And this function should close the whole window. Try and find information by yourself on how you close a window using javascript. If you struggle with this please contact me and I'll guide you to the right answer. Hint: try to goole "close window javascript"

The main function should be called atm() and that is not a function that is a property of the object. This function holds the actual menu, the switch or if/else. I've provided som starter code inside of that function but you need to modify it also run the function.

GOOD LUCK! Don't hesitate to ask for guidance or help when working with assigment :)
