const biksImg = document.querySelector(".interna-biks");
const exibir = document.getElementById("exibir");
const imgs = biksImg.querySelectorAll("img");

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    const url = exibir.src;
    exibir.src = img.src;
    img.src = url;
  });
});
