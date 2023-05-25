const form = document.getElementById("contact-form");

form.addEventListener("submit", confirmationMessage);

const confirmationMessage = () => {
  alert("La información ha sido enviado con éxito");
};
