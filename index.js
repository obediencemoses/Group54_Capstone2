const nav = document.getElementById("nav");

function hamclick() {
    if (nav.classList[0] == "hidden") {
        nav.classList.remove("hidden");
        nav.classList.add("flex");
    }
    else {
        nav.classList.toggle("hidden");
    }
}
