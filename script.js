// This is your updated checkAnswer function.
/*function checkAnswer() {
  const correctAnswer = 'optionRomania';

  // Clear all previous emojis
  document.getElementById('emojiRomania').innerHTML = '';
  document.getElementById('emojiRussia').innerHTML = '';
  document.getElementById('emojiSerbia').innerHTML = '';
  document.getElementById('emojiSwitzerland').innerHTML = '';

  // Get the selected option
  const selectedOption = document.querySelector('input[name="q1"]:checked')?.id;


  // Get the corresponding emoji span ID based on the selected option's ID
  const emojiId = 'emoji' + selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1);

  if (selectedOption === correctAnswer) {
    document.getElementById(emojiId).innerHTML = '<i class="bi bi-emoji-smile"></i>';
  } else {
    document.getElementById(emojiId).innerHTML = '<i class="bi bi-emoji-frown"></i>';
  }
}

// Event listener for the submit button
document.getElementById('submitAnswers').addEventListener('click', checkAnswer);
*/

function checkButton(){
  document.getElementById('submitAnswers').addEventListener('click', checkAnswer);
}
function checkAnswer(question, selectedOption) {

  //document.getElementById('submitAnswers').addEventListener('click', checkAnswer);
  // Define the correct answer
  const correctAnswer = 'optionRomania';

  // Clear all previous emojis
  //document.getElementById('emojiRomania').innerHTML = '';
 // document.getElementById('emojiRussia').innerHTML = '';
 // document.getElementById('emojiSerbia').innerHTML = '';
 // document.getElementById('emojiSwitzerland').innerHTML = '';

  // Determine which emoji ID to update based on the selected option
  let emojiId;
  switch (selectedOption) {
    case 'optionRomania':
      emojiId = 'emojiRomania';
      break;
    case 'optionRussia':
      emojiId = 'emojiRussia';
      break;
    case 'optionSerbia':
      emojiId = 'emojiSerbia';
      break;
    case 'optionSwitzerland':
      emojiId = 'emojiSwitzerland';
      break;
  }
  
  if (selectedOption === correctAnswer) {
    document.getElementById(emojiId).innerHTML = '<i class="bi bi-emoji-smile"></i>';
  } else {
    document.getElementById(emojiId).innerHTML = '<i class="bi bi-emoji-frown"></i>';
  }

  
}
