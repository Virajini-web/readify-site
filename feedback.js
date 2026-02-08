// ===============================
// FEEDBACK FORM
// ===============================

const form = document.getElementById("feedbackForm");
const confirmation = document.getElementById("confirmation");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const feedback = { name, email, message };
        let feedbackList = JSON.parse(localStorage.getItem("feedback")) || [];
        feedbackList.push(feedback);
        localStorage.setItem("feedback", JSON.stringify(feedbackList));

        confirmation.textContent = "Thank you for your feedback!";
        form.reset();
    });
}

// ===============================
// FAQ ACCORDION
// ===============================

const questions = document.querySelectorAll(".faq-question");

questions.forEach(q => {
    q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});
