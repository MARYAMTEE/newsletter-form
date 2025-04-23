const form = document.getElementById('form');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.email.value.trim();

    let errors = [];

    if(!email) {
        errors.push("Valid email required");
    }else if (typeof email !== 'string') {
        errors.push("Valid email required");
    }else if(email.length < 5 || email.length > 50) {
        errors.push("Valid email required");
    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("Valid email required");
      }

    if(errors.length > 0) {
        errorMessage.textContent = errors[0];
        errorMessage.className = "errorMessage";
        errorMessage.style.display = "block";
        successMessage.classList.add("hidden");
    } else {
        errorMessage.textContent= "";
        errorMessage.style.display = "none";
        successMessage.classList.remove("hidden");
    }
});

function dismissSuccess() {
    successMessage.classList.add("hidden");
    form.reset();
}