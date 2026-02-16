// Minimal JS: mobile nav + tab switch
(() => {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      mobileNav.hidden = isOpen;
    });

    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.hidden = true;
      });
    });
  }

  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');

  const setActive = (view) => {
    tabs.forEach(t => {
      const active = t.dataset.view === view;
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-selected', String(active));
    });
    panels.forEach(p => {
      const show = p.dataset.panel === view;
      p.hidden = !show;
    });
  };

  tabs.forEach(t => {
    t.addEventListener('click', () => setActive(t.dataset.view));
  });

  // default
  setActive('shots');
})();

