
  // Fade-up observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Publication filter
  function filterPubs(cat, btn) {
    document.querySelectorAll('.pub-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.pub-item').forEach(item => {
      item.style.display = (cat === 'all' || item.dataset.cat === cat) ? 'block' : 'none';
    });
  }

  // Mobile menu
  function toggleMenu() {
    document.getElementById('hamburger').classList.toggle('open');
    document.getElementById('mobileMenu').classList.toggle('open');
  }
  function closeMenu() {
    document.getElementById('hamburger').classList.remove('open');
    document.getElementById('mobileMenu').classList.remove('open');
  }

  // Back to top
  window.addEventListener('scroll', () => {
    document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
  });

  // Scroll progress bar
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    document.getElementById('scrollProgress').style.width = scrolled + '%';
  });

  // Scrollspy — highlight active nav link
  const navLinks = document.querySelectorAll('nav ul li a[href^="#"], .mobile-menu a[href^="#"]');
  const spySections = [...new Set([...navLinks].map(l => l.getAttribute('href')))]
    .map(id => document.querySelector(id))
    .filter(Boolean);
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = '#' + entry.target.id;
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  spySections.forEach(s => spyObserver.observe(s));
