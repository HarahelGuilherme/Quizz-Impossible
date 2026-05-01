const gameData = {
    pt: {
        ui: {
            play: "JOGAR", instr: "INSTRUÇÕES", cred: "CRÉDITOS", conf: "CONFIGURAÇÕES", exit: "FECHAR GAME",
            back: "VOLTAR", next: "PRÓXIMO", score: "SCORE", theme: "TEMA", err: "ERROU! De volta ao início."
        },
        questions: {
            "Ciência": [
                { q: "Qual o nome do planeta de Endfield?", options: ["Terra", "Talos-II", "Arca-III"], correct: "Talos-II" },
                { q: "(PEGADINHA) Quem é o protagonista?", options: ["Doutor", "Endfield Administrador", "Amiya"], correct: "Endfield Administrador" },
                { q: "Principal objetivo da Endfield?", options: ["Churrasco", "Recuperar tecnologias", "Destruir robôs"], correct: "Recuperar tecnologias" }
            ],
            "Mecânicas": [
                { q: "Como transporta energia?", options: ["Cavalos", "Tirolesas e Pylons", "Magia"], correct: "Tirolesas e Pylons" },
                { q: "O que é o sistema AIC?", options: ["Vilão", "Refresco", "Automação da Base"], correct: "Automação da Base" }
            ]
        }
    },
    en: {
        ui: { play: "PLAY", instr: "INSTRUCTIONS", cred: "CREDITS", conf: "SETTINGS", exit: "EXIT", back: "BACK", next: "NEXT", score: "SCORE", theme: "THEME", err: "WRONG! Resetting." },
        questions: { "Ciência": [ { q: "Planet name?", options: ["Earth", "Talos-II", "Ark-III"], correct: "Talos-II" } ] }
    }
};

let currentLang = 'pt';
let currentTheme = "Ciência";
let usedThemes = [];
let shuffledQuestions = [];
let qIndex = 0;
let score = 0;
let gameVolume = 0.5;

// MOTOR DE ÁUDIO SINTETIZADO (Sem arquivos externos)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSynthSound(type) {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    gainNode.gain.value = gameVolume;

    if (type === 'success') { // Som de Moeda (Agudo e rápido)
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(880, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1320, audioCtx.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.3);
    } else { // Som de Erro Variado (Grave e dissonante)
        const freqs = [110, 150, 90]; // Frequências para sons diferentes
        const randomFreq = freqs[Math.floor(Math.random() * freqs.length)];
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(randomFreq, audioCtx.currentTime);
        oscillator.frequency.linearRampToValueAtTime(40, audioCtx.currentTime + 0.4);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.5);
    }
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'flex';
}

function toggleLanguage() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    const ui = gameData[currentLang].ui;
    document.getElementById('btn-play').innerText = ui.play;
    document.getElementById('btn-instr').innerText = ui.instr;
    document.getElementById('btn-lang-toggle').innerText = currentLang === 'pt' ? 'Português' : 'English';
}

function updateVolume(val) {
    gameVolume = val / 100;
    playSynthSound('success'); // Feedback visual/sonoro do volume
}

function startGame() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    score = 0;
    usedThemes = ["Ciência"];
    loadTheme("Ciência");
    showScreen('quiz');
}

function loadTheme(theme) {
    currentTheme = theme;
    shuffledQuestions = [...gameData[currentLang].questions[theme]].sort(() => Math.random() - 0.5);
    qIndex = 0;
    renderQuestion();
}

function renderQuestion() {
    const q = shuffledQuestions[qIndex];
    const ui = gameData[currentLang].ui;
    document.getElementById('question-text').innerText = q.q;
    document.getElementById('current-theme-display').innerText = `${ui.theme}: ${currentTheme.toUpperCase()}`;
    document.getElementById('score-display').innerText = `${ui.score}: ${score}`;

    const container = document.getElementById('options-container');
    container.innerHTML = "";

    let opts = [...q.options].sort(() => Math.random() - 0.5); // Mistura as respostas

    opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "btn-sub";
        btn.innerText = opt;
        btn.onclick = () => {
            if(opt === q.correct) {
                playSynthSound('success'); // Som de acerto sintetizado
                score++;
                qIndex++;
                if(qIndex < shuffledQuestions.length) renderQuestion();
                else nextTheme();
            } else {
                playSynthSound('error'); // Som de erro sintetizado
                alert(ui.err); // Volta ao menu conforme regra[cite: 1]
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