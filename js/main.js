document.addEventListener("DOMContentLoaded", function () {

    //  Get all the texts of each question and answers
    let questionFalse1 = document.getElementById("explicationScreenFalse1");
    let questionTrue1 = document.getElementById("explicationScreenTrue1");
    let questionFalse2 = document.getElementById("explicationScreenFalse2");
    let questionTrue2 = document.getElementById("explicationScreenTrue2");
    let questionFalse3 = document.getElementById("explicationScreenFalse3");
    let questionTrue3 = document.getElementById("explicationScreenTrue3");
    let questionFalse4 = document.getElementById("explicationScreenFalse4");
    let questionTrue4 = document.getElementById("explicationScreenTrue4");
    let explicationScreenNoAnswer1 = document.getElementById("explicationScreenNoAnswer1");
    let explicationScreenNoAnswer2 = document.getElementById("explicationScreenNoAnswer2");
    let explicationScreenNoAnswer3 = document.getElementById("explicationScreenNoAnswer3");
    let explicationScreenNoAnswer4 = document.getElementById("explicationScreenNoAnswer4");

    //  Get all the buttons of each questions and answers
    let redoBtn = document.getElementById("redoBtn");
    let redoBtnPhone = document.getElementById("redoBtnPhone");
    let startBtn = document.getElementById("startBtn");
    let answerTotal = document.getElementById("answerTotal");
    let answerTotalPhone = document.getElementById("answerTotalPhone");
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
    let pourcentagePhone = document.getElementById("pourcentagePhone");
    let questionAnswered = document.getElementById("questionAnswered");
    let indice1 = document.getElementById("indice1");
    let indice2 = document.getElementById("indice2");
    let indice3 = document.getElementById("indice3");
    let indice4 = document.getElementById("indice4");
    let indiceText1 = document.getElementById("indiceText1");
    let indiceText2 = document.getElementById("indiceText2");
    let indiceText3 = document.getElementById("indiceText3");
    let indiceText4 = document.getElementById("indiceText4");
    let endOfTheQuiz = document.getElementById("endOfTheQuiz");
    let endOfTheQuizPhone = document.getElementById("endOfTheQuizPhone");
    let linkWhenWrong1 = document.getElementById("linkWhenWrong1");
    let linkWhenWrong2 = document.getElementById("linkWhenWrong2");
    let linkWhenWrong3 = document.getElementById("linkWhenWrong3");
    let linkWhenWrong4 = document.getElementById("linkWhenWrong4");
    let sujetsARevoir = document.getElementById("sujetsARevoir");
    let sujetsARevoirPhone = document.getElementById("sujetsARevoirPhone");
    let linkWhenWrong1Phone = document.getElementById("linkWhenWrong1Phone");
    let linkWhenWrong2Phone = document.getElementById("linkWhenWrong2Phone");
    let linkWhenWrong3Phone = document.getElementById("linkWhenWrong3Phone");
    let linkWhenWrong4Phone = document.getElementById("linkWhenWrong4Phone");
    let progressBar = document.getElementById("progressBar");
    let progressBarPhone = document.getElementById("progressBarPhone");
    let answerSelected = document.querySelectorAll(".answerSelected");
    const timeText = document.querySelector(".timer .timeLeftText");
    const timeCount = document.querySelector(".timer .timerSec");
    const timeTextPhone = document.querySelector(".timer .timeLeftText");
    const timeCountPhone = document.querySelector(".timer .timerSec");
    const btnModalEnd = document.getElementById("btnModalEnd");
    let showResult = document.getElementById("showResult");
    let modalEndTimer = document.getElementById("modalEndTimer");

    // upload the answer of the user in the localStorage WHEN the user click on the next button
    let checkBtns = document.querySelectorAll(".toNextQuestion");
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

    // upload the answer of the user in the localStorage WHEN the user click on the Previous button
    let previousBtns = document.querySelectorAll(".toPreviousQuestion");
    previousBtns.forEach(function (previousBtn) {
        previousBtn.addEventListener('click', function () {
            let questionPrevious = this.getAttribute('data-question');
            console.log(questionPrevious);
            let answerPrevious = document.querySelector("input[name=" + questionPrevious + "]:checked").value;
            console.log(answerPrevious);
            localStorage.setItem(questionPrevious, answerPrevious);
            console.log(answerCount())
            checkAnswer();
        })
    })

    // Start the quiz, empty the localStorage and start the timer
    startBtn.addEventListener('click', function () {
        localStorage.clear();
        console.log(localStorage);
        startTimer(20);
        // startTimerPhone(20);

    })

    // Function to set the timer
    function startTimer(time) {
        let timer = time;
        let seconds = timer;
        let timeLine = document.querySelector(".timeLine");
        timeLine.value = timer;
        timeCount.innerHTML = seconds;
        let interval = setInterval(updateCount, 1000);
        // Function to make the timer go down and to stop it when it's 0
        function updateCount() {
            let seconds = timer;
            timeLine.value = timer;
            timeCount.innerHTML = seconds;
            timer--;
            if (timer < 0) {
                btnModalEnd.click();
                timeText.innerHTML = "Temps écoulé";
                timeCount.innerHTML = "";
                clearInterval(interval);

            }
            // Stop the timer when the user click on the End (Fin) button
            endOfTheQuiz.addEventListener('click', function () {
                clearInterval(interval);
            })
        }
    }
    // Show the modal when the timer is 0
    modalEndTimer.addEventListener('click', function () {
        checkAnswer();
        endOfQuiz();
        answerCount();
        window.scrollTo(0, 1000000);
    })

    // timer function but for phone, still not working



    // showResult.addEventListener('click', function () {
    //     checkAnswer();
    //     endOfQuiz();
    //     answerCount();
    //     window.scrollTo(0, 1000000);
    // })

    // function startTimerPhone(time) {
    //     let timer = time;
    //     let seconds = timer;
    //     let timeLine = document.querySelector(".timeLinePhone");
    //     timeLine.value = timer;
    //     timeCountPhone.innerHTML = seconds;
    //     let interval = setInterval(updateCount, 1000);
    //
    //     function updateCount() {
    //         let seconds = timer;
    //         timeLine.value = timer;
    //         timeCountPhone.innerHTML = seconds;
    //         timer--;
    //         if (timer < 0) {
    //             clearInterval(interval);
    //             timeTextPhone.innerHTML = "Temps écoulé";
    //             timeCountPhone.innerHTML = "";
    //             checkAnswer();
    //             endOfQuiz();
    //             answerCount();
    //             window.scrollTo(0, 1000000);
    //         }
    //         endOfTheQuizPhone.addEventListener('click', function () {
    //             clearInterval(interval);
    //         })
    //     }
    // }


    // Put the progress bar to 0 when the user click on the End button (Fin) and display the texts
    endOfTheQuiz.addEventListener('click', function () {
        progressBar.value = -1;
        endOfQuiz();
        displayAnswer();
    })

    // function that contains the texts to display when the user click on the End button (Fin)
    function displayAnswer() {
        let questionAnswers = [localStorage.getItem("quizQuestion1"), localStorage.getItem("quizQuestion2"), localStorage.getItem("quizQuestion3"), localStorage.getItem("quizQuestion4")];
        console.log(questionAnswers[0]);
        console.log(questionAnswers[1]);
        console.log(questionAnswers[2]);
        console.log(questionAnswers[3]);

        if (questionAnswers[0] === "18") {

            questionTrue1.style.display = "block";
            questionFalse1.style.display = "none";
            answerCorrect++;
        } else if (questionAnswers[0] === "36" || questionAnswers[0] === "42") {
            questionTrue1.style.display = "none";
            questionFalse1.style.display = "block";
            linkWhenWrong1.style.display = "block";
            sujetsARevoir.style.display = "block";

        } else {
            questionTrue1.style.display = "none";
            questionFalse1.style.display = "none";
            explicationScreenNoAnswer1.style.display = "block";
            linkWhenWrong1.style.display = "block";
            sujetsARevoir.style.display = "block";

        }

        if (questionAnswers[1] === "Oui") {

            questionTrue2.style.display = "block";
            questionFalse2.style.display = "none";
            answerCorrect++;
        } else if (questionAnswers[1] === "Non" || questionAnswers[1] === "Absolument pas") {
            questionTrue2.style.display = "none";
            questionFalse2.style.display = "block";
            linkWhenWrong2.style.display = "block";
            sujetsARevoir.style.display = "block";
        } else {
            questionTrue2.style.display = "none";
            questionFalse2.style.display = "none";
            explicationScreenNoAnswer2.style.display = "block";
            linkWhenWrong2.style.display = "block";
            sujetsARevoir.style.display = "block";

        }

        if (questionAnswers[2] === "Oui") {

            questionTrue3.style.display = "block";
            questionFalse3.style.display = "none";
            answerCorrect++;
        } else if (questionAnswers[2] === "Non" || questionAnswers[2] === "Absolument pas") {
            questionTrue3.style.display = "none";
            questionFalse3.style.display = "block";
            linkWhenWrong3.style.display = "block";
            sujetsARevoir.style.display = "block";
        } else {
            questionTrue3.style.display = "none";
            questionFalse3.style.display = "none";
            explicationScreenNoAnswer3.style.display = "block";
            linkWhenWrong3.style.display = "block";
            sujetsARevoir.style.display = "block";

        }

        if (questionAnswers[3] === "Non") {

            questionTrue4.style.display = "block";
            questionFalse4.style.display = "none";
            answerCorrect++;
        } else if (questionAnswers[3] === "Oui" || questionAnswers[3] === "Absolument pas") {
            questionTrue4.style.display = "none";
            questionFalse4.style.display = "block";
            linkWhenWrong4.style.display = "block";
            sujetsARevoir.style.display = "block";
        } else {
            questionTrue4.style.display = "none";
            questionFalse4.style.display = "none";
            explicationScreenNoAnswer4.style.display = "block";
            linkWhenWrong4.style.display = "block";
            sujetsARevoir.style.display = "block";

        }

    }
    // function that contains the texts to display when the user click on the End button (Fin) for phone
    endOfTheQuizPhone.addEventListener('click', function () {
        endOfQuiz();
        displayAnswer();
    })


    redoBtn.addEventListener('click', function () { // when the user click on the redo button (Refaire le quiz), the quiz restart
        reset()
        })
    redoBtnPhone.addEventListener('click', function () { // when the user click on the redo button (Refaire le quiz), the quiz restart
        reset()
        })
        // function that reset the quiz
        function reset() {
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
    }



    indice1.addEventListener('mouseover', function () {
        indiceText1.style.display = "block";
    })

    indice1.addEventListener('mouseout', function () {
        indiceText1.style.display = "none";
    })

    indice2.addEventListener('mouseover', function () {
        indiceText2.style.display = "block";
    })

    indice2.addEventListener('mouseout', function () {
        indiceText2.style.display = "none";
    })

    indice3.addEventListener('mouseover', function () {
        indiceText3.style.display = "block";
    })

    indice3.addEventListener('mouseout', function () {
        indiceText3.style.display = "none";
    })

    indice4.addEventListener('mouseover', function () {
        indiceText4.style.display = "block";
    })

    indice4.addEventListener('mouseout', function () {
        indiceText4.style.display = "none";
    })


    // checkanswer function that check if the user has answer to a question or not and if the answer is correct or not
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
                navToQ1Phone.style.color = "blue";
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
                navToQ2Phone.style.color = "blue";
            })
        }

        if (hasAnswered3) {
            navToQ3.classList.add("answered");
            navToQ3Phone.forEach(function (navToQ3Phone) {
                navToQ3Phone.style.color = "black";

            })
            answerCount();
            questionsDone++;
            questionAnswered.innerHTML = questionsDone;

        } else {
            navToQ3Phone.forEach(function (navToQ3Phone) {
                navToQ3Phone.style.color = "blue";
            })
        }

        if (hasAnswered4) {
            navToQ4.classList.add("answered");
            navToQ4Phone.forEach(function (navToQ4Phone) {
                navToQ4Phone.style.color = "black";
            })
            answerCount();
            questionsDone++;
            questionAnswered.innerHTML = questionsDone;

        } else {
            navToQ4Phone.forEach(function (navToQ4Phone) {
                navToQ4Phone.style.color = "blue";
            })
        }
    }

    // function that count the right answers
    function answerCount() {

        let answersCount = 0;
        let answerCountPhone = 0;
        if (localStorage.getItem("quizQuestion1") === "18") {
            answersCount++;
            answerCountPhone++;
        }
        if (localStorage.getItem("quizQuestion2") === "Oui") {
            answersCount++;
            answerCountPhone++;
        }
        if (localStorage.getItem("quizQuestion3") === "Oui") {
            answersCount++;
            answerCountPhone++;
        }
        if (localStorage.getItem("quizQuestion4") === "Non") {
            answersCount++;
            answerCountPhone++;
        }

        answerTotal.innerHTML = answersCount;
        pourcentage.innerHTML = (answersCount / 4) * 100;
        answerTotalPhone.innerHTML = answersCount;
        pourcentagePhone.innerHTML = (answersCount / 4) * 100;
        console.log(answerCount);

        for (let progressBar1 = 0; progressBar1 <= (answersCount / 4) * 100; progressBar1++) {
            setTimeout(function () {
                progressBar1 += 1;
                progressBar.value = progressBar1;
                progressBarPhone.value = progressBar1;
            }, 1000);
        }
        return answerCount;

    }

    // function that set the colors up on the navigation menu
    function endOfQuiz() {

        navToQ1.classList.remove("answered");
        navToQ2.classList.remove("answered");
        navToQ3.classList.remove("answered");
        navToQ4.classList.remove("answered");

        let hasAnsweredEnd1 = (localStorage.getItem("quizQuestion1") !== null);
        if (hasAnsweredEnd1 && localStorage.getItem("quizQuestion1") === "18") {
            navToQ1.classList.add("answeredRight");
            navToQ1Phone.forEach(function (navToQ1Phone) {
                navToQ1Phone.style.color = "#7ca236";
            })
        } else {
            navToQ1.classList.add("answeredFalse");
            navToQ1Phone.forEach(function (navToQ1Phone) {
                navToQ1Phone.style.color = "#ff0000";
            })
        }

        let hasAnsweredEnd2 = (localStorage.getItem("quizQuestion2") !== null);
        if (hasAnsweredEnd2 && localStorage.getItem("quizQuestion2") === "Oui") {
            navToQ2.classList.add("answeredRight");
            navToQ2Phone.forEach(function (navToQ2Phone) {
                navToQ2Phone.style.color = "#7ca236";
            })
        } else {
            navToQ2.classList.add("answeredFalse");
            navToQ2Phone.forEach(function (navToQ2Phone) {
                navToQ2Phone.style.color = "#ff0000";
            })
        }

        let hasAnsweredEnd3 = (localStorage.getItem("quizQuestion3") !== null);
        if (hasAnsweredEnd3 && localStorage.getItem("quizQuestion3") === "Oui") {
            navToQ3.classList.add("answeredRight");
            navToQ3Phone.forEach(function (navToQ3Phone) {
                navToQ3Phone.style.color = "#7ca236";
            })
        } else {
            navToQ3.classList.add("answeredFalse");
            navToQ3Phone.forEach(function (navToQ3Phone) {
                navToQ3Phone.style.color = "#ff0000";
            })
        }

        let hasAnsweredEnd4 = (localStorage.getItem("quizQuestion4") !== null);
        if (hasAnsweredEnd4 && localStorage.getItem("quizQuestion4") === "Non") {
            navToQ4.classList.add("answeredRight");
            navToQ4Phone.forEach(function (navToQ4Phone) {
                navToQ4Phone.style.color = "#7ca236";
            })
        } else {
            navToQ4.classList.add("answeredFalse");
            navToQ4Phone.forEach(function (navToQ4Phone) {
                navToQ4Phone.style.color = "#ff0000";
            })
        }
    }
})
