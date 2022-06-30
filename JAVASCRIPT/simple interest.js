function calculate() {
    let P = document.getElementById("Amount").value;
    let T = document.getElementById("Time").value;
    let R = document.getElementById("Rate").value;

    SI = (P * T * R) / 100;
    tm = parseFloat(P) + SI;
    document.getElementById('Result').innerHTML = 'Simplae Interest: ' + SI;
    document.getElementById('total').innerHTML = 'Total Amount: ' + tm;
}
//Date and time in Javascript:-
const A = new Date();
console.log(A.getTime);

const A1 = A.getFullYear();
console.log(A1.toString);

const history = new Date(1992, 0, 2);
console.log(history);

const history1 = new Date(93, 0, 2);
console.log(history);
//document.getElementById('id').innerText = A1.getFullYear();
let totalprice = ((x, y) => (x * y));
console.log(totalprice(25, 25));
//1:-
let checkNumber = (num) => num > 10 ?
    console.log('yes') : console.log('No');
checkNumber(5);
checkNumber(10);
checkNumber(25);
checkNumber(35);

let checkNumber1 = (num1) => num1 ** 3;
console.log(checkNumber1);
checkNumber1(5);

//This function:-
function thisFunction(id) {
    console.log(id);
    if (id == 'text') {
        let text = document.getElementById('text');
        text.style.color = '#548334';
        console.log('Success!')
    } else {
        console.log("Sorry it didn't work!");
    };
};

//task1:-
/*function ask() {
    alert("Hi Welcome to our site ! If you wish to book please click the 'Book Venue' button");

}
let book = setTimeout(ask, 30000);

function Booking(id) {
    if (id == 'Venue') {
        clearTimeout(book);
        let popUp = prompt("How many people will be attending the party?");
        console.log(popUp);
        let price = '£' + tableFive(popUp);
        alert(price);
    } else {
        book;
    };

};

function tableFive(people) {
    if (Number(people) % 5 == 0) {
        let tables = Math.ceil(people / 5);
        return costPerTable(tables);
    } else {
        return costPerTable(people);
    };
};
*/

//JQuery:-
$('#Venue').css({
        'backgroundColor': "#44ee",
        'color': '#fff',
        'border': 'solid red 3px'
    })
    //ex:1
let changes = ['#Venue', ".container"];
$(changes.join(",")).css({
    'backgroundColor': "#44ee",
    'color': '#fff',
    'border': 'solid red 3px'
})

//ex:-2
$('.A').css('backgroundColor', 'brown')

//ex:-3
$('#Venue').click(function() {
        $('#Venue').css('fontFamily', 'Impact')

    })
    //ex:-4
$('#Venue').mouseover(function() {
    $('#Venue').css('fontFamily', 'Impact')
}).mouseleave(function() {
    $('#Venue').css('fontFamily', 'Arial')
})

//ex:-5
$('#L').click(function() {
    if ($("#Venue").css('display') != 'none') {
        $('#Venue').css('display', 'none')
    } else {
        $('#Venue').css('display', 'block')
    }
})

//ex:-6
$('#h').click(function() {
        if ($("#g").css('display') != 'none') {
            $('#g').css('display', 'none')
        } else {
            $('#g').css('display', 'block')
        }
    })
    //ex:-7
$('#h').css({
    'backgroundColor': "#33ffee",
    'color': '#ffff',
    'border': 'solid bloue 3px'
})