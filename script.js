
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? "block" : "none";
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex);

    const quizForm = document.getElementById("quiz-form");
    if (quizForm) {
        quizForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let score = 0;
            const correctAnswers = ["b", "c", "a", "b", "c"];
            for (let i = 1; i <= 5; i++) {
                const answer = quizForm.querySelector(`input[name=q${i}]:checked`);
                if (answer && answer.value === correctAnswers[i - 1]) {
                    score++;
                }
            }
            alert(`Ai obtinut ${score}/5 raspunsuri corecte.`);
        });
    }
});
