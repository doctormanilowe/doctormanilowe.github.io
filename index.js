const rand = arr => {
    return arr[Math.floor(arr.length * Math.random())]
}

const msgWrong = [
    `Incorrect! Do 50 press-ups with 'naised palms.`,
    `If you thought that was the answer, you're even thicker than my delicious vegan 'naise!`,
    `That answer is incorrect! Darryl's wages will now be docked by one hour!`,

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
        options: [`Fried Chicken (Hint: This answer is morally wrong!)`, `Hard Cider`, `Lemon`, `Baby Aspirin`],
        correct: "Lemon"
    },
    {
        question: `Complete this phrase: "Quick, thick and _______"`,
        options: [`Hot`, `Fat-Free`, `Naisemaste`, `Vegan`],
        correct: "Vegan"
    },
    {
        question: `Complete this phrase: "Quick, thick and _______"`,
        options: [`Hot`, `Fat-Free`, `Naisemaste`, `Vegan`],
        correct: "Vegan"
    },
    {
        question: `Complete this phrase: "Quick, thick and _______"`,
        options: [`Hot`, `Fat-Free`, `Naisemaste`, `Vegan`],
        correct: "Vegan"
    },
    {
        question: `Complete this phrase: "Quick, thick and _______"`,
        options: [`Hot`, `Fat-Free`, `Naisemaste`, `Vegan`],
        correct: "Vegan"
    },
    {
        question: `Complete this phrase: "Quick, thick and _______"`,
        options: [`Hot`, `Fat-Free`, `Naisemaste`, `Vegan`],
        correct: "Vegan"
    },
    {
        question: `Complete this phrase: "Quick, thick and _______"`,
        options: [`Hot`, `Fat-Free`, `Naisemaste`, `Vegan`],
        correct: "Vegan"
    },
    {
        question: `Complete this phrase: "Quick, thick and _______"`,
        options: [`Hot`, `Fat-Free`, `Naisemaste`, `Vegan`],
        correct: "Vegan"
    },
    {
        question: `Complete this phrase: "Quick, thick and _______"`,
        options: [`Hot`, `Fat-Free`, `Naisemaste`, `Vegan`],
        correct: "Vegan"
    },
]