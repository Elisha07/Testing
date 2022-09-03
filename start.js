var myQuestions =[
    {
        question: "CSS stands for",
        answers: {
            a:'Cascading style sheets',
            b:'comma separated sheets',
            c:'Cat Snake Soil'
        },
        correctAnswer:'a'
    },
    {
        question: "HTML stands for",
        answers: {
            a:'Cascading style sheets',
            b:'comma separated sheets',
            c:'Cat Snake Soil'
        },
        correctAnswer:'a'

    },
    {
        question: "The HTML attribute used to define the inline styles is -",
        answers: {
            a:'styles',
            b:'style',
            c:'class'
        },
        correctAnswer:'b'

    },
    {
        question: "The CSS property used to specify the transparency of an element is ?",
        answers: {
            a:'opacity',
            b:'filter',
            c:'overlay'
        },
        correctAnswer:'a'

    },
    {
        question: "How to select the elements with the class name 'example'?",
        answers: {
            a:'#example',
            b:'class example',
            c:'.example'
        },
        correctAnswer:'c'

    }
]


var quizContainer = document.querySelector('#quiz');



function displayQuestions(questions, quizContainer){
    var output = [];
    var answers;

    for(var i=0; i<questions.length; i++){
        answers = [];

        for(letter in questions[i].answers){
            answers.push(
                '<label>'
                +
                '<input type="radio" name="question'+i+'"value"'+letter+'">'
                +
                letter + ': '
                + 
                questions[i].answers[letter]
                + 
                '</label> <br>'
            )
        }

        output.push(
            '<div class="question">' + questions[i].question + '</div>' +
            '<div class="answers">' + answers.join('') + '</div> <br>'
        )
    }

    quizContainer.innerHTML = output.join('')
}

displayQuestions(myQuestions, quizContainer)


var resultContainer = document.querySelector('#results');
function showResults(questions, quizContainer, resultContainer){
    var answerContainer = quizContainer.querySelectorAll('.answers');

    var userAnswer = '';
    var numCorrect = 0;

    for(var i=0; i<questions.length; i++){
        userAnswer = 
        (answerContainer[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        if(userAnswer === questions[i].correctAnswer){
            numCorrect = numCorrect+1
            answerContainer[i].style.color = 'green'
        }
        else{
            answerContainer[i].style.color = 'red'
        }
    }

    resultContainer.innerHTML = numCorrect + ' out of '+ questions.length;


}

var resultBtn = document.querySelector('#submit')

resultBtn.addEventListener('click', (e)=>{
    showResults(myQuestions, quizContainer, resultContainer)
})