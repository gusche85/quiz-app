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
    q1.innerHTML = '<div class="text-success">😄 Correct!</div>';
  }
  else {
    q1.innerHTML = '🙁 Opps! The correct answer is Romania.';
  }
  
  if(question2.checked) {
    score++;
    q2.innerHTML = '<div class="text-success">😄 Correct!</div>';
  }
  else {
    q2.innerHTML = '<div class="text-danger">🙁 Opps! The correct answer is Philippines</div>';
  }
  
  if(question3.checked) {
    score++;
    q3.innerHTML = '<div class="text-success">😄 Correct!</div>';
  }
  else {
    q3.innerHTML = '🙁 Opps! The correct answer is his predictions.';
  }
  
  if(question4.checked) {
    score++;
    q4.innerHTML = '<div class="text-success">😄 Correct!</div>';
  }
  else {
    q4.innerHTML = '🙁 Opps! The correct answer is a parliament.';
  }
  if(question5.checked) {
    score++;
    q5.innerHTML = '<div class="text-success">😄 Correct!</div>';
  } 
  else {
    q5.innerHTML = '🙁 Opps! The correct answer is Omega.';
  }
  if(question6.checked) {
    score++;
    q6.innerHTML = '<div class="text-success">😄 Correct!</div>';
  }
  else {
    q6.innerHTML = '🙁 Opps! The correct answer is Jupiter.';
  }

  result1.innerHTML = `Your score is: ${score}/6`;
/*return [ 
    {
      question: 'Which country is in the European Union?',
      option: ['Romania', 'Russia', 'Serbia', 'Switzerland'],
      answerIndex: 0
    },
    {
      question: 'Where is Tagalog commonly spoken?',
      option: ['Russia', 'Philippines', 'Singapore', 'Oman'],
      answer: 1
    },
    {
      question: 'What is Nostradamus known for?',
      option: ['His height', 'His inventions', 'His poems', 'His predictions'],
      answer: 3
    },
    {
      question: 'What is a group of owls called?',
      option: ['An Army', 'A Bewilderment', 'A Parliament', 'A Surprise'],
      answer: 2
    },
    {
      question: 'What is the last letter in the Greek alphabet?',
      option: 'Gamma', 'Omega', 'Pi', 'Zeta'],
      answer: 1
    },
    {
      question: 'What is the largest planet in the Solar System?',
      option: ['Earth', 'Jupiter', 'Neptune', 'Saturn'],
      answer: '1
    }
  ]*/
  
}



/*
const questions = [ 
  {
    question: 'Which country is in the European Union?',
    option: ['Romania', 'Russia', 'Serbia', 'Switzerland'],
    answerIndex: 0
  },
  {
    question: 'Where is Tagalog commonly spoken?',
    option: ['Russia', 'Philippines', 'Singapore', 'Oman'],
    answer: 1
  },
  {
    question: 'What is Nostradamus known for?',
    option: ['His height', 'His inventions', 'His poems', 'His predictions'],
    answer: 3
  },
  {
    question: 'What is a group of owls called?',
    option: ['An Army', 'A Bewilderment', 'A Parliament', 'A Surprise'],
    answer: 2
  },
  {
    question: 'What is the last letter in the Greek alphabet?',
    option: 'Gamma', 'Omega', 'Pi', 'Zeta'],
    answer: 1
  },
  {
    question: 'What is the largest planet in the Solar System?',
    option: ['Earth', 'Jupiter', 'Neptune', 'Saturn'],
    answer: '1
  }
]




*/




