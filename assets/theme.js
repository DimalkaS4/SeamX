document.addEventListener('DOMContentLoaded', function () {
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored ? stored : (prefersDark ? 'dark' : 'light');

  function applyTheme(name) {
    if (name === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
  }

  applyTheme(initial);

  // Idempotent binding helpers for dynamic header injection
  function bindThemeToggles(scope) {
    const toggles = (scope || document).querySelectorAll('#theme-toggle, #theme-toggle-mobile');
    toggles.forEach((btn) => {
      if (btn.dataset.themeBound) return; // already bound
      const sun = btn.querySelector('#sun-icon, #sun-icon-mobile');
      const moon = btn.querySelector('#moon-icon, #moon-icon-mobile');

      function updateIcons() {
        const isDark = root.getAttribute('data-theme') === 'dark' || root.classList.contains('dark');
        if (sun) sun.classList.toggle('hidden', !isDark);
        if (moon) moon.classList.toggle('hidden', isDark);
        btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      }

      updateIcons();

      btn.addEventListener('click', function () {
        const now = (root.getAttribute('data-theme') === 'dark' || root.classList.contains('dark')) ? 'light' : 'dark';
        applyTheme(now);
        localStorage.setItem('theme', now);
        updateIcons();
        // update all toggles so both desktop and mobile sync
        bindThemeToggles(document);
      });

      btn.dataset.themeBound = '1';
    });
  }

  function bindMobileMenu(scope) {
    const rootScope = scope || document;
    const btn = rootScope.querySelector('#mobile-menu-button');
    const menu = rootScope.querySelector('#mobile-menu');
    if (!btn || !menu) return;
    if (btn.dataset.menuBound) return;

    // initialize ARIA state
    btn.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');

    btn.addEventListener('click', function () {
      const isHidden = menu.classList.toggle('hidden');
      // when classList.toggle returns true it means class was added -> hidden
      const expanded = (!menu.classList.contains('hidden')) ? 'true' : 'false';
      btn.setAttribute('aria-expanded', expanded);
      menu.setAttribute('aria-hidden', (expanded === 'true') ? 'false' : 'true');
    });

    btn.dataset.menuBound = '1';
  }

  function initBindings(scope) {
    bindThemeToggles(scope);
    bindMobileMenu(scope);
  }

  // Initialize on DOMContentLoaded for any static elements
  initBindings(document);

  // Observe for injected header content (e.g., #site-header) and bind when it appears
  const observerTarget = document.getElementById('site-header') || document.body;
  const mo = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.addedNodes && m.addedNodes.length) {
        // Attempt to bind within the injected site-header specifically
        const headerContainer = document.getElementById('site-header');
        if (headerContainer && headerContainer.innerHTML.trim().length) {
          initBindings(headerContainer);
        } else {
          initBindings(document);
        }
      }
    }
  });
  mo.observe(observerTarget, { childList: true, subtree: true });

  // Expose API
  window.seamxTheme = {
    set: function (name) { applyTheme(name); localStorage.setItem('theme', name); },
    get: function () { return root.getAttribute('data-theme') || (root.classList.contains('dark') ? 'dark' : 'light'); },
    init: initBindings
  };
});
