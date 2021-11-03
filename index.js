const rand = arr => {
    return arr[Math.floor(arr.length * Math.random())]
}

//id generator - note implementation of Math.random - not the most robust random number generator
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

const msgWrong = [
    `Incorrect! Coat your palms in my 'naise and then do 50 push ups!`,
    `If you thought that was the answer, you're even thicker than my delicious vegan 'naise!`,
    `That answer is incorrect! Darryl's wages will now be docked by one hour!`,
    `Absolutely not, my dearie!`,
    `You could not be more wrong, my child!`,
    `You are a philistine of the 'naises! I bet you think Grilled Chicken Calzones are good, too!`

]

let questions = [
    {
        id: uuidv4(),
        question: `Complete this phrase: "Quick, thick and _______"`,
        options: [
            {
                id: uuidv4(),
                desc: `Hot`,
                correct: false,
                msg: `Not Hot, my dearie! While delicious and sexy to behold, this is very dangerous and should only be attempted under my supervision. You are banned from my Web Site for one week!`
            },
            {
                id: uuidv4(),
                desc: `Fat-Free`,
                correct: false,
                msg: rand(msgWrong)
            },
            {
                id: uuidv4(),
                desc: `Naisemaste!`,
                correct: false,
                msg: rand(msgWrong)
            },
            {
                id: uuidv4(),
                desc: `Vegan`,
                correct: true,
                msg: `Naisemaste! That is the correct answer!`
            },
        ],
    },
    {
        id: uuidv4(),
        question: `Doctor Manilowe suggests adding _____ to your Doctor Manilowe's Vegan Mayo for a little extra zing?`,
        options: [
            {
                id: uuidv4(),
                desc: `Fried Chicken`,
                correct: false,
                msg: `THIS IS MORALLY WRONG! I have called the police.`
            },
            {
                id: uuidv4(),
                desc: `Hard Cider`,
                correct: false,
                msg: rand(msgWrong)
            },
            {
                id: uuidv4(),
                desc: `Lemon`,
                correct: true,
                msg: `Naisemaste! That is the correct answer! Who doesn't love a bit of extra zing!?`
            },
            {
                id: uuidv4(),
                desc: `Baby Aspirin`,
                correct: false,
                msg: rand(msgWrong)
            },
        ],
    },
    {
        id: uuidv4(),
        question: `What is the correct method for sampling and confirming SMV (Signature Manilowe Viscosity) on a fresh batch of my delicous 'naise?`,
        options: [
            {
                id: uuidv4(),
                desc: `Rotational Viscometer`,
                correct: false,
                msg: `This is how Big Mayo companies test viscosity. Big Mayo is everything that is wrong with the condiment industry. You are hereby fined $35!`
            },
            {
                id: uuidv4(),
                desc: `By taking a heaped teaspoon into the mouth and ensuring that the sample takes between 3 and 5 seconds to swallow without choking or gagging.`,
                correct: true,
                msg: `Well done my dearie! For generations, this is how the Manilowe men have guaranteed the thickness you know, love and demand!`
            },
            {
                id: uuidv4(),
                desc: `Splatter radius - Darryl throws 3 fl oz at a vertical target from 20 ft away. Correct viscosity will have a splatter radius not exceeding 4 inches.`,
                correct: false,
                msg: `This is not how we test viscosity, however one of Darryl's tasks is to splatter the factory windows with 'naise from the inside to prevent Big Mayo spies from observing our processes.`
            },
            {
                id: uuidv4(),
                desc: `The 'naise is sent to a commercial laboratory for analsysis.`,
                correct: false,
                msg: `I HAVE NEVER AND WILL NEVER PRACTICE 'NAISE BY NUMBERS.`
            },
        ],
    },
    {
        id: uuidv4(),
        question: `Which of the following is NOT a recommended use of Doctor Manilowe's Vegan Mayo?`,
        options: [
            {
                id: uuidv4(),
                desc: `Stirring into your coffee`,
                correct: false,
                msg: `Not quite, my dearie! I take a heaped spoonful in my Fair Trade coffee every morning. Perhaps you should make yourself another cup, tee-hee!`
            },
            {
                id: uuidv4(),
                desc: `Keeping your Christmas tree fresh`,
                correct: false,
                msg: `This is incorrect! I do this every year so that when Father Christmas comes, he is greeted by a fresh, supple tree.`
            },
            {
                id: uuidv4(),
                desc: `Pre-coitus supplement`,
                correct: false,
                msg: `Many have long speculated that my delicious 'naise is an aphrodisiac, and they are correct! Linda and I never forget to glug down a spoonful each before we begin having relations!`
            },
            {
                id: uuidv4(),
                desc: `None of the these`,
                correct: true,
                msg: `'Naise be with you, and also with you! That is the correct answer! None of these 'naise cases are not true. My delicious 'naise has many applications and benefits while inside you and your home.`
            },
            {
                id: uuidv4(),
                desc: `Lubricating squeaky hinges`,
                correct: false,
                msg: `Try again! Even as the creator and owner of Doctor Manilowe's Vegan Mayo, I enjoy busying myself with odd-jobs around my home and production facility, including lubricating the squeaky hinges on the lockers in the employee changing rooms.`
            },
        ],
    },
    {
        id: uuidv4(),
        question: `When is The Day of the 5 Mayos celebrated each year?`,
        options: [
            {
                id: uuidv4(),
                desc: `Cinco de Mayo`,
                correct: true,
                msg: `Feliz Naisemaste! This is correct. In the Manilowe family Cinco de Mayo has long been understood to mean "The Day of the 5 Mayos". Don't get between Daddy Roger and Uncle Raffy, though!`
            },
            {
                id: uuidv4(),
                desc: `St Patrick's Day`,
                correct: false,
                msg: `I'm afraid that's incorrect! On St Patrick's day I'm usually busy stirring my 'naise into large wooden barrels of stout!`
            },
            {
                id: uuidv4(),
                desc: `Bring your Daughter/Son to Work Day`,
                correct: false,
                msg: `This is the wrong answer! While I do like to encourage my employees to bring their children to my facility so that they can be homeschooled as their parents work (their tiny hands also come in useful for clearing clogged 'naise pipes around the factory!), this would not be a suitable time to celebrate The Day of the 5 Mayos.`
            },
            {
                id: uuidv4(),
                desc: `Grandpa Tracy's Birthday`,
                correct: false,
                msg: `By his very own admission, Grandpa Tracy is a mean old bastard! As the reigning head of the Manilowe family, Grandpa Tracy absolutely forbids the consumption of any 'naise other than his own on his birthday. This answer is incorrect, and you have angered Grandpa Tracy who will now say 5 mean things to my 'naise foreman Darryl because of your mistake. Grandpa Tracy may be old, but he is as strong and grumpy as his 'naise is fresh!`
            }
        ],
    },
    
]

