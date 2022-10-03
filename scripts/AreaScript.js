const inputElements = document.querySelectorAll(".input-for-angles");
const btnCalcArea = document.querySelector("#calculate-area");
const outputContainer = document.querySelector("#output-container");

function calculateArea()
{
    const base = Number(inputElements[0].value);
    const height = Number(inputElements[1].value);
    console.log("base : "+base+", typeof base: "+typeof base);
    console.log("height : "+height+", typeof height: "+typeof height);
    const area = 1/2*(base)*(height);

    console.log("Area is : "+area);
    outputContainer.innerText = "Area of Triangle is : "+area;

}

btnCalcArea.addEventListener("click",calculateArea);