<<<<<<< HEAD
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
=======
const m_Nav = document.getElementsByClassName("m-nav");

function hamclick() {
    alert(m_Nav.classList.length)
    document.getElementsByClassName("m-nav").classList.add("active");
}


/*
function hamclick() {
    
    alert("Green");
}
*/
>>>>>>> bd015f4f88cfa9a634d22a0d77b8a2cbb43b1744
