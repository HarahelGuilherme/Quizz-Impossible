let currentTheme = "Ciência"; 
let currentQuestionIndex = 0;
let score = 0;
let playerName = "";
let isAnswering = false; // Bloqueia cliques múltiplos

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    document.getElementById(screenId).style.display = 'flex';
}

function startGame() {
    const nameInput = document.getElementById('player-name').value;
    if (!nameInput.trim()) {
        alert("Digite seu nome!"); 
        return;
    }
    playerName = nameInput;
    score = 0;
    currentQuestionIndex = 0;
    isAnswering = false;
    updateScoreUI();
    showScreen('quiz');
    loadQuestion();
}

function loadQuestion() {
    const questions = database[currentTheme];
    const questionData = questions[currentQuestionIndex];
    const container = document.getElementById('options-container');
    
    // Atualiza Barra de Progresso
    const progress = (currentQuestionIndex / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;

    container.innerHTML = '';
    document.getElementById('question-text').innerText = questionData.q;
    document.getElementById('theme-display').innerText = `TEMA: ${currentTheme.toUpperCase()}`;

    let options = questionData.opts.map((text, index) => ({
        text: text,
        isCorrect: index === questionData.ans
    }));

    options = options.sort(() => Math.random() - 0.5);

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-sub';
        btn.innerText = opt.text;
        btn.onclick = (e) => handleAnswer(opt.isCorrect, e.target);
        container.appendChild(btn);
    });
}

function handleAnswer(isCorrect, btnElement) {
    if (isAnswering) return;
    isAnswering = true;

    if (isCorrect) {
        btnElement.classList.add('correct-answer');
        score += 10;
        updateScoreUI();

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < database[currentTheme].length) {
                isAnswering = false;
                loadQuestion();
            } else {
                document.getElementById('progress-bar').style.width = `100%`;
                finishGame("VOCÊ É UM GÊNIO!");
            }
        }, 600); // Meio segundo de brilho verde
    } else {
        btnElement.classList.add('wrong-answer');
        
        setTimeout(() => {
            finishGame("NÃO FOI DESSA VEZ...");
        }, 800); // Tempo para o jogador ver a tremedeira vermelha
    }
}

function finishGame(msg) {
    saveScore();
    // Aqui você pode criar uma tela de "Fim de Jogo" mais bonita depois
    alert(`${msg} \nPontuação final: ${score}`);
    showScreen('menu');
}

function updateScoreUI() {
    document.getElementById('score-display').innerText = `SCORE: ${score}`;
}

// RANKING (Local Storage)
function saveScore() {
    let ranking = JSON.parse(localStorage.getItem('genioRanking')) || [];
    ranking.push({ name: playerName, points: score });
    ranking.sort((a, b) => b.points - a.points);
    localStorage.setItem('genioRanking', JSON.stringify(ranking.slice(0, 5)));
}

function showRanking() {
    const list = document.getElementById('ranking-list');
    const ranking = JSON.parse(localStorage.getItem('genioRanking')) || [];
    list.innerHTML = ranking.length ? "" : "<p>Nenhum recorde.</p>";
    
    ranking.forEach((entry, i) => {
        list.innerHTML += `
            <div class="ranking-item">
                <span>${i + 1}º ${entry.name}</span>
                <span style="color:var(--green)">${entry.points} pts</span>
            </div>`;
    });
    showScreen('ranking');
}