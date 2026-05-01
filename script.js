// BANCO DE DADOS
const gameData = {
    pt: {
        ui: { theme: "TEMA", score: "SCORE", err: "ERROU! De volta ao início." },
        questions: {
            "Ciência": [
                { q: "Qual o nome do planeta de Endfield?", options: ["Terra", "Talos-II", "Arca-III"], correct: "Talos-II" },
                { q: "(PEGADINHA) Quem é o protagonista?", options: ["Doutor", "Endfield Administrador", "Amiya"], correct: "Endfield Administrador" },
                { q: "Objetivo da Endfield?", options: ["Recuperar tecnologias", "Churrasco", "Matar robôs"], correct: "Recuperar tecnologias" }
            ],
            "Mecânicas": [
                { q: "Como transporta energia?", options: ["Cavalos", "Tirolesas e Pylons", "Magia"], correct: "Tirolesas e Pylons" }
            ]
        }
    }
};

// MOTOR DE ÁUDIO (Gera som sem arquivos mp3)[cite: 1]
let audioCtx = null;
let gameVolume = 0.5;

function initAudio() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
}

function playSound(type) {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    gain.gain.value = gameVolume;

    if (type === 'win') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1320, audioCtx.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
    } else {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(40, audioCtx.currentTime + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.5);
    }
}

// LÓGICA DO JOGO
let currentLang = 'pt';
let score = 0;
let qIdx = 0;
let currentTheme = "Ciência";
let usedThemes = [];
let shuffledQuestions = [];

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'flex';
}

function updateVolume(val) {
    gameVolume = val / 100;
    playSound('win');
}

function startGame() {
    initAudio();
    score = 0;
    usedThemes = ["Ciência"];
    loadTheme("Ciência");
    showScreen('quiz');
}

function loadTheme(theme) {
    currentTheme = theme;
    shuffledQuestions = [...gameData[currentLang].questions[theme]].sort(() => Math.random() - 0.5);
    qIdx = 0;
    renderQuestion();
}

function renderQuestion() {
    const q = shuffledQuestions[qIdx];
    const ui = gameData[currentLang].ui;
    document.getElementById('question-text').innerText = q.q;
    document.getElementById('current-theme-display').innerText = `${ui.theme}: ${currentTheme.toUpperCase()}`;
    document.getElementById('score-display').innerText = `${ui.score}: ${score}`;

    const container = document.getElementById('options-container');
    container.innerHTML = "";
    
    let opts = [...q.options].sort(() => Math.random() - 0.5);

    opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "btn-sub";
        btn.innerText = opt;
        btn.onclick = () => {
            if(opt === q.correct) {
                playSound('win');
                score++;
                qIdx++;
                if(qIdx < shuffledQuestions.length) renderQuestion();
                else nextTheme();
            } else {
                playSound('lose');
                alert(ui.err);
                showScreen('menu');
            }
        };
        container.appendChild(btn);
    });
}

function nextTheme() {
    const available = Object.keys(gameData[currentLang].questions).filter(t => !usedThemes.includes(t));
    if(available.length > 0) {
        const next = available[Math.floor(Math.random() * available.length)];
        usedThemes.push(next);
        loadTheme(next);
    } else {
        alert("GENIAL! Você completou tudo!");
        showScreen('menu');
    }
}

function closeGame() { if(confirm("Sair?")) window.close(); }