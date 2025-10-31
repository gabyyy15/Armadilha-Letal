// script.js

// 1. VOLTAR AO TOPO
window.addEventListener("scroll", function () {
  const btn = document.getElementById("btnTopo");
  btn.style.display = window.scrollY > 300 ? "block" : "none";
});

document.getElementById("btnTopo").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 2. MODAL DE IMAGEM
const modal = document.getElementById("modalImagem");
const imagemModal = document.getElementById("imagemAmpliada");
const fechar = document.getElementsByClassName("fechar")[0];

document.querySelectorAll(".imagens-galeria img").forEach(img => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    imagemModal.src = this.src;
  });
});

fechar.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// 3. ATALHOS DO TECLADO
document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "g":
      window.location.hash = "#galeria";
      break;
    case "h":
      window.location.hash = "#historia";
      break;
    case "p":
      window.location.hash = "#personagens";
      break;
    case "s":
      window.location.hash = "#sobre-nos";
      break;
  }
});

// 4. ANIMAÇÃO COM SCROLL
function animarScroll() {
  const elementos = document.querySelectorAll('.fade-in');
  const topoTela = window.innerHeight;

  elementos.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < topoTela - 100) {
      el.classList.add("aparecer");
    }
  });
}

window.addEventListener("scroll", animarScroll);
document.addEventListener("DOMContentLoaded", animarScroll);
