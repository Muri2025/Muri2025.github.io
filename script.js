const portfolio = window.portfolioData;

const navigation = [
  { id: "home", label: "Início", href: "index.html" },
  { id: "projects", label: "Projetos", href: "projetos.html" },
  { id: "about", label: "Sobre mim", href: "sobre.html" },
  { id: "certificates", label: "Certificados", href: "certificados.html" },
  { id: "talks", label: "Palestras", href: "palestras.html" },
  { id: "resume", label: "Currículo", href: "curriculo.html" }
];

const pageMeta = {
  projects: {
    eyebrow: "Projeto em destaque",
    title: "Projetos",
    description:
      "Um espaço para reunir o que já venho construindo e as experiências que mostram minha evolução com tecnologia."
  },
  about: {
    eyebrow: "Trajetória",
    title: "Sobre mim",
    description:
      "Mais do que aprender código, gosto de entender máquinas, resolver problemas técnicos e evoluir com prática."
  },
  certificates: {
    eyebrow: "Formação complementar",
    title: "Certificados",
    description:
      "Cursos que reforçam minha base em desenvolvimento, produtividade, lógica e automação."
  },
  talks: {
    eyebrow: "Vivências",
    title: "Palestras",
    description:
      "Experiências que ampliaram meu repertório em tecnologia, comportamento, indústria e inovação."
  },
  resume: {
    eyebrow: "Objetivo profissional",
    title: "Currículo",
    description:
      "Resumo do meu perfil para oportunidades iniciais na área de TI, com foco em aprendizado contínuo e colaboração."
  }
};

function renderHeader() {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;

  const currentPage = document.body.dataset.page;

  header.innerHTML = `
    <div class="header-inner">
      <a class="brand-mark" href="index.html" aria-label="Ir para a página inicial">
        <span class="brand-badge">MC</span>
        <span class="brand-text">
          <strong>${portfolio.profile.displayName}</strong>
          <small>Portfólio de Desenvolvedor</small>
        </span>
      </a>
      <button class="menu-button" type="button" aria-expanded="false" aria-label="Abrir menu" data-menu-button>
        <span></span>
        <span></span>
      </button>
      <nav class="site-nav" data-site-nav>
        ${navigation
          .map(
            (item) => `
              <a class="${item.id === currentPage ? "is-active" : ""}" href="${item.href}" ${
                item.id === currentPage ? 'aria-current="page"' : ""
              }>
                ${item.label}
              </a>
            `
          )
          .join("")}
      </nav>
    </div>
  `;
}

function renderFooter() {
  const footer = document.querySelector("[data-site-footer]");
  if (!footer) return;
  const currentYear = new Date().getFullYear();

  footer.innerHTML = `
    <div class="footer-minimal">
      <p>© ${currentYear} Murilo Corsulini. Todos os direitos reservados.</p>
    </div>
  `;
}

function renderPage() {
  const root = document.querySelector("[data-page-root]");
  if (!root) return;

  const currentPage = document.body.dataset.page;
  const renderers = {
    home: renderHomePage,
    projects: renderProjectsPage,
    about: renderAboutPage,
    certificates: renderCertificatesPage,
    talks: renderTalksPage,
    resume: renderResumePage
  };

  const renderer = renderers[currentPage];
  if (renderer) root.innerHTML = renderer();
}

function renderHomePage() {
  return `
    <section class="hero reveal">
      <div class="hero-copy">
        <p class="eyebrow">${portfolio.home.eyebrow}</p>
        <h1>${portfolio.home.headline}</h1>
        <p class="lead">${portfolio.profile.intro}</p>
        <p class="supporting-text">${portfolio.home.summary}</p>
        <div class="action-row">
          ${renderButton("Explorar projetos", "projetos.html")}
          ${renderButton("Ver currículo", "curriculo.html", true)}
        </div>
        <div class="tag-row">
          ${portfolio.heroSignals.map((signal) => `<span class="tag">${signal}</span>`).join("")}
        </div>
      </div>
      <aside class="panel hero-panel">
        <span class="panel-kicker">Agora</span>
        <h2>${portfolio.home.panelTitle}</h2>
        <p>${portfolio.home.panelText}</p>
        <ul class="metric-list">
          <li><span>Idade</span><strong>${portfolio.profile.age}</strong></li>
          <li><span>Formação</span><strong>${portfolio.profile.course}</strong></li>
          <li><span>Objetivo</span><strong>${portfolio.profile.goal}</strong></li>
        </ul>
      </aside>
    </section>

    <section class="section reveal">
      <div class="section-heading">
        <p class="eyebrow">Destaques</p>
        <h2>O que define minha fase atual</h2>
      </div>
      <div class="card-grid">
        ${portfolio.home.highlights.map(renderInfoCard).join("")}
      </div>
    </section>

    <section class="section reveal">
      <div class="split-layout">
        <article class="panel accent-panel">
          <p class="eyebrow">${portfolio.featuredProject.tag}</p>
          <h2>${portfolio.featuredProject.name}</h2>
          <p>${portfolio.featuredProject.description}</p>
          <div class="achievement-chip">${portfolio.featuredProject.place} no hackathon</div>
          <div class="action-row compact">
            ${renderButton("Abrir material do projeto", portfolio.featuredProject.previewUrl)}
          </div>
        </article>
        <article class="panel">
          <p class="eyebrow">Visão profissional</p>
          <h2>Base técnica com vontade de crescer rápido.</h2>
          <p>${portfolio.profile.focusText}</p>
          <ul class="bullet-list">
            ${portfolio.home.pillars.map((item) => `<li><strong>${item.title}:</strong> ${item.text}</li>`).join("")}
          </ul>
        </article>
      </div>
    </section>
  `;
}

