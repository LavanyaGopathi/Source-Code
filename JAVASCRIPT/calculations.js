let name1 = document.getElementById("first").value;
let name2 = document.getElementById("book").value;
var fullString = `${name1} is learning about javaScript and ${name2} is favourite.`;
console.log(fullString);







//Basic Calcultor:-
const NumberOne = document.getElementById("NumberOne");
const NumberTwo = document.getElementById("NumberTwo");
//const Result = document.getElementById("Result");
//const operator = document.getElementById("operation");

function calculate(operator) {
    /*if (operator.value === "+") {
            return NumberOne + NumberTwo

        } else if (operator.value === "-") {
            return NumberOne - NumberTwo

        } else if (operator.value === "*") {
            return NumberOne * NumberTwo


        } else if (operator.value === "/") {
            return NumberOne / NumberTwo


        };
        Result.value = calc.toString();

    };*/
    switch (operator.value) {
        case "+":
            var calc = SumUp(NumberOne.value, NumberTwo.value)
            Result.value = calc.toString();
            break
        case "-":
            var calc = SumAway(NumberOne.value, NumberTwo.value)
            Result.value = calc.toString();
            break
        case "*":
            var calc = SumMulti(NumberOne.value, NumberTwo.value)
            Result.value = calc.toString();
            break
        case "/":
            var calc = SumDiv(NumberOne.value, NumberTwo.value)
            Result.value = calc.toString();
            break
        default:
            Result.value = "Error";

            break
    };
};

//multi purpose calculatoe:-
let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));
buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "C":
                display.innerText = '';
                break;
            case "←":
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error!"
                }
                break;

            default:
                display.innerText += e.target.innerText;
        }
    });
});
/*
    //prompt alerts:-
    let age = prompt("How old are you", "Please give a numeric answer")
    let check = confirm("Are you sure")
    let year = new Date();
    var value=alert(`you were born around & ${year.getFullYear().age}`);
    if (value == true) {
        //code x -Would execute through the questions
        confirm("question");
    } else if (value == false) {
        /*"code w- ask the user if they are sure"
    };
    if (value == false) {
        "we want to give the user the chance to re-enter the age"
    }
    else{

        "we want to prevent the user continuing"
    };
    /*else {
        "code y- would prevent the user from continuing."
    };*/
//age check():-
function ageCheck() {
    let userAge = window.prompt("please give your current age");
    if (Number(userAge) > 18) {
        window.confirm("Fantastic! we have aproved your age and purchase")

    } else if (Number(userAge) === 18) {
        let userReplay = confirm("Do you have ID to confirmyour age")
    }
    if (Number(userAge) <= 18) {
        "we are very sorry"

    };
};
//console.clear();

//for loop:-
//Q-1
let x = 5;
for (x; x < 10; x++) {
    console.log(x)
};
console.clear();
//Q-2
const fruits = ["apple", "banana", "cheerys", "mangos", "straberrys", "pinaaple"];
let data = "";
for (let fruit in fruits) {
    data += fruits[fruit] + " ";
    console.log(data);
};
//Q-3
//let i = 0;
for (i = 0; i < 10; i++) {
    console.log(x)
};
//Q-4
//const fruitsA = ["apple", "banana", "cheerys", "mangos", "straberrys", "pinaaple"];
//fruitsA.forEach(fruits);

function myFunction(fruit) {
    let text = "I chose a" + " " + fruit;
    console.log(text);
};
//navigation bar
let main = document.getElementById(add);
console.log("line154", main);