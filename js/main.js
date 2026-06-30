/* Valley to the Mountain — site interactions */
(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Current year in footer ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Application form: validation + friendly success ---- */
  var form = document.querySelector("[data-app-form]");
  if (form) {
    var success = document.querySelector("[data-form-success]");

    form.addEventListener("submit", function (ev) {
      // Mark fields touched so :invalid styling can show.
      form.querySelectorAll("input, select, textarea").forEach(function (f) {
        f.classList.add("touched");
      });

      if (!form.checkValidity()) {
        ev.preventDefault();
        var firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) {
          firstInvalid.focus();
          firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return;
      }

      // If no real backend is wired up yet, show an in-page confirmation
      // so testing the page never loses the visitor. Remove this block once
      // a form endpoint (Netlify Forms / Formspree) is connected — see README.
      if (form.getAttribute("data-demo") === "true") {
        ev.preventDefault();
        if (success) {
          form.style.display = "none";
          success.style.display = "block";
          success.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    });
  }
})();
