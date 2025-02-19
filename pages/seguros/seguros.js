const perguntas = document.querySelectorAll(".perguntas-item");
const seta = document.querySelectorAll("perguntas-item dt::after");

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    pergunta.classList.toggle("abrir");
    const dd = pergunta.getElementsByTagName("dd")[0];
    dd.classList.toggle("item-show");
    console.log(dd);
  });
});
document.body.style;
