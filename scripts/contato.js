const form = document.getElementById("contact__form");

async function handleSubmit(e) {
  const status = document.getElementById("submit__message");
  e.preventDefault();
  const data = new FormData(e.target);
  fetch(e.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Obrigada!";
      setTimeout(() => (status.innerHTML = ""), 4000);
      form.reset();
    })
    .catch((error) => {
      setTimeout(() => (status.innerHTML = ""), 4000);

      status.innerHTML = "Houve um erro.";
    });
}
form.addEventListener("submit", handleSubmit);

// copy to clipboard
const copyLink = document.querySelector(".copy");

copyLink.addEventListener("click", (e) => {
  e.preventDefault();
  const copyText = document.querySelector(".copy__text");
  copyText.focus();
  copyText.select();
  document.execCommand("copy");
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copiado";
  setTimeout(() => (tooltip.innerHTML = "Copiar"), 4000);
});
