let currentTheme = "Ciência"; // Você pode mudar o tema aqui
let currentQuestionIndex = 0;
let score = 0;
let playerName = "";

// Função para mudar de tela
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    document.getElementById(screenId).style.display = 'flex';
}

// Iniciar Jogo
function startGame() {
    const nameInput = document.getElementById('player-name').value;
    if (!nameInput.trim()) {
        alert("Digite seu nome para continuar!");
        return;
    }
    playerName = nameInput;
    score = 0;
    currentQuestionIndex = 0;
    updateScoreUI();
    showScreen('quiz');
    loadQuestion();
}

// Carregar Pergunta com Embaralhamento
function loadQuestion() {
    const questionData = database[currentTheme][currentQuestionIndex];
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    document.getElementById('question-text').innerText = questionData.q;
    document.getElementById('theme-display').innerText = `TEMA: ${currentTheme.toUpperCase()}`;

    // Preparar e Embaralhar opções
    let options = questionData.opts.map((text, index) => ({
        text: text,
        isCorrect: index === questionData.ans
    }));

    options = options.sort(() => Math.random() - 0.5); // Shuffle simples

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-sub';
        btn.innerText = opt.text;
        btn.onclick = () => handleAnswer(opt.isCorrect);
        container.appendChild(btn);
    });
}

function handleAnswer(isCorrect) {
    if (isCorrect) {
        score += 10;
        updateScoreUI();
        currentQuestionIndex++;
        if (currentQuestionIndex < database[currentTheme].length) {
            loadQuestion();
        } else {
            finishGame("VOCÊ VENCEU O TEMA!");
        }
    } else {
        finishGame("GAME OVER!");
    }
}

function finishGame(msg) {
    alert(`${msg} Pontos: ${score}`);
    saveScore();
    showScreen('menu');
}

function updateScoreUI() {
    document.getElementById('score-display').innerText = `SCORE: ${score}`;
}

// SISTEMA DE RANKING
function saveScore() {
    let ranking = JSON.parse(localStorage.getItem('genioRanking')) || [];
    ranking.push({ name: playerName, points: score });
    ranking.sort((a, b) => b.points - a.points);
    localStorage.setItem('genioRanking', JSON.stringify(ranking.slice(0, 5)));
}

function showRanking() {
    const list = document.getElementById('ranking-list');
    const ranking = JSON.parse(localStorage.getItem('genioRanking')) || [];
    list.innerHTML = ranking.length ? "" : "<p>Nenhum recorde ainda.</p>";
    
    ranking.forEach((entry, i) => {
        list.innerHTML += `
            <div class="ranking-item">
                <span>${i + 1}º ${entry.name}</span>
                <span style="color:var(--green)">${entry.points} pts</span>
            </div>`;
    });
    showScreen('ranking');
}

function updateVolume(v) { console.log("Volume: " + v); }