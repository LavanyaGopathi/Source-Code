console.log("hello world");
var a = 5;
var b = 10;
var c = "Hi this is lavanya";
let A = a + 10;
let B = b * 5;
let C = c + "And i am a student in JUST IT"
console.log(A);
console.log(B);
console.log(C);
//demo:

let test1 = document.getElementById('demo').innerHTML = "Welcome to Javascript!"
console.log(test1);

let paragraph1 = document.getElementById("para");
paragraph1.addEventListener('mouseover', function run() {
    paragraph1.style.background_color = ("black");
    paragraph1.style.color = ('#000');
    console.log("Mouse Inside");
});
paragraph1.addEventListener('mouseout', function run() {
    paragraph1.style.background_color = ("brown");
    paragraph1.style.color = ('#fff');
    console.log("Mouse outside");
});

let test2 = document.getElementById("Btn");
test2.addEventListener("mouseover", function run() {
    test2.style.backgroundColor = ("pink");
    test2.style.color = ("blue");
    console.log("Mouse Inside");
});

test2.addEventListener("mouseout", function run() {
    test2.style.backgroundColor = ("blue");
    test2.style.color = ("pink");
    console.log("Mouse outside");
});
//bulb concepts:-

function switchOn() {
    var imageElement = document.getElementById("imgBulb");
    if (imageElement.src == "file:///Users/Lavanya/Desktop/Source%20Code/images/bulb.jpg") {
        imageElement.src = "../images/bulb on.jpg";
    } else {
        imageElement.src = "../images/bulb.jpg";
    }
}

// event:-
let test4 = document.getElementById("btn");
test4.addEventListener("mouseover", function run() {
    test4.style.backgroundColor = ("red");
    test4.style.color = ("blue");
    console.log("Mouse Inside");
});

test4.addEventListener("mouseout", function run() {
    test4.style.backgroundColor = ("blue");
    test4.style.color = ("pink");
    console.log("Mouse outside");
});
// DOM,event  manegement:-
let paragraph2 = document.getElementById("para2");
let Button = document.getElementById("btn");
let square = document.getElementById("pId");
Button.addEventListener('click', function run() {
    if (Button.innerText == 'Show') {
        paragraph2.style.display = 'block';
        Button.innerText = 'Hide';
    } else {
        paragraph2.style.display = 'none';
        Button.innerText = 'Show';
    }
});

function backgroundColor(id) {
    if (id === "pId") {
        square.style.backgroundColor = ('#867949');
    } else {
        square.style.backgroundColor = ('#777884');
    };
};

/*
//time out:-
function hello() {
    console.log("Hello EveryOne");
}
hello()
const hi = setTimeout("hello", 20000);
console.log(hi);

function greet(name, byeText) {
    console.log("Good Morning", name, byeText);
}


greet("Lavanya", "see ya");
let timeOutID = setTimeout(greet, 5000, "Lavanya", "Good Bye");
console.log(timeOutID);

//subscribe:-
let countdown = setTimeout('ask', 20000);

function subscribe(x) {
    if (time >= 20) {
        countdown;
    } else {
        clearTimeout(countdown);
    }
};*/