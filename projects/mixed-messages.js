const messages = ["You can do this!", 
    "You're doing amazing!",
    "Keep going!",
    "One day at a time!", 
    "If at first you don't succeed, try, try again!", 
    "Get up and dust yourself off!", 
    "Don't give up!", 
    "It's just a rough patch", 
    "You only fail if you give up!", 
    "Every failure is a success, as long as you learn!"
]

const quotes = ["It takes courage to grow up and become who you really are -E.E.Cummings", 
    "You're self worth is determined by you! -Beyonce", 
    "Nothing is impossible! The word itself says 'I'm possible!' -Audrey Hepburn", 
    "Keep your face always toward the sunshine, and shadows will fall behind you. -Walt Whitman", 
    "Attitude is a little thing that makes a big difference. -Winston Churchill", 
    "All our dreams can come true, if we have the courage to pursue them. -Walt Disney", 
    "Don't sit down and wait for the opportunities to come. Get up and make them. -Madam C.J.Walker", 
    "Champions keep playing until they get it right. -Billi Jean King", 
    "You are never too old to set another goal or to dream a new dream. -C.S.Lewis", 
    "It is during our darkest moments that we must focus to see the light. -Aristotle"]

const motivations = ["Just take a break!", 
    "Relax, and try again tomorrow!", 
    "It's never too late to go back to bed!", 
    "Take a break and give your soul what it needs!", 
    "If your tired, learn to rest not quit!", 
    "It's time to take a break!", 
    "Take a break and enjoy life!", 
    "You must disconnect to reconnect!", 
    "Calm is a superpower. Don't let stress kill your happiness!", 
    "For the love of your work take a break!", ]

    function getRandomItemFromArray(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    
    function displayRandomMessages() {
        const randomMessage = getRandomItemFromArray(messages);
        const randomQuote = getRandomItemFromArray(quotes);
        const randomMotivation = getRandomItemFromArray(motivations);
    
        const messageContainer = document.getElementById('message-container');
        messageContainer.innerHTML = `
            <p>${randomMessage}</p>
            <p>${randomQuote}</p>
            <p>${randomMotivation}</p>
        `;
    }    
    displayRandomMessages();