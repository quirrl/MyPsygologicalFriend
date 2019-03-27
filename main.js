


let amount_questions = 4;
let answers = [amount_questions];
let questionData =


function fillElement(position, value) {
    answers[position] = value;
    alert("The current value is: " + answers[position]);
}

function evaluate(){
    for(i = 0; i < 4; i++){
        let tempElement = document.getElementById("question"+i);
        answers[i] = tempElement.getValue();
    }
    printSolution();
}

function printSolution() {
    console.log(answers);
}





