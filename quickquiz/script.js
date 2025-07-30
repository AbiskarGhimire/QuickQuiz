function saveQuiz() {
    const title = document.getElementById("quizName").value.trim();
    const data = document.getElementById("quizData").value.trim();
    if (!title || !data) return alert("Fill all fields!");
  
    fetch("backend/save.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `title=${encodeURIComponent(title)}&data=${encodeURIComponent(data)}`
    })
    .then(res => res.text())
    .then(alert);
  }
  
  function loadQuiz() {
    const title = document.getElementById("loadName").value.trim();
    fetch(`backend/load.php?title=${encodeURIComponent(title)}`)
      .then(res => res.text())
      .then(text => {
        const lines = text.trim().split("\n");
        let html = "";
        lines.forEach((line, i) => {
          const [q, a, b, c, correct] = line.split("||");
          html += `
            <div class="mb-3">
              <strong>${i+1}. ${q}</strong><br>
              <input type="radio" name="q${i}" value="A"> A. ${a}<br>
              <input type="radio" name="q${i}" value="B"> B. ${b}<br>
              <input type="radio" name="q${i}" value="C"> C. ${c}<br>
              <input type="hidden" id="correct${i}" value="${correct}">
            </div>
          `;
        });
        html += `<button class="btn btn-success w-100" onclick="submitQuiz(${lines.length})">Submit</button>`;
        document.getElementById("quizArea").innerHTML = html;
      });
  }
  
  function submitQuiz(count) {
    let score = 0;
    for (let i = 0; i < count; i++) {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      const correct = document.getElementById(`correct${i}`).value;
      if (selected && selected.value === correct) score++;
    }
    alert(`You scored ${score} out of ${count}`);
  }
  