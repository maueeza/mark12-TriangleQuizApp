const inputAngles = document.querySelectorAll(".input-for-angles");
const isTriangleBtn = document.querySelector("#btn-chk-triangle");
var outputDiv = document.querySelector("#output-container");

function calculateSumOfAngles(angle1, angle2, angle3)
{
    console.log("angle1 : ", angle1);
    console.log("angle2 : ", angle2);
    console.log("angle3 : ", angle3);
    var AngleSum = angle1+angle2+angle3;
    return AngleSum;
}

function isTriangle()
{
    const sum = calculateSumOfAngles(Number(inputAngles[0].value), 
                                        Number(inputAngles[1].value), 
                                        Number(inputAngles[2].value));
    console.log("sum : ",sum);
    if(sum === 180)
    {
        outputDiv.innerText = "Yes, The angles form a triangle";
    }
    else
    {
        outputDiv.innerText = "Nope! Angles don't form a triangle";
    }
}

isTriangleBtn.addEventListener("click",isTriangle);