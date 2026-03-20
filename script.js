const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const dropdowns = document.querySelectorAll(".dropdown");

// Hamburger open/close
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuToggle.classList.toggle("active");
});

// Dropdowns klikbaar op mobiel
dropdowns.forEach(drop => {
    const btn = drop.querySelector(".dropbtn");

    btn.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault(); // voorkomt navigatie
            drop.classList.toggle("active");
        }
    });
});

// Klik buiten sluit menu en dropdowns
document.addEventListener("click", (e) => {
    // Menu sluiten als klik buiten hamburger en nav
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove("active");
        menuToggle.classList.remove("active");
    }

    // Dropdowns sluiten als klik buiten dropdown
    dropdowns.forEach(drop => {
        if (!drop.contains(e.target)) {
            drop.classList.remove("active");
        }
    });
});

// Window resize reset menu voor desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        nav.classList.remove("active");
        menuToggle.classList.remove("active");
        dropdowns.forEach(drop => drop.classList.remove("active"));
    }
});