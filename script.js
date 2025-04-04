function checkAnswer() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    const correctAnswer = "python"; // Change this if needed
    const result = document.getElementById("result");

    if (userInput === correctAnswer) {
        result.textContent = "✅ Correct! Prices increased by 25%!";
        result.style.color = "#27ae60"; // green
    } else {
        const randomValue = Math.floor(Math.random() * 100) + 1;
        result.textContent = `❌ Incorrect! Random value generated: ${randomValue}`;
        result.style.color = "#c0392b"; // red
    }
}
