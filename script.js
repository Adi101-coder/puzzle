function checkAnswer() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    const correctAnswer = "python"; // change as needed

    const result = document.getElementById("result");

    if (userInput === correctAnswer) {
        result.textContent = "✅ Correct! Well done!";
        result.style.color = "#2ecc71"; // green
    } else {
        result.textContent = "❌ Incorrect! Try again.";
        result.style.color = "#e74c3c"; // red
    }
}
