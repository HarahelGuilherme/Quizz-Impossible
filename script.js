const database = {
    "Ciência": [
        { q: "Qual o nome do planeta de Endfield?", options: ["Terra", "Talos-II", "Arca-III"], correct: "Talos-II" },
        { q: "(PEGADINHA) Quem é o protagonista?", options: ["Doutor", "Endfield Administrador", "Amiya"], correct: "Endfield Administrador" },
        { q: "Objetivo da Endfield Industries?", options: ["Churrasco", "Recuperar tecnologias", "Destruir robôs"], correct: "Recuperar tecnologias" }
    ],
    "Mecânicas": [
        { q: "Como o jogador transporta energia?", options: ["Cavalos", "Tirolesas e Pylons", "Teleporte"], correct: "Tirolesas e Pylons" },
        { q: "Diferença de combate no Endfield?", options: ["Tower Defense", "Action RPG em tempo real", "Cartas"], correct: "Action RPG em tempo real" }
    ]
};

let currentTheme = "Ciência";
let usedThemes = [];
let questions = [];
let qIndex = 0;
let score = 0;

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    const target = document.getElementById(id);
    if (target) target.style.display = 'flex';
}

function startGame() {
    score = 0;
    usedThemes = ["Ciência"]; // Começa sempre com Ciência[cite: 1]
    setupTheme("Ciência");
    showScreen('quiz');
}

function setupTheme(theme) {
    currentTheme = theme;
    // Embaralha as perguntas do tema para não ficar padrão[cite: 1]
    questions = [...database[theme]].sort(() => Math.random() - 0.5);
    qIndex = 0;
    renderQuestion();
}

function renderQuestion() {
    const data = questions[qIndex];
    document.getElementById('question-text').innerText = data.q;
    document.getElementById('current-theme-display').innerText = `TEMA: ${currentTheme.toUpperCase()}`;
    document.getElementById('score-display').innerText = `SCORE: ${score}`;

    const container = document.getElementById('options-container');
    container.innerHTML = "";

    // Embaralha as opções de resposta[cite: 1]
    let opts = [...data.options].sort(() => Math.random() - 0.5);

    opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "btn-sub";
        btn.innerText = opt;
        btn.onclick = () => {
            if(opt === data.correct) {
                score++;
                qIndex++;
                if(qIndex < questions.length) renderQuestion();
                else nextTheme();
            } else {
                alert("ERRADO! Você volta ao início."); // Regra de erro[cite: 1]
                showScreen('menu');
            }
        };
        container.appendChild(btn);
    });
}

function nextTheme() {
    const available = Object.keys(database).filter(t => !usedThemes.includes(t));
    if(available.length > 0) {
        const next = available[Math.floor(Math.random() * available.length)];
        usedThemes.push(next);
        setupTheme(next);
    } else {
        alert("INCREDÍVEL! VOCÊ É UM GÊNIO!");
        showScreen('menu');
    }
}

function closeGame() {
    if(confirm("Deseja sair?")) {
        window.close();
        alert("Feche a aba para sair!");
    }
}