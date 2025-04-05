document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    // Smooth Scrolling
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // Dynamic Header Background on Scroll
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.background = "#004d40";
        } else {
            header.style.background = "#00796b";
        }
    });
});
function subscribe() {
    let email = document.getElementById("email").value;
    if (email) {
        alert("Stay tuned! You'll get notified.");
    } else {
        alert("Please enter a valid email address.");
    }
}
