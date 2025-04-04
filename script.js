function checkAnswer() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    const correctAnswer = "python"; // Update this if needed
    const result = document.getElementById("result");

    if (userInput === correctAnswer) {
        result.textContent = "Prices increased by 25%!";
    } else {
        let randomValue;
        do {
            randomValue = Math.floor(Math.random() * 100) + 1;
        } while (randomValue === 25);

        result.textContent = ` ${randomValue}% change in stock price.`;
    }
}
