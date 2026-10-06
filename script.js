// ================================
// Background Music
// ================================

const bgMusic = document.getElementById("bgMusic");

bgMusic.volume = 0.45;
const opening =
    document.getElementById("opening");

const photoSection =
    document.getElementById("photoSection");

const proposal =
    document.getElementById("proposal");


const startBtn =
    document.getElementById("startBtn");

const nextBtn =
    document.getElementById("nextBtn");


const typingText =
    document.getElementById("typingText");


const yesBtn =
    document.getElementById("yesBtn");

const maybeBtn =
    document.getElementById("maybeBtn");


const answer =
    document.getElementById("answer");



const message =

`Sadia...

Some people enter our lives
and slowly become a beautiful part
of our everyday thoughts.

And somehow,
you became one of those people.

So I wanted to make
this little moment just for you. ❤️`;



startBtn.addEventListener("click", () => {

    // Start music after user interaction
    bgMusic.play().catch(error => {
        console.log("Music could not start:", error);
    });

    opening.classList.remove("active");

    setTimeout(() => {

        photoSection.classList.add("active");

        typeMessage();

    }, 900);

});



function typeMessage() {

    let index = 0;

    typingText.textContent = "";

    nextBtn.classList.add("hidden");


    const typingInterval = setInterval(() => {

        typingText.textContent +=
            message[index];

        index++;


        if (index >= message.length) {

            clearInterval(typingInterval);


            setTimeout(() => {

                nextBtn.classList.remove("hidden");

            }, 900);

        }

    }, 38);

}



nextBtn.addEventListener("click", () => {

    photoSection.classList.remove("active");


    setTimeout(() => {

        proposal.classList.add("active");

    }, 900);

});




yesBtn.addEventListener("click", () => {

    answer.textContent =
        "Thank you, Sadia. ❤️✨";

    createHeartExplosion();

});



maybeBtn.addEventListener("click", () => {

    answer.textContent =
        "Take your time, Sadia... 🌸";

});




function createParticle() {

    const particle =
        document.createElement("div");

    particle.className =
        "particle";


    const symbols = [

        "❤️",
        "💕",
        "💗",
        "✨",
        "🌸",
        "♡"

    ];


    particle.textContent =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    particle.style.left =
        Math.random() * 100 + "vw";


    particle.style.fontSize =
        (12 + Math.random() * 22) + "px";


    particle.style.animationDuration =
        (5 + Math.random() * 7) + "s";


    document
        .getElementById("particles")
        .appendChild(particle);


    setTimeout(() => {

        particle.remove();

    }, 13000);

}


setInterval(
    createParticle,
    550
);



function createHeartExplosion() {

    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.className =
            "particle";


        heart.textContent =
            Math.random() > .3
                ? "❤️"
                : "✨";


        heart.style.left =
            (35 + Math.random() * 30) +
            "vw";


        heart.style.bottom =
            (30 + Math.random() * 20) +
            "vh";


        heart.style.fontSize =
            (14 + Math.random() * 28) +
            "px";


        heart.style.animationDuration =
            (2 + Math.random() * 3) +
            "s";


        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 6000);

    }

}