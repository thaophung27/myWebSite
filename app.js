const myQuestions = [
  {
    question: "Javascript is _________ language.",
    answers: {
      a: "Programming",
      b: "Application",
      c: "None of These",
      d: "Scripting",
    },
    multi: false,
    correctAnswer: "d",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    answers: {
      a: "named function",
      b: "anonymous function",
      c: "both of the above",
      d: "none of the above",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question:
      "Which built-in method returns the index within the calling String object of the occurrence of the specified value?",
    answers: {
      a: "getIndex()",
      b: "location()",
      c: "indexOf()",
      d: "getLocation()",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: "Which one of the following is valid data type of JavaScript",
    answers: {
      a: "number",
      b: "void",
      c: "boolean",
      d: "nothing",
    },
    multi: false,
    correctAnswer: "c",
  },
];

// function to render list questions

function renderMyQuestions(index) {
  var main = document.querySelector(".main");
  main.innerHTML = `
    
     <p class="question">${myQuestions[index].question}</p>
        <form>
            <div ><input name="option" class = "option" type="radio" id="option1" value="a"><label class = "option-value">${myQuestions[index].answers.a}</label></div><br>
            <div ><input name="option" class = "option" type="radio" id="option2" value="b"><label class = "option-value">${myQuestions[index].answers.b}</label></div><br>
            <div ><input name="option" class = "option" type="radio" id="option3" value="c"><label class = "option-value">${myQuestions[index].answers.c}</label></div><br>
            <div ><input name="option" class = "option" type="radio" id="option4" value="d"><label class = "option-value">${myQuestions[index].answers.d}</label></div><br>
        </form>

    `;
}

renderMyQuestions(0);

// function to check answer

function checkAnswer(questionNumber, submittedAnswer) {
  if (submittedAnswer === myQuestions[questionNumber].correctAnswer) {
    return true;
  } else {
    return false;
  }
}

// previous next handling

var previous = document.querySelector(".previous");
var submit = document.querySelector(".submit");
var index = 0;

// listen to previous click event
previous.addEventListener("click", function (event) {
  if (index === 0) {
    index === 0;
  } else {
    index -= 1;
  }

  renderMyQuestions(index);
});

// listen to select event for better UX

var main = document.querySelector(".main");
main.addEventListener("click", function (event) {
  var selectedOption = event.target;

  if (selectedOption.matches(".option")) {
    selectedOption.checked = true;
  } else if (selectedOption.matches(".option-value")) {
    selectedOption = selectedOption.previousElementSibling;
    selectedOption.checked = true;
  }

  var myAnswer = selectedOption.value;
  console.log(myAnswer);
});

// listen to submit click event

submit.addEventListener("click", function (event) {
  var listOption = document.querySelectorAll(".option");
  var mySubmittedAnswer;

  for (var i = 0; i <= listOption.length - 1; i++) {
    if (listOption[i].checked) {
      mySubmittedAnswer = listOption[i].value;
    }
  }

  var result = checkAnswer(index, mySubmittedAnswer);

  var resultScreen = document.querySelector(".result");
  console.log(result);
  // if correct, go to next question ; if wrong, stay at current question

  if (result === false) {
    // if wrong
    index = index;
    renderMyQuestions(index);
    resultScreen.innerText = "You must select the right answer to continue";
  } else {
    resultScreen.innerText = "";
    if (index === myQuestions.length - 1) {
      index = myQuestions.length - 1;
    } else {
      index += 1;
    }
  }

  renderMyQuestions(index);
});
