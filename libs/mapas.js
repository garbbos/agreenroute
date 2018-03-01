/*global L, texto */
var coor = document.getElementById('coor')
var marker, circle
var radius = 125
var coordenada = {
    lat: 40.40,
    lng: -3.70
}

function punto(data) {
    if (data) {
        coor.innerHTML = data.lat.toFixed(4) + ' | ' + data.lng.toFixed(4)
    }
}

function onMapClick(e) {
    punto(e.latlng)
}

function logEvent(e) {
    //window.console.log('Control: ' + L.Control)

    if (e.type == 'locationerror') {
        window.console.log('Error: not Location Found.')
        mymap.panTo(new L.latLng(coordenada))
    }

    if (e.type == 'locationfound') {
        window.console.log('Precision: ' + e.accuracy)
        window.console.log('Location: ' + coordenada.lat + ' | ' + coordenada.lng)

        if (radius > e.accuracy) {
            coordenada = e.latlng
            circle = L.circle(coordenada, radius)
            mymap.addLayer(circle)
        }

        marker.setLatLng(coordenada).update()

    }

    punto(coordenada)
}

if (L) {
    var osmurl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    var osmattri = 'Map data &copy;<a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    var osm = new L.TileLayer(osmurl, { attribution: osmattri, maxZoom: 18 })

    var mymap = L.map('map')
    mymap.addLayer(osm)

    mymap.on('click', onMapClick)
    mymap.on('locationerror', logEvent)
    mymap.on('locationfound', logEvent)

    marker = L.marker(coordenada)
    mymap.addLayer(marker)

    mymap.locate({ setView: true }, 16, { animation: true })
    window.console.log('Zoom: ' + mymap.getZoom())

} else {
    texto('Error: Loading Map...')
}