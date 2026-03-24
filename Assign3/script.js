// PART 1: CHANGE BOX COLOR ON CLICK--

const redBox = document.getElementById("redBox");
const blueBox = document.getElementById("blueBox");
const greenBox = document.getElementById("greenBox");
const yellowBox = document.getElementById("yellowBox");

redBox.addEventListener("click", function () {
    redBox.classList.toggle("red");
});

blueBox.addEventListener("click", function () {
    blueBox.classList.toggle("blue");
});

greenBox.addEventListener("click", function () {
    greenBox.classList.toggle("green");
});

yellowBox.addEventListener("click", function () {
    yellowBox.classList.toggle("yellow");
});

// PART 2: GREET USER ON BUTTON CLICK

const greetBtn = document.getElementById("greetBtn");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

greetBtn.addEventListener("click", function () {
    const name = nameInput.value;
    if (name != "") {
        greeting.textContent = "Hello " + name + "!";
    }
});