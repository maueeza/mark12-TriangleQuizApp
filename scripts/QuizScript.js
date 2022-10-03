const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const outputContainer = document.querySelector("#output-text");

const correctAnswers = ['90°','Right Angled','One Right Angle','60°,90°,30°','Isosceles Triangle'];

function calculateScore()
{
    const data = new FormData(quizForm);
    var index = 0
    var score = 0;
    console.log("Button Clicked!");

    for(let value of data.values())
    {
        console.log(value);
        if(value === correctAnswers[index])
        {
            console.log("true")
            score = score +1;
        }
        else
        {
            console.log("false")
        }
        index = index+1;
    }
    outputContainer.innerText = "Current Score is : "+score;
}

submitBtn.addEventListener("click",calculateScore);