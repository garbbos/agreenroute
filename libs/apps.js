'use strict'

function include(filename) {
    if (filename) {
        var head = document.getElementsByTagName('head')[0]

        var script = document.createElement('script')
        script.src = filename
        script.type = 'text/javascript'
        head.appendChild(script)
    }
}

include('./libs/hora.js')
include('./libs/mapas.js')

var base = document.getElementById('base')
var fdatos = document.getElementById('fdatos')
var cartel = document.getElementById('cartel')
var msg = document.getElementById('msg')
var search = document.getElementById('search')

function hideform(mydiv) {
    mydiv.style.display = 'none'
    fdatos.reset()
}

function showform(mydiv) {
    mydiv.style.display = 'block'
}

function validar(myform) {
    window.console.console.log('function validar()')

    if (myform) {
        return true
    } else {
        return false
    }
}

var texto = function(message) {
    msg.textContent = message

    showform(cartel)
    setTimeout(function() {
        hideform(cartel)
    }, 3000)
    window.console.log(message)
}

function submitdata(mydiv) {
    window.console.log('function submitdata(), Name: ' + fdatos.fname.value)

    if (fdatos.fname.value && fdatos.ftel.value && fdatos.femail.value) {
        if (validar(fdatos)) {
            hideform(mydiv)
        } else {
            msg.innerHTML = 'Error en los datos.'
        }

    } else {
        msg.innerHTML = 'Error en los datos.'
    }
}

document.addEventListener('click', function(event) {
    window.console.log('Click ' + event.target.id)
    switch (event.target.id) {

        case 'base':
            hideform(base)
            break
        case 'map':
            hideform(cartel)
            break
        case 'cerrar':
            hideform(base)
            break
        case 'btn':
            showform(base)
            break
        case 'mandar':
            submitdata(base)
            break
        case 'camion':
            showform()
            break
        default:
            break
    }
})

document.addEventListener('DOMContentLoaded', function(event) {
    window.console.log('FastPaq loaded ' + event.target.URL)

    search.value = ''

})