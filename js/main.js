
document.addEventListener("DOMContentLoaded", function () {

    let questionFalse1 = document.getElementById("explicationScreenFalse1");
    let questionTrue1 = document.getElementById("explicationScreenTrue1");
    let questionFalse2 = document.getElementById("explicationScreenFalse2");
    let questionTrue2 = document.getElementById("explicationScreenTrue2");
    let questionFalse3 = document.getElementById("explicationScreenFalse3");
    let questionTrue3 = document.getElementById("explicationScreenTrue3");
    let questionFalse4 = document.getElementById("explicationScreenFalse4");
    let questionTrue4 = document.getElementById("explicationScreenTrue4");
    let redoBtn = document.getElementById("redoBtn");
    let answerCount = document.getElementById("answerCount");
    let navToQ1 = document.getElementById("navToQ1");
    let navToQ2 = document.getElementById("navToQ2");
    let navToQ3 = document.getElementById("navToQ3");
    let navToQ4 = document.getElementById("navToQ4");


    let checkBtns = document.querySelectorAll(".toNextQuestion"); // Enregistrer le nom de la question et la réponse sélectionnée par l'utilisateur
    checkBtns.forEach(function (checkBtn) {
        checkBtn.addEventListener('click', function () {
            let question = this.getAttribute('data-question');
            console.log(question);
            let answer = document.querySelector("input[name=" + question + "]:checked").value;
            console.log(answer);
            localStorage.setItem(question, answer);
            checkAnswer();
        })
    })

    redoBtn.addEventListener('click', function () { //recommencer le quiz et effacer les réponses
        questionTrue1.style.display = "none";
        questionFalse1.style.display = "none";
        questionTrue2.style.display = "none";
        questionFalse2.style.display = "none";
        questionTrue3.style.display = "none";
        questionFalse3.style.display = "none";
        questionTrue4.style.display = "none";
        questionFalse4.style.display = "none";
        localStorage.clear();
        checkAnswer();
    })
    let question1Answers = document.querySelectorAll("input[name=quizQuestion1]"); // Vérification de la réponse et affichage des textes d'explication
    question1Answers.forEach(function (question1Answer) {
        question1Answer.addEventListener('click', function () {
            if (question1Answer.value == 18) {
                questionTrue1.style.display = "block";
                questionFalse1.style.display = "none";
                answerCount++;
            } else {
                questionFalse1.style.display = "block";
                questionTrue1.style.display = "none";
            }
            console.log(answerCount);
        })
    })

    let question2Answers = document.querySelectorAll("input[name=quizQuestion2]");
    question2Answers.forEach(function (question2Answer) {
        question2Answer.addEventListener('click', function () {
            if (question2Answer.value == "Oui") {
                questionTrue2.style.display = "block";
                questionFalse2.style.display = "none";
                answerCount++;
            } else {
                questionTrue2.style.display = "none";
                questionFalse2.style.display = "block";
            }
            console.log(answerCount);
        })
    })

    let question3Answers = document.querySelectorAll("input[name=quizQuestion3]");
    question3Answers.forEach(function (question3Answer) {
        question3Answer.addEventListener('click', function () {
            if (question3Answer.value == "Oui") {
                questionTrue3.style.display = "block";
                questionFalse3.style.display = "none";
                answerCount++;
            } else {
                questionTrue3.style.display = "none";
                questionFalse3.style.display = "block";
            }
            console.log(answerCount);
        })
    })

    let question4Answers = document.querySelectorAll("input[name=quizQuestion4]");
    question4Answers.forEach(function (question4Answer) {
        question4Answer.addEventListener('click', function () {
            if (question4Answer.value == "Non") {
                questionTrue4.style.display = "block";
                questionFalse4.style.display = "none";
                answerCount++;
            } else {
                questionTrue4.style.display = "none";
                questionFalse4.style.display = "block";
            }
            console.log(answerCount);
        })
    })

    function checkAnswer () {
        let hasAnswered1 = (localStorage.getItem("quizQuestion1") !== null);
        let hasAnswered2 = (localStorage.getItem("quizQuestion2") !== null);
        let hasAnswered3 = (localStorage.getItem("quizQuestion3") !== null);
        let hasAnswered4 = (localStorage.getItem("quizQuestion4") !== null);
        // console.log(hasAnswered1);
        // console.log(hasAnswered2);
        // console.log(hasAnswered3);
        // console.log(hasAnswered4);

        if (hasAnswered1) {
            navToQ1.classList.add("answered");
        }
        else {
            navToQ1.classList.remove("answered");
        }
        if (hasAnswered2) {
            navToQ2.classList.add("answered");
        }
        else {
            navToQ2.classList.remove("answered");
        }
        if (hasAnswered3) {
            navToQ3.classList.add("answered");
        }
        else {
            navToQ3.classList.remove("answered");
        }
        if (hasAnswered4) {
            navToQ4.classList.add("answered");
        }
        else {
            navToQ4.classList.remove("answered");
        }
    }

})