function renderProjectsPage() {
  return `
    ${renderPageHero("projects", `
      <div class="hero-float">
        <span class="float-label">Projeto vencedor</span>
        <strong>${portfolio.featuredProject.place}</strong>
        <span>${portfolio.featuredProject.event}</span>
      </div>
    `)}

    <section class="section reveal">
      <article class="project-showcase">
        <div class="project-copy">
          <p class="eyebrow">Projeto principal</p>
          <h2>${portfolio.featuredProject.name}</h2>
          <p>${portfolio.featuredProject.description}</p>
          <div class="project-meta">
            <span>${portfolio.featuredProject.event}</span>
            <span>Fatec Arthur de Azevedo</span>
            <span>Entre 10 projetos do AMS</span>
          </div>
          <div class="action-row compact">
            ${renderButton("Ver apresentação", portfolio.featuredProject.previewUrl)}
          </div>
        </div>
        <div class="panel project-panel">
          <p class="eyebrow">Aprendizados</p>
          <ul class="bullet-list">
            ${portfolio.featuredProject.learnings.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </article>
    </section>

    <section class="section reveal">
      <div class="section-heading">
        <p class="eyebrow">Próximos passos</p>
        <h2>Este portfólio está preparado para crescer</h2>
        <p class="section-copy">
          A estrutura do site já está pronta para você adicionar novos projetos, links, imagens e resultados futuros no arquivo central de conteúdo.
        </p>
      </div>
      <div class="card-grid">
        ${[
          {
            title: "Projetos escolares",
            text: "Adicione atividades, trabalhos em grupo e soluções desenvolvidas no curso."
          },
          {
            title: "Projetos pessoais",
            text: "Inclua experiências práticas em HTML, CSS, JavaScript, manutenção ou automações."
          },
          {
            title: "Resultados e conquistas",
            text: "Use esta página para destacar premiações, certificados ligados a projetos e aprendizados reais."
          }
        ]
          .map(renderInfoCard)
          .join("")}
      </div>
    </section>
  `;
}

function renderAboutPage() {
  return `
    ${renderPageHero("about", `
      <div class="hero-float">
        <span class="float-label">Perfil</span>
        <strong>${portfolio.profile.age}</strong>
        <span>${portfolio.profile.school} • ${portfolio.profile.year}</span>
      </div>
    `)}

    <section class="section reveal">
      <div class="split-layout">
        <article class="panel">
          <p class="eyebrow">Minha trajetória</p>
          ${portfolio.about.intro.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </article>
        <article class="panel">
          <p class="eyebrow">O que já venho estudando</p>
          <ul class="bullet-list">
            ${portfolio.about.studies.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      </div>
    </section>

    <section class="section reveal">
      <div class="card-grid">
        <article class="info-card emphasis-card">
          <h3>Como gosto de trabalhar</h3>
          <p>
            Tenho facilidade com tecnologia, gosto de aprender rápido e procuro sempre transformar curiosidade em prática.
          </p>
        </article>
        <article class="info-card">
          <h3>Sobre mim fora da TI</h3>
          <ul class="bullet-list">
            ${portfolio.about.personal.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
        <article class="info-card">
          <h3>Objetivo profissional</h3>
          <p>
            Se você está procurando alguém com vontade de aprender, responsabilidade e disposição para crescer, estou pronto para começar.
          </p>
        </article>
      </div>
    </section>
  `;
}

