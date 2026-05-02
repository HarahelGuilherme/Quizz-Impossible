// CONFIGURAÇÃO DOS TEMAS (Adicione os nomes dos seus 22 temas aqui na ordem desejada)
const themesOrder = ["Ciência", "Geografia", "História"]; 
let themeIndex = 0;
let currentTheme = themesOrder[0];
let currentQuestionIndex = 0;
let score = 0;
let playerName = "";
let isAnswering = false;

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'flex';
}

function startGame() {
    const nick = document.getElementById('player-name').value;
    if (!nick.trim()) return alert("Digite seu Nick para entrar no Ranking!");
    playerName = nick;
    score = 0;
    themeIndex = 0;
    currentTheme = themesOrder[0];
    currentQuestionIndex = 0;
    showScreen('quiz');
    loadQuestion();
}

function loadQuestion() {
    isAnswering = false;
    const questions = database[currentTheme];
    const data = questions[currentQuestionIndex];
    const container = document.getElementById('options-container');
    
    // Barra de Progresso baseada no tema atual
    const prog = (currentQuestionIndex / questions.length) * 100;
    document.getElementById('progress-bar').style.width = prog + "%";
    
    document.getElementById('question-text').innerText = data.q;
    document.getElementById('theme-display').innerText = `TEMA: ${currentTheme}`;
    document.getElementById('score-display').innerText = `${score} PTS`;
    
    container.innerHTML = '';
    let opts = data.opts.map((t, i) => ({ text: t, correct: i === data.ans }));
    opts.sort(() => Math.random() - 0.5); // Shuffle

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
            if (currentQuestionIndex < database[currentTheme].length) {
                loadQuestion();
            } else {
                nextTheme();
            }
        }, 600);
    } else {
        btn.classList.add('wrong-answer');
        setTimeout(() => {
            alert(`GAME OVER! Pontuação: ${score}`);
            saveScore();
            showScreen('menu');
        }, 800);
    }
}

function nextTheme() {
    themeIndex++;
    if (themeIndex < themesOrder.length) {
        currentTheme = themesOrder[themeIndex];
        currentQuestionIndex = 0;
        alert(`TEMA CONCLUÍDO! Próximo nível: ${currentTheme}`);
        loadQuestion();
    } else {
        victory();
    }
}

function victory() {
    saveScore();
    showScreen('final-victory');
    startConfetti();
}

function startConfetti() {
    const box = document.getElementById('confetti-box');
    const colors = ['#00ff88', '#0077ff', '#ff3b3b', '#ffff00'];
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const c = document.createElement('div');
            c.className = 'confetti';
            c.style.left = Math.random() * 100 + '%';
            c.style.background = colors[Math.floor(Math.random() * colors.length)];
            box.appendChild(c);
            setTimeout(() => c.remove(), 3000);
        }, i * 40);
    }
}

function saveScore() {
    let r = JSON.parse(localStorage.getItem('genioRank')) || [];
    r.push({ name: playerName, pts: score });
    r.sort((a, b) => b.pts - a.pts);
    localStorage.setItem('genioRank', JSON.stringify(r.slice(0, 5)));
}

function showRanking() {
    const list = document.getElementById('ranking-list');
    const r = JSON.parse(localStorage.getItem('genioRank')) || [];
    list.innerHTML = r.length ? "" : "Nenhum recorde ainda.";
    r.forEach((e, i) => {
        list.innerHTML += `<div class="ranking-item"><span>${i+1}º ${e.name}</span><span>${e.pts} PTS</span></div>`;
    });
    showScreen('ranking');
}

// EASTER EGG: JAZZ (Pular pergunta)
let keys = "";
window.addEventListener("keydown", (e) => {
    keys = (keys + e.key.toLowerCase()).slice(-4);
    if (keys === "jazz" && document.getElementById('quiz').style.display !== 'none') {
        keys = "";
        currentQuestionIndex++;
        if (currentQuestionIndex < database[currentTheme].length) loadQuestion();
        else nextTheme();
    }
});