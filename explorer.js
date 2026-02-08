// ===============================
// BOOK DATA
// ===============================

const books = [
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        image: "images/1984.jpg",
        synopsis: "A chilling depiction of a totalitarian regime.",
        series: ["None"],
        ratings: [
            { source: "Goodreads", score: "4.2/5" },
            { source: "Amazon", score: "4.6/5" }
        ]
    },
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        genre: "Fantasy",
        image: "images/harrypotter.jpg",
        synopsis: "A young wizard’s journey through magic and friendship.",
        series: ["Chamber of Secrets", "Prisoner of Azkaban"],
        ratings: [
            { source: "Goodreads", score: "4.8/5" },
            { source: "Amazon", score: "4.9/5" }
        ]
    }
];

const bookGrid = document.getElementById("bookGrid");

function displayBooks(bookList) {
    bookGrid.innerHTML = "";

    bookList.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";

        card.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
        `;

        card.addEventListener("click", () => openModal(book));
        bookGrid.appendChild(card);
    });
}

displayBooks(books);

const modal = document.getElementById("bookModal");
const closeBtn = document.querySelector(".close-btn");

function openModal(book) {
    document.getElementById("modalTitle").textContent = book.title;
    document.getElementById("modalSynopsis").textContent = book.synopsis;

    const seriesList = document.getElementById("modalSeries");
    seriesList.innerHTML = "";
    book.series.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        seriesList.appendChild(li);
    });

    const table = document.getElementById("modalTable");
    table.innerHTML = `
        <tr>
            <th>Source</th>
            <th>Rating</th>
        </tr>
    `;
    book.ratings.forEach(r => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${r.source}</td><td>${r.score}</td>`;
        table.appendChild(row);
    });

    modal.style.display = "flex";
}

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    const filtered = books.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );

    displayBooks(filtered);
});
