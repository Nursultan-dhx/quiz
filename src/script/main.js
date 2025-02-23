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

function startRound2Question1() { 
    document.getElementById('round2-intro').classList.add('hidden');
    document.getElementById('round2-question#1').classList.remove('hidden');
}

function startRound2Question2() { 
    document.getElementById('round2-question#1').classList.add('hidden');
    document.getElementById('round2-question#2').classList.remove('hidden');
}

function startRound2Question3() { 
    document.getElementById('round2-question#2').classList.add('hidden');
    document.getElementById('round2-question#3').classList.remove('hidden');
}

function startRound2Question4() { 
    document.getElementById('round2-question#3').classList.add('hidden');
    document.getElementById('round2-question#4').classList.remove('hidden');
}

function startRound2Question5() { 
    document.getElementById('round2-question#4').classList.add('hidden');
    document.getElementById('round2-question#5').classList.remove('hidden');
}

function startRound2Question6() { 
    document.getElementById('round2-question#5').classList.add('hidden');
    document.getElementById('round2-question#6').classList.remove('hidden');
}

function startRound2Question7() { 
    document.getElementById('round2-question#6').classList.add('hidden');
    document.getElementById('round2-question#7').classList.remove('hidden');
}

function showRound2Answer1() { 
    document.getElementById('round2-question#7').classList.add('hidden');
    document.getElementById('round2-answer#1').classList.remove('hidden');
}

function showRound2Answer2() { 
    document.getElementById('round2-answer#1').classList.add('hidden');
    document.getElementById('round2-answer#2').classList.remove('hidden');
}

function showRound2Answer3() { 
    document.getElementById('round2-answer#2').classList.add('hidden');
    document.getElementById('round2-answer#3').classList.remove('hidden');
}

function showRound2Answer4() { 
    document.getElementById('round2-answer#3').classList.add('hidden');
    document.getElementById('round2-answer#4').classList.remove('hidden');
}

function showRound2Answer5() { 
    document.getElementById('round2-answer#4').classList.add('hidden');
    document.getElementById('round2-answer#5').classList.remove('hidden');
}

function showRound2Answer6() { 
    document.getElementById('round2-answer#5').classList.add('hidden');
    document.getElementById('round2-answer#6').classList.remove('hidden');
}

function showRound2Answer7() { 
    document.getElementById('round2-answer#6').classList.add('hidden');
    document.getElementById('round2-answer#7').classList.remove('hidden');
}

function showRound3() {
    document.getElementById('round2-answer#7').classList.add('hidden');
    document.getElementById('round3-intro').classList.remove('hidden');
    document.getElementById('round2').classList.add('hidden');
    document.getElementById('round3').classList.remove('hidden');
}

function startTimer(timerId, startBtnId, showAnswerBtnId) {
  let timer = 70; // Установим таймер на 30 секунд
  const timerElement = document.getElementById(timerId);
  const backgroundMusic = document.getElementById('background-music');
  backgroundMusic.currentTime = 0; // Сбросим время воспроизведения на начало
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
