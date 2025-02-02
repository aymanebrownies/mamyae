document.addEventListener("DOMContentLoaded", () => {
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");

    yesBtn.addEventListener("click", () => {
        question.innerHTML = "I love you too mamyae ❤️ ! <3";
        gif.src = "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";
    });

    noBtn.addEventListener("mouseover", () => {
        const maxX = window.innerWidth - noBtn.clientWidth;
        const maxY = window.innerHeight - noBtn.clientHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.position = "absolute";
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });
});
