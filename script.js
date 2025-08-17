// --- Toggle del menú en móvil ---
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("header nav");
  const toggleBtn = document.createElement("button");
  toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
  toggleBtn.classList.add("menu-toggle");

  // Insertar botón de menú en header
  document.querySelector("header").insertBefore(toggleBtn, nav);

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggleBtn.innerHTML = nav.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // --- Scroll suave a secciones ---
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        });
        nav.classList.remove("active"); // cerrar menú en móvil
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });

  // --- Botones de ordenar ---
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      alert("✅ Gracias por tu interés. El sistema de pedidos estará disponible pronto.");
    });
  });
});
