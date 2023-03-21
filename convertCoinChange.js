// Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!

// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny

// function convertCoinChange(money) {
//     // declare variables for different denominations (quarter, dime, nickel, penny)
//     q = 0 // each variable holds the count of each coin
//     d = 0
//     n = 0
//     p = 0 

//     // multiply input by 100 : 3.21 == 321
    
//     // take new number (321) and divide by 25 to get the number of quarters
//     // make sure to round down to get a whole number
//     // subtract the (# of quarters * 25) from the overall input # and then check the next denomination
//     // repeat for different denominations
//     // print and then return the data you collected
// }

function convertCoinChange(input) {
var totalCents = input * 100;
var q;
var d;
var n;
var p;
var remainder = totalCents;

q = Math.floor(totalCents/25);
remainder -= q*25;
d = Math.floor(remainder/10);
remainder -= d*10;
n = Math.floor(remainder/5);
remainder -= n*5;
p = remainder;
console.log("quarters = ", q);
console.log("dimes = ", d);
console.log("nickels = ", n);
console.log("pennies = ", p);
}

convertCoinChange(0.41);



// cleaner method
function convertCoinChange(input) {
    input *= 100;
    var coins = {
        'quarters': 0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0
    }

    coins['quarters'] = Math.floor(input/25);
    input -= coins['quarters']*25;
    coins['dimes'] = Math.floor(input/10);
    input -= coins['dimes']*10;
    coins['nickels'] = Math.floor(input/5);
    input -= coins['nickels']*5;
    coins['pennies'] = input;
    input -= coins['pennies'];
    // console.log("remaining input = ", input);
    return coins
}

console.log(convertCoinChange(.83));