// CONTACT FORM FEEDBACK
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  document.getElementById("formStatus").innerText = "Message Sent Successfully!";
  
  setTimeout(() => {
    document.getElementById("formStatus").innerText = "";
  }, 3000);

  this.reset();
});

// Smooth scroll nav active indicator (optional)
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
