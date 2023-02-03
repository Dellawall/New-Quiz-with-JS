// ------------- questionBank ----------------
var questionBank = [
    {
        question : 'when was the first premier league played?',
        option : ['1991/92', '1992/93', '1998/91', '1993/94',],
        answer : '1992/93'
    },
    {
        question : 'What is the best way to apply bold styling to text in HTML?',
        option : ['strong', 'use css', 'bold', 'b'],
        answer : 'strong'
    },
    {
        question : 'How many squares are on a chess board?',
        option : ['64','32','16','80'],
        answer : '64'
    }
]

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scoreBoard = document.getElementById('scoreboard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
// var checkAnswer = document.getElementById('check-answer');
// var backQuiz = document.getElementById('back-to-quiz');
var i = 0;
var score = 0;

function displayQuestion(){
    question.innerHTML= 'Q'+(i+1) + ' '+questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    stat.innerHTML = "Question" +' '+(i+1)+' '+'of'+' '+ questionBank.length;
    scoreboard.style.display= 'none';
}
function nextQuestion() {
    if(i<questionBank.length-1)
{
    i=i+1;
    displayQuestion();
}else {
        points.innerHTML= score+'/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreBoard.style.display= 'block';
        // checkAnswer.style.display = 'block';
        backQuiz
        next.style.display= 'none';
    }
    }
    next.addEventListener('click', nextQuestion);

function backToQuiz(e){{
        if(i>questionBank.length+1)
    {
        i=i+1;
        displayQuestion();
    }else {
            
        }
        }
    }

function calcScore(e){
    if (e.innerHTML===questionBank[i].answer && score<questionBank.length){
        score=score+1;
        document.getElementById(e.id)
    }
    else{
        document.getElementById(e.id);
    }
    setTimeout(nextQuestion,300);
}
displayQuestion();












let text = document.querySelector('.title');
let btn = document.querySelector('.change-color');
text.classList.add('change');
btn.addEventListener('click',function(){
    text.classList.toggle('change');
})



