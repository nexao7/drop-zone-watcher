var map = L.map('mapid').setView([46.603354, 1.888334], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

fetch('./dropzones.yaml')
    .then(response => response.text())
    .then(data => {
        var dropZones = jsyaml.load(data).dropZones;

        dropZones.forEach(function(dz) {
            L.marker([dz.lat, dz.lng]).addTo(map)
                .bindPopup(dz.name)
                .openPopup();
        });
    })
    .catch(error => console.log(error));
