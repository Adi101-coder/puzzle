function checkAnswer() {
    const correctAnswer = "python";
    const input = document.getElementById("answer").value.trim().toLowerCase();
    const result = document.getElementById("result");
  
    if (input === correctAnswer) {
      result.textContent = "✅ Correct! Great job!";
      result.style.color = "green";
    } else {
      result.textContent = "❌ Wrong! Try again.";
      result.style.color = "red";
    }
  }
  