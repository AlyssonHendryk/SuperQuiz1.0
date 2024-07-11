const quest = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById("score");
const progressText = document.getElementById("progressText");
const progressBarFull = document.getElementById("progressBarFull");


let currentQuestion = {};
let acceptAnswers = false;
let score = 0;
let questionCont = 0;
let available_questions = [];

let questions = [
    {
        question: "Dentro de qual elemento HTML colocamos o JavaScript?",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question: "Qual a especialidade do otorrinolaringologista?",
        choice1: "Tratamento das doenças bucais.",
        choice2: "Tratamento das doenças infantis.",
        choice3: "Tratamento das doenças dos olhos.",
        choice4: "Tratamento das doenças relacionadas a nariz, ouvido e garganta.",
        answer: 4
    },
    {
        question: "Qual o plural de chapéu?",
        choice1: "Chapéis",
        choice2: "Chapéus",
        choice3: "Chapéuzes",
        choice4: "Os chapéu",
        answer: 2
    },
    {
        question: "Qual a fórmula de báskara?",
        choice1: "(b±√(b²-4ac))/(2a)",
        choice2: "(-b±√(b²-4ac))/(2)",
        choice3: "(-b±√(b²-4ac))/(2a)",
        choice4: "(b±√(b²-4))/(2a)",
        answer: 3
    },
    {
        question: "Qual o maior animal terrestre?",
        choice1: "Baleia Azul",
        choice2: "Dinossauro",
        choice3: "Elefante",
        choice4: "Girafa",
        answer: 3
    },
    {
        question: "As pessoas de qual tipo sanguíneo são consideradas doadores universais?",
        choice1: "Tipo A",
        choice2: "Tipo B",
        choice3: "Tipo O",
        choice4: "Tipo AB",
        answer: 3
    },
    {
        question: "Qual linguagem de programação é a principal para desenvolvimento de aplicações Android?",
        choice1: "Swift",
        choice2: "Kotlin",
        choice3: "JavaScript",
        choice4: "Ruby",
        answer: 2
    },
    {
        question: "Qual é a função de um compilador?",
        choice1: "Executar código fonte diretamente",
        choice2: "Testar a performance do código",
        choice3: "Armazenar dados",
        choice4: "Traduzir código fonte em código máquina",
        answer: 4
    },
    {
        question: "Qual dos seguintes bancos de dados é um sistema de banco de dados NoSQL?",
        choice1: "MySQL",
        choice2: "PostgreSQL",
        choice3: "Oracle",
        choice4: "MongoDB",
        answer: 4
    },
    {
        question: "Qual é o princípio fundamental da computação quântica que a diferencia da computação clássica?",
        choice1: "Superposição e entrelaçamento quântico",
        choice2: "Algoritmos de ordenação eficientes",
        choice3: "Redes neurais e aprendizado profundo",
        choice4: "Arquitetura baseada em núcleos múltiplos",
        answer: 1
    },
];

const CORRECT_BONUS = 10;
const max_questions = 10;

startGame = () => {
    questionCont = 0;
    score = 0;
    available_questions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (available_questions.length === 0 || questionCont >= max_questions) {
        localStorage.setItem('mostRecentScore', score);
        // Terminar o jogo e mostrar a pontuação final
        return window.location.assign('/end.html');
    }

    questionCont++;
    progressText.innerText = `Questão ${questionCont}/${max_questions}`;

    //atualizar a barra de progresso
    progressBarFull.style.width = `${(questionCont / max_questions) * 100}%`;

    const questionIndex = Math.floor(Math.random() * available_questions.length);
    currentQuestion = available_questions[questionIndex];
    quest.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    available_questions.splice(questionIndex, 1);
    acceptAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptAnswers) return;

        acceptAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();

console.log("Criado por Alysson Hendryk, seguindo um curso da Udemy");
