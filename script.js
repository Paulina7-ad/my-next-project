const navLinks = document.getElementById('navLinks');
const menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', () => {
    navLinks.style.display =
        navLinks.style.display === "block" ? "none" : "block";
});
