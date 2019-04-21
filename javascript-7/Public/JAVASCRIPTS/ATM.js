"use strict";
let deposit = document.getElementById(`Deposit`);
let withdraw = document.getElementById(`Withdraw`);
let balance = document.getElementById(`Balance`);
let transfer = document.getElementById(`Transfer`);
let donate = document.getElementById(`Donate`);
let log = document.getElementById(`Login`);
let balance_sum = Number(1000);
let withdrawAmt, depositAmt, donateAmt, transferAmt, name, password;

withdraw.addEventListener("click", function () {
    withdraw2();
});
deposit.addEventListener("click", function () {
    deposit2();
});
balance.addEventListener("click", function () {
    balance2();
});
transfer.addEventListener("click", function () {
    transfer2();
});
donate.addEventListener("click", function () {
    donate2();
});
log.addEventListener("click", function () {
    log2();
});

function withdraw2() {
    withdrawAmt = window.prompt(`How much money would you like to withdraw?`);
    balance = balance_sum - withdrawAmt;
    window.alert(`Your balance is ${balance} dollars`);
}
function deposit2() {
    depositAmt = Number(window.prompt(`How much money would you like to deposit?`));
    balance = balance_sum + depositAmt;
    window.alert(`Your balance is ${balance} dollars`);
}
function balance2() {
    window.alert(`Your balance is ${balance} dollars`);
}
function transfer2() {
    transferAmt = window.prompt(`How much money would you like to transfer to another account?`);
    balance = balance_sum - transferAmt;
    window.alert(`your balance is ${balance} dollars`);
}
function donate2() {
    donateAmt = window.prompt(`How much money would you like to donate?`);
    balance = balance_sum - donateAmt;
    window.alert(`your balance is ${balance} dollars`);
}
function log2() {
    name = window.prompt(`Hello, what is your name?`);
    password = window.prompt(`Please enter your password`);
    if (password !== `ripjah` || password !== `password`){
        window.alert(`That is incorrect, goodbye.`);
        window.close()
    }
    else {
        window.alert(`Welcome, ${name}!`)
    }
}