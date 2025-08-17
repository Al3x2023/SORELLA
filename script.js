document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el mapa
    var map = L.map('map').setView([40.7128, -74.0060], 13); // Coordenadas de Nueva York como ejemplo
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        subdomains: ['a', 'b', 'c']
    }).addTo(map);

    // Agregar un marcador en el mapa
    var marker = L.marker([40.7128, -74.0060]).addTo(map);
    marker.bindPopup("<b>Pizza Hut</b><br>Ubicación ejemplo").openPopup();
});