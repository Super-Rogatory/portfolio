let color = "red"; //global variable to control the color on LINE 10-12
let isScrollAvailable = false;
const addRowButton = document.getElementById("add-row");
const fillColorButton = document.getElementById("fill-color");
const clearColorButton = document.getElementById("clear-color");
const table = document.querySelector("table");
const select = document.querySelector("select");

/*
  Recall that document.querySelector() returns the first Element within the document that matches the specified Selector.
  NOTE: Element inherits properties from its parent interface, Node, and by extension that interface's parent, EventTarget.
  select.addEventListener("change", change); specififes a type ("event type to listen for")  - "change"
  change is the event listener callback, the callback accepts a single parameter, an object based on Event describing the event that occured.
  The object Event can be described in further detail here - https://developer.mozilla.org/en-US/docs/Web/API/Event
*/
// Makes sure that the DOM is loaded before manipulation.
window.addEventListener("DOMContentLoaded", function () {
  alert("Game Loaded. Pick a color!");
  addRowButton.addEventListener("click", makeRow); // LINE 34 - 41 function definition
  fillColorButton.addEventListener("click", fillTable);
  clearColorButton.addEventListener("click", clearTable);
  table.addEventListener("click", colorize);
  table.addEventListener("mousedown", function () {
    isScrollAvailable = true;
  });
  table.addEventListener("mouseup", function () {
    isScrollAvailable = false;
  });
  table.addEventListener("mouseover", colorizeInMotion);
  table.addEventListener("mouseleave", function () {
    isScrollAvailable = false;
  });
  select.addEventListener("change", change);
});

// creates rows on click
function makeRow() {
  const newTr = document.createElement("tr"); // creates a table row
  for (let i = 0; i < 20; i++) {
    const newTd = document.createElement("td"); // created some table data
    newTr.appendChild(newTd);
  }
  table.appendChild(newTr);
}
// adds color to the table data cell element, turns cell on or off (toggle) made on if it has color or not
function colorize(event) {
  if (event.target.className.length) {
    event.target.className = "";
  } else {
    if (event.target.localName === "td") {
      event.target.className = color;
    }
  }
}
// controls the <select> element, on click..change the global value of color
function change(event) {
  color = event.target.value;
}

function colorizeInMotion(event) {
  if (event.target.localName === "td" && isScrollAvailable) {
    event.target.className = color;
  }
}

function fillTable() {
  const cells = Array.from(document.getElementsByTagName("td"));
  cells.forEach((cell) => {
    cell.className = color;
  });
}

function clearTable() {
  const cells = Array.from(document.getElementsByTagName("td"));
  cells.forEach((cell) => {
    cell.className = "";
  });
}
/*
    Add the ability to fill the whole grid with one color - DONE
    Add the ability to fill any non-colored cells with one color
    Add the ability to clear the grid - DONE
    Add controls for the user to adjust the number of columns
    Add controls for the user add/remove rows and columns
*/
