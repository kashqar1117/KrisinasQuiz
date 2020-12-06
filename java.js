var h1 = document.getElementById('h1')
var questionContainerElement = document.getElementById('questionsConatiner')
var questions = document.getElementById('Questions')
var nextBtn = document.querySelector('.next-btn')
 var strtBtn = document.querySelector('.start-btn')

var questionCounter =0; 

function startBtn(){
    strtBtn.classList.add("hidden");
    console.log(strtBtn)
    questions.classList.remove("hidden");
    questionContainerElement.classList.remove("hidden");

    nextBtn.classList.remove("hidden");


    
    
}
function nextButton(){
    
questionCounter = questionCounter +1

quiz()


}

nextBtn.addEventListener('click', nextButton)

strtBtn.addEventListener('click',startBtn )





const q = [
    {question: 'what is 2+2?',
    choices: [{choice:'2'},
{choice:'3'},
{choice:'4'},
{choice:'5'}],
    answer: 3,
} ,
{question: 'what is 2+0?',
choices: [{choice:'2'},
{choice:'3'},
{choice:'4'},
{choice:'5'}],
answer: 1,
} ,
{question: 'what is 2+1?',
choices: [{choice:'2'},
{choice:'3'},
{choice:'4'},
{choice:'5'}],
answer: 2,
} ,
{question: 'what is 2+3?',

choices: [{choice:'2'},
{choice:'3'},
{choice:'0'},
{choice:'5'}],
answer: 4,
}
]



function createChoices(){
    for(let i =0;i<q[questionCounter].choices.length;i++ ){
        
        console.log('inside loop create choices')
        var answerBtn = document.createElement('button')
        answerBtn.innerHTML += q[questionCounter].choices[i].choice
        console.log(questions)
        questions.appendChild(answerBtn)
    }

}





function quiz(){
    
    // while(questionCounter <5){
        questionContainerElement.innerText = q[questionCounter].question
        createChoices()
        
        
        
        // }
    }
    
    quiz()


