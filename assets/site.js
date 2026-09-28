// LuckyLab shared behavior: theme toggle and mobile menu.
// The theme itself is applied by a tiny inline script in <head> (before paint).
(function () {
  var root = document.documentElement;

  function currentTheme() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function updateThemeButtons() {
    var label = currentTheme() === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환';
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);
    });
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('lotto_theme', theme); } catch (e) {}
    updateThemeButtons();
    // Pages with embeds (e.g. Disqus) listen for this to restyle themselves
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: theme } }));
  }

  window.toggleSiteTheme = function () {
    setTheme(currentTheme() === 'light' ? 'dark' : 'light');
  };

  document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', window.toggleSiteTheme);
  });
  updateThemeButtons();

  // Mobile menu
  var menuBtn = document.querySelector('[data-menu-toggle]');
  var nav = document.getElementById('siteNav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.focus();
      }
    });
  }
})();
