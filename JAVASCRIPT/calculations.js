/*function SumUp(valueOne, valueTwo) {
    return Number(valueOne) + Number(valueTwo);

}
const operations = document.getElementById("operations");
const NumberOne = document.getElementById("NumberOne");
const NumberTwo = document.getElementById("NumberTwo");
const Result = document.getElementById("Result");
console.log(NumberOne.value);
console.log(NumberTwo.value);*/

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