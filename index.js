const container = document.querySelector(".container");
const input = document.querySelector(".container .input");
const icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
  container.classList.toggle("active");
  input.focus();
});
