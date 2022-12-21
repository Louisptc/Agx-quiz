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
    let startBtn = document.getElementById("startBtn");
    let answerTotal = document.getElementById("answerTotal");
    let navToQ1 = document.getElementById("navToQ1");
    let navToQ2 = document.getElementById("navToQ2");
    let navToQ3 = document.getElementById("navToQ3");
    let navToQ4 = document.getElementById("navToQ4");
    let navToQ1Phone = document.querySelectorAll(".navToQ1Phone");
    let navToQ2Phone = document.querySelectorAll(".navToQ2Phone");
    let navToQ3Phone = document.querySelectorAll(".navToQ3Phone");
    let navToQ4Phone = document.querySelectorAll(".navToQ4Phone");
    let answerCorrect = 0;
    let pourcentage = document.getElementById("pourcentage");
    let questionAnswered = document.getElementById("questionAnswered");
    let indice1 = document.getElementById("indice1");
    let indice2 = document.getElementById("indice2");
    let indice3 = document.getElementById("indice3");
    let indice4 = document.getElementById("indice4");
    let indiceText1 = document.getElementById("indiceText1");
    let indiceText2 = document.getElementById("indiceText2");
    let indiceText3 = document.getElementById("indiceText3");
    let indiceText4 = document.getElementById("indiceText4");
    let  endOfTheQuiz = document.getElementById("endOfTheQuiz");


    let checkBtns = document.querySelectorAll(".toNextQuestion"); // Enregistrer le nom de la question et la réponse sélectionnée par l'utilisateur
    checkBtns.forEach(function (checkBtn) {
        checkBtn.addEventListener('click', function () {
            let question = this.getAttribute('data-question');
            console.log(question);
            let answer = document.querySelector("input[name=" + question + "]:checked").value;
            console.log(answer);
            localStorage.setItem(question, answer);
            console.log(answerCount())
            checkAnswer();
        })
    })

    startBtn.addEventListener('click', function () {
        localStorage.clear();
    })

    endOfTheQuiz.addEventListener('click', function () {
        endOfQuiz();
    })

    redoBtn.addEventListener('click', function () { //recommencer le quiz et effacer les réponses + clear local storage + effacer les réponses cochées
        questionTrue1.style.display = "none";
        questionFalse1.style.display = "none";
        questionTrue2.style.display = "none";
        questionFalse2.style.display = "none";
        questionTrue3.style.display = "none";
        questionFalse3.style.display = "none";
        questionTrue4.style.display = "none";
        questionFalse4.style.display = "none";
        localStorage.clear();
        console.clear();
        checkAnswer();
        location.reload();
    })

    indice1.addEventListener('mouseover', function () {
        indiceText1.style.display = "block";
    })

    indice1.addEventListener('mouseout', function () {
        indiceText1.style.display = "none";
    })
    let question1Answers = document.querySelectorAll("input[name=quizQuestion1]"); // Vérification de la réponse et affichage des textes d'explication
    question1Answers.forEach(function (question1Answer) {
        question1Answer.addEventListener('click', function () {
            if (question1Answer.value === "18") {
                questionTrue1.style.display = "block";
                questionFalse1.style.display = "none";
                answerCorrect++;
            } else {
                questionFalse1.style.display = "block";
                questionTrue1.style.display = "none";
            }
        })
    })

    let question2Answers = document.querySelectorAll("input[name=quizQuestion2]");
    question2Answers.forEach(function (question2Answer) {
        question2Answer.addEventListener('click', function () {
            if (question2Answer.value === "Oui") {
                questionTrue2.style.display = "block";
                questionFalse2.style.display = "none";
                answerCorrect++;
            } else {
                questionTrue2.style.display = "none";
                questionFalse2.style.display = "block";
            }
        })
    })

    let question3Answers = document.querySelectorAll("input[name=quizQuestion3]");
    question3Answers.forEach(function (question3Answer) {
        question3Answer.addEventListener('click', function () {
            if (question3Answer.value === "Oui") {
                questionTrue3.style.display = "block";
                questionFalse3.style.display = "none";
                answerCorrect++;
            } else {
                questionTrue3.style.display = "none";
                questionFalse3.style.display = "block";
            }
        })
    })

    let question4Answers = document.querySelectorAll("input[name=quizQuestion4]");
    question4Answers.forEach(function (question4Answer) {
        question4Answer.addEventListener('click', function () {
            if (question4Answer.value === "Non") {
                questionTrue4.style.display = "block";
                questionFalse4.style.display = "none";
                answerCorrect++;
            } else {
                questionTrue4.style.display = "none";
                questionFalse4.style.display = "block";
            }
        })
    })

    function checkAnswer() {
        let hasAnswered1 = (localStorage.getItem("quizQuestion1") !== null);
        let hasAnswered2 = (localStorage.getItem("quizQuestion2") !== null);
        let hasAnswered3 = (localStorage.getItem("quizQuestion3") !== null);
        let hasAnswered4 = (localStorage.getItem("quizQuestion4") !== null);
        let questionsDone = 0;

        if (hasAnswered1) {
            navToQ1.classList.add("answered");
            navToQ1Phone.forEach(function (navToQ1Phone) {
                navToQ1Phone.style.color = "black";
            })
            answerCount();
            questionsDone++;
            questionAnswered.innerHTML = questionsDone;
        } else {
            navToQ1Phone.forEach(function (navToQ1Phone) {
                navToQ1Phone.style.color = "#000000";
            })
        }


        if (hasAnswered2) {
            navToQ2.classList.add("answered");
            navToQ2Phone.forEach(function (navToQ2Phone) {
                navToQ2Phone.style.color = "black";
            })
            answerCount();
            questionsDone++;
            questionAnswered.innerHTML = questionsDone;
        } else {
            navToQ2Phone.forEach(function (navToQ2Phone) {
                navToQ2Phone.style.color = "#000000";
            })
        }

        if (hasAnswered3) {
            navToQ3.classList.add("answered");
            navToQ3Phone.forEach(function (navToQ3Phone) {
                navToQ3Phone.style.color = "#7ca236";
            })
            answerCount();
            questionsDone++;
            questionAnswered.innerHTML = questionsDone;

        } else {
            navToQ3Phone.forEach(function (navToQ3Phone) {
                navToQ3Phone.style.color = "#000000";
            })
        }

        if (hasAnswered4) {
            navToQ4.classList.add("answered");
            navToQ4Phone.forEach(function (navToQ4Phone) {
                navToQ4Phone.style.color = "#7ca236";
            })
            answerCount();
            questionsDone++;
            questionAnswered.innerHTML = questionsDone;

        } else {
            navToQ4Phone.forEach(function (navToQ4Phone) {
                navToQ4Phone.style.color = "#000000";
            })
        }
    }

    function answerCount() {

        let answerCount = 0;
        if (localStorage.getItem("quizQuestion1") === "18") {
            answerCount++;
        }
        if (localStorage.getItem("quizQuestion2") === "Oui") {
            answerCount++;
        }
        if (localStorage.getItem("quizQuestion3") === "Oui") {
            answerCount++;
        }
        if (localStorage.getItem("quizQuestion4") === "Non") {
            answerCount++;
        }
        answerTotal.innerHTML = answerCount;
        pourcentage.innerHTML = (answerCount / 4) * 100;
        console.log(answerCount);
        return answerCount;

    }

    function endOfQuiz () {

        let hasAnsweredEnd1 = (localStorage.getItem("quizQuestion1") !== null);
        if (hasAnsweredEnd1 && localStorage.getItem("quizQuestion1") === "18") {
            navToQ1.classList.add("answeredRight");
            navToQ1Phone.forEach(function (navToQ1Phone) {
                navToQ1Phone.style.color = "#7ca236";
            })}

        else if (hasAnsweredEnd1 && localStorage.getItem("quizQuestion1") !== "18") {
            navToQ1.classList.add("answeredFalse");
            navToQ1Phone.forEach(function (navToQ1Phone) {
                navToQ1Phone.style.color = "#ff0000";
            })
    }

        let hasAnsweredEnd2 = (localStorage.getItem("quizQuestion2") !== null);
        if (hasAnsweredEnd2 && localStorage.getItem("quizQuestion2") !== "Oui") {
            navToQ2.classList.add("answeredFalse");
            navToQ2Phone.forEach(function (navToQ2Phone) {
                navToQ2Phone.style.color = "#ff0000";
            })
        } else if (hasAnsweredEnd2 && localStorage.getItem("quizQuestion2") === "Oui") {
            navToQ2.classList.add("answeredRight");
            navToQ2Phone.forEach(function (navToQ2Phone) {
                navToQ2Phone.style.color = "#7ca236";

            })

        let hasAnsweredEnd3 = (localStorage.getItem("quizQuestion3") !== null);
        if (hasAnsweredEnd3 && localStorage.getItem("quizQuestion3") !== "Oui") {
            navToQ3.classList.add("answeredFalse");
            navToQ3Phone.forEach(function (navToQ3Phone) {
                navToQ3Phone.style.color = "#ff0000";
            })
        } else if (hasAnsweredEnd3 && localStorage.getItem("quizQuestion3") === "Oui") {
            navToQ3.classList.add("answeredRight");
            navToQ3Phone.forEach(function (navToQ3Phone) {
                navToQ3Phone.style.color = "#7ca236";
            })
        }

        let hasAnsweredEnd4 = (localStorage.getItem("quizQuestion4") !== null);
        if (hasAnsweredEnd4 && localStorage.getItem("quizQuestion4") !== "Non") {
            navToQ4.classList.add("answeredFalse");
            navToQ4Phone.forEach(function (navToQ4Phone) {
                navToQ4Phone.style.color = "#ff0000";
            })
        } else if (hasAnsweredEnd4 && localStorage.getItem("quizQuestion4") === "Non") {
            navToQ4.classList.add("answeredRight");
            navToQ4Phone.forEach(function (navToQ4Phone) {
                navToQ4Phone.style.color = "#7ca236";
            })
        }
    }}
})
