// ---------- Tech stack icons (Hero) ----------
// imported from the same devicon CDN set used on the user's GitHub profile.
const icons = [
  { pos: "top: 12%; left: 9%;",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",     alt: "Python" },
  { pos: "top: 18%; right: 8%;",    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",       alt: "NumPy" },
  { pos: "top: 78%; left: 10%;",    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",   alt: "PyCharm" },
  { pos: "bottom: 10%; right: 9%;", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg",     alt: "Pytest" },
  { pos: "top: 6%; left: 32%;",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",   alt: "PyTorch" },
  { pos: "top: 6%; right: 30%;",    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",   alt: "Jupyter" },
  { pos: "bottom: 9%; left: 26%;",  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",       alt: "HTML5" },
  { pos: "top: 40%; left: 14%;",    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",         alt: "CSS3" },
  { pos: "top: 74%; right: 24%;",   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg", alt: "Tailwind CSS", wide: true },
  { pos: "top: 90%; left: 68%;",    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { pos: "top: 50%; right: 6%;",    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { pos: "top: 55%; left: 5%;",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",      alt: "Node.js" },
  { pos: "top: 4%; left: 54%;",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",       alt: "React" },
  { pos: "bottom: 6%; right: 44%;", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",     alt: "Next.js" },
  { pos: "top: 24%; right: 20%;",   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",           alt: "PHP" }
];

const layer = document.getElementById("iconsLayer");
const items = [];

icons.forEach((data, i) => {
  const wrap = document.createElement("div");
  wrap.className = "float-icon";
  wrap.style.cssText = data.pos;
  wrap.style.animationDelay = (i * 0.07) + "s";

  const bob = document.createElement("div");
  bob.className = "bob";
  if (data.wide) bob.classList.add("wide-bob");

  const img = document.createElement("img");
  img.src = data.src;
  img.alt = data.alt;
  img.loading = "lazy";
  if (data.wide) img.classList.add("wide-logo");
  bob.appendChild(img);

  wrap.appendChild(bob);
  layer.appendChild(wrap);

  // Randomized idle-float parameters, unique per icon
  items.push({
    el: wrap,
    bob,
    ampX: 5 + Math.random() * 4,
    ampY: 6 + Math.random() * 5,
    ampR: 3 + Math.random() * 3,
    speed: 0.4 + Math.random() * 0.3,
    phase: Math.random() * Math.PI * 2
  });
});

// Single animation loop: idle ambient float + mouse repulsion,
// both applied directly to the square badge (icon stays fixed inside it).
let mouseX = -9999, mouseY = -9999;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function tick(t) {
  const time = t / 1000;

  items.forEach(({ el, bob, ampX, ampY, ampR, speed, phase }) => {
    let idleX = 0, idleY = 0, idleR = 0;

    if (!reduceMotion) {
      idleX = Math.sin(time * speed + phase) * ampX;
      idleY = Math.sin(time * speed * 1.3 + phase) * ampY;
      idleR = Math.sin(time * speed * 0.8 + phase) * ampR;
    }

    let repX = 0, repY = 0;

    if (!reduceMotion) {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = cx - mouseX;
      const dy = cy - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const radius = 150;

      if (dist < radius) {
        const force = (1 - dist / radius) * 46;
        const angle = Math.atan2(dy, dx);
        repX = Math.cos(angle) * force;
        repY = Math.sin(angle) * force;
      }
    }

    bob.style.transform = `translate(${idleX + repX}px, ${idleY + repY}px) rotate(${idleR}deg)`;
  });

  requestAnimationFrame(tick);
}

if (!reduceMotion) {
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
}

requestAnimationFrame(tick);

// ---------- Header fixo ----------

const siteHeader = document.getElementById("siteHeader");
const headerToggle = document.getElementById("headerToggle");
const mobileNav = document.getElementById("mobileNav");
const headerLinks = document.querySelectorAll(".header-nav a, .mobile-nav a");

function onScroll() {
  siteHeader.classList.toggle("scrolled", window.scrollY > 8);
}
window.addEventListener("scroll", onScroll);
onScroll();

headerToggle.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  headerToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

mobileNav.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    headerToggle.setAttribute("aria-expanded", "false");
  });
});

// Highlight the current section link while scrolling
const sections = Array.from(document.querySelectorAll("section[id]"));

function onSectionScroll() {
  const scrollPos = window.scrollY + 120;
  let currentId = sections[0] && sections[0].id;

  for (const section of sections) {
    if (section.offsetTop <= scrollPos) currentId = section.id;
  }

  headerLinks.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + currentId);
  });
}

window.addEventListener("scroll", onSectionScroll);
onSectionScroll();

// ---------- GitHub: efeito de scroll 3D (tilt + scale do card) ----------

const scrollContainer = document.getElementById("scrollContainer");
const scrollHeader = document.getElementById("scrollHeader");
const scrollCard = document.getElementById("scrollCard");

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function updateScrollCard() {
  if (!scrollContainer) return;

  const rect = scrollContainer.getBoundingClientRect();
  const vh = window.innerHeight;

  // progress 0 -> container top just entering the bottom of the viewport
  // progress 1 -> container bottom reaching the top of the viewport
  const total = rect.height + vh;
  let progress = (vh - rect.top) / total;
  progress = Math.min(1, Math.max(0, progress));

  const isMobile = window.innerWidth <= 768;
  const rotate = lerp(20, 0, progress);
  const scaleVal = isMobile ? lerp(0.85, 0.95, progress) : lerp(1.05, 1, progress);
  const translateY = lerp(0, -40, progress);

  scrollHeader.style.transform = `translateY(${translateY}px)`;
  scrollCard.style.transform = `rotateX(${rotate}deg) scale(${scaleVal})`;
}

if (scrollContainer && !reduceMotion) {
  window.addEventListener("scroll", () => requestAnimationFrame(updateScrollCard));
  window.addEventListener("resize", () => requestAnimationFrame(updateScrollCard));
  updateScrollCard();
}

// ---------- Reveal on scroll ----------

const revealEls = document.querySelectorAll(".reveal");

if (!reduceMotion && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("revealed"));
}

// ---------- Navegação flutuante e arrastável ----------

const navSections = [
  { name: "Início",      href: "#hero",         icon: '<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9h5v-5h2v5h5v-9"/>' },
  { name: "Sobre",       href: "#sobre",         icon: '<circle cx="12" cy="8" r="3.2"/><path d="M5 20c0-3.9 3.1-6.5 7-6.5s7 2.6 7 6.5"/>' },
  { name: "GitHub",      href: "#github",        icon: '<path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.11 2.91.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/>' },
  { name: "Projetos",    href: "#projetos",      icon: '<path d="M3 7h6l1.5 2H21v11H3z"/>' },
  { name: "Tecnologias", href: "#tecnologias",   icon: '<path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4.5l-3 15"/>' },
  { name: "Experiência", href: "#experiencia",   icon: '<rect x="3.5" y="7.5" width="17" height="12" rx="1.6"/><path d="M8.5 7.5v-2A1.6 1.6 0 0 1 10.1 3.9h3.8A1.6 1.6 0 0 1 15.5 5.5v2"/>' },
  { name: "Formação",    href: "#formacao",      icon: '<path d="M2 9.5 12 5l10 4.5-10 4.5-10-4.5Z"/><path d="M6 11.7v4.6c0 1.3 2.7 2.7 6 2.7s6-1.4 6-2.7v-4.6"/>' },
  { name: "Além",        href: "#alem",          icon: '<circle cx="12" cy="12" r="8.2"/><path d="m15 9-2.2 4.8L8 16l2.2-4.8L15 9Z"/>' },
  { name: "Contato",     href: "#contato",       icon: '<rect x="3" y="5.5" width="18" height="13" rx="1.8"/><path d="m4 7 8 6 8-6"/>' }
];

const navCircle = document.getElementById("navCircle");
const navOverlay = document.getElementById("navOverlay");
const navFab = document.getElementById("navFab");
const navClose = document.getElementById("navClose");
const NAV_RADIUS = 150;

navSections.forEach((item, i) => {
  const angle = (360 / navSections.length) * i;
  const link = document.createElement("a");
  link.href = item.href;
  link.className = "nav-item";
  link.style.transform = `rotate(${angle}deg) translate(${NAV_RADIUS}px) rotate(${-angle}deg)`;
  link.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">${item.icon}</svg>
    <span>${item.name}</span>
  `;
  link.addEventListener("click", closeNav);
  navCircle.appendChild(link);
});

function openNav() {
  navOverlay.classList.add("open");
  navFab.classList.add("open");
  navFab.setAttribute("aria-expanded", "true");
}

function closeNav() {
  navOverlay.classList.remove("open");
  navFab.classList.remove("open");
  navFab.setAttribute("aria-expanded", "false");
}

navOverlay.addEventListener("click", (e) => {
  if (e.target === navOverlay) closeNav();
});
navClose.addEventListener("click", closeNav);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeNav();
});

// Arrastar o botão flutuante (funciona com mouse e toque)
let dragging = false;
let moved = false;
let startX = 0, startY = 0, origLeft = 0, origTop = 0;

navFab.addEventListener("pointerdown", (e) => {
  dragging = true;
  moved = false;
  const rect = navFab.getBoundingClientRect();
  origLeft = rect.left;
  origTop = rect.top;
  startX = e.clientX;
  startY = e.clientY;
  navFab.style.left = origLeft + "px";
  navFab.style.top = origTop + "px";
  navFab.style.right = "auto";
  navFab.style.bottom = "auto";
  navFab.setPointerCapture(e.pointerId);
});

navFab.addEventListener("pointermove", (e) => {
  if (!dragging) return;
  const dx = e.clientX - startX;
  const dy = e.clientY - startY;
  if (Math.abs(dx) > 4 || Math.abs(dy) > 4) moved = true;

  const margin = 8;
  let newLeft = origLeft + dx;
  let newTop = origTop + dy;
  newLeft = Math.max(margin, Math.min(window.innerWidth - navFab.offsetWidth - margin, newLeft));
  newTop = Math.max(margin, Math.min(window.innerHeight - navFab.offsetHeight - margin, newTop));

  navFab.style.left = newLeft + "px";
  navFab.style.top = newTop + "px";
});

navFab.addEventListener("pointerup", (e) => {
  if (!dragging) return;
  dragging = false;
  navFab.releasePointerCapture(e.pointerId);
  if (!moved) {
    navOverlay.classList.contains("open") ? closeNav() : openNav();
  }
});
