let name1 = document.getElementById("first").value;
let name2 = document.getElementById("book").value;
var fullString = '${name1} is learning about javaScript and ${name2} is favourite.';
console.log(fullString);






//Basic Calcultor:-
function SumUp(valueOne, valueTwo) {
    return Number(valueOne) + Number(valueTwo);
};

const NumberOne = document.getElementById("NumberOne");
const NumberTwo = document.getElementById("NumberTwo");
const Result = document.getElementById("Result");

function calculate() {
    var sum = SumUp(NumberOne.value, NumberTwo.value);
    Result.value = sum.toString();
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