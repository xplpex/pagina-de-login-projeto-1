const form = document.querySelector("#login-form");
const feedback = document.querySelector("#feedback");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  feedback.textContent = "Dados enviados com sucesso.";
});
