// Change header color on hover
const header = document.querySelector("header");

header.addEventListener("mouseenter", () => {
    header.style.backgroundColor = "#333";
});

header.addEventListener("mouseleave", () => {
    header.style.backgroundColor = "#222";
});

// Back to Top Button
const backToTop = document.createElement("button");
backToTop.innerText = "↑ Top";
backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px 15px";
backToTop.style.backgroundColor = "#444";
backToTop.style.color = "white";
backToTop.style.border = "none";
backToTop.style.borderRadius = "5px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact Form Handling
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your message has been sent.`);

 
    this.reset();
});
