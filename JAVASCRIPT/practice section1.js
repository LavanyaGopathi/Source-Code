// Introduction to java script for both front-end and back-end developers

console.log("Welcome to Java Script");

variable = "Hi Welcome to Software Development BootCamp";

console.log(variable);

console.warn("this is wrong");

console.error("this is an error");

//console clear
console.clear()
var numberA = 5; //* added on 1995 scope - Global
//Variables- these are containers for storing information
// 4 ways to declare an variable
let numberB = 6; //* added in 2015 scope - Block
const numberC = 7; //* added in 2015 - can't be change in programatically
numberD = 8; //* to do this it must have been declared previously

console.log(numberD)

// If you want a general rule - Always declare variable with const.
// If you think the value of variable can change use let.
// ex:
const car1 = 25000; // constant value can't be changed
const car2 = 35000; // constant value can't be changed
let total = car1 + car2; //value can change
letDaysOfTheWeek = 4;

console.log(total);


let profile = { fName: "Lavanya", lName: "Gopathi", Age: 29 }
console.log(profile.Age)


//Boolean:-
const X = 7;
const Y = 7;
const Z = 8;
let p = (X == Y);
let q = (Y == Z);
console.log(p);
console.log(q);

//Arrays:
const flavours = ["vanilla", "chocolate", "strawberry", "mint"]
console.log(flavours[2] + "", flavours[1])

flavours[4] = "lemon"

flavours.push("peanut Butter");

flavours[1] = "caramel";
flavours[0] = "coffee"
console.log(flavours);
console.log(flavours[6]);

//Arithmatic operations:-
let add = 50 + 25;
console.log(add);

let substract = 75 - 50;
console.log(substract);

let multiply = 9 * 9;
console.log(multiply);

let powerOf = 9 ** 3; // ** = powerOf
console.log(powerOf);

let divide = 12 / 3; // / = Divide
console.log(divide);

let remainder = 12 % 7; // % = modulus(Division Remainder)
console.log(remainder);

//++ = Increment
// let x = 1++;
//let y = 1--;
//console.log(x);
//console.log(y);

// Comparision Operatots("=="(equal to),'===' (value and type equal ))

A = "NewYork";
B = "newYork";
console.log(A == B);
console.log(A === B);

// task1:-
let s = 3;
let t = 4;
let r = 5;
r == (t + s);
console.log(s);

r != (t + s);
console.log(s);

r = (r / s);
console.log(s);

r > t;
console.log(r);

r < t;
console.log(r);

r === s;
console.log(r);


console.log((t * s) > r);

// task 2:-
let value1 = "lazy";
let value2 = "jump";
let value3 = "mouse";
console.log(value1 + " " + value3)
console.log(value1 + " " + value2)
console.log(value1 + " " + value2 + " " + value3)
let a = String(1 + 1);
/* Conversion:-
1.String
Syntax = String(ValueToConvert)*/
console.log(typeof a);
console.log(1 + 1);
console.log(a);

let c = String(-12.123);
console.log(c);

let d = String(true);
console.log(d);
console.log(typeof d);

String(false)
String(undefined)
console.clear();
let b = String(NaN);
console.log(b);

let g = Number(false);
console.log(g);

let h = Number(undefined);
console.log(h);

let i = Number(null);
console.log(i);

let ab = Number("45")
console.log(ab);
console.clear();
//string coercion:
console.log("12" / 2);
console.log("2" * 2);
console.log("10" / 2);
console.log("10" % 2);
console.log(true * 2);
console.clear();
console.log("1" + 2);
console.log("1" + 2 + true);
console.log("1" + undefined);
console.log("1" + null);
console.log("1" + 2);
//boolean coercion:
console.log(true + 2);
console.log(false + 2);
console.log(20 * true);
console.log(4 / false);
// scopes examples:-
const AthleteAge = 31;
const BodyWeight = 100;

function CalculateMaxHR() {
    let StageOne = 214 - (0.5 * AthleteAge) - (0.11 * BodyWeight);
    console.log(StageOne)
    return StageOne
};
CalculateMaxHR();
var CardioZone = 70;

function trainingZone() {
    console.log(BodyWeight);
    one = CalculateMaxHR()
    console.log(one);
    zone = one / 100 * CardioZone;
    console.log(zone);
    return zone;
};
CalculateMaxHR();
trainingZone();
console.clear();
//Example 2
const z = 1; //Global Scope
if (z === 1) {
    const z = 23; //Block Scope
    console.log(z);
} else {
    console.log("false");
};
console.log(z);

//Example 3
var W1 = "Weather";
var e = "Hot Wether";
var f = "Cool Wether";
var k = "It's Raining";
var W1 = "a";
if (W1 == e) {

    console.log("Go to swimming");
} else if (W1 == f) {
    console.log("Take Coffee");
} else if (W1 == k) {
    console.log("Take Umbrella");
} else {
    console.log("Start Reading Books in Home")
};
// Example 3;- Checking Procedure
let cups = 30;
switch (cups) {
    case 10:
        console.log("Answer is 10");

        break;
    case 20:
        console.log("Answer is 20");

        break;
    case 30:
        console.log("Answer is 30");

        break;
    case 40:
        console.log("Answer is 40");

        break;
    default:
        console.log("The Value doesn't match with any cases")

        break;
}
// Example 4;- Checking Procedure
let numbers = [1, 5, 8, 4, 6]
switch (numbers[4]) {
    case 1:
        console.log("Answer is zero index");

        break;
    case 5:
        console.log("Answer is one index");

        break;
    case 8:
        console.log("Answer is two index");

        break;
    case 4:
        console.log("Answer is three index");

        break;
    case 6:
        console.log("Answer is four index");

        break;
    default:
        console.log("The Value doesn't match with any cases")

        break;
};
console.clear()
let str3 = document.getElementById("first").value
let str4 = document.getElementById("book").value
var fullString = '${str3}is learning about Mango business and ${str} book is good for mango products.'
console.log(fullString);