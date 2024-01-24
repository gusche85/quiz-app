


function checkButton() {
  const question1 = document.getElementById('correct1');
  const question2 = document.getElementById('correct2');
  const question3 = document.getElementById('correct3');
  const question4 = document.getElementById('correct4');
  const question5 = document.getElementById('correct5');
  const question6 = document.getElementById('correct6');
  const result1 = document.getElementById('result1');
  const q1 = document.getElementById('question1');
  const q2 = document.getElementById('question2');
  const q3 = document.getElementById('question3');
  const q4 = document.getElementById('question4');
  const q5 = document.getElementById('question5');
  const q6 = document.getElementById('question6');
  
  let score = 0;
  if(question1.checked) {
    score++;
    q1.innerHTML = '<div class="text-success fw-bold">😄 Correct!</div>';
  }
  else {
    q1.innerHTML = '<div class="text-danger">🙁 Opps! The correct answer is Romania.</div>';
  }
  
  if(question2.checked) {
    score++;
    q2.innerHTML = '<div class="text-success fw-bold">😄 Correct!</div>';
  }
  else {
    q2.innerHTML = '<div class="text-danger">🙁 Opps! The correct answer is Philippines.</div>';
  }
  
  if(question3.checked) {
    score++;
    q3.innerHTML = '<div class="text-success fw-bold">😄 Correct!</div>';
  }
  else {
    q3.innerHTML = '<div class="text-danger">🙁 Opps! The correct answer is his predictions.</div>';
  }
  
  if(question4.checked) {
    score++;
    q4.innerHTML = '<div class="text-success fw-bold">😄 Correct!</div>';
  }
  else {
    q4.innerHTML = '<div class="text-danger">🙁 Opps! The correct answer is a parliament.</div>';
  }
  if(question5.checked) {
    score++;
    q5.innerHTML = '<div class="text-success fw-bold">😄 Correct!</div>';
  } 
  else {
    q5.innerHTML = '<div class="text-danger">🙁 Opps! The correct answer is Omega.</div>';
  }
  if(question6.checked) {
    score++;
    q6.innerHTML = '<div class="text-success fw-bold">😄 Correct!</div>';
  }
  else {
    q6.innerHTML = '<div class="text-danger">🙁 Opps! The correct answer is Jupiter.</div>';
  }

  
  result1.innerHTML = `Your score is: ${score}/6`;
  //custom message
  if(score === 5 || score === 6) {
    document.getElementById('custom').innerHTML = 'Great job!'
  }
  else if (score === 3 || score === 4) {
      document.getElementById('custom').innerHTML = 'Very good!'
    }
  else {
      document.getElementById('custom').innerHTML = 'Nice job!'
    }
  
  //document.getElementById('submitAnswers').classList.add('d-none');

  // Show "Reset" button
  document.getElementById('resetButton').classList.remove('d-none');

  
}


function resetQuiz() {
    // Your existing resetQuiz() logic here
  // Clear selected answers
  document.querySelectorAll('input[type="radio"]:checked').forEach(radio => radio.checked = false);

  // Clear feedback messages
  document.querySelectorAll('.text-center.text-white.fw-bold.bg-dark').forEach(feedback => feedback.innerHTML = '');
    
  }
