const questionsData = {
    "Ciência": [
        { q: "Qual o nome do planeta de Endfield?", options: ["Terra", "Talos-II", "Arca-III"], correct: "Talos-II" },
        { q: "(PEGADINHA) Quem é o protagonista que o jogador controla?", options: ["Doutor", "Endfield Administrador", "Amiya"], correct: "Endfield Administrador" },
        { q: "Qual o principal objetivo da Endfield?", options: ["Destruir robôs", "Fazer churrasco", "Recuperar tecnologias"], correct: "Recuperar tecnologias" }
    ],
    "Mecânicas": [
        { q: "Como o jogador transporta energia?", options: ["Cavalos", "Tirolesas e Pylons", "Magia"], correct: "Tirolesas e Pylons" },
        { q: "O que o sistema 'AIC' faz?", options: ["Vilão do jogo", "Marca de refri", "Automação da base"], correct: "Automação da base" }
    ]
};

let currentTheme = "Ciência";
let usedThemes = [];
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'flex';
}

function startGame() {
    score = 0;
    currentTheme = "Ciência";
    usedThemes = ["Ciência"];
    prepareTheme(currentTheme);
    showScreen('quiz');
}

function prepareTheme(theme) {
    // Embaralha a ordem das perguntas do tema
    shuffledQuestions = [...questionsData[theme]].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    loadQuestion();
}

function loadQuestion() {
    const q = shuffledQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = q.q;
    document.getElementById('current-theme').innerText = currentTheme.toUpperCase();
    document.getElementById('score').innerText = `SCORE: ${score}`;

    const container = document.getElementById('options-container');
    container.innerHTML = "";

    // Embaralha as opções de resposta
    let options = [...q.options].sort(() => Math.random() - 0.5);

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "btn-sub";
        btn.innerText = opt;
        btn.onclick = () => {
            if(opt === q.correct) {
                score++;
                nextStep();
            } else {
                showScreen('gameover');
            }
        };
        container.appendChild(btn);
    });
}

function nextStep() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion();
    } else {
        // Muda para um novo tema se o atual acabar
        const availableThemes = Object.keys(questionsData).filter(t => !usedThemes.includes(t));
        if (availableThemes.length > 0) {
            currentTheme = availableThemes[Math.floor(Math.random() * availableThemes.length)];
            usedThemes.push(currentTheme);
            prepareTheme(currentTheme);
        } else {
            alert("VOCÊ É UM GÊNIO! Zerou todos os temas!");
            showScreen('menu');
        }
    }
}