/* Tutee Connect France — motion, budget planner and lead-capture layer.
 *
 * Loaded with `defer` immediately BEFORE main.js, so every [data-lead-form] in
 * the markup (hero card, popup) is bound by main.js's existing submit handler
 * and posts to /api/enquiry exactly like the original contact form.
 * main.js fires `tc:lead` on a successful submission; this file listens for it.
 *
 * No dependencies, no inline script (the site's CSP is script-src 'self').
 */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var mq = function (q) { return window.matchMedia && window.matchMedia(q).matches; };
  var REDUCED = mq('(prefers-reduced-motion: reduce)');
  var FINE = mq('(hover: hover) and (pointer: fine)');
  var store = {
    get: function (k, s) { try { return (s ? sessionStorage : localStorage).getItem(k); } catch (e) { return null; } },
    set: function (k, v, s) { try { (s ? sessionStorage : localStorage).setItem(k, v); } catch (e) { /* private mode */ } }
  };
  var hasIO = 'IntersectionObserver' in window;
  function onView(el, cb, opts) {
    if (!el) return;
    if (!hasIO) { cb(true); return; }
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { cb(e.isIntersecting, e); });
    }, opts || { threshold: 0 }).observe(el);
  }

  /* 1. Morphing headline -------------------------------------------------- */
  (function morphHeadline() {
    var box = $('[data-morph]');
    if (!box || REDUCED) return;
    var words = $$('.tx-w', box), i = 0, timer = null, visible = true;
    function next() {
      var cur = words[i];
      i = (i + 1) % words.length;
      cur.classList.remove('is-on'); cur.classList.add('is-out');
      words[i].classList.remove('is-out'); words[i].classList.add('is-on');
      setTimeout(function () { cur.classList.remove('is-out'); }, 800);
    }
    function start() { if (!timer) timer = setInterval(next, 2800); }
    function stop() { clearInterval(timer); timer = null; }
    onView($('#home'), function (v) { visible = v; v && !document.hidden ? start() : stop(); });
    document.addEventListener('visibilitychange', function () { document.hidden || !visible ? stop() : start(); });
  })();

  /* 2. Count-up stats ----------------------------------------------------- */
  $$('[data-count]').forEach(function (el) {
    if (REDUCED) return;
    var to = parseFloat(el.getAttribute('data-count')), suf = el.getAttribute('data-suffix') || '', done = false;
    el.textContent = '0' + suf;
    onView(el, function (v) {
      if (!v || done) return;
      done = true;
      var t0 = performance.now(), dur = 1400;
      (function tick(t) {
        var p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(to * e) + suf;
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    }, { threshold: 0.6 });
  });

  /* 3. Ticker: duplicate the list once so the -50% loop is seamless -------- */
  $$('.tx-ticker-track').forEach(function (track) {
    $$('li', track).forEach(function (li) {
      var c = li.cloneNode(true); c.setAttribute('aria-hidden', 'true'); track.appendChild(c);
    });
  });

  /* 4. Pause decorative animation in sections that are off-screen ---------- */
  ['#home', '.tx-ticker', '#calculator', '#services', '#testimonials', '#faq', '#contact', '#universities', '#relocate'].forEach(function (sel) {
    var el = $(sel);
    onView(el, function (v) { el.classList.toggle('tx-paused', !v); }, { rootMargin: '120px 0px' });
  });

  /* 5. Scroll progress bar ------------------------------------------------ */
  (function progress() {
    var bar = $('.tx-progress i');
    if (!bar) return;
    var ticking = false;
    function paint() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, window.scrollY / h) : 0) + ')';
      ticking = false;
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(paint); } }, { passive: true });
    paint();
  })();

  /* 6. Heading underlines, morphing photo frames, staggered reveals -------- */
  $$('main section h2').forEach(function (h) {
    if (h.closest('#home, #calculator, #contact, .tx-card')) return;
    if (getComputedStyle(h).textAlign !== 'center') return;
    h.classList.add('tx-ul');
    onView(h, function (v) { if (v) h.classList.add('is-seen'); }, { threshold: 0.8 });
  });

  $$('#universities .reveal > div:first-child, #relocate [class*="rounded-[32px]"][class*="overflow-hidden"], #relocate [class*="rounded-[24px]"][class*="overflow-hidden"]').forEach(function (el) {
    if (!REDUCED && (el.querySelector('img') || /bg-\[url/.test(el.innerHTML + el.className))) el.classList.add('tx-morph-frame');
  });

  $$('section').forEach(function (sec) {
    var groups = {};
    $$('.reveal', sec).forEach(function (el) {
      var p = el.parentElement; if (!p) return;
      var k = p === sec ? 'root' : (p.__txId || (p.__txId = Math.random()));
      (groups[k] = groups[k] || []).push(el);
    });
    Object.keys(groups).forEach(function (k) {
      var g = groups[k];
      if (g.length < 2) return;
      g.forEach(function (el, i) { if (!el.style.transitionDelay || el.style.transitionDelay === '0s') el.style.transitionDelay = Math.min(i, 6) * 80 + 'ms'; });
    });
  });

  /* 7. Pointer effects: 3D tilt, magnetic buttons, hero parallax ---------- */
  if (FINE && !REDUCED) {
    $$('#universities [data-index], #scholarships .reveal .bg-bg-surface, .tx-calc .tx-card').forEach(function (card) {
      card.classList.add('tx-tilt');
      if (getComputedStyle(card).position === 'static') card.style.position = 'relative';
      var max = card.closest('.tx-calc') ? 3 : 8, raf = 0;
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(function () {
          card.classList.add('is-tilting');
          card.style.setProperty('--mx', x * 100 + '%'); card.style.setProperty('--my', y * 100 + '%');
          card.style.transform = 'perspective(900px) rotateX(' + ((0.5 - y) * max).toFixed(2) + 'deg) rotateY(' + ((x - 0.5) * max).toFixed(2) + 'deg) translateY(-4px)';
        });
      });
      card.addEventListener('pointerleave', function () { cancelAnimationFrame(raf); card.classList.remove('is-tilting'); card.style.transform = ''; });
    });

    $$('.tx-magnetic').forEach(function (b) {
      b.addEventListener('pointermove', function (e) {
        var r = b.getBoundingClientRect();
        b.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * 0.15).toFixed(1) + 'px,' + ((e.clientY - r.top - r.height / 2) * 0.25).toFixed(1) + 'px)';
      });
      b.addEventListener('pointerleave', function () { b.style.transform = ''; });
    });

    var hero = $('#home'), layers = $$('.tx-parallax, .tx-chip, .tx-blobs', hero), praf = 0;
    if (hero) {
      hero.addEventListener('pointermove', function (e) {
        cancelAnimationFrame(praf);
        praf = requestAnimationFrame(function () {
          var dx = e.clientX / window.innerWidth - 0.5, dy = e.clientY / window.innerHeight - 0.5;
          layers.forEach(function (l, i) {
            var d = l.classList.contains('tx-blobs') ? -14 : (l.classList.contains('tx-chip') ? 22 : 10);
            l.style.translate = (dx * d).toFixed(1) + 'px ' + (dy * d).toFixed(1) + 'px';
          });
        });
      });
    }
  }

  /* 8. Budget planner ------------------------------------------------------ */
  var budgetSummary = '';
  (function planner() {
    var root = $('#calculator');
    if (!root) return;
    var VISA = 50, VALIDATION = 100, CVEC = 105, SMIC = 12.31, MAX_HOURS = 964;
    var fee = $('#tx-fee', root), living = $('#tx-living', root), hours = $('#tx-hours', root);
    var privateRow = $('.tx-private', root);
    var out = function (k) { return $('[data-out="' + k + '"]', root); };
    var shown = {};
    var eur = function (n) { return '€' + Math.round(n).toLocaleString('en-GB'); };

    function tween(key, el, to) {
      var from = shown[key] == null ? 0 : shown[key];
      shown[key] = to;
      if (REDUCED || !el) { if (el) el.textContent = eur(to); return; }
      var t0 = performance.now(), dur = 450;
      (function f(t) {
        var p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
        el.textContent = eur(from + (to - from) * e);
        if (p < 1 && shown[key] === to) requestAnimationFrame(f);
      })(t0);
    }
    function fill(r) { var p = (r.value - r.min) / (r.max - r.min) * 100; r.style.setProperty('--p', p + '%'); }

    function calc() {
      var lv = ($('input[name="tx-level"]:checked', root) || {}).value || '3950';
      var isPrivate = lv === 'private';
      privateRow.classList.toggle('hidden', !isPrivate);
      var tuition = isPrivate ? +fee.value : +lv;
      var month = +living.value, perWeek = +hours.value;
      var livingYear = month * 12, fixed = CVEC + VISA + VALIDATION;
      var total = tuition + livingYear + fixed;
      var earn = Math.min(perWeek * 52, MAX_HOURS) * SMIC;

      out('fee').textContent = eur(+fee.value);
      out('living').textContent = eur(month);
      out('hours').textContent = perWeek + ' hrs';
      [fee, living, hours].forEach(fill);

      tween('total', out('total'), total);
      tween('tuition', out('tuition'), tuition);
      tween('livingYear', out('livingYear'), livingYear);
      tween('earn', out('earn'), earn);
      tween('net', out('net'), Math.max(0, total - earn));
      var w = function (n) { return Math.max(2, n / total * 100) + '%'; };
      $('[data-bar="tuition"]', root).style.width = w(tuition);
      $('[data-bar="living"]', root).style.width = w(livingYear);
      $('[data-bar="fees"]', root).style.width = w(fixed);

      var label = { '2902': "Bachelor's (public)", '3950': "Master's (public)", 'private': 'Grande école / private' }[lv];
      budgetSummary = label + ' | tuition ' + eur(tuition) + ' | living ' + eur(month) + '/mo | est. first year ' + eur(total) +
        ' | work ' + perWeek + ' h/wk (~' + eur(earn) + ' gross)';
    }
    root.addEventListener('input', calc);
    root.addEventListener('change', calc);
    // Animate the numbers in the first time the planner scrolls into view.
    var first = true;
    onView(root, function (v) { if (v && first) { first = false; calc(); } }, { threshold: 0.2 });
    if (!hasIO) calc();
  })();

  /* 9. Lead capture: hero card, popup, floating button, one gentle nudge --- */
  var modal = $('#tx-modal'), fab = $('.tx-fab'), heroCard = $('#lead');
  var submitted = store.get('tx_lead') === '1';
  var lastFocus = null, heroVisible = true, contactVisible = false;

  function focusFirst(scope) {
    var i = $('input[name="name"]', scope);
    if (i) setTimeout(function () { try { i.focus({ preventScroll: true }); } catch (e) { i.focus(); } }, 380);
  }
  function openModal(trigger) {
    if (!modal) return;
    lastFocus = document.activeElement;
    var sub = $('[data-modal-sub]', modal), bf = $('[data-budget-field]', modal), tf = $('[data-trigger-field]', modal);
    if (tf) tf.value = trigger || '';
    if (bf) bf.value = trigger === 'calculator' ? budgetSummary : '';
    if (sub) sub.textContent = trigger === 'calculator'
      ? 'We’ll send this budget to your counsellor and call you with scholarships and loan options that bring it down.'
      : 'Leave your details — we’ll call within one working day with your shortlist, budget and visa plan.';
    modal.hidden = false;
    document.documentElement.classList.add('tx-lock');
    requestAnimationFrame(function () { requestAnimationFrame(function () { modal.classList.add('is-open'); }); });
    focusFirst(modal);
    syncFab();
  }
  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.classList.remove('is-open');
    document.documentElement.classList.remove('tx-lock');
    setTimeout(function () { modal.hidden = true; syncFab(); }, 420);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function goHeroForm() {
    if (!heroCard) return openModal('hero');
    heroCard.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'center' });
    focusFirst(heroCard);
  }

  $$('[data-open-lead]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.preventDefault();
      var src = b.getAttribute('data-open-lead');
      if (src === 'hero') goHeroForm();
      else openModal(src);
    });
  });
  $$('[data-close-lead]').forEach(function (b) { b.addEventListener('click', closeModal); });
  document.addEventListener('keydown', function (e) {
    if (!modal || modal.hidden) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Tab') {               // keep focus inside the dialog
      var f = $$('button, input, select, a[href]', modal).filter(function (x) { return !x.disabled && x.offsetParent !== null && x.tabIndex !== -1; });
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });

  function syncFab() {
    if (!fab) return;
    var show = !submitted && !heroVisible && !contactVisible && (!modal || modal.hidden);
    fab.classList.toggle('is-visible', show);
  }
  onView(heroCard, function (v) { heroVisible = v; syncFab(); });
  onView($('#contact'), function (v) { contactVisible = v; syncFab(); });

  // One gentle, once-per-session nudge: after 60% scroll depth or a desktop
  // exit-intent, never in the first 15 s, never while someone is typing in a
  // form, and never again once they've enquired or dismissed it.
  (function nudge() {
    if (!modal || submitted || store.get('tx_nudged', true)) return;
    var armedAt = Date.now() + 15000, fired = false;
    function busy() {
      var a = document.activeElement;
      if (a && /INPUT|SELECT|TEXTAREA/.test(a.tagName)) return true;
      return $$('form[data-lead-form] input[name="name"]').some(function (i) { return i.value.trim(); });
    }
    function fire(reason) {
      if (fired || submitted || Date.now() < armedAt || !modal.hidden || busy()) return;
      fired = true; store.set('tx_nudged', '1', true);
      openModal(reason);
    }
    window.addEventListener('scroll', function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0 && window.scrollY / h > 0.6) fire('scroll-nudge');
    }, { passive: true });
    if (FINE) document.addEventListener('mouseout', function (e) { if (!e.relatedTarget && e.clientY <= 0) fire('exit-intent'); });
  })();

  document.addEventListener('tc:lead', function (e) {
    submitted = true; store.set('tx_lead', '1');
    syncFab();
    if (modal && e.detail && modal.contains(e.detail.form)) setTimeout(closeModal, 3200);
  });

  /* 10. Friendly inline validation ticks ---------------------------------- */
  var RULES = {
    name: function (v) { return v.trim().length >= 2; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); },
    phone_number: function (v) { var d = v.replace(/\D/g, ''); return d.length >= 7 && d.length <= 15; }
  };
  $$('form[data-lead-form] .tx-field input').forEach(function (inp) {
    var rule = RULES[inp.name]; if (!rule) return;
    inp.addEventListener('input', function () { inp.parentElement.classList.toggle('is-valid', rule(inp.value)); });
  });
  document.addEventListener('reset', function (e) {
    $$('.tx-field.is-valid', e.target).forEach(function (f) { f.classList.remove('is-valid'); });
  }, true);
})();
