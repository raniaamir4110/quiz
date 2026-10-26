const questions = [ 
    { question: "Inside which HTML element do we put the JavaScript?", 
        option1: "script", 
        option2: "javascript", 
        option3: "js", 
        correctOption: "script", },
        
    { question: "Where is the correct place to insert a JavaScript?", 
        option1: "The head section", 
        option2: "The body section", 
        option3: "Both the head and body section are correct", 
        correctOption: "Both the head and body section are correct", }, 
        
    { question: 'What is the correct syntax for referring to an external script called "xxx.js"?', 
        option1: "script href=xxx.js", 
        option2: "script name=xxx.js", 
        option3: "script src=xxx.js", 
        correctOption: "script src=xxx.js", },
    {
    question: "How do you write 'Hello World' in an alert box?",
    option1: "alertBox('Hello World');",
    option2: "alert('Hello World');",
    option3: "msg('Hello World');",
    correctOption: "alert('Hello World');",},

    {
    question: "How do you create a function in JavaScript?",
    option1: "function myFunction()",
    option2: "create myFunction()",
    option3: "function:myFunction()",
    correctOption: "function myFunction()",},

    {
    question: "How do you write an IF statement in JavaScript?",
    option1: "if i == 5 then",
    option2: "if (i == 5)",
    option3: "if i = 5",
    correctOption: "if (i == 5)",},

    {
    question: "How does a WHILE loop start?",
    option1: "while (i <= 10)",
    option2: "while i = 1 to 10",
    option3: "while (i <= 10; i++)",
    correctOption: "while (i <= 10)",},

    {
    question: "How do you add a comment in JavaScript?",
    option1: "<!-- This is a comment -->",
    option2: "// This is a comment",
    option3: "# This is a comment",
    correctOption: "// This is a comment",},

    {
    question: "Which operator is used to assign a value to a variable?",
    option1: "==",
    option2: "=",
    option3: "===",
    correctOption: "=",},

{
    question: "Which method converts a JSON string into a JavaScript object?",
    option1: "JSON.stringify()",
    option2: "JSON.parse()",
    option3: "JSON.convert()",
    correctOption: "JSON.parse()",
},

{
    question: "Which keyword declares a block-scoped variable that can be reassigned?",
    option1: "const",
    option2: "let",
    option3: "static",
    correctOption: "let",
},

{
    question: "What does the typeof operator do?",
    option1: "Checks the data type of a value",
    option2: "Changes a variable's name",
    option3: "Deletes a variable",
    correctOption: "Checks the data type of a value",
},

{
    question: "Which method adds an element to the end of an array?",
    option1: "pop()",
    option2: "push()",
    option3: "shift()",
    correctOption: "push()",
},

{
    question: "Which symbol is used for strict equality in JavaScript?",
    option1: "=",
    option2: "==",
    option3: "===",
    correctOption: "===",
},

{
    question: "Which event occurs when a user clicks an HTML element?",
    option1: "mouseover",
    option2: "click",
    option3: "change",
    correctOption: "click",
}, ];

const quizBox = document.querySelector(".quiz");
let questionNo = 0
let score = 0;
const nextBtn = document.getElementById("next-btn");

const showQuestion = () => {
    if (questionNo == questions.length) {
        alert("Quiz completed!" , "Your score is: " + score + "/" + questions.length);
    }else {

        quizBox.innerHTML = `<h3>${questionNo + 1}. ${questions[questionNo].question}</h3> <br>

    <label><input type="radio" name="option" value="${questions[questionNo].option1}"> ${questions[questionNo].option1} <br></label>

    <label><input type="radio" name="option" value="${questions[questionNo].option2}"> ${questions[questionNo].option2} <br></label>

    <label><input type="radio" name="option" value="${questions[questionNo].option3}"> ${questions[questionNo].option3} <br></label>`;


    nextBtn.disabled = true;
    let options = document.querySelectorAll("input");
    options.forEach((option) => {
        
     option.addEventListener("click", () => {
            nextBtn.disabled = false;
             
            if (option.value === questions[questionNo].correctOption) {
                option.parentElement.style.backgroundColor = "green";
                score++;
            }
        })
    })

    }
}
showQuestion();

nextBtn.addEventListener("click", () => {
    questionNo++;
    showQuestion();
})