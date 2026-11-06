
/* ===== MENU RESPONSIVO ===== */

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
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
}

/* ===== PASTA INTERATIVA ===== */

const portfolioFolder = document.querySelector(".portfolio-folder");
const portfolioExplorer = document.querySelector(".portfolio-explorer");
const portfolioFiles = document.querySelector(".portfolio-files");

if (portfolioFolder && portfolioExplorer && portfolioFiles) {
  portfolioFolder.addEventListener("click", () => {
    const isOpen = portfolioExplorer.classList.toggle("is-open");

    portfolioFolder.setAttribute("aria-expanded", String(isOpen));
    portfolioFiles.hidden = !isOpen;
  });
}

/* ===== SIMULADOR COM IA ===== */

const generateButton = document.querySelector("#generate-project");
const projectIdea = document.querySelector("#project-idea");
const simulatorResult = document.querySelector("#simulator-result");
const generatedSite = document.querySelector("#generated-site");
const projectType = document.querySelector("#project-type");
const projectPrice = document.querySelector("#project-price");

if (generateButton && projectIdea && simulatorResult && generatedSite) {
  const mensagem = document.createElement("p");
  mensagem.setAttribute("role", "status");
  mensagem.setAttribute("aria-live", "polite");
  mensagem.style.marginTop = "12px";
  mensagem.style.fontSize = "13px";
  mensagem.style.lineHeight = "1.6";
  mensagem.style.color = "#ff9875";

  generateButton.insertAdjacentElement("afterend", mensagem);

  generateButton.addEventListener("click", async () => {
    const ideia = projectIdea.value.trim();

    if (ideia.length < 10 || ideia.length > 1000) {
      mensagem.textContent =
        "Descreva sua ideia com pelo menos 10 e no máximo 1000 caracteres.";
      projectIdea.focus();
      return;
    }

    generateButton.disabled = true;
    generateButton.textContent = "CRIANDO SUA PRÉVIA...";
    generateButton.style.opacity = "0.65";
    generateButton.style.cursor = "wait";

    mensagem.textContent = "Nossa IA está preparando seu projeto...";
    simulatorResult.hidden = true;

    try {
      const resposta = await fetch("/api/simular", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ideia })
      });

      const dados = await resposta.json();

      if (!resposta.ok || !dados.sucesso) {
        throw new Error(
          dados.mensagem || "Não foi possível gerar a prévia."
        );
      }

      if (!dados.dados || typeof gerarHTMLTemplate !== "function") {
        throw new Error("O modelo visual não está disponível.");
      }

      generatedSite.srcdoc = gerarHTMLTemplate(dados.dados);

      if (projectType) {
        const nomes = {
          elegante: "Site elegante",
          tecnologico: "Site tecnológico",
          energetico: "Site de alto impacto"
        };

        projectType.textContent =
          nomes[dados.dados.estilo] || "Landing Page";
      }

      if (projectPrice) {
        projectPrice.textContent = "Sob consulta";
      }

      simulatorResult.hidden = false;
      mensagem.textContent = "Sua prévia está pronta!";

      simulatorResult.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    } catch (erro) {
      mensagem.textContent =
        erro.message || "Ocorreu um erro. Tente novamente.";

    } finally {
      generateButton.disabled = false;
      generateButton.textContent = "SIMULAR MEU PROJETO";
      generateButton.style.opacity = "";
      generateButton.style.cursor = "";
    }
  });
}
