// ===============================
// READING PROGRESS TRACKER
// ===============================

const form = document.getElementById("trackerForm");
const percentageText = document.getElementById("percentage");
const finishText = document.getElementById("finishTime");
const progressFill = document.getElementById("progressFill");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const total = Number(document.getElementById("totalPages").value);
        const read = Number(document.getElementById("pagesRead").value);
        const speed = Number(document.getElementById("speed").value);

        if (read > total) {
            alert("Pages read cannot exceed total pages.");
            return;
        }

        const percent = Math.round((read / total) * 100);
        const remaining = total - read;
        const days = Math.ceil(remaining / speed);

        percentageText.textContent = `Completed: ${percent}%`;
        finishText.textContent = `Estimated finish time: ${days} days`;

        progressFill.style.width = percent + "%";

        const progressData = { total, read, speed };
        localStorage.setItem("readingProgress", JSON.stringify(progressData));
    });
}
