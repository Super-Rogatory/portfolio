let color = "red"; //global variable to control the color on LINE 10-12
let col = 20; // Used in the makeRow function. Want to scale..
let addToCol = 0; // every time we add data cells to the column, we need to keep count of how many data cells are needed, as when add a row is called, it isn't offset.
let isScrollAvailable = false;
const addRowButton = document.getElementById("add-row");
const removeRowButton = document.getElementById("remove-row");
const addColumnButton = document.getElementById("add-column");
const removeColumnButton = document.getElementById("remove-column");
const fillColorButton = document.getElementById("fill-color");
const fillRemainingButton = document.getElementById("fill-remaining");
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
  // alert("Game Loaded. Pick a color!");
  addRowButton.addEventListener("click", makeRow); // LINE 43 - 50 function definition
  removeRowButton.addEventListener("click", removeRow);
  addColumnButton.addEventListener("click", addColumn);
  removeColumnButton.addEventListener("click", removeColumn);
  fillColorButton.addEventListener("click", fillTable);
  fillRemainingButton.addEventListener("click", fillNonColoredCells);
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
  // we need to create consistent rows. without addToCol, our rows will be displaced upon new add a row.
  col += addToCol;
  for (let i = 0; i < col; i++) {
    const newTd = document.createElement("td"); // created some table data
    newTr.appendChild(newTd);
  }
  addToCol = 0; // the default SHOULD be zero. We don't want to resize our rows if addColumn button was never clicked.
  table.appendChild(newTr);
}
function removeRow() {
  const lastRow = table.lastChild;
  if(lastRow) table.removeChild(lastRow); // an error will be thrown if we remove a child from an element with no child
}
function addColumn(){
  addToCol++; // we have added to an existing row, x amount of times.
  const rows = Array.from(table.getElementsByTagName("tr"));
  for(const index in rows){
    // adding data cells to every row that exists in the table so far.
    const newTd = document.createElement("td"); // has to be inside the loop
    rows[index].appendChild(newTd);
  }
}
function removeColumn(){
  addToCol--;
  const rows = Array.from(table.getElementsByTagName("tr"));
  for(const index in rows){
    const lastTd = rows[index].lastChild
    if(lastTd) rows[index].removeChild(lastTd);
  }
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
function fillNonColoredCells() {
  const cells = Array.from(document.getElementsByTagName("td"));
  cells.forEach((cell) => cell.className === "" ? cell.className = color : "");
}

