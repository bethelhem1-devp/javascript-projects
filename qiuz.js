const questions=[
  {category:"History",
  question:"which African Country is never colonized?",
  choices:["Ethiopia","kenya","Uganda"],
  answer:"Ethiopia"},

  {category:"English",
  question:"which one is indicates past time?",
  choices:["is","was","are"],
  answer:"was"},

  {category:"Chemistry",
  question:"which one is Oxygen?",
  choices:["co2","mg03","02"],
  answer:"02"},

  {category:"History",
  question:"who was defeated italy?",
  choices:["Tewodros","Abichu","minilic"],
  answer:"minilic"},

  {category:"Geograpy",
  question:"where abay goes?",
  choices:["Egypt","kenya","Uganda"],
  answer:"Egypt"},
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(questionObj, compChoice) {
  if (compChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}

// Pick a random question
const q = getRandomQuestion(questions);
console.log("Category:", q.category);
console.log("Question:", q.question);
console.log("Choices:", q.choices.join(", "));

// Simulate user answering (you can replace this with prompt or input)
const userChoice = "Ethiopia"; // pretend the user typed this
console.log("User chose:", userChoice);

// Check result
if (userChoice === q.answer) {
  console.log("✅ Correct!");
} else {
  console.log(`❌ Wrong. The correct answer is: ${q.answer}`);
}

