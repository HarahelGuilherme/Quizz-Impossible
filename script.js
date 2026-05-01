const database = {
    "Ciência": [
        { q: "Qual o nome do planeta de Endfield?", opts: ["Terra", "Talos-II", "Arca-III"], ans: 1 },
        { q: "(PEGADINHA) Quem é o administrador?", opts: ["Doutor", "Endfield Administrador", "Amiya"], ans: 1 },
        { q: "Objetivo da Endfield?", opts: ["Recuperar tecnologias", "Fazer churrasco", "Matar robôs"], ans: 0 }
    ]
};

let audioCtx = null;
let gameVolume = 0.5;
let score = 0;
let qIdx = 0;
let currentTheme = "Ciência";
let shuffledQuestions = [];

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
        osc.frequency.setValueAtTime(880, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1320, audioCtx.currentTime + 0.1);
        osc.start(); osc.stop(audioCtx.currentTime + 0.3);
    } else {
        const freq = [150, 110, 190][Math.floor(Math.random()*3)];
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(40, audioCtx.currentTime + 0.5);
        osc.start(); osc.stop(audioCtx.currentTime + 0.5);
    }
}

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
    qIdx = 0;
    shuffledQuestions = [...database[currentTheme]];
    renderQuestion();
    showScreen('quiz');
}

function renderQuestion() {
    const q = shuffledQuestions[qIdx];
    document.getElementById('question-text').innerText = q.q;
    document.getElementById('score-display').innerText = "SCORE: " + score;
    const container = document.getElementById('options-container');
    container.innerHTML = "";

    q.opts.forEach((text, index) => {
        const btn = document.createElement('button');
        btn.className = "btn-sub";
        btn.innerText = text;
        btn.onclick = () => {
            if (index === q.ans) {
                playSound('win');
                score++;
                qIdx++;
                if (qIdx < shuffledQuestions.length) renderQuestion();
                else { alert("PARABÉNS!"); showScreen('menu'); }
            } else {
                playSound('lose');
                alert("ERROU! Som de burro para você!");
                showScreen('menu');
            }
        };
        container.appendChild(btn);
    });
}