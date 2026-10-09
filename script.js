const nav = document.querySelector(".nav-container");
const toggle = document.querySelector(".nav-toggle");

toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.innerHTML = open
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    toggle.setAttribute("aria-expanded", open);
});