// app.js - Vanilla JS for SPA interactions: smooth scroll, reveal, active nav, parallax, projects, form validation
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', href);
      }
    });
  });

  // Reveal on scroll (IntersectionObserver)
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // animate progress bars when skills visible
        if (entry.target.id === 'skills') {
          document.querySelectorAll('.progress__bar').forEach(el => {
            const p = el.dataset.progress || 60;
            el.style.width = p + '%';
          });
        }
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => revealObserver.observe(r));

  // Active nav link while scrolling
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector('.nav-link[href="#' + id + '"]');
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        if (link) link.classList.add('active');
      }
    });
  }, { threshold: 0.45 });

  sections.forEach(s => navObserver.observe(s));

  // Hero parallax
  const heroPhoto = document.getElementById('hero-photo');
  if (heroPhoto) {
    window.addEventListener('scroll', () => {
      const rect = document.getElementById('hero').getBoundingClientRect();
      const offset = Math.max( -100, Math.min(100, -rect.top / 8 ));
      heroPhoto.style.transform = `translateY(${offset}px)`;
    });
  }

  // Simple projects data + render + filter
  const projects = [
    { id:1, title: 'Portal UKM Kampus', desc: 'Website portal untuk menampilkan informasi UKM, galeri kegiatan, dan fitur admin pengelolaan data.', img:'aseets/1.png', stack:['javascript','uiux'] , live:'#', github:'#' },
    { id:2, title: 'Pondok Tahfidz', desc: 'Website profil pondok berisi informasi program, kegiatan, dan pendaftaran santri secara online.', img:'aseets/2.png', stack:['javascript','react'] , live:'#', github:'#' },
    { id:3, title: 'Seminar Nasional Teknologi', desc: 'Landing page seminar dengan detail acara, pembicara, dan tombol pendaftaran yang mudah diakses.', img:'aseets/3.png', stack:['uiux','react'] , live:'#', github:'#' },
    // { id:4, title: 'Data Dashboard', desc: 'Interactive charts & filters for analytics.', img:'assets/project-4.jpg', stack:['javascript'] , live:'#', github:'#' },
    // { id:5, title: 'Design System', desc: 'Reusable components and tokens.', img:'assets/project-5.jpg', stack:['uiux'] , live:'#', github:'#' }
  ];

  const grid = document.getElementById('projects-grid');
  function renderProjects(list){
    grid.innerHTML = '';
    list.forEach(p => {
      const card = document.createElement('article');
      card.className = 'project__card';
      card.setAttribute('data-stack', p.stack.join(' '));
      card.innerHTML = `
        <div class="project__media"><img src="${p.img}" alt="${p.title}"/></div>
        <div class="project__body">
          <h3 class="project__title">${p.title}</h3>
          <p class="project__desc">${p.desc}</p>
          <div class="project__stack">${p.stack.map(s=>`<span class="stack__tag">${s}</span>`).join('')}</div>
          
        </div>
      `;
      grid.appendChild(card);
    });
  }

  renderProjects(projects);

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      if (f === 'all') renderProjects(projects);
      else renderProjects(projects.filter(p => p.stack.includes(f)));
    });
  });

  // Contact form simple validation
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = '';
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      status.textContent = 'Mohon isi semua field.';
      status.style.color = '#f8d7da';
      return;
    }
    if (!emailRegex.test(email)) {
      status.textContent = 'Alamat email tidak valid.';
      status.style.color = '#f8d7da';
      return;
    }

    // simulate sending
    status.textContent = 'Pesan terkirim! Terima kasih.';
    status.style.color = '#d6f5d6';
    form.reset();
  });

  // Minor: add subtle hover effect for photo
  const photoWrap = document.getElementById('hero-photo-wrap');
  if (photoWrap){
    photoWrap.addEventListener('mouseenter', () => photoWrap.style.transform = 'translateY(-6px) rotate(-1deg)');
    photoWrap.addEventListener('mouseleave', () => photoWrap.style.transform = 'translateY(0) rotate(0)');
  }

});