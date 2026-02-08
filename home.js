// ===============================
// AUTO-ROTATING QUOTES
// ===============================

const quotes = [
    "Reading is dreaming with open eyes.",
    "A reader lives a thousand lives before he dies.",
    "Books are a uniquely portable magic.",
    "So many books, so little time.",
    "Reading gives us someplace to go when we have to stay where we are."
];

let quoteIndex = 0;
const quoteElement = document.getElementById("quote");

function changeQuote() {
    quoteElement.textContent = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
}

// Change quote every 4 seconds
setInterval(changeQuote, 4000);

// ===============================
// AUTHOR OF THE DAY (DATE-BASED)
// ===============================

const authors = [
    "Jane Austen",
    "George Orwell",
    "J.K. Rowling",
    "Agatha Christie",
    "Mark Twain",
    "Leo Tolstoy",
    "Virginia Woolf"
];

const authorElement = document.getElementById("authorName");
const today = new Date().getDate();
const authorIndex = today % authors.length;

authorElement.textContent = authors[authorIndex];

// ===============================
// NEWSLETTER SUBSCRIPTION
// ===============================

const subscribeBtn = document.getElementById("subscribeBtn");
const emailInput = document.getElementById("newsletterEmail");

if (subscribeBtn && emailInput) {
    subscribeBtn.addEventListener("click", () => {
        const email = emailInput.value.trim();

        if (email === "") {
            alert("Please enter an email address.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        localStorage.setItem("newsletterEmail", email);
        alert("Thank you for subscribing!");
        emailInput.value = "";
    });
}
