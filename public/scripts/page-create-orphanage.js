// CREATE MAP
const map = L.map('mapid').setView([-27.2194939,-49.6447629], 15);

// CREATE AND ADD TITLELAYER
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// CREATE ICON
const icon = L.icon({
    iconUrl: '  /images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

// CREATE AND ADD MARKER
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    /* REMOVE ICON */
    marker && map.removeLayer(marker);

    /* ADD ICON LAYER */
    marker = L.marker([lat, lng], { icon }).addTo(map);

})

/* ADICIONAR O CAMPO DE FOTOS */
function addPhotoField() {
    /* PEGAR O CONTAINER DE FOTOS #IMAGES */
    const container = document.querySelector('#images');

    /* PEGAR O CONTAINER PARA DUPLICAR .NEW-IMAGE */
    const fieldsContainer = document.querySelectorAll('.new-upload');
    
    /* REALIZAR O CLONE DA ÚLTIMA IMAGEM ADICIONADA */
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    /* VERIFICAR SE O CAMPO ESTÁ VAZIO, SE SIM, NÃO ADICIONAR AO CONTAINER DE IMAGENS */
    const input = newFieldContainer.children[0];
    if (input.value == '') {
        return;
    }
    /* LIMPAR O CAMPO ANTES DE ADICIONAR AO CONTAINER DE IMAGENS */
    input.value = "";

    /* ADICIONAR O CLONE AO CONTAINER DE #IMAGES */
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2 ){
        span.parentNode.children[0].value = '';
        return
    }

    span.parentNode.remove();
}


/* SELECT YES OR NO */

function toggleSelect(event) {
    document.querySelectorAll('.button-select button')
    .forEach( function(button) {
        button.classList.remove('active')
    });

    const button = event.currentTarget;
    button.classList.add('active');

    const input = document.querySelector('[name="open_on_weekends"]');
    input.value = button.dataset.value;
}