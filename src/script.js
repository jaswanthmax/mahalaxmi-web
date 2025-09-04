const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('mobile-nav');
const yearEl = document.getElementById('year');

menuBtn?.addEventListener('click', () => {
  const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!isOpen));
  if (nav.hasAttribute('hidden')) nav.removeAttribute('hidden');
  else nav.setAttribute('hidden', '');
});

yearEl.textContent = String(new Date().getFullYear());
