const allQuestions = {
    "Ciência": [
        { q: "Qual o nome do planeta de Endfield?", options: ["Terra", "Talos-II", "Arca-III"], correct: 1 },
        { q: "(PEGADINHA) Quem é o protagonista?", options: ["Doutor", "Endfield Administrador", "Amiya"], correct: 1 },
        { q: "Objetivo da Endfield no planeta?", options: ["Churrasco", "Recuperar tecnologias", "Destruir robôs"], correct: 1 }
    ],
    "Geral": [
        { q: "Como o jogador se locomove e transporta energia?", options: ["Cavalos", "Tirolesas e Pylons", "Teletransporte"], correct: 1 },
        { q: "O que acontece em 'Anomalias de Origem'?", options: ["Recupera vida", "Sofre dano", "Salva o jogo"], correct: 1 }
    ]
};

let currentTheme = "Ciência";
let usedThemes = [];
let questionIndex = 0;
let score = 0;

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function startGame() {
    score = 0;
    questionIndex = 0;
    // O jogo sempre começa com Ciência, conforme regra[cite: 1]
    currentTheme = "Ciência";
    loadQuestion();
    showScreen('quiz');
}

function loadQuestion() {
    const themeData = allQuestions[currentTheme];
    
    if (questionIndex >= themeData.length) {
        nextTheme();
        return;
    }

    const data = themeData[questionIndex];
    document.getElementById('question-text').innerText = data.q;
    document.getElementById('current-theme').innerText = `Tema: ${currentTheme}`;
    document.getElementById('score').innerText = `Acertos: ${score}`;

    const container = document.getElementById('options-container');
    container.innerHTML = "";

    // Criar array de índices e embaralhar para não ficar padrão
    let indices = data.options.map((_, i) => i);
    indices.sort(() => Math.random() - 0.5);

    indices.forEach(i => {
        const btn = document.createElement('button');
        btn.innerText = data.options[i];
        btn.onclick = () => checkAnswer(i === data.correct);
        container.appendChild(btn);
    });
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        score++;
        questionIndex++;
        loadQuestion();
    } else {
        alert("ERROU! Voltando para o início...");
        showScreen('menu'); // Volta para o menu ao errar[cite: 1]
    }
}

function nextTheme() {
    usedThemes.push(currentTheme);
    const keys = Object.keys(allQuestions).filter(t => !usedThemes.includes(t));
    
    if (keys.length === 0) {
        alert("INCREDÍVEL! VOCÊ VENCEU O JOGO!");
        showScreen('menu');
        return;
    }

    currentTheme = keys[Math.floor(Math.random() * keys.length)];
    questionIndex = 0;
    loadQuestion();
}