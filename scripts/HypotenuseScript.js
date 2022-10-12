const inputBaseElement = document.querySelector("#input-base");
const inputHeightElement = document.querySelector("#input-height");
const btnCalcHypo = document.querySelector("#calculate-hypo");
const outputContainer = document.querySelector("#output-container");

function validateValues(inpBase, inpHeight)
{
    console.log("inpHeight : ",inpHeight+", typeof inpHeight : ", typeof inpHeight);
    if(inpBase === 0 || inpHeight === 0)
    {
        alert("Please enter non zero base, height value! ");
    }
}

function calculateHypotenuse()
{
    console.log("Button Clicked!");
    let inpBase = Number(inputBaseElement.value);
    console.log("inpBase : "+inpBase+", typeof inpBase : ",typeof inpBase);
    let inpHeight = Number(inputHeightElement.value);
    
    validateValues(inpBase, inpHeight);
    const Hypo = Math.sqrt((inpBase*inpBase)+(inpHeight*inpHeight));
    const Hypotenuse = Hypo.toFixed(2);
    console.log("Length of Hypotenuse is : "+Hypotenuse);
    outputContainer.innerText = "Length of Hypotenuse is : "+Hypotenuse;

}

btnCalcHypo.addEventListener("click",calculateHypotenuse);