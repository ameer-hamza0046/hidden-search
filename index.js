const container = document.querySelector(".container");
const input = document.querySelector(".container .input");
const icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
  input.focus();
  container.classList.toggle("active");
});