// Quiz Logic
let options = []
let id = ``
// check answer
const checkAnswer = () => {
    const answer = document.querySelector('input[name="question"]:checked').id;
    const { msg, correct } = options.find(option => option.id === answer);
    alert(msg);
    if(correct) {
        questions = questions.filter(q => q.id !== id);
        [ id, options ] = resetQuiz();
    }
}
// create DOM elements for quiz question
const resetQuiz = () => {
    // clear quiz
    document.getElementById('quiz-container').innerText = "";
    if(questions.length > 0) {
        // get new question
        const { id, question, options } = rand(questions);
        const quizContainer = document.getElementById('quiz-container');
        const newQuestion = document.createElement('p')
        const multiChoice = document.createElement('ol');
        multiChoice.classList.add('quiz-multi-choice');
        for (let option of options) {
            const li = document.createElement('li');
            const input = document.createElement('input');
            const label = document.createElement('label');
            label.htmlFor = option.id;
            label.innerText = option.desc
            input.id = option.id;
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
        return [ id, options ];
    } else {
        const quizContainer = document.getElementById('quiz-container');
        quizContainer.innerHTML = "<p>Naisemaste, child! You have completed the quiz! Do try to achieve more highly next time!</p>"
        document.getElementById('quiz-check-answer').setAttribute('disabled', true);
        return [ null, null ]
    }
}
// add event listener to check answer button
document.getElementById('quiz-check-answer').addEventListener('click', checkAnswer);

[ id, options ] = resetQuiz();

