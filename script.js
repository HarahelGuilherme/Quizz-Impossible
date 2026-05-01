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
        ui: {
            play: "PLAY", instr: "INSTRUCTIONS", cred: "CREDITS", conf: "SETTINGS", exit: "EXIT GAME",
            back: "BACK", next: "NEXT", score: "SCORE", theme: "THEME", err: "WRONG! Back to start."
        },
        questions: {
            "Ciência": [
                { q: "What is Endfield's planet name?", options: ["Earth", "Talos-II", "Ark-III"], correct: "Talos-II" },
                { q: "(TRICK) Who is the protagonist?", options: ["Doctor", "Endfield Administrator", "Amiya"], correct: "Endfield Administrator" }
            ]
        }
    }
};

let currentLang = 'pt';
let currentTheme = "Ciência";
let usedThemes = [];
let shuffledQuestions = [];
let qIndex = 0;
let score = 0;

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'flex';
}

function toggleLanguage() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    const ui = gameData[currentLang].ui;
    document.getElementById('btn-play').innerText = ui.play;
    document.getElementById('btn-instr').innerText = ui.instr;
    document.getElementById('btn-cred').innerText = ui.cred;
    document.getElementById('btn-conf').innerText = ui.conf;
    document.getElementById('btn-exit').innerText = ui.exit;
    document.getElementById('btn-lang-toggle').innerText = currentLang === 'pt' ? 'Português' : 'English';
}

function updateVolume(val) {
    console.log("Volume set to:", val);
    // Lógica para ajustar áudio futuramente
}

function startGame() {
    score = 0;
    usedThemes = ["Ciência"];
    loadTheme("Ciência");
    showScreen('quiz');
}

function loadTheme(theme) {
    currentTheme = theme;
    // Mistura as perguntas para não seguir padrão
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

    // Mistura as respostas
    let opts = [...q.options].sort(() => Math.random() - 0.5);

    opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "btn-sub";
        btn.innerText = opt;
        btn.onclick = () => {
            if(opt === q.correct) {
                score++;
                qIndex++;
                if(qIndex < shuffledQuestions.length) renderQuestion();
                else nextTheme();
            } else {
                alert(ui.err); // Volta para o início ao errar[cite: 1]
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
        alert("GENIAL! Você completou todos os temas!");
        showScreen('menu');
    }
}

function closeGame() {
    if(confirm("Deseja fechar o jogo?")) window.close();
}