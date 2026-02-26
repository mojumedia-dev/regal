// Mobile navigation toggle
(function() {
  var toggle = document.getElementById('mobile-toggle');
  var nav = document.getElementById('main-nav');
  var header = document.getElementById('site-header');

  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('active');
      document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
  }

  // Header scroll effect
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // Contact form validation
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Message Sent!';
      btn.disabled = true;
      setTimeout(function() {
        btn.textContent = 'Send Message';
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  }
})();
