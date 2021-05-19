
const Calculate = (sideA, sideB, sideC, result) => {
    var perimeter = Number(sideA) + Number(sideB) + Number(sideC);
    var halfThePerimeter = perimeter / 2.0;
    
    var Area = Math.sqrt(
        halfThePerimeter * (halfThePerimeter - sideA) * (halfThePerimeter - sideB) * (halfThePerimeter - sideC)
        );
    console.log("test: ",Area);

    result.innerHTML = `Area: ${ Number( Area ) }`;
    result.style.padding = "20px";
    result.style.margin = "10px";
    result.style.border = "0px";
    result.style.borderRadius = "5px";
    result.style.backgroundColor = "orange";
    result.style.color = "black";
    result.style.fontSize = "30px";
    result.parentElement.style.display = `inline-block`;
}

const Run = () => {

    console.log("Program Starts");

    var resultContainer = document.getElementById("result");
    var resultContainer_paragraphList = resultContainer.getElementsByTagName("p");
    var result = resultContainer_paragraphList[0];

    // console.log("Result: ",result);

    var containerA = document.getElementById("a");
    var containerB = document.getElementById("b");
    var containerC = document.getElementById("c");

    // console.log("Container A: ",containerA);
    // console.log("Container B: ",containerB);
    // console.log("Container C: ",containerC);

    var buttonContainer = document.getElementById("btn");
    var buttonContainer_buttonList = buttonContainer.getElementsByTagName("button");
    var button = buttonContainer_buttonList[0];

    // console.log("Button: ",button);

    var containerA_InputTagList = containerA.getElementsByTagName("input");
    var containerB_InputTagList = containerB.getElementsByTagName("input");
    var containerC_InputTagList = containerC.getElementsByTagName("input");

    var sideA = containerA_InputTagList[0];
    var sideB = containerB_InputTagList[0];
    var sideC = containerC_InputTagList[0];

    let sideA_Value = ( ( sideA.value == "" || sideA.value == null ) ) ? 0 : sideA.value;
    let sideB_Value = ( ( sideB.value == "" || sideB.value == null ) ) ? 0 : sideB.value;
    let sideC_Value = ( ( sideC.value == "" || sideC.value == null ) ) ? 0 : sideC.value;

    // console.log("Side A Value: ", sideA_Value);
    // console.log("Side B Value: ", sideB_Value);
    // console.log("Side C Value: ", sideC_Value);

    sideA.onkeyup = function(event) {
        var entry = Number( event.target.value );
        sideA_Value = ( ( entry == "" || entry == null ) ) ? 0 : entry;
    }
    sideB.onkeyup = function(event) {
        var entry = Number( event.target.value );
        sideB_Value = ( ( entry == "" || entry == null ) ) ? 0 : entry;
    }
    sideC.onkeyup = function(event) {
        var entry = Number( event.target.value );
        sideC_Value = ( ( entry == "" || entry == null ) ) ? 0 : entry;
    }

    button.onclick = function () {
        Calculate(sideA_Value, sideB_Value, sideC_Value, result)
    };

    console.log("Program Ends");

}

window.onload = Run;