/* ========================================
   LUCKAS — WEB DESIGN & DEVELOPMENT
   INTRO CINEMATOGRÁFICA — THE REVEAL
======================================== */

// Elementos principais
const intro = document.querySelector("#intro");
const site = document.querySelector("#site");

// Impede o navegador de restaurar a posição anterior
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Inicia a página no topo
window.scrollTo(0, 0);

// Bloqueia a rolagem durante a introdução
document.body.style.overflow = "hidden";

// Tempo total da introdução
const introDuration = 4500;

// Tempo da transição de saída
const exitDuration = 700;

// Aguarda a animação cinematográfica terminar
setTimeout(() => {

  // Revela o portfólio
  site.classList.add("site-visible");

  // Inicia o desaparecimento da introdução
  intro.classList.add("intro-exit");

  // Libera a rolagem
  document.body.style.overflow = "";

  // Garante que o site comece no topo
  window.scrollTo(0, 0);

  // Remove a introdução depois da transição
  setTimeout(() => {
    intro.remove();
  }, exitDuration);

}, introDuration);