
let url = `https://opentdb.com/api.php?amount=10&category=15&type=multiple`;

const question = document.getElementById('question');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

const main = myData => {
    console.log(myData);
    document.getElementById('question').innerHTML = `<h2>${myData.results[0].question}</h2>`;
    btn1.innerHTML= myData.results[0].correct_answer, true,
    btn2.innerHTML = myData.results[0].incorrect_answers[0], false,
    btn3.innerHTML = myData.results[0].incorrect_answers[1], false,
    btn4.innerHTML = myData.results[0].incorrect_answers[2], false
}

fetch(url)
    .then(response => response.json())
    .then(myData => {
        main(myData);
    });

let correctButton = document.getElementById("btn1");

correctButton.addEventListener("click",()=> {
    alert("Correct!");
    
});

