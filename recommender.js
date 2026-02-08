// ===============================
// RANDOM BOOK RECOMMENDER
// ===============================

const books = [
    // DYSTOPIAN
    { title: "1984", genre: "Dystopian", length: "Medium" },
    { title: "Animal Farm", genre: "Dystopian", length: "Short" },
    { title: "Brave New World", genre: "Dystopian", length: "Medium" },
    { title: "Fahrenheit 451", genre: "Dystopian", length: "Short" },

    // FANTASY
    { title: "Harry Potter and the Philosopher's Stone", genre: "Fantasy", length: "Long" },
    { title: "The Hobbit", genre: "Fantasy", length: "Medium" },
    { title: "The Name of the Wind", genre: "Fantasy", length: "Long" },
    { title: "Percy Jackson & the Lightning Thief", genre: "Fantasy", length: "Medium" },

    // CLASSIC
    { title: "Pride and Prejudice", genre: "Classic", length: "Medium" },
    { title: "Jane Eyre", genre: "Classic", length: "Long" },
    { title: "The Great Gatsby", genre: "Classic", length: "Short" },
    { title: "Moby Dick", genre: "Classic", length: "Long" }
];




const recommendBtn = document.getElementById("recommendBtn");
const saveBtn = document.getElementById("saveBtn");
const output = document.getElementById("recommendation");

let currentBook = null;

recommendBtn.addEventListener("click", () => {
    const genre = document.getElementById("genreSelect").value;
    const length = document.getElementById("lengthSelect").value;

    const filtered = books.filter(
        book => book.genre === genre && book.length === length
    );

    if (filtered.length === 0) {
        output.textContent = "No book found for this selection.";
        output.classList.add("show");
        return;
    }

    currentBook = filtered[Math.floor(Math.random() * filtered.length)];

    output.textContent = `📖 Recommended: ${currentBook.title}`;
    output.classList.add("show");
    saveBtn.style.display = "inline-block";
});

saveBtn.addEventListener("click", () => {
    let list = JSON.parse(localStorage.getItem("readingList")) || [];
    list.push(currentBook);
    localStorage.setItem("readingList", JSON.stringify(list));
    alert("Book saved to your reading list!");
});
