let currentTheme = "Ciência"; // Define o tema inicial
let currentQuestionIndex = 0;
let score = 0;
let playerName = "";
let isAnswering = false;

// Função Navegação
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'flex';
}

// Iniciar Jogo
function startGame() {
    const nick = document.getElementById('player-name').value;
    if (!nick.trim()) return alert("Digite seu Nick!");
    playerName = nick;
    score = 0;
    currentQuestionIndex = 0;
    showScreen('quiz');
    loadQuestion();
}

// Embaralhamento
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Carregar Pergunta
function loadQuestion() {
    const questions = database[currentTheme];
    const data = questions[currentQuestionIndex];
    const container = document.getElementById('options-container');
    
    isAnswering = false;
    document.getElementById('progress-bar').style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
    document.getElementById('question-text').innerText = data.q;
    document.getElementById('theme-display').innerText = currentTheme.toUpperCase();
    document.getElementById('score-display').innerText = `${score} PTS`;
    
    container.innerHTML = '';
    
    let opts = data.opts.map((t, i) => ({ text: t, correct: i === data.ans }));
    opts = shuffle(opts);

    opts.forEach(o => {
        const btn = document.createElement('button');
        btn.innerText = o.text;
        btn.onclick = () => check(o.correct, btn);
        container.appendChild(btn);
    });
}

function check(correct, btn) {
    if (isAnswering) return;
    isAnswering = true;

    if (correct) {
        btn.classList.add('correct-answer');
        score += 10;
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < database[currentTheme].length) loadQuestion();
            else finish("TEMA CONCLUÍDO!");
        }, 600);
    } else {
        btn.classList.add('wrong-answer');
        setTimeout(() => finish("GAME OVER!"), 800);
    }
}

function finish(msg) {
    alert(`${msg}\nScore: ${score}`);
    saveScore();
    showScreen('menu');
}

// Ranking
function saveScore() {
    let r = JSON.parse(localStorage.getItem('genioRank')) || [];
    r.push({ name: playerName, pts: score });
    r.sort((a, b) => b.pts - a.pts);
    localStorage.setItem('genioRank', JSON.stringify(r.slice(0, 5)));
}

function showRanking() {
    const list = document.getElementById('ranking-list');
    const r = JSON.parse(localStorage.getItem('genioRank')) || [];
    list.innerHTML = r.length ? "" : "Sem recordes.";
    r.forEach((e, i) => {
        list.innerHTML += `<div class="ranking-item"><span>${i+1}º ${e.name}</span><span>${e.pts}</span></div>`;
    });
    showScreen('ranking');
}

// EASTER EGG JAZZ
let keyLog = "";
window.addEventListener("keydown", (e) => {
    keyLog = (keyLog + e.key.toLowerCase()).slice(-4);
    if (keyLog === "jazz" && document.getElementById('quiz').style.display !== 'none') {
        currentQuestionIndex++;
        keyLog = "";
        if (currentQuestionIndex < database[currentTheme].length) loadQuestion();
        else finish("PODER DO JAZZ!");
    }
});