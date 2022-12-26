const nav = document.querySelector("nav");
const navLIst = nav.querySelector("ul");
const navBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");

navBtn.addEventListener("click", () => {
    nav.classList.add("visible");
    navBtn.classList.add("invisible");
});

closeBtn.addEventListener("click", () => {
    nav.classList.remove("visible");
    navBtn.classList.add("visible");
});
