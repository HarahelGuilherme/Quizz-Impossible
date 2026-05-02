let currentTheme = "Ciência";
let currentQuestionIndex = 0;
let score = 0;
let volume = 50;

// Função para iniciar o jogo
function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    updateScore();
    showScreen('quiz');
    loadQuestion();
}

// Troca de telas (Menu, Config, Quiz)
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    document.getElementById(screenId).style.display = 'flex';
}

// Função para embaralhar Arrays (Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Carrega a pergunta atual na tela
function loadQuestion() {
    const questionData = database[currentTheme][currentQuestionIndex];
    const container = document.getElementById('options-container');
    const textElement = document.getElementById('question-text');
    
    container.innerHTML = ''; // Limpa botões anteriores
    textElement.innerText = questionData.q;
    document.getElementById('theme-display').innerText = `TEMA: ${currentTheme.toUpperCase()}`;

    // Mapeia as opções para saber qual é a correta antes de embaralhar
    let options = questionData.opts.map((text, index) => ({
        text: text,
        correct: index === questionData.ans
    }));

    // EMBARALHA as opções para elas mudarem de lugar
    shuffle(options);

    // Cria os botões centralizados
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.text;
        btn.onclick = () => checkAnswer(opt.correct);
        container.appendChild(btn);
    });
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        score += 10;
        updateScore();
        currentQuestionIndex++;
        
        if (currentQuestionIndex < database[currentTheme].length) {
            loadQuestion();
        } else {
            alert("Parabéns! Você venceu este tema!");
            showScreen('menu');
        }
    } else {
        alert("ERROU! Voltando ao início...");
        showScreen('menu');
    }
}

function updateScore() {
    document.getElementById('score-display').innerText = `SCORE: ${score}`;
}

function updateVolume(val) {
    volume = val;
    console.log(`Volume ajustado para: ${volume}`);
    // Aqui você pode aplicar o volume nos seus elementos de áudio futuramente
}