function showRules() {
    document.getElementById('game-start').classList.add('hidden');
    document.getElementById('game-rules').classList.remove('hidden');
}

function showGoodLuck() {
    document.getElementById('game-rules').classList.add('hidden');
    document.getElementById('good-luck').classList.remove('hidden');
}

function showRound1() {
    document.getElementById('good-luck').classList.add('hidden');
    document.getElementById('round1-intro').classList.remove('hidden');
    document.getElementById('hero').classList.add('hidden');
    document.getElementById('round1').classList.remove('hidden');
}

function startRound1Question1() {
    document.getElementById('round1-intro').classList.add('hidden');
    document.getElementById('round1-question#1').classList.remove('hidden');
}

function showAnswerRound1Question1() {
    document.getElementById('round1-question#1').classList.add('hidden');
    document.getElementById('round1-question#1-answer').classList.remove('hidden');
}   

function startRound1Question2() {
    document.getElementById('round1-question#1-answer').classList.add('hidden');
    document.getElementById('round1-question#2').classList.remove('hidden');
}
    
function showAnswerRound1Question2() {
    document.getElementById('round1-question#2').classList.add('hidden');
    document.getElementById('round1-question#2-answer').classList.remove('hidden');
}   

function startRound1Question3() {
    document.getElementById('round1-question#2-answer').classList.add('hidden');
    document.getElementById('round1-question#3').classList.remove('hidden');
}
    
function showAnswerRound1Question3() {
    document.getElementById('round1-question#3').classList.add('hidden');
    document.getElementById('round1-question#3-answer').classList.remove('hidden');
}   

function startRound1Question4() {
    document.getElementById('round1-question#3-answer').classList.add('hidden');
    document.getElementById('round1-question#4').classList.remove('hidden');
}
    
function showAnswerRound1Question4() {
    document.getElementById('round1-question#4').classList.add('hidden');
    document.getElementById('round1-question#4-answer').classList.remove('hidden');
}   

function startRound1Question5() {
    document.getElementById('round1-question#4-answer').classList.add('hidden');
    document.getElementById('round1-question#5').classList.remove('hidden');
}
    
function showAnswerRound1Question5() {
    document.getElementById('round1-question#5').classList.add('hidden');
    document.getElementById('round1-question#5-answer').classList.remove('hidden');
}   

function startRound1Question6() {
    document.getElementById('round1-question#5-answer').classList.add('hidden');
    document.getElementById('round1-question#6').classList.remove('hidden');
}
    
function showAnswerRound1Question6() {
    document.getElementById('round1-question#6').classList.add('hidden');
    document.getElementById('round1-question#6-answer').classList.remove('hidden');
}   

function startRound1Question7() {
    document.getElementById('round1-question#6-answer').classList.add('hidden');
    document.getElementById('round1-question#7').classList.remove('hidden');
}
    
function showAnswerRound1Question7() {
    document.getElementById('round1-question#7').classList.add('hidden');
    document.getElementById('round1-question#7-answer').classList.remove('hidden');
}   

function showRound2() {
    document.getElementById('round1-question#7-answer').classList.add('hidden');
    document.getElementById('round2-intro').classList.remove('hidden');
    document.getElementById('round1').classList.add('hidden');
    document.getElementById('round2').classList.remove('hidden');
}

function startRound2Question1() { // Renamed function
    document.getElementById('round2-intro').classList.add('hidden');
    document.getElementById('round2-question#1').classList.remove('hidden');
}

function startTimer(timerId, startBtnId, showAnswerBtnId) {
  let timer = 1;
  const timerElement = document.getElementById(timerId);
  const backgroundMusic = document.getElementById('background-music');
  backgroundMusic.play();
  timerElement.textContent = `0:${timer < 10 ? '0' : ''}${timer}`;
  const intervalId = setInterval(() => {
    timer--;
    timerElement.textContent = `0:${timer < 10 ? '0' : ''}${timer}`;
    if (timer === 0) {
      clearInterval(intervalId);
      backgroundMusic.pause();
      document.getElementById(startBtnId).classList.add('hidden');
      document.getElementById(showAnswerBtnId).classList.remove('hidden');
    }
  }, 1000);
}

function highlightCorrectAnswer() {
  const correctAnswer = document.getElementById('correct-answer');
  correctAnswer.classList.remove('bg-teal-700');
  correctAnswer.classList.add('bg-green-500');
}

