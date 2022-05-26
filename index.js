const input = document.querySelector(".inputText");
const btn = document.querySelector("button");
const output = document.querySelector(".outputText");

window.addEventListener("keyup", (e) => {
  e.preventDefault();
  const data = input.value;
  const natija = katex.renderToString(data);
  output.innerHTML = natija;
});
