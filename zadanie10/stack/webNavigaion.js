const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = "Home page";

let finish = true;
let showBack = false;
let showNext = false;
// ------------------------------
// Helper Functions
// ------------------------------
function showCurrentPage(action) {
  console.log(`\n${action}`);
  console.log(`Current page = ${currentPage}`);
  console.log(`Previous page = ${backPages.peek()}`);
  console.log(`Next Page = ${nextPages.peek()}`);
}

const newPage = page => {
  backPages.push(currentPage);
  currentPage = page;
  while(!nextPages.isEmpty()) {
    nextPages.pop();
  }

  showCurrentPage("New page opened");
}
  
const backPage = () => {
  nextPages.push(currentPage);
  currentPage = backPages.pop();

  showCurrentPage("Moved on the previous page");
}

const nextPage = () => {
  backPages.push(currentPage);
  currentPage = nextPages.pop();

  showCurrentPage("Moved on the next page");
}
/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface Part 1
// ------------------------------
showCurrentPage("Welcome back");
while(finish) {
  let instructions = baseInfo;


  if (!backPages.isEmpty()) {
    instructions += ", " + backInfo;
    showBack = true;
  } else showBack = false;

  if (!nextPages.isEmpty()) {
    instructions += ", " + nextInfo;
    showNext = true;
  } else showNext = false;

  instructions += ", " + quitInfo;
  console.log(instructions);

  // ------------------------------
  // User Interface Part 2
  // ------------------------------
  const answer = prompt(question);
  lowerCaseAnswer = answer.toLowerCase();

  if (typeof lowerCaseAnswer === "string" && lowerCaseAnswer.length > 1) {
    newPage(answer);
  } else if (lowerCaseAnswer === "n" && showNext) {
      nextPage();
  } else if (lowerCaseAnswer === "b" && showBack) {
      backPage();
  } else if (lowerCaseAnswer === "n" && showNext === false) {
      console.log("There is no next pages");
  } else if (lowerCaseAnswer === "b" && showBack === false) {
      console.log("There is no previous pages");
  } else if (lowerCaseAnswer === "q") finish = false;
}
