function toggleVisibility(hideId, showId) {
    document.getElementById(hideId).classList.add('hidden');
    document.getElementById(showId).classList.remove('hidden');
}

function navigateTo(page) {
    window.location.href = page;
}

// Game flow functions
function showGoodLuck() { toggleVisibility('game-start', 'good-luck'); }
function showRound1() { navigateTo('round1.html'); }
function showRound2() { navigateTo('round2.html'); }
function showRound3() { navigateTo('round3.html'); }
function showRound4() { navigateTo('round4.html'); }
function showRound5() { navigateTo('round5.html'); }

// Round 1
function startRound1Question1() { toggleVisibility('round1-intro', 'round1-question#1'); }
function startRound1Question2() { toggleVisibility('round1-question#1', 'round1-question#2'); }
function startRound1Question3() { toggleVisibility('round1-question#2', 'round1-question#3'); }
function startRound1Question4() { toggleVisibility('round1-question#3', 'round1-question#4'); }
function startRound1Question5() { toggleVisibility('round1-question#4', 'round1-question#5'); }
function startRound1Question6() { toggleVisibility('round1-question#5', 'round1-question#6'); }
function startRound1Question7() { toggleVisibility('round1-question#6', 'round1-question#7'); }
function showRound1Answers() { toggleVisibility('round1-question#7', 'round1-answer'); }
function showAnswerRound1Question1() { toggleVisibility('round1-answer', 'round1-question#1-answer'); }
function showAnswerRound1Question2() { toggleVisibility('round1-question#1-answer', 'round1-question#2-answer'); }
function showAnswerRound1Question3() { toggleVisibility('round1-question#2-answer', 'round1-question#3-answer'); }
function showAnswerRound1Question4() { toggleVisibility('round1-question#3-answer', 'round1-question#4-answer'); }
function showAnswerRound1Question5() { toggleVisibility('round1-question#4-answer', 'round1-question#5-answer'); }
function showAnswerRound1Question6() { toggleVisibility('round1-question#5-answer', 'round1-question#6-answer'); }
function showAnswerRound1Question7() { toggleVisibility('round1-question#6-answer', 'round1-question#7-answer'); }
function showRound1End() { toggleVisibility('round1-question#7-answer', 'round1End'); }

// Round 2
function startRound2Question1() { toggleVisibility('round2-intro', 'round2-question#1'); }
function startRound2Question2() { toggleVisibility('round2-question#1', 'round2-question#2'); }
function startRound2Question3() { toggleVisibility('round2-question#2', 'round2-question#3'); }
function startRound2Question4() { toggleVisibility('round2-question#3', 'round2-question#4'); }
function startRound2Question5() { toggleVisibility('round2-question#4', 'round2-question#5'); }
function startRound2Question6() { toggleVisibility('round2-question#5', 'round2-question#6'); }
function startRound2Question7() { toggleVisibility('round2-question#6', 'round2-question#7'); }
function showRound2Answers() { toggleVisibility('round2-question#7', 'round2-answer'); }
function showRound2Answer1() { toggleVisibility('round2-answer', 'round2-answer#1'); }
function showRound2Answer2() { toggleVisibility('round2-answer#1', 'round2-answer#2'); }
function showRound2Answer3() { toggleVisibility('round2-answer#2', 'round2-answer#3'); }
function showRound2Answer4() { toggleVisibility('round2-answer#3', 'round2-answer#4'); }
function showRound2Answer5() { toggleVisibility('round2-answer#4', 'round2-answer#5'); }
function showRound2Answer6() { toggleVisibility('round2-answer#5', 'round2-answer#6'); }
function showRound2Answer7() { toggleVisibility('round2-answer#6', 'round2-answer#7'); }
function showRound2End() { toggleVisibility('round2-question#7', 'round2End'); }

// Round 3
function startRound3Question1() { toggleVisibility('round3-intro', 'round3-question#1'); }
function startRound3Question2() { toggleVisibility('round3-question#1', 'round3-question#2'); }
function startRound3Question3() { toggleVisibility('round3-question#2', 'round3-question#3'); }
function startRound3Question4() { toggleVisibility('round3-question#3', 'round3-question#4'); }
function startRound3Question5() { toggleVisibility('round3-question#4', 'round3-question#5'); }
function startRound3Question6() { toggleVisibility('round3-question#5', 'round3-question#6'); }
function startRound3Question7() { toggleVisibility('round3-question#6', 'round3-question#7'); }
function startRound3Question8() { toggleVisibility('round3-question#7', 'round3-question#8'); }
function startRound3Question9() { toggleVisibility('round3-question#8', 'round3-question#9'); }
function startRound3Question10() { toggleVisibility('round3-question#9', 'round3-question#10'); }
function startRound3Question11() { toggleVisibility('round3-question#10', 'round3-question#11'); }
function startRound3Question12() { toggleVisibility('round3-question#11', 'round3-question#12'); }
function showRound3Answers() { toggleVisibility('round3-question#12', 'round3-answer'); }
function showRound3Question1Answer() { toggleVisibility('round3-answer', 'round3-question#1answer'); }
function showRound3Question2Answer() { toggleVisibility('round3-question#1answer', 'round3-question#2answer'); }
function showRound3Question3Answer() { toggleVisibility('round3-question#2answer', 'round3-question#3answer'); }
function showRound3Question4Answer() { toggleVisibility('round3-question#3answer', 'round3-question#4answer'); }
function showRound3Question5Answer() { toggleVisibility('round3-question#4answer', 'round3-question#5answer'); }
function showRound3Question6Answer() { toggleVisibility('round3-question#5answer', 'round3-question#6answer'); }
function showRound3Question7Answer() { toggleVisibility('round3-question#6answer', 'round3-question#7answer'); }
function showRound3Question8Answer() { toggleVisibility('round3-question#7answer', 'round3-question#8answer'); }
function showRound3Question9Answer() { toggleVisibility('round3-question#8answer', 'round3-question#9answer'); }
function showRound3Question10Answer() { toggleVisibility('round3-question#9answer', 'round3-question#10answer'); }
function showRound3Question11Answer() { toggleVisibility('round3-question#10answer', 'round3-question#11answer'); }
function showRound3Question12Answer() { toggleVisibility('round3-question#11answer', 'round3-question#12answer'); }
function showRound3End() { toggleVisibility('round3-question#12answer', 'round3End'); }

