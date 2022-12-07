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

    // let nextBtn = document.getElementsByClassName("toNextQuestion");
    // let previousBtn = document.getElementsByClassName("toPreviousQuestion");

    let answerCount = document.getElementById("answerCount");


    let checkBtns = document.querySelectorAll(".toNextQuestion");
    checkBtns.forEach(function (checkBtn) {
        checkBtn.addEventListener('click', function () {
            let question = this.getAttribute('data-question');
            console.log(question);
            let answer = document.querySelector("input[name=" + question + "]:checked").value;
            console.log(answer);
            localStorage.setItem(question, answer);
            // answerCount.innerHTML = answerCount.lenght;
        })
    })

    redoBtn.addEventListener('click', function () {
        questionTrue1.style.display = "none";
        questionFalse1.style.display = "none";
        questionTrue2.style.display = "none";
        questionFalse2.style.display = "none";
        questionTrue3.style.display = "none";
        questionFalse3.style.display = "none";
        questionTrue4.style.display = "none";
        questionFalse4.style.display = "none";
    })
    let question1Answers = document.querySelectorAll("input[name=quizQuestion1]");
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

            // nextBtn.style.display = "block";
            // previousBtn.style.display = "block";

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
            // nextBtn.style.display = "block";
            // previousBtn.style.display = "block";

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
            // nextBtn.style.display = "block";
            // previousBtn.style.display = "block";
        })
    })


})

