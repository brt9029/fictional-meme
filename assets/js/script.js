let start = $('#start');
let quiz = $('.quiz');
let btn = $('.btn');
let question = $('.question');
let display = $('<div></div>');
let a = $('<button></button>');
let b = $('<button></button>');
let c = $('<button></button>');
let d = $('<button></button>');
let initials = $('<button></button>');
let restart = $('<button></button>');
let current = 0;
let correct = 0;

let questions = [
    {
        quest: "Which of the following gives you the length of an Array?",
        a: ".length",
        b: ".length()",
        c: "length",
        d: ".length(array)",
        correct: "a"
    },
    {
        quest: "Which of the following is used to declare a variable?",
        a: "variable",
        b: "Let",
        c: "let",
        d: "function",
        correct: "c"
    },
    {
        quest: "Which of the following is used to add an element to the end of an Array?",
        a: ".add()",
        b: "+=",
        c: ".end()",
        d: ".push()",
        correct: "d"
    },
    {
        quest: "Which of the following is used to select a HTML element by id?",
        a: ".GetElementById()",
        b: "document.getElementById()",
        c: "elementId()",
        d: ".getID()",
        correct: "b"
    },
    {
        quest: "Which of the following is used to add a child element?",
        a: ".Append()",
        b: "addChild()",
        c: ".appendChild()",
        d: ".addToLast()",
        correct: "c"
    },
    {
        quest: "Which of the following is used to assign a class to an element through DOM?",
        a: "class=",
        b: ".addClass()",
        c: ".attr",
        d: "addClass()",
        correct: "b"
    },
    {
        quest: "Which of the following is used to create new HTML element?",
        a: "document.createElement()",
        b: "createNewElement()",
        c: "document.createNewElement()",
        d: "createElement()",
        correct: "a"
    },
    {
        quest: "Which of the following is used to create a h1 element through HTML?",
        a: "<h1>",
        b: "document.createElementById('h1')",
        c: "<h1>Sample Text</h1>",
        d: "<h1></h1>",
        correct: "c"
    },
    {
        quest: "Which of the following is used to return a random number between 0 and 1?",
        a: "math.random()",
        b: "Math.random()",
        c: "Math.random(Math.floor() * 10) + 1)",
        d: "Math.random(0, 1)",
        correct: "b"
    },
    {
        quest: "Which of the following is used to log something to the console?",
        a: "console.log()",
        b: "console.log",
        c: "debugger",
        d: "this.log()",
        correct: "a"
    }
]

function quizStart() {
    question.text(questions[0].quest);
    question.addClass("question h3");

    a.text(questions[0].a);
    a.addClass("btn btn-block btn-success").attr("id", "a");
    quiz.append(a);

    b.text(questions[0].b);
    b.addClass("btn btn-block btn-success").attr("id", "b");
    quiz.append(b);

    c.text(questions[0].c);
    c.addClass("btn btn-block btn-success").attr("id", "c");
    quiz.append(c);

    d.text(questions[0].d);
    d.addClass("btn btn-block btn-success").attr("id", "d");
    quiz.append(d);

    a.on('click', function() {
        nextQuestion('a');
    })

    b.on('click', function() {
        nextQuestion('b');
    })

    c.on('click', function() {
        nextQuestion('c');
    })

    d.on('click', function() {
        nextQuestion('d');
    })

    let timer = setInterval(function(){
        a.remove();
        b.remove();
        c.remove();
        d.remove();
        display.remove();
        endScreen();
        clearInterval(timer);
        }, 60000);
};

function nextQuestion(x) {

    if (questions[current].correct === x){
        display.text("Correct!");
        quiz.append(display);
        correct += 1;
        current += 1;
    } else {
        display.text("Wrong!");
        quiz.append(display);
        current += 1;
    }

    if(current === questions.length || !questions){
        endScreen();
        a.remove();
        b.remove();
        c.remove();
        d.remove();
        display.remove();
    }

    question.text(questions[current].quest);

    a.text(questions[current].a);

    b.text(questions[current].b);

    c.text(questions[current].c);

    d.text(questions[current].d);
};

function endScreen() {
    let form = $('<form></form>');
    form.append("<input type='text' id='input' placeholder='Type in your initials here!'></input>")
    form.addClass("pb-3");

    question.text("Here are the results!");
    question.addClass("question h3");

    let total = String(correct);
    quiz.append("<h4>You scored a " + total + " out of 10!</h4>");

    quiz.append(form);

    initials.text("Submit your initials!");
    initials.addClass("btn btn-block btn-success mt-4").attr("id", "initials");
    form.append(initials);

    restart.text("Restart");
    restart.addClass("btn btn-block btn-success").attr("id", "restart");
    quiz.append(restart);

    initials.on('click', function(){
        let user = {
            initial: input.value,
            score: correct
        }

        localStorage.setItem('person', JSON.stringify(user));
    });

    restart.on('click', function(){
        location.reload();
    });
}

start.on('click', function() {
    quizStart();
});