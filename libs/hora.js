exports.time = function(div) {
    'use strict'

    if (div && typeof div == object) {

        var setTime = function() {
            var d = new Date()
            var h = d.getHours()
            var m = d.getMinutes()
            var s = d.getSeconds()
            if (h < 10) { h = '0' + h }
            if (m < 10) { m = '0' + m }
            if (s < 10) { s = '0' + s }

            hora.innerHTML = h + ':' + m + ':' + s + ' '
            setInterval(function() {
                setTime()
            }, 1000)
        }

        setTime()
    }
}