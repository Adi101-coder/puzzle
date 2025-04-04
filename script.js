function checkAnswer() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    const correctAnswer = "python"; // You can change this to any answer
    const result = document.getElementById("result");

    if (userInput === correctAnswer) {
        result.textContent = "✅ Correct! Prices increased by 25%!";
        result.style.color = "#27ae60"; // green
    } else {
        let randomValue;
        do {
            randomValue = Math.floor(Math.random() * 100) + 1;
        } while (randomValue === 25); // Make sure it is NOT 25

        result.textContent = `❌ Incorrect! ${randomValue}% change in stock price.`;
        result.style.color = "#c0392b"; // red
    }
}