function renderCertificatesPage() {
  const totalHours = portfolio.certificates.reduce((sum, item) => sum + item.hours, 0);

  return `
    ${renderPageHero("certificates", `
      <div class="hero-float">
        <span class="float-label">Total acumulado</span>
        <strong>${totalHours}h</strong>
        <span>${portfolio.certificates.length} formações complementares</span>
      </div>
    `)}

    <section class="section reveal">
      <div class="certificate-grid">
        ${portfolio.certificates
          .map(
            (certificate) => `
              <article class="info-card certificate-card">
                <div class="card-topline">
                  <span class="hours-pill">${certificate.hours} horas</span>
                </div>
                <h3>${certificate.title}</h3>
                <p>${certificate.description}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderTalksPage() {
  return `
    ${renderPageHero("talks", `
      <div class="hero-float">
        <span class="float-label">Experiências</span>
        <strong>${portfolio.talks.length}</strong>
        <span>Palestras e vivências registradas</span>
      </div>
    `)}

    <section class="section reveal">
      <div class="timeline-list">
        ${portfolio.talks
          .map(
            (talk, index) => `
              <article class="timeline-card">
                <span class="timeline-index">0${index + 1}</span>
                <div>
                  <h3>${talk.title}</h3>
                  <p>${talk.description}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderResumePage() {
  return `
    ${renderPageHero("resume", `
      <div class="hero-float">
        <span class="float-label">Disponibilidade</span>
        <strong>Jovem aprendiz</strong>
        <span>${portfolio.resume.availability}</span>
      </div>
    `)}

    <section class="section reveal">
      <div class="split-layout">
        <article class="panel">
          <p class="eyebrow">Resumo</p>
          <h2>${portfolio.profile.goal}</h2>
          <p>${portfolio.resume.summary}</p>
          <ul class="bullet-list">
            ${portfolio.resume.strengths.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <div class="action-row compact">
            ${renderButton(portfolio.contacts.cvLabel, portfolio.contacts.cvHref, false, true)}
          </div>
        </article>
        <article class="panel">
          <p class="eyebrow">Contato</p>
          <div class="contact-list">
            ${renderContactItem("E-mail", portfolio.contacts.emailLabel, portfolio.contacts.emailHref)}
            ${renderContactItem("Telefone", portfolio.contacts.phoneLabel, portfolio.contacts.phoneHref)}
            ${renderContactItem("WhatsApp", portfolio.contacts.whatsappLabel, portfolio.contacts.whatsappHref)}
            ${renderContactItem("GitHub", portfolio.contacts.githubLabel, portfolio.contacts.githubHref)}
            ${renderContactItem("LinkedIn", portfolio.contacts.linkedinLabel, portfolio.contacts.linkedinHref)}
          </div>
        </article>
      </div>
    </section>

    <section class="section reveal">
      <div class="card-grid">
        <article class="info-card">
          <h3>Formação atual</h3>
          <p>${portfolio.profile.course} na ${portfolio.profile.school}, ${portfolio.profile.year}.</p>
        </article>
        <article class="info-card">
          <h3>Foco técnico</h3>
          <p>Manutenção, sistemas operacionais, noções de redes, suporte e desenvolvimento web básico.</p>
        </article>
        <article class="info-card">
          <h3>Perfil</h3>
          <p>Curioso, responsável, com energia para aprender rápido e construir experiência profissional consistente.</p>
        </article>
      </div>
    </section>
  `;
}

function renderPageHero(pageKey, sideContent) {
  const meta = pageMeta[pageKey];

  return `
    <section class="page-hero reveal">
      <div>
        <p class="eyebrow">${meta.eyebrow}</p>
        <h1>${meta.title}</h1>
        <p class="lead">${meta.description}</p>
      </div>
      <aside class="panel hero-side-panel">
        ${sideContent}
      </aside>
    </section>
  `;
}

function renderInfoCard(item) {
  return `
    <article class="info-card">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `;
}

function renderButton(label, href, secondary = false, allowEmpty = false) {
  const isValid = Boolean(href);

  if (!isValid && allowEmpty) {
    return `<span class="button ${secondary ? "button-secondary" : ""} button-disabled">${label}</span>`;
  }

  if (!isValid) return "";

  const isExternal = /^https?:\/\//.test(href);
  return `
    <a class="button ${secondary ? "button-secondary" : ""}" href="${href}" ${
      isExternal ? 'target="_blank" rel="noreferrer"' : ""
    }>
      ${label}
    </a>
  `;
}

function renderContactItem(label, value, href) {
  const hasHref = Boolean(href);
  return `
    <div class="contact-item">
      <span>${label}</span>
      ${
        hasHref
          ? `<a href="${href}" ${/^https?:\/\//.test(href) ? 'target="_blank" rel="noreferrer"' : ""}>${value}</a>`
          : `<strong class="placeholder-text">${value}</strong>`
      }
    </div>
  `;
}

function setupMenu() {
  const button = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-site-nav]");
  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open");
    document.body.classList.toggle("menu-open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      button.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  elements.forEach((element) => observer.observe(element));
}

function setupSpotlight() {
  document.addEventListener("pointermove", (event) => {
    document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
  });
}

renderHeader();
renderPage();
renderFooter();
setupMenu();
setupReveal();
setupSpotlight();
