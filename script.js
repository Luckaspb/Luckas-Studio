
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("active");

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Fechar menu" : "Abrir menu"
  );
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
  });
});

/* PASTA INTERATIVA */

const portfolioFolder = document.querySelector(".portfolio-folder");
const portfolioExplorer = document.querySelector(".portfolio-explorer");
const portfolioFiles = document.querySelector(".portfolio-files");

if (portfolioFolder && portfolioExplorer && portfolioFiles) {
  portfolioFolder.addEventListener("click", () => {
    const isOpen = portfolioExplorer.classList.toggle("is-open");

    portfolioFolder.setAttribute("aria-expanded", String(isOpen));

    if (isOpen) {
      portfolioFiles.hidden = false;
    } else {
      portfolioFiles.hidden = true;
    }
  });
}


/* ===== SIMULADOR DE PROJETOS ===== */

const generateButton = document.querySelector("#generate-project");
const projectIdea = document.querySelector("#project-idea");

generateButton.addEventListener("click", () => {
  const idea = projectIdea.value.trim();

  if (idea === "") {
    alert("Descreva sua ideia antes de continuar!");
    return;
  }

  fetch("/api/simular", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ideia: idea })
  })
    .then(resposta => resposta.json())
    
.then(dados => {
  if (!dados.sucesso) {
    alert(dados.mensagem);
    return;
  }

  const result = document.querySelector("#simulator-result");
  const image = document.querySelector("#generated-image");

  image.src = dados.imagem;
  result.hidden = false;

  console.log("Imagem gerada com sucesso!");
})

    .catch(erro => {
      console.error("Erro ao conectar com a API:", erro);
    });
});

