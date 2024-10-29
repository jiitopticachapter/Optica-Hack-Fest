// quiz.js

const questions = [
    {
        question: "You're scrolling through Instagram and find a cute dog video. What do you do?",
        options: [
            "Like and move on 🐶",
            "Send it to all your friends 📨",
            "Save it for later 📂",
            "Comment 'I need this dog in my life!' ❤️"
        ],
        answer: 1
    },
    {
        question: "You decide to post a story of your morning coffee. Which filter do you choose?",
        options: [
            "Classic black and white ☕️",
            "Bright and warm 🌞",
            "Cool and blue ❄️",
            "No filter needed!"
        ],
        answer: 3
    },
    {
        question: "Your friend tags you in a funny meme. How do you react?",
        options: [
            "Like it silently 😆",
            "Repost on your story 😂",
            "Reply with even more memes 🔥",
            "Ignore it, you've seen it already"
        ],
        answer: 2
    },
    {
        question: "If you could choose only one type of Instagram content for a week, what would it be?",
        options: [
            "Food photos 🍕",
            "Travel shots 🌍",
            "Pet videos 🐱",
            "Inspirational quotes 🌈"
        ],
        answer: 1
    },
    {
        question: "You’re on vacation and want to make your friends jealous. What’s the perfect caption?",
        options: [
            "'Wish you were here! ☀️'",
            "'Living my best life 🌴'",
            "'Current mood: paradise 🏖️'",
            "'Can I stay here forever? 😍'"
        ],
        answer: 2
    },
    {
        question: "What's your reaction to seeing a reel with over 1 million likes?",
        options: [
            "Try to make one just like it 🔥",
            "Wonder how it got so popular 🤔",
            "Follow the creator for more content 💯",
            "Scroll past, you’ve seen enough"
        ],
        answer: 1
    },
    {
        question: "What’s your favorite time to post on Instagram?",
        options: [
            "Morning ☀️",
            "Afternoon 🕒",
            "Evening 🌆",
            "Late at night 🌙"
        ],
        answer: 2
    },
    {
        question: "Your friend posts a selfie and asks for feedback. How do you respond?",
        options: [
            "'Looking amazing!' 😍",
            "'Best selfie ever!' 📸",
            "'Teach me your secrets!' 🤫",
            "'Slaying it!' 🔥"
        ],
        answer: 0
    },
    {
        question: "What do you prefer to see on your Instagram feed?",
        options: [
            "Travel photos 🌏",
            "Cute pets 🐾",
            "Art and design 🎨",
            "Funny memes 😂"
        ],
        answer: 3
    },
    {
        question: "Which hashtag are you most likely to use?",
        options: [
            "#Blessed 🙏",
            "#Wanderlust 🌍",
            "#Foodie 🍔",
            "#Throwback 📸"
        ],
        answer: 1
    },
    {
        question: "What’s your go-to reaction to a friend’s Instagram story?",
        options: [
            "Heart eyes 😍",
            "Laughing face 😂",
            "Clapping hands 👏",
            "Fire emoji 🔥"
        ],
        answer: 3
    },
    {
        question: "You’re about to post a selfie. What’s your final check?",
        options: [
            "Lighting ☀️",
            "Angles 📐",
            "Background ✨",
            "All of the above!"
        ],
        answer: 3
    },
    {
        question: "What type of reels do you watch the most?",
        options: [
            "Dance trends 💃",
            "Cooking tutorials 🍳",
            "DIY crafts 🛠️",
            "Fitness tips 💪"
        ],
        answer: 0
    },
    {
        question: "If you could have any influencer's Instagram account, whose would it be?",
        options: [
            "A travel blogger 🌍",
            "A fashion icon 👗",
            "A fitness guru 🏋️",
            "A food critic 🍣"
        ],
        answer: 0
    },
    {
        question: "Your post doesn’t get many likes. What do you do?",
        options: [
            "Delete it and re-post later 🤷‍♂️",
            "Change the caption 📝",
            "Leave it and move on 👌",
            "Ask friends to like it 🙏"
        ],
        answer: 2
    },
    {
        question: "What’s your strategy for gaining followers?",
        options: [
            "Posting consistently 📅",
            "Using popular hashtags #️⃣",
            "Collaborating with friends 🤝",
            "Just hoping for the best 🙏"
        ],
        answer: 0
    },
    {
        question: "You’re tagged in a not-so-great photo. What do you do?",
        options: [
            "Remove the tag 📛",
            "Laugh it off 😂",
            "Ask for a retake 📸",
            "Ignore it 😅"
        ],
        answer: 1
    },
    {
        question: "Which Instagram feature do you love most?",
        options: [
            "Stories 📖",
            "Reels 🎬",
            "IGTV 📺",
            "Direct messages 💬"
        ],
        answer: 1
    },
    {
        question: "What’s the best way to find new accounts to follow?",
        options: [
            "Explore page 🔍",
            "Hashtags #️⃣",
            "Friends' recommendations 👫",
            "Suggested accounts 👍"
        ],
        answer: 0
    },
    {
        question: "You’re on a beautiful hike. What do you capture?",
        options: [
            "A selfie 📸",
            "The scenery 🌄",
            "Your hiking gear ⛺",
            "A group shot 👥"
        ],
        answer: 1
    },
    {
        question: "What’s your favorite type of Instagram Story sticker?",
        options: [
            "Polls 📊",
            "Questions ❓",
            "GIFs 💥",
            "Music 🎶"
        ],
        answer: 2
    },
    {
        question: "How do you usually respond to DMs?",
        options: [
            "Text only 📲",
            "Voice notes 🎙️",
            "Reactions 😆",
            "Rarely respond 🤐"
        ],
        answer: 0
    },
    {
        question: "Which of these captions best fits your vibe?",
        options: [
            "'Just vibing ✌️'",
            "'Life is beautiful 🌈'",
            "'Chasing dreams 💫'",
            "'Forever on vacation 🏖️'"
        ],
        answer: 2
    },
    {
        question: "Which meme format do you relate to most?",
        options: [
            "Distracted boyfriend 😂",
            "Change my mind 💁",
            "Woman yelling at cat 🐱",
            "This is fine 🔥"
        ],
        answer: 3
    },
    {
        question: "You’re starting a new Instagram account. What’s your theme?",
        options: [
            "Foodie adventures 🍕",
            "Pet shenanigans 🐶",
            "Travel diaries 🌍",
            "Fitness journey 🏋️"
        ],
        answer: 2
    },
    {
        question: "Which Instagram pet do you wish you could adopt?",
        options: [
            "Doug the Pug 🐶",
            "Nala Cat 🐱",
            "Juniper the Fox 🦊",
            "Venus the Two-Face Cat 😻"
        ],
        answer: 0
    },
    {
        question: "How many selfies are in your camera roll right now?",
        options: [
            "Less than 10 📱",
            "10-50 📲",
            "50-100 📷",
            "Over 100! 😳"
        ],
        answer: 3
    },
    {
        question: "Your friend posts a very cringe story. What do you do?",
        options: [
            "Ignore it 🤐",
            "Send it to another friend 😂",
            "React with a laughing emoji 😂",
            "Ask them why they posted it!"
        ],
        answer: 1
    },
    {
        question: "Which Instagram filter could you use forever?",
        options: [
            "Clarendon 💙",
            "Gingham 🌄",
            "Juno 🌞",
            "No filter needed!"
        ],
        answer: 3
    },
    {
        question: "Which of these is your favorite Instagram trend?",
        options: [
            "Photo dumps 📸",
            "Transformation videos 🕒",
            "Behind the scenes 🎬",
            "#TBT posts 📅"
        ],
        answer: 0
    },
    {
        question: "How do you decide on a caption?",
        options: [
            "Keep it short and sweet 💕",
            "Add something funny 😂",
            "Use a song lyric 🎶",
            "Write a mini-story 📖"
        ],
        answer: 1
    },
    {
        question: "How often do you check your Instagram analytics?",
        options: [
            "Every post 📈",
            "Once a month 📊",
            "Rarely 🤷",
            "I don't even know where they are!"
        ],
        answer: 0
    }
];


