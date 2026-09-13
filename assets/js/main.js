// Amphibious Achievement — site interactions: mobile nav, scroll header, slideshows, lightbox.
(function () {
  var body = document.body;

  // Mobile side navigation
  function setNav(open) {
    body.classList.toggle('nav-open', open);
    document.querySelectorAll('.mobile-nav-toggle').forEach(function (btn) {
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  document.querySelectorAll('.mobile-nav-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () { setNav(!body.classList.contains('nav-open')); });
  });
  document.querySelectorAll('.body-overlay, #sidecarNav .close-nav').forEach(function (el) {
    el.addEventListener('click', function () { setNav(false); });
  });
  document.querySelectorAll('#sidecarNav .folder-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function () { toggle.parentElement.classList.toggle('open'); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setNav(false);
  });

  // Fixed header appears once the original header has scrolled out of view
  var header = document.getElementById('header');
  function onScroll() {
    var threshold = header ? header.offsetHeight + 200 : 300;
    body.classList.toggle('scrolled', window.scrollY > threshold);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Slideshows
  document.querySelectorAll('.slideshow').forEach(function (show) {
    var slides = show.querySelectorAll('.slide');
    var thumbs = show.querySelectorAll('.thumbnails button');
    var index = 0;
    function go(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (s, n) { s.classList.toggle('active', n === index); });
      thumbs.forEach(function (t, n) { t.classList.toggle('active', n === index); });
    }
    var prev = show.querySelector('.prev');
    var next = show.querySelector('.next');
    if (prev) prev.addEventListener('click', function () { go(index - 1); });
    if (next) next.addEventListener('click', function () { go(index + 1); });
    thumbs.forEach(function (t, n) { t.addEventListener('click', function () { go(n); }); });
    go(0);

    // Auto-advance, pausing while the pointer is over the slideshow
    var timer;
    function start() { stop(); timer = setInterval(function () { go(index + 1); }, 5000); }
    function stop() { clearInterval(timer); }
    show.addEventListener('mouseenter', stop);
    show.addEventListener('mouseleave', start);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) start();
  });

  // Lightbox for photo grids
  var groups = document.querySelectorAll('[data-lightbox]');
  groups.forEach(function (group) {
    var images = Array.prototype.slice.call(group.querySelectorAll('img'));
    images.forEach(function (img, n) {
      img.addEventListener('click', function () { openLightbox(images, n); });
    });
  });

  function openLightbox(images, start) {
    var index = start;
    var box = document.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.innerHTML =
      '<img alt="">' +
      '<button class="lb-close" aria-label="Close">&times;</button>' +
      '<button class="lb-prev" aria-label="Previous">&#8249;</button>' +
      '<button class="lb-next" aria-label="Next">&#8250;</button>';
    var big = box.querySelector('img');
    function show(i) {
      index = (i + images.length) % images.length;
      big.src = images[index].currentSrc || images[index].src;
      big.alt = images[index].alt;
    }
    function close() {
      document.removeEventListener('keydown', onKey);
      box.remove();
    }
    function onKey(e) {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(index - 1);
      if (e.key === 'ArrowRight') show(index + 1);
    }
    box.querySelector('.lb-close').addEventListener('click', close);
    box.querySelector('.lb-prev').addEventListener('click', function () { show(index - 1); });
    box.querySelector('.lb-next').addEventListener('click', function () { show(index + 1); });
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    document.addEventListener('keydown', onKey);
    show(index);
    document.body.appendChild(box);
    box.querySelector('.lb-close').focus();
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
