const inputBaseElement = document.querySelector("#input-base");
const inputHeightElement = document.querySelector("#input-height");
const btnCalcHypo = document.querySelector("#calculate-hypo");
const outputContainer = document.querySelector("#output-container");

function calculateHypotenuse()
{
    console.log("Button Clicked!");
    let inpBase = Number(inputBaseElement.value);
    console.log("inpBase : "+inpBase+", typeof inpBase : ",typeof inpBase);
    let inpHeight = Number(inputHeightElement.value);
    console.log("inpHeight : ",inpHeight+", typeof inpHeight : ", typeof inpHeight);
    const Hypotenuse = Math.sqrt((inpBase*inpBase)+(inpHeight*inpHeight));
    console.log("Length of Hypotenuse is : "+Hypotenuse);
    outputContainer.innerText = "Length of Hypotenuse is : "+Hypotenuse;

}

btnCalcHypo.addEventListener("click",calculateHypotenuse);