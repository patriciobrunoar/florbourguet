/* Flor Bourguet — comportamiento del sitio */
(function () {
  "use strict";

  /* ------------------------------------------------------------ Menú móvil */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar el menú" : "Abrir el menú");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ------------------------------------------- Aparición suave al scrollear */
  var reveals = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    Array.prototype.forEach.call(reveals, function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    Array.prototype.forEach.call(reveals, function (el) { io.observe(el); });
  }

  /* --------------------------------------------------------- Formulario --- */
  /* Mientras no haya un endpoint configurado, el formulario arma un mail con
     los datos cargados para que ningún mensaje se pierda. */
  var form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      if (form.action.indexOf("TU_ID") === -1) return; // endpoint real: enviar normalmente

      e.preventDefault();

      var status = document.getElementById("form-status");
      var data = new FormData(form);
      var asunto = data.get("asunto") || "Consulta desde florbourguet.com.ar";
      var cuerpo =
        "Nombre: " + (data.get("nombre") || "") + "\n" +
        "Email: " + (data.get("email") || "") + "\n\n" +
        (data.get("mensaje") || "");

      window.location.href =
        "mailto:" + form.dataset.fallbackEmail +
        "?subject=" + encodeURIComponent(asunto) +
        "&body=" + encodeURIComponent(cuerpo);

      if (status) {
        status.textContent = "Se abrió tu programa de correo con el mensaje listo para enviar.";
      }
    });
  }
})();
