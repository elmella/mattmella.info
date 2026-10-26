import "./style.css";
import { dashboards, education, experience, profile, projects, type Dashboard, type Link } from "./content";

const esc = (s: string): string =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const link = ({ label, href }: Link): string => {
  const external = href.startsWith("http");
  return `<a href="${esc(href)}"${external ? ' target="_blank" rel="noopener"' : ""}>${esc(label)}</a>`;
};

const header = `
  <header>
    <h1>${esc(profile.name)}</h1>
    <p class="muted">${esc(profile.headline)}</p>
    <nav>${profile.links.map(link).join(" · ")}</nav>
  </header>`;

const about = `
  <section id="about">
    <h2>About</h2>
    ${profile.about.map((p) => `<p>${esc(p)}</p>`).join("")}
  </section>`;

const experienceHtml = `
  <section id="experience">
    <h2>Experience</h2>
    ${experience
      .map((r) => {
        const org = r.href ? link({ label: r.org, href: r.href }) : esc(r.org);
        const note = r.orgNote ? ` <span class="muted">(${esc(r.orgNote)})</span>` : "";
        const meta = [r.location, r.dates].filter(Boolean).map(esc).join(" · ");
        const points = r.points.length ? `<ul>${r.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : "";
        return `
          <div class="item">
            <div class="row"><strong>${esc(r.title)}</strong>, ${org}${note}</div>
            ${meta ? `<div class="muted small">${meta}</div>` : ""}
            ${points}
            ${r.links?.length ? `<div class="small">${r.links.map(link).join(" · ")}</div>` : ""}
          </div>`;
      })
      .join("")}
  </section>`;

const projectsHtml = `
  <section id="projects">
    <h2>Projects &amp; Publications</h2>
    ${projects
      .map((p) => {
        const links = p.links;
        return `
          <div class="item">
            <div class="row"><strong>${esc(p.name)}</strong> <span class="muted">· ${esc(p.tagline)}</span></div>
            ${p.title ? `<div class="small"><em>${esc(p.title)}</em></div>` : ""}
            <p>${esc(p.description)}</p>
            ${links.length ? `<div class="small">${links.map(link).join(" · ")}</div>` : ""}
          </div>`;
      })
      .join("")}
  </section>`;

const educationHtml = `
  <section id="education">
    <h2>Education</h2>
    <div class="row"><strong>${esc(education.school)}</strong></div>
    <div>${esc(education.degree)} <span class="muted">· ${esc(education.dates)}</span></div>
    ${education.notes.map((n) => `<div class="muted small">${esc(n)}</div>`).join("")}
  </section>`;

const footer = `<footer class="muted small">© ${new Date().getFullYear()} ${esc(profile.name)}</footer>`;

const homePage = (): string => header + about + experienceHtml + projectsHtml + educationHtml + footer;

const dashboardPage = (p: Dashboard): string => `
  <p class="small"><a href="#/experience">← Back to ${esc(profile.name)}</a></p>
  <h1>${esc(p.name)}</h1>
  <p class="muted">${esc(p.tagline)}</p>
  <p>${esc(p.description)}</p>
  <iframe class="dashboard" src="${esc(p.src)}" title="${esc(p.name)} dashboard" loading="lazy" allowfullscreen></iframe>
  <p class="small muted">Trouble loading? <a href="${esc(p.src.split("?")[0])}" target="_blank" rel="noopener">Open on Tableau Public</a>.</p>`;

const app = document.querySelector<HTMLDivElement>("#app")!;

const render = (): void => {
  const slug = location.hash.replace(/^#\/?/, "");
  const project = dashboards.find((d) => d.slug === slug);
  app.className = project ? "wide" : "";
  app.innerHTML = project ? dashboardPage(project) : homePage();
  document.title = project ? `${project.name} · ${profile.name}` : profile.name;
  if (!project && slug) document.getElementById(slug)?.scrollIntoView();
  else window.scrollTo(0, 0);
};

window.addEventListener("hashchange", render);
render();
