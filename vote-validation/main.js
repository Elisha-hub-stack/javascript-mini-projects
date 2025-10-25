document.getElementById('ageForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from submitting

      const age = Number(document.getElementById('age').value);
      const result = document.getElementById('result');

      if (age >= 18) {
        result.textContent = "Congratulations, you can vote!";
        result.style.color = "green";
      } else {
        result.textContent = "Sorry, you cannot vote.";
        result.style.color = "red";
      }
    });