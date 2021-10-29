
let url = `https://opentdb.com/api.php?amount=10&category=15&type=multiple`;
let currentCorrectAnswer = 'answer';

const question = document.getElementById('question');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

const runFetchCall = function () {
    fetch(url)
        .then(response => response.json())
        .then(myData => {
            handleData(myData);
        });
}

const checkAnswer = answer => {
    console.log('has been clicked', answer)
    if (currentCorrectAnswer === answer) {
        alert("Correct!");
        return true;
    }
    return false;
}

const handleData = (myData) => {
    console.log(myData);
    question.innerHTML = `<h2>${myData.results[0].question}</h2>`;
    currentCorrectAnswer = myData.results[0].correct_answer;
    const answers = [
        myData.results[0].correct_answer,
        myData.results[0].incorrect_answers[0],
        myData.results[0].incorrect_answers[1],
        myData.results[0].incorrect_answers[2]
    ];
    btn1.innerHTML = answers.splice(Math.floor(Math.random() * answers.length), 1);
    btn2.innerHTML = answers.splice(Math.floor(Math.random() * answers.length), 1);
    btn3.innerHTML = answers.splice(Math.floor(Math.random() * answers.length), 1);
    btn4.innerHTML = answers[0];

    btn1.onclick = checkAnswer(btn1.innerHTML);
    btn2.onclick = checkAnswer(btn2.innerHTML);
    btn3.onclick = checkAnswer(btn3.innerHTML);
    btn4.onclick = checkAnswer(btn4.innerHTML);
}

runFetchCall();


