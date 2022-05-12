let answerElement = document.getElementById('numberWithCommas');
const button = document.getElementById('submitButton');

button.addEventListener("click", () => {
    number = document.getElementById('number').value;
    answerElement.textContent = Number(number).toLocaleString();
})