
/*
  LUCKAS STUDIO
  Templates de prévia para o simulador.
  Compatível com gerarHTMLTemplate(dados).
*/

function gerarHTMLTemplate(dados = {}) {
  const escapar = (valor) =>
    String(valor ?? "").replace(/[&<>"']/g, (caractere) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[caractere]);

  const nome = escapar(dados.nome || "Sua Marca");
  const etiqueta = escapar(dados.etiqueta || "UMA NOVA EXPERIÊNCIA");
  const titulo = escapar(dados.titulo || "Sua próxima grande ideia começa aqui");
  const descricao = escapar(
    dados.descricao || "Descubra uma experiência criada especialmente para você."
  );
  const botao = escapar(dados.botao || "Saiba mais");

  const estilos = ["elegante", "tecnologico", "energetico"];
  const estilo = estilos.includes(dados.estilo)
    ? dados.estilo
    : "elegante";

  const cssBase = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

    * { box-sizing: border-box; }

    html { scroll-behavior: smooth; }

    body {
      margin: 0;
      font-family: 'DM Sans', Arial, sans-serif;
    }

    button {
      font: inherit;
      cursor: default;
    }

    .preview-note {
      padding: 13px 20px;
      font-size: 11px;
      text-align: center;
      letter-spacing: .04em;
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
      }
    }
  `;

  const templates = {

    elegante: {
      html: `
        <div class="fashion">
          <div class="fashion-announcement">
            UMA EXPERIÊNCIA PENSADA PARA VOCÊ
          </div>

          <header class="fashion-header">
            <div class="fashion-logo">${nome}</div>
            <div class="fashion-links">
              <span>Início</span>
              <span>Coleção</span>
              <span>Sobre</span>
            </div>
            <span class="fashion-symbol">✳</span>
          </header>

          <main>
            <section class="fashion-hero">
              <div class="fashion-copy">
                <span class="fashion-eyebrow">${etiqueta}</span>
                <h1>${titulo}</h1>
                <p>${descricao}</p>
                <button type="button">${botao} <span>↗</span></button>
                <div class="fashion-index">01 / 03 — EDIÇÃO ESPECIAL</div>
              </div>

              <div class="fashion-art">
                <div class="fashion-arch">
                  <div class="fashion-sun"></div>
                  <div class="fashion-vase">
                    <div class="fashion-stem"></div>
                    <div class="fashion-vase-body"></div>
                  </div>
                </div>
                <span class="fashion-art-label">DESIGN & IDENTIDADE</span>
              </div>
            </section>

            <section class="fashion-collection">
              <div class="fashion-collection-title">
                <span>DESCUBRA MAIS</span>
                <strong>Uma experiência exclusiva.</strong>
              </div>
              <div class="fashion-collection-grid">
                <article class="fashion-tile fashion-tile-one">
                  <span>01 / ESSÊNCIA</span>
                  <strong>Detalhes que inspiram.</strong>
                </article>
                <article class="fashion-tile fashion-tile-two">
                  <span>02 / ESTILO</span>
                  <strong>Uma nova perspectiva.</strong>
                </article>
              </div>
            </section>
          </main>
        </div>
      `,
      css: `
        .fashion {
          min-height: 100vh;
          background: #f5f0e8;
          color: #29251f;
        }

        .fashion-announcement {
          padding: 11px;
          text-align: center;
          background: #29251f;
          color: #fff;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .fashion-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 24px 6%;
          border-bottom: 1px solid #ddd5ca;
        }

        .fashion-logo {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 23px;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .fashion-links {
          display: flex;
          gap: 30px;
          font-size: 12px;
          color: #73685e;
        }

        .fashion-symbol {
          font-size: 26px;
        }

        .fashion-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 510px;
        }

        .fashion-copy {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 60px 9%;
        }

        .fashion-eyebrow {
          color: #a66a48;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .fashion h1 {
          max-width: 600px;
          margin: 24px 0;
          font-family: Georgia, serif;
          font-size: clamp(38px, 5.5vw, 78px);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -2px;
        }

        .fashion-copy p {
          max-width: 450px;
          color: #756b62;
          font-size: 15px;
          line-height: 1.8;
        }

        .fashion-copy button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          margin-top: 26px;
          padding: 16px 23px;
          border: none;
          background: #29251f;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
        }

        .fashion-index {
          margin-top: 55px;
          font-size: 10px;
          letter-spacing: 2px;
          color: #9b8f82;
        }

        .fashion-art {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
          min-height: 450px;
          background:
            radial-gradient(circle at 75% 18%, #e8d9c2, transparent 42%),
            #d8c7b2;
        }

        .fashion-arch {
          position: relative;
          width: 65%;
          height: 80%;
          overflow: hidden;
          border-radius: 220px 220px 0 0;
          background: linear-gradient(140deg, #a98569, #6e5140);
          box-shadow: 0 15px 70px #74513c55;
        }

        .fashion-sun {
          position: absolute;
          top: 12%;
          left: 25%;
          width: 50%;
          aspect-ratio: 1;
          border-radius: 50%;
          background: #e6bc87;
          box-shadow: 0 0 80px #f3d0a577;
        }

        .fashion-vase {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 45%;
          height: 60%;
          transform: translateX(-50%);
        }

        .fashion-stem {
          position: absolute;
          bottom: 35%;
          left: 50%;
          width: 3px;
          height: 60%;
          background: #394532;
          transform: rotate(-13deg);
        }

        .fashion-stem::before,
        .fashion-stem::after {
          content: "";
          position: absolute;
          width: 70px;
          height: 22px;
          border-radius: 100% 0 100% 0;
          background: #48543b;
        }

        .fashion-stem::before {
          top: 25%;
          left: 0;
          transform: rotate(-35deg);
        }

        .fashion-stem::after {
          top: 50%;
          right: 0;
          transform: rotate(150deg);
        }

        .fashion-vase-body {
          position: absolute;
          bottom: -15%;
          width: 100%;
          height: 55%;
          border-radius: 20% 20% 45% 45%;
          background: linear-gradient(100deg, #a95d3b, #df9970, #8d462f);
          box-shadow: inset -25px 0 35px #4e241d44;
        }

        .fashion-art-label {
          position: absolute;
          right: 25px;
          bottom: 25px;
          color: #fff;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .fashion-collection {
          padding: 55px 6%;
        }

        .fashion-collection-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 25px;
        }

        .fashion-collection-title span {
          font-size: 10px;
          letter-spacing: 2px;
          color: #9d735a;
        }

        .fashion-collection-title strong {
          font-family: Georgia, serif;
          font-size: 25px;
          font-weight: 400;
        }

        .fashion-collection-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .fashion-tile {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 190px;
          padding: 25px;
        }

        .fashion-tile span {
          font-size: 10px;
          letter-spacing: 2px;
        }

        .fashion-tile strong {
          font-family: Georgia, serif;
          font-size: 25px;
          font-weight: 400;
        }

        .fashion-tile-one {
          background: #e6d4c2;
        }

        .fashion-tile-two {
          background: #b9c0ad;
        }

        @media (max-width: 700px) {
          .fashion-links { display: none; }
          .fashion-hero { grid-template-columns: 1fr; }
          .fashion-copy { padding: 50px 7%; }
          .fashion-art { min-height: 340px; }
          .fashion-collection-grid { grid-template-columns: 1fr; }
          .fashion-collection-title { align-items: flex-start; flex-direction: column; }
        }
      `
    },

    tecnologico: {
      html: `
        <div class="tech">
          <header class="tech-header">
            <div class="tech-logo">
              <span class="tech-logo-icon">✦</span>
              ${nome}
            </div>
            <nav class="tech-nav">
              <span>Plataforma</span>
              <span>Recursos</span>
              <span>Contato</span>
            </nav>
            <span class="tech-status">● ONLINE</span>
          </header>

          <main>
            <section class="tech-hero">
              <div class="tech-intro">
                <span class="tech-eyebrow">✳ ${etiqueta}</span>
                <h1>${titulo}</h1>
                <p>${descricao}</p>
                <button type="button">${botao} <span>↗</span></button>
                <div class="tech-smallprint">DESIGN DIGITAL / NOVAS POSSIBILIDADES</div>
              </div>

              <div class="tech-showcase">
                <div class="tech-window">
                  <div class="tech-window-top">
                    <span class="tech-dots">● ● ●</span>
                    <span>VISÃO GERAL</span>
                    <span>⌘</span>
                  </div>
                  <div class="tech-dashboard">
                    <div class="tech-sidebar">
                      <span class="tech-side-active"></span>
                      <span></span><span></span><span></span>
                    </div>
                    <div class="tech-dashboard-main">
                      <span class="tech-dashboard-label">PAINEL DIGITAL</span>
                      <div class="tech-dashboard-title">Tudo em um só lugar.</div>
                      <div class="tech-chart">
                        <span style="height:35%"></span>
                        <span style="height:55%"></span>
                        <span style="height:42%"></span>
                        <span style="height:72%"></span>
                        <span style="height:62%"></span>
                        <span style="height:90%"></span>
                        <span style="height:78%"></span>
                      </div>
                      <div class="tech-mini-cards">
                        <div><i></i><span></span><span></span></div>
                        <div><i></i><span></span><span></span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tech-floating-card">
                  <span class="tech-floating-icon">✦</span>
                  <div><strong>Experiência inteligente</strong><small>Interface moderna</small></div>
                </div>
              </div>
            </section>

            <section class="tech-features">
              <article><span>01</span><strong>Design intuitivo</strong><p>Experiências simples e bem construídas.</p></article>
              <article><span>02</span><strong>Visão moderna</strong><p>Tecnologia com personalidade.</p></article>
              <article><span>03</span><strong>Novas ideias</strong><p>Possibilidades para evoluir.</p></article>
            </section>
          </main>
        </div>
      `,
      css: `
        .tech {
          min-height: 100vh;
          overflow: hidden;
          background: #080c18;
          color: #f8faff;
        }

        .tech-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 24px 6%;
          border-bottom: 1px solid #ffffff14;
        }

        .tech-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 21px;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .tech-logo-icon {
          color: #65a4ff;
          font-size: 27px;
        }

        .tech-nav {
          display: flex;
          gap: 28px;
          font-size: 12px;
          color: #a0abc3;
        }

        .tech-status {
          color: #69dfb5;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .tech-hero {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 30px;
          min-height: 550px;
          padding: 70px 6%;
          background:
            radial-gradient(ellipse at 85% 45%, #15366b66, transparent 45%),
            radial-gradient(ellipse at 20% 10%, #202a5655, transparent 45%);
        }

        .tech-intro {
          position: relative;
          z-index: 2;
        }

        .tech-eyebrow {
          display: inline-block;
          padding: 10px 15px;
          border: 1px solid #36548b;
          border-radius: 30px;
          color: #8ab9ff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .tech h1 {
          max-width: 660px;
          margin: 25px 0;
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(39px, 5.5vw, 75px);
          line-height: 1.04;
          letter-spacing: -3px;
          overflow-wrap: anywhere;
        }

        .tech-intro p {
          max-width: 470px;
          color: #a7b4ce;
          font-size: 16px;
          line-height: 1.8;
        }

        .tech-intro button {
          display: flex;
          align-items: center;
          gap: 35px;
          margin-top: 30px;
          padding: 17px 23px;
          border: 0;
          border-radius: 9px;
          background: #4c89ff;
          color: #fff;
          font-size: 13px;
          font-weight: 800;
        }

        .tech-smallprint {
          margin-top: 45px;
          color: #60728f;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .tech-showcase {
          position: relative;
          min-height: 390px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tech-window {
          width: min(100%, 510px);
          overflow: hidden;
          border: 1px solid #46608a;
          border-radius: 16px;
          background: #101a30;
          box-shadow: 0 35px 90px #0008, 0 0 65px #2868ff22;
          transform: perspective(1000px) rotateY(-7deg) rotateX(3deg);
        }

        .tech-window-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 18px;
          border-bottom: 1px solid #ffffff16;
          color: #8196ba;
          font-size: 9px;
          letter-spacing: 1px;
        }

        .tech-dots {
          color: #7894c3;
          letter-spacing: 4px;
        }

        .tech-dashboard {
          display: flex;
          min-height: 295px;
        }

        .tech-sidebar {
          display: flex;
          flex-direction: column;
          gap: 23px;
          width: 63px;
          padding: 25px 20px;
          border-right: 1px solid #ffffff12;
        }

        .tech-sidebar span {
          width: 20px;
          height: 8px;
          border-radius: 5px;
          background: #344765;
        }

        .tech-sidebar .tech-side-active {
          background: #6299ff;
        }

        .tech-dashboard-main {
          flex: 1;
          min-width: 0;
          padding: 25px;
        }

        .tech-dashboard-label {
          color: #7499d9;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .tech-dashboard-title {
          margin-top: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 23px;
          font-weight: 700;
        }

        .tech-chart {
          display: flex;
          align-items: flex-end;
          gap: 12px;
          height: 115px;
          margin-top: 25px;
          padding-bottom: 12px;
          border-bottom: 1px solid #ffffff22;
        }

        .tech-chart span {
          flex: 1;
          border-radius: 5px 5px 0 0;
          background: linear-gradient(#71b1ff, #2356ae);
        }

        .tech-mini-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 17px;
        }

        .tech-mini-cards > div {
          display: flex;
          flex-direction: column;
          gap: 9px;
          padding: 13px;
          border: 1px solid #ffffff13;
          border-radius: 8px;
          background: #182641;
        }

        .tech-mini-cards i {
          width: 20px;
          height: 20px;
          border-radius: 6px;
          background: #437be2;
        }

        .tech-mini-cards span {
          width: 80%;
          height: 5px;
          border-radius: 4px;
          background: #3a5278;
        }

        .tech-mini-cards span:last-child { width: 50%; }

        .tech-floating-card {
          position: absolute;
          right: -10px;
          bottom: 0;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          border: 1px solid #526b99;
          border-radius: 12px;
          background: #1a2b49;
          box-shadow: 0 18px 45px #0008;
        }

        .tech-floating-icon {
          color: #79adff;
          font-size: 25px;
        }

        .tech-floating-card div {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .tech-floating-card strong { font-size: 11px; }
        .tech-floating-card small { color: #9bacc9; font-size: 10px; }

        .tech-features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 35px 6% 65px;
        }

        .tech-features article {
          padding: 25px;
          border: 1px solid #26354f;
          border-radius: 12px;
          background: #111a2d;
        }

        .tech-features article > span {
          display: block;
          margin-bottom: 18px;
          color: #78a8ff;
          font-size: 11px;
        }

        .tech-features strong {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 19px;
        }

        .tech-features p {
          color: #9dacc6;
          font-size: 12px;
          line-height: 1.6;
        }

        @media (max-width: 700px) {
          .tech-nav { display: none; }
          .tech-hero { grid-template-columns: 1fr; padding: 50px 6%; }
          .tech-showcase { min-height: 330px; }
          .tech-window { transform: none; }
          .tech-floating-card { right: 0; bottom: -15px; }
          .tech-features { grid-template-columns: 1fr; }
        }
      `
    },

    energetico: {
      html: `
        <div class="energy">
          <header class="energy-header">
            <strong>${nome}<span>.</span></strong>
            <nav>
              <span>Início</span>
              <span>Experiência</span>
              <span>Contato</span>
            </nav>
            <span class="energy-menu">☰</span>
          </header>

          <main>
            <section class="energy-hero">
              <div class="energy-deco">MOVE / CREATE / EVOLVE</div>
              <div class="energy-copy">
                <span class="energy-eyebrow">● ${etiqueta}</span>
                <h1>${titulo}</h1>
                <p>${descricao}</p>
                <button type="button">${botao} <span>↗</span></button>
              </div>

              <div class="energy-art">
                <div class="energy-orbit energy-orbit-one"></div>
                <div class="energy-orbit energy-orbit-two"></div>
                <div class="energy-disc">
                  <div class="energy-disc-center">GO<br>BEYOND<span>↗</span></div>
                </div>
                <div class="energy-art-caption">ENERGIA PARA IR ALÉM</div>
              </div>
            </section>

            <div class="energy-marquee">
              <span>OUSADIA ✳ MOVIMENTO ✳ ATITUDE ✳ EVOLUÇÃO ✳</span>
            </div>

            <section class="energy-bottom">
              <div><span>01 / NOSSA ESSÊNCIA</span><strong>O próximo nível começa agora.</strong></div>
              <div class="energy-bottom-graphic">↗</div>
            </section>
          </main>
        </div>
      `,
      css: `
        .energy {
          min-height: 100vh;
          overflow: hidden;
          background: #f0efea;
          color: #151515;
        }

        .energy-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 22px 5%;
          border-bottom: 2px solid #151515;
        }

        .energy-header strong {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .energy-header strong span { color: #ed4b20; }

        .energy-header nav {
          display: flex;
          gap: 30px;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .energy-menu { font-size: 25px; }

        .energy-hero {
          position: relative;
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          min-height: 560px;
          background:
            linear-gradient(120deg, transparent 62%, #e6e3db 62%),
            #f0efea;
        }

        .energy-deco {
          position: absolute;
          top: 25px;
          right: 25px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;
          writing-mode: vertical-rl;
        }

        .energy-copy {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 65px 7%;
        }

        .energy-eyebrow {
          color: #e44a24;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .energy h1 {
          max-width: 750px;
          margin: 22px 0;
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(42px, 6.5vw, 92px);
          font-weight: 700;
          line-height: .97;
          letter-spacing: -4px;
          text-transform: uppercase;
          overflow-wrap: anywhere;
        }

        .energy-copy p {
          max-width: 440px;
          color: #575550;
          font-size: 15px;
          line-height: 1.7;
        }

        .energy-copy button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 35px;
          margin-top: 25px;
          padding: 18px 25px;
          border: 0;
          border-radius: 0;
          background: #ed4b20;
          color: #fff;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .energy-art {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 450px;
          overflow: hidden;
        }

        .energy-disc {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: min(76%, 390px);
          aspect-ratio: 1;
          border-radius: 50%;
          background:
            radial-gradient(circle at 28% 22%, #ffad63, transparent 35%),
            linear-gradient(135deg, #ff6533, #d72f15 65%, #821d15);
          box-shadow:
            inset -30px -30px 55px #651e1844,
            30px 35px 0 #161616;
          transform: rotate(-12deg);
        }

        .energy-disc::before {
          content: "";
          position: absolute;
          inset: 12%;
          border: 2px solid #ffffff77;
          border-radius: 50%;
        }

        .energy-disc-center {
          color: #fff;
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(36px, 5vw, 65px);
          font-weight: 700;
          line-height: .88;
          letter-spacing: -3px;
          text-align: center;
        }

        .energy-disc-center span {
          display: block;
          margin-top: 12px;
          font-size: 35px;
        }

        .energy-orbit {
          position: absolute;
          width: 95%;
          aspect-ratio: 1;
          border: 2px solid #1b1b1b;
          border-radius: 50%;
        }

        .energy-orbit-one { transform: rotate(30deg) scaleY(.65); }
        .energy-orbit-two { transform: rotate(-45deg) scaleY(.5); }

        .energy-art-caption {
          position: absolute;
          right: 20px;
          bottom: 25px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .energy-marquee {
          overflow: hidden;
          padding: 22px 0;
          background: #151515;
          color: #fff;
          text-align: center;
        }

        .energy-marquee span {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(18px, 3vw, 35px);
          font-weight: 700;
          letter-spacing: 2px;
        }

        .energy-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 55px 6%;
        }

        .energy-bottom div:first-child {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .energy-bottom span {
          color: #e44a24;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .energy-bottom strong {
          max-width: 430px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(27px, 4vw, 48px);
          line-height: 1;
          letter-spacing: -2px;
          text-transform: uppercase;
        }

        .energy-bottom-graphic {
          color: #e44a24;
          font-size: 100px;
        }

        @media (max-width: 700px) {
          .energy-header nav { display: none; }
          .energy-hero { grid-template-columns: 1fr; }
          .energy-copy { padding: 55px 6%; }
          .energy-art { min-height: 350px; }
          .energy-deco { display: none; }
          .energy-bottom-graphic { font-size: 60px; }
        }
      `
    }
  };

  const template = templates[estilo];

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>Prévia demonstrativa</title>
  <style>${cssBase}\n${template.css}</style>
</head>
<body>
  ${template.html}
  <div class="preview-note" style="background:#151515;color:#bcbcbc">
    Prévia conceitual criada pelo Luckas Studio. Elementos ilustrativos.
  </div>
</body>
</html>`;
}
