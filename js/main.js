// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll(
  '.service-card, .process-step, .price-card, .testimonial, .payment-card, .philosophy-inner, .section-header'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

// ── NAV: shrink on scroll ──
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.borderBottomColor = 'rgba(232, 224, 212, 0.12)';
  } else {
    nav.style.borderBottomColor = 'rgba(232, 224, 212, 0.08)';
  }
}, { passive: true });

// ── SMOOTH ANCHOR OFFSET (accounts for fixed nav) ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
