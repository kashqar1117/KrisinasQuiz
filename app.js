var h1 = document.getElementById('h1')
var questionContainerElement = document.getElementById('questionsConatiner')
var questions = document.getElementById('Questions')
 var strtBtn = document.querySelector('.start-btn')

var questionIndex =0;
var timer = 0; 



/** */
function startGame(){
    strtBtn.classList.add("hidden");
    console.log(strtBtn)
    questions.classList.remove("hidden");
    questionContainerElement.classList.remove("hidden");
    

}   

function endGame(){
    strtBtn.classList.add("hidden");
    console.log('is my function endgame working?')
    questions.classList.add("hidden");
    questionContainerElement.classList.add("hidden");
    nextBtn.classList.add("hidden");
    var inputElement = document.createElement('input');
    questionContainerElement.appendChild(inputElement)


}


function nextButton(){
    
    questionIndex = questionIndex +1
    console.log(questionIndex)
    quiz()
    
    if(questionCounter>= q.length){
        
        endGame()
    }
}



function createChoices(){

    questions.innerHTML = '';
    for(let i =0;i<q[questionIndex].choices.length;i++ ){
        
        console.log('inside loop create choices')
        var answerBtn = document.createElement('button')
        answerBtn.innerHTML += q[questionIndex].choices[i].choice
        console.log(questions)
        questions.appendChild(answerBtn)
    }
    
}





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








function quiz(){
    
    // while(questionCounter <5){
        questionContainerElement.innerText = q[questionIndex].question
        createChoices()
        
        
        
        // }
    }
    
    quiz()
    
    
    strtBtn.addEventListener('click',startGame )
    
    
