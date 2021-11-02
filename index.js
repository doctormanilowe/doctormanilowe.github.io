const rand = arr => {
    return arr[Math.floor(arr.length * Math.random())]
}

const msgWrong = [
    `Incorrect! Do 50 press-ups with 'naised palms.`,
    `If you thought that was the answer, you're even thicker than my delicious vegan 'naise!`,
    `That answer is incorrect! Darryl's wages will now be docked by one hour!`,
    `Absolutely not, my dearie!`,
    `You could not be more wrong, my child!`,
    `You are a philistine of the 'naises! I bet you think Grilled Chicken Calzones are good, too!`

]

const questions = [
    {
        question: `Complete this phrase: "Quick, thick and _______"`,
        options: [
            {
                desc: `Hot`,
                msg: `Not Hot, my dearie! While delicious and sexy to behold, this is very dangerous and should only be attempted under my supervision. You are banned from my Web Site for one week!`
            },
            {
                desc: `Fat-Free`,
                msg: rand(msgWrong)
            },
            {
                desc: `Naisemaste!`,
                msg: rand(msgWrong)
            },
            {
                desc: `Vegan`,
                msg: `Naisemaste! That is the correct answer!`
            },
        ],
        correct: "Vegan"
    },
    {
        question: `Doctor Manilowe suggests adding _____ to your Doctor Manilowe's Vegan Mayo for a little extra zing?`,
        options: [
            {
                desc: `Fried Chicken`,
                msg: `THIS IS MORALLY WRONG! GET OUT!`
            },
            {
                desc: `Hard Cider`,
                msg: rand(msgWrong)
            },
            {
                desc: `Lemon`,
                msg: `Naisemaste! That is the correct answer! Who doesn't love a bit of extra zing!?`
            },
            {
                desc: `Baby Aspirin`,
                msg: rand(msgWrong)
            },
        ],
        correct: "Lemon"
    },
    {
        question: `What is the correct method for sampling and confirming SMV (Signature Manilowe Viscosity) on a fresh batch of my delicous 'naise?`,
        options: [
            {
                desc: `Rotational Viscometer`,
                msg: `This is how Big Mayo companies test viscosity. Big Mayo is everything that is wrong with the condiment industry. You are hereby fined $35!`
            },
            {
                desc: `Splatter radius - Darryl throws 3 fl oz at a vertical target from 20 ft away. Correct viscosity will have a splatter radius not exceeding 4 inches.`,
                msg: `This is not how we test viscosity, however one of Darryl's tasks is to splatter the factory windows with 'naise from the inside to prevent Big Mayo spies from observing our processes.`
            },
            {
                desc: `The 'naise is sent to a commercial laboratory for analsysis.`,
                msg: `I HAVE NEVER AND WILL NEVER PRACTICE 'NAISE BY NUMBERS.`
            },
            {
                desc: `By taking a heaped teaspoon into the mouth and ensuring that the sample takes between 3 and 5 seconds to swallow without choking or gagging.`,
                msg: `Well done my dearie! For generations, this is how the Manilowe men have guaranteed the thickness you know, love and demand!`
            },
        ],
        correct: "By taking a heaped teaspoon into the mouth and ensuring that the sample takes between 3 and 5 seconds to swallow without choking or gagging."
    },
    
]

// Quiz Logic
let options = []
let correct = '';
// check answer
const checkAnswer = () => {
    const answer = document.querySelector('input[name="question"]:checked').value;
    const { msg } = options.find(option => option.desc === answer);
    alert(msg);
    if(answer === correct) {
        [ options, correct ] = resetQuiz();
    }
}
// create DOM elements for quiz question
const resetQuiz = () => {
    // clear quiz
    document.getElementById('quiz-container').innerText = "";
    // get new question
    const { question, options, correct} = rand(questions);
    const quizContainer = document.getElementById('quiz-container');
    const newQuestion = document.createElement('p')
    const multiChoice = document.createElement('ol');
    multiChoice.classList.add('quiz-multi-choice');
    for (let option of options) {
        const i = options.indexOf(option);
        const li = document.createElement('li');
        const input = document.createElement('input');
        const label = document.createElement('label');
        label.htmlFor = `multiChoice${i}`
        label.innerText = option.desc
        input.id = `multiChoice${i}`
        input.type = 'radio';
        input.name = 'question';
        input.value = option.desc;
        li.append(input);
        li.append(label);
        multiChoice.append(li);
    }
    quizContainer.innerText = "";
    newQuestion.innerText = question;
    quizContainer.append(newQuestion);
    quizContainer.append(multiChoice);
    // add event listener to radios to enable the check answer button when an option is chosen
    if (document.querySelector('input[name="question"]')) {
        document.querySelectorAll('input[name="question"]').forEach((elem) => {
            elem.addEventListener("change", function(e) {
            if(e.target.value) {
                document.getElementById('quiz-check-answer').removeAttribute('disabled');
            }
            });
        });
    }
    return [options, correct];
}
// add event listener to check answer button
document.getElementById('quiz-check-answer').addEventListener('click', checkAnswer);

[ options, correct ] = resetQuiz();

