const form = document.getElementById('form')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formDataEntries = new FormData(newletterForm).entries();
    const { email } = Object.fromEntries(formDataEntries);
});