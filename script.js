// Banco de Dados Ofuscado
const database = {
    "Ciência": [
        { q: "Qual o nome do planeta de Endfield?", opts: ["Terra", "Talos-II", "Arca-III"], ans: 1 },
        { q: "(PEGADINHA) Quem é o protagonista?", opts: ["Doutor", "Endfield Administrador", "Amiya"], ans: 1 },
        { q: "Principal objetivo da Endfield?", opts: ["Tecnologias", "Churrasco", "Robôs"], ans: 0 }
    ]
};

let audioCtx = null;
let gameVolume = 0.5;
let score = 0;
let qIdx = 0;
let currentTheme = "Ciência";
let shuffledQuestions = [];

// Inicializa o som no primeiro clique do jogador[cite: 1]
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
        // Som de Moeda[cite: 1]
        osc.frequency.setValueAtTime(880, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1320, audioCtx.currentTime + 0.1);
        osc.start(); osc.stop(audioCtx.currentTime + 0.3);
    } else {
        // Som de Erro Variado/Grave[cite: 1]
        const freq = [150, 120, 180][Math.floor(Math.random()*3)];
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
    shuffledQuestions = [...database[currentTheme]].sort(() => Math.random() - 0.5);
    renderQuestion();
    showScreen('quiz');
}

function renderQuestion() {
    const q = shuffledQuestions[qIdx];
    document.getElementById('question-text').innerText = q.q;
    document.getElementById('score-display').innerText = "SCORE: " + score;

    const container = document.getElementById('options-container');
    container.innerHTML = "";

    // Mapeia opções para identificar a correta sem expor no HTML[cite: 1]
    let optionsWithMeta = q.opts.map((text, index) => ({ text, isCorrect: index === q.ans }));
    optionsWithMeta.sort(() => Math.random() - 0.5);

    optionsWithMeta.forEach(item => {
        const btn = document.createElement('button');
        btn.className = "btn-sub";
        btn.innerText = item.text;
        btn.onclick = () => {
            if (item.isCorrect) {
                playSound('win');
                score++;
                qIdx++;
                if (qIdx < shuffledQuestions.length) renderQuestion();
                else { alert("PARABÉNS! TEMA CONCLUÍDO!"); showScreen('menu'); }
            } else {
                playSound('lose');
                alert("ERROU! O Gênio não perdoa.");[cite: 1]
                showScreen('menu');
            }
        };
        container.appendChild(btn);
    });
}