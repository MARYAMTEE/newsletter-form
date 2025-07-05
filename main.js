const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');
const row = document.getElementById('row');

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

        emailInput.style.backgroundColor = "#ff00002d";
        emailInput.style.border = "1px solid red"

        successMessage.classList.add("hidden");
    } else {
        errorMessage.textContent= "";
        errorMessage.style.display = "none";

        emailInput.style.backgroundColor = "";
        emailInput.style.borderColor = "";
        row.style.display = "none";
        successMessage.classList.remove("hidden");
    }
});

function dismissSuccess() {
    successMessage.classList.add("hidden");

    row.style.removeProperty('display');
    form.reset();
}