let currentQuestionIndex = 0;
let score = 0;


let strt=document.getElementById("start");
let main=document.getElementById("main");
let quiz=document.getElementById("quiz");
let ques=document.getElementById("question");
let options=document.getElementById("options");
let scoreContainer=document.getElementById("score-container");
const scoreEl = document.getElementById('score');

strt.addEventListener("click", () => {
    strt.style.display = 'none';
    main.style.display = 'none';
    quiz.style.display='block';
    displayQuestion();
});
function resetState() {
   options.innerHTML="";
}
function displayQuestion()
{
    resetState();
    const currentQuestion=questions[currentQuestionIndex];
    ques.innerHTML=currentQuestion.question;

    currentQuestion.options.forEach((option,index) => {
        const button = document.createElement('button');
        button.innerText = option;
        options.appendChild(button);
        button.classList.add('option');
        button.addEventListener('click', () => {
            handleAnswer(index);
        });
    });
}

function handleAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
        score++; 
    }
    currentQuestionIndex++; 
    if (currentQuestionIndex < questions.length) {
        displayQuestion(); 
    } else {
        showScore(); 
    }
}



function showScore() {
    quiz.style.display = 'none';
    scoreContainer.style.display = 'block';
    scoreEl.innerText = `Your score: ${score} out of ${questions.length}`;
}