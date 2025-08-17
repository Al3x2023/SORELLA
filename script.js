document.addEventListener('DOMContentLoaded', () => {
  // Toggle menú móvil
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    toggle.innerHTML = nav.classList.contains('show')
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Cerrar menú al navegar
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('show');
      toggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // Botones "Order" en cards -> preseleccionar producto y llevar a #order
  const orderButtons = document.querySelectorAll('.btn-order');
  const itemInput = document.getElementById('itemInput');
  orderButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const product = btn.dataset.pizza || btn.previousElementSibling?.textContent?.trim() || 'Custom Pizza';
      if (itemInput) itemInput.value = product;
      // dejar que el href navegue a #order (ya tienes scroll-behavior: smooth)
    });
  });

  // Enviar pedido (demo)
  const sendBtn = document.getElementById('sendOrder');
  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      const product = itemInput?.value || 'Pizza';
      alert(`✅ Pedido enviado (demo): ${product}. ¡Gracias!`);
    });
  }
});
