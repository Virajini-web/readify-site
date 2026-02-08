// ===============================
// AMBIENT SOUND
// ===============================

const rain = document.getElementById("rainSound");
const playRain = document.getElementById("playRain");
const stopSound = document.getElementById("stopSound");

playRain.addEventListener("click", () => {
    rain.play();
});

stopSound.addEventListener("click", () => {
    rain.pause();
    rain.currentTime = 0;
});

// ===============================
// COMPLETED BOOKS TRACKER
// ===============================

const addBookBtn = document.getElementById("addBookBtn");
const bookInput = document.getElementById("completedBook");
const list = document.getElementById("completedList");

function loadCompletedBooks() {
    const books = JSON.parse(localStorage.getItem("completedBooks")) || [];
    books.forEach(addBookToUI);
}

function addBookToUI(book) {
    const li = document.createElement("li");
    li.textContent = book;
    list.appendChild(li);
}

addBookBtn.addEventListener("click", () => {
    const book = bookInput.value.trim();
    if (!book) return;

    let books = JSON.parse(localStorage.getItem("completedBooks")) || [];
    books.push(book);
    localStorage.setItem("completedBooks", JSON.stringify(books));

    addBookToUI(book);
    bookInput.value = "";
});

loadCompletedBooks();
