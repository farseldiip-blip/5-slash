/* FIVE SLASH — Shared interactions */
(function () {
  var drawer = document.getElementById("nav-drawer");
  var menuBtn = document.getElementById("menu-btn");
  var closeBtn = document.getElementById("close-drawer");

  function setBodyLock(locked) {
    document.documentElement.style.overflow = locked ? "hidden" : "";
  }

  function openDrawer() {
    if (!drawer) return;
    // Clear any closing styles
    drawer.style.opacity = "";
    drawer.style.transform = "";
    drawer.classList.remove("hidden");
    drawer.classList.add("flex");
    drawer.setAttribute("aria-hidden", "false");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "true");
    setBodyLock(true);
    if (closeBtn) closeBtn.focus();
  }

  function closeDrawer() {
    if (!drawer) return;
    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !drawer.classList.contains("flex")) {
      drawer.classList.add("hidden");
      drawer.classList.remove("flex");
      drawer.setAttribute("aria-hidden", "true");
      if (menuBtn) {
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.focus();
      }
      setBodyLock(false);
      return;
    }
    // Smooth fade + lift out, then hide
    drawer.style.opacity = "0";
    drawer.style.transform = "translateY(6px)";
    drawer.style.transition = "opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-premium)";
    setTimeout(function () {
      drawer.classList.add("hidden");
      drawer.classList.remove("flex");
      drawer.setAttribute("aria-hidden", "true");
      drawer.style.opacity = "";
      drawer.style.transform = "";
      drawer.style.transition = "";
      if (menuBtn) {
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.focus();
      }
      setBodyLock(false);
    }, 340);
  }

  if (menuBtn) menuBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (drawer) {
    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeDrawer);
    });
    drawer.addEventListener("click", function (e) {
      if (e.target === drawer) closeDrawer();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !drawer.classList.contains("hidden")) closeDrawer();
    });
  }

  // Smooth scrolling — handles both "#section" and "index.html#section" when target is on this page
  document.querySelectorAll('a[href*="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var href = this.getAttribute("href");
      if (!href || href === "#") { if (href === "#") e.preventDefault(); return; }
      if (href.indexOf("#") === -1) return;
      try {
        var url = new URL(this.href, location.href);
        if (url.origin !== location.origin) return;
        // Same page? (ignore pathname differences for directory index)
        var samePage = url.pathname === location.pathname
          || (url.pathname.replace(/\/index\.html$/, "/") === location.pathname.replace(/\/index\.html$/, "/"));
        if (!samePage) return;
        var target = document.querySelector(url.hash);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      } catch (_) {}
    });
  });

  // Logo on homepage — avoid full reload when already on index
  document.querySelectorAll('a[href="index.html"]').forEach(function (a) {
    if (a.getAttribute("aria-label") !== "Go to homepage") return;
    a.addEventListener("click", function (e) {
      var samePage = location.pathname.replace(/\/index\.html$/, "/").endsWith("/") || location.pathname.endsWith("index.html") || location.pathname === "/";
      // Only intercept when already on index (no hash)
      if (samePage && !location.hash) {
        var isIndex = location.pathname.endsWith("index.html") || location.pathname === "/" || location.pathname.endsWith("/");
        if (isIndex && document.querySelector('main')) {
          // If already on index.html, scroll to top instead of reloading
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          if (drawer && !drawer.classList.contains("hidden")) closeDrawer();
        }
      }
    });
  });

  // Branch slider (home — mobile)
  var branchSlider = document.getElementById("branch-slider");
  if (branchSlider) {
    document.querySelectorAll("[data-slider-pos]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        branchSlider.style.transform = "translateX(" + (btn.dataset.sliderPos === "1" ? "100%" : "0") + ")";
      });
    });
  }

  // Branch buttons (home — desktop)
  var branchBtns = document.querySelectorAll(".branch-btn");
  if (branchBtns.length) {
    branchBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        branchBtns.forEach(function (b) {
          b.classList.remove("text-primary", "italic");
          b.classList.add("text-on-background/40");
        });
        btn.classList.add("text-primary", "italic");
        btn.classList.remove("text-on-background/40");
      });
    });
  }

  // Menu lightbox (menu page — image-based)
  var lightbox = document.getElementById("menu-lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lightboxClose = document.getElementById("lightbox-close");

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
    lightbox.setAttribute("aria-hidden", "false");
    setBodyLock(true);
    if (lightboxClose) lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");
    lightbox.setAttribute("aria-hidden", "true");
    setBodyLock(false);
  }

  document.querySelectorAll("[data-lightbox]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      // Prefer the high-res fallback (jpg) if the visible img already fell back
      var src = btn.getAttribute("data-lightbox");
      var figImg = btn.parentElement ? btn.parentElement.querySelector("img") : null;
      if (figImg && figImg.currentSrc && figImg.currentSrc.indexOf(".jpg") !== -1) {
        src = figImg.currentSrc;
      } else if (figImg && figImg.getAttribute("src")) {
        src = figImg.getAttribute("src");
      }
      var alt = figImg ? figImg.alt : "";
      openLightbox(src, alt);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !lightbox.classList.contains("hidden")) closeLightbox();
    });
  }

  // Header elevation on scroll — subtle, performant (only opacity/transform)
  var header = document.getElementById("site-header");
  if (header) {
    var ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          if (window.scrollY > 20) header.classList.add("header--scrolled");
          else header.classList.remove("header--scrolled");
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Scroll reveals — staggered, respects prefers-reduced-motion, GPU-friendly (opacity/transform only)
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal, .reveal--clip, .reveal--scale, .reveal--line, .gallery-item, .img-reveal").forEach(function (el) {
      el.classList.add("is-in");
    });
  } else if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });

    document.querySelectorAll(".reveal, .reveal--clip, .reveal--scale, .reveal--line, .gallery-item, .img-reveal").forEach(function (el, i) {
      // honour inline --delay if present, otherwise use stagger from parent
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal, .reveal--clip, .reveal--scale, .reveal--line, .gallery-item, .img-reveal").forEach(function (el) {
      el.classList.add("is-in");
    });
  }
})();
