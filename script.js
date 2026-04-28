const toggleBtn = document.getElementById("darkToggle");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

toggleBtn.onclick = () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️ Light Mode";
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
    }
};

hamburger.onclick = () => {
    navLinks.classList.toggle("active");
};