// Round 4
function startRound4Question1() { toggleVisibility('round4-intro', 'round4-question#1'); }
function startRound4Question2() { toggleVisibility('round4-question#1', 'round4-question#2'); }
function startRound4Question3() { toggleVisibility('round4-question#2', 'round4-question#3'); }
function startRound4Question4() { toggleVisibility('round4-question#3', 'round4-question#4'); }
function startRound4Question5() { toggleVisibility('round4-question#4', 'round4-question#5'); }
function startRound4Question6() { toggleVisibility('round4-question#5', 'round4-question#6'); }
function showRound4Answers() { toggleVisibility('round4-question#6', 'round4-answer'); }
function showAnswerRound4Question1() { toggleVisibility('round4-answer', 'round4-question#1-answer'); }
function showAnswerRound4Question2() { toggleVisibility('round4-question#1-answer', 'round4-question#2-answer'); }
function showAnswerRound4Question3() { toggleVisibility('round4-question#2-answer', 'round4-question#3-answer'); }
function showAnswerRound4Question4() { toggleVisibility('round4-question#3-answer', 'round4-question#4-answer'); }
function showAnswerRound4Question5() { toggleVisibility('round4-question#4-answer', 'round4-question#5-answer'); }
function showAnswerRound4Question6() { toggleVisibility('round4-question#5-answer', 'round4-question#6-answer'); }
function showRound4End() { toggleVisibility('round4-question#6-answer', 'round4End'); }

// Round 5
function startRound5Question1() { toggleVisibility('round5-intro', 'round5-question#1'); }
function startRound5Question2() { toggleVisibility('round5-question#1', 'round5-question#2'); }
function startRound5Question3() { toggleVisibility('round5-question#2', 'round5-question#3'); }
function startRound5Question4() { toggleVisibility('round5-question#3', 'round5-question#4'); }
function startRound5Question5() { toggleVisibility('round5-question#4', 'round5-question#5'); }
function startRound5Question6() { toggleVisibility('round5-question#5', 'round5-question#6'); }
function startRound5Question7() { toggleVisibility('round5-question#6', 'round5-question#7'); }
function showRound5Answers() { toggleVisibility('round5-question#7', 'round5-answer'); }
function showAnswerRound5Question1() { toggleVisibility('round5-answer', 'round5-question#1-answer'); }
function showAnswerRound5Question2() { toggleVisibility('round5-question#1-answer', 'round5-question#2-answer'); }
function showAnswerRound5Question3() { toggleVisibility('round5-question#2-answer', 'round5-question#3-answer'); }
function showAnswerRound5Question4() { toggleVisibility('round5-question#3-answer', 'round5-question#4-answer'); }
function showAnswerRound5Question5() { toggleVisibility('round5-question#4-answer', 'round5-question#5-answer'); }
function showAnswerRound5Question6() { toggleVisibility('round5-question#5-answer', 'round5-question#6-answer'); }
function showAnswerRound5Question7() { toggleVisibility('round5-question#6-answer', 'round5-question#7-answer'); }
function showRound5End() { toggleVisibility('round5-question#7-answer', 'round5End'); }

function startTimer(timerId, startBtnId, showAnswerBtnId, duration) {
    let timer = 1;
    const timerElement = document.getElementById(timerId);
    const backgroundMusic = document.getElementById('background-music');
    const drumMusic = document.getElementById('drum-music'); // Добавляем элемент для drum.mp3
    backgroundMusic.currentTime = 0;
    backgroundMusic.play();
    timerElement.textContent = `0:${timer < 10 ? '0' : ''}${timer}`;
    const intervalId = setInterval(() => {
        timer--;
        timerElement.textContent = `0:${timer < 10 ? '0' : ''}${timer}`;
        if (timer === 4) {
            backgroundMusic.pause(); // Останавливаем основную музыку
            drumMusic.currentTime = 0; // Сбрасываем время воспроизведения drum.mp3
            drumMusic.play(); // Воспроизводим drum.mp3
        }
        if (timer === 0) {
            clearInterval(intervalId);
            drumMusic.pause(); // Останавливаем drum.mp3
            toggleVisibility(startBtnId, showAnswerBtnId);
        }
    }, 1000);
}