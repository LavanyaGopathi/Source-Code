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
    paragraph1.style.background_color = ("#fff");
    paragraph1.style.color = ('#000');
    console.log("Mouse Inside");
});
paragraph1.addEventListener('mouseout', function run() {
    paragraph1.style.background_color = ("#000");
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

function switchOn (){
    var imageElement = document.getElementById("imgBulb");
    
    if (imageElement.src == "file:///Users/Lavanya/Desktop/Source%20Code/images/Bulb.jpg") {
        imageElement.src = "../images/bulb on.jpg";
    }
    else{
        imageElement.src = "../images/bulb.jpg";
    }
}


