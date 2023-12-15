/****************** Neeraj VivekKumar Asha Lekshmi: 

/****************** To create variables ******************/
let modelName = "XYZ";
let duration = 0;

/******************  function  to find the cost******************/
function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    let totalCost = 0;

    if (modelName === "XYZ") {
        totalCost = duration * 100;
    } else if (modelName === "CPRG") {
        totalCost = duration * 213;
    }

    costLabel.innerHTML = totalCost.toFixed(2);
}

/****************** Code for the Model Button ******************/
let modelButton = document.getElementById("model-button");

function changeModel() {
    let modelText = document.getElementById("model-text");

    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else if (modelName === "CPRG") {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    recalculate();
}


modelButton.addEventListener("click", changeModel);

/****************** Code for the duration button  ******************/
let durationButton = document.getElementById("duration-button");

function changeDuration() {
    let durationText = document.getElementById("duration-text");
    let newDuration = prompt("Enter new duration:");

    if (newDuration !== null && !isNaN(newDuration)) {
        duration = parseInt(newDuration);
        durationText.innerHTML = duration;
        recalculate();
    } else {
        alert("Please enter a valid duration.");
    }
}


durationButton.addEventListener("click", changeDuration